#I "lib"
#I "bindings"
#r "FunScript.dll"
#r "FunScript.Interop.dll"
#r "FunScript.TypeScript.Binding.lib.dll"
#r "FunScript.TypeScript.Binding.react.dll"

open System
open System.Collections.Generic
open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.React

[<ReflectedDefinition>]
module Page =
    type Element with
        [<FunScript.JSEmitInline("({0}.value)")>]
        member __.value with get() : string = failwith "never" and set (v : string) : unit = failwith "never"

    module JS =
        [<JSEmitInline("this")>]
        let this<'O> :  'O = failwith "JS"

    let classContainer = new Dictionary<string, ComponentClass<obj>>()

    let createObject (lst : list<string * 'a>) =
        let t = Dictionary<string,obj>()
        lst |> List.iter(fun i -> t.Add(fst i, snd i ))
        t

    module Comment =
        type CommentProps = {Text : string; Author : string}
        type CommentState () = class end
        type Comment () =
            interface ComponentSpec<CommentProps, CommentState>
            interface Component<CommentProps, CommentState>

        let private render (c : Comment) =
            let attr = [("className", "comment")] |> createObject
            let attr2 = [("className", "commentAuthor")] |> createObject

            Globals.createElement("div", attr,
                Globals.createElement("h2", attr2, c.props.Author ),
                Globals.createElement("span", null, c.props.Text))

        let register () =
            let c = Comment()
            c.``render <-``(fun _ -> JS.this |> render |> unbox<ReactElement<_>>)
            let clazz = Globals.createClass(unbox<ComponentSpec<_,_>>(c))
            classContainer.Add("comment", clazz)

    module CommentList =
        type CommentListProps = {Data : Comment.CommentProps[]}
        type CommentListState () = class end
        type CommentList () =
            interface ComponentSpec<CommentListProps, CommentListState>
            interface Component<CommentListProps, CommentListState>

        let private render (cl : CommentList) =
            let attr = [("className", "commentList")] |> createObject

            let comment = classContainer.["comment"]
            let commentNodes =  cl.props.Data |> Array.map(fun n -> Globals.createElement(comment, n ))
            Globals.createElement("div", attr, commentNodes )

        let register () =
            let cl = CommentList()
            cl.``render <-``(fun _ -> JS.this |> render |> unbox<ReactElement<_>>)
            let clazz = Globals.createClass (unbox<ComponentSpec<_,_>>(cl))
            classContainer.Add("commentList", clazz)

    module CommentForm =
        type CommentFormProps = { onCommentSubmit : Comment.CommentProps -> unit }
        type CommentFormState () = class end
        type CommentForm () =
            interface ComponentSpec<CommentFormProps, CommentFormState>
            interface Component<CommentFormProps, CommentFormState>

        let private handleSubmit (cf : CommentForm) (e : FormEvent) =
            e.preventDefault()
            let author = Globals.findDOMNode(cf.refs.["author"])
            let text = Globals.findDOMNode(cf.refs.["text"])
            cf.props.onCommentSubmit {Comment.Author = author.value.Trim(); Comment.Text = text.value.Trim() }
            author.value <- ""
            text.value <- ""

        let private render (cf : CommentForm) =
            let attr = [("className", unbox<obj>("commentForm")); ("onSubmit", unbox<obj>(handleSubmit cf) )] |> createObject
            let attr2 = [("type", "text"); ("placeholder", "Your name"); ("ref", "author")] |> createObject
            let attr3 = [("type", "text"); ("placeholder", "Say something..."); ("ref", "text")] |> createObject
            let attr4 = [("type", "submit"); ("value", "Post");] |> createObject

            Globals.createElement("form", attr,
                Globals.createElement("input", attr2),
                Globals.createElement("input", attr3),
                Globals.createElement("input", attr4))

        let register () =
            let cf = CommentForm()
            cf.``render <-``(fun _ -> JS.this |> render |> unbox<ReactElement<_>>)
            let clazz = Globals.createClass (unbox<ComponentSpec<_,_>>(cf))
            classContainer.Add("commentForm", clazz)

    module CommentBox =
        type CommentBoxProps () = class end
        type CommentBoxState = {Data : Comment.CommentProps[]}
        type CommentBox () =
            interface ComponentSpec<CommentBoxProps, CommentBoxState>
            interface Component<CommentBoxProps, CommentBoxState>

        let private handle (cb : CommentBox) (cp : Comment.CommentProps) =
            let comments = cb.state.Data
            let comments' = Array.append comments [|cp|]
            cb.setState({Data = comments'})

        let private getInitialState () =
            {Data = [||]}

        let private render (cb : CommentBox) =
            let attr = [("className", "commentBox")] |> createObject
            
            let commentList = classContainer.["commentList"]
            let commentForm = classContainer.["commentForm"]

            Globals.createElement("div", attr,
                Globals.createElement("h1", null, "Comments"),
                Globals.createElement(commentList, {CommentList.Data = cb.state.Data}),
                Globals.createElement(commentForm, {CommentForm.onCommentSubmit = handle cb})
            )

        let register () =
            let cb = CommentBox()
            cb.``render <-``(fun _ -> JS.this |> render |> unbox<ReactElement<_>>)
            cb.``getInitialState <-``(fun _ -> getInitialState ())
            let clazz = Globals.createClass (unbox<ComponentSpec<_,_>>(cb))
            classContainer.Add("commentBox", clazz)


    let app () =
        do Comment.register()
        do CommentList.register()
        do CommentForm.register()
        do CommentBox.register()
        let cb = classContainer.["commentBox"]
        let element = Globals.createElement(cb)
        Globals.render(element, Globals.document.getElementById("example"))
        |> ignore


open System.IO
let dir = __SOURCE_DIRECTORY__
let code = Compiler.compileWithoutReturn(<@@ Page.app() @@>)
File.WriteAllText(Path.Combine(dir, "app/app.js"), code)
