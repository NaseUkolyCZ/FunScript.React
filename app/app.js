var Page_3_get_classContainer$, Page_3_classContainer, Page_3_app$, MutableDic__Add$String__ComponentClass_1_Object_String_ComponentClass_1_Object_, Comment_7__ctor$, Comment_6_render$, Comment_6_register$, CommentProps_3__ctor$, CommentList_7__ctor$, CommentList_6_render$, CommentList_6_register$, CommentListProps_2__ctor$, CommentForm_7__ctor$, CommentForm_6_render$, CommentForm_6_register$, CommentForm_6_handleSubmit$, CommentFormProps_2__ctor$, CommentBox_5__ctor$, CommentBox_4_render$, CommentBox_4_register$, CommentBox_4_handle$, CommentBox_4_getInitialState$, CommentBoxState_2__ctor$, Attributes_3__ctor$, Array__ZeroCreate$ReactElement_1_Object_ReactElement_1_Object_, Array__MapIndexed$CommentProps_3_ReactElement_1_Object_CommentProps_3_ReactElement_1_Object_, Array__Map$CommentProps_3_ReactElement_1_Object_CommentProps_3_ReactElement_1_Object_, Array__Length$CommentProps_3CommentProps_3, Array__Append$CommentProps_3CommentProps_3;
Array__Append$CommentProps_3CommentProps_3 = (function(xs,ys)
{
    return xs.concat(ys);;
});
Array__Length$CommentProps_3CommentProps_3 = (function(xs)
{
    return xs.length;;
});
Array__Map$CommentProps_3_ReactElement_1_Object_CommentProps_3_ReactElement_1_Object_ = (function(f,xs)
{
    return Array__MapIndexed$CommentProps_3_ReactElement_1_Object_CommentProps_3_ReactElement_1_Object_((function(_arg1)
    {
      return (function(x)
      {
        return f(x);
      });
    }), xs);
});
Array__MapIndexed$CommentProps_3_ReactElement_1_Object_CommentProps_3_ReactElement_1_Object_ = (function(f,xs)
{
    var ys = Array__ZeroCreate$ReactElement_1_Object_ReactElement_1_Object_(Array__Length$CommentProps_3CommentProps_3(xs));
    for (var i = 0; i <= (Array__Length$CommentProps_3CommentProps_3(xs) - 1); i++)
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
Attributes_3__ctor$ = (function(unitVar0)
{
    {};
});
CommentBoxState_2__ctor$ = (function(Data)
{
    var __this = this;
    __this.Data = Data;
});
CommentBox_4_getInitialState$ = (function(unitVar0)
{
    return (new CommentBoxState_2__ctor$([]));
});
CommentBox_4_handle$ = (function(cb,cp)
{
    var comments = (cb.state).Data;
    var comments_ = Array__Append$CommentProps_3CommentProps_3(comments, [cp]);
    return (cb.setState((new CommentBoxState_2__ctor$(comments_))));
});
CommentBox_4_register$ = (function(unitVar0)
{
    var cb = (new CommentBox_5__ctor$());
    (cb.render = (function()
    {
      return CommentBox_4_render$(this);
    }));
    (cb.getInitialState = (function()
    {
      return CommentBox_4_getInitialState$();
    }));
    var clazz = (React.createClass(cb));
    return MutableDic__Add$String__ComponentClass_1_Object_String_ComponentClass_1_Object_(Page_3_classContainer, "commentBox", clazz);
});
CommentBox_4_render$ = (function(cb)
{
    var attr = (new Attributes_3__ctor$());
    (attr.className) = "commentBox";
    null;
    var commentList = Page_3_classContainer["commentList"];
    var commentForm = Page_3_classContainer["commentForm"];
    return (React.createElement("div", attr, (React.createElement("h1", null, "Comments")), (React.createElement(commentList, (new CommentListProps_2__ctor$((cb.state).Data)))), (React.createElement(commentForm, (new CommentFormProps_2__ctor$((function(cp)
    {
      return CommentBox_4_handle$(cb, cp);
    })))))));
});
CommentBox_5__ctor$ = (function(unitVar0)
{
    {};
});
CommentFormProps_2__ctor$ = (function(onCommentSubmit)
{
    var __this = this;
    __this.onCommentSubmit = onCommentSubmit;
});
CommentForm_6_handleSubmit$ = (function(cf,e)
{
    (e.preventDefault());
    var author = (React.findDOMNode(((cf.refs)["author"])));
    var text = (React.findDOMNode(((cf.refs)["text"])));
    var Author = (author.value).trim();
    (cf.props).onCommentSubmit((new CommentProps_3__ctor$((text.value).trim(), Author)));
    (author.value) = "";
    null;
    (text.value) = "";
    return null;
});
CommentForm_6_register$ = (function(unitVar0)
{
    var cf = (new CommentForm_7__ctor$());
    (cf.render = (function()
    {
      return CommentForm_6_render$(this);
    }));
    var clazz = (React.createClass(cf));
    return MutableDic__Add$String__ComponentClass_1_Object_String_ComponentClass_1_Object_(Page_3_classContainer, "commentForm", clazz);
});
CommentForm_6_render$ = (function(cf)
{
    var attr = (new Attributes_3__ctor$());
    (attr.className) = "commentForm";
    null;
    (attr.onSubmit) = (function(e)
    {
      return CommentForm_6_handleSubmit$(cf, e);
    });
    null;
    var attr2 = (new Attributes_3__ctor$());
    (attr2.type) = "text";
    null;
    (attr2.placeholder) = "Your name";
    null;
    (attr2.ref) = "author";
    null;
    var attr3 = (new Attributes_3__ctor$());
    (attr3.type) = "text";
    null;
    (attr3.placeholder) = "Say something...";
    null;
    (attr3.ref) = "text";
    null;
    var attr4 = (new Attributes_3__ctor$());
    (attr4.type) = "submit";
    null;
    (attr4.value) = "Post";
    null;
    return (React.createElement("form", attr, (React.createElement("input", attr2)), (React.createElement("input", attr3)), (React.createElement("input", attr4))));
});
CommentForm_7__ctor$ = (function(unitVar0)
{
    {};
});
CommentListProps_2__ctor$ = (function(Data)
{
    var __this = this;
    __this.Data = Data;
});
CommentList_6_register$ = (function(unitVar0)
{
    var cl = (new CommentList_7__ctor$());
    (cl.render = (function()
    {
      return CommentList_6_render$(this);
    }));
    var clazz = (React.createClass(cl));
    return MutableDic__Add$String__ComponentClass_1_Object_String_ComponentClass_1_Object_(Page_3_classContainer, "commentList", clazz);
});
CommentList_6_render$ = (function(cl)
{
    var attr = (new Attributes_3__ctor$());
    (attr.className) = "commentList";
    null;
    var comment = Page_3_classContainer["comment"];
    var commentNodes = Array__Map$CommentProps_3_ReactElement_1_Object_CommentProps_3_ReactElement_1_Object_((function(n)
    {
      return (React.createElement(comment, n));
    }), (cl.props).Data);
    return (React.createElement("div", attr, commentNodes));
});
CommentList_7__ctor$ = (function(unitVar0)
{
    {};
});
CommentProps_3__ctor$ = (function(Text,Author)
{
    var __this = this;
    __this.Text = Text;
    __this.Author = Author;
});
Comment_6_register$ = (function(unitVar0)
{
    var c = (new Comment_7__ctor$());
    (c.render = (function()
    {
      return Comment_6_render$(this);
    }));
    var clazz = (React.createClass(c));
    return MutableDic__Add$String__ComponentClass_1_Object_String_ComponentClass_1_Object_(Page_3_classContainer, "comment", clazz);
});
Comment_6_render$ = (function(c)
{
    var attr = (new Attributes_3__ctor$());
    (attr.className) = "comment";
    null;
    var attr2 = (new Attributes_3__ctor$());
    (attr2.className) = "commentAuthor";
    null;
    return (React.createElement("div", attr, (React.createElement("h2", attr2, (c.props).Author)), (React.createElement("span", null, (c.props).Text))));
});
Comment_7__ctor$ = (function(unitVar0)
{
    {};
});
MutableDic__Add$String__ComponentClass_1_Object_String_ComponentClass_1_Object_ = (function(dic,key,value)
{
    if (dic[key] === undefined) { dic[key] = value } else { throw 'Key already exists' };
});
Page_3_app$ = (function(unitVar0)
{
    Comment_6_register$();
    CommentList_6_register$();
    CommentForm_6_register$();
    CommentBox_4_register$();
    var cb = Page_3_classContainer["commentBox"];
    var element = (React.createElement(cb));
    var ignored0 = (React.render(element, ((window.document).getElementById("example"))));
});
Page_3_get_classContainer$ = (function()
{
    return {};
});
Page_3_classContainer = Page_3_get_classContainer$();
Page_3_app$()