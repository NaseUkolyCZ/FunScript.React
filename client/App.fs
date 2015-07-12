namespace Client

open FunScript.TypeScript.Mui
open FunScript.TypeScript.React
open FunScript.TypeScript
open FunScript
open Helpers
open System.Collections.Generic
open System

[<ReflectedDefinition>]
module App =

    let m = JS.require<Mui.mui> "material-ui"
    let tm = m.Styles.ThemeManager()
    let material = m, tm
    let private subscriptions = ResizeArray()

    type Message = {Date : System.DateTime; Text : string; Author : string}
    type MessageList = {Data : Message[]}

    let message (props : Message) =
        let render (c : ReactComponent<Message, Nothing>) =
            let attr = obj [("className", "message")]
            let dt = c.props.Date
            let z = dt.ToShortTimeString()
            let message = sprintf "[%s] %s : %s" z c.props.Author c.props.Text
            Globals.createElement ("div", attr,
                Globals.createElement ("span", null, message))

        React.defineComponent render
        |> React.addMaterial material
        |> React.createComponent
        |> fun n -> Globals.createElement(n, props, null)

    let messageList (props : MessageList) =
        let render (c : ReactComponent<MessageList, Nothing> ) =
            let attr = obj ["className" ==> "messageList"]
            let messageNodes = c.props.Data |> Array.map(message)
            Globals.createElement("div", attr, messageNodes )

        React.defineComponent render
        |> React.addMaterial material
        |> React.createComponent
        |> fun n -> Globals.createElement(n, props, null)

    let messageForm () =

        let handleSay (cf : ReactComponent<Nothing, Nothing>) (e : obj ) =
            let author = cf.refs.["author"]
            let text = cf.refs.["text"]

            let msg = { Message.Date = DateTime.Now;
                        Message.Author = author.getValue().ToString().Trim();
                        Message.Text = text.getValue().ToString().Trim() }

            createEmpty<PostalEnvelope> ()
            |> fun n -> n.topic <- "message.new"
                        n.data <- msg
                        n
            |> Globals.postal.publish
            |> ignore

            author.setValue("")
            text.setValue("")

        let render (c : ReactComponent<Nothing, Nothing> ) =
            let attr = obj ["className" ==> "MessageForm" ]
            let attr2 = obj ["className" ==> "nameTextBox"
                             "type" ==> "text"
                             "hintText" ==> "Your name"
                             "ref" ==> "author"]
            let attr3 = obj ["type" ==> "text"
                             "className" ==> "messageTextBox"
                             "hintText" ==> "Say something..."
                             "ref" ==> "text"]
            let attr4 = obj ["type" ==> "submit"
                             "className" ==> "sayButton"
                             "value" ==> "Post"
                             "label" ==> "Say"
                             "primary" ==> true
                             "onMouseDown" ==> (handleSay c) ]
            Globals.createElement("div", attr,
                Globals.createElement(m.TextField, attr2),
                Globals.createElement(m.TextField, attr3),
                Globals.createElement(m.RaisedButton, attr4))

        React.defineComponent render
        |> React.addMaterial material
        |> React.createComponent
        |> Globals.createElement

    let chat () =
        let render (c : ReactComponent<Nothing, MessageList> ) =
            let attr = obj ["className" ==> "Chat"]
            let attr2 = obj ["title" ==> "F# Chat";
                             "showMenuIconButton" ==> false ]

            Globals.createElement("div", attr,
                Globals.createElement(m.AppBar, attr2),
                messageList c.state,
                messageForm ())

        let  handle (cb : ReactComponent<Nothing, MessageList>) (cp : Message) =
            let messages = cb.state.Data
            let messages' = Array.append messages [|cp|]
            cb.setState({Data = messages'})
            () :> obj

        let registerHandlers (c : ReactComponent<Nothing, MessageList> ) =
            let options2 = createEmpty<PostalSubscriptionDefinition>()
                          |> fun n -> n.topic <- "message.new"
                                      n.callback <- Func<_,_,_>(fun n msg ->
                                          msg.data
                                          |> unbox<Message>
                                          |> handle c )
                                      n
            let t = Globals.postal.subscribe(options2)
            subscriptions.Add t

        let unregisterHandlers () =
            subscriptions |> Seq.iter (fun s -> s.unsubscribe() |> ignore)

        React.defineComponent render
        |> React.addMaterial material
        |> fun c ->
            c.``getInitialState <-``(fun _ -> {Data = [||]})
            c.``componentDidMount <-``(fun _ -> JS.this |> registerHandlers)
            c.``componentWillUnmount <-``(fun _ -> unregisterHandlers ())
            c
        |> React.createComponent
        |> Globals.createElement

    let app () = chat () |> React.render "example"
