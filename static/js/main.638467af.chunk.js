(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),i=c(4),l=c(1),r=(c(10),c(2)),s=c.n(r);function o(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}var j=c(0),d=function(e){var a=e.total,c=e.perPage,t=e.currentPage,n=e.onPageChange,i=e.pageItems,l=Math.ceil(a/c),r=1===t,d=t===l,u=o(1,l);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:s()("page-item",{disabled:r}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#".concat(t),"aria-disabled":r,onClick:function(){r||n(t-1)},children:"\xab"})}),u.map((function(e){return Object(j.jsx)("li",{className:s()("page-item",{active:t===e}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){n(e)},children:e})},e)})),Object(j.jsx)("li",{className:s()("page-item",{disabled:d}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#".concat(t),"aria-disabled":d,onClick:function(){d||n(t+1)},children:"\xbb"})})]}),Object(j.jsx)("ul",{children:i.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},e)}))})]})},u=o(1,42).map((function(e){return"Item ".concat(e)})),h=function(){var e=u.length,a=Object(l.useState)(5),c=Object(i.a)(a,2),t=c[0],n=c[1],r=Object(l.useState)(1),s=Object(i.a)(r,2),o=s[0],h=s[1],b=(o-1)*t+1,p=o*t>e?e:o*t,m=u.filter((function(e,a){return a>=b-1&&a<=p-1?e:0}));return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsxs)("p",{className:"lead","data-cy":"info",children:["Page"," ",o," ","(items"," ",b," - ",p," ","of"," ",e,")"]}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:t,onChange:function(e){n(+e.target.value),h(1)},children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:e,perPage:t,currentPage:o,onPageChange:function(e){h(e)},pageItems:m})]})};n.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.638467af.chunk.js.map