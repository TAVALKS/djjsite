(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{39:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),s=t(33),r=t.n(s),i=(t(39),t.p,t(17),t(8)),l=t(9),o=t.n(l),d=(t(29),t(10)),b=t(0);var j=function(){var e=Object(c.useState)([]),a=Object(i.a)(e,2),t=a[0],n=a[1];return Object(c.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8080/api/category/"}).then((function(e){n(e.data)}))}),[]),Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(b.jsxs)("ul",{className:"navbar-nav mx-auto",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsxs)("div",{class:"dropdown",children:[Object(b.jsx)("button",{id:"main-navbar-primary",type:"button",class:"btn btn-danger dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false",children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"}),t.map((function(e){return Object(b.jsx)("ul",{class:"dropdown-menu","aria-labelledby":"main-navbar",children:e.in_main_menu&&Object(b.jsx)("li",{children:Object(b.jsx)("a",{class:"dropdown-item",href:"#",children:e.name})})})}))]})}),t.map((function(e){return Object(b.jsx)(d.b,{className:"nav-link",to:{pathname:"/category/".concat(e.id,"/"),fromDashboard:!1},children:e.name})})),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("button",{className:"btn btn-primary",type:"button","aria-current":"page",href:"#",children:"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441 \u0441 \u043d\u0430\u043c\u0438"})})]})})]})})};var u=function(e){var a=e.match,t=Object(c.useState)({}),n=Object(i.a)(t,2),s=(n[0],n[1]),r=Object(c.useState)([]),l=Object(i.a)(r,2),j=l[0],u=l[1],h=a.params.id;return Object(c.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8080/api/category/".concat(h,"/")}).then((function(e){s(e.data),u(e.data.posts)}))}),[h]),Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"row justify-content-md-center",children:j.map((function(e){return Object(b.jsx)("div",{className:"row-md-4",children:0==e.in_archive&&Object(b.jsxs)("div",{className:"d-grid gap-1 col-6 mx-auto",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("h4",{children:e.title}),Object(b.jsx)("p",{children:e.content}),null!=e.audio&&Object(b.jsx)("audio",{controls:!0,children:Object(b.jsx)("source",{src:e.audio,type:"audio/mp3"})}),null!=e.video&&Object(b.jsx)("iframe",{src:e.video,className:"d-grid gap-2 col-24 mx-auto",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]}),Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("img",{src:e.image,className:"center"})})]}),Object(b.jsxs)(d.b,{to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:[Object(b.jsx)("div",{className:"d-grid gap-2 col-12 mx-auto",children:Object(b.jsx)("button",{className:"btn btn-primary",type:"button",children:"\u0414\u0435\u0442\u0430\u043b\u0438"})}),Object(b.jsx)("hr",{})]})]})},e.id)}))})]})};var h=function(e){var a=e.match,t=Object(c.useState)({}),n=Object(i.a)(t,2),s=n[0],r=n[1],l=a.params.id;return Object(c.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8080/api/blogpost/".concat(l,"/")}).then((function(e){r(e.data)}))}),[l]),Object(b.jsxs)("div",{children:["Post with id ",s.id,Object(b.jsxs)("p",{children:["Title ",Object(b.jsx)("strong",{children:s.title})]})]})};var m=function(){return Object(b.jsx)("nav",{class:"navbar navbar-light bg-light mx-auto",children:Object(b.jsxs)("div",{class:"container-fluid mx-auto",children:[Object(b.jsx)("h4",{className:"navbar-brand mx-auto",href:"#",children:"\u041d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u043e\u0432, \u043f\u0435\u0441\u0435\u043d, \u043c\u0443\u0437\u044b\u043a\u0438 \u043d\u0430 \u0437\u0430\u043a\u0430\u0437"}),Object(b.jsx)("h4",{className:"navbar-brand mx-auto",href:"#",children:"9-9999-999-999"}),Object(b.jsx)("hr",{})]})})},p=t(2);var x=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(m,{}),Object(b.jsx)(j,{}),Object(b.jsxs)(p.c,{children:[Object(b.jsx)(p.a,{path:"/posts/:id/",exact:!0,component:h}),Object(b.jsx)(p.a,{path:"/category/:id/",exact:!0,component:u})]})]})})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,86)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,s=a.getLCP,r=a.getTTFB;t(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),O()}},[[85,1,2]]]);
//# sourceMappingURL=main.ceaef471.chunk.js.map