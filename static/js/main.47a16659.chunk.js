(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{35:function(t,e,a){},60:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a.n(c),s=a(29),i=a.n(s),r=(a(35),a.p,a(19),a(8)),j=a(10),o=a.n(j),l=a(11),b=a(1);var d=function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),a=e[0],n=e[1];return Object(c.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8080/api/category/"}).then((function(t){n(t.data)}))}),[]),Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(b.jsxs)("ul",{className:"navbar-nav mx-auto",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),a.map((function(t){return Object(b.jsx)(l.b,{className:"nav-link",to:{pathname:"/category/".concat(t.id,"/"),fromDashboard:!1},children:t.name})}))]})})]})})};var h=function(t){var e=t.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=(n[0],n[1]),i=Object(c.useState)([]),j=Object(r.a)(i,2),d=j[0],h=j[1],u=e.params.id;return Object(c.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8080/api/category/".concat(u,"/")}).then((function(t){s(t.data),h(t.data.posts)}))}),[u]),Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"row justify-content-md-center",children:d.map((function(t){return Object(b.jsxs)("div",{className:"row-md-4",children:[Object(b.jsx)("div",{className:"d-grid gap-1 col-6 mx-auto",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("h4",{children:t.title}),Object(b.jsx)("p",{children:t.content}),Object(b.jsx)("audio",{controls:!0,children:Object(b.jsx)("source",{src:t.audio,type:"audio/mp3"})}),Object(b.jsx)(l.b,{to:{pathname:"/posts/".concat(t.id),fromDashboard:!1},children:Object(b.jsx)("button",{className:"btn btn-primary mx-auto",type:"button",children:"\u0414\u0435\u0442\u0430\u043b\u0438"})})]}),Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("img",{src:t.image,alt:t.title,class:"center"})})]})}),Object(b.jsx)("hr",{})]},t.id)}))})]})};var u=function(t){var e=t.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],j=e.params.id;return Object(c.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8080/api/blogpost/".concat(j,"/")}).then((function(t){i(t.data)}))}),[j]),Object(b.jsxs)("div",{children:["Post with id ",s.id,Object(b.jsxs)("p",{children:["Title ",Object(b.jsx)("strong",{children:s.title})]})]})},m=a(2);var O=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(d,{}),Object(b.jsxs)(m.c,{children:[Object(b.jsx)(m.a,{path:"/posts/:id/",exact:!0,component:u}),Object(b.jsx)(m.a,{path:"/category/:id/",exact:!0,component:h})]})]})})},p=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),c(t),n(t),s(t),i(t)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),p()}},[[60,1,2]]]);
//# sourceMappingURL=main.47a16659.chunk.js.map