(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{35:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var s=t(1),c=t.n(s),n=t(29),i=t.n(n),o=(t(35),t.p,t(19),t(8)),l=t(10),r=t.n(l),d=t(11),h=t(0);var b=function(){var e=Object(s.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1];return Object(s.useEffect)((function(){r()({method:"GET",url:"http://127.0.0.1:8080/api/category/"}).then((function(e){c(e.data)}))}),[]),Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(h.jsxs)("ul",{className:"navbar-nav",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),t.map((function(e){return Object(h.jsx)(d.b,{className:"nav-link",to:{pathname:"/category/".concat(e.id,"/"),fromDashboard:!1},children:e.name})}))]})})]})})};var p=function(e){var a=e.match,t=Object(s.useState)({}),c=Object(o.a)(t,2),n=c[0],i=c[1],l=Object(s.useState)([]),b=Object(o.a)(l,2),p=b[0],j=b[1],u=a.params.id;return Object(s.useEffect)((function(){r()({method:"GET",url:"http://127.0.0.1:8080/api/category/".concat(u,"/")}).then((function(e){i(e.data),j(e.data.posts)}))}),[u]),Object(h.jsxs)("div",{children:["Category with id ",n.id,Object(h.jsxs)("p",{children:["Category ",Object(h.jsx)("strong",{children:n.name})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js",integrity:"sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB",crossorigin:"anonymous"}),Object(h.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js",integrity:"sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13",crossorigin:"anonymous"}),Object(h.jsxs)("div",{className:"accordion accordion-flush",id:"accordionPanelsStayOpenExample",children:[Object(h.jsxs)("div",{className:"accordion-item",children:[Object(h.jsx)("h2",{className:"accordion-header",id:"panelsStayOpen-headingOne",children:Object(h.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseOne","aria-expanded":"true","aria-controls":"panelsStayOpen-collapseOne",children:"Accordion Item #1"})}),Object(h.jsx)("div",{id:"panelsStayOpen-collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"panelsStayOpen-headingOne",children:Object(h.jsxs)("div",{className:"accordion-body",children:[Object(h.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(h.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(h.jsxs)("div",{className:"accordion-item",children:[Object(h.jsx)("h2",{className:"accordion-header",id:"panelsStayOpen-headingTwo",children:Object(h.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseTwo","aria-expanded":"false","aria-controls":"panelsStayOpen-collapseTwo",children:"Accordion Item #2"})}),Object(h.jsx)("div",{id:"panelsStayOpen-collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"panelsStayOpen-headingTwo",children:Object(h.jsxs)("div",{className:"accordion-body",children:[Object(h.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(h.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(h.jsxs)("div",{className:"accordion-item",children:[Object(h.jsx)("h2",{className:"accordion-header",id:"panelsStayOpen-headingThree",children:Object(h.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseThree","aria-expanded":"false","aria-controls":"panelsStayOpen-collapseThree",children:"Accordion Item #3"})}),Object(h.jsx)("div",{id:"panelsStayOpen-collapseThree",className:"accordion-collapse collapse","aria-labelledby":"panelsStayOpen-headingThree",children:Object(h.jsxs)("div",{className:"accordion-body",children:[Object(h.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(h.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(h.jsx)("div",{className:"row",children:p.map((function(e){return Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto",children:[Object(h.jsx)("h4",{children:e.title}),Object(h.jsx)("p",{children:e.content}),Object(h.jsx)("p",{children:e.id}),Object(h.jsx)("img",{src:e.image,alt:e.title,className:"img-fluid"})]}),Object(h.jsx)(d.b,{to:{pathname:"/posts/".concat(e.id),fromDashboard:!1},children:Object(h.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto",children:Object(h.jsx)("button",{className:"btn btn-primary",type:"button",children:"\u0414\u0435\u0442\u0430\u043b\u0438"})})})]},e.id)}))})]})};var j=function(e){var a=e.match,t=Object(s.useState)({}),c=Object(o.a)(t,2),n=c[0],i=c[1],l=a.params.id;return Object(s.useEffect)((function(){r()({method:"GET",url:"http://127.0.0.1:8080/api/blogpost/".concat(l,"/")}).then((function(e){i(e.data)}))}),[l]),Object(h.jsxs)("div",{children:["Post with id ",n.id,Object(h.jsxs)("p",{children:["Title ",Object(h.jsx)("strong",{children:n.title})]})]})},u=t(2);var m=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(b,{}),Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{path:"/posts/:id/",exact:!0,component:j}),Object(h.jsx)(u.a,{path:"/category/:id/",exact:!0,component:p})]})]})})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,61)).then((function(a){var t=a.getCLS,s=a.getFID,c=a.getFCP,n=a.getLCP,i=a.getTTFB;t(e),s(e),c(e),n(e),i(e)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),O()}},[[60,1,2]]]);
//# sourceMappingURL=main.0e68b4dc.chunk.js.map