(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4308:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return b},default:function(){return v}});var n=r(5893),a=r(7757),i=r.n(a),c=r(2137),o=r(6156),s=r(7294),u=r(9008),l=r(1664),h=r(8911),f=r(2787),p=r(3909),d=r(1084);function m(e){var t=e.width?e.width:e.height?.8*e.height:300,r=e.height?e.height:e.width?e.width/.8:375,a=[t/2,r/2],i=t/300,c=r/375,o=e.scale||4e4*Math.max(i,c),u=e.offsetX||-.0475,l=(0,h.Z)(e.communityAreas),m=[l[0]+u,l[1]],j=(0,f.ZP)().center(m).scale(o).translate(a),x=e.defaultFill||"rgba(38, 50, 56, 1.0)",_=e.defaultStroke||"white",b=e.defaultOpacity||1,v=e.onAreaClick?(0,d.D)(100,e.onAreaClick):null,y=e.onAreaHover?(0,d.D)(100,e.onAreaHover):null,w=e.communityAreas.features,O=e.data||{},g=(0,s.useState)(-1),k=g[0],P=g[1];return(0,n.jsx)("div",{className:"ChicagoMap",children:(0,n.jsx)("svg",{width:t,height:r,viewBox:"0 0 ".concat(t," ").concat(r),children:(0,n.jsx)("g",{className:"areas",children:w.map((function(e,t){var r=e.properties,a=r.area_numbe,i=O[a]||{},c={name:r.community,number:a};return(0,n.jsx)("path",{className:"CommunityArea ".concat(k===t?"Selected":""),d:(0,p.Z)().projection(j)(e),fill:i.fill||x,stroke:i.stroke||_,fillOpacity:i.opacity||b,strokeWidth:.5,onClick:function(e){P(t),v&&v(c)},onMouseEnter:function(e){y&&y(c)}},"path-".concat(t))}))})})})}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e){var t=e.reduce((function(e,t){return Math.max(e,t.total_trips)}),0);return e.map((function(e){var r=e.total_trips/t;return x(x({},e),{},{opacity:Math.max(r,.05)})})).reduce((function(e,t){return e[t.pickup_community_area]=t,e}),{})}var b=!0;function v(e){var t=e.communityAreas,r=(0,s.useState)(null),a=r[0],o=r[1],h=(0,s.useState)({}),f=h[0],p=h[1];(0,s.useEffect)((0,c.Z)(i().mark((function e(){var t,r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/rideshare/total_trips_by_pickup_area");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,n=_(r),o(n);case 8:case"end":return e.stop()}}),e)}))),[]);var d=a&&f.number?a[f.number]:{},j="".concat(d.total_trips?d.total_trips.toLocaleString():"?"," total rideshare pickups.");return(0,n.jsxs)("div",{children:[(0,n.jsxs)(u.default,{children:[(0,n.jsx)("title",{children:"TransitHealth"}),(0,n.jsx)("meta",{name:"description",content:"Explore transit and public health data across Chicago."}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("nav",{children:[(0,n.jsx)(l.default,{href:"/",children:"Home"}),(0,n.jsx)(l.default,{href:"/about",children:"About"}),(0,n.jsx)(l.default,{href:"/explorer",children:"Explorer"}),(0,n.jsx)(l.default,{href:"/questions",children:"Questions"})]}),(0,n.jsx)("main",{className:"Home",children:(0,n.jsxs)("div",{className:"page",children:[(0,n.jsx)("h1",{children:"TransitHealth"}),(0,n.jsx)("h2",{children:"Total Rideshare Trips"}),(0,n.jsx)("p",{children:"Pick a community area from the map."}),(0,n.jsx)(m,{data:a,communityAreas:t,width:400,defaultOpacity:1,onAreaClick:p}),(0,n.jsx)("h3",{children:f.name}),(0,n.jsx)("p",{children:f.name?j:""})]})})]})}},8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4308)}])}},function(e){e.O(0,[774,351,996,120],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);