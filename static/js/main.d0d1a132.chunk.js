(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{35:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),n=t(29),i=t.n(n),o=(t(35),t.p,t(19),t(8)),l=t(10),r=t.n(l),d=t(11),h=t(0);var b=function(){var e=Object(c.useState)([]),a=Object(o.a)(e,2),t=a[0],s=a[1];return Object(c.useEffect)((function(){r()({method:"GET",url:"http://127.0.0.1:8080/api/category/"}).then((function(e){s(e.data)}))}),[]),Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light ml-auto text-center",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(h.jsxs)("ul",{className:"navbar-nav",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),t.map((function(e){return Object(h.jsx)(d.b,{className:"nav-link",to:{pathname:"/category/".concat(e.id,"/"),fromDashboard:!1},children:e.name})}))]})})]})})};var j=function(e){var a=e.match,t=Object(c.useState)({}),s=Object(o.a)(t,2),n=s[0],i=s[1],l=Object(c.useState)([]),b=Object(o.a)(l,2),j=b[0],p=b[1],u=a.params.id;return Object(c.useEffect)((function(){r()({method:"GET",url:"http://127.0.0.1:8080/api/category/".concat(u,"/")}).then((function(e){i(e.data),p(e.data.posts)}))}),[u]),Object(h.jsxs)("div",{children:["Category with id ",n.id,Object(h.jsxs)("p",{children:["Category ",Object(h.jsx)("strong",{children:n.name})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"accordion accordion-flush",id:"accordionPanelsStayOpenExample",children:[Object(h.jsxs)("div",{className:"accordion-item",children:[Object(h.jsx)("h2",{className:"accordion-header",id:"panelsStayOpen-headingOne",children:Object(h.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseOne","aria-expanded":"true","aria-controls":"panelsStayOpen-collapseOne",children:"Accordion Item #1"})}),Object(h.jsx)("div",{id:"panelsStayOpen-collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"panelsStayOpen-headingOne",children:Object(h.jsxs)("div",{className:"accordion-body",children:[Object(h.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(h.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(h.jsxs)("div",{className:"accordion-item",children:[Object(h.jsx)("h2",{className:"accordion-header",id:"panelsStayOpen-headingTwo",children:Object(h.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseTwo","aria-expanded":"false","aria-controls":"panelsStayOpen-collapseTwo",children:"Accordion Item #2"})}),Object(h.jsx)("div",{id:"panelsStayOpen-collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"panelsStayOpen-headingTwo",children:Object(h.jsxs)("div",{className:"accordion-body",children:[Object(h.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(h.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(h.jsxs)("div",{className:"accordion-item",children:[Object(h.jsx)("h2",{className:"accordion-header",id:"panelsStayOpen-headingThree",children:Object(h.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseThree","aria-expanded":"false","aria-controls":"panelsStayOpen-collapseThree",children:"Accordion Item #3"})}),Object(h.jsx)("div",{id:"panelsStayOpen-collapseThree",className:"accordion-collapse collapse","aria-labelledby":"panelsStayOpen-headingThree",children:Object(h.jsxs)("div",{className:"accordion-body",children:[Object(h.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(h.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(h.jsx)("div",{className:"row",children:j.map((function(e){return Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto",children:[Object(h.jsx)("h4",{children:e.title}),Object(h.jsx)("p",{children:e.content}),Object(h.jsx)("p",{children:e.id}),Object(h.jsx)("img",{src:e.image,alt:e.title,className:"img-fluid"})]}),Object(h.jsx)(d.b,{to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:Object(h.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto",children:Object(h.jsx)("button",{className:"btn btn-primary",type:"button",children:"\u0414\u0435\u0442\u0430\u043b\u0438"})})})]},e.id)}))})]})};var p=function(e){var a=e.match,t=Object(c.useState)({}),s=Object(o.a)(t,2),n=s[0],i=s[1],l=a.params.id;return Object(c.useEffect)((function(){r()({method:"GET",url:"http://127.0.0.1:8080/api/blogpost/".concat(l,"/")}).then((function(e){i(e.data)}))}),[l]),Object(h.jsxs)("div",{children:["Post with id ",n.id,Object(h.jsxs)("p",{children:["Title ",Object(h.jsx)("strong",{children:n.title})]})]})},u=t(2);var O=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(b,{}),Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{path:"/posts/:id/",exact:!0,component:p}),Object(h.jsx)(u.a,{path:"/category/:id/",exact:!0,component:j})]})]})})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,61)).then((function(a){var t=a.getCLS,c=a.getFID,s=a.getFCP,n=a.getLCP,i=a.getTTFB;t(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),m()}},[[60,1,2]]]);
//# sourceMappingURL=main.d0d1a132.chunk.js.map