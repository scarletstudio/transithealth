(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{9187:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(5893),o=r(1664);function a(){return(0,n.jsxs)("nav",{children:[(0,n.jsx)(o.default,{href:"/",children:"Home"}),(0,n.jsx)(o.default,{href:"/explorer",children:"Explorer"}),(0,n.jsx)(o.default,{href:"/questions",children:"Questions"}),(0,n.jsx)(o.default,{href:"/about",children:"About"})]})}},8047:function(e,t,r){"use strict";r.d(t,{k:function(){return m}});var n=r(7757),o=r.n(n),a=r(2137),s=r(5893),i=r(7294);function c(e){var t=(0,i.useState)(e.visible||!1),r=t[0],n=t[1],o=e.classes||[],a=r?"block":"hidden";return(0,i.useEffect)((function(){n(e.visible)}),[e.visible]),(0,s.jsxs)("div",{className:"Notification ".concat(o.join(" ")," ").concat(a),children:[(0,s.jsx)("span",{className:"Close",onClick:function(){n(!1)},children:"x"}),e.children]})}function l(){return(l=(0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){fetch("".concat("https://transithealth.herokuapp.com","/")).then((function(t){e(!0)})).catch((function(t){e(!1)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var u="transithealth__last_ping",p="Connecting to our server...",h="Connected successfully!",d="Could not connect. Please reload page.";function m(){var e=(0,i.useState)(!0),t=e[0],r=e[1],n=(0,i.useState)(!0),o=n[0],a=n[1],m=(0,i.useState)(!1),f=m[0],_=m[1];(0,i.useEffect)((function(){var e,t,n=!0,o=localStorage.getItem(u);return(!o||Date.now()-o>=3e5)&&(e=setTimeout((function(){n&&_(!0)}),1e3),function(){return l.apply(this,arguments)}().then((function(e){n&&(a(e),r(!1)),e&&(localStorage.setItem(u,Date.now()),t=setTimeout((function(){n&&_(!1)}),1e3))}))),function(){n=!1,e&&clearTimeout(e),t&&clearTimeout(t)}}),[]);var b=["Bottom","Narrow",t?"":o?"Success":"Failure",!t&&o?"FadeOut":"FadeIn"],j=t?p:o?h:d;return(0,s.jsx)("div",{children:(0,s.jsx)(c,{classes:b,visible:f,children:(0,s.jsx)("p",{children:j})})})}},132:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return U},default:function(){return Z}});var n=r(5893),o=r(9008),a=(r(1664),r(9187)),s=r(8047),i=r(7294);var c=r(7757),l=r.n(c),u=r(6156),p=r(2137),h=r(9009),d=r(4831),m=r(4195),f=r(3023),_=r(5048),b=r(5358),j=r(9307),g=r(7226),x=r(3872),v=r(18);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e){var t=e.data,r=e.col,o=t[r.key],a=r.format?r.format(o):o,s=r.rowClasses?"Cell "+r.rowClasses.join(" "):"Cell",i={background:r.rgb?r.alpha?"rgba(".concat(r.rgb,", ").concat(r.alpha(o),")"):"rgb(".concat(r.rgb,")"):"transparent"};return(0,n.jsx)("td",{className:s,style:i,children:a})}function w(e){var t=e.data,r=e.cols;return(0,n.jsx)("tr",{children:r.map((function(e,r){return(0,n.jsx)(k,{data:t,col:e},r)}))})}function D(e){var t=e.cols,r=e.sortCol,o=e.sortAsc,a=e.sortByCol,s=t.reduce((function(e,t){return e||t.group}),!1),i=t.filter((function(e){return e.group})).reduce((function(e,t){return C(C({},e),{},(0,u.Z)({},t.group,(e[t.group]||0)+1))}),{}),c=t.filter((function(e){return e.group})).reduce((function(e,t){return C(C({},e),{},(0,u.Z)({},t.group,t.key))}),{}),l=t.filter((function(e){return!e.group||c[e.group]===e.key})),p=s?(0,n.jsx)("tr",{children:l.map((function(e,t){var r=i[e.group]||1;return(0,n.jsx)("th",{className:"GroupHeader",colSpan:r,children:e.group},t)}))}):null;return(0,n.jsxs)("thead",{children:[p,(0,n.jsx)("tr",{children:t.map((function(e,t){return(0,n.jsxs)("th",{className:r===e.key?"Sorted":"",onClick:function(t){a(e.key)},children:[(0,n.jsx)("span",{children:e.name}),(0,n.jsx)("span",{className:"SortArrow",children:o?"\u25bc":"\u25b2"})]},t)}))})]})}function S(e){var t=(0,v.Z)(e.rows),r=(0,i.useState)(null),o=r[0],a=r[1],s=(0,i.useState)(!1),c=s[0],l=s[1],u=(0,i.useState)(0),p=u[0],h=u[1];var d=null!==o?t.sort((function(e,t){var r=e[o],n=t[o];return r.localeCompare&&n.localeCompare?c?r.localeCompare(n):n.localeCompare(r):c?r-n:n-r})):(0,v.Z)(t);return(0,n.jsx)("div",{className:"TableContainer",children:(0,n.jsxs)("table",{children:[(0,n.jsx)(D,{cols:e.cols,sortCol:o,sortAsc:c,sortByCol:function(e){e==o?p>=2?(a(null),l(!1),h(0)):(l(!c),h(p+1)):(a(e),l(!1),h(1))}}),(0,n.jsx)("tbody",{children:d.map((function(t,r){return(0,n.jsx)(w,{data:t,cols:e.cols},r)}))})]})})}var O=r(3743);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P={Central:"#332288","Far North Side":"#1978AD","Far Southeast Side":"#117733","Far Southwest Side":"#44AA99","North Side":"#88CCEE","Northwest Side":"#DCA139","South Side":"#CC6677","Southwest Side":"#AA4499","West Side":"#882255"},W=[{key:"area_number",group:"Pickup Community Area",name:"#"},{key:"name",group:"Pickup Community Area",name:"Name"},{key:"part",group:"Pickup Community Area",name:"Part"},{key:"pooled_trip_rate_before",group:"Pooled Trips",name:"% of Trips",format:O.Mb.percentWithOneDecimal,rowClasses:["right"]},{key:"avg_trips_per_day_before",group:"Trips/Day",name:"Before",format:O.Mb.numberWithCommas,rowClasses:["right"]},{key:"avg_trips_per_day_since",group:"Trips/Day",name:"Since",format:O.Mb.numberWithCommas,rowClasses:["right"]},{key:"pct_change_avg_trips",group:"Trips/Day",name:"Change",format:O.Mb.percentChangeWithNoDecimal,rowClasses:["right"],rgb:"136, 34, 85",alpha:function(e){return e/-.8}},{key:"avg_cost_per_trip_cents_before",group:"Cost/Trip",name:"Before",format:O.Mb.centsToDollarsUSD,rowClasses:["right"]},{key:"avg_cost_per_trip_cents_since",group:"Cost/Trip",name:"Since",format:O.Mb.centsToDollarsUSD,rowClasses:["right"]},{key:"pct_change_avg_cost",group:"Cost/Trip",name:"Change",format:O.Mb.percentChangeWithNoDecimal,rowClasses:["right"],rgb:"17, 119, 51",alpha:function(e){return e/.3}}];function F(){return I.apply(this,arguments)}function I(){return(I=(0,p.Z)(l().mark((function e(){var t,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://transithealth.herokuapp.com","/question/pooled_trips"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r.metrics);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return e.map((function(e){return T(T({},e),{},{pct_change_avg_trips:(0,O.gB)(e.avg_trips_per_day_before,e.avg_trips_per_day_since),pct_change_avg_cost:(0,O.gB)(e.avg_cost_per_trip_cents_before,e.avg_cost_per_trip_cents_since)})}))}function M(e){return e.sort((function(e,t){return t.pooled_trip_rate_before-e.pooled_trip_rate_before})).sort((function(e,t){return e.part.localeCompare(t.part)})).map((function(e){return T(T({},e),{},(0,u.Z)({},e.part,e.pooled_trip_rate_before))}))}function R(e){var t=e.data;return(0,n.jsx)(h.h,{width:"100%",height:400,children:(0,n.jsxs)(d.v,{data:t,margin:{left:30,right:30,bottom:30,top:30},children:[(0,n.jsx)(m.q,{strokeDashArray:"3 3"}),(0,n.jsx)(f.K,{dataKey:"name",tick:{dy:5},children:(0,n.jsx)(_._,{value:"Pickup Community Area",position:"bottom",offset:10})}),(0,n.jsx)(b.B,{type:"number",tickFormatter:O.Mb.percentWithNoDecimal,children:(0,n.jsx)(_._,{value:"Pooled Trip Rate",position:"left",angle:-90,offset:15,style:{textAnchor:"middle"}})}),(0,n.jsx)(j.u,{formatter:function(e,t,r){return[O.Mb.percentWithOneDecimal(e),"Pooled Trip Rate",r]}}),Object.keys(P).map((function(e,t){return(0,n.jsx)(g.$,{dataKey:e,stackId:"a",fill:P[e]},t)})),(0,n.jsx)(x.D,{layout:"horizontal",verticalAlign:"top",align:"center",wrapperStyle:{top:5}})]})})}var E={sample:function(){return(0,n.jsx)("div",{children:(0,n.jsx)("p",{children:"This question is still under development. Check back soon!"})})},"pooled-trips":function(e){var t=(0,i.useState)([]),r=t[0],o=t[1],a=(0,i.useState)([]),s=a[0],c=a[1];(0,i.useEffect)((function(){var t=!0;function r(){return(r=(0,p.Z)(l().mark((function r(){var n,a,s;return l().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.setContentIsLoading(!0),r.next=3,F();case 3:n=r.sent,a=A(n),s=M(a),t&&(e.setContentIsLoading(!1),o(a),c(s));case 7:case"end":return r.stop()}}),r)})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){return t=!1}}),[]);var u=r.sort((function(e,t){return t.pooled_trip_rate_before-e.pooled_trip_rate_before})),h=u[0],d=u[u.length-1],m=u.length>1?(0,n.jsxs)("p",{className:"center",children:[(0,n.jsx)("span",{className:"bold",children:h.name}),(0,n.jsx)("span",{children:" has the highest rate of pooled trips ("}),(0,n.jsx)("span",{className:"bold",children:O.Mb.percentWithOneDecimal(h.pooled_trip_rate_before)}),(0,n.jsx)("span",{children:") while "}),(0,n.jsx)("span",{className:"bold",children:d.name}),(0,n.jsx)("span",{children:" has the lowest ("}),(0,n.jsx)("span",{className:"bold",children:O.Mb.percentWithOneDecimal(d.pooled_trip_rate_before)}),(0,n.jsx)("span",{children:")."})]}):null;return(0,n.jsxs)("div",{className:"QuestionPooledTrips",children:[(0,n.jsxs)("div",{className:"center medium-width",children:[(0,n.jsx)("h2",{children:"Pooled Trip Rates by Community Area"}),(0,n.jsx)("p",{children:"This chart shows the percentage of all rides that were pooled in the year before COVID, by community area where the rider was picked up."})]}),(0,n.jsx)(R,{data:s}),m,(0,n.jsx)("br",{}),(0,n.jsxs)("div",{className:"center medium-width",children:[(0,n.jsx)("h2",{children:"Change Since COVID"}),(0,n.jsx)("p",{children:"This table shows how the average number of trips per day and average cost per trip has changed in each community area since COVID."}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{className:"bold",children:"Before"}),(0,n.jsx)("span",{children:" is the 12-month period from February 2019-2020."})]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{className:"bold",children:"After"}),(0,n.jsx)("span",{children:" is the 12-month period from March 2020-2021."})]})]}),(0,n.jsx)(S,{rows:r,cols:W})]})}};var U=!0;function Z(e){var t=(0,i.useState)(!0),r=t[0],c=t[1],l=E[e.component];return(0,n.jsxs)("div",{children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:"TransitHealth"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("meta",{name:"description",content:"Explore transit and public health data across Chicago."}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(a.Z,{}),(0,n.jsx)("main",{className:"QuestionLayout",children:(0,n.jsxs)("div",{className:"page",children:[(0,n.jsxs)("div",{className:"center medium-width",children:[(0,n.jsx)("h1",{children:e.title}),(0,n.jsxs)("p",{children:["By ",e.author]}),(0,n.jsx)("p",{children:e.description}),(0,n.jsx)("hr",{})]}),(0,n.jsx)("div",{className:r?"block":"hidden",children:(0,n.jsx)("p",{className:"center",children:"Loading..."})}),(0,n.jsx)("div",{className:r?"hidden":"block",children:(0,n.jsx)(l,{setContentIsLoading:c})}),(0,n.jsx)("br",{})]})}),(0,n.jsx)(s.k,{})]})}},3743:function(e,t,r){"use strict";r.d(t,{gB:function(){return o},Mb:function(){return a},fH:function(){return s},xR:function(){return i},QA:function(){return c},mv:function(){return l}});var n=Intl.NumberFormat("en-US");function o(e,t){return(t-e)/e}var a={numberWithCommas:function(e){return n.format(e)},numberInThousands:function(e){return n.format((e/1e3).toFixed(1))+"K"},numberInMillions:function(e){return n.format((e/1e6).toFixed(1))+"M"},percentWithNoDecimal:function(e){return(100*e).toFixed(0)+"%"},percentWithOneDecimal:function(e){return(100*e).toFixed(1)+"%"},dollarsUSD:function(e){return"$"+e.toFixed(2)},centsToDollarsUSD:function(e){return"$"+(e/100).toFixed(2)},percentChangeWithNoDecimal:function(e){return(e>=0?"+":"")+(100*e).toFixed(0)+"%"},percentChangeWithOneDecimal:function(e){return(e>=0?"+":"")+(100*e).toFixed(1)+"%"}},s={rideshare_pickups_covid:{name:"Rideshare Pickups Since March 2020",units:"trips",format:a.numberInMillions,fullFormat:a.numberWithCommas},rideshare_pooled_trip_rate_2018:{name:"2018 Rideshare Pooled Trip Rate",units:"of trips",format:a.percentWithNoDecimal,fullFormat:a.percentWithOneDecimal},rideshare_pooled_trip_rate_2019:{name:"2019 Rideshare Pooled Trip Rate",units:"of trips",format:a.percentWithNoDecimal,fullFormat:a.percentWithOneDecimal},rideshare_pool_request_rate_2018:{name:"2018 Rideshare Pool Request Rate",units:"of trips",format:a.percentWithNoDecimal,fullFormat:a.percentWithOneDecimal},rideshare_pool_request_rate_2019:{name:"2019 Rideshare Pool Request Rate",units:"of trips",format:a.percentWithNoDecimal,fullFormat:a.percentWithOneDecimal},total_population_2000:{name:"2000 Total Population",units:"people",format:a.numberInThousands,fullFormat:a.numberWithCommas},total_population_2010:{name:"2010 Total Population",units:"people",format:a.numberInThousands,fullFormat:a.numberWithCommas},total_population_2019:{name:"2019 Total Population",units:"people",format:a.numberInThousands,fullFormat:a.numberWithCommas},median_income_2010:{name:"2010 Median Income",units:"dollars",format:a.dollarsUSD,fullFormat:a.dollarsUSD},median_income_2019:{name:"2019 Median Income",units:"dollars",format:a.dollarsUSD,fullFormat:a.dollarsUSD},total_covid_cases:{name:"Total COVID Cases",units:"cases",format:a.numberInThousands,fullFormat:a.numberWithCommas}},i={weekly_rideshare_pickups:{name:"Weekly Rideshare Pickups",units:"trips",format:a.numberInThousands,fullFormat:a.numberWithCommas},weekly_rideshare_pickups_covid:{name:"Weekly Rideshare Pickups Since March 2020",units:"trips",format:a.numberInThousands,fullFormat:a.numberWithCommas},weekly_rideshare_avg_cost:{name:"Weekly Rideshare Avg. Cost",units:"USD",format:a.centsToDollarsUSD,fullFormat:a.centsToDollarsUSD},weekly_rideshare_avg_cost_covid:{name:"Weekly Rideshare Avg. Cost Since March 2020",units:"USD",format:a.centsToDollarsUSD,fullFormat:a.centsToDollarsUSD},weekly_covid_cases:{name:"Weekly COVID Cases",units:"cases",format:a.numberWithCommas,fullFormat:a.numberWithCommas}},c={metricX:"total_population_2019",metricY:"total_covid_cases"},l={metricToAdd:"weekly_rideshare_pickups",defaultMetrics:[{id:"weekly_rideshare_pickups",axis:"left"},{id:"weekly_covid_cases",axis:"right"}]}},7277:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/questions/[id]",function(){return r(132)}])}},function(e){e.O(0,[774,351,197,832,670],(function(){return t=7277,e(e.s=t);var t}));var t=e.O();_N_E=t}]);