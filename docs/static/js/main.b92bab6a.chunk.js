(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{12:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);n(12);var a=n(7),c=n.n(a),r=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))},i=n(2),s=n(1),u=n(10),o=n(8),j=n.n(o),l=n(0),d=function(t){var e=t.setCategory,n=Object(s.useState)(""),a=Object(i.a)(n,2),c=a[0],r=a[1];return Object(l.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>0&&(e((function(t){return[c].concat(Object(u.a)(t))})),r(""))},children:Object(l.jsx)("input",{type:"text",value:c,onChange:function(t){r(t.target.value)}})})};d.proptTypes={setCategory:j.a.func.isRequired};var f=d,p=n(11),b=n(6),h=n.n(b),m=n(9),g=function(){var t=Object(m.a)(h.a.mark((function t(e){var n,a,c,r,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=bZhQPhh6hzFwcvX3WxhAvLmScIDwxjJW&q=".concat(encodeURI(e),"&limit=5"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,r=c.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.original.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e=t.title,n=t.url;return Object(l.jsxs)("li",{className:"card animate__animated animate__zoomInDown",children:[Object(l.jsx)("img",{src:n,alt:e}),Object(l.jsx)("p",{className:"card__title ",children:e})]})},x=function(t){var e=t.category,n=function(t){var e=Object(s.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),a=n[0],c=n[1];return Object(s.useEffect)((function(){g(t).then((function(t){c({data:t,loading:!1})}))}),[t]),a}(e),a=n.data,c=n.loading;return Object(l.jsxs)("div",{className:"grid-container",children:[Object(l.jsx)("h3",{className:"animate__animated animate__fadeInLeft",children:e}),c&&Object(l.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando..."}),"",Object(l.jsx)("ol",{className:"card-grid",children:a.map((function(t){return Object(l.jsx)(O,Object(p.a)({},t),t.id)}))})]})},v=function(){var t=Object(s.useState)(["League of legends"]),e=Object(i.a)(t,2),n=e[0],a=e[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"GifExpertApp"}),Object(l.jsx)(f,{setCategory:a}),Object(l.jsx)("ul",{children:n.map((function(t){return Object(l.jsx)(x,{category:t},t)}))}),Object(l.jsx)("hr",{})]})};c.a.render(Object(l.jsx)(v,{}),document.getElementById("root")),r()}},[[21,1,2]]]);
//# sourceMappingURL=main.b92bab6a.chunk.js.map