(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{155:function(e,a,t){"use strict";t.r(a);var s=t(0),c=t.n(s),n=t(21),r=t.n(n),o=t(19),i=(t(86),t(9)),l=t(7),j=t(73),d=(t(90),t(6)),u=t(176),b=t(177),h=t(1),p=function(e){var a=e.phValue,t=Object(s.useState)(!1),c=Object(d.a)(t,2),n=c[0],r=c[1],o=Object(s.useState)("all"),j=Object(d.a)(o,2),p=j[0],m=j[1],O=Object(s.useState)(""),x=Object(d.a)(O,2),f=x[0],g=x[1],v=Object(s.useRef)(null),N=Object(l.f)();console.log(p);var _=function(e){m(e.target.value)};return Object(h.jsxs)("div",{className:"header-top",children:[Object(h.jsx)("div",{className:"header-icon",children:Object(h.jsx)("h2",{className:"header-icon_txt",children:"softSearch"})}),Object(h.jsxs)("form",{className:"header-form",onSubmit:function(e){N("/search/".concat(p,"/").concat(f))},children:[a?Object(h.jsx)("input",{type:"search",className:"header-form_input",placeholder:"".concat(a),ref:v,onChange:function(e){return g(e.target.value)}}):Object(h.jsx)("input",{type:"search",className:"header-form_input",placeholder:"search record",ref:v,onChange:function(e){return g(e.target.value)}}),Object(h.jsx)("button",{className:"header-form_button",children:Object(h.jsx)(u.a,{className:"header-form_icon"})})]}),Object(h.jsxs)("nav",{className:"header-nav",children:[Object(h.jsxs)("div",{className:"header-nav_div",children:[Object(h.jsx)("button",{className:"header-nav_btn",onClick:function(){r(!n)},children:Object(h.jsx)(b.a,{className:"header-nav_icon"})}),n&&Object(h.jsxs)("form",{className:"header-nav_form",children:[Object(h.jsxs)("div",{className:"header-nav_form-class",children:[Object(h.jsx)("label",{htmlFor:"btn",className:"header-nav_form-label",children:"all"}),Object(h.jsx)("input",{type:"radio",name:"btn",id:"button",className:"header-nav_form-input",defaultChecked:!0,value:"all",onChange:_})]}),Object(h.jsxs)("div",{className:"header-nav_form-class",children:[Object(h.jsx)("label",{htmlFor:"btn",className:"header-nav_form-label",children:"author name"}),Object(h.jsx)("input",{type:"radio",name:"btn",id:"button",value:"name",className:"header-nav_form-input",onChange:_})]}),Object(h.jsxs)("div",{className:"header-nav_form-class",children:[Object(h.jsx)("label",{htmlFor:"btn",className:"header-nav_form-label",children:"project topic"}),Object(h.jsx)("input",{type:"radio",name:"btn",id:"button",value:"topic",className:"header-nav_form-input",onChange:_})]})]})]}),Object(h.jsx)("div",{className:"header-nav_div",children:Object(h.jsxs)("h4",{className:"header-nav-box",children:[Object(h.jsx)(i.b,{to:"/signup",className:"header-nav-text",children:"sign up"}),Object(h.jsx)(i.b,{to:"/login",className:"header-nav-text",children:"login"})]})})]})]})},m=function(){var e=Object(s.useState)(""),a=Object(d.a)(e,2),t=a[0],c=a[1],n=Object(s.useRef)(null),r=Object(l.f)();return Object(h.jsx)("section",{className:"search",children:Object(h.jsxs)("main",{className:"search-box",children:[Object(h.jsx)("h2",{className:"search-hdText",children:"softSearch"}),Object(h.jsxs)("form",{noValidate:!0,className:"search_form",onSubmit:function(e){r("/search/all/".concat(t))},children:[Object(h.jsxs)("div",{className:"search_form-flex",children:[Object(h.jsx)("button",{className:"search_form_button",children:Object(h.jsx)(u.a,{className:"search_form_icon"})}),Object(h.jsx)("input",{type:"search",className:"search_form_input",ref:n,onChange:function(e){return c(e.target.value)},placeholder:"search record or type an author"})]}),Object(h.jsx)("button",{className:"search_button-text",children:"search"})]})]})})},O=function(){return Object(h.jsxs)("section",{className:"container",children:[Object(h.jsx)(p,{}),Object(h.jsx)(m,{})]})},x=t(10),f=t.n(x),g=t(22),v=t(13),N=t.n(v),_=function(e){var a=e.author,t=e.title,s=e.yearOfPub,c=e.body;return Object(h.jsxs)("li",{className:"cell-list",children:[Object(h.jsx)("h2",{className:"cell-hdText",children:t}),Object(h.jsx)("p",{children:c}),Object(h.jsxs)("div",{className:"cell-flex",children:[Object(h.jsx)("h4",{className:"cell-author",children:a}),Object(h.jsx)("h4",{className:"cell-date",children:s})]})]})},y=function(e){var a=e.posts;return console.log(a),Object(h.jsx)("div",{className:"cell",children:a.map((function(e){return Object(h.jsx)(i.b,{to:"/post/".concat(e._id),className:"cell-link",children:Object(h.jsx)("ul",{className:"cell-lists",children:Object(h.jsx)(_,{author:e.author_name,title:e.project_topic,body:e.body[0],yearOfPub:e.yearOfPub})})})}))})},S=function(e){var a=Object(s.useState)([]),t=Object(d.a)(a,2),c=t[0],n=t[1],r=Object(s.useState)(!1),o=Object(d.a)(r,2),i=o[0],j=o[1],u=Object(s.useState)(!1),b=Object(d.a)(u,2),m=(b[0],b[1]),O=Object(l.g)(),x=O.id,v=O.searchQuery;return console.log(x,v),Object(s.useEffect)((function(){var e;(function(){var a=Object(g.a)(f.a.mark((function a(){var t;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,"name"!==v){a.next=5;break}return a.next=4,N.a.get("".concat("https://chidi-search.herokuapp.com/api/v1/post/search/name","/").concat(x));case 4:e=a.sent;case 5:if("topic"!==v){a.next=9;break}return a.next=8,N.a.get("".concat("https://chidi-search.herokuapp.com/api/v1/post/search/topic","/").concat(x));case 8:e=a.sent;case 9:if("all"!==v){a.next=13;break}return a.next=12,N.a.get("".concat("https://chidi-search.herokuapp.com/api/v1/post/search","/").concat(x));case 12:e=a.sent;case 13:t=e.data.data,n(t),console.log("https://chidi-search.herokuapp.com/api/v1/post/search"),j(!1),m(!1),a.next=24;break;case 20:a.prev=20,a.t0=a.catch(0),j(!1),m(!0);case 24:case"end":return a.stop()}}),a,null,[[0,20]])})));return function(){return a.apply(this,arguments)}})()()}),[]),Object(h.jsxs)("section",{className:"cell-container",children:[Object(h.jsx)(p,{phValue:x}),i&&Object(h.jsx)("div",{className:"error mt-6",children:Object(h.jsx)("div",{style:{height:"10rem",width:"10rem"},className:"loading-spinner"})}),Object(h.jsx)(y,{posts:c})]})},w=function(){var e=Object(s.useState)([]),a=Object(d.a)(e,2),t=a[0],c=a[1],n=Object(s.useState)(!1),r=Object(d.a)(n,2),o=(r[0],r[1]),i=Object(s.useState)(!1),j=Object(d.a)(i,2),u=(j[0],j[1]),b=Object(l.g)().id;return Object(s.useEffect)((function(){var e;(function(){var a=Object(g.a)(f.a.mark((function a(){var t;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,N.a.get("".concat("https://chidi-search.herokuapp.com/api/v1/post","/").concat(b));case 3:e=a.sent,t=e.data.data,c(t),console.log("https://chidi-search.herokuapp.com/api/v1/post"),o(!1),u(!1),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(0),o(!1),u(!0);case 15:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(){return a.apply(this,arguments)}})()()}),[]),console.log(t),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{}),Object(h.jsx)("section",{className:"post",children:Object(h.jsxs)("main",{className:"post-main",children:[Object(h.jsx)("h1",{className:"post-project_topic",children:t.project_topic}),Object(h.jsxs)("div",{className:"post-div",children:[Object(h.jsxs)("span",{className:"post-name",children:["author name: ",t.author_name]}),Object(h.jsxs)("span",{className:"post-year",children:["year of publication: ",t.yearOfPub]})]}),Object(h.jsxs)("p",{className:"post_p",children:[Object(h.jsx)("span",{className:"post_chapter",children:"Chapters:"}),t.body]}),Object(h.jsxs)("p",{className:"post_p borderline",children:[Object(h.jsx)("span",{className:"post_chapter",children:"ref:"}),t.ref]}),Object(h.jsxs)("div",{className:"post_super",children:[Object(h.jsx)("span",{className:"post_chapter",children:"supervisors:"}),t.supervisor_name]})]})})]})},k=t(8),C="SIGNUP_SUCCESS",F="SIGNUP_FAILURE",P="LOGIN_SUCCESS",I="LOGIN_FAILURE",z=function(e){var a=(new Date).getFullYear();return Object(h.jsxs)("main",{className:"signup-bg",children:[Object(h.jsxs)("div",{className:"signup-nav",children:[Object(h.jsx)(i.b,{className:"signup-logoLink",to:"/",children:Object(h.jsx)("h2",{className:"header-icon_txt",children:"softSearch"})}),Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{className:"signup-list",children:[Object(h.jsx)("li",{className:"signup-nav-item",children:Object(h.jsx)(i.c,{className:"signup-nav-link",to:"/login",children:"login"})}),Object(h.jsx)("li",{className:"signup-nav-item",children:Object(h.jsx)(i.c,{className:"signup-nav-link",to:"/signup",children:"sign up"})})]})})]}),e.children,Object(h.jsx)("footer",{className:"signup-footer",children:Object(h.jsxs)("p",{children:["copyright softSearch \xa9 ",a]})})]})},T=function(e){var a=Object(o.b)(),t=Object(o.c)((function(e){return e.user})),c=Object(l.f)();console.log(t);var n=Object(s.useState)({email:"",name:"",password:"",passwordConfirm:""}),r=Object(d.a)(n,2),i=r[0],j=r[1],u=Object(s.useState)(""),b=Object(d.a)(u,2),p=b[0],m=b[1],O=Object(s.useState)(!1),x=Object(d.a)(O,2),v=x[0],_=x[1],y=Object(s.useState)(!1),S=Object(d.a)(y,2),w=S[0],P=S[1],I=Object(s.useState)(!1),T=Object(d.a)(I,2),q=T[0],J=T[1],L=Object(s.useState)(!1),E=Object(d.a)(L,2),A=E[0],B=E[1],D=Object(s.useState)(!1),U=Object(d.a)(D,2),Z=U[0],V=U[1],G=Object(s.useState)(!1),H=Object(d.a)(G,2),R=H[0],Q=(H[1],Object(s.useState)(!1)),M=Object(d.a)(Q,2),Y=M[0],$=M[1],K=Object(s.useState)(""),W=Object(d.a)(K,2),X=W[0],ee=W[1],ae=function(e){j((function(a){return Object(k.a)(Object(k.a)({},a),{},{password:e.target.value,passwordConfirm:e.target.value})})),"password"===e.target.name&&"passwordConfirm"===String(e.target.name)&&(""===e.target.value||null===e.target.value?(_(!0),P(!0)):(j((function(a){return Object(k.a)(Object(k.a)({},a),{},{password:e.target.value,passwordConfirm:e.target.value})})),_(!1),P(!1)))},te=function(e){if(e.preventDefault(),V(!0),!1===q&&!1===v&&!1===A&&!1===w){var t={name:i.name,email:i.email,password:i.password,passwordConfirm:i.passwordConfirm};V(!1),a(function(e){return function(){var a=Object(g.a)(f.a.mark((function a(t){var s,c,n;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s=JSON.stringify(e),a.prev=1,a.next=4,N.a.post("https://chidi-search.herokuapp.com/api/v1/user/signup",JSON.parse(s));case 4:return c=a.sent,t({type:C,message:"success",payload:c.data}),a.abrupt("return",Promise.resolve());case 9:return a.prev=9,a.t0=a.catch(1),11e3===a.t0.response.data.error.code&&(n="email already exist!"),t({type:F,message:n}),a.abrupt("return",Promise.reject());case 15:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}()}(t)).then((function(){console.log("logged in"),c("/login"),ee("success")})).catch((function(){$(!0),ee("email already taken")}))}else $(!0)};return Object(h.jsx)("section",{className:"signup",children:Object(h.jsx)(z,{children:Object(h.jsxs)("form",{noValidate:!0,className:"signup-form",onSubmit:function(e){return te(e)},children:[Object(h.jsx)("h2",{className:"signup-heading_text",style:{marginBottom:"15px"},children:"create account"}),Y&&Object(h.jsx)("div",{className:"warning",children:Object(h.jsx)("h1",{className:"warning-text",children:X||"something went wrong!"})}),Object(h.jsxs)("div",{className:"signup-div",children:[Object(h.jsxs)("div",{className:"signup-form_group",children:[Object(h.jsx)("input",{type:"text",onChange:function(e){return function(e){j((function(a){return Object(k.a)(Object(k.a)({},a),{},{name:e.target.value})})),""!==e.target.value&&null!==e.target.value&&(/^[a-zA-Z][a-zA-Z\s]*$/g.test(e.target.value)?(e.persist(),j((function(a){return Object(k.a)(Object(k.a)({},a),{},{name:e.target.value})}))):(J(!0),m("field should contain valid string")))}(e)},className:"signup-form_input",placeholder:"Full name",id:"name",name:"name",required:!0}),Object(h.jsx)("label",{htmlFor:"name",className:"signup-form_label",children:"Full name"}),q?Object(h.jsx)("p",{className:"login-warningText",children:p}):""]}),Object(h.jsxs)("div",{className:"signup-form_group",children:[Object(h.jsx)("input",{type:"email",onChange:function(e){return function(e){j((function(a){return Object(k.a)(Object(k.a)({},a),{},{email:e.target.value})})),/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g.test(e.target.value)?(e.persist(),console.log("hit here!"),j((function(a){return Object(k.a)(Object(k.a)({},a),{},{email:e.target.value})})),B(!1)):B(!0)}(e)},className:"signup-form_input",placeholder:"email address",id:"email",name:"email",required:!0}),Object(h.jsx)("label",{htmlFor:"email",className:"signup-form_label",children:"email address"}),A?Object(h.jsx)("p",{className:"signup-warningText",children:"please input a valid email address"}):""]}),Object(h.jsxs)("div",{className:"signup-form_group",children:[Object(h.jsx)("input",{type:"password",onChange:function(e){return ae(e)},className:"signup-form_input",placeholder:"Password",id:"password",name:"password",required:!0}),Object(h.jsx)("label",{htmlFor:"password",className:"signup-form_label",children:"password"})]}),Object(h.jsxs)("div",{className:"signup-form_group",children:[Object(h.jsx)("input",{type:"password",onChange:function(e){return ae(e)},className:"signup-form_input",placeholder:"confirm Password",id:"passwordConfirm",name:"passwordConfirm",required:!0}),Object(h.jsx)("label",{htmlFor:"passwordConfirm",className:"signup-form_label",children:"confirm password"}),i.password!==i.passwordConfirm&&Object(h.jsx)("p",{className:"signup-warningText",children:"both password does not match!"})]}),Object(h.jsx)("div",{className:"signup-form_buttons",children:Object(h.jsx)("button",{className:"".concat(R&&"signup-disabled"," signup-form_btn"),type:"submit",disabled:R,children:Z?Object(h.jsx)("div",{className:"loading-button"}):"signup"})})]})]})})})},q=function(){var e=Object(o.b)(),a=Object(o.c)((function(e){return e.user})),t=Object(l.f)();console.log(a);var c=Object(s.useState)({email:"",password:""}),n=Object(d.a)(c,2),r=n[0],i=n[1],j=Object(s.useState)(""),u=Object(d.a)(j,2),b=u[0],p=u[1],m=Object(s.useState)(!1),O=Object(d.a)(m,2),x=O[0],v=O[1],_=Object(s.useState)(!1),y=Object(d.a)(_,2),S=y[0],w=y[1],C=Object(s.useState)(!1),F=Object(d.a)(C,2),T=F[0],q=F[1],J=Object(s.useState)(!1),L=Object(d.a)(J,2),E=L[0],A=(L[1],Object(s.useState)(!1)),B=Object(d.a)(A,2),D=B[0],U=B[1],Z=function(a){if(a.preventDefault(),q(!0),!1===x&&!1===S){var s={email:r.email,password:r.password};console.log(s),q(!1),e(function(e){return function(){var a=Object(g.a)(f.a.mark((function a(t){var s,c,n,r;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s=JSON.stringify(e),a.prev=1,a.next=4,N.a.post("https://chidi-search.herokuapp.com/api/v1/user/login",JSON.parse(s));case 4:return c=a.sent,t({type:P,message:"Login successful!",payload:c.data}),a.abrupt("return",Promise.resolve());case 9:return a.prev=9,a.t0=a.catch(1),(n=a.t0.response.data.error)?401===n.statusCode&&(r="incorrect email or password!"):r="server not reachable!",t({type:I,message:r}),a.abrupt("return",Promise.reject());case 15:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}()}(s)).then((function(){console.log("logged in"),t("/dashboard/home"),p("success")})).catch((function(){U(!0),p("email already taken")}))}else U(!0)};return Object(h.jsx)(z,{children:Object(h.jsxs)("form",{noValidate:!0,className:"signup-form",onSubmit:function(e){return Z(e)},children:[Object(h.jsx)("h2",{className:"signup-heading_text",style:{marginBottom:"15px"},children:"login"}),D&&Object(h.jsxs)("div",{className:"warning",children:[console.log(b),Object(h.jsx)("h1",{className:"warning-text",children:b&&Object(h.jsx)("span",{children:b})})]}),Object(h.jsxs)("div",{className:"signup-div",children:[Object(h.jsxs)("div",{className:"signup-form_group",children:[Object(h.jsx)("input",{type:"email",onChange:function(e){return function(e){i((function(a){return Object(k.a)(Object(k.a)({},a),{},{email:e.target.value})})),/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g.test(e.target.value)?(e.persist(),console.log("hit here!"),i((function(a){return Object(k.a)(Object(k.a)({},a),{},{email:e.target.value})})),v(!1)):v(!0)}(e)},className:"signup-form_input",placeholder:"email address",id:"email",name:"email",required:!0}),Object(h.jsx)("label",{htmlFor:"email",className:"signup-form_label",children:"email address"}),x?Object(h.jsx)("p",{className:"signup-warningText",children:"please input a valid email address"}):""]}),Object(h.jsxs)("div",{className:"signup-form_group",children:[Object(h.jsx)("input",{type:"password",onChange:function(e){return function(e){i((function(a){return Object(k.a)(Object(k.a)({},a),{},{password:e.target.value})})),"password"===e.target.name&&(""===e.target.value||null===e.target.value?w(!0):(i((function(a){return Object(k.a)(Object(k.a)({},a),{},{password:e.target.value})})),w(!1)))}(e)},className:"signup-form_input",placeholder:"Password",id:"password",name:"password",required:!0}),Object(h.jsx)("label",{htmlFor:"password",className:"signup-form_label",children:"password"})]}),Object(h.jsx)("div",{className:"signup-form_buttons",children:Object(h.jsx)("button",{className:"".concat(E&&"signup-disabled"," signup-form_btn"),type:"submit",disabled:E,children:T?Object(h.jsx)("div",{className:"loading-button"}):"login"})})]})]})})},J=t(69),L=t.n(J),E=(t(111),t(178)),A=t(179),B=t(180),D=t(67),U=t.n(D),Z=function(e){var a=e.username;return Object(h.jsxs)("header",{className:"dashboard-header",children:[Object(h.jsx)("h2",{className:"dashboard-header-hdText",children:"overview"}),Object(h.jsxs)("form",{action:"#",className:"dashboard-header-form",children:[Object(h.jsx)("button",{className:"dashboard-header-form_button",children:Object(h.jsx)(u.a,{className:"dashboard-header-form_icon"})}),Object(h.jsx)("input",{type:"search",className:"dashboard-header-form_input",placeholder:"search"})]}),Object(h.jsxs)("div",{className:"dashboard-header-notification",children:[Object(h.jsx)(E.a,{className:"dashboard-header-notification_icon"}),Object(h.jsx)("span",{className:"dashboard-header-notification-circle"})]}),Object(h.jsxs)("div",{className:"dashboard-header-userBox",children:[Object(h.jsx)("span",{children:Object(h.jsx)(A.a,{className:"dashboard-header-userBox_avaticon"})}),Object(h.jsx)("span",{className:"dashboard-header-userBox_text",children:a}),Object(h.jsx)("span",{children:Object(h.jsx)(U.a,{className:"dashboard-header-userBox_icon"})})]}),Object(h.jsx)("div",{className:"dashboard-header-setting dashboard-header-notification",children:Object(h.jsx)("span",{children:Object(h.jsx)(B.a,{className:"dashboard-header-notification_icon"})})})]})},V=t(181),G=t(182),H=t(183),R=t(184),Q=function(e){return Object(h.jsx)("section",{className:"dashboard",children:Object(h.jsxs)("div",{className:"dashboard-container",children:[Object(h.jsxs)("nav",{className:"dashboard-side_bar",children:[Object(h.jsx)("h1",{className:"header-logo",style:{marginTop:"25px",color:"white"},children:Object(h.jsxs)(i.b,{to:"/",className:"backLink",children:["soft",Object(h.jsx)("span",{children:"Search"})]})}),Object(h.jsxs)("ul",{className:"dashboard-sideNav",children:[Object(h.jsx)("li",{className:"dashboard-sideNav-item dashboard-sideNav-item--active",children:Object(h.jsxs)(i.c,{className:"dashboard-sideNav-link",to:"/dashboard/home",children:[Object(h.jsx)("span",{children:Object(h.jsx)(V.a,{className:"dashboard-sideNav-logo"})}),Object(h.jsx)("span",{children:"create new"})]})}),Object(h.jsx)("li",{className:"dashboard-sideNav-item",children:Object(h.jsxs)(i.c,{className:"dashboard-sideNav-link",to:"/dashboard/getPosts",children:[Object(h.jsx)("span",{children:Object(h.jsx)(G.a,{className:"dashboard-sideNav-logo"})}),Object(h.jsx)("span",{children:"get all posts"})]})})]}),Object(h.jsxs)("footer",{children:[Object(h.jsx)("ul",{children:Object(h.jsx)("li",{className:"dashboard-sideNav-item",children:Object(h.jsxs)(i.c,{className:"dashboard-sideNav-link",to:"/dashboard/profile",children:[Object(h.jsx)("span",{children:Object(h.jsx)(H.a,{className:"dashboard-sideNav-logo"})}),Object(h.jsx)("span",{children:"profile"})]})})}),Object(h.jsx)("ul",{children:Object(h.jsx)("li",{className:"dashboard-sideNav-item",children:Object(h.jsxs)(i.c,{className:"dashboard-sideNav-link",to:"#",children:[Object(h.jsx)("span",{children:Object(h.jsx)(R.a,{className:"dashboard-sideNav-logo"})}),Object(h.jsx)("span",{children:"logout"})]})})})]})]}),Object(h.jsxs)("div",{className:"dashboard-content",children:[Object(h.jsx)(Z,{username:e.username}),Object(h.jsx)(h.Fragment,{children:e.children})]})]})})},M=function(e){var a=e.name,t=e.children;return document.body.classList.add("bg-color"),Object(h.jsx)(Q,{username:a,children:Object(h.jsx)("main",{className:"dashboard-main",children:t})})},Y=t(68),$=t.n(Y),K=function(e){var a=e.content,t=e.handleClose;return Object(h.jsx)("div",{className:"popup-flex popup-box",children:Object(h.jsxs)("div",{className:"popup-auth-center popup--animate",children:[Object(h.jsx)($.a,{className:"warning-icon"}),Object(h.jsx)("span",{className:"text",children:a}),Object(h.jsx)("button",{onClick:t,className:"popup-button",children:"\xd7"})]})})},W=function(e){var a=Object(o.c)((function(e){return e.user})),t=Object(l.f)();console.log(a);var c=a.user,n=a.loggedIn,r=(a.message,c.email,c.name),i=Object(s.useState)(""),j=Object(d.a)(i,2),u=j[0],b=j[1],p=Object(s.useState)(""),m=Object(d.a)(p,2),O=m[0],x=m[1],f=Object(s.useState)(""),g=Object(d.a)(f,2),v=g[0],_=g[1],y=Object(s.useState)(""),S=Object(d.a)(y,2),w=S[0],k=S[1],C=Object(s.useState)(""),F=Object(d.a)(C,2),P=F[0],I=F[1],z=Object(s.useState)(""),T=Object(d.a)(z,2),q=(T[0],T[1],Object(s.useState)(!1)),J=Object(d.a)(q,2),E=J[0],A=J[1],B=Object(s.useState)(""),D=Object(d.a)(B,2),U=D[0],Z=D[1],V=Object(s.useState)(new Date),G=Object(d.a)(V,2),H=G[0],R=G[1];Object(s.useEffect)((function(){n||t("/login")}),[]);E&&setTimeout((function(){A(!1)}),5e3);return Object(h.jsx)(M,{name:r,children:Object(h.jsxs)("div",{className:"dashlayout",children:[E&&Object(h.jsx)(K,{content:U,handleClose:function(){return A(!E)}}),Object(h.jsxs)("div",{className:"dashboardHomeSetting-box",children:[Object(h.jsx)("h3",{style:{color:"white",fontSize:"18px"},children:"create new record"}),Object(h.jsx)("div",{className:"dashboardHomeSetting-panel",children:Object(h.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var a={project_topic:u,author_name:O,supervisor_name:v,ref:[w],body:[P],yearOfPub:H};console.log(a),console.log(H);try{N.a.post("http://localhost:5000/api/v1/post",a).then((function(e){"success"===e.data.status&&(console.log("here!"),A(!0),Z("uploaded successfully"))})).catch((function(e){A(!0),Z("server not reachable!")}))}catch(t){A(!0),Z("could not upload data!")}}(e)},children:[Object(h.jsxs)("h3",{style:{color:"white",fontSize:"15px"},children:["project topic",Object(h.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(h.jsxs)("div",{className:"signup-form_group",children:[Object(h.jsx)("input",{type:"text",onChange:function(e){return b(e.target.value)},className:"signup-form_input",placeholder:"project topic",id:"topic",name:"topic",required:!0}),Object(h.jsx)("label",{htmlFor:"topic",className:"signup-form_label",children:"project topic"})]}),Object(h.jsxs)("h3",{style:{color:"white",fontSize:"15px"},children:["author name",Object(h.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(h.jsxs)("div",{className:"signup-form_group",children:[Object(h.jsx)("input",{type:"text",onChange:function(e){return x(e.target.value)},className:"signup-form_input",placeholder:"author name",id:"name",name:"name",required:!0}),Object(h.jsx)("label",{htmlFor:"name",className:"signup-form_label",children:"author name"})]}),Object(h.jsxs)("h3",{style:{color:"white",fontSize:"15px"},children:["supervisor name",Object(h.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(h.jsxs)("div",{className:"signup-form_group",children:[Object(h.jsx)("input",{type:"text",onChange:function(e){return _(e.target.value)},className:"signup-form_input",placeholder:"supervisor name",id:"super_name",name:"super_name",required:!0}),Object(h.jsx)("label",{htmlFor:"super_name",className:"signup-form_label",children:"supervisor name"})]}),Object(h.jsxs)("h3",{style:{color:"white",fontSize:"15px"},children:["reference",Object(h.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(h.jsx)("div",{className:"signup-form_group",children:Object(h.jsx)("textarea",{required:!0,className:"signup-form_input dashboardHomeSetting_form-input-text",placeholder:"reference",id:"ref",name:"ref",onChange:function(e){return k(e.target.value)}})}),Object(h.jsxs)("h3",{style:{color:"white",fontSize:"15px"},children:["body",Object(h.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(h.jsx)("div",{className:"signup-form_group",children:Object(h.jsx)("textarea",{required:!0,className:"signup-form_input dashboardHomeSetting_form-input-text",placeholder:"body",id:"body",name:"body",onChange:function(e){return I(e.target.value)}})}),Object(h.jsx)(L.a,{selected:H,onChange:function(e){return R(e)}}),Object(h.jsx)("button",{className:"btn btn--small btn--gold",style:{fontSize:"12px",marginTop:"10px"},children:"save changes"})]})})]})]})})},X="http://127.0.0.1:5000",ee="".concat(X,"/api/v1/post"),ae=("".concat(X,"/api/v1/post/search"),"".concat(X,"/api/v1/post/search/name"),"".concat(X,"/api/v1/post/search/topic"),"".concat(X,"/api/v1/post/search/body"),"".concat(X,"/api/v1/user/signup"),"".concat(X,"/api/v1/user/login"),function(){var e=Object(s.useState)([]),a=Object(d.a)(e,2),t=a[0],c=a[1],n=Object(s.useState)(!1),r=Object(d.a)(n,2),o=(r[0],r[1]),l=Object(s.useState)(!1),j=Object(d.a)(l,2),u=(j[0],j[1]);return Object(s.useEffect)((function(){var e;(function(){var a=Object(g.a)(f.a.mark((function a(){var t;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,N.a.get("".concat(ee));case 3:e=a.sent,t=e.data.data,c(t),o(!1),u(!1),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(0),o(!1),u(!0);case 14:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(){return a.apply(this,arguments)}})()()}),[]),console.log(t),Object(h.jsx)(M,{children:Object(h.jsx)("div",{className:"cell",children:Object(h.jsx)("div",{className:"get-posts",children:t.map((function(e){return Object(h.jsx)(i.b,{to:"/post/".concat(e._id),className:"cell-link",children:Object(h.jsx)("ul",{className:"cell-lists",children:Object(h.jsx)(_,{author:e.author_name,title:e.project_topic,body:e.body[0],yearOfPub:e.yearOfPub.split("T")[0]})})})}))})})})}),te=function(){return Object(h.jsx)(i.a,{children:Object(h.jsx)(j.a,{children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/",element:Object(h.jsx)(O,{})}),Object(h.jsx)(l.a,{path:"/search/:searchQuery/:id",element:Object(h.jsx)(S,{})}),Object(h.jsx)(l.a,{path:"/post/:id",element:Object(h.jsx)(w,{})}),Object(h.jsx)(l.a,{path:"/signup",element:Object(h.jsx)(T,{})}),Object(h.jsx)(l.a,{path:"/login",element:Object(h.jsx)(q,{})}),Object(h.jsx)(l.a,{path:"/dashboard/home",element:Object(h.jsx)(W,{})}),Object(h.jsx)(l.a,{path:"/dashboard/getPosts",element:Object(h.jsx)(ae,{})})]})})})},se=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,185)).then((function(a){var t=a.getCLS,s=a.getFID,c=a.getFCP,n=a.getLCP,r=a.getTTFB;t(e),s(e),c(e),n(e),r(e)}))},ce=t(35),ne=t(72),re={loggedIn:!1,user:{},message:""},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case C:localStorage.setItem("token",JSON.stringify(a.payload.token));JSON.parse(localStorage.getItem("token"));return Object(k.a)(Object(k.a)({},e),{},{loggedIn:!0,user:a.payload.user,message:a.message});case F:return Object(k.a)(Object(k.a)({},e),{},{loggedIn:!1,user:{},message:a.message});case P:localStorage.setItem("token",JSON.stringify(a.payload.token));JSON.parse(localStorage.getItem("token"));return Object(k.a)(Object(k.a)({},e),{},{loggedIn:!0,user:a.payload.user,message:a.message});case I:return Object(k.a)(Object(k.a)({},e),{},{loggedIn:!1,user:null,message:a.message});default:return e}},ie=Object(ce.b)({user:oe}),le=Object(ce.c)(ie,{},Object(ce.a)(ne.a));r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(o.a,{store:le,children:Object(h.jsx)(te,{})})}),document.getElementById("root")),se()},86:function(e,a,t){},90:function(e,a,t){}},[[155,1,2]]]);
//# sourceMappingURL=main.8155d6d9.chunk.js.map