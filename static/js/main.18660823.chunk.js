(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{35:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(29),r=a.n(s),i=(a(35),a.p,a(19),a(8)),l=a(10),o=a.n(l),j=a(11),b=a(1);var d=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8080/api/category/"}).then((function(e){n(e.data)}))}),[]),Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(b.jsxs)("ul",{className:"navbar-nav mx-auto",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),a.map((function(e){return Object(b.jsx)(j.b,{className:"nav-link",to:{pathname:"/category/".concat(e.id,"/"),fromDashboard:!1},children:e.name})})),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("button",{className:"btn btn-primary",type:"button","background-color":"blue","aria-current":"page",href:"#",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})})]})})]})})};var u=function(e){var t=e.match,a=Object(c.useState)({}),n=Object(i.a)(a,2),s=(n[0],n[1]),r=Object(c.useState)([]),l=Object(i.a)(r,2),d=l[0],u=l[1],h=t.params.id;return Object(c.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8080/api/category/".concat(h,"/")}).then((function(e){s(e.data),u(e.data.posts)}))}),[h]),Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"row justify-content-md-center",children:d.map((function(e){return Object(b.jsxs)("div",{className:"row-md-4",children:[Object(b.jsx)("div",{className:"d-grid gap-1 col-6 mx-auto",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("h4",{children:e.title}),Object(b.jsx)("p",{children:e.content}),null!=e.audio&&Object(b.jsx)("audio",{controls:!0,children:Object(b.jsx)("source",{src:e.audio,type:"audio/mp3"})}),null!=e.video&&Object(b.jsx)("iframe",{src:e.video,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]}),Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("img",{src:e.image,className:"center"})})]})}),Object(b.jsx)(j.b,{to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:Object(b.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto",children:Object(b.jsx)("button",{className:"btn btn-primary",type:"button",children:"\u0414\u0435\u0442\u0430\u043b\u0438"})})}),Object(b.jsx)("hr",{})]},e.id)}))})]})};var h=function(e){var t=e.match,a=Object(c.useState)({}),n=Object(i.a)(a,2),s=n[0],r=n[1],l=t.params.id;return Object(c.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8080/api/blogpost/".concat(l,"/")}).then((function(e){r(e.data)}))}),[l]),Object(b.jsxs)("div",{children:["Post with id ",s.id,Object(b.jsxs)("p",{children:["Title ",Object(b.jsx)("strong",{children:s.title})]})]})},m=a(2);var p=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(d,{}),Object(b.jsxs)(m.c,{children:[Object(b.jsx)(m.a,{path:"/posts/:id/",exact:!0,component:h}),Object(b.jsx)(m.a,{path:"/category/:id/",exact:!0,component:u})]})]})})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),O()}},[[60,1,2]]]);
//# sourceMappingURL=main.18660823.chunk.js.map