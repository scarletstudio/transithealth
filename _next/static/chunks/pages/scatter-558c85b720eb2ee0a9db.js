(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43],{2815:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(5893),a=n(7294),i=n(8911),o=n(2787),s=n(3909),c=n(1084);function l(e){var t=e.width?e.width:e.height?.8*e.height:300,n=e.height?e.height:e.width?e.width/.8:375,l=[t/2,n/2],u=t/300,m=n/375,f=e.scale||4e4*Math.max(u,m),h=e.offsetX||-.0475,d=(0,i.Z)(e.communityAreas),p=[d[0]+h,d[1]],_=(0,o.ZP)().center(p).scale(f).translate(l),x=e.defaultOpacity||1,v=e.onAreaClick?(0,c.D)(100,e.onAreaClick):null,b=e.onAreaHover?(0,c.D)(100,e.onAreaHover):null,j=e.communityAreas.features,g=e.data||{},y=(0,a.useState)(e.selectedAreaNumber),D=y[0],O=y[1];(0,a.useEffect)((function(){O(e.selectedAreaNumber)}),[e.selectedAreaNumber]);var W=["ChicagoMap",Object.keys(g).length>0?"HasData":"NoData"].join(" ");return(0,r.jsx)("div",{className:W,children:(0,r.jsx)("svg",{width:t,height:n,viewBox:"0 0 ".concat(t," ").concat(n),children:(0,r.jsx)("g",{className:"areas",children:j.map((function(e,t){var n=e.properties,a=g[n.number]||{};return(0,r.jsx)("path",{className:"CommunityArea ".concat(D===n.number?"Selected":""),d:(0,s.Z)().projection(_)(e),fill:a.fill,fillOpacity:a.opacity||x,onClick:function(e){O(n.number),v&&v(n)},onMouseEnter:function(e){b&&b(n)}},"path-".concat(t))}))})})})}},3720:function(e,t,n){"use strict";n.d(t,{m:function(){return a}});var r=n(5893);function a(e){var t=e.label,n=e.supportedMetrics,a=e.defaultValue,i=e.onChange;return(0,r.jsxs)("div",{className:"MetricSelector",children:[t?(0,r.jsxs)("span",{className:"bold",children:[t,": "]}):null,(0,r.jsx)("span",{children:(0,r.jsx)("select",{defaultValue:a,onChange:function(e){var t=e.target.value;i&&i(t)},children:Object.keys(n).map((function(e,t){return(0,r.jsx)("option",{value:e,children:n[e].name},t)}))})})]})}},9187:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),a=n(1664);function i(){return(0,r.jsxs)("nav",{children:[(0,r.jsx)(a.default,{href:"/",children:"Home"}),(0,r.jsx)(a.default,{href:"/explorer",children:"Explorer"}),(0,r.jsx)(a.default,{href:"/questions",children:"Questions"}),(0,r.jsx)(a.default,{href:"/about",children:"About"})]})}},8047:function(e,t,n){"use strict";n.d(t,{P_:function(){return c},K4:function(){return l},k7:function(){return p}});var r=n(7757),a=n.n(r),i=n(2137),o=n(5893),s=n(7294);function c(e){var t=(0,s.useState)(e.visible||!1),n=t[0],r=t[1],a=e.classes||[],i=n?"block":"hidden";return(0,s.useEffect)((function(){r(e.visible)}),[e.visible]),(0,o.jsxs)("div",{className:"Notification ".concat(a.join(" ")," ").concat(i),children:[(0,o.jsx)("div",{className:"CloseHolder",children:(0,o.jsx)("span",{className:"Close",onClick:function(){r(!1)},children:"x"})}),e.children]})}function l(e){var t=e.data||e.error,n=t&&t.toString(),r=e.classes||["Failure"];return(0,o.jsx)("div",{children:(0,o.jsx)(c,{classes:r,visible:e.error,children:(0,o.jsx)("p",{children:n})})})}function u(){return(u=(0,i.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){fetch("".concat("https://transithealth.herokuapp.com","/")).then((function(t){e(!0)})).catch((function(t){e(!1)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m="transithealth__last_ping",f="Connecting to our server...",h="Connected successfully!",d="Could not connect. Please reload page.";function p(){var e=(0,s.useState)(!0),t=e[0],n=e[1],r=(0,s.useState)(!0),a=r[0],i=r[1],l=(0,s.useState)(!1),p=l[0],_=l[1];(0,s.useEffect)((function(){var e,t,r=!0,a=localStorage.getItem(m);return(!a||Date.now()-a>=3e5)&&(e=setTimeout((function(){r&&_(!0)}),1e3),function(){return u.apply(this,arguments)}().then((function(e){r&&(i(e),n(!1)),e&&(localStorage.setItem(m,Date.now()),t=setTimeout((function(){r&&_(!1)}),1e3))}))),function(){r=!1,e&&clearTimeout(e),t&&clearTimeout(t)}}),[]);var x=["Bottom","Narrow",t?"":a?"Success":"Failure",!t&&a?"FadeOut":"FadeIn"],v=t?f:a?h:d;return(0,o.jsx)("div",{children:(0,o.jsx)(c,{classes:x,visible:p,children:(0,o.jsx)("p",{children:v})})})}},8811:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return T},default:function(){return M}});var r=n(5893),a=n(9008),i=n(9187),o=n(7757),s=n.n(o),c=n(6156),l=n(2137),u=n(7294),m=n(3720),f=n(2815),h=n(3743),d=n(9009),p=n(7478),_=n(4195),x=n(3023),v=n(5048),b=n(5358),j=n(9307),g=n(9746),y=n(3815);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=h.fH,N=h.QA.metricX,F=h.QA.metricY;function k(e,t){return C.apply(this,arguments)}function C(){return(C=(0,l.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://transithealth.herokuapp.com","/community/metrics"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({metrics:[t,n]})});case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.05,r=e.filter((function(e){return e[t]})).reduce((function(e,n){return Math.max(e,n[t])}),e[0][t]),a=e.reduce((function(e,a){var i=(a[t]||0)/r;return e[a.area_number]=O(O({},a),{},{opacity:Math.max(n,i)}),e}),{});return a}function S(e){var t,n=e.active,a=e.payload,i=(e.label,e.metrics),o=(null===a||void 0===a||null===(t=a[0])||void 0===t?void 0:t.payload)||{},s=i.filter((function(e){return!(e in o)})).length>0;return n&&o&&!s?(0,r.jsxs)("div",{className:"CustomToolTip",children:[(0,r.jsx)("h4",{children:o.name}),(0,r.jsxs)("p",{children:["Community Area ",o.area_number," (",o.part,")"]}),i.map((function(e,t){return(0,r.jsxs)("p",{children:[(0,r.jsxs)("span",{children:[W[e].name,": "]}),(0,r.jsxs)("span",{children:[W[e].format(o[e])," "]}),(0,r.jsx)("span",{children:W[e].units})]},t)}))]}):null}function R(e){var t,n=e.data,a=e.metricX,i=e.metricY,o=e.width,s=e.height,l=e.onHover,u=e.selectedAreaData,m=W[a],f=W[i],h=n||[(t={},(0,c.Z)(t,a,0),(0,c.Z)(t,i,0),t)];return(0,r.jsx)(d.h,{width:o,height:s,children:(0,r.jsxs)(p.G,{margin:{left:30,right:30,bottom:30,top:30},children:[(0,r.jsx)(_.q,{strokeDasharray:"3 3"}),(0,r.jsx)(x.K,{dataKey:a,type:"number",tickFormatter:m.format,children:(0,r.jsx)(v._,{value:"".concat(m.name," (").concat(m.units,")"),position:"bottom",offset:10})}),(0,r.jsx)(b.B,{dataKey:i,type:"number",tickFormatter:f.format,children:(0,r.jsx)(v._,{value:"".concat(f.name," (").concat(f.units,")"),position:"left",angle:-90,offset:10,style:{textAnchor:"middle"}})}),(0,r.jsx)(j.u,{content:(0,r.jsx)(S,{metrics:[a,i]})}),(0,r.jsx)(g.b,{name:"Community Area",data:h,onMouseOver:l,onMouseOut:function(){return l({area_number:-1})},children:h.map((function(e,t){var n=e.area_number===u.area_number?"selected":"";return(0,r.jsx)(y.b,{className:n},t)}))})]})})}function A(e){var t=e.communityAreas,n=(0,u.useState)(null),a=n[0],i=n[1],o=(0,u.useState)(N),c=o[0],h=o[1],d=(0,u.useState)(F),p=d[0],_=d[1],x=(0,u.useState)(!1),v=x[0],b=x[1],j=(0,u.useState)(-1),g=j[0],y=j[1],D=(0,u.useState)({}),O=D[0],C=D[1],S=O[g]||{},A=W[c],P=W[p];return(0,u.useEffect)((function(){var e=!0;function t(){return(t=(0,l.Z)(s().mark((function t(){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b(!0),t.next=3,k(c,p);case 3:n=t.sent,r=w(n.metrics,p),e&&(i(n.metrics),C(r),b(!1));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return y(-1),C({}),function(){t.apply(this,arguments)}(),function(){return e=!1}}),[c,p]),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:O&&g>0?S.name:"By Community Area"}),(0,r.jsxs)("div",{className:"SelectorContainer",children:[(0,r.jsx)(m.m,{label:"X Axis",supportedMetrics:W,defaultValue:c,onChange:h}),(0,r.jsx)("span",{children:S[c]?"".concat(A.fullFormat(S[c])," ").concat(A.units):""}),(0,r.jsx)("span",{className:"spacer",children:" "}),(0,r.jsx)(m.m,{label:"Y Axis",supportedMetrics:W,defaultValue:p,onChange:_}),(0,r.jsx)("span",{children:S[p]?"".concat(P.fullFormat(S[p])," ").concat(P.units):""}),(0,r.jsx)("span",{className:"spacer",children:" "}),(0,r.jsx)("span",{children:v?"Loading data...":""})]}),(0,r.jsxs)("div",{className:"PlotRow",children:[(0,r.jsx)(R,{data:a,metricX:c,metricY:p,width:"65%",height:450,onHover:function(e){e.area_number!==g&&y(e.area_number)},selectedAreaData:S}),(0,r.jsxs)("div",{children:[(0,r.jsx)(f.Z,{data:O,communityAreas:t,height:410,defaultOpacity:1,selectedAreaNumber:g,onAreaClick:function(e){e.number!==g&&y(e.number)}}),(0,r.jsx)("p",{className:"center",children:P.name})]})]})]})}var P=n(8047),T=!0;function M(e){var t=e.communityAreas;return(0,r.jsxs)("div",{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"TransitHealth"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"description",content:"Explore transit and public health data across Chicago."}),(0,r.jsx)("link",{rel:"icon",href:"favicon.ico"})]}),(0,r.jsx)(i.Z,{}),(0,r.jsx)("main",{className:"Scatter",children:(0,r.jsxs)("div",{className:"page",children:[(0,r.jsxs)("div",{className:"center",children:[(0,r.jsx)("h1",{children:"Scatter View"}),(0,r.jsx)("p",{children:"Compare different data and community areas."})]}),(0,r.jsx)("br",{}),(0,r.jsx)(A,{communityAreas:t})]})}),(0,r.jsx)(P.k7,{})]})}},3743:function(e,t,n){"use strict";n.d(t,{gB:function(){return a},Mb:function(){return i},fH:function(){return o},Ov:function(){return s},QA:function(){return c},mv:function(){return l}});var r=Intl.NumberFormat("en-US");function a(e,t){return(t-e)/e}var i={numberWithCommas:function(e){return r.format(e)},numberInThousands:function(e){return r.format((e/1e3).toFixed(1))+"K"},numberInMillions:function(e){return r.format((e/1e6).toFixed(1))+"M"},percentWithNoDecimal:function(e){return(100*e).toFixed(0)+"%"},percentWithOneDecimal:function(e){return(100*e).toFixed(1)+"%"},dollarsUSD:function(e){return"$"+e.toFixed(2)},centsToDollarsUSD:function(e){return"$"+(e/100).toFixed(2)},percentChangeWithNoDecimal:function(e){return(e>=0?"+":"")+(100*e).toFixed(0)+"%"},percentChangeWithOneDecimal:function(e){return(e>=0?"+":"")+(100*e).toFixed(1)+"%"}},o={rideshare_pickups_covid:{name:"Rideshare Pickups Since March 2020",units:"trips",format:i.numberInMillions,fullFormat:i.numberWithCommas},rideshare_pooled_trip_rate_2018:{name:"2018 Rideshare Pooled Trip Rate",units:"of trips",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},rideshare_pooled_trip_rate_2019:{name:"2019 Rideshare Pooled Trip Rate",units:"of trips",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},rideshare_pool_request_rate_2018:{name:"2018 Rideshare Pool Request Rate",units:"of trips",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},rideshare_pool_request_rate_2019:{name:"2019 Rideshare Pool Request Rate",units:"of trips",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},total_population_2000:{name:"2000 Total Population",units:"people",format:i.numberInThousands,fullFormat:i.numberWithCommas},total_population_2010:{name:"2010 Total Population",units:"people",format:i.numberInThousands,fullFormat:i.numberWithCommas},total_population_2019:{name:"2019 Total Population",units:"people",format:i.numberInThousands,fullFormat:i.numberWithCommas},median_income_2010:{name:"2010 Median Income",units:"dollars",format:i.dollarsUSD,fullFormat:i.dollarsUSD},median_income_2019:{name:"2019 Median Income",units:"dollars",format:i.dollarsUSD,fullFormat:i.dollarsUSD},total_covid_cases:{name:"Total COVID Cases",units:"cases",format:i.numberInThousands,fullFormat:i.numberWithCommas},disability_rate_2018:{name:"2018 Disability Rate",units:"of people",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},disability_rate_2019:{name:"2019 Disability Rate",units:"of people",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},belonging_rate_2017:{name:"2017 Rate of Belonging",units:"of people",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},belonging_rate_2018:{name:"2018 Rate of Belonging",units:"of people",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},rent_burdened_2017:{name:"2017 Rate of Rent Burdened Households",units:"of households",format:i.percentWithOneDecimal,fullFormat:i.percentWithOneDecimal},rent_burdened_2018:{name:"2018 Rate of Rent Burdened Households",units:"of households",format:i.percentWithOneDecimal,fullFormat:i.percentWithOneDecimal},rent_burdened_2019:{name:"2019 Rate of Rent Burdened Households",units:"of households",format:i.percentWithOneDecimal,fullFormat:i.percentWithOneDecimal},rent_max:{name:"Maximum Rate of Rent Burdened Households",units:"of households",format:i.percentWithOneDecimal,fullFormat:i.percentWithOneDecimal},rent_min:{name:"Minimum Rate of Rent Burdened Households",units:"of households",format:i.percentWithOneDecimal,fullFormat:i.percentWithOneDecimal},rent_average:{name:"Average Rate of Rent Burdened Households",units:"of households",format:i.percentWithOneDecimal,fullFormat:i.percentWithOneDecimal}},s={weekly_rideshare_pickups:{name:"Weekly Rideshare Pickups",units:"trips",format:i.numberInThousands,fullFormat:i.numberWithCommas},weekly_rideshare_pickups_covid:{name:"Weekly Rideshare Pickups Since March 2020",units:"trips",format:i.numberInThousands,fullFormat:i.numberWithCommas},weekly_rideshare_avg_cost:{name:"Weekly Rideshare Avg. Cost",units:"USD",format:i.centsToDollarsUSD,fullFormat:i.centsToDollarsUSD},weekly_rideshare_avg_cost_covid:{name:"Weekly Rideshare Avg. Cost Since March 2020",units:"USD",format:i.centsToDollarsUSD,fullFormat:i.centsToDollarsUSD},weekly_covid_cases:{name:"Weekly COVID Cases",units:"cases",format:i.numberWithCommas,fullFormat:i.numberWithCommas},yearly_belonging_rate_all:{name:"Rate of Belonging of the City",units:"of people",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},yearly_belonging_rate_W:{name:"Rate of Belonging of Non-Hispanic White People",units:"of people",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},yearly_belonging_rate_B:{name:"Rate of Belonging of Non-Hispanic Black People",units:"of people",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},yearly_belonging_rate_A:{name:"Rate of Belonging of Asian or Pacific Islander People",units:"of people",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},yearly_belonging_rate_H:{name:"Rate of Belonging of Hispanic or Latino People",units:"of people",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal}},c={metricX:"total_population_2019",metricY:"total_covid_cases"},l={metricToAdd:"weekly_rideshare_pickups",defaultMetrics:[{id:"weekly_rideshare_pickups",axis:"left"},{id:"weekly_covid_cases",axis:"right"}]}},5624:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/scatter",function(){return n(8811)}])}},function(e){e.O(0,[774,351,197,700,376,478],(function(){return t=5624,e(e.s=t);var t}));var t=e.O();_N_E=t}]);