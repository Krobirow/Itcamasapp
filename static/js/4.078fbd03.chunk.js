(this.webpackJsonpitcamsapp=this.webpackJsonpitcamsapp||[]).push([[4],{289:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var s=t(51),n=t(52),i=t(54),m=t(53),c=t(0),l=t.n(c),r=t(28),o=t(20),g=function(e){return{isAuth:e.auth.isAuth}},d=function(e){var a=function(a){Object(i.a)(c,a);var t=Object(m.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(n.a)(c,[{key:"render",value:function(){return this.props.isAuth?l.a.createElement(e,this.props):l.a.createElement(r.a,{to:"/login"})}}]),c}(l.a.Component);return Object(o.b)(g)(a)}},292:function(e,a,t){e.exports={dialogsWrap:"dialogs_dialogsWrap__a7_DL",dialogsItem:"dialogs_dialogsItem__20jFl",messages:"dialogs_messages__1sDLC"}},293:function(e,a,t){e.exports={dialog:"dialogItem_dialog__1ckDR",dialogIcon:"dialogItem_dialogIcon__3Zzo6",dialogLink:"dialogItem_dialogLink__1X5cS",active:"dialogItem_active__23JiO"}},294:function(e,a,t){e.exports={message:"message_message__1rjbk",messageImg:"message_messageImg__2Duld",messageLeft:"message_messageLeft__3wrz-",messageRight:"message_messageRight__3xU6Y"}},302:function(e,a,t){"use strict";t.r(a);var s=t(106),n=t(0),i=t.n(n),m=t(292),c=t.n(m),l=t(293),r=t.n(l),o=t(17),g=function(e){var a="/dialogs/"+e.id;return i.a.createElement("div",{className:r.a.dialog},i.a.createElement(o.b,{className:r.a.dialogIcon,activeClassName:r.a.active,to:a}," ",i.a.createElement("img",{src:e.ava,alt:"cat"})," "),i.a.createElement(o.b,{className:r.a.dialogLink,activeClassName:r.a.active,to:a}," ",e.name," "))},d=t(294),u=t.n(d),p=function(e){var a=e.messagesData.map((function(e){return"Dimych"===e.name?i.a.createElement("div",{className:u.a.messageLeft,id:e.id,key:e.id},i.a.createElement("div",{className:u.a.message,id:e.id,key:e.id},i.a.createElement("span",{className:u.a.messageImg},i.a.createElement("img",{src:e.ava,alt:"cat"}),i.a.createElement("span",null,e.name)),i.a.createElement("span",null,e.message))):"me"===e.name?i.a.createElement("div",{className:u.a.messageRight,id:e.id,key:e.id},i.a.createElement("div",{className:u.a.message,id:e.id,key:e.id},i.a.createElement("span",{className:u.a.messageImg}),i.a.createElement("span",null,e.message))):void 0}));return i.a.createElement("div",null,a)},_=t(28),v=t(86),E=t(127),f=t(32),b=t(62),h=Object(b.a)(100),N=Object(E.a)({form:"addPost"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit,className:c.a.form,action:""},i.a.createElement("div",null,i.a.createElement(v.a,{component:f.b,name:"newMessageText",placeholder:"write Your message",validate:[b.b,h]})),i.a.createElement("div",null,i.a.createElement("button",{type:"submit"},"Add post")))})),I=function(e){var a=e.dialogsPage,t=a.dialogsData.map((function(e){return i.a.createElement(g,{name:e.name,id:e.id,key:e.id,ava:e.ava})}));return e.isAuth?i.a.createElement("div",{className:c.a.dialogsWrap},i.a.createElement("div",{className:c.a.dialogsItem},t),i.a.createElement("div",{className:c.a.messages},i.a.createElement(p,{messagesData:a.messagesData}),i.a.createElement("div",{className:c.a.dialogsFormWraper},i.a.createElement(N,{onSubmit:function(a){console.log(a.newMessageText),e.addMessage(a.newMessageText)}})))):i.a.createElement(_.a,{to:"/login"})},k=t(20),j=t(289),O=t(7);a.default=Object(O.d)(Object(k.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMessage:function(a){e(Object(s.a)(a))}}})),j.a)(I)}}]);
//# sourceMappingURL=4.078fbd03.chunk.js.map