(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{9187:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),i=t(1664);function s(){return(0,r.jsxs)("nav",{children:[(0,r.jsx)(i.default,{href:"/",children:"Home"}),(0,r.jsx)(i.default,{href:"/explorer",children:"Explorer"}),(0,r.jsx)(i.default,{href:"/questions",children:"Questions"}),(0,r.jsx)(i.default,{href:"/about",children:"About"})]})}},8047:function(e,n,t){"use strict";t.d(n,{P_:function(){return o},K4:function(){return u},k7:function(){return p}});var r=t(7757),i=t.n(r),s=t(2137),c=t(5893),a=t(7294);function o(e){var n=(0,a.useState)(e.visible||!1),t=n[0],r=n[1],i=e.classes||[],s=t?"block":"hidden";return(0,a.useEffect)((function(){r(e.visible)}),[e.visible]),(0,c.jsxs)("div",{className:"Notification ".concat(i.join(" ")," ").concat(s),children:[(0,c.jsx)("div",{className:"CloseHolder",children:(0,c.jsx)("span",{className:"Close",onClick:function(){r(!1)},children:"x"})}),e.children]})}function u(e){var n=e.data||e.error,t=n&&n.toString(),r=e.classes||["Failure"];return(0,c.jsx)("div",{children:(0,c.jsx)(o,{classes:r,visible:e.error,children:(0,c.jsx)("p",{children:t})})})}function l(){return(l=(0,s.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch("".concat("https://transithealth.herokuapp.com","/")).then((function(n){e(!0)})).catch((function(n){e(!1)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d="transithealth__last_ping",f="Connecting to our server...",h="Connected successfully!",x="Could not connect. Please reload page.";function p(){var e=(0,a.useState)(!0),n=e[0],t=e[1],r=(0,a.useState)(!0),i=r[0],s=r[1],u=(0,a.useState)(!1),p=u[0],v=u[1];(0,a.useEffect)((function(){var e,n,r=!0,i=localStorage.getItem(d);return(!i||Date.now()-i>=3e5)&&(e=setTimeout((function(){r&&v(!0)}),1e3),function(){return l.apply(this,arguments)}().then((function(e){r&&(s(e),t(!1)),e&&(localStorage.setItem(d,Date.now()),n=setTimeout((function(){r&&v(!1)}),1e3))}))),function(){r=!1,e&&clearTimeout(e),n&&clearTimeout(n)}}),[]);var j=["Bottom","Narrow",n?"":i?"Success":"Failure",!n&&i?"FadeOut":"FadeIn"],m=n?f:i?h:x;return(0,c.jsx)("div",{children:(0,c.jsx)(o,{classes:j,visible:p,children:(0,c.jsx)("p",{children:m})})})}},2025:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var r=t(5893),i=t(9008),s=t(9187),c=t(8047);function a(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"TransitHealth"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"description",content:"Explore transit and public health data across Chicago."}),(0,r.jsx)("link",{rel:"icon",href:"favicon.ico"})]}),(0,r.jsx)(s.Z,{}),(0,r.jsx)("main",{className:"About",children:(0,r.jsxs)("div",{className:"page",children:[(0,r.jsx)("h1",{children:"About"}),(0,r.jsx)("p",{children:"TransitHealth is developed by students at Scarlet Data Studio."})]})}),(0,r.jsx)(c.k7,{})]})}},8961:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(2025)}])}},function(e){e.O(0,[774,351,197],(function(){return n=8961,e(e.s=n);var n}));var n=e.O();_N_E=n}]);