(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{57:function(e,t,a){"use strict";a.r(t);var r=a(10),n=a.n(r),c=a(52),o=a.n(c),i=a(0),l=a.n(i),u=a(146),s=a(20),m=a(155),p=a(157),h=a(158),b=a(145);function f(e){var t=e.width?e.width:e.height?.8*e.height:300,a=e.height?e.height:e.width?e.width/.8:375,r=[t/2,a/2],c=t/300,o=a/375,u=e.scale||4e4*Math.max(c,o),s=e.offsetX||-.0475,f=Object(m.a)(e.communityAreas),d=[f[0]+s,f[1]],O=Object(p.a)().center(d).scale(u).translate(r),y=e.defaultFill||"rgba(38, 50, 56, 1.0)",j=e.defaultStroke||"white",w=e.defaultOpacity||1,v=e.onAreaClick?Object(b.a)(100,e.onAreaClick):null,E=e.onAreaHover?Object(b.a)(100,e.onAreaHover):null,g=e.communityAreas.features,k=e.data||{},_=Object(i.useState)(-1),A=n()(_,2),P=A[0],S=A[1];return l.a.createElement("div",{className:"ChicagoMap"},l.a.createElement("svg",{width:t,height:a,viewBox:"0 0 ".concat(t," ").concat(a)},l.a.createElement("g",{className:"areas"},g.map((function(e,t){var a=e.properties,r=a.area_numbe,n=k[r]||{},c={name:a.community,number:r};return l.a.createElement("path",{className:"CommunityArea ".concat(P===t?"Selected":""),key:"path-".concat(t),d:Object(h.a)().projection(O)(e),fill:n.fill||y,stroke:n.stroke||j,fillOpacity:n.opacity||w,strokeWidth:.5,onClick:function(e){S(t),v&&v(c)},onMouseEnter:function(e){E&&E(c)}})})))))}a(131);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.default=function(){var e,t,a=Object(s.useRouteData)().communityAreas,r=Object(i.useState)(null),c=n()(r,2),o=c[0],m=c[1],p=Object(i.useState)({}),h=n()(p,2),b=h[0],d=h[1],y=Object(u.a)("http://localhost:5000/rideshare/total_trips_by_pickup_area",{},{json:!0}).data;y&&!o&&m((t=(e=y).reduce((function(e,t){return Math.max(e,t.total_trips)}),0),e.map((function(e){var a=e.total_trips/t;return O(O({},e),{},{opacity:Math.max(a,.05)})})).reduce((function(e,t){return e[t.pickup_community_area]=t,e}),{})));var j=o&&b.number?o[b.number]:{};return l.a.createElement("div",null,l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column"},l.a.createElement("h1",null,"TransitHealth"),l.a.createElement("p",null,"Explore transit and public health data across Chicago."),l.a.createElement("h2",null,"Total Rideshare Trips"),l.a.createElement("p",null,"Total number of trips, by community area of pickup."),l.a.createElement("h3",null,b.name),l.a.createElement("p",null,j.total_trips?j.total_trips.toLocaleString():"?"," total rideshare pickups.")),l.a.createElement("div",{className:"column"},l.a.createElement(f,{data:o,communityAreas:a,width:450,defaultOpacity:.05,onAreaClick:d}))))}}}]);