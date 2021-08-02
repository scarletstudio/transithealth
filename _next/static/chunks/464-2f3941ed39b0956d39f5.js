(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[464],{9187:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893),a=n(1664);function o(){return(0,r.jsxs)("nav",{children:[(0,r.jsx)(a.default,{href:"/",children:"Home"}),(0,r.jsx)(a.default,{href:"/explorer",children:"Explorer"}),(0,r.jsx)(a.default,{href:"/questions",children:"Questions"}),(0,r.jsx)(a.default,{href:"/about",children:"About"})]})}},8047:function(e,t,n){"use strict";n.d(t,{P_:function(){return l},K4:function(){return c},k7:function(){return p}});var r=n(7757),a=n.n(r),o=n(2137),i=n(5893),s=n(7294);function l(e){var t=(0,s.useState)(e.visible||!1),n=t[0],r=t[1],a=e.classes||[],o=n?"block":"hidden";return(0,s.useEffect)((function(){r(e.visible)}),[e.visible]),(0,i.jsxs)("div",{className:"Notification ".concat(a.join(" ")," ").concat(o),children:[(0,i.jsx)("div",{className:"CloseHolder",children:(0,i.jsx)("span",{className:"Close",onClick:function(){r(!1)},children:"x"})}),e.children]})}function c(e){var t=e.data||e.error,n=t&&t.toString(),r=e.classes||["Failure"];return(0,i.jsx)("div",{children:(0,i.jsx)(l,{classes:r,visible:e.error,children:(0,i.jsx)("p",{children:n})})})}function d(){return(d=(0,o.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){fetch("".concat("https://transithealth.herokuapp.com","/")).then((function(t){e(!0)})).catch((function(t){e(!1)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var u="transithealth__last_ping",m="Connecting to our server...",h="Connected successfully!",f="Could not connect. Please reload page.";function p(){var e=(0,s.useState)(!0),t=e[0],n=e[1],r=(0,s.useState)(!0),a=r[0],o=r[1],c=(0,s.useState)(!1),p=c[0],g=c[1];(0,s.useEffect)((function(){var e,t,r=!0,a=localStorage.getItem(u);return(!a||Date.now()-a>=3e5)&&(e=setTimeout((function(){r&&g(!0)}),1e3),function(){return d.apply(this,arguments)}().then((function(e){r&&(o(e),n(!1)),e&&(localStorage.setItem(u,Date.now()),t=setTimeout((function(){r&&g(!1)}),1e3))}))),function(){r=!1,e&&clearTimeout(e),t&&clearTimeout(t)}}),[]);var _=["Bottom","Narrow",t?"":a?"Success":"Failure",!t&&a?"FadeOut":"FadeIn"],b=t?m:a?h:f;return(0,i.jsx)("div",{children:(0,i.jsx)(l,{classes:_,visible:p,children:(0,i.jsx)("p",{children:b})})})}},2874:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),a=n(7329),o=n(7294);function i(e,t){var n=t.toLowerCase().trim();return 0===n.length?Object.keys(e):Object.keys(e).filter((function(t){return e[t].name.toLowerCase().indexOf(n)>-1}))}function s(e){var t=e.supportedMetrics,n=e.onClose,a=e.selectMetric,i=e.show,s=(0,o.useState)(""),c=s[0],d=s[1];if(!i)return null;var u=0===c.toLowerCase().trim().length?"Showing all Metrics":"Showing results for ".concat(c);return(0,r.jsx)("div",{className:"selectorModal",onClick:n,children:(0,r.jsxs)("div",{className:"modalContent",onClick:function(e){return e.stopPropagation()},children:[(0,r.jsx)("div",{className:"modalHeader",children:(0,r.jsx)("h4",{className:"modalTitle",children:"Select your Metric"})}),(0,r.jsxs)("div",{className:"modalBody",children:[(0,r.jsxs)("div",{className:"searchBar",children:[(0,r.jsxs)("p",{children:[" ",(0,r.jsx)("input",{type:"text",value:c,placeholder:"Search Metrics...",onChange:function(e){return d(e.target.value)}})," "]}),(0,r.jsx)("p",{children:u})]}),(0,r.jsx)(l,{searchText:c,supportedMetrics:t,onClose:n,selectMetric:a})]}),(0,r.jsx)("div",{className:"modalFooter",children:(0,r.jsx)("button",{className:"closeButton",onClick:n,children:"Close"})})]})})}function l(e){var t=e.searchText,n=e.supportedMetrics,o=e.onClose,s=e.selectMetric,l=(t.toLowerCase().trim(),i(n,t)),c=function(e,t){var n=(0,a.Z)(new Set(Object.keys(e).map((function(t){return e[t].dataset})))),r=t,o={};for(var i in n){var s=[];for(var l in t){var c=t[l];n[i]===e[c].dataset&&s.push(r[l])}o[n[i]]=s}return o}(n,l),d=function(e){for(var t=[],n=Object.entries(e),r=0;r<n.length;r++){var a=n[r],o=(a[0],{key:a[1]});t.push(o)}}(c);d=function(e){for(var t=Object.entries(e).sort((function(e,t){return t[1].length-e[1].length})),n=[],r=0;r<t.length;r++){var a=t[r],o={};o[a[0]]=a[1],n.push(o)}return n}(c);for(var u=[],m=0;m<d.length;m++){var h=function(){var e=c[f];for(p=0,g=0;g<l.length;g++)if(n[l[g]].dataset.indexOf(f)>-1&&p<1){u.push((0,r.jsx)("p",{className:"metricGroup",children:f},f));for(var t=function(t){l.indexOf(e[t])>-1&&u.push((0,r.jsxs)("div",{className:"metricResult",onClick:function(){s(e[t]),o()},children:[(0,r.jsx)("p",{className:"metric",children:n[e[t]].name}),(0,r.jsx)("div",{className:"metricMetaData",children:(0,r.jsxs)("p",{children:["Description: ",n[e[t]].description]})})]},e[t]))},a=0;a<e.length;a++)t(a);p++}};for(var f in d[m]){var p,g;h()}}return(0,r.jsx)("div",{className:"searchResults",children:u})}function c(e){var t=e.label,n=e.supportedMetrics,a=e.defaultValue,i=e.onChange,l=(0,o.useState)(0),c=l[0],d=l[1],u=(0,o.useState)(a),m=u[0],h=u[1];return(0,r.jsxs)("div",{className:"searchableMetricSelector",children:[(0,r.jsxs)("div",{className:"selectorBody",children:[t?(0,r.jsxs)("span",{className:"bold selectorLabel",children:[t,": "]}):null,(0,r.jsx)("button",{className:"selectorButton",onClick:function(){return d(1)},children:n[m].name})]}),(0,r.jsx)(s,{supportedMetrics:n,onClose:function(){return d(0)},selectMetric:function(e){i(e),h(e)},show:c})]})}},3743:function(e,t,n){"use strict";n.d(t,{gB:function(){return o},Mb:function(){return i},fH:function(){return l},Ov:function(){return c},QA:function(){return d},mv:function(){return u}});var r=n(4699),a=Intl.NumberFormat("en-US");function o(e,t){return(t-e)/e}var i={numberWithCommas:function(e){return a.format(e)},numberInThousands:function(e){return a.format((e/1e3).toFixed(1))+"K"},numberInMillions:function(e){return a.format((e/1e6).toFixed(1))+"M"},percentWithNoDecimal:function(e){return(100*e).toFixed(0)+"%"},percentWithOneDecimal:function(e){return(100*e).toFixed(1)+"%"},dollarsUSD:function(e){return"$"+e.toFixed(2)},dollarsUSDWithCommas:function(e){return"$".concat(a.format(Math.floor(e)))},dollarsUSDInThousands:function(e){return"$".concat(a.format((e/1e3).toFixed(1)),"K")},centsToDollarsUSD:function(e){return"$"+(e/100).toFixed(2)},percentChangeWithNoDecimal:function(e){return(e>=0?"+":"")+(100*e).toFixed(0)+"%"},percentChangeWithOneDecimal:function(e){return(e>=0?"+":"")+(100*e).toFixed(1)+"%"}};function s(e){var t=["name","units","dataset","format"];Object.entries(e).forEach((function(e){var n=(0,r.Z)(e,2),a=n[0],o=n[1];t.forEach((function(e){if(null===o||void 0===o||!o[e])throw new Error("Metric ".concat(a," is missing the ").concat(e," field."))}))}))}var l={rideshare_pickups_covid:{name:"Rideshare Pickups Since March 2020",units:"trips",dataset:"Rideshare",description:"",format:i.numberInMillions,fullFormat:i.numberWithCommas},rideshare_pooled_trip_rate_2018:{name:"2018 Rideshare Pooled Trip Rate",units:"of trips",dataset:"Rideshare",description:"",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},rideshare_pooled_trip_rate_2019:{name:"2019 Rideshare Pooled Trip Rate",units:"of trips",dataset:"Rideshare",description:"",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},rideshare_pool_request_rate_2018:{name:"2018 Rideshare Pool Request Rate",units:"of trips",dataset:"Rideshare",description:"",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},rideshare_pool_request_rate_2019:{name:"2019 Rideshare Pool Request Rate",units:"of trips",dataset:"Rideshare",description:"",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},total_population_2010:{name:"2010 Total Population",units:"people",dataset:"Population",description:"Average population over the time period that ends on 2010.",format:i.numberInThousands,fullFormat:i.numberWithCommas},total_population_2019:{name:"2019 Total Population",units:"people",dataset:"Population",description:"Average population over the time period that ends on 2010.",format:i.numberInThousands,fullFormat:i.numberWithCommas},median_income_2010:{name:"2010 Median Income",units:"dollars",dataset:"Income",description:"Income in the past 12 months for 2010, in inflation-adjusted 2017 dollars.",format:i.dollarsUSDInThousands,fullFormat:i.dollarsUSDWithCommas},median_income_2017:{name:"2017 Median Income",units:"dollars",dataset:"Income",description:"Income in the past 12 months for 2017, in inflation-adjusted 2017 dollars.",format:i.dollarsUSDInThousands,fullFormat:i.dollarsUSDWithCommas},median_income_2018:{name:"2018 Median Income",units:"dollars",dataset:"Income",description:"Income in the past 12 months for 2018, in inflation-adjusted 2017 dollars.",format:i.dollarsUSDInThousands,fullFormat:i.dollarsUSDWithCommas},median_income_2019:{name:"2019 Median Income",units:"dollars",dataset:"Income",description:"Income in the past 12 months for 2019, in inflation-adjusted 2017 dollars.",format:i.dollarsUSDInThousands,fullFormat:i.dollarsUSDWithCommas},total_covid_cases:{name:"Total COVID Cases",units:"cases",dataset:"Covid",description:"The sum COVID spread cases for each community area",format:i.numberInThousands,fullFormat:i.numberWithCommas},disability_rate_2018:{name:"2018 Disability Rate",units:"of people",dataset:"Disability",description:"Percent of residents with a disability in 2018, defined as one or more sensory disabilities or difficulties with everyday tasks.",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},disability_rate_2019:{name:"2019 Disability Rate",units:"of people",dataset:"Disability",description:"Percent of residents with a disability in 2019, defined as one or more sensory disabilities or difficulties with everyday tasks.",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},belonging_rate_2017:{name:"2017 Rate of Belonging",units:"of people",dataset:"Belonging",description:"Percent of adults who reported that they strongly agree or agree that they really feel part of their neighborhood for 2017.",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},belonging_rate_2018:{name:"2018 Rate of Belonging",units:"of people",dataset:"Belonging",description:"Percent of adults who reported that they strongly agree or agree that they really feel part of their neighborhood for 2018.",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},rent_burdened_2017:{name:"2017 Rate of Rent Burdened Households",units:"of households",dataset:"Rent Burden",description:"Households spending more than 30% of income on rent are considered rent-burdened in 2017. Rent costs do not include utilities, insurance, or building fees.",format:i.percentWithOneDecimal,fullFormat:i.percentWithOneDecimal},rent_burdened_2018:{name:"2018 Rate of Rent Burdened Households",units:"of households",dataset:"Rent Burden",description:"Households spending more than 30% of income on rent are considered rent-burdened in 2018. Rent costs do not include utilities, insurance, or building fees.",format:i.percentWithOneDecimal,fullFormat:i.percentWithOneDecimal},rent_burdened_2019:{name:"2019 Rate of Rent Burdened Households",units:"of households",dataset:"Rent Burden",description:"Households spending more than 30% of income on rent are considered rent-burdened in 2019. Rent costs do not include utilities, insurance, or building fees.",format:i.percentWithOneDecimal,fullFormat:i.percentWithOneDecimal},rent_max:{name:"Maximum Rate of Rent Burdened Households",units:"of households",dataset:"Rent Burden",description:"Maximum Rate of households spending more than 30% of income on rent.",format:i.percentWithOneDecimal,fullFormat:i.percentWithOneDecimal},rent_min:{name:"Minimum Rate of Rent Burdened Households",units:"of households",dataset:"Rent Burden",description:"Minimum Rate of households spending more than 30% of income on rent.",format:i.percentWithOneDecimal,fullFormat:i.percentWithOneDecimal},rent_average:{name:"Average Rate of Rent Burdened Households",units:"of households",dataset:"Rent Burden",description:"Average Rate of households spending more than 30% of income on rent.",format:i.percentWithOneDecimal,fullFormat:i.percentWithOneDecimal},avg_speed_per_dropoff:{name:"Average Taxi Trip Speed Per Dropoff Area",units:"mph",dataset:"Taxi",description:"",format:i.numberWithCommas,fullFormat:i.numberWithCommas},avg_speed_per_pickup:{name:"Average Taxi Trip Speed Per Pickup Area",units:"mph",dataset:"Taxi",description:"",format:i.numberWithCommas,fullFormat:i.numberWithCommas},sidewalk_cafe_permits_area:{name:"Number of Sidewalk Cafe Permits by Area",units:"permits",dataset:"Sidewalk Cafe",format:i.numberWithCommas,fullFormat:i.numberWithCommas}},c={weekly_rideshare_pickups:{name:"Weekly Rideshare Pickups",units:"trips",dataset:"Rideshare",description:"",format:i.numberInThousands,fullFormat:i.numberWithCommas},weekly_rideshare_pickups_covid:{name:"Weekly Rideshare Pickups Since March 2020",units:"trips",dataset:"Rideshare",description:"",format:i.numberInThousands,fullFormat:i.numberWithCommas},weekly_rideshare_avg_cost:{name:"Weekly Rideshare Avg. Cost",units:"USD",dataset:"Rideshare",description:"",format:i.centsToDollarsUSD,fullFormat:i.centsToDollarsUSD},weekly_rideshare_avg_cost_covid:{name:"Weekly Rideshare Avg. Cost Since March 2020",units:"USD",dataset:"Rideshare",description:"",format:i.centsToDollarsUSD,fullFormat:i.centsToDollarsUSD},weekly_covid_cases:{name:"Weekly COVID Cases",units:"cases",dataset:"Covid",description:"The number of COVID cases per week",format:i.numberWithCommas,fullFormat:i.numberWithCommas},yearly_belonging_rate_all:{name:"Rate of Belonging of the City",units:"of people",dataset:"Belonging",description:"Percent of adults who reported that they strongly agree or agree that they really feel part of their neighborhood over a four year period.",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},yearly_belonging_rate_W:{name:"Rate of Belonging of Non-Hispanic White People",units:"of people",dataset:"Belonging",description:"Percent of Non-Hispanic White adults who reported that they strongly agree or agree that they really feel part of their neighborhood over a four year period.",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},yearly_belonging_rate_B:{name:"Rate of Belonging of Non-Hispanic Black People",units:"of people",dataset:"Belonging",description:"Percent of Non-Hispanic Black adults who reported that they strongly agree or agree that they really feel part of their neighborhood over a four year period.",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},yearly_belonging_rate_A:{name:"Rate of Belonging of Asian or Pacific Islander People",units:"of people",dataset:"Belonging",description:"Percent of Asian or Pacific Islander adults who reported that they strongly agree or agree that they really feel part of their neighborhood over a four year period.",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},yearly_belonging_rate_H:{name:"Rate of Belonging of Hispanic or Latino People",units:"of people",dataset:"Belonging",description:"Percent of Hispanic or Latino adults who reported that they strongly agree or agree that they really feel part of their neighborhood over a four year period.",format:i.percentWithNoDecimal,fullFormat:i.percentWithOneDecimal},weekly_cta_train_ridership:{name:"Weekly CTA Train Ridership",units:"trips",dataset:"Public Transit",description:"",format:i.numberWithCommas,fullFormat:i.numberWithCommas},weekly_cta_train_ridership_covid:{name:"Weekly CTA Train Ridership Since COVID-19",units:"trips",dataset:"Public Transit",description:"",format:i.numberWithCommas,fullFormat:i.numberWithCommas},daily_sidewalk_cafe_permit:{name:"Daily Sidewalk Cafe Permits",units:"permits",dataset:"Sidewalk Cafe",description:"",format:i.numberWithCommas,fullFormat:i.numberWithCommas},yearly_sidewalk_cafe_permit:{name:"Yearly Sidewalk Cafe Permits",units:"permits",dataset:"Sidewalk Cafe",description:"",format:i.numberWithCommas,fullFormat:i.numberWithCommas}},d={metricX:"total_population_2019",metricY:"total_covid_cases"},u={metricToAdd:"weekly_rideshare_pickups",defaultMetrics:[{id:"weekly_rideshare_pickups",axis:"left"},{id:"weekly_covid_cases",axis:"right"}]};s(l),s(c)}}]);