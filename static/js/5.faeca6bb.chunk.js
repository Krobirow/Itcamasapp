(this.webpackJsonpitcamsapp=this.webpackJsonpitcamsapp||[]).push([[5],{290:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(94);function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(t.push(l.value),!n||t.length!==n);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return t}}(e,n)||Object(r.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},291:function(e,n,t){e.exports={users__immageWrapp:"users_users__immageWrapp__2wD6o"}},295:function(e,n,t){e.exports={selectedPage:"paginator_selectedPage__UivvZ",paginationWrapp:"paginator_paginationWrapp__2FmL7"}},301:function(e,n,t){"use strict";t.r(n);var r=t(51),a=t(52),o=t(54),l=t(53),u=t(0),i=t.n(u),s=t(20),c=t(129),p=t(68),f=t(85),g=t(291),m=t.n(g),d=t(290),h=t(295),v=t.n(h),w=function(e){for(var n=e.currentPage,t=e.totalUsersCount,r=e.pageSize,a=e.onPageChanger,o=e.portionSize,l=void 0===o?15:o,s=Math.ceil(t/r),c=[],p=1;p<=s;p++)c.push(p);Math.ceil(s/l);var f=Object(u.useState)(1),g=Object(d.a)(f,2),m=g[0],h=g[1],w=(m-1)*l+1,P=m*l;return i.a.createElement("div",{className:v.a.paginationWrapp},i.a.createElement("button",{disabled:1===m,onClick:function(){h(m-1)}},"PREV"),c.filter((function(e){return e>=w&&e<=P})).map((function(e){return i.a.createElement("span",{key:e,onClick:function(n){a(e)},className:n===e?v.a.selectedPage:void 0},e)})),i.a.createElement("button",{disabled:c.length<P,onClick:function(){h(m+1)}},"NEXT"))},P=t(17),y=function(e){var n=e.user,t=e.followingInProgress,r=e.unFollow,a=e.follow;return i.a.createElement("div",null,i.a.createElement("div",{key:n.id},i.a.createElement("span",null,i.a.createElement("div",{className:m.a.users__immageWrapp},i.a.createElement(P.b,{to:"/profile/"+n.id},i.a.createElement("img",{src:null!=n.photos.small?n.photos.small:"https://wallpapercave.com/wp/PCG5mFl.jpg",alt:"ava"}))),i.a.createElement("div",null,n.followed?i.a.createElement("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){r(n.id)}},"Follow"):i.a.createElement("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){a(n.id)}},"Unfollow"))),i.a.createElement("span",null,i.a.createElement("span",null,i.a.createElement("div",null,n.name),i.a.createElement("div",null,n.status)),i.a.createElement("span",null,i.a.createElement("div",null,"u.location.country"),i.a.createElement("div",null,"u.location.city")))))},b=function(e){var n=e.currentPage,t=e.totalUsersCount,r=e.pageSize,a=e.onPageChanger,o=e.users,l=e.followingInProgress,u=e.unFollow,s=e.follow;Object(f.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanger","users","followingInProgress","unFollow","follow"]);return i.a.createElement("div",{className:m.a.usersWprapper},i.a.createElement(w,{currentPage:n,onPageChanger:a,totalUsersCount:t,pageSize:r}),o.map((function(e){return i.a.createElement(y,{followingInProgress:l,user:e,key:e.id,unFollow:u,follow:s})})))};function E(e,n){return e===n}function C(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}function S(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}var F=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];var o=0,l=r.pop(),u=S(r),i=e.apply(void 0,[function(){return o++,l.apply(null,arguments)}].concat(t)),s=e((function(){for(var e=[],n=u.length,t=0;t<n;t++)e.push(u[t].apply(null,arguments));return i.apply(null,e)}));return s.resultFunc=l,s.dependencies=u,s.recomputations=function(){return o},s.resetRecomputations=function(){return o=0},s}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E,t=null,r=null;return function(){return C(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}}));var _=F((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),j=function(e){return e.usersPage.pageSize},U=function(e){return e.usersPage.totalUsersCount},k=function(e){return e.usersPage.currentPage},z=function(e){return e.usersPage.isFetching},I=function(e){return e.usersPage.followingInProgress},O=function(e){Object(o.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=n.call.apply(n,[this].concat(o))).onPageChanger=function(n){var t=e.props,r=t.pageSize;(0,t.getUsers)(n,r)},e}return Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.currentPage,t=e.pageSize;(0,e.getUsers)(n,t)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.props.isFetching?i.a.createElement(p.a,null):null,i.a.createElement(b,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanger:this.onPageChanger,users:this.props.users,follow:this.props.follow,unFollow:this.props.unFollow,followingInProgress:this.props.followingInProgress}))}}]),t}(u.Component);n.default=Object(s.b)((function(e){return{users:_(e),pageSize:j(e),totalUsersCount:U(e),currentPage:k(e),isFetching:z(e),followingInProgress:I(e)}}),{follow:c.b,unFollow:c.f,followSuccess:c.c,unfollowSuccess:c.g,setCurrentPage:c.e,getUsers:c.d})(O)}}]);
//# sourceMappingURL=5.faeca6bb.chunk.js.map