(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{35:function(e,t,a){},60:function(e,t){},61:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(29),i=a.n(s),r=(a(35),a.p,a(19),a(8)),j=a(10),l=a.n(j),o=a(11),d=a(1);var b=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8080/api/category/"}).then((function(e){n(e.data)}))}),[]),Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"#"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(d.jsxs)("ul",{className:"navbar-nav mx-auto",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),a.map((function(e){return Object(d.jsx)(o.b,{className:"nav-link",to:{pathname:"/category/".concat(e.id,"/"),fromDashboard:!1},children:e.name})}))]})})]})})};a(60);var h=function(e){var t=e.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=(n[0],n[1]),i=Object(c.useState)([]),j=Object(r.a)(i,2),b=j[0],h=j[1],u=t.params.id,O=Object(c.useState)("visually-hidden"),m=Object(r.a)(O,2);return m[0],m[1],Object(c.useRef)(),Object(c.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8080/api/category/".concat(u,"/")}).then((function(e){s(e.data),h(e.data.posts)}))}),[u]),Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"row justify-content-md-center",children:b.map((function(e){return Object(d.jsxs)("div",{className:"row-md-4",children:[Object(d.jsx)("div",{className:"d-grid gap-1 col-6 mx-auto",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("h4",{children:e.title}),Object(d.jsx)("p",{children:e.content}),Object(d.jsx)("audio",{controls:!0,hidden:!0,children:Object(d.jsx)("source",{src:e.audio,type:"audio/mp3"})})]}),Object(d.jsx)("div",{className:"col",children:Object(d.jsx)("img",{src:e.image,class:"center"})})]})}),Object(d.jsx)(o.b,{to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:Object(d.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto",children:Object(d.jsx)("button",{className:"btn btn-primary",type:"button",children:"\u0414\u0435\u0442\u0430\u043b\u0438"})})}),Object(d.jsx)("hr",{})]},e.id)}))})]})};var u=function(e){var t=e.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],j=t.params.id;return Object(c.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8080/api/blogpost/".concat(j,"/")}).then((function(e){i(e.data)}))}),[j]),Object(d.jsxs)("div",{children:["Post with id ",s.id,Object(d.jsxs)("p",{children:["Title ",Object(d.jsx)("strong",{children:s.title})]})]})},O=a(2);var m=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(b,{}),Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{path:"/posts/:id/",exact:!0,component:u}),Object(d.jsx)(O.a,{path:"/category/:id/",exact:!0,component:h})]})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,62)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),p()}},[[61,1,2]]]);
//# sourceMappingURL=main.94f58e8d.chunk.js.map