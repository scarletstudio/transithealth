(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[463],{5477:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var r=n(5893),i=n(9008),a=n(9187),c=n(7757),s=n.n(c),o=n(7329),u=n(6156),l=n(2137),d=n(7294),f=n(2874),h=n(3743),m=n(9009),p=n(6888),x=n(4195),j=n(3023),v=n(5048),g=n(5358),y=n(6108),b=n(9307);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=h.Ov,k=h.mv.metricToAdd,T=["#099178","#f06869","#a453f5","#f5cd53"],E=new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric"}),S=new Intl.DateTimeFormat("en-US",{month:"short",year:"numeric"});function _(e){return M.apply(this,arguments)}function M(){return(M=(0,l.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://transithealth.herokuapp.com","/timeline/metrics"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({metrics:t})});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){var t,n=e.active,i=e.payload,a=(e.label,e.metrics),c=(e.selectedPayload,null===i||void 0===i||null===(t=i[0])||void 0===t?void 0:t.payload);if(!n||!c)return null;var s=new Date("".concat(c.date," ?"));return(0,r.jsxs)("div",{className:"CustomToolTip",children:[(0,r.jsx)("h4",{children:E.format(s)}),a.filter((function(e){var t=e.id;return c[t]})).map((function(e,t){var n=e.id;return(0,r.jsxs)("p",{children:[(0,r.jsxs)("span",{children:[N[n].name,": "]}),(0,r.jsxs)("span",{children:[N[n].format(c[n])," "]}),(0,r.jsx)("span",{children:N[n].units})]},t)}))]})}function C(e){var t=e.data,n=e.metrics,i=n.filter((function(e){return"none"!==e.axis})).map((function(e){return e.id})),a=t.filter((function(e){return i.filter((function(t){return t in e})).length>0}));if(0===(null===t||void 0===t?void 0:t.length)||0===i.length||0==a.length)return null;var c=t.filter((function(e){return function(e,t){for(var n=0;n<t.length;n++)if(e[t[n]])return!0;return!1}(e,i)})).map((function(e){return O(O({},e),{},{timestamp:new Date("".concat(e.date," ?")).getTime()})})),s=c.map((function(e){return new Date(e.timestamp)})).filter((function(e,t,n){var r=null===n||void 0===n?void 0:n[t-1];return(null===r||void 0===r?void 0:r.getYear())!==e.getYear()}));return(0,r.jsx)(m.h,{width:"100%",height:400,children:(0,r.jsxs)(p.T,{data:c,margin:{left:30,right:30,bottom:30,top:10},children:[(0,r.jsx)(x.q,{strokeDasharray:"3 3"}),(0,r.jsx)(j.K,{dataKey:"timestamp",type:"number",domain:["dataMin","dataMax"],ticks:s,tickFormatter:function(e){return S.format(e)},children:(0,r.jsx)(v._,{value:"Date",position:"bottom",offset:10})}),(0,r.jsx)(g.B,{yAxisId:"left",type:"number"}),(0,r.jsx)(g.B,{yAxisId:"right",type:"number",orientation:"right"}),n.filter((function(e){return"none"!==e.axis})).map((function(e,t){var n=e.color||T[t%T.length];return(0,r.jsx)(y.u,{yAxisId:e.axis,dataKey:e.id,stroke:n,fill:n},"".concat(t,"-").concat(e.id))})),(0,r.jsx)(b.u,{content:(0,r.jsx)(P,{metrics:n})})]})})}function D(e){var t=e.metrics,n=e.setMetrics,i=(0,d.useState)(k),a=i[0],c=i[1];return(0,r.jsxs)("div",{className:"TimelineMetrics",children:[t.map((function(e,i){var a=N[e.id],c=e.color||T[i%T.length];return(0,r.jsxs)("div",{className:"MetricEditor",children:[(0,r.jsx)("span",{className:"ColorSelector",children:(0,r.jsx)("input",{type:"color",defaultValue:c,onChange:function(e){var r=e.target.value;n(t.map((function(e,t){return t===i?O(O({},e),{},{color:r}):e})))}})}),(0,r.jsx)("span",{className:"AxisSelector",children:(0,r.jsxs)("select",{defaultValue:e.axis,onChange:function(e){var r=e.target.value;n(t.map((function(e,t){return t===i?O(O({},e),{},{axis:r}):e})))},children:[(0,r.jsx)("option",{value:"left",children:"Left Axis"}),(0,r.jsx)("option",{value:"right",children:"Right Axis"}),(0,r.jsx)("option",{value:"none",children:"Hidden"})]})}),(0,r.jsx)("span",{className:"RemoveMetric",onClick:function(){n(t.filter((function(e,t){return t!==i})))},children:"x"}),(0,r.jsx)("span",{children:a.name})]},"".concat(i,"-").concat(e.id))})),(0,r.jsxs)("div",{className:"MetricEditor",children:[(0,r.jsx)(f.Z,{label:"",supportedMetrics:N,defaultValue:k,onChange:c}),(0,r.jsx)("button",{className:"btn primary",onClick:function(){n([].concat((0,o.Z)(t),[{id:a,axis:t.length%2===0?"left":"right"}]))},children:"Add Metric"})]})]})}function A(e){var t=e.metrics,n=(0,d.useState)([]),i=n[0],a=n[1],c=(0,d.useState)(t||[]),o=c[0],f=c[1],h=(0,d.useState)(!1),m=h[0],p=h[1];(0,d.useEffect)((function(){f(t||[])}),[t]);var x=function(e){var t=(0,d.useRef)();return(0,d.useEffect)((function(){t.current=e})),t.current}(o)||[];return(0,d.useEffect)((function(){var e=!0;function t(){return(t=(0,l.Z)(s().mark((function t(){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.map((function(e){return e.id})),p(!0),t.next=4,_(n);case 4:r=t.sent,e&&(a(r.metrics),p(!1));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var n=x.reduce((function(e,t){return O(O({},e),{},(0,u.Z)({},t.id,!0))}),{});return o.filter((function(e){return!(e.id in n)})).length>0&&function(){t.apply(this,arguments)}(),function(){return e=!1}}),[o]),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"center",children:(0,r.jsx)("span",{children:m?"Loading...":""})}),(0,r.jsx)(C,{data:i,metrics:o}),(0,r.jsx)("h3",{children:"Select Metrics"}),(0,r.jsx)(D,{metrics:o,setMetrics:f})]})}var Z=n(8047);function I(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"TransitHealth"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"description",content:"Explore transit and public health data across Chicago."}),(0,r.jsx)("link",{rel:"icon",href:"favicon.ico"})]}),(0,r.jsx)(a.Z,{}),(0,r.jsx)("main",{className:"Timeline",children:(0,r.jsxs)("div",{className:"page",children:[(0,r.jsx)("div",{className:"center",children:(0,r.jsx)("h1",{children:"Timeline View"})}),(0,r.jsx)("br",{}),(0,r.jsx)(A,{metrics:h.mv.defaultMetrics})]})}),(0,r.jsx)(Z.k7,{})]})}},6506:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/timeline",function(){return n(5477)}])}},function(e){e.O(0,[774,351,197,392,350,464],(function(){return t=6506,e(e.s=t);var t}));var t=e.O();_N_E=t}]);