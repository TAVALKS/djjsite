(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{35:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(29),r=a.n(s),i=(a(35),a.p,a(19),a(8)),l=a(10),o=a.n(l),j=a(11),d=a(1);var b=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8080/api/category/"}).then((function(e){n(e.data)}))}),[]),Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"#"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(d.jsxs)("ul",{className:"navbar-nav mx-auto",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),a.map((function(e){return Object(d.jsx)(j.b,{className:"nav-link",to:{pathname:"/category/".concat(e.id,"/"),fromDashboard:!1},children:e.name})}))]})})]})})};var u=function(e){var t=e.match,a=Object(c.useState)({}),n=Object(i.a)(a,2),s=(n[0],n[1]),r=Object(c.useState)([]),l=Object(i.a)(r,2),b=l[0],u=l[1],h=t.params.id;return Object(c.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8080/api/category/".concat(h,"/")}).then((function(e){s(e.data),u(e.data.posts)}))}),[h]),Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"row justify-content-md-center",children:b.map((function(e){return Object(d.jsxs)("div",{className:"row-md-4",children:[Object(d.jsx)("a",{class:"nav-link active","aria-current":"page",href:"#",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"}),Object(d.jsx)("div",{className:"d-grid gap-1 col-6 mx-auto",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("h4",{children:e.title}),Object(d.jsx)("p",{children:e.content}),null!=e.audio&&Object(d.jsx)("audio",{controls:!0,children:Object(d.jsx)("source",{src:e.audio,type:"audio/mp3"})}),null!=e.video&&Object(d.jsx)("iframe",{src:e.video,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]}),Object(d.jsx)("div",{className:"col",children:Object(d.jsx)("img",{src:e.image,className:"center"})})]})}),Object(d.jsx)(j.b,{to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:Object(d.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto",children:Object(d.jsx)("button",{className:"btn btn-primary",type:"button",children:"\u0414\u0435\u0442\u0430\u043b\u0438"})})}),Object(d.jsx)("hr",{})]},e.id)}))})]})};var h=function(e){var t=e.match,a=Object(c.useState)({}),n=Object(i.a)(a,2),s=n[0],r=n[1],l=t.params.id;return Object(c.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8080/api/blogpost/".concat(l,"/")}).then((function(e){r(e.data)}))}),[l]),Object(d.jsxs)("div",{children:["Post with id ",s.id,Object(d.jsxs)("p",{children:["Title ",Object(d.jsx)("strong",{children:s.title})]})]})},p=a(2);var m=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(b,{}),Object(d.jsxs)(p.c,{children:[Object(d.jsx)(p.a,{path:"/posts/:id/",exact:!0,component:h}),Object(d.jsx)(p.a,{path:"/category/:id/",exact:!0,component:u})]})]})})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),O()}},[[60,1,2]]]);
//# sourceMappingURL=main.74eb235b.chunk.js.map