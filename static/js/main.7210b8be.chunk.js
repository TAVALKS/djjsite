(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{35:function(t,e,a){},60:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a.n(c),s=a(29),i=a.n(s),r=(a(35),a.p,a(19),a(8)),l=a(10),j=a.n(l),o=a(11),d=a(1);var b=function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),a=e[0],n=e[1];return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8080/api/category/"}).then((function(t){n(t.data)}))}),[]),Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(d.jsxs)("ul",{className:"navbar-nav",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),a.map((function(t){return Object(d.jsx)(o.b,{className:"nav-link",to:{pathname:"/category/".concat(t.id,"/"),fromDashboard:!1},children:t.name})}))]})})]})})};var h=function(t){var e=t.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],l=Object(c.useState)([]),b=Object(r.a)(l,2),h=b[0],u=b[1],p=e.params.id;return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8080/api/category/".concat(p,"/")}).then((function(t){i(t.data),u(t.data.posts)}))}),[p]),Object(d.jsxs)("div",{children:["Category with id ",s.id,Object(d.jsxs)("p",{children:["Category ",Object(d.jsx)("strong",{children:s.name})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"row",children:h.map((function(t){return Object(d.jsxs)("div",{className:"col-md-4",children:[Object(d.jsxs)("div",{class:"d-grid gap-2 col-6 mx-auto",children:[Object(d.jsx)("h4",{children:t.title}),Object(d.jsx)("p",{children:t.content}),Object(d.jsx)("p",{children:t.id}),Object(d.jsx)("img",{src:t.image,alt:t.title,class:"rounded",width:"250",height:"250"})]}),Object(d.jsx)(o.b,{to:{pathname:"/posts/".concat(t.id),fromDashboard:!1},children:Object(d.jsx)("div",{class:"d-grid gap-2 col-6 mx-auto",children:Object(d.jsx)("button",{class:"btn btn-primary",type:"button",children:"\u0414\u0435\u0442\u0430\u043b\u0438"})})})]},t.id)}))})]})};var u=function(t){var e=t.match,a=Object(c.useState)({}),n=Object(r.a)(a,2),s=n[0],i=n[1],l=e.params.id;return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8080/api/blogpost/".concat(l,"/")}).then((function(t){i(t.data)}))}),[l]),Object(d.jsxs)("div",{children:["Post with id ",s.id,Object(d.jsxs)("p",{children:["Title ",Object(d.jsx)("strong",{children:s.title})]})]})},p=a(2);var O=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(b,{}),Object(d.jsxs)(p.c,{children:[Object(d.jsx)(p.a,{path:"/posts/:id/",exact:!0,component:u}),Object(d.jsx)(p.a,{path:"/category/:id/",exact:!0,component:h})]})]})})},m=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),c(t),n(t),s(t),i(t)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),m()}},[[60,1,2]]]);
//# sourceMappingURL=main.7210b8be.chunk.js.map