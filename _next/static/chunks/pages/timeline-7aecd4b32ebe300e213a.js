(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[463],{9187:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893),i=n(1664);function a(){return(0,r.jsxs)("nav",{children:[(0,r.jsx)(i.default,{href:"/",children:"Home"}),(0,r.jsx)(i.default,{href:"/explorer",children:"Explorer"}),(0,r.jsx)(i.default,{href:"/questions",children:"Questions"}),(0,r.jsx)(i.default,{href:"/about",children:"About"})]})}},8047:function(e,t,n){"use strict";n.d(t,{P_:function(){return l},K4:function(){return c},k7:function(){return p}});var r=n(7757),i=n.n(r),a=n(2137),o=n(5893),s=n(7294);function l(e){var t=(0,s.useState)(e.visible||!1),n=t[0],r=t[1],i=e.classes||[],a=n?"block":"hidden";return(0,s.useEffect)((function(){r(e.visible)}),[e.visible]),(0,o.jsxs)("div",{className:"Notification ".concat(i.join(" ")," ").concat(a),children:[(0,o.jsx)("div",{className:"CloseHolder",children:(0,o.jsx)("span",{className:"Close",onClick:function(){r(!1)},children:"x"})}),e.children]})}function c(e){var t=e.data||e.error,n=t&&t.toString(),r=e.classes||["Failure"];return(0,o.jsx)("div",{children:(0,o.jsx)(l,{classes:r,visible:e.error,children:(0,o.jsx)("p",{children:n})})})}function u(){return(u=(0,a.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){fetch("".concat("https://transithealth.herokuapp.com","/")).then((function(t){e(!0)})).catch((function(t){e(!1)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m="transithealth__last_ping",f="Connecting to our server...",d="Connected successfully!",h="Could not connect. Please reload page.";function p(){var e=(0,s.useState)(!0),t=e[0],n=e[1],r=(0,s.useState)(!0),i=r[0],a=r[1],c=(0,s.useState)(!1),p=c[0],_=c[1];(0,s.useEffect)((function(){var e,t,r=!0,i=localStorage.getItem(m);return(!i||Date.now()-i>=3e5)&&(e=setTimeout((function(){r&&_(!0)}),1e3),function(){return u.apply(this,arguments)}().then((function(e){r&&(a(e),n(!1)),e&&(localStorage.setItem(m,Date.now()),t=setTimeout((function(){r&&_(!1)}),1e3))}))),function(){r=!1,e&&clearTimeout(e),t&&clearTimeout(t)}}),[]);var v=["Bottom","Narrow",t?"":i?"Success":"Failure",!t&&i?"FadeOut":"FadeIn"],x=t?f:i?d:h;return(0,o.jsx)("div",{children:(0,o.jsx)(l,{classes:v,visible:p,children:(0,o.jsx)("p",{children:x})})})}},4054:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r=n(5893),i=n(9008),a=n(9187),o=n(7757),s=n.n(o),l=n(7329),c=n(6156),u=n(2137),m=n(7294);function f(e){var t=e.label,n=e.supportedMetrics,i=e.defaultValue,a=e.onChange;return(0,r.jsxs)("div",{className:"MetricSelector",children:[t?(0,r.jsxs)("span",{className:"bold",children:[t,": "]}):null,(0,r.jsx)("span",{children:(0,r.jsx)("select",{defaultValue:i,onChange:function(e){var t=e.target.value;a&&a(t)},children:Object.keys(n).map((function(e,t){return(0,r.jsx)("option",{value:e,children:n[e].name},t)}))})})]})}var d=n(3743),h=n(9009),p=n(6888),_=n(4195),v=n(3023),x=n(5048),b=n(5358),g=n(6108),D=n(9307);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=d.Ov,C=d.mv.metricToAdd,F=["#099178","#f06869","#a453f5","#f5cd53"],O=new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric"}),k=new Intl.DateTimeFormat("en-US",{month:"short",year:"numeric"});function T(e){return S.apply(this,arguments)}function S(){return(S=(0,u.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://transithealth.herokuapp.com","/timeline/metrics"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({metrics:t})});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){var t,n=e.active,i=e.payload,a=(e.label,e.metrics),o=(e.selectedPayload,null===i||void 0===i||null===(t=i[0])||void 0===t?void 0:t.payload);if(!n||!o)return null;var s=new Date("".concat(o.date," ?"));return(0,r.jsxs)("div",{className:"CustomToolTip",children:[(0,r.jsx)("h4",{children:O.format(s)}),a.filter((function(e){var t=e.id;return o[t]})).map((function(e,t){var n=e.id;return(0,r.jsxs)("p",{children:[(0,r.jsxs)("span",{children:[y[n].name,": "]}),(0,r.jsxs)("span",{children:[y[n].format(o[n])," "]}),(0,r.jsx)("span",{children:y[n].units})]},t)}))]})}function N(e){var t=e.data,n=e.metrics,i=n.filter((function(e){return"none"!==e.axis})).map((function(e){return e.id}));if(0===(null===t||void 0===t?void 0:t.length)||0===i.length)return null;var a=t.filter((function(e){return function(e,t){for(var n=0;n<t.length;n++)if(e[t[n]])return!0;return!1}(e,i)})).map((function(e){return W(W({},e),{},{timestamp:new Date("".concat(e.date," ?")).getTime()})})),o=a.map((function(e){return new Date(e.timestamp)})).filter((function(e,t,n){var r=null===n||void 0===n?void 0:n[t-1];return(null===r||void 0===r?void 0:r.getYear())!==e.getYear()}));return(0,r.jsx)(h.h,{width:"100%",height:400,children:(0,r.jsxs)(p.T,{data:a,margin:{left:30,right:30,bottom:30,top:10},children:[(0,r.jsx)(_.q,{strokeDasharray:"3 3"}),(0,r.jsx)(v.K,{dataKey:"timestamp",type:"number",domain:["dataMin","dataMax"],ticks:o,tickFormatter:function(e){return k.format(e)},children:(0,r.jsx)(x._,{value:"Date",position:"bottom",offset:10})}),(0,r.jsx)(b.B,{yAxisId:"left",type:"number"}),(0,r.jsx)(b.B,{yAxisId:"right",type:"number",orientation:"right"}),n.filter((function(e){return"none"!==e.axis})).map((function(e,t){var n=e.color||F[t%F.length];return(0,r.jsx)(g.u,{yAxisId:e.axis,dataKey:e.id,stroke:n,fill:n},"".concat(t,"-").concat(e.id))})),(0,r.jsx)(D.u,{content:(0,r.jsx)(w,{metrics:n})})]})})}function R(e){var t=e.metrics,n=e.setMetrics,i=(0,m.useState)(C),a=i[0],o=i[1];return(0,r.jsxs)("div",{className:"TimelineMetrics",children:[t.map((function(e,i){var a=y[e.id],o=e.color||F[i%F.length];return(0,r.jsxs)("div",{className:"MetricEditor",children:[(0,r.jsx)("span",{className:"ColorSelector",children:(0,r.jsx)("input",{type:"color",defaultValue:o,onChange:function(e){var r=e.target.value;n(t.map((function(e,t){return t===i?W(W({},e),{},{color:r}):e})))}})}),(0,r.jsx)("span",{className:"AxisSelector",children:(0,r.jsxs)("select",{defaultValue:e.axis,onChange:function(e){var r=e.target.value;n(t.map((function(e,t){return t===i?W(W({},e),{},{axis:r}):e})))},children:[(0,r.jsx)("option",{value:"left",children:"Left Axis"}),(0,r.jsx)("option",{value:"right",children:"Right Axis"}),(0,r.jsx)("option",{value:"none",children:"Hidden"})]})}),(0,r.jsx)("span",{className:"RemoveMetric",onClick:function(){n(t.filter((function(e,t){return t!==i})))},children:"x"}),(0,r.jsx)("span",{children:a.name})]},"".concat(i,"-").concat(e.id))})),(0,r.jsxs)("div",{className:"MetricEditor",children:[(0,r.jsx)(f,{supportedMetrics:y,defaultValue:C,onChange:o}),(0,r.jsx)("button",{className:"btn primary",onClick:function(){n([].concat((0,l.Z)(t),[{id:a,axis:t.length%2===0?"left":"right"}]))},children:"Add Metric"})]})]})}function P(e){var t=e.metrics,n=(0,m.useState)([]),i=n[0],a=n[1],o=(0,m.useState)(t||[]),l=o[0],f=o[1],d=(0,m.useState)(!1),h=d[0],p=d[1];(0,m.useEffect)((function(){f(t||[])}),[t]);var _=function(e){var t=(0,m.useRef)();return(0,m.useEffect)((function(){t.current=e})),t.current}(l)||[];return(0,m.useEffect)((function(){var e=!0;function t(){return(t=(0,u.Z)(s().mark((function t(){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=l.map((function(e){return e.id})),p(!0),t.next=4,T(n);case 4:r=t.sent,e&&(a(r.metrics),p(!1));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var n=_.reduce((function(e,t){return W(W({},e),{},(0,c.Z)({},t.id,!0))}),{});return l.filter((function(e){return!(e.id in n)})).length>0&&function(){t.apply(this,arguments)}(),function(){return e=!1}}),[l]),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"center",children:(0,r.jsx)("span",{children:h?"Loading...":""})}),(0,r.jsx)(N,{data:i,metrics:l}),(0,r.jsx)("h3",{children:"Select Metrics"}),(0,r.jsx)(R,{metrics:l,setMetrics:f})]})}var I=n(8047);function M(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"TransitHealth"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"description",content:"Explore transit and public health data across Chicago."}),(0,r.jsx)("link",{rel:"icon",href:"favicon.ico"})]}),(0,r.jsx)(a.Z,{}),(0,r.jsx)("main",{className:"Timeline",children:(0,r.jsxs)("div",{className:"page",children:[(0,r.jsx)("div",{className:"center",children:(0,r.jsx)("h1",{children:"Timeline View"})}),(0,r.jsx)("br",{}),(0,r.jsx)(P,{metrics:d.mv.defaultMetrics})]})}),(0,r.jsx)(I.k7,{})]})}},3743:function(e,t,n){"use strict";n.d(t,{gB:function(){return i},Mb:function(){return a},fH:function(){return o},Ov:function(){return s},QA:function(){return l},mv:function(){return c}});var r=Intl.NumberFormat("en-US");function i(e,t){return(t-e)/e}var a={numberWithCommas:function(e){return r.format(e)},numberInThousands:function(e){return r.format((e/1e3).toFixed(1))+"K"},numberInMillions:function(e){return r.format((e/1e6).toFixed(1))+"M"},percentWithNoDecimal:function(e){return(100*e).toFixed(0)+"%"},percentWithOneDecimal:function(e){return(100*e).toFixed(1)+"%"},dollarsUSD:function(e){return"$"+e.toFixed(2)},dollarsUSDWithCommas:function(e){return"$".concat(r.format(Math.floor(e)))},dollarsUSDInThousands:function(e){return"$".concat(r.format((e/1e3).toFixed(1)),"K")},centsToDollarsUSD:function(e){return"$"+(e/100).toFixed(2)},percentChangeWithNoDecimal:function(e){return(e>=0?"+":"")+(100*e).toFixed(0)+"%"},percentChangeWithOneDecimal:function(e){return(e>=0?"+":"")+(100*e).toFixed(1)+"%"}},o={rideshare_pickups_covid:{name:"Rideshare Pickups Since March 2020",units:"trips",format:a.numberInMillions,fullFormat:a.numberWithCommas},rideshare_pooled_trip_rate_2018:{name:"2018 Rideshare Pooled Trip Rate",units:"of trips",format:a.percentWithNoDecimal,fullFormat:a.percentWithOneDecimal},rideshare_pooled_trip_rate_2019:{name:"2019 Rideshare Pooled Trip Rate",units:"of trips",format:a.percentWithNoDecimal,fullFormat:a.percentWithOneDecimal},rideshare_pool_request_rate_2018:{name:"2018 Rideshare Pool Request Rate",units:"of trips",format:a.percentWithNoDecimal,fullFormat:a.percentWithOneDecimal},rideshare_pool_request_rate_2019:{name:"2019 Rideshare Pool Request Rate",units:"of trips",format:a.percentWithNoDecimal,fullFormat:a.percentWithOneDecimal},total_population_2000:{name:"2000 Total Population",units:"people",format:a.numberInThousands,fullFormat:a.numberWithCommas},total_population_2010:{name:"2010 Total Population",units:"people",format:a.numberInThousands,fullFormat:a.numberWithCommas},total_population_2019:{name:"2019 Total Population",units:"people",format:a.numberInThousands,fullFormat:a.numberWithCommas},median_income_2010:{name:"2010 Median Income",units:"dollars",format:a.dollarsUSDInThousands,fullFormat:a.dollarsUSDWithCommas},median_income_2017:{name:"2017 Median Income",units:"dollars",format:a.dollarsUSDInThousands,fullFormat:a.dollarsUSDWithCommas},median_income_2018:{name:"2018 Median Income",units:"dollars",format:a.dollarsUSDInThousands,fullFormat:a.dollarsUSDWithCommas},median_income_2019:{name:"2019 Median Income",units:"dollars",format:a.dollarsUSDInThousands,fullFormat:a.dollarsUSDWithCommas},total_covid_cases:{name:"Total COVID Cases",units:"cases",format:a.numberInThousands,fullFormat:a.numberWithCommas},disability_rate_2018:{name:"2018 Disability Rate",units:"of people",format:a.percentWithNoDecimal,fullFormat:a.percentWithOneDecimal},disability_rate_2019:{name:"2019 Disability Rate",units:"of people",format:a.percentWithNoDecimal,fullFormat:a.percentWithOneDecimal},belonging_rate_2017:{name:"2017 Rate of Belonging",units:"of people",format:a.percentWithNoDecimal,fullFormat:a.percentWithOneDecimal},belonging_rate_2018:{name:"2018 Rate of Belonging",units:"of people",format:a.percentWithNoDecimal,fullFormat:a.percentWithOneDecimal},rent_burdened_2017:{name:"2017 Rate of Rent Burdened Households",units:"of households",format:a.percentWithOneDecimal,fullFormat:a.percentWithOneDecimal},rent_burdened_2018:{name:"2018 Rate of Rent Burdened Households",units:"of households",format:a.percentWithOneDecimal,fullFormat:a.percentWithOneDecimal},rent_burdened_2019:{name:"2019 Rate of Rent Burdened Households",units:"of households",format:a.percentWithOneDecimal,fullFormat:a.percentWithOneDecimal},rent_max:{name:"Maximum Rate of Rent Burdened Households",units:"of households",format:a.percentWithOneDecimal,fullFormat:a.percentWithOneDecimal},rent_min:{name:"Minimum Rate of Rent Burdened Households",units:"of households",format:a.percentWithOneDecimal,fullFormat:a.percentWithOneDecimal},rent_average:{name:"Average Rate of Rent Burdened Households",units:"of households",format:a.percentWithOneDecimal,fullFormat:a.percentWithOneDecimal},avg_speed_per_dropoff:{name:"Average Taxi Trip Speed Per Dropoff Area",units:"mph",format:a.numberWithCommas,fullFormat:a.numberWithCommas},avg_speed_per_pickup:{name:"Average Taxi Trip Speed Per Pickup Area",units:"mph",format:a.numberWithCommas,fullFormat:a.numberWithCommas}},s={weekly_rideshare_pickups:{name:"Weekly Rideshare Pickups",units:"trips",format:a.numberInThousands,fullFormat:a.numberWithCommas},weekly_rideshare_pickups_covid:{name:"Weekly Rideshare Pickups Since March 2020",units:"trips",format:a.numberInThousands,fullFormat:a.numberWithCommas},weekly_rideshare_avg_cost:{name:"Weekly Rideshare Avg. Cost",units:"USD",format:a.centsToDollarsUSD,fullFormat:a.centsToDollarsUSD},weekly_rideshare_avg_cost_covid:{name:"Weekly Rideshare Avg. Cost Since March 2020",units:"USD",format:a.centsToDollarsUSD,fullFormat:a.centsToDollarsUSD},weekly_covid_cases:{name:"Weekly COVID Cases",units:"cases",format:a.numberWithCommas,fullFormat:a.numberWithCommas},yearly_belonging_rate_all:{name:"Rate of Belonging of the City",units:"of people",format:a.percentWithNoDecimal,fullFormat:a.percentWithOneDecimal},yearly_belonging_rate_W:{name:"Rate of Belonging of Non-Hispanic White People",units:"of people",format:a.percentWithNoDecimal,fullFormat:a.percentWithOneDecimal},yearly_belonging_rate_B:{name:"Rate of Belonging of Non-Hispanic Black People",units:"of people",format:a.percentWithNoDecimal,fullFormat:a.percentWithOneDecimal},yearly_belonging_rate_A:{name:"Rate of Belonging of Asian or Pacific Islander People",units:"of people",format:a.percentWithNoDecimal,fullFormat:a.percentWithOneDecimal},yearly_belonging_rate_H:{name:"Rate of Belonging of Hispanic or Latino People",units:"of people",format:a.percentWithNoDecimal,fullFormat:a.percentWithOneDecimal},weekly_cta_train_ridership:{name:"Weekly CTA Train Ridership",units:"trips",format:a.numberWithCommas,fullFormat:a.numberWithCommas},weekly_cta_train_ridership_covid:{name:"Weekly CTA Train Ridership Since COVID-19",units:"trips",format:a.numberWithCommas,fullFormat:a.numberWithCommas},daily_sidewalk_cafe_permit:{name:"Daily Sidewalk Cafe Permits",units:"permits",format:a.numberWithCommas,fullFormat:a.numberWithCommas},yearly_sidewalk_cafe_permit:{name:"Yearly Sidewalk Cafe Permits",units:"permits",format:a.numberWithCommas,fullFormat:a.numberWithCommas}},l={metricX:"total_population_2019",metricY:"total_covid_cases"},c={metricToAdd:"weekly_rideshare_pickups",defaultMetrics:[{id:"weekly_rideshare_pickups",axis:"left"},{id:"weekly_covid_cases",axis:"right"}]}},6506:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/timeline",function(){return n(4054)}])}},function(e){e.O(0,[774,351,197,700,515],(function(){return t=6506,e(e.s=t);var t}));var t=e.O();_N_E=t}]);