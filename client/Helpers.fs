namespace Client

open System
open System.Collections.Generic
open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.React
open FunScript.TypeScript.Mui

[<ReflectedDefinition>]
module Helpers =
    type Element with
        [<FunScript.JSEmitInline("({0}.value)")>]
        member __.value with get() : string = failwith "never" and set (v : string) : unit = failwith "never"

    module JS =
        [<JSEmitInline("this")>]
        let this<'O> :  'O = failwith "never"

        [<FunScript.JSEmitInline("require({0})")>]
        let require (path : string) : 'T = failwith "never"

    let obj (lst : list<string * 'a>) =
        let t = Dictionary<string,obj>()
        lst |> List.iter(fun i -> t.Add(fst i, snd i ))
        t :> obj

    let (==>) a b = a, box<obj> b

    type Nothing () = class end

    type ReactComponent<'T,'S> () =
        interface ComponentSpec<'T, 'S>
        interface Component<'T, 'S>

    module React =
        let defineComponent<'T, 'S> (render : ReactComponent<'T, 'S> -> DOMElement<obj> ) =
            let comp = ReactComponent<'T, 'S>()
            comp.``render <-``(fun _ -> JS.this |> render |> unbox<ReactElement<obj>>)
            comp

        let addMaterial (material : mui, tm : ThemeManager) (cmponent : ReactComponent<_,_>) =
            cmponent.``getChildContext <-``(fun _ -> obj ["muiTheme" ==> tm.getCurrentTheme()] )
            cmponent.childContextTypes <- ( obj ["muiTheme" ==> Globals.PropTypes._object.isRequired ] )
            cmponent

        let createComponent (cmponent : ReactComponent<_,_>) =
            cmponent |> unbox<ComponentSpec<_,_>> |> Globals.createClass

        let render (id : string) (cmponent : ClassicElement<_>) =
             Globals.render(cmponent, Globals.document.getElementById(id))
             |> ignore
