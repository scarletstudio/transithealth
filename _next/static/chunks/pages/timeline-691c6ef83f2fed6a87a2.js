(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[463],{2874:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(5893),i=n(7329),s=n(7294);function a(e,t){var n=t.toLowerCase().trim();return 0===n.length?Object.keys(e):Object.keys(e).filter((function(t){return e[t].name.toLowerCase().indexOf(n)>-1}))}function c(e){var t=e.supportedMetrics,n=e.onClose,i=e.selectMetric,a=e.show,c=(0,s.useState)(""),l=c[0],u=c[1];if(!a)return null;var d=0===l.toLowerCase().trim().length?"Showing all Metrics":"Showing results for ".concat(l);return(0,r.jsx)("div",{className:"selectorModal",onClick:n,children:(0,r.jsxs)("div",{className:"modalContent",onClick:function(e){return e.stopPropagation()},children:[(0,r.jsx)("div",{className:"modalHeader",children:(0,r.jsx)("h4",{className:"modalTitle",children:"Select your Metric"})}),(0,r.jsxs)("div",{className:"modalBody",children:[(0,r.jsxs)("div",{className:"searchBar",children:[(0,r.jsxs)("p",{children:[" ",(0,r.jsx)("input",{type:"text",value:l,placeholder:"Search Metrics...",onChange:function(e){return u(e.target.value)}})," "]}),(0,r.jsx)("p",{children:d})]}),(0,r.jsx)(o,{searchText:l,supportedMetrics:t,onClose:n,selectMetric:i})]}),(0,r.jsx)("div",{className:"modalFooter",children:(0,r.jsx)("button",{className:"closeButton",onClick:n,children:"Close"})})]})})}function o(e){var t=e.searchText,n=e.supportedMetrics,s=e.onClose,c=e.selectMetric,o=(t.toLowerCase().trim(),a(n,t)),l=function(e,t){var n=(0,i.Z)(new Set(Object.keys(e).map((function(t){return e[t].dataset})))),r=t,s={};for(var a in n){var c=[];for(var o in t){var l=t[o];n[a]===e[l].dataset&&c.push(r[o])}s[n[a]]=c}return s}(n,o),u=function(e){for(var t=[],n=Object.entries(e),r=0;r<n.length;r++){var i=n[r],s=(i[0],{key:i[1]});t.push(s)}}(l);u=function(e){for(var t=Object.entries(e).sort((function(e,t){return t[1].length-e[1].length})),n=[],r=0;r<t.length;r++){var i=t[r],s={};s[i[0]]=i[1],n.push(s)}return n}(l);for(var d=[],f=0;f<u.length;f++){var h=function(){var e=l[m];for(p=0,x=0;x<o.length;x++)if(n[o[x]].dataset.indexOf(m)>-1&&p<1){d.push((0,r.jsx)("p",{className:"metricGroup",children:m},m));for(var t=function(t){o.indexOf(e[t])>-1&&d.push((0,r.jsxs)("div",{className:"metricResult",onClick:function(){c(e[t]),s()},children:[(0,r.jsx)("p",{className:"metric",children:n[e[t]].name}),(0,r.jsx)("div",{className:"metricMetaData",children:(0,r.jsxs)("p",{children:["Description: ",n[e[t]].description]})})]},e[t]))},i=0;i<e.length;i++)t(i);p++}};for(var m in u[f]){var p,x;h()}}return(0,r.jsx)("div",{className:"searchResults",children:d})}function l(e){var t=e.label,n=e.supportedMetrics,i=e.defaultValue,a=e.onChange,o=(0,s.useState)(0),l=o[0],u=o[1],d=(0,s.useState)(i),f=d[0],h=d[1];return(0,r.jsxs)("div",{className:"searchableMetricSelector",children:[(0,r.jsxs)("div",{className:"selectorBody",children:[t?(0,r.jsxs)("span",{className:"bold selectorLabel",children:[t,": "]}):null,(0,r.jsx)("button",{className:"selectorButton",onClick:function(){return u(1)},children:n[f].name})]}),(0,r.jsx)(c,{supportedMetrics:n,onClose:function(){return u(0)},selectMetric:function(e){a(e),h(e)},show:l})]})}},5477:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var r=n(5893),i=n(9008),s=n(9187),a=n(7757),c=n.n(a),o=n(7329),l=n(6156),u=n(2137),d=n(7294),f=n(2874),h=n(3743),m=n(9009),p=n(6888),x=n(4195),v=n(3023),j=n(5048),g=n(5358),y=n(6108),b=n(9307);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=h.Ov,C=h.mv.metricToAdd,M=["#099178","#f06869","#a453f5","#f5cd53"],k=new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric"}),S=new Intl.DateTimeFormat("en-US",{month:"short",year:"numeric"});function T(e){return D.apply(this,arguments)}function D(){return(D=(0,u.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://transithealth.herokuapp.com","/timeline/metrics"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({metrics:t})});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){var t,n=e.active,i=e.payload,s=(e.label,e.metrics),a=(e.selectedPayload,null===i||void 0===i||null===(t=i[0])||void 0===t?void 0:t.payload);if(!n||!a)return null;var c=new Date("".concat(a.date," ?"));return(0,r.jsxs)("div",{className:"CustomToolTip",children:[(0,r.jsx)("h4",{children:k.format(c)}),s.filter((function(e){var t=e.id;return a[t]})).map((function(e,t){var n=e.id;return(0,r.jsxs)("p",{children:[(0,r.jsxs)("span",{children:[O[n].name,": "]}),(0,r.jsxs)("span",{children:[O[n].format(a[n])," "]}),(0,r.jsx)("span",{children:O[n].units})]},t)}))]})}function P(e){var t=e.data,n=e.metrics,i=n.filter((function(e){return"none"!==e.axis})).map((function(e){return e.id})),s=t.filter((function(e){return i.filter((function(t){return t in e})).length>0}));if(0===(null===t||void 0===t?void 0:t.length)||0===i.length||0==s.length)return null;var a=t.filter((function(e){return function(e,t){for(var n=0;n<t.length;n++)if(e[t[n]])return!0;return!1}(e,i)})).map((function(e){return w(w({},e),{},{timestamp:new Date("".concat(e.date," ?")).getTime()})})),c=a.map((function(e){return new Date(e.timestamp)})).filter((function(e,t,n){var r=null===n||void 0===n?void 0:n[t-1];return(null===r||void 0===r?void 0:r.getYear())!==e.getYear()}));return(0,r.jsx)(m.h,{width:"100%",height:400,children:(0,r.jsxs)(p.T,{data:a,margin:{left:30,right:30,bottom:30,top:10},children:[(0,r.jsx)(x.q,{strokeDasharray:"3 3"}),(0,r.jsx)(v.K,{dataKey:"timestamp",type:"number",domain:["dataMin","dataMax"],ticks:c,tickFormatter:function(e){return S.format(e)},children:(0,r.jsx)(j._,{value:"Date",position:"bottom",offset:10})}),(0,r.jsx)(g.B,{yAxisId:"left",type:"number"}),(0,r.jsx)(g.B,{yAxisId:"right",type:"number",orientation:"right"}),n.filter((function(e){return"none"!==e.axis})).map((function(e,t){var n=e.color||M[t%M.length];return(0,r.jsx)(y.u,{yAxisId:e.axis,dataKey:e.id,stroke:n,fill:n,connectNulls:!0},"".concat(t,"-").concat(e.id))})),(0,r.jsx)(b.u,{content:(0,r.jsx)(E,{metrics:n})})]})})}function _(e){var t=e.metrics,n=e.setMetrics,i=(0,d.useState)(C),s=i[0],a=i[1];return(0,r.jsxs)("div",{className:"TimelineMetrics",children:[t.map((function(e,i){var s=O[e.id],a=e.color||M[i%M.length];return(0,r.jsxs)("div",{className:"MetricEditor",children:[(0,r.jsx)("span",{className:"ColorSelector",children:(0,r.jsx)("input",{type:"color",defaultValue:a,onChange:function(e){var r=e.target.value;n(t.map((function(e,t){return t===i?w(w({},e),{},{color:r}):e})))}})}),(0,r.jsx)("span",{className:"AxisSelector",children:(0,r.jsxs)("select",{defaultValue:e.axis,onChange:function(e){var r=e.target.value;n(t.map((function(e,t){return t===i?w(w({},e),{},{axis:r}):e})))},children:[(0,r.jsx)("option",{value:"left",children:"Left Axis"}),(0,r.jsx)("option",{value:"right",children:"Right Axis"}),(0,r.jsx)("option",{value:"none",children:"Hidden"})]})}),(0,r.jsx)("span",{className:"RemoveMetric",onClick:function(){n(t.filter((function(e,t){return t!==i})))},children:"x"}),(0,r.jsx)("span",{children:s.name})]},"".concat(i,"-").concat(e.id))})),(0,r.jsxs)("div",{className:"MetricEditor",children:[(0,r.jsx)(f.Z,{label:"",supportedMetrics:O,defaultValue:C,onChange:a}),(0,r.jsx)("button",{className:"btn primary",onClick:function(){n([].concat((0,o.Z)(t),[{id:s,axis:t.length%2===0?"left":"right"}]))},children:"Add Metric"})]})]})}function Z(e){var t=e.metrics,n=(0,d.useState)([]),i=n[0],s=n[1],a=(0,d.useState)(t||[]),o=a[0],f=a[1],h=(0,d.useState)(!1),m=h[0],p=h[1];(0,d.useEffect)((function(){f(t||[])}),[t]);var x=function(e){var t=(0,d.useRef)();return(0,d.useEffect)((function(){t.current=e})),t.current}(o)||[];return(0,d.useEffect)((function(){var e=!0;function t(){return(t=(0,u.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.map((function(e){return e.id})),p(!0),t.next=4,T(n);case 4:r=t.sent,e&&(s(r.metrics),p(!1));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var n=x.reduce((function(e,t){return w(w({},e),{},(0,l.Z)({},t.id,!0))}),{});return o.filter((function(e){return!(e.id in n)})).length>0&&function(){t.apply(this,arguments)}(),function(){return e=!1}}),[o]),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"center",children:(0,r.jsx)("span",{children:m?"Loading...":""})}),(0,r.jsx)(P,{data:i,metrics:o}),(0,r.jsx)("h3",{children:"Select Metrics"}),(0,r.jsx)(_,{metrics:o,setMetrics:f})]})}var A=n(8047);function B(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"TransitHealth"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"description",content:"Explore transit and public health data across Chicago."}),(0,r.jsx)("link",{rel:"icon",href:"favicon.ico"})]}),(0,r.jsx)(s.Z,{}),(0,r.jsx)("main",{className:"Timeline",children:(0,r.jsxs)("div",{className:"page",children:[(0,r.jsx)("div",{className:"center",children:(0,r.jsx)("h1",{children:"Timeline View"})}),(0,r.jsx)("br",{}),(0,r.jsx)(Z,{metrics:h.mv.defaultMetrics})]})}),(0,r.jsx)(A.k7,{})]})}},6506:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/timeline",function(){return n(5477)}])}},function(e){e.O(0,[774,351,197,238,350,306],(function(){return t=6506,e(e.s=t);var t}));var t=e.O();_N_E=t}]);