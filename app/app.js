var list_1_Tuple_2_String__String__NilTuple_2_String__String_, list_1_Tuple_2_String__String__ConsTuple_2_String__String_, list_1_Tuple_2_String__Object__NilTuple_2_String__Object_, list_1_Tuple_2_String__Object__ConsTuple_2_String__Object_, TupleString_String, TupleString_Object_, Page__get_classContainer$, Page__createObject$String_String, Page__createObject$Object_Object_, Page__classContainer, Page__app$, MutableDic__Add$String__Object_String_Object_, MutableDic__Add$String__ComponentClass_1_Object_String_ComponentClass_1_Object_, List__Iterate$Tuple_2_String__String_Tuple_2_String__String_, List__Iterate$Tuple_2_String__Object_Tuple_2_String__Object_, List__FoldIndexedAux$Unit__Tuple_2_String__String_Unit__Tuple_2_String__String_, List__FoldIndexedAux$Unit__Tuple_2_String__Object_Unit__Tuple_2_String__Object_, List__FoldIndexed$Tuple_2_String__String__Unit_Tuple_2_String__String__Unit_, List__FoldIndexed$Tuple_2_String__Object__Unit_Tuple_2_String__Object__Unit_, List__Fold$Tuple_2_String__String__Unit_Tuple_2_String__String__Unit_, List__Fold$Tuple_2_String__Object__Unit_Tuple_2_String__Object__Unit_, List__Empty$Tuple_2_String__String_Tuple_2_String__String_, List__Empty$Tuple_2_String__Object_Tuple_2_String__Object_, List__CreateCons$Tuple_2_String__String_Tuple_2_String__String_, List__CreateCons$Tuple_2_String__Object_Tuple_2_String__Object_, Comment__render$, Comment__register$, Comment_1__ctor$, CommentProps___ctor$, CommentList__render$, CommentList__register$, CommentList_1__ctor$, CommentListProps___ctor$, CommentForm__render$, CommentForm__register$, CommentForm__handleSubmit$, CommentForm_1__ctor$, CommentFormProps___ctor$, CommentBox__render$, CommentBox__register$, CommentBox__handle$, CommentBox__getInitialState$, CommentBox_1__ctor$, CommentBoxState___ctor$, Array__ZeroCreate$ReactElement_1_Object_ReactElement_1_Object_, Array__MapIndexed$CommentProps__ReactElement_1_Object_CommentProps__ReactElement_1_Object_, Array__Map$CommentProps__ReactElement_1_Object_CommentProps__ReactElement_1_Object_, Array__Length$CommentProps_CommentProps_, Array__Append$CommentProps_CommentProps_;
Array__Append$CommentProps_CommentProps_ = (function(xs,ys)
{
    return xs.concat(ys);;
});
Array__Length$CommentProps_CommentProps_ = (function(xs)
{
    return xs.length;;
});
Array__Map$CommentProps__ReactElement_1_Object_CommentProps__ReactElement_1_Object_ = (function(f,xs)
{
    return Array__MapIndexed$CommentProps__ReactElement_1_Object_CommentProps__ReactElement_1_Object_((function(_arg1)
    {
      return (function(x)
      {
        return f(x);
      });
    }), xs);
});
Array__MapIndexed$CommentProps__ReactElement_1_Object_CommentProps__ReactElement_1_Object_ = (function(f,xs)
{
    var ys = Array__ZeroCreate$ReactElement_1_Object_ReactElement_1_Object_(Array__Length$CommentProps_CommentProps_(xs));
    for (var i = 0; i <= (Array__Length$CommentProps_CommentProps_(xs) - 1); i++)
    {
      ys[i] = f(i)(xs[i]);
      null;
    };
    return ys;
});
Array__ZeroCreate$ReactElement_1_Object_ReactElement_1_Object_ = (function(size)
{
    return new Array(size);;
});
CommentBoxState___ctor$ = (function(Data)
{
    var __this = this;
    __this.Data = Data;
});
CommentBox_1__ctor$ = (function(unitVar0)
{
    {};
});
CommentBox__getInitialState$ = (function(unitVar0)
{
    return (new CommentBoxState___ctor$([]));
});
CommentBox__handle$ = (function(cb,cp)
{
    var comments = (cb.state).Data;
    var comments_ = Array__Append$CommentProps_CommentProps_(comments, [cp]);
    return (cb.setState((new CommentBoxState___ctor$(comments_))));
});
CommentBox__register$ = (function(unitVar0)
{
    var cb = (new CommentBox_1__ctor$());
    (cb.render = (function()
    {
      return CommentBox__render$(this);
    }));
    (cb.getInitialState = (function()
    {
      return CommentBox__getInitialState$();
    }));
    var clazz = (React.createClass(cb));
    return MutableDic__Add$String__ComponentClass_1_Object_String_ComponentClass_1_Object_(Page__classContainer, "commentBox", clazz);
});
CommentBox__render$ = (function(cb)
{
    var attr = Page__createObject$String_String(List__CreateCons$Tuple_2_String__String_Tuple_2_String__String_((new TupleString_String("className", "commentBox")), List__Empty$Tuple_2_String__String_Tuple_2_String__String_()));
    var commentList = Page__classContainer["commentList"];
    var commentForm = Page__classContainer["commentForm"];
    return (React.createElement("div", attr, (React.createElement("h1", null, "Comments")), (React.createElement(commentList, (new CommentListProps___ctor$((cb.state).Data)))), (React.createElement(commentForm, (new CommentFormProps___ctor$((function(cp)
    {
      return CommentBox__handle$(cb, cp);
    })))))));
});
CommentFormProps___ctor$ = (function(onCommentSubmit)
{
    var __this = this;
    __this.onCommentSubmit = onCommentSubmit;
});
CommentForm_1__ctor$ = (function(unitVar0)
{
    {};
});
CommentForm__handleSubmit$ = (function(cf,e)
{
    (e.preventDefault());
    var author = (React.findDOMNode(((cf.refs)["author"])));
    var text = (React.findDOMNode(((cf.refs)["text"])));
    var Author = (author.value).trim();
    (cf.props).onCommentSubmit((new CommentProps___ctor$((text.value).trim(), Author)));
    (author.value) = "";
    null;
    (text.value) = "";
    return null;
});
CommentForm__register$ = (function(unitVar0)
{
    var cf = (new CommentForm_1__ctor$());
    (cf.render = (function()
    {
      return CommentForm__render$(this);
    }));
    var clazz = (React.createClass(cf));
    return MutableDic__Add$String__ComponentClass_1_Object_String_ComponentClass_1_Object_(Page__classContainer, "commentForm", clazz);
});
CommentForm__render$ = (function(cf)
{
    var attr = Page__createObject$Object_Object_(List__CreateCons$Tuple_2_String__Object_Tuple_2_String__Object_((new TupleString_Object_("className", "commentForm")), List__CreateCons$Tuple_2_String__Object_Tuple_2_String__Object_((new TupleString_Object_("onSubmit", (function(e)
    {
      return CommentForm__handleSubmit$(cf, e);
    }))), List__Empty$Tuple_2_String__Object_Tuple_2_String__Object_())));
    var attr2 = Page__createObject$String_String(List__CreateCons$Tuple_2_String__String_Tuple_2_String__String_((new TupleString_String("type", "text")), List__CreateCons$Tuple_2_String__String_Tuple_2_String__String_((new TupleString_String("placeholder", "Your name")), List__CreateCons$Tuple_2_String__String_Tuple_2_String__String_((new TupleString_String("ref", "author")), List__Empty$Tuple_2_String__String_Tuple_2_String__String_()))));
    var attr3 = Page__createObject$String_String(List__CreateCons$Tuple_2_String__String_Tuple_2_String__String_((new TupleString_String("type", "text")), List__CreateCons$Tuple_2_String__String_Tuple_2_String__String_((new TupleString_String("placeholder", "Say something...")), List__CreateCons$Tuple_2_String__String_Tuple_2_String__String_((new TupleString_String("ref", "text")), List__Empty$Tuple_2_String__String_Tuple_2_String__String_()))));
    var attr4 = Page__createObject$String_String(List__CreateCons$Tuple_2_String__String_Tuple_2_String__String_((new TupleString_String("type", "submit")), List__CreateCons$Tuple_2_String__String_Tuple_2_String__String_((new TupleString_String("value", "Post")), List__Empty$Tuple_2_String__String_Tuple_2_String__String_())));
    return (React.createElement("form", attr, (React.createElement("input", attr2)), (React.createElement("input", attr3)), (React.createElement("input", attr4))));
});
CommentListProps___ctor$ = (function(Data)
{
    var __this = this;
    __this.Data = Data;
});
CommentList_1__ctor$ = (function(unitVar0)
{
    {};
});
CommentList__register$ = (function(unitVar0)
{
    var cl = (new CommentList_1__ctor$());
    (cl.render = (function()
    {
      return CommentList__render$(this);
    }));
    var clazz = (React.createClass(cl));
    return MutableDic__Add$String__ComponentClass_1_Object_String_ComponentClass_1_Object_(Page__classContainer, "commentList", clazz);
});
CommentList__render$ = (function(cl)
{
    var attr = Page__createObject$String_String(List__CreateCons$Tuple_2_String__String_Tuple_2_String__String_((new TupleString_String("className", "commentList")), List__Empty$Tuple_2_String__String_Tuple_2_String__String_()));
    var comment = Page__classContainer["comment"];
    var commentNodes = Array__Map$CommentProps__ReactElement_1_Object_CommentProps__ReactElement_1_Object_((function(n)
    {
      return (React.createElement(comment, n));
    }), (cl.props).Data);
    return (React.createElement("div", attr, commentNodes));
});
CommentProps___ctor$ = (function(Text,Author)
{
    var __this = this;
    __this.Text = Text;
    __this.Author = Author;
});
Comment_1__ctor$ = (function(unitVar0)
{
    {};
});
Comment__register$ = (function(unitVar0)
{
    var c = (new Comment_1__ctor$());
    (c.render = (function()
    {
      return Comment__render$(this);
    }));
    var clazz = (React.createClass(c));
    return MutableDic__Add$String__ComponentClass_1_Object_String_ComponentClass_1_Object_(Page__classContainer, "comment", clazz);
});
Comment__render$ = (function(c)
{
    var attr = Page__createObject$String_String(List__CreateCons$Tuple_2_String__String_Tuple_2_String__String_((new TupleString_String("className", "comment")), List__Empty$Tuple_2_String__String_Tuple_2_String__String_()));
    var attr2 = Page__createObject$String_String(List__CreateCons$Tuple_2_String__String_Tuple_2_String__String_((new TupleString_String("className", "commentAuthor")), List__Empty$Tuple_2_String__String_Tuple_2_String__String_()));
    return (React.createElement("div", attr, (React.createElement("h2", attr2, (c.props).Author)), (React.createElement("span", null, (c.props).Text))));
});
List__CreateCons$Tuple_2_String__Object_Tuple_2_String__Object_ = (function(x,xs)
{
    return (new list_1_Tuple_2_String__Object__ConsTuple_2_String__Object_(x, xs));
});
List__CreateCons$Tuple_2_String__String_Tuple_2_String__String_ = (function(x,xs)
{
    return (new list_1_Tuple_2_String__String__ConsTuple_2_String__String_(x, xs));
});
List__Empty$Tuple_2_String__Object_Tuple_2_String__Object_ = (function()
{
    return (new list_1_Tuple_2_String__Object__NilTuple_2_String__Object_());
});
List__Empty$Tuple_2_String__String_Tuple_2_String__String_ = (function()
{
    return (new list_1_Tuple_2_String__String__NilTuple_2_String__String_());
});
List__Fold$Tuple_2_String__Object__Unit_Tuple_2_String__Object__Unit_ = (function(f,seed,xs)
{
    return List__FoldIndexed$Tuple_2_String__Object__Unit_Tuple_2_String__Object__Unit_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
List__Fold$Tuple_2_String__String__Unit_Tuple_2_String__String__Unit_ = (function(f,seed,xs)
{
    return List__FoldIndexed$Tuple_2_String__String__Unit_Tuple_2_String__String__Unit_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
List__FoldIndexed$Tuple_2_String__Object__Unit_Tuple_2_String__Object__Unit_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$Unit__Tuple_2_String__Object_Unit__Tuple_2_String__Object_(f, 0, seed, xs);
});
List__FoldIndexed$Tuple_2_String__String__Unit_Tuple_2_String__String__Unit_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$Unit__Tuple_2_String__String_Unit__Tuple_2_String__String_(f, 0, seed, xs);
});
List__FoldIndexedAux$Unit__Tuple_2_String__Object_Unit__Tuple_2_String__Object_ = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$Unit__Tuple_2_String__Object_Unit__Tuple_2_String__Object_(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__FoldIndexedAux$Unit__Tuple_2_String__String_Unit__Tuple_2_String__String_ = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$Unit__Tuple_2_String__String_Unit__Tuple_2_String__String_(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__Iterate$Tuple_2_String__Object_Tuple_2_String__Object_ = (function(f,xs)
{
    var _235;
    return List__Fold$Tuple_2_String__Object__Unit_Tuple_2_String__Object__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _235, xs);
});
List__Iterate$Tuple_2_String__String_Tuple_2_String__String_ = (function(f,xs)
{
    var _32;
    return List__Fold$Tuple_2_String__String__Unit_Tuple_2_String__String__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _32, xs);
});
MutableDic__Add$String__ComponentClass_1_Object_String_ComponentClass_1_Object_ = (function(dic,key,value)
{
    if (dic[key] === undefined) { dic[key] = value } else { throw 'Key already exists' };
});
MutableDic__Add$String__Object_String_Object_ = (function(dic,key,value)
{
    if (dic[key] === undefined) { dic[key] = value } else { throw 'Key already exists' };
});
Page__app$ = (function(unitVar0)
{
    Comment__register$();
    CommentList__register$();
    CommentForm__register$();
    CommentBox__register$();
    var cb = Page__classContainer["commentBox"];
    var element = (React.createElement(cb));
    var ignored0 = (React.render(element, ((window.document).getElementById("example"))));
});
Page__createObject$Object_Object_ = (function(lst)
{
    var t = {};
    List__Iterate$Tuple_2_String__Object_Tuple_2_String__Object_((function(i)
    {
      return MutableDic__Add$String__Object_String_Object_(t, i.Items[0.000000], i.Items[1.000000]);
    }), lst);
    return t;
});
Page__createObject$String_String = (function(lst)
{
    var t = {};
    List__Iterate$Tuple_2_String__String_Tuple_2_String__String_((function(i)
    {
      return MutableDic__Add$String__Object_String_Object_(t, i.Items[0.000000], i.Items[1.000000]);
    }), lst);
    return t;
});
Page__get_classContainer$ = (function()
{
    return {};
});
TupleString_Object_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleString_String = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
list_1_Tuple_2_String__Object__ConsTuple_2_String__Object_ = (function(Item1,Item2)
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Cons";
    __this.Item1 = Item1;
    __this.Item2 = Item2;
});
list_1_Tuple_2_String__Object__NilTuple_2_String__Object_ = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Nil";
});
list_1_Tuple_2_String__String__ConsTuple_2_String__String_ = (function(Item1,Item2)
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Cons";
    __this.Item1 = Item1;
    __this.Item2 = Item2;
});
list_1_Tuple_2_String__String__NilTuple_2_String__String_ = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Nil";
});
Page__classContainer = Page__get_classContainer$();
Page__app$()