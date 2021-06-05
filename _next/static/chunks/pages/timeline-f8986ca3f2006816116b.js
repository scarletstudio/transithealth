(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[463],{3720:function(e,t,n){"use strict";n.d(t,{m:function(){return i}});var r=n(5893);function i(e){var t=e.label,n=e.supportedMetrics,i=e.defaultValue,a=e.onChange;return(0,r.jsxs)("div",{className:"MetricSelector",children:[t?(0,r.jsxs)("span",{className:"bold",children:[t,": "]}):null,(0,r.jsx)("span",{children:(0,r.jsx)("select",{defaultValue:i,onChange:function(e){var t=e.target.value;a&&a(t)},children:Object.keys(n).map((function(e,t){return(0,r.jsx)("option",{value:e,children:n[e].name},t)}))})})]})}},9187:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893),i=n(1664);function a(){return(0,r.jsxs)("nav",{children:[(0,r.jsx)(i.default,{href:"/",children:"Home"}),(0,r.jsx)(i.default,{href:"/explorer",children:"Explorer"}),(0,r.jsx)(i.default,{href:"/questions",children:"Questions"}),(0,r.jsx)(i.default,{href:"/about",children:"About"})]})}},8047:function(e,t,n){"use strict";n.d(t,{k:function(){return h}});var r=n(7757),i=n.n(r),a=n(2137),s=n(5893),o=n(7294);function c(e){var t=(0,o.useState)(e.visible||!1),n=t[0],r=t[1],i=e.classes||[],a=n?"block":"hidden";return(0,o.useEffect)((function(){r(e.visible)}),[e.visible]),(0,s.jsxs)("div",{className:"Notification ".concat(i.join(" ")," ").concat(a),children:[(0,s.jsx)("span",{className:"Close",onClick:function(){r(!1)},children:"x"}),e.children]})}function u(){return(u=(0,a.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){fetch("".concat("https://transithealth.herokuapp.com","/")).then((function(t){e(!0)})).catch((function(t){e(!1)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l="transithealth__last_ping",d="Connecting to our server...",m="Connected successfully!",f="Could not connect. Please reload page.";function h(){var e=(0,o.useState)(!0),t=e[0],n=e[1],r=(0,o.useState)(!0),i=r[0],a=r[1],h=(0,o.useState)(!1),p=h[0],x=h[1];(0,o.useEffect)((function(){var e,t,r=!0,i=localStorage.getItem(l);return(!i||Date.now()-i>=3e5)&&(e=setTimeout((function(){r&&x(!0)}),1e3),function(){return u.apply(this,arguments)}().then((function(e){r&&(a(e),n(!1)),e&&(localStorage.setItem(l,Date.now()),t=setTimeout((function(){r&&x(!1)}),1e3))}))),function(){r=!1,e&&clearTimeout(e),t&&clearTimeout(t)}}),[]);var v=["Bottom","Narrow",t?"":i?"Success":"Failure",!t&&i?"FadeOut":"FadeIn"],j=t?d:i?m:f;return(0,s.jsx)("div",{children:(0,s.jsx)(c,{classes:v,visible:p,children:(0,s.jsx)("p",{children:j})})})}},5477:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var r=n(5893),i=n(9008),a=n(9187),s=n(7757),o=n.n(s),c=n(6156),u=n(18),l=n(2137),d=n(7294),m=n(3720),f=n(3743),h=n(9009),p=n(6888),x=n(4195),v=n(3023),j=n(5048),_=n(5358),b=n(6108),y=n(9307);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=f.xR,D=f.mv.metricToAdd,C=["#099178","#f06869","#a453f5","#f5cd53"],S=new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric"});function T(e){return N.apply(this,arguments)}function N(){return(N=(0,l.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://transithealth.herokuapp.com","/weekly/metrics"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({metrics:t})});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){var t=e.active,n=e.payload,i=(e.label,e.metrics);e.selectedPayload;if(!t||!n||0===n.length)return null;var a=n[0].payload;new Date(a.week);return(0,r.jsxs)("div",{className:"CustomToolTip",children:[(0,r.jsx)("h4",{children:S.format(new Date(a.week))}),i.filter((function(e){var t=e.id;return a[t]})).map((function(e,t){var n=e.id;return(0,r.jsxs)("p",{children:[(0,r.jsxs)("span",{children:[w[n].name,": "]}),(0,r.jsxs)("span",{children:[w[n].format(a[n])," "]}),(0,r.jsx)("span",{children:w[n].units})]},t)}))]})}function F(e){var t=e.data,n=e.metrics;return(0,r.jsx)(h.h,{width:"100%",height:400,children:(0,r.jsxs)(p.T,{data:t,margin:{left:30,right:30,bottom:30,top:10},children:[(0,r.jsx)(x.q,{strokeDasharray:"3 3"}),(0,r.jsx)(v.K,{dataKey:"week",children:(0,r.jsx)(j._,{value:"Week",position:"bottom",offset:10})}),(0,r.jsx)(_.B,{yAxisId:"left",type:"number"}),(0,r.jsx)(_.B,{yAxisId:"right",type:"number",orientation:"right"}),n.filter((function(e){return"none"!==e.axis})).map((function(e,t){var n=e.color||C[t%C.length];return(0,r.jsx)(b.u,{yAxisId:e.axis,dataKey:e.id,stroke:n,fill:n},t)})),(0,r.jsx)(y.u,{content:(0,r.jsx)(O,{metrics:n})})]})})}function W(e){var t=e.metrics,n=e.setMetrics,i=(0,d.useState)(D),a=i[0],s=i[1];return(0,r.jsxs)("div",{className:"TimelineMetrics",children:[t.map((function(e,i){var a=w[e.id],s=e.color||C[i%C.length];return(0,r.jsxs)("div",{className:"MetricEditor",children:[(0,r.jsx)("span",{className:"ColorSelector",children:(0,r.jsx)("input",{type:"color",defaultValue:s,onChange:function(e){var r=e.target.value;n(t.map((function(e,t){return t===i?g(g({},e),{},{color:r}):e})))}})}),(0,r.jsx)("span",{className:"AxisSelector",children:(0,r.jsxs)("select",{defaultValue:e.axis,onChange:function(e){var r=e.target.value;n(t.map((function(e,t){return t===i?g(g({},e),{},{axis:r}):e})))},children:[(0,r.jsx)("option",{value:"left",children:"Left Axis"}),(0,r.jsx)("option",{value:"right",children:"Right Axis"}),(0,r.jsx)("option",{value:"none",children:"Hidden"})]})}),(0,r.jsx)("span",{className:"RemoveMetric",onClick:function(){n(t.filter((function(e,t){return t!==i})))},children:"x"}),(0,r.jsx)("span",{children:a.name})]},i)})),(0,r.jsxs)("div",{className:"MetricEditor",children:[(0,r.jsx)(m.m,{supportedMetrics:w,defaultValue:D,onChange:s}),(0,r.jsx)("button",{className:"btn primary",onClick:function(){n([].concat((0,u.Z)(t),[{id:a,axis:t.length%2===0?"left":"right"}]))},children:"Add Metric"})]})]})}function P(e){var t=e.metrics,n=(0,d.useState)([]),i=n[0],a=n[1],s=(0,d.useState)(t||[]),u=s[0],m=s[1],f=(0,d.useState)(!1),h=f[0],p=f[1];(0,d.useEffect)((function(){m(t||[])}),[t]);var x=function(e){var t=(0,d.useRef)();return(0,d.useEffect)((function(){t.current=e})),t.current}(u)||[];return(0,d.useEffect)((function(){var e=!0;function t(){return(t=(0,l.Z)(o().mark((function t(){var n,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.map((function(e){return e.id})),p(!0),t.next=4,T(n);case 4:r=t.sent,e&&(a(r.metrics),p(!1));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var n=x.reduce((function(e,t){return g(g({},e),{},(0,c.Z)({},t.id,!0))}),{});return u.filter((function(e){return!(e.id in n)})).length>0&&function(){t.apply(this,arguments)}(),function(){return e=!1}}),[u]),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"center",children:[(0,r.jsx)("h2",{children:"By Week"}),(0,r.jsx)("p",{children:h?"Loading...":""})]}),(0,r.jsx)(F,{data:i,metrics:u}),(0,r.jsx)("h3",{children:"Select Metrics"}),(0,r.jsx)(W,{metrics:u,setMetrics:m})]})}var M=n(8047);function I(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"TransitHealth"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"description",content:"Explore transit and public health data across Chicago."}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(a.Z,{}),(0,r.jsx)("main",{className:"Timeline",children:(0,r.jsxs)("div",{className:"page",children:[(0,r.jsxs)("div",{className:"center",children:[(0,r.jsx)("h1",{children:"Timeline View"}),(0,r.jsx)("p",{children:"View data over time, on a weekly basis."})]}),(0,r.jsx)("br",{}),(0,r.jsx)(P,{metrics:f.mv.defaultMetrics})]})}),(0,r.jsx)(M.k,{})]})}},3743:function(e,t,n){"use strict";n.d(t,{gB:function(){return i},Mb:function(){return a},fH:function(){return s},xR:function(){return o},QA:function(){return c},mv:function(){return u}});var r=Intl.NumberFormat("en-US");function i(e,t){return(t-e)/e}var a={numberWithCommas:function(e){return r.format(e)},numberInThousands:function(e){return r.format((e/1e3).toFixed(1))+"K"},numberInMillions:function(e){return r.format((e/1e6).toFixed(1))+"M"},percentWithNoDecimal:function(e){return(100*e).toFixed(0)+"%"},percentWithOneDecimal:function(e){return(100*e).toFixed(1)+"%"},dollarsUSD:function(e){return"$"+e.toFixed(2)},centsToDollarsUSD:function(e){return"$"+(e/100).toFixed(2)},percentChangeWithNoDecimal:function(e){return(e>=0?"+":"")+(100*e).toFixed(0)+"%"},percentChangeWithOneDecimal:function(e){return(e>=0?"+":"")+(100*e).toFixed(1)+"%"}},s={rideshare_pickups_covid:{name:"Rideshare Pickups Since March 2020",units:"trips",format:a.numberInMillions,fullFormat:a.numberWithCommas},rideshare_pooled_trip_rate_2018:{name:"2018 Rideshare Pooled Trip Rate",units:"of trips",format:a.percentWithNoDecimal,fullFormat:a.percentWithOneDecimal},rideshare_pooled_trip_rate_2019:{name:"2019 Rideshare Pooled Trip Rate",units:"of trips",format:a.percentWithNoDecimal,fullFormat:a.percentWithOneDecimal},rideshare_pool_request_rate_2018:{name:"2018 Rideshare Pool Request Rate",units:"of trips",format:a.percentWithNoDecimal,fullFormat:a.percentWithOneDecimal},rideshare_pool_request_rate_2019:{name:"2019 Rideshare Pool Request Rate",units:"of trips",format:a.percentWithNoDecimal,fullFormat:a.percentWithOneDecimal},total_population_2000:{name:"2000 Total Population",units:"people",format:a.numberInThousands,fullFormat:a.numberWithCommas},total_population_2010:{name:"2010 Total Population",units:"people",format:a.numberInThousands,fullFormat:a.numberWithCommas},total_population_2019:{name:"2019 Total Population",units:"people",format:a.numberInThousands,fullFormat:a.numberWithCommas},median_income_2010:{name:"2010 Median Income",units:"dollars",format:a.dollarsUSD,fullFormat:a.dollarsUSD},median_income_2019:{name:"2019 Median Income",units:"dollars",format:a.dollarsUSD,fullFormat:a.dollarsUSD},total_covid_cases:{name:"Total COVID Cases",units:"cases",format:a.numberInThousands,fullFormat:a.numberWithCommas}},o={weekly_rideshare_pickups:{name:"Weekly Rideshare Pickups",units:"trips",format:a.numberInThousands,fullFormat:a.numberWithCommas},weekly_rideshare_pickups_covid:{name:"Weekly Rideshare Pickups Since March 2020",units:"trips",format:a.numberInThousands,fullFormat:a.numberWithCommas},weekly_rideshare_avg_cost:{name:"Weekly Rideshare Avg. Cost",units:"USD",format:a.centsToDollarsUSD,fullFormat:a.centsToDollarsUSD},weekly_rideshare_avg_cost_covid:{name:"Weekly Rideshare Avg. Cost Since March 2020",units:"USD",format:a.centsToDollarsUSD,fullFormat:a.centsToDollarsUSD},weekly_covid_cases:{name:"Weekly COVID Cases",units:"cases",format:a.numberWithCommas,fullFormat:a.numberWithCommas}},c={metricX:"total_population_2019",metricY:"total_covid_cases"},u={metricToAdd:"weekly_rideshare_pickups",defaultMetrics:[{id:"weekly_rideshare_pickups",axis:"left"},{id:"weekly_covid_cases",axis:"right"}]}},6506:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/timeline",function(){return n(5477)}])}},function(e){e.O(0,[774,351,197,832,984],(function(){return t=6506,e(e.s=t);var t}));var t=e.O();_N_E=t}]);