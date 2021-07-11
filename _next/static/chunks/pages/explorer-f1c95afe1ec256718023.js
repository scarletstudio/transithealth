(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[547],{9187:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var i=t(5893),r=t(1664);function s(){return(0,i.jsxs)("nav",{children:[(0,i.jsx)(r.default,{href:"/",children:"Home"}),(0,i.jsx)(r.default,{href:"/explorer",children:"Explorer"}),(0,i.jsx)(r.default,{href:"/questions",children:"Questions"}),(0,i.jsx)(r.default,{href:"/about",children:"About"})]})}},8047:function(e,n,t){"use strict";t.d(n,{P_:function(){return l},K4:function(){return o},k7:function(){return x}});var i=t(7757),r=t.n(i),s=t(2137),c=t(5893),a=t(7294);function l(e){var n=(0,a.useState)(e.visible||!1),t=n[0],i=n[1],r=e.classes||[],s=t?"block":"hidden";return(0,a.useEffect)((function(){i(e.visible)}),[e.visible]),(0,c.jsxs)("div",{className:"Notification ".concat(r.join(" ")," ").concat(s),children:[(0,c.jsx)("div",{className:"CloseHolder",children:(0,c.jsx)("span",{className:"Close",onClick:function(){i(!1)},children:"x"})}),e.children]})}function o(e){var n=e.data||e.error,t=n&&n.toString(),i=e.classes||["Failure"];return(0,c.jsx)("div",{children:(0,c.jsx)(l,{classes:i,visible:e.error,children:(0,c.jsx)("p",{children:t})})})}function u(){return(u=(0,s.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch("".concat("https://transithealth.herokuapp.com","/")).then((function(n){e(!0)})).catch((function(n){e(!1)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d="transithealth__last_ping",h="Connecting to our server...",f="Connected successfully!",m="Could not connect. Please reload page.";function x(){var e=(0,a.useState)(!0),n=e[0],t=e[1],i=(0,a.useState)(!0),r=i[0],s=i[1],o=(0,a.useState)(!1),x=o[0],j=o[1];(0,a.useEffect)((function(){var e,n,i=!0,r=localStorage.getItem(d);return(!r||Date.now()-r>=3e5)&&(e=setTimeout((function(){i&&j(!0)}),1e3),function(){return u.apply(this,arguments)}().then((function(e){i&&(s(e),t(!1)),e&&(localStorage.setItem(d,Date.now()),n=setTimeout((function(){i&&j(!1)}),1e3))}))),function(){i=!1,e&&clearTimeout(e),n&&clearTimeout(n)}}),[]);var v=["Bottom","Narrow",n?"":r?"Success":"Failure",!n&&r?"FadeOut":"FadeIn"],p=n?h:r?f:m;return(0,c.jsx)("div",{children:(0,c.jsx)(l,{classes:v,visible:x,children:(0,c.jsx)("p",{children:p})})})}},8405:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var i=t(5893),r=t(9008),s=t(1664),c=t(9187),a=t(8047);function l(){return(0,i.jsxs)("div",{children:[(0,i.jsxs)(r.default,{children:[(0,i.jsx)("title",{children:"TransitHealth"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("meta",{name:"description",content:"Explore transit and public health data across Chicago."}),(0,i.jsx)("link",{rel:"icon",href:"favicon.ico"})]}),(0,i.jsx)(c.Z,{}),(0,i.jsx)("main",{className:"Explorer",children:(0,i.jsxs)("div",{className:"page",children:[(0,i.jsxs)("div",{className:"center",children:[(0,i.jsx)("h1",{children:"Data Explorer"}),(0,i.jsx)("p",{children:"Select a view to explore public transit and public health metrics."}),(0,i.jsx)("br",{})]}),(0,i.jsxs)("div",{className:"columns",children:[(0,i.jsxs)("div",{className:"column center",children:[(0,i.jsx)("h2",{children:"Timeline View"}),(0,i.jsx)("p",{children:"View data over time, on a weekly basis."}),(0,i.jsx)("br",{}),(0,i.jsx)(s.default,{href:"/timeline",children:(0,i.jsx)("a",{className:"btn primary",children:"Timeline View"})})]}),(0,i.jsx)("div",{className:"column PreviewImage",children:(0,i.jsx)("img",{src:"/transithealth/images/timeline_preview.png",alt:"Preview image for timeline view."})})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"columns",children:[(0,i.jsxs)("div",{className:"column center",children:[(0,i.jsx)("h2",{children:"Scatter View"}),(0,i.jsx)("p",{children:"Compare different data and community areas."}),(0,i.jsx)("br",{}),(0,i.jsx)(s.default,{href:"/scatter",children:(0,i.jsx)("a",{className:"btn primary",children:"Scatter View"})})]}),(0,i.jsx)("div",{className:"column PreviewImage",children:(0,i.jsx)("img",{src:"/transithealth/images/scatter_preview.png",alt:"Preview image for scatter view."})})]})]})}),(0,i.jsx)(a.k7,{})]})}},5491:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/explorer",function(){return t(8405)}])}},function(e){e.O(0,[774,351,197],(function(){return n=5491,e(e.s=n);var n}));var n=e.O();_N_E=n}]);