(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{9187:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(5893),a=r(1664);function i(){return(0,n.jsxs)("nav",{children:[(0,n.jsx)(a.default,{href:"/",children:"Home"}),(0,n.jsx)(a.default,{href:"/explorer",children:"Explorer"}),(0,n.jsx)(a.default,{href:"/questions",children:"Questions"}),(0,n.jsx)(a.default,{href:"/about",children:"About"})]})}},8047:function(e,t,r){"use strict";r.d(t,{P_:function(){return c},K4:function(){return l},k7:function(){return f}});var n=r(7757),a=r.n(n),i=r(2137),o=r(5893),s=r(7294);function c(e){var t=(0,s.useState)(e.visible||!1),r=t[0],n=t[1],a=e.classes||[],i=r?"block":"hidden";return(0,s.useEffect)((function(){n(e.visible)}),[e.visible]),(0,o.jsxs)("div",{className:"Notification ".concat(a.join(" ")," ").concat(i),children:[(0,o.jsx)("div",{className:"CloseHolder",children:(0,o.jsx)("span",{className:"Close",onClick:function(){n(!1)},children:"x"})}),e.children]})}function l(e){var t=e.data||e.error,r=t&&t.toString(),n=e.classes||["Failure"];return(0,o.jsx)("div",{children:(0,o.jsx)(c,{classes:n,visible:e.error,children:(0,o.jsx)("p",{children:r})})})}function u(){return(u=(0,i.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){fetch("".concat("https://transithealth.herokuapp.com","/")).then((function(t){e(!0)})).catch((function(t){e(!1)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d="transithealth__last_ping",m="Connecting to our server...",h="Connected successfully!",p="Could not connect. Please reload page.";function f(){var e=(0,s.useState)(!0),t=e[0],r=e[1],n=(0,s.useState)(!0),a=n[0],i=n[1],l=(0,s.useState)(!1),f=l[0],b=l[1];(0,s.useEffect)((function(){var e,t,n=!0,a=localStorage.getItem(d);return(!a||Date.now()-a>=3e5)&&(e=setTimeout((function(){n&&b(!0)}),1e3),function(){return u.apply(this,arguments)}().then((function(e){n&&(i(e),r(!1)),e&&(localStorage.setItem(d,Date.now()),t=setTimeout((function(){n&&b(!1)}),1e3))}))),function(){n=!1,e&&clearTimeout(e),t&&clearTimeout(t)}}),[]);var j=["Bottom","Narrow",t?"":a?"Success":"Failure",!t&&a?"FadeOut":"FadeIn"],g=t?m:a?h:p;return(0,o.jsx)("div",{children:(0,o.jsx)(c,{classes:j,visible:f,children:(0,o.jsx)("p",{children:g})})})}},2754:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return Re},default:function(){return Ae}});var n=r(5893),a=r(9008),i=(r(1664),r(9187)),o=r(8047),s=r(7294);var c=r(6156),l=r(1009),u=r(9009),d=r(2931),m=r(6208),h=r(3815),p=r(9307),f=r(3872),b="#263238",j="#332288",g="#1978AD",y="#117733",_="#44AA99",x="#CC6677",v="#882255",O=r(3743);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C="".concat("https://transithealth.herokuapp.com","/fake/data/example-pie-chart"),S={rail:{name:"CTA Rail",color:y},bus:{name:"CTA Bus",color:g},rideshare:{name:"Rideshare",color:j},"e-scooter":{name:"E-Scooter",color:x}},P={name:"?",totalTripsFormatted:"?"};function k(e){var t=e.data;return(0,n.jsx)(u.h,{width:"100%",height:400,children:(0,n.jsxs)(d.u,{width:400,height:400,margin:{bottom:30},children:[(0,n.jsx)(m.b,{data:t,nameKey:"name",dataKey:"total_trips_2019",label:!0,cx:"50%",cy:"50%",fill:"",outerRadius:150,children:t.map((function(e,t){return(0,n.jsx)(h.b,{fill:e.color},"cell-".concat(t))}))}),(0,n.jsx)(p.u,{}),(0,n.jsx)(f.D,{layout:"horizontal",verticalAlign:"top",align:"center",wrapperStyle:{bottom:-10}})]})})}var W=r(4699),N=r(4831),F=r(4195),T=r(3023),R=r(5048),A=r(5358),I=r(7226),B=r(7329);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function K(e){var t=e.data,r=e.col,a=t[r.key],i=r.format?r.format(a):a,o=r.rowClasses?"Cell "+r.rowClasses.join(" "):"Cell",s={background:r.rgb?r.alpha?"rgba(".concat(r.rgb,", ").concat(r.alpha(a),")"):"rgb(".concat(r.rgb,")"):"transparent"};return(0,n.jsx)("td",{className:o,style:s,children:i})}function Z(e){var t=e.data,r=e.cols;return(0,n.jsx)("tr",{children:r.map((function(e,r){return(0,n.jsx)(K,{data:t,col:e},r)}))})}function U(e){var t=e.cols,r=e.sortCol,a=e.sortAsc,i=e.sortByCol,o=t.reduce((function(e,t){return e||t.group}),!1),s=t.filter((function(e){return e.group})).reduce((function(e,t){return E(E({},e),{},(0,c.Z)({},t.group,(e[t.group]||0)+1))}),{}),l=t.filter((function(e){return e.group})).reduce((function(e,t){return E(E({},e),{},(0,c.Z)({},t.group,t.key))}),{}),u=t.filter((function(e){return!e.group||l[e.group]===e.key})),d=o?(0,n.jsx)("tr",{children:u.map((function(e,t){var r=s[e.group]||1;return(0,n.jsx)("th",{className:"GroupHeader",colSpan:r,children:e.group},t)}))}):null;return(0,n.jsxs)("thead",{children:[d,(0,n.jsx)("tr",{children:t.map((function(e,t){return(0,n.jsxs)("th",{className:r===e.key?"Sorted":"",onClick:function(t){i(e.key)},children:[(0,n.jsx)("span",{children:e.name}),(0,n.jsx)("span",{className:"SortArrow",children:a?"\u25bc":"\u25b2"})]},t)}))})]})}function H(e){var t=(0,B.Z)(e.rows),r=(0,s.useState)(null),a=r[0],i=r[1],o=(0,s.useState)(!1),c=o[0],l=o[1],u=(0,s.useState)(0),d=u[0],m=u[1];var h=null!==a?t.sort((function(e,t){var r=e[a],n=t[a];return r.localeCompare&&n.localeCompare?c?r.localeCompare(n):n.localeCompare(r):c?r-n:n-r})):(0,B.Z)(t);return(0,n.jsx)("div",{className:"TableContainer",children:(0,n.jsxs)("table",{children:[(0,n.jsx)(U,{cols:e.cols,sortCol:a,sortAsc:c,sortByCol:function(e){e==a?d>=2?(i(null),l(!1),m(0)):(l(!c),m(d+1)):(i(e),l(!1),m(1))}}),(0,n.jsx)("tbody",{children:h.map((function(t,r){return(0,n.jsx)(Z,{data:t,cols:e.cols},r)}))})]})})}function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z="".concat("https://transithealth.herokuapp.com","/question/pooled_trips"),V={Central:"#332288","Far North Side":"#1978AD","Far Southeast Side":"#117733","Far Southwest Side":"#44AA99","North Side":"#88CCEE","Northwest Side":"#DCA139","South Side":"#CC6677","Southwest Side":"#AA4499","West Side":"#882255"},$=[{key:"area_number",group:"Pickup Community Area",name:"#"},{key:"name",group:"Pickup Community Area",name:"Name"},{key:"part",group:"Pickup Community Area",name:"Part"},{key:"pooled_trip_rate_before",group:"Pooled Trips",name:"% of Trips",format:O.Mb.percentWithOneDecimal,rowClasses:["right"]},{key:"avg_trips_per_day_before",group:"Trips/Day",name:"Before",format:O.Mb.numberWithCommas,rowClasses:["right"]},{key:"avg_trips_per_day_since",group:"Trips/Day",name:"Since",format:O.Mb.numberWithCommas,rowClasses:["right"]},{key:"pct_change_avg_trips",group:"Trips/Day",name:"Change",format:O.Mb.percentChangeWithNoDecimal,rowClasses:["right"],rgb:"136, 34, 85",alpha:function(e){return e/-.8}},{key:"avg_cost_per_trip_cents_before",group:"Cost/Trip",name:"Before",format:O.Mb.centsToDollarsUSD,rowClasses:["right"]},{key:"avg_cost_per_trip_cents_since",group:"Cost/Trip",name:"Since",format:O.Mb.centsToDollarsUSD,rowClasses:["right"]},{key:"pct_change_avg_cost",group:"Cost/Trip",name:"Change",format:O.Mb.percentChangeWithNoDecimal,rowClasses:["right"],rgb:"17, 119, 51",alpha:function(e){return e/.3}}];function J(e){if(e){var t=function(e){return e.map((function(e){return q(q({},e),{},{pct_change_avg_trips:(0,O.gB)(e.avg_trips_per_day_before,e.avg_trips_per_day_since),pct_change_avg_cost:(0,O.gB)(e.avg_cost_per_trip_cents_before,e.avg_cost_per_trip_cents_since)})}))}(e.metrics),r=function(e){return e.sort((function(e,t){return t.pooled_trip_rate_before-e.pooled_trip_rate_before})).sort((function(e,t){return e.part.localeCompare(t.part)})).map((function(e){return q(q({},e),{},(0,c.Z)({},e.part,e.pooled_trip_rate_before))}))}(t);return[t,r]}return[[],[]]}function Y(e){var t=e.data;return(0,n.jsx)(u.h,{width:"100%",height:400,children:(0,n.jsxs)(N.v,{data:t,margin:{left:30,right:30,bottom:30,top:30},children:[(0,n.jsx)(F.q,{strokeDashArray:"3 3"}),(0,n.jsx)(T.K,{dataKey:"name",tick:{dy:5},children:(0,n.jsx)(R._,{value:"Pickup Community Area",position:"bottom",offset:10})}),(0,n.jsx)(A.B,{type:"number",tickFormatter:O.Mb.percentWithNoDecimal,children:(0,n.jsx)(R._,{value:"Pooled Trip Rate",position:"left",angle:-90,offset:15,style:{textAnchor:"middle"}})}),(0,n.jsx)(p.u,{formatter:function(e,t,r){return[O.Mb.percentWithOneDecimal(e),"Pooled Trip Rate",r]}}),Object.keys(V).map((function(e,t){return(0,n.jsx)(I.$,{dataKey:e,stackId:"a",fill:V[e]},t)})),(0,n.jsx)(f.D,{layout:"horizontal",verticalAlign:"top",align:"center",wrapperStyle:{top:5}})]})})}function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X="".concat("https://transithealth.herokuapp.com","/rideshare/total_trips_by_pickup_part_and_year"),ee={Central:"#332288","Far North Side":"#1978AD","Far Southeast Side":"#117733","Far Southwest Side":"#44AA99","North Side":"#88CCEE","Northwest Side":"#DCA139","South Side":"#CC6677","Southwest Side":"#AA4499","West Side":"#882255"},te={name:"?",totalTripsFormatted:"?"};function re(e){var t=e.data;return(0,n.jsx)(u.h,{width:"100%",height:400,children:(0,n.jsxs)(d.u,{width:400,height:400,margin:{bottom:30},children:[(0,n.jsx)(m.b,{data:t,nameKey:"pickup_part",dataKey:"total_trips",label:!0,cx:"50%",cy:"50%",fill:"",outerRadius:150,children:t.map((function(e,t){return(0,n.jsx)(h.b,{fill:e.color},"cell-".concat(t))}))}),(0,n.jsx)(p.u,{}),(0,n.jsx)(f.D,{layout:"horizontal",verticalAlign:"top",align:"center",wrapperStyle:{bottom:-10}})]})})}function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ie="".concat("https://transithealth.herokuapp.com","/community/metrics"),oe={name:"?",part:"?",disability_rate_formatted:"?"};function se(e){var t=e.data;return(0,n.jsx)(u.h,{width:"100%",height:400,children:(0,n.jsxs)(d.u,{width:400,height:400,margin:{bottom:30},children:[(0,n.jsx)(m.b,{data:t,nameKey:"label",dataKey:"value",label:!0,cx:"50%",cy:"50%",fill:"",outerRadius:150,children:t.map((function(e,t){return(0,n.jsx)(h.b,{fill:e.color},"cell-".concat(t))}))}),(0,n.jsx)(p.u,{}),(0,n.jsx)(f.D,{layout:"horizontal",verticalAlign:"top",align:"center",wrapperStyle:{bottom:-10}})]})})}function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ue="".concat("https://transithealth.herokuapp.com","/community/metrics"),de={name:"?",belongingRateFormatted:"?"};function me(e){var t,r=e.data;if(null===r||void 0===r||null===(t=r[0])||void 0===t||!t.value)return null;var a={backgroundColor:"white",borderColor:"LightGrey",borderStyle:"solid",borderWidth:"thin"},i=function(e){var t=e.active,r=e.payload;e.label;return t&&r&&r.length?(0,n.jsx)("div",{className:"custom-tooltip",style:a,children:(0,n.jsx)("p",{className:"label",children:"".concat(r[0].name," : ").concat(r[0].payload.valueFormatted)})}):null},o=Math.PI/180;return(0,n.jsx)(u.h,{width:"100%",height:400,children:(0,n.jsxs)(d.u,{width:400,height:400,margin:{bottom:30},children:[(0,n.jsx)(m.b,{data:r,nameKey:"label",dataKey:"value",label:function(e){var t=e.cx,r=e.cy,a=e.midAngle,i=e.innerRadius,s=e.outerRadius,c=e.color,l=e.valueFormatted,u=(e.index,25+i+(s-i)),d=t+u*Math.cos(-a*o),m=r+u*Math.sin(-a*o);return(0,n.jsx)("text",{x:d,y:m,fill:c,textAnchor:d>t?"start":"end",dominantBaseline:"central",children:"".concat(l)})},cx:"50%",cy:"50%",fill:"",outerRadius:150,children:r.map((function(e,t){return(0,n.jsx)(h.b,{fill:e.color},"cell-".concat(t))}))}),(0,n.jsx)(p.u,{content:(0,n.jsx)(i,{})}),(0,n.jsx)(f.D,{layout:"horizontal",verticalAlign:"top",align:"center",wrapperStyle:{bottom:-10}})]})})}function he(e){if(!e.data)return(0,n.jsx)("p",{children:"Waiting for data..."});return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:"Select an Area of Interest"}),(0,n.jsx)("select",{onChange:function(t){return e.handleChange(parseInt(t.target.value))},children:e.data.metrics.map((function(e,t){return(0,n.jsx)("option",{value:e.area_number,children:e.name},t)}))})]})}function pe(e){var t=e.areaData;return t?t.belonging_rate_2018?(0,n.jsxs)("span",{children:["Based on the data from 2018, ",t.belongingRateFormatted," of people in ",t.name," agree or strongly agree that they feel a sense of belonging in their community"]}):(0,n.jsxs)("span",{children:["There is no data for ",t.name]}):(0,n.jsx)("p",{children:"Waiting for data..."})}function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function be(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var je="".concat("https://transithealth.herokuapp.com","/community/metrics"),ge={name:"?",rentBurdenRateFormatted:"?"};function ye(e){var t,r=e.data;if(null===r||void 0===r||null===(t=r[0])||void 0===t||!t.value)return null;var a={backgroundColor:"white",borderColor:"LightGrey",borderStyle:"solid",borderWidth:"thin"},i=function(e){var t=e.active,r=e.payload;e.label;return t&&r&&r.length?(0,n.jsx)("div",{className:"custom-tooltip",style:a,children:(0,n.jsx)("p",{className:"label",children:"".concat(r[0].name," : ").concat(r[0].payload.valueFormatted)})}):null},o=Math.PI/180;return(0,n.jsx)(u.h,{width:"100%",height:400,children:(0,n.jsxs)(d.u,{width:400,height:400,margin:{bottom:30},children:[(0,n.jsx)(m.b,{data:r,nameKey:"label",dataKey:"value",label:function(e){var t=e.cx,r=e.cy,a=e.midAngle,i=e.innerRadius,s=e.outerRadius,c=e.color,l=e.valueFormatted,u=(e.index,25+i+(s-i)),d=t+u*Math.cos(-a*o),m=r+u*Math.sin(-a*o);return(0,n.jsx)("text",{x:d,y:m,fill:c,textAnchor:d>t?"start":"end",dominantBaseline:"central",children:"".concat(l)})},cx:"50%",cy:"50%",fill:"",outerRadius:150,children:r.map((function(e,t){return(0,n.jsx)(h.b,{fill:e.color},"cell-".concat(t))}))}),(0,n.jsx)(p.u,{content:(0,n.jsx)(i,{})}),(0,n.jsx)(f.D,{layout:"horizontal",verticalAlign:"top",align:"center",wrapperStyle:{bottom:-10}})]})})}function _e(e){if(!e.data)return(0,n.jsx)("p",{children:"Waiting for data..."});return(0,n.jsxs)("div",{style:{display:"inline-block"},children:[(0,n.jsx)("p",{children:"Select the Year"}),(0,n.jsx)("select",{onChange:function(t){return e.handleChange(parseInt(t.target.value))},children:e.data.map((function(e,t){return(0,n.jsx)("option",{value:e,children:e},t)}))})]})}function xe(e){if(!e.data)return(0,n.jsx)("p",{children:"Waiting for data..."});return(0,n.jsxs)("div",{style:{display:"inline-block"},children:[(0,n.jsx)("p",{children:"Select an Area of Interest"}),(0,n.jsx)("select",{onChange:function(t){return e.handleChange(parseInt(t.target.value))},children:e.data.metrics.map((function(e,t){return(0,n.jsx)("option",{value:e.area_number,children:e.name},t)}))})]})}function ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ve(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var De="".concat("https://transithealth.herokuapp.com","/timeline/metrics"),we={year:"?",numberOfPermitsFormatted:"?"};function Ce(e){var t=e.data;return(0,n.jsx)(u.h,{width:"100%",height:400,children:(0,n.jsxs)(N.v,{width:400,height:400,data:t,margin:{bottom:30},children:[(0,n.jsx)(F.q,{strokeDasharray:"3 3"}),(0,n.jsx)(T.K,{dataKey:"year"}),(0,n.jsx)(A.B,{}),(0,n.jsx)(I.$,{nameKey:"year",dataKey:"yearly_sidewalk_cafe_permit",fill:"#000000",children:t.map((function(e,t){return(0,n.jsx)(h.b,{fill:e.color},"cell-".concat(t))}))}),(0,n.jsx)(p.u,{}),(0,n.jsx)(f.D,{layout:"horizontal",verticalAlign:"top",align:"center",wrapperStyle:{bottom:-10}})]})})}var Se=r(7757),Pe=r.n(Se),ke=r(2137),We=new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric"}),Ne="".concat("https://transithealth.herokuapp.com","/question/sidewalk_search"),Fe=[{key:"doing_business_as_name",name:"Business Name"},{key:"zip_code",name:"Zip Code"},{key:"issued_date_dt",name:"Issued On",format:function(e){return We.format(new Date("".concat(e," ")))}},{key:"expiration_date",name:"Expires On",format:function(e){return We.format(new Date(e))}}];var Te={sample:function(){return(0,n.jsx)("div",{children:(0,n.jsx)("p",{children:"This question is still under development. Check back soon!"})})},"template-with-pie-chart":function(e){var t=(0,l.ZP)(C,{},[]),r=t.loading,a=t.error,i=t.data,c=function(e,t){if(!e||t)return{chartData:[],mostTrips:P};var r=e.results.map((function(e){return w(w(w({},e),S[e.transit_mode]||{name:e.transit_mode,color:b}),{},{totalTripsFormatted:O.Mb.numberInMillions(e.total_trips_2019)})})),n=r.reduce((function(e,t){return t.total_trips_2019>e.total_trips_2019?t:e}),{total_trips_2019:0});return{chartData:r,mostTrips:n}}(i,a),u=c.chartData,d=c.mostTrips;return(0,s.useEffect)((function(){e.setContentIsLoading(r)}),[r]),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"center medium-width",children:[(0,n.jsx)("h2",{children:"Total Trips by Transit Type"}),(0,n.jsx)("p",{children:"How do people get around the city?"}),(0,n.jsx)(o.K4,{error:a,data:i})]}),(0,n.jsxs)("div",{className:"center",children:[(0,n.jsx)(k,{data:u}),(0,n.jsx)("br",{})]}),(0,n.jsx)("div",{className:"center medium-width",children:(0,n.jsxs)("p",{children:[(0,n.jsxs)("span",{children:["Based on (fake) data from 2019, ",d.name," is the most popular transit mode, "]}),(0,n.jsxs)("span",{children:["with ",d.totalTripsFormatted," annual trips."]})]})})]})},"pooled-trips":function(e){var t=(0,l.ZP)(z,{},[]),r=t.loading,a=t.error,i=J(t.data),c=(0,W.Z)(i,2),u=c[0],d=c[1];(0,s.useEffect)((function(){e.setContentIsLoading(r)}),[r]);var m=a?(0,n.jsx)(o.P_,{classes:["Bottom","Wide","Failure"],visible:!0,children:(0,n.jsx)("p",{children:"Failed to get data from server. Please reload."})}):null,h=u.sort((function(e,t){return t.pooled_trip_rate_before-e.pooled_trip_rate_before})),p=h[0],f=h[h.length-1],b=h.length>1?(0,n.jsxs)("p",{className:"center",children:[(0,n.jsx)("span",{className:"bold",children:p.name}),(0,n.jsx)("span",{children:" has the highest rate of pooled trips ("}),(0,n.jsx)("span",{className:"bold",children:O.Mb.percentWithOneDecimal(p.pooled_trip_rate_before)}),(0,n.jsx)("span",{children:") while "}),(0,n.jsx)("span",{className:"bold",children:f.name}),(0,n.jsx)("span",{children:" has the lowest ("}),(0,n.jsx)("span",{className:"bold",children:O.Mb.percentWithOneDecimal(f.pooled_trip_rate_before)}),(0,n.jsx)("span",{children:")."})]}):null;return(0,n.jsxs)("div",{className:"QuestionPooledTrips",children:[(0,n.jsxs)("div",{className:"center medium-width",children:[(0,n.jsx)("h2",{children:"Pooled Trip Rates by Community Area"}),(0,n.jsx)("p",{children:"This chart shows the percentage of all rides that were pooled in the year before COVID, by community area where the rider was picked up."})]}),(0,n.jsx)(Y,{data:d}),b,(0,n.jsx)("br",{}),(0,n.jsxs)("div",{className:"center medium-width",children:[(0,n.jsx)("h2",{children:"Change Since COVID"}),(0,n.jsx)("p",{children:"This table shows how the average number of trips per day and average cost per trip has changed in each community area since COVID."}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{className:"bold",children:"Before"}),(0,n.jsx)("span",{children:" is the 12-month period from February 2019-2020."})]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{className:"bold",children:"After"}),(0,n.jsx)("span",{children:" is the 12-month period from March 2020-2021."})]})]}),(0,n.jsx)(H,{rows:u,cols:$}),m]})},"rideshares-across-city":function(e){var t=(0,l.ZP)(X,{},[]),r=t.loading,a=t.error,i=t.data,c=function(e,t){return!e||t?{chartData:[],mostTrips:te}:{chartData:e.filter((function(e){return 2019===e.year})).map((function(e){return Q(Q({},e),{},{color:ee[e.pickup_part]})})),mostTrips:te}}(i,a),u=c.chartData;return c.mostTrips,(0,s.useEffect)((function(){e.setContentIsLoading(r)}),[r]),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"center medium-width",children:[(0,n.jsx)("h2",{children:"Rideshares by Part of City"}),(0,n.jsx)("p",{children:"How do people get around the city?"}),(0,n.jsx)(o.K4,{error:a,data:i})]}),(0,n.jsxs)("div",{className:"center",children:[(0,n.jsx)(re,{data:u}),(0,n.jsx)("br",{})]}),(0,n.jsx)("div",{className:"center medium-width"})]})},"residents-with-disabilities":function(e){var t=(0,l.ZP)(ie,{method:"POST",body:JSON.stringify({metrics:["disability_rate_2019"]})},[]),r=t.loading,a=t.error,i=t.data;console.log(i);var c=function(e,t,r){if(!e||t)return{chartData:[],areaData:oe};var n=e.metrics.map((function(e){return ae(ae({},e),{},{disability_rate_formatted:O.Mb.percentWithOneDecimal(e.disability_rate_2019)})})).filter((function(e){return e.area_number===r}))[0];return{chartData:[{label:"With Disabilities",value:n.disability_rate_2019,color:x},{label:"Without Disabilities",value:1-n.disability_rate_2019,color:_}],areaData:n}}(i,a,47),u=c.chartData,d=c.areaData;return(0,s.useEffect)((function(){e.setContentIsLoading(r)}),[r]),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"center medium-width",children:[(0,n.jsx)("h2",{children:"Disability Rate by Area"}),(0,n.jsxs)("p",{children:["How many residents in ",d.name," have an included disability?"]}),(0,n.jsx)(o.K4,{error:a,data:i})]}),(0,n.jsxs)("div",{className:"center",children:[(0,n.jsx)(se,{data:u}),(0,n.jsx)("br",{})]}),(0,n.jsx)("div",{className:"center medium-width",children:(0,n.jsx)("p",{children:(0,n.jsxs)("span",{children:["Based on data from 2019, ",d.disability_rate_formatted," of residents in ",d.name," have an included disability."]})})})]})},"belonging-rates":function(e){var t=(0,l.ZP)(ue,{method:"POST",body:JSON.stringify({metrics:["belonging_rate_2018"]})},[]),r=t.loading,a=t.error,i=t.data,c=(0,s.useState)(1),u=c[0],d=c[1],m=function(e,t,r){if(!e||t)return{chartData:[],areaData:de};var n=e.metrics.map((function(e){return le(le({},e),{},{belongingRateFormatted:O.Mb.percentWithOneDecimal(e.belonging_rate_2018)})})).filter((function(e){return e.area_number===r}))[0];return{chartData:[{label:"Feels Belonging",value:n.belonging_rate_2018,valueFormatted:O.Mb.percentWithOneDecimal(n.belonging_rate_2018),color:j},{label:"Does Not Feel Belonging",value:1-n.belonging_rate_2018,valueFormatted:O.Mb.percentWithOneDecimal(1-n.belonging_rate_2018),color:x}],areaData:n}}(i,a,u),h=m.chartData,p=m.areaData;return(0,s.useEffect)((function(){e.setContentIsLoading(r)}),[r]),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"center medium-width",children:[(0,n.jsx)("h2",{children:"Belonging Rate by Area"}),(0,n.jsx)(he,{data:i,handleChange:d}),(0,n.jsxs)("p",{children:["What percentage of residents in ",p.name," feel a sense of belonging?"]}),(0,n.jsx)(o.K4,{error:a,data:i})]}),(0,n.jsxs)("div",{className:"center",children:[(0,n.jsx)(me,{data:h}),(0,n.jsx)("br",{})]}),(0,n.jsx)("div",{className:"center medium-width",children:(0,n.jsx)("p",{children:(0,n.jsx)(pe,{areaData:p})})})]})},"rent-burden-rates":function(e){var t=(0,l.ZP)(je,{method:"POST",body:JSON.stringify({metrics:["rent_burdened_2019","rent_burdened_2018","rent_burdened_2017"]})},[]),r=t.loading,a=t.error,i=t.data,c=(0,s.useState)(1),u=c[0],d=c[1],m=(0,s.useState)(2019),h=m[0],p=m[1],f=function(e,t,r,n){if(!e||t)return{chartData:[],areaData:ge};var a=2019===n?"rent_burdened_2019":2018===n?"rent_burdened_2018":2017===n?"rent_burdened_2017":"Error",i=e.metrics.map((function(e){return be(be({},e),{},{rentBurdenRateFormatted:O.Mb.percentWithOneDecimal(e[a])})})).filter((function(e){return e.area_number===r}))[0];return{chartData:[{label:"Rent Burdened Households",value:i[a],valueFormatted:O.Mb.percentWithOneDecimal(i[a]),color:v},{label:"Not Rent Burdened Households",value:1-i[a],valueFormatted:O.Mb.percentWithOneDecimal(1-i[a]),color:y}],areaData:i}}(i,a,u,h),b=f.chartData,j=f.areaData;return(0,s.useEffect)((function(){e.setContentIsLoading(r)}),[r]),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"center medium-width",children:[(0,n.jsx)("h2",{children:"Rent Burdened Households Rate by Area and Year"}),(0,n.jsx)(xe,{data:i,handleChange:d}),(0,n.jsx)(_e,{data:[2019,2018,2017],handleChange:p}),(0,n.jsxs)("p",{children:["What percentage of households in ",j.name," are rent burdened?"]}),(0,n.jsx)(o.K4,{error:a,data:i})]}),(0,n.jsxs)("div",{className:"center",children:[(0,n.jsx)(ye,{data:b}),(0,n.jsx)("br",{})]}),(0,n.jsx)("div",{className:"center medium-width",children:(0,n.jsx)("p",{children:(0,n.jsxs)("span",{children:["Based on data from ",h,", ",j.rentBurdenRateFormatted," of households in ",j.name," are rent burdened."]})})})]})},"sidewalk-cafe-permits-years":function(e){var t=(0,l.ZP)(De,{method:"POST",body:JSON.stringify({metrics:["yearly_sidewalk_cafe_permit"]})},[]),r=t.loading,a=t.error,i=t.data,c=function(e,t){if(!e||t)return{chartData:[],mostPermits:we};var r=e.metrics.map((function(e){return Oe(Oe({},e),{},{color:j,year:e.date.split("-")[0],numberOfPermitsFormatted:O.Mb.numberWithCommas(e.yearly_sidewalk_cafe_permit)})})),n=r.reduce((function(e,t){return t.yearly_sidewalk_cafe_permit>e.yearly_sidewalk_cafe_permit?t:e}),{yearly_sidewalk_cafe_permit:0});return{chartData:r,mostPermits:n}}(i,a),u=c.chartData,d=c.mostPermits;return(0,s.useEffect)((function(){e.setContentIsLoading(r)}),[r]),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"center medium-width",children:[(0,n.jsx)("h2",{children:"Sidewalk Cafe Permits by Year"}),(0,n.jsx)("p",{children:"City of Chicago has been issuing sidewalk cafe permits since 2001."}),(0,n.jsx)(o.K4,{error:a,data:i})]}),(0,n.jsxs)("div",{className:"center",children:[(0,n.jsx)(Ce,{data:u}),(0,n.jsx)("br",{})]}),(0,n.jsx)("div",{className:"center medium-width",children:(0,n.jsx)("p",{children:(0,n.jsxs)("span",{children:[d.year," had the most permits issued (",d.numberOfPermitsFormatted,")."]})})})]})},"sidewalk-cafe-permit-search":function(e){var t=(0,s.useState)(""),r=t[0],a=t[1],i=(0,s.useState)(""),c=i[0],l=i[1],u=(0,s.useState)(null),d=u[0],m=u[1],h=(0,s.useState)(null),p=h[0],f=h[1],b=(0,s.useState)(!1),j=b[0],g=b[1],y=(null===d||void 0===d?void 0:d.results)||[],_=j?"Searching...":c?y.length>0?"".concat(y.length," results for ").concat(c):"No results for ".concat(c):null;return(0,s.useEffect)((function(){e.setContentIsLoading(!1)}),[]),(0,n.jsxs)("div",{className:"SidewalkCafePermitSearch",children:[(0,n.jsxs)("div",{className:"center medium-width",children:[(0,n.jsx)("p",{children:"Search for permits by restaurant name."}),(0,n.jsx)("input",{className:"SearchInput",type:"text",placeholder:"Search",value:r,onChange:function(e){return a(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&function(){var e=!0;function t(){return(t=(0,ke.Z)(Pe().mark((function e(){var t,n;return Pe().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(Ne,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({search:r})});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}g(!0),l(r),function(){return t.apply(this,arguments)}().then((function(t){e&&(g(!1),f(null),m(t))})).catch((function(t){e&&(g(!1),f(t),m(null))}))}()}}),(0,n.jsx)("p",{children:_}),(0,n.jsx)(o.K4,{error:p,data:d})]}),(0,n.jsx)(H,{rows:y,cols:Fe})]})}};var Re=!0;function Ae(e){var t=(0,s.useState)(!0),r=t[0],c=t[1],l=Te[e.component];return(0,n.jsxs)("div",{children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:"TransitHealth"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("meta",{name:"description",content:"Explore transit and public health data across Chicago."}),(0,n.jsx)("link",{rel:"icon",href:"favicon.ico"})]}),(0,n.jsx)(i.Z,{}),(0,n.jsx)("main",{className:"QuestionLayout",children:(0,n.jsxs)("div",{className:"page",children:[(0,n.jsxs)("div",{className:"center medium-width",children:[(0,n.jsx)("h1",{children:e.title}),(0,n.jsxs)("p",{children:["By ",e.author]}),(0,n.jsx)("p",{children:e.description}),(0,n.jsx)("hr",{})]}),(0,n.jsx)("div",{className:r?"block":"hidden",children:(0,n.jsx)("p",{className:"center",children:"Loading..."})}),(0,n.jsx)("div",{className:r?"hidden":"block",children:(0,n.jsx)(l,{setContentIsLoading:c})}),(0,n.jsx)("br",{})]})}),(0,n.jsx)(o.k7,{})]})}},3743:function(e,t,r){"use strict";r.d(t,{gB:function(){return a},Mb:function(){return i},fH:function(){return o},Ov:function(){return s},QA:function(){return c},mv:function(){return l}});var n=Intl.NumberFormat("en-US");function a(e,t){return(t-e)/e}var i={numberWithCommas:function(e){return n.format(e)},numberInThousands:function(e){return n.format((e/1e3).toFixed(1))+"K"},numberInMillions:function(e){return n.format((e/1e6).toFixed(1))+"M"},percentWithNoDecimal:function(e){return(100*e).toFixed(0)+"%"},percentWithOneDecimal:function(e){return(100*e).toFixed(1)+"%"},dollarsUSD:function(e){return"$"+e.toFixed(2)},dollarsUSDWithCommas:function(e){return"$".concat(n.format(Math.floor(e)))},dollarsUSDInThousands:function(e){return"$".concat(n.format((e/1e3).toFixed(1)),"K")},centsToDollarsUSD:function(e){return"$"+(e/100).toFixed(2)},percentChangeWithNoDecimal:function(e){return(e>=0?"+":"")+(100*e).toFixed(0)+"%"},percentChangeWithOneDecimal:function(e){return(e>=0?"+":"")+(100*e).toFixed(1)+"%"}},o={rideshare_pickups_covid:{name:"Rideshare Pickups Since March 2020",units:"trips",format:i.numberInMillions,fullFormat:i.numberWithCommas},rideshare_pooled_trip_rate_2018:{name:"2018 Rideshare Pooled Trip Rate",units:"of trips",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},rideshare_pooled_trip_rate_2019:{name:"2019 Rideshare Pooled Trip Rate",units:"of trips",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},rideshare_pool_request_rate_2018:{name:"2018 Rideshare Pool Request Rate",units:"of trips",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},rideshare_pool_request_rate_2019:{name:"2019 Rideshare Pool Request Rate",units:"of trips",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},total_population_2010:{name:"2010 Total Population",units:"people",format:i.numberInThousands,fullFormat:i.numberWithCommas},total_population_2019:{name:"2019 Total Population",units:"people",format:i.numberInThousands,fullFormat:i.numberWithCommas},median_income_2010:{name:"2010 Median Income",units:"dollars",format:i.dollarsUSDInThousands,fullFormat:i.dollarsUSDWithCommas},median_income_2017:{name:"2017 Median Income",units:"dollars",format:i.dollarsUSDInThousands,fullFormat:i.dollarsUSDWithCommas},median_income_2018:{name:"2018 Median Income",units:"dollars",format:i.dollarsUSDInThousands,fullFormat:i.dollarsUSDWithCommas},median_income_2019:{name:"2019 Median Income",units:"dollars",format:i.dollarsUSDInThousands,fullFormat:i.dollarsUSDWithCommas},total_covid_cases:{name:"Total COVID Cases",units:"cases",format:i.numberInThousands,fullFormat:i.numberWithCommas},disability_rate_2018:{name:"2018 Disability Rate",units:"of people",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},disability_rate_2019:{name:"2019 Disability Rate",units:"of people",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},belonging_rate_2017:{name:"2017 Rate of Belonging",units:"of people",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},belonging_rate_2018:{name:"2018 Rate of Belonging",units:"of people",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},rent_burdened_2017:{name:"2017 Rate of Rent Burdened Households",units:"of households",format:i.percentWithOneDecimal,fullFormat:i.percentWithOneDecimal},rent_burdened_2018:{name:"2018 Rate of Rent Burdened Households",units:"of households",format:i.percentWithOneDecimal,fullFormat:i.percentWithOneDecimal},rent_burdened_2019:{name:"2019 Rate of Rent Burdened Households",units:"of households",format:i.percentWithOneDecimal,fullFormat:i.percentWithOneDecimal},rent_max:{name:"Maximum Rate of Rent Burdened Households",units:"of households",format:i.percentWithOneDecimal,fullFormat:i.percentWithOneDecimal},rent_min:{name:"Minimum Rate of Rent Burdened Households",units:"of households",format:i.percentWithOneDecimal,fullFormat:i.percentWithOneDecimal},rent_average:{name:"Average Rate of Rent Burdened Households",units:"of households",format:i.percentWithOneDecimal,fullFormat:i.percentWithOneDecimal},avg_speed_per_dropoff:{name:"Average Taxi Trip Speed Per Dropoff Area",units:"mph",format:i.numberWithCommas,fullFormat:i.numberWithCommas},avg_speed_per_pickup:{name:"Average Taxi Trip Speed Per Pickup Area",units:"mph",format:i.numberWithCommas,fullFormat:i.numberWithCommas}},s={weekly_rideshare_pickups:{name:"Weekly Rideshare Pickups",units:"trips",format:i.numberInThousands,fullFormat:i.numberWithCommas},weekly_rideshare_pickups_covid:{name:"Weekly Rideshare Pickups Since March 2020",units:"trips",format:i.numberInThousands,fullFormat:i.numberWithCommas},weekly_rideshare_avg_cost:{name:"Weekly Rideshare Avg. Cost",units:"USD",format:i.centsToDollarsUSD,fullFormat:i.centsToDollarsUSD},weekly_rideshare_avg_cost_covid:{name:"Weekly Rideshare Avg. Cost Since March 2020",units:"USD",format:i.centsToDollarsUSD,fullFormat:i.centsToDollarsUSD},weekly_covid_cases:{name:"Weekly COVID Cases",units:"cases",format:i.numberWithCommas,fullFormat:i.numberWithCommas},yearly_belonging_rate_all:{name:"Rate of Belonging of the City",units:"of people",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},yearly_belonging_rate_W:{name:"Rate of Belonging of Non-Hispanic White People",units:"of people",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},yearly_belonging_rate_B:{name:"Rate of Belonging of Non-Hispanic Black People",units:"of people",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},yearly_belonging_rate_A:{name:"Rate of Belonging of Asian or Pacific Islander People",units:"of people",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},yearly_belonging_rate_H:{name:"Rate of Belonging of Hispanic or Latino People",units:"of people",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},weekly_cta_train_ridership:{name:"Weekly CTA Train Ridership",units:"trips",format:i.numberWithCommas,fullFormat:i.numberWithCommas},weekly_cta_train_ridership_covid:{name:"Weekly CTA Train Ridership Since COVID-19",units:"trips",format:i.numberWithCommas,fullFormat:i.numberWithCommas},daily_sidewalk_cafe_permit:{name:"Daily Sidewalk Cafe Permits",units:"permits",format:i.numberWithCommas,fullFormat:i.numberWithCommas},yearly_sidewalk_cafe_permit:{name:"Yearly Sidewalk Cafe Permits",units:"permits",format:i.numberWithCommas,fullFormat:i.numberWithCommas}},c={metricX:"total_population_2019",metricY:"total_covid_cases"},l={metricToAdd:"weekly_rideshare_pickups",defaultMetrics:[{id:"weekly_rideshare_pickups",axis:"left"},{id:"weekly_covid_cases",axis:"right"}]}},7277:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/questions/[id]",function(){return r(2754)}])}},function(e){e.O(0,[774,351,197,700,9,846],(function(){return t=7277,e(e.s=t);var t}));var t=e.O();_N_E=t}]);