(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{35:function(t,e,a){},60:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a.n(c),s=a(29),i=a.n(s),r=(a(35),a.p,a(19),a(8)),j=a(10),l=a.n(j),o=a(11),b=a(1);var d=function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),a=e[0],n=e[1];return Object(c.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8080/api/category/"}).then((function(t){n(t.data)}))}),[]),Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(b.jsxs)("ul",{className:"navbar-nav mx-auto",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),a.map((function(t){return Object(b.jsx)(o.b,{className:"nav-link",to:{pathname:"/category/".concat(t.id,"/"),fromDashboard:!1},children:t.name})}))]})})]})})};var h=function(t){var e=t.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],j=Object(c.useState)([]),d=Object(r.a)(j,2),h=d[0],u=d[1],p=e.params.id;return Object(c.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8080/api/category/".concat(p,"/")}).then((function(t){i(t.data),u(t.data.posts)}))}),[p]),Object(b.jsxs)("div",{children:["Category with id ",s.id,Object(b.jsxs)("p",{children:["Category ",Object(b.jsx)("strong",{children:s.name})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"row",children:h.map((function(t){return Object(b.jsxs)("div",{className:"col-md-4",children:[Object(b.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto",children:[Object(b.jsx)("h4",{children:t.title}),Object(b.jsx)("p",{children:t.content}),Object(b.jsx)("p",{children:t.id}),Object(b.jsx)("img",{src:t.image,alt:t.title,class:"center"})]}),Object(b.jsx)(o.b,{to:{pathname:"/posts/".concat(t.id),fromDashboard:!1},children:Object(b.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto",children:Object(b.jsx)("button",{className:"btn btn-primary",type:"button",children:"\u0414\u0435\u0442\u0430\u043b\u0438"})})})]},t.id)}))})]})};var u=function(t){var e=t.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],j=e.params.id;return Object(c.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8080/api/blogpost/".concat(j,"/")}).then((function(t){i(t.data)}))}),[j]),Object(b.jsxs)("div",{children:["Post with id ",s.id,Object(b.jsxs)("p",{children:["Title ",Object(b.jsx)("strong",{children:s.title})]})]})},p=a(2);var O=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(d,{}),Object(b.jsxs)(p.c,{children:[Object(b.jsx)(p.a,{path:"/posts/:id/",exact:!0,component:u}),Object(b.jsx)(p.a,{path:"/category/:id/",exact:!0,component:h})]})]})})},m=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),c(t),n(t),s(t),i(t)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),m()}},[[60,1,2]]]);
//# sourceMappingURL=main.fbbbafaf.chunk.js.map