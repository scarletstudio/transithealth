(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[463],{3720:function(e,t,n){"use strict";n.d(t,{m:function(){return a}});var r=n(5893);function a(e){var t=e.label,n=e.supportedMetrics,a=e.defaultValue,i=e.onChange;return(0,r.jsxs)("div",{className:"MetricSelector",children:[t?(0,r.jsxs)("span",{className:"bold",children:[t,": "]}):null,(0,r.jsx)("span",{children:(0,r.jsx)("select",{defaultValue:a,onChange:function(e){var t=e.target.value;i&&i(t)},children:Object.keys(n).map((function(e,t){return(0,r.jsx)("option",{value:e,children:n[e].name},t)}))})})]})}},9187:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),a=n(1664);function i(){return(0,r.jsxs)("nav",{children:[(0,r.jsx)(a.default,{href:"/",children:"Home"}),(0,r.jsx)(a.default,{href:"/explorer",children:"Explorer"}),(0,r.jsx)(a.default,{href:"/timeline",children:"Timeline"}),(0,r.jsx)(a.default,{href:"/about",children:"About"})]})}},7302:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return je}});var r=n(7757),a=n.n(r),i=n(6156);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=n(5893),l=n(2137),u=n(9008),p=n(9187),f=n(7294),h=n(6362),d=n(8446),m=n.n(d),y=n(7654),v=n.n(y),x=n(6162),b=n.n(x),j=n(3560),g=n.n(j),O=n(7361),A=n.n(O),k=n(4293),w=n.n(k),P=n(1469),E=n.n(P),S=n(4184),N=n.n(S),M=n(8181),_=n(5833),C=n(3061),L=n(8710),D=n(2763),I=n(7523),B=n(9055),R=n(3128),T=n(9896);function F(e){return(F="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){W(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=J(e);if(t){var a=J(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return G(this,n)}}function G(e,t){return!t||"object"!==F(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var U=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(i,e);var t,n,r,a=q(i);function i(){var e;Z(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={isAnimationFinished:!0},e.id=(0,B.EL)("recharts-area-"),e.handleAnimationEnd=function(){var t=e.props.onAnimationEnd;e.setState({isAnimationFinished:!0}),g()(t)&&t()},e.handleAnimationStart=function(){var t=e.props.onAnimationStart;e.setState({isAnimationFinished:!1}),g()(t)&&t()},e}return t=i,r=[{key:"getDerivedStateFromProps",value:function(e,t){return e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curPoints:e.points,curBaseLine:e.baseLine,prevPoints:t.curPoints,prevBaseLine:t.curBaseLine}:e.points!==t.curPoints||e.baseLine!==t.curBaseLine?{curPoints:e.points,curBaseLine:e.baseLine}:null}}],(n=[{key:"renderDots",value:function(e,t){var n=this.props.isAnimationActive,r=this.state.isAnimationFinished;if(n&&!r)return null;var a=this.props,o=a.dot,s=a.points,c=a.dataKey,l=(0,T.L6)(this.props),u=(0,T.L6)(o,!0),p=s.map((function(e,t){var n=K(K(K({key:"dot-".concat(t),r:3},l),u),{},{dataKey:c,cx:e.x,cy:e.y,index:t,value:e.value,payload:e.payload});return i.renderDotItem(o,n)})),h={clipPath:e?"url(#clipPath-".concat(t,")"):null};return f.createElement(L.m,z({className:"recharts-area-dots"},h),p)}},{key:"renderHorizontalRect",value:function(e){var t=this.props,n=t.baseLine,r=t.points,a=t.strokeWidth,i=r[0].x,o=r[r.length-1].x,s=e*Math.abs(i-o),c=b()(r.map((function(e){return e.y||0})));return(0,B.hj)(n)&&"number"===typeof n?c=Math.max(n,c):n&&E()(n)&&n.length&&(c=Math.max(b()(n.map((function(e){return e.y||0}))),c)),(0,B.hj)(c)?f.createElement("rect",{x:i<o?i:i-s,y:0,width:s,height:Math.floor(c+(a?parseInt("".concat(a),10):1))}):null}},{key:"renderVerticalRect",value:function(e){var t=this.props,n=t.baseLine,r=t.points,a=t.strokeWidth,i=r[0].y,o=r[r.length-1].y,s=e*Math.abs(i-o),c=b()(r.map((function(e){return e.x||0})));return(0,B.hj)(n)&&"number"===typeof n?c=Math.max(n,c):n&&E()(n)&&n.length&&(c=Math.max(b()(n.map((function(e){return e.x||0}))),c)),(0,B.hj)(c)?f.createElement("rect",{x:0,y:i<o?i:i-s,width:c+(a?parseInt("".concat(a),10):1),height:Math.floor(s)}):null}},{key:"renderClipRect",value:function(e){return"vertical"===this.props.layout?this.renderVerticalRect(e):this.renderHorizontalRect(e)}},{key:"renderAreaStatically",value:function(e,t,n,r){var a=this.props,i=a.layout,o=a.type,s=a.stroke,c=a.connectNulls,l=a.isRange,u=(a.ref,V(a,["layout","type","stroke","connectNulls","isRange","ref"]));return f.createElement(L.m,{clipPath:n?"url(#clipPath-".concat(r,")"):null},f.createElement(_.H,z({},(0,T.L6)(u,!0),{points:e,connectNulls:c,type:o,baseLine:t,layout:i,stroke:"none",className:"recharts-area-area"})),"none"!==s&&f.createElement(_.H,z({},(0,T.L6)(this.props),{className:"recharts-area-curve",layout:i,type:o,connectNulls:c,fill:"none",points:e})),"none"!==s&&l&&f.createElement(_.H,z({},(0,T.L6)(this.props),{className:"recharts-area-curve",layout:i,type:o,connectNulls:c,fill:"none",points:t})))}},{key:"renderAreaWithAnimation",value:function(e,t){var n=this,r=this.props,a=r.points,i=r.baseLine,o=r.isAnimationActive,s=r.animationBegin,c=r.animationDuration,l=r.animationEasing,u=r.animationId,p=this.state,h=p.prevPoints,d=p.prevBaseLine;return f.createElement(M.ZP,{begin:s,duration:c,isActive:o,easing:l,from:{t:0},to:{t:1},key:"area-".concat(u),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},(function(r){var o=r.t;if(h){var s,c=h.length/a.length,l=a.map((function(e,t){var n=Math.floor(t*c);if(h[n]){var r=h[n],a=(0,B.k4)(r.x,e.x),i=(0,B.k4)(r.y,e.y);return K(K({},e),{},{x:a(o),y:i(o)})}return e}));return s=(0,B.hj)(i)&&"number"===typeof i?(0,B.k4)(d,i)(o):w()(i)||v()(i)?(0,B.k4)(d,0)(o):i.map((function(e,t){var n=Math.floor(t*c);if(d[n]){var r=d[n],a=(0,B.k4)(r.x,e.x),i=(0,B.k4)(r.y,e.y);return K(K({},e),{},{x:a(o),y:i(o)})}return e})),n.renderAreaStatically(l,s,e,t)}return f.createElement(L.m,null,f.createElement("defs",null,f.createElement("clipPath",{id:"animationClipPath-".concat(t)},n.renderClipRect(o))),f.createElement(L.m,{clipPath:"url(#animationClipPath-".concat(t,")")},n.renderAreaStatically(a,i,e,t)))}))}},{key:"renderArea",value:function(e,t){var n=this.props,r=n.points,a=n.baseLine,i=n.isAnimationActive,o=this.state,s=o.prevPoints,c=o.prevBaseLine,l=o.totalLength;return i&&r&&r.length&&(!s&&l>0||!m()(s,r)||!m()(c,a))?this.renderAreaWithAnimation(e,t):this.renderAreaStatically(r,a,e,t)}},{key:"render",value:function(){var e=this.props,t=e.hide,n=e.dot,r=e.points,a=e.className,i=e.top,o=e.left,s=e.xAxis,c=e.yAxis,l=e.width,u=e.height,p=e.isAnimationActive,h=e.id;if(t||!r||!r.length)return null;var d=this.state.isAnimationFinished,m=1===r.length,y=N()("recharts-area",a),v=s&&s.allowDataOverflow||c&&c.allowDataOverflow,x=w()(h)?this.id:h;return f.createElement(L.m,{className:y},v?f.createElement("defs",null,f.createElement("clipPath",{id:"clipPath-".concat(x)},f.createElement("rect",{x:o,y:i,width:l,height:Math.floor(u)}))):null,m?null:this.renderArea(v,x),(n||m)&&this.renderDots(v,x),(!p||d)&&D.e.renderCallByParent(this.props,r))}}])&&X(t.prototype,n),r&&X(t,r),i}(f.PureComponent);U.displayName="Area",U.defaultProps={stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!I.x.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"},U.getBaseValue=function(e,t,n){var r=e.layout,a=e.baseValue;if((0,B.hj)(a)&&"number"===typeof a)return a;var i="horizontal"===r?n:t,o=i.scale.domain();if("number"===i.type){var s=Math.max(o[0],o[1]),c=Math.min(o[0],o[1]);return"dataMin"===a?c:"dataMax"===a||s<0?s:Math.max(Math.min(o[0],o[1]),0)}return"dataMin"===a?o[0]:"dataMax"===a?o[1]:o[0]},U.getComposedData=function(e){var t,n=e.props,r=e.xAxis,a=e.yAxis,i=e.xAxisTicks,o=e.yAxisTicks,s=e.bandSize,c=e.dataKey,l=e.stackedData,u=e.dataStartIndex,p=e.displayedData,f=e.offset,h=n.layout,d=l&&l.length,m=U.getBaseValue(n,r,a),y=!1,v=p.map((function(e,t){var n,p=(0,R.F$)(e,c);d?n=l[u+t]:(n=p,E()(n)?y=!0:n=[m,n]);var f=w()(n[1])||d&&w()(p);return"horizontal"===h?{x:(0,R.Hv)({axis:r,ticks:i,bandSize:s,entry:e,index:t}),y:f?null:a.scale(n[1]),value:n,payload:e}:{x:f?null:r.scale(n[1]),y:(0,R.Hv)({axis:a,ticks:o,bandSize:s,entry:e,index:t}),value:n,payload:e}}));return t=d||y?v.map((function(e){return"horizontal"===h?{x:e.x,y:w()(A()(e,"value[0]"))||w()(A()(e,"y"))?null:a.scale(A()(e,"value[0]"))}:{x:w()(A()(e,"value[0]"))?null:r.scale(A()(e,"value[0]")),y:e.y}})):"horizontal"===h?a.scale(m):r.scale(m),K({points:v,baseLine:t,layout:h,isRange:y},f)},U.renderDotItem=function(e,t){return f.isValidElement(e)?f.cloneElement(e,t):g()(e)?e(t):f.createElement(C.o,z({},t,{className:"recharts-area-dot"}))};var Q=n(3023),Y=n(5358),ee=n(7187),te=(0,h.z)({chartName:"AreaChart",GraphicalChild:U,axisComponents:[{axisType:"xAxis",AxisComp:Q.K},{axisType:"yAxis",AxisComp:Y.B}],formatAxisMap:ee.t9}),ne=n(9009),re=n(4195),ae=n(5048),ie=n(9307),oe=n(3720);function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function le(e){return new Intl.NumberFormat("en").format(e)}var ue={weekly_rideshare_pickups:{name:"Weekly Rideshare Pickups",units:"trips",format:function(e){return new Intl.NumberFormat("en").format((e/1e3).toFixed(1))+"K"},fullFormat:le},weekly_covid_cases:{name:"Weekly COVID Cases",units:"cases",format:le,fullFormat:le}},pe="weekly_rideshare_pickups",fe=[{id:"weekly_rideshare_pickups",axis:"left"},{id:"weekly_covid_cases",axis:"right"}],he=["#099178","#f06869"];function de(e){return me.apply(this,arguments)}function me(){return(me=(0,l.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://transithealth.herokuapp.com","/weekly/metrics"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({metrics:t})});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ye(e){var t=e.active,n=e.payload,r=(e.label,e.metrics);e.selectedPayload;if(!t||!n||0===n.length)return null;var a=n[0].payload;return(0,c.jsxs)("div",{className:"CustomToolTip",children:[(0,c.jsx)("h4",{children:a.week}),r.filter((function(e){var t=e.id;return a[t]})).map((function(e,t){var n=e.id;return(0,c.jsxs)("p",{children:[(0,c.jsxs)("span",{children:[ue[n].name,": "]}),(0,c.jsxs)("span",{children:[ue[n].format(a[n])," "]}),(0,c.jsx)("span",{children:ue[n].units})]},t)}))]})}function ve(e){var t=e.data,n=e.metrics;return(0,c.jsx)(ne.h,{width:"100%",height:400,children:(0,c.jsxs)(te,{data:t,margin:{left:30,right:30,bottom:30,top:10},children:[(0,c.jsx)(re.q,{strokeDasharray:"3 3"}),(0,c.jsx)(Q.K,{dataKey:"week",children:(0,c.jsx)(ae._,{value:"Week",position:"bottom",offset:10})}),(0,c.jsx)(Y.B,{yAxisId:"left"}),(0,c.jsx)(Y.B,{yAxisId:"right",orientation:"right"}),n.filter((function(e){return"none"!==e.axis})).map((function(e,t){var n=e.color||he[t%he.length];return(0,c.jsx)(U,{yAxisId:e.axis,dataKey:e.id,stroke:n,fill:n},t)})),(0,c.jsx)(ie.u,{content:(0,c.jsx)(ye,{metrics:n})})]})})}function xe(e){var t=e.metrics,n=e.setMetrics,r=(0,f.useState)(pe),a=r[0],i=r[1];return(0,c.jsxs)("div",{className:"TimelineMetrics",children:[t.map((function(e,r){var a=ue[e.id],i=e.color||he[r%he.length];return(0,c.jsxs)("div",{className:"MetricEditor",children:[(0,c.jsx)("span",{className:"ColorSelector",children:(0,c.jsx)("input",{type:"color",defaultValue:i,onChange:function(e){var a=e.target.value;n(t.map((function(e,t){return t===r?ce(ce({},e),{},{color:a}):e})))}})}),(0,c.jsx)("span",{className:"AxisSelector",children:(0,c.jsxs)("select",{defaultValue:e.axis,onChange:function(e){var a=e.target.value;n(t.map((function(e,t){return t===r?ce(ce({},e),{},{axis:a}):e})))},children:[(0,c.jsx)("option",{value:"left",children:"Left Axis"}),(0,c.jsx)("option",{value:"right",children:"Right Axis"}),(0,c.jsx)("option",{value:"none",children:"Hidden"})]})}),(0,c.jsx)("span",{className:"RemoveMetric",onClick:function(){n(t.filter((function(e,t){return t!==r})))},children:"x"}),(0,c.jsx)("span",{children:a.name})]},r)})),(0,c.jsxs)("div",{className:"MetricEditor",children:[(0,c.jsx)(oe.m,{supportedMetrics:ue,defaultValue:pe,onChange:i}),(0,c.jsx)("button",{onClick:function(){n([].concat(s(t),[{id:a,axis:t.length%2===0?"left":"right"}]))},children:"Add Metric"})]})]})}function be(e){var t=e.metrics,n=(0,f.useState)([]),r=n[0],i=n[1],o=(0,f.useState)(t||[]),s=o[0],u=o[1],p=(0,f.useState)(!1),h=p[0],d=p[1];return(0,f.useEffect)((function(){u(t||[])}),[t]),(0,f.useEffect)((function(){var e=!0;function t(){return(t=(0,l.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d(!0),t.next=3,de(s.map((function(e){return e.id})));case 3:n=t.sent,e&&(i(n.metrics),d(!1));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return s.length>0&&function(){t.apply(this,arguments)}(),function(){return e=!1}}),[s]),(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:"center",children:[(0,c.jsx)("h2",{children:"By Week"}),(0,c.jsx)("p",{children:h?"Loading...":""})]}),(0,c.jsx)(ve,{data:r,metrics:s}),(0,c.jsx)("h3",{children:"Select Metrics"}),(0,c.jsx)(xe,{metrics:s,setMetrics:u})]})}function je(){return(0,c.jsxs)("div",{children:[(0,c.jsxs)(u.default,{children:[(0,c.jsx)("title",{children:"TransitHealth"}),(0,c.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,c.jsx)("meta",{name:"description",content:"Explore transit and public health data across Chicago."}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,c.jsx)(p.Z,{}),(0,c.jsx)("main",{className:"Explorer",children:(0,c.jsxs)("div",{className:"page",children:[(0,c.jsxs)("div",{className:"center",children:[(0,c.jsx)("h1",{children:"Timeline"}),(0,c.jsx)("p",{children:"Select transit and public health metrics to view over time."})]}),(0,c.jsx)("br",{}),(0,c.jsx)(be,{metrics:fe})]})})]})}},6506:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/timeline",function(){return n(7302)}])}},function(e){e.O(0,[774,351,996,852],(function(){return t=6506,e(e.s=t);var t}));var t=e.O();_N_E=t}]);