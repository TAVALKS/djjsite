(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{35:function(t,e,a){},60:function(t,e){},61:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a.n(c),s=a(29),i=a.n(s),r=(a(35),a.p,a(19),a(8)),o=a(10),j=a.n(o),l=a(11),d=a(1);var b=function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),a=e[0],n=e[1];return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8080/api/category/"}).then((function(t){n(t.data)}))}),[]),Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"#"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(d.jsxs)("ul",{className:"navbar-nav mx-auto",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),a.map((function(t){return Object(d.jsx)(l.b,{className:"nav-link",to:{pathname:"/category/".concat(t.id,"/"),fromDashboard:!1},children:t.name})}))]})})]})})};a(60);var h=function(t){var e=t.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=(n[0],n[1]),i=Object(c.useState)([]),o=Object(r.a)(i,2),b=o[0],h=o[1],u=e.params.id,O=Object(c.useState)(!1),m=Object(r.a)(O,2),p=m[0],x=m[1],v=function(t){x(!0),console.log(p)};return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8080/api/category/".concat(u,"/")}).then((function(t){s(t.data),h(t.data.posts)}))}),[u]),Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"row justify-content-md-center",children:b.map((function(t){return Object(d.jsxs)("div",{className:"row-md-4",children:[Object(d.jsx)("div",{className:"d-grid gap-1 col-6 mx-auto",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("h4",{children:t.title}),Object(d.jsx)("p",{children:t.content}),Object(d.jsx)("script",{children:v}),Object(d.jsx)("audio",{controls:!0,onLoad:v,hidden:p,children:Object(d.jsx)("source",{src:t.audio,type:"audio/mp3"})})]}),Object(d.jsx)("div",{className:"col",children:Object(d.jsx)("img",{src:t.image,class:"center"})})]})}),Object(d.jsx)(l.b,{to:{pathname:"/posts/".concat(t.id),fromDashboard:!1},children:Object(d.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto",children:Object(d.jsx)("button",{className:"btn btn-primary",type:"button",children:"\u0414\u0435\u0442\u0430\u043b\u0438"})})}),Object(d.jsx)("hr",{})]},t.id)}))})]})};var u=function(t){var e=t.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],o=e.params.id;return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8080/api/blogpost/".concat(o,"/")}).then((function(t){i(t.data)}))}),[o]),Object(d.jsxs)("div",{children:["Post with id ",s.id,Object(d.jsxs)("p",{children:["Title ",Object(d.jsx)("strong",{children:s.title})]})]})},O=a(2);var m=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(b,{}),Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{path:"/posts/:id/",exact:!0,component:u}),Object(d.jsx)(O.a,{path:"/category/:id/",exact:!0,component:h})]})]})})},p=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,62)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),c(t),n(t),s(t),i(t)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),p()}},[[61,1,2]]]);
//# sourceMappingURL=main.fd67be54.chunk.js.map