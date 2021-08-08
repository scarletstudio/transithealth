(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9187:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var s=n(5893),a=n(1664);function i(){return(0,s.jsxs)("nav",{children:[(0,s.jsx)(a.default,{href:"/",children:"Home"}),(0,s.jsx)(a.default,{href:"/explorer",children:"Explorer"}),(0,s.jsx)(a.default,{href:"/questions",children:"Questions"})]})}},8047:function(e,t,n){"use strict";n.d(t,{P_:function(){return o},K4:function(){return l},k7:function(){return x}});var s=n(7757),a=n.n(s),i=n(2137),r=n(5893),c=n(7294);function o(e){var t=(0,c.useState)(e.visible||!1),n=t[0],s=t[1],a=e.classes||[],i=n?"block":"hidden";return(0,c.useEffect)((function(){s(e.visible)}),[e.visible]),(0,r.jsxs)("div",{className:"Notification ".concat(a.join(" ")," ").concat(i),children:[(0,r.jsx)("div",{className:"CloseHolder",children:(0,r.jsx)("span",{className:"Close",onClick:function(){s(!1)},children:"x"})}),e.children]})}function l(e){var t=e.data||e.error,n=t&&t.toString(),s=e.classes||["Failure"];return(0,r.jsx)("div",{children:(0,r.jsx)(o,{classes:s,visible:e.error,children:(0,r.jsx)("p",{children:n})})})}function u(){return(u=(0,i.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){fetch("".concat("https://transithealth.herokuapp.com","/")).then((function(t){e(!0)})).catch((function(t){e(!1)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d="transithealth__last_ping",h="Connecting to our server...",f="Connected successfully!",m="Could not connect. Please reload page.";function x(){var e=(0,c.useState)(!0),t=e[0],n=e[1],s=(0,c.useState)(!0),a=s[0],i=s[1],l=(0,c.useState)(!1),x=l[0],p=l[1];(0,c.useEffect)((function(){var e,t,s=!0,a=localStorage.getItem(d);return(!a||Date.now()-a>=3e5)&&(e=setTimeout((function(){s&&p(!0)}),1e3),function(){return u.apply(this,arguments)}().then((function(e){s&&(i(e),n(!1)),e&&(localStorage.setItem(d,Date.now()),t=setTimeout((function(){s&&p(!1)}),1e3))}))),function(){s=!1,e&&clearTimeout(e),t&&clearTimeout(t)}}),[]);var v=["Bottom","Narrow",t?"":a?"Success":"Failure",!t&&a?"FadeOut":"FadeIn"],j=t?h:a?f:m;return(0,r.jsx)("div",{children:(0,r.jsx)(o,{classes:v,visible:x,children:(0,r.jsx)("p",{children:j})})})}},8937:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var s=n(5893),a=n(9008),i=n(9187),r=n(8047),c=n(7294),o=n(1664),l=[{name:"Disability Rates by Community Area 2018 vs 2019",type:"scatter",x:"disability_rate_2018",y:"disability_rate_2019"},{name:"COVID Rates by Community Rate of Belonging",type:"scatter",x:"belonging_rate_2018",y:"total_covid_cases"},{name:"COVID Rates in Community by Average Number of Rent Burdened Households",type:"scatter",x:"rent_average",y:"total_covid_cases"},{name:"Community Pooled Trip Rate by Median Income 2019",type:"scatter",x:"median_income_2019",y:"rideshare_pooled_trip_rate_2019"},{name:"Community Rate of Belonging by Median Income 2018",type:"scatter",x:"median_income_2018",y:"belonging_rate_2018"}],u={scatter:{name:"Scatter Plot"}};function d(){var e=(0,c.useState)(""),t=e[0],n=e[1],a=t.toLowerCase(),i=l.filter((function(e){return e.name.toLowerCase().indexOf(a)>-1})),r=t?i.length>0?"Showing ".concat(i.length," Results for ").concat(t):"No Results for ".concat(t):"Showing All Results";return(0,s.jsxs)("div",{className:"insightsSearch left medium-width",children:[(0,s.jsxs)("div",{className:"searchBar center",children:[(0,s.jsx)("input",{type:"text",placeholder:"What do you want to know?",value:t,onChange:function(e){return n(e.target.value)}}),(0,s.jsx)("p",{className:"results",children:r})]}),(0,s.jsx)("div",{className:"searchResultContainer",children:i.map((function(e){var t="/scatter?x=".concat(e.x,"&y=").concat(e.y),n=u[e.type];return(0,s.jsxs)("div",{className:"searchResult",children:[(0,s.jsxs)("div",{className:"insights-name",children:[(0,s.jsx)("h3",{children:e.name}),(0,s.jsx)("p",{children:n.name})]}),(0,s.jsx)("div",{className:"insights-btn center",children:(0,s.jsx)(o.default,{href:t,children:(0,s.jsx)("a",{className:"btn secondary",children:"View Insight"})})}),(0,s.jsx)("hr",{})]})}))})]})}function h(){return(0,s.jsxs)("div",{children:[(0,s.jsxs)(a.default,{children:[(0,s.jsx)("title",{children:"TransitHealth"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("meta",{name:"description",content:"Explore transit and public health data across Chicago."}),(0,s.jsx)("link",{rel:"icon",href:"favicon.ico"})]}),(0,s.jsx)(i.Z,{}),(0,s.jsx)("main",{className:"Home",children:(0,s.jsxs)("div",{className:"page",children:[(0,s.jsxs)("div",{className:"center",children:[(0,s.jsx)("h1",{children:"TransitHealth"}),(0,s.jsx)("p",{children:"Explore public transit and public health data across Chicago."})]}),(0,s.jsx)("br",{}),(0,s.jsx)("div",{className:"center",children:(0,s.jsx)(d,{})})]})}),(0,s.jsx)(r.k7,{})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8937)}])}},function(e){e.O(0,[774,351,197],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);