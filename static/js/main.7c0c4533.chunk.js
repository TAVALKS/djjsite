(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{35:function(e,t,a){},60:function(e,t){},61:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(29),i=a.n(s),r=(a(35),a.p,a(19),a(8)),j=a(10),l=a.n(j),o=a(11),b=a(1);var d=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8080/api/category/"}).then((function(e){n(e.data)}))}),[]),Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(b.jsxs)("ul",{className:"navbar-nav mx-auto",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),a.map((function(e){return Object(b.jsx)(o.b,{className:"nav-link",to:{pathname:"/category/".concat(e.id,"/"),fromDashboard:!1},children:e.name})}))]})})]})})};a(60);var u=function(e){var t=e.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=(n[0],n[1]),i=Object(c.useState)([]),j=Object(r.a)(i,2),d=j[0],u=j[1],h=t.params.id,O=Object(c.useState)("visually-hidden"),m=Object(r.a)(O,2),p=m[0],x=(m[1],Object(c.useRef)()),v=function(e){console.log(x.current.value)};return Object(c.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8080/api/category/".concat(h,"/")}).then((function(e){s(e.data),u(e.data.posts)}))}),[h]),Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"row justify-content-md-center",children:d.map((function(e){return Object(b.jsxs)("div",{className:"row-md-4",children:[Object(b.jsx)("div",{className:"d-grid gap-1 col-6 mx-auto",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("h4",{children:e.title}),Object(b.jsx)("p",{children:e.content}),Object(b.jsx)("input",{ref:x,type:"text"}),Object(b.jsx)("button",{onClick:v,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"}),Object(b.jsx)("audio",{controls:!0,className:p,children:Object(b.jsx)("source",{src:e.audio,type:"audio/mp3"})})]}),Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("img",{src:e.image,class:"center"})})]})}),Object(b.jsx)(o.b,{to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:Object(b.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto",children:Object(b.jsx)("button",{className:"btn btn-primary",type:"button",children:"\u0414\u0435\u0442\u0430\u043b\u0438"})})}),Object(b.jsx)("hr",{})]},e.id)}))})]})};var h=function(e){var t=e.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],j=t.params.id;return Object(c.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8080/api/blogpost/".concat(j,"/")}).then((function(e){i(e.data)}))}),[j]),Object(b.jsxs)("div",{children:["Post with id ",s.id,Object(b.jsxs)("p",{children:["Title ",Object(b.jsx)("strong",{children:s.title})]})]})},O=a(2);var m=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(d,{}),Object(b.jsxs)(O.c,{children:[Object(b.jsx)(O.a,{path:"/posts/:id/",exact:!0,component:h}),Object(b.jsx)(O.a,{path:"/category/:id/",exact:!0,component:u})]})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,62)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),p()}},[[61,1,2]]]);
//# sourceMappingURL=main.7c0c4533.chunk.js.map