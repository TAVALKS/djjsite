(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{26:function(a,e,t){},46:function(a,e,t){"use strict";t.r(e);var n=t(0),c=t.n(n),r=t(21),s=t.n(r),i=(t(26),t.p,t(12),t(5)),l=t(8),o=t.n(l),b=t(9),j=t(2);var d=function(){var a=Object(n.useState)([]),e=Object(i.a)(a,2),t=e[0],c=e[1];return Object(n.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8080/api/category/"}).then((function(a){c(a.data)}))}),[]),Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(j.jsxs)("ul",{className:"navbar-nav",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),t.map((function(a){return Object(j.jsx)(b.b,{className:"nav-link",to:{pathname:"/category/".concat(a.id,"/"),fromDashboard:!1},children:a.name})}))]})})]})})};var h=function(a){var e=a.match,t=Object(n.useState)({}),c=Object(i.a)(t,2),r=c[0],s=c[1],l=e.params.id;return Object(n.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8080/api/category/".concat(l,"/")}).then((function(a){s(a.data)}))}),[l]),console.log("category:",r),Object(j.jsxs)("div",{children:["Category with id ",r.id,Object(j.jsxs)("p",{children:["Category ",Object(j.jsx)("strong",{children:r.name})]})]})},u=t(1);var v=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(b.a,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(u.c,{children:Object(j.jsx)(u.a,{path:"/category/:id/",exact:!0,component:h})})]})})},g=function(a){a&&a instanceof Function&&t.e(3).then(t.bind(null,47)).then((function(e){var t=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;t(a),n(a),c(a),r(a),s(a)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),g()}},[[46,1,2]]]);
//# sourceMappingURL=main.8797808f.chunk.js.map