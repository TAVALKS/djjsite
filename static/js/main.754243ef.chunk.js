(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{39:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(33),r=a.n(s),i=(a(39),a.p,a(17),a(8)),l=a(9),o=a.n(l),d=(a(29),a(10)),j=a(0);var b=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8080/api/category/"}).then((function(e){n(e.data)}))}),[]),Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("a",{className:"navbar-brand",href:"#"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(j.jsxs)("ul",{className:"navbar-nav mx-auto",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)("div",{class:"dropdown",children:[Object(j.jsx)("button",{id:"main-navbar",type:"button",class:"btn btn-danger dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(j.jsxs)("ul",{class:"dropdown-menu","aria-labelledby":"main-navbar",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{class:"dropdown-item",href:"#",children:"Action"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{class:"dropdown-item",href:"#",children:"Another action"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{class:"dropdown-item",href:"#",children:"Something else here"})})]})]})}),a.map((function(e){return Object(j.jsx)(d.b,{className:"nav-link",to:{pathname:"/category/".concat(e.id,"/"),fromDashboard:!1},children:e.name})})),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("button",{className:"btn btn-primary",type:"button","aria-current":"page",href:"#",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})})]})})]})})};var h=function(e){var t=e.match,a=Object(c.useState)({}),n=Object(i.a)(a,2),s=(n[0],n[1]),r=Object(c.useState)([]),l=Object(i.a)(r,2),b=l[0],h=l[1],u=t.params.id;return Object(c.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8080/api/category/".concat(u,"/")}).then((function(e){s(e.data),h(e.data.posts)}))}),[u]),Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),Object(j.jsx)("div",{className:"row justify-content-md-center",children:b.map((function(e){return Object(j.jsx)("div",{className:"row-md-4",children:0==e.in_archive&&Object(j.jsxs)("div",{className:"d-grid gap-1 col-6 mx-auto",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col",children:[Object(j.jsx)("h4",{children:e.title}),Object(j.jsx)("p",{children:e.content}),null!=e.audio&&Object(j.jsx)("audio",{controls:!0,children:Object(j.jsx)("source",{src:e.audio,type:"audio/mp3"})}),null!=e.video&&Object(j.jsx)("iframe",{src:e.video,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]}),Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("img",{src:e.image,className:"center"})})]}),Object(j.jsxs)(d.b,{to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:[Object(j.jsx)("div",{className:"mx-auto",children:Object(j.jsx)("button",{className:"btn btn-primary",type:"button",children:"\u0414\u0435\u0442\u0430\u043b\u0438"})}),Object(j.jsx)("hr",{})]})]})},e.id)}))})]})};var u=function(e){var t=e.match,a=Object(c.useState)({}),n=Object(i.a)(a,2),s=n[0],r=n[1],l=t.params.id;return Object(c.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8080/api/blogpost/".concat(l,"/")}).then((function(e){r(e.data)}))}),[l]),Object(j.jsxs)("div",{children:["Post with id ",s.id,Object(j.jsxs)("p",{children:["Title ",Object(j.jsx)("strong",{children:s.title})]})]})};var p=a(2);var m=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(d.a,{children:[Object(j.jsx)(b,{}),Object(j.jsxs)(p.c,{children:[Object(j.jsx)(p.a,{path:"/posts/:id/",exact:!0,component:u}),Object(j.jsx)(p.a,{path:"/category/:id/",exact:!0,component:h})]})]})})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,86)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),O()}},[[85,1,2]]]);
//# sourceMappingURL=main.754243ef.chunk.js.map