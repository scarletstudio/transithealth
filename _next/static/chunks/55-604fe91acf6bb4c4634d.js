(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55],{5801:function(n,t,r){"use strict";r.d(t,{dU:function(){return i}});class i{constructor(){this._partials=new Float64Array(32),this._n=0}add(n){const t=this._partials;let r=0;for(let i=0;i<this._n&&i<32;i++){const o=t[i],e=n+o,u=Math.abs(n)<Math.abs(o)?n-(e-o):o-(e-n);u&&(t[r++]=u),n=e}return t[r]=n,this._n=r+1,this}valueOf(){const n=this._partials;let t,r,i,o=this._n,e=0;if(o>0){for(e=n[--o];o>0&&(t=e,r=n[--o],e=t+r,i=r-(e-t),!i););o>0&&(i<0&&n[o-1]<0||i>0&&n[o-1]>0)&&(r=2*i,t=e+r,r==t-e&&(e=t))}return e}}},8911:function(n,t,r){"use strict";r.d(t,{Z:function(){return B}});var i,o,e,u,a,f,c,l,p,s,h,v,d,y,g,m,E=r(5801),S=r(5350),_=r(1344),R=r(3790),Z={sphere:_.Z,point:x,lineStart:W,lineEnd:w,polygonStart:function(){Z.lineStart=C,Z.lineEnd=N},polygonEnd:function(){Z.lineStart=W,Z.lineEnd=w}};function x(n,t){n*=S.uR,t*=S.uR;var r=(0,S.mC)(t);O(r*(0,S.mC)(n),r*(0,S.O$)(n),(0,S.O$)(t))}function O(n,t,r){++i,e+=(n-e)/i,u+=(t-u)/i,a+=(r-a)/i}function W(){Z.point=b}function b(n,t){n*=S.uR,t*=S.uR;var r=(0,S.mC)(t);y=r*(0,S.mC)(n),g=r*(0,S.O$)(n),m=(0,S.O$)(t),Z.point=M,O(y,g,m)}function M(n,t){n*=S.uR,t*=S.uR;var r=(0,S.mC)(t),i=r*(0,S.mC)(n),e=r*(0,S.O$)(n),u=(0,S.O$)(t),a=(0,S.fv)((0,S._b)((a=g*u-m*e)*a+(a=m*i-y*u)*a+(a=y*e-g*i)*a),y*i+g*e+m*u);o+=a,f+=a*(y+(y=i)),c+=a*(g+(g=e)),l+=a*(m+(m=u)),O(y,g,m)}function w(){Z.point=x}function C(){Z.point=$}function N(){H(v,d),Z.point=x}function $(n,t){v=n,d=t,n*=S.uR,t*=S.uR,Z.point=H;var r=(0,S.mC)(t);y=r*(0,S.mC)(n),g=r*(0,S.O$)(n),m=(0,S.O$)(t),O(y,g,m)}function H(n,t){n*=S.uR,t*=S.uR;var r=(0,S.mC)(t),i=r*(0,S.mC)(n),e=r*(0,S.O$)(n),u=(0,S.O$)(t),a=g*u-m*e,v=m*i-y*u,d=y*e-g*i,E=(0,S._m)(a,v,d),_=(0,S.ZR)(E),R=E&&-_/E;p.add(R*a),s.add(R*v),h.add(R*d),o+=_,f+=_*(y+(y=i)),c+=_*(g+(g=e)),l+=_*(m+(m=u)),O(y,g,m)}function B(n){i=o=e=u=a=f=c=l=0,p=new E.dU,s=new E.dU,h=new E.dU,(0,R.Z)(n,Z);var t=+p,r=+s,v=+h,d=(0,S._m)(t,r,v);return d<S.aW&&(t=f,r=c,v=l,o<S.Ho&&(t=e,r=u,v=a),(d=(0,S._m)(t,r,v))<S.aW)?[NaN,NaN]:[(0,S.fv)(r,t)*S.RW,(0,S.ZR)(v/d)*S.RW]}},7423:function(n,t){"use strict";t.Z=n=>n},5350:function(n,t,r){"use strict";r.d(t,{Ho:function(){return i},aW:function(){return o},pi:function(){return e},ou:function(){return u},pu:function(){return a},BZ:function(){return f},RW:function(){return c},uR:function(){return l},Wn:function(){return p},z4:function(){return s},fv:function(){return h},mC:function(){return v},Qq:function(){return d},_m:function(){return y},cM:function(){return g},O$:function(){return m},Xx:function(){return E},_b:function(){return S},OR:function(){return _},Kh:function(){return R},ZR:function(){return Z}});var i=1e-6,o=1e-12,e=Math.PI,u=e/2,a=e/4,f=2*e,c=180/e,l=e/180,p=Math.abs,s=Math.atan,h=Math.atan2,v=Math.cos,d=(Math.ceil,Math.exp),y=(Math.floor,Math.hypot),g=Math.log,m=(Math.pow,Math.sin),E=Math.sign||function(n){return n>0?1:n<0?-1:0},S=Math.sqrt,_=Math.tan;function R(n){return n>1?0:n<-1?e:Math.acos(n)}function Z(n){return n>1?u:n<-1?-u:Math.asin(n)}},1344:function(n,t,r){"use strict";function i(){}r.d(t,{Z:function(){return i}})},3310:function(n,t,r){"use strict";var i=r(1344),o=1/0,e=o,u=-o,a=u,f={point:function(n,t){n<o&&(o=n);n>u&&(u=n);t<e&&(e=t);t>a&&(a=t)},lineStart:i.Z,lineEnd:i.Z,polygonStart:i.Z,polygonEnd:i.Z,result:function(){var n=[[o,e],[u,a]];return u=a=-(e=o=1/0),n}};t.Z=f},3909:function(n,t,r){"use strict";r.d(t,{Z:function(){return en}});var i,o,e,u,a=r(7423),f=r(3790),c=r(5801),l=r(5350),p=r(1344),s=new c.dU,h=new c.dU,v={point:p.Z,lineStart:p.Z,lineEnd:p.Z,polygonStart:function(){v.lineStart=d,v.lineEnd=m},polygonEnd:function(){v.lineStart=v.lineEnd=v.point=p.Z,s.add((0,l.Wn)(h)),h=new c.dU},result:function(){var n=s/2;return s=new c.dU,n}};function d(){v.point=y}function y(n,t){v.point=g,i=e=n,o=u=t}function g(n,t){h.add(u*n-e*t),e=n,u=t}function m(){g(i,o)}var E,S,_,R,Z=v,x=r(3310),O=0,W=0,b=0,M=0,w=0,C=0,N=0,$=0,H=0,B={point:A,lineStart:j,lineEnd:U,polygonStart:function(){B.lineStart=z,B.lineEnd=T},polygonEnd:function(){B.point=A,B.lineStart=j,B.lineEnd=U},result:function(){var n=H?[N/H,$/H]:C?[M/C,w/C]:b?[O/b,W/b]:[NaN,NaN];return O=W=b=M=w=C=N=$=H=0,n}};function A(n,t){O+=n,W+=t,++b}function j(){B.point=P}function P(n,t){B.point=k,A(_=n,R=t)}function k(n,t){var r=n-_,i=t-R,o=(0,l._b)(r*r+i*i);M+=o*(_+n)/2,w+=o*(R+t)/2,C+=o,A(_=n,R=t)}function U(){B.point=A}function z(){B.point=F}function T(){I(E,S)}function F(n,t){B.point=I,A(E=_=n,S=R=t)}function I(n,t){var r=n-_,i=t-R,o=(0,l._b)(r*r+i*i);M+=o*(_+n)/2,w+=o*(R+t)/2,C+=o,N+=(o=R*n-_*t)*(_+n),$+=o*(R+t),H+=3*o,A(_=n,R=t)}var K=B;function L(n){this._context=n}L.prototype={_radius:4.5,pointRadius:function(n){return this._radius=n,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(n,t){switch(this._point){case 0:this._context.moveTo(n,t),this._point=1;break;case 1:this._context.lineTo(n,t);break;default:this._context.moveTo(n+this._radius,t),this._context.arc(n,t,this._radius,0,l.BZ)}},result:p.Z};var q,D,X,Q,G,V=new c.dU,Y={point:p.Z,lineStart:function(){Y.point=J},lineEnd:function(){q&&nn(D,X),Y.point=p.Z},polygonStart:function(){q=!0},polygonEnd:function(){q=null},result:function(){var n=+V;return V=new c.dU,n}};function J(n,t){Y.point=nn,D=Q=n,X=G=t}function nn(n,t){Q-=n,G-=t,V.add((0,l._b)(Q*Q+G*G)),Q=n,G=t}var tn=Y;function rn(){this._string=[]}function on(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function en(n,t){var r,i,o=4.5;function e(n){return n&&("function"===typeof o&&i.pointRadius(+o.apply(this,arguments)),(0,f.Z)(n,r(i))),i.result()}return e.area=function(n){return(0,f.Z)(n,r(Z)),Z.result()},e.measure=function(n){return(0,f.Z)(n,r(tn)),tn.result()},e.bounds=function(n){return(0,f.Z)(n,r(x.Z)),x.Z.result()},e.centroid=function(n){return(0,f.Z)(n,r(K)),K.result()},e.projection=function(t){return arguments.length?(r=null==t?(n=null,a.Z):(n=t).stream,e):n},e.context=function(n){return arguments.length?(i=null==n?(t=null,new rn):new L(t=n),"function"!==typeof o&&i.pointRadius(o),e):t},e.pointRadius=function(n){return arguments.length?(o="function"===typeof n?n:(i.pointRadius(+n),+n),e):o},e.projection(n).context(t)}rn.prototype={_radius:4.5,_circle:on(4.5),pointRadius:function(n){return(n=+n)!==this._radius&&(this._radius=n,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(n,t){switch(this._point){case 0:this._string.push("M",n,",",t),this._point=1;break;case 1:this._string.push("L",n,",",t);break;default:null==this._circle&&(this._circle=on(this._radius)),this._string.push("M",n,",",t,this._circle)}},result:function(){if(this._string.length){var n=this._string.join("");return this._string=[],n}return null}}},2787:function(n,t,r){"use strict";r.d(t,{ZP:function(){return Q}});var i=r(5350);function o(n,t){function r(r,i){return r=n(r,i),t(r[0],r[1])}return n.invert&&t.invert&&(r.invert=function(r,i){return(r=t.invert(r,i))&&n.invert(r[0],r[1])}),r}function e(n,t){return[(0,i.Wn)(n)>i.pi?n+Math.round(-n/i.BZ)*i.BZ:n,t]}function u(n,t,r){return(n%=i.BZ)?t||r?o(f(n),c(t,r)):f(n):t||r?c(t,r):e}function a(n){return function(t,r){return[(t+=n)>i.pi?t-i.BZ:t<-i.pi?t+i.BZ:t,r]}}function f(n){var t=a(n);return t.invert=a(-n),t}function c(n,t){var r=(0,i.mC)(n),o=(0,i.O$)(n),e=(0,i.mC)(t),u=(0,i.O$)(t);function a(n,t){var a=(0,i.mC)(t),f=(0,i.mC)(n)*a,c=(0,i.O$)(n)*a,l=(0,i.O$)(t),p=l*r+f*o;return[(0,i.fv)(c*e-p*u,f*r-l*o),(0,i.ZR)(p*e+c*u)]}return a.invert=function(n,t){var a=(0,i.mC)(t),f=(0,i.mC)(n)*a,c=(0,i.O$)(n)*a,l=(0,i.O$)(t),p=l*e-c*u;return[(0,i.fv)(c*e+l*u,f*r+p*o),(0,i.ZR)(p*r-f*o)]},a}e.invert=e;var l=r(1344);function p(){var n,t=[];return{point:function(t,r,i){n.push([t,r,i])},lineStart:function(){t.push(n=[])},lineEnd:l.Z,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var r=t;return t=[],n=null,r}}}function s(n,t){return(0,i.Wn)(n[0]-t[0])<i.Ho&&(0,i.Wn)(n[1]-t[1])<i.Ho}function h(n,t,r,i){this.x=n,this.z=t,this.o=r,this.e=i,this.v=!1,this.n=this.p=null}function v(n,t,r,o,e){var u,a,f=[],c=[];if(n.forEach((function(n){if(!((t=n.length-1)<=0)){var t,r,o=n[0],a=n[t];if(s(o,a)){if(!o[2]&&!a[2]){for(e.lineStart(),u=0;u<t;++u)e.point((o=n[u])[0],o[1]);return void e.lineEnd()}a[0]+=2*i.Ho}f.push(r=new h(o,n,null,!0)),c.push(r.o=new h(o,null,r,!1)),f.push(r=new h(a,n,null,!1)),c.push(r.o=new h(a,null,r,!0))}})),f.length){for(c.sort(t),d(f),d(c),u=0,a=c.length;u<a;++u)c[u].e=r=!r;for(var l,p,v=f[0];;){for(var y=v,g=!0;y.v;)if((y=y.n)===v)return;l=y.z,e.lineStart();do{if(y.v=y.o.v=!0,y.e){if(g)for(u=0,a=l.length;u<a;++u)e.point((p=l[u])[0],p[1]);else o(y.x,y.n.x,1,e);y=y.n}else{if(g)for(l=y.p.z,u=l.length-1;u>=0;--u)e.point((p=l[u])[0],p[1]);else o(y.x,y.p.x,-1,e);y=y.p}l=(y=y.o).z,g=!g}while(!y.v);e.lineEnd()}}}function d(n){if(t=n.length){for(var t,r,i=0,o=n[0];++i<t;)o.n=r=n[i],r.p=o,o=r;o.n=r=n[0],r.p=o}}var y=r(5801);function g(n){return[(0,i.fv)(n[1],n[0]),(0,i.ZR)(n[2])]}function m(n){var t=n[0],r=n[1],o=(0,i.mC)(r);return[o*(0,i.mC)(t),o*(0,i.O$)(t),(0,i.O$)(r)]}function E(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function S(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function _(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function R(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function Z(n){var t=(0,i._b)(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function x(n){return(0,i.Wn)(n[0])<=i.pi?n[0]:(0,i.Xx)(n[0])*(((0,i.Wn)(n[0])+i.pi)%i.BZ-i.pi)}function O(n){return Array.from(function*(n){for(const t of n)yield*t}(n))}function W(n,t,r,o){return function(e){var u,a,f,c=t(e),l=p(),s=t(l),h=!1,d={point:g,lineStart:_,lineEnd:R,polygonStart:function(){d.point=W,d.lineStart=w,d.lineEnd=C,a=[],u=[]},polygonEnd:function(){d.point=g,d.lineStart=_,d.lineEnd=R,a=O(a);var n=function(n,t){var r=x(t),o=t[1],e=(0,i.O$)(o),u=[(0,i.O$)(r),-(0,i.mC)(r),0],a=0,f=0,c=new y.dU;1===e?o=i.ou+i.Ho:-1===e&&(o=-i.ou-i.Ho);for(var l=0,p=n.length;l<p;++l)if(h=(s=n[l]).length)for(var s,h,v=s[h-1],d=x(v),g=v[1]/2+i.pu,E=(0,i.O$)(g),_=(0,i.mC)(g),R=0;R<h;++R,d=W,E=M,_=w,v=O){var O=s[R],W=x(O),b=O[1]/2+i.pu,M=(0,i.O$)(b),w=(0,i.mC)(b),C=W-d,N=C>=0?1:-1,$=N*C,H=$>i.pi,B=E*M;if(c.add((0,i.fv)(B*N*(0,i.O$)($),_*w+B*(0,i.mC)($))),a+=H?C+N*i.BZ:C,H^d>=r^W>=r){var A=S(m(v),m(O));Z(A);var j=S(u,A);Z(j);var P=(H^C>=0?-1:1)*(0,i.ZR)(j[2]);(o>P||o===P&&(A[0]||A[1]))&&(f+=H^C>=0?1:-1)}}return(a<-i.Ho||a<i.Ho&&c<-i.aW)^1&f}(u,o);a.length?(h||(e.polygonStart(),h=!0),v(a,M,n,r,e)):n&&(h||(e.polygonStart(),h=!0),e.lineStart(),r(null,null,1,e),e.lineEnd()),h&&(e.polygonEnd(),h=!1),a=u=null},sphere:function(){e.polygonStart(),e.lineStart(),r(null,null,1,e),e.lineEnd(),e.polygonEnd()}};function g(t,r){n(t,r)&&e.point(t,r)}function E(n,t){c.point(n,t)}function _(){d.point=E,c.lineStart()}function R(){d.point=g,c.lineEnd()}function W(n,t){f.push([n,t]),s.point(n,t)}function w(){s.lineStart(),f=[]}function C(){W(f[0][0],f[0][1]),s.lineEnd();var n,t,r,i,o=s.clean(),c=l.result(),p=c.length;if(f.pop(),u.push(f),f=null,p)if(1&o){if((t=(r=c[0]).length-1)>0){for(h||(e.polygonStart(),h=!0),e.lineStart(),n=0;n<t;++n)e.point((i=r[n])[0],i[1]);e.lineEnd()}}else p>1&&2&o&&c.push(c.pop().concat(c.shift())),a.push(c.filter(b))}return d}}function b(n){return n.length>1}function M(n,t){return((n=n.x)[0]<0?n[1]-i.ou-i.Ho:i.ou-n[1])-((t=t.x)[0]<0?t[1]-i.ou-i.Ho:i.ou-t[1])}var w=W((function(){return!0}),(function(n){var t,r=NaN,o=NaN,e=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(u,a){var f=u>0?i.pi:-i.pi,c=(0,i.Wn)(u-r);(0,i.Wn)(c-i.pi)<i.Ho?(n.point(r,o=(o+a)/2>0?i.ou:-i.ou),n.point(e,o),n.lineEnd(),n.lineStart(),n.point(f,o),n.point(u,o),t=0):e!==f&&c>=i.pi&&((0,i.Wn)(r-e)<i.Ho&&(r-=e*i.Ho),(0,i.Wn)(u-f)<i.Ho&&(u-=f*i.Ho),o=function(n,t,r,o){var e,u,a=(0,i.O$)(n-r);return(0,i.Wn)(a)>i.Ho?(0,i.z4)(((0,i.O$)(t)*(u=(0,i.mC)(o))*(0,i.O$)(r)-(0,i.O$)(o)*(e=(0,i.mC)(t))*(0,i.O$)(n))/(e*u*a)):(t+o)/2}(r,o,u,a),n.point(e,o),n.lineEnd(),n.lineStart(),n.point(f,o),t=0),n.point(r=u,o=a),e=f},lineEnd:function(){n.lineEnd(),r=o=NaN},clean:function(){return 2-t}}}),(function(n,t,r,o){var e;if(null==n)e=r*i.ou,o.point(-i.pi,e),o.point(0,e),o.point(i.pi,e),o.point(i.pi,0),o.point(i.pi,-e),o.point(0,-e),o.point(-i.pi,-e),o.point(-i.pi,0),o.point(-i.pi,e);else if((0,i.Wn)(n[0]-t[0])>i.Ho){var u=n[0]<t[0]?i.pi:-i.pi;e=r*u/2,o.point(-u,e),o.point(0,e),o.point(u,e)}else o.point(t[0],t[1])}),[-i.pi,-i.ou]);function C(n,t,r,o,e,u){if(r){var a=(0,i.mC)(t),f=(0,i.O$)(t),c=o*r;null==e?(e=t+o*i.BZ,u=t-c/2):(e=N(a,e),u=N(a,u),(o>0?e<u:e>u)&&(e+=o*i.BZ));for(var l,p=e;o>0?p>u:p<u;p-=c)l=g([a,-f*(0,i.mC)(p),-f*(0,i.O$)(p)]),n.point(l[0],l[1])}}function N(n,t){(t=m(t))[0]-=n,Z(t);var r=(0,i.Kh)(-t[1]);return((-t[2]<0?-r:r)+i.BZ-i.Ho)%i.BZ}function $(n){var t=(0,i.mC)(n),r=6*i.uR,o=t>0,e=(0,i.Wn)(t)>i.Ho;function u(n,r){return(0,i.mC)(n)*(0,i.mC)(r)>t}function a(n,r,o){var e=[1,0,0],u=S(m(n),m(r)),a=E(u,u),f=u[0],c=a-f*f;if(!c)return!o&&n;var l=t*a/c,p=-t*f/c,s=S(e,u),h=R(e,l);_(h,R(u,p));var v=s,d=E(h,v),y=E(v,v),Z=d*d-y*(E(h,h)-1);if(!(Z<0)){var x=(0,i._b)(Z),O=R(v,(-d-x)/y);if(_(O,h),O=g(O),!o)return O;var W,b=n[0],M=r[0],w=n[1],C=r[1];M<b&&(W=b,b=M,M=W);var N=M-b,$=(0,i.Wn)(N-i.pi)<i.Ho;if(!$&&C<w&&(W=w,w=C,C=W),$||N<i.Ho?$?w+C>0^O[1]<((0,i.Wn)(O[0]-b)<i.Ho?w:C):w<=O[1]&&O[1]<=C:N>i.pi^(b<=O[0]&&O[0]<=M)){var H=R(v,(-d+x)/y);return _(H,h),[O,g(H)]}}}function f(t,r){var e=o?n:i.pi-n,u=0;return t<-e?u|=1:t>e&&(u|=2),r<-e?u|=4:r>e&&(u|=8),u}return W(u,(function(n){var t,r,c,l,p;return{lineStart:function(){l=c=!1,p=1},point:function(h,v){var d,y=[h,v],g=u(h,v),m=o?g?0:f(h,v):g?f(h+(h<0?i.pi:-i.pi),v):0;if(!t&&(l=c=g)&&n.lineStart(),g!==c&&(!(d=a(t,y))||s(t,d)||s(y,d))&&(y[2]=1),g!==c)p=0,g?(n.lineStart(),d=a(y,t),n.point(d[0],d[1])):(d=a(t,y),n.point(d[0],d[1],2),n.lineEnd()),t=d;else if(e&&t&&o^g){var E;m&r||!(E=a(y,t,!0))||(p=0,o?(n.lineStart(),n.point(E[0][0],E[0][1]),n.point(E[1][0],E[1][1]),n.lineEnd()):(n.point(E[1][0],E[1][1]),n.lineEnd(),n.lineStart(),n.point(E[0][0],E[0][1],3)))}!g||t&&s(t,y)||n.point(y[0],y[1]),t=y,c=g,r=m},lineEnd:function(){c&&n.lineEnd(),t=null},clean:function(){return p|(l&&c)<<1}}}),(function(t,i,o,e){C(e,n,r,o,t,i)}),o?[0,-n]:[-i.pi,n-i.pi])}var H=1e9,B=-H;function A(n,t,r,o){function e(i,e){return n<=i&&i<=r&&t<=e&&e<=o}function u(i,e,u,f){var l=0,p=0;if(null==i||(l=a(i,u))!==(p=a(e,u))||c(i,e)<0^u>0)do{f.point(0===l||3===l?n:r,l>1?o:t)}while((l=(l+u+4)%4)!==p);else f.point(e[0],e[1])}function a(o,e){return(0,i.Wn)(o[0]-n)<i.Ho?e>0?0:3:(0,i.Wn)(o[0]-r)<i.Ho?e>0?2:1:(0,i.Wn)(o[1]-t)<i.Ho?e>0?1:0:e>0?3:2}function f(n,t){return c(n.x,t.x)}function c(n,t){var r=a(n,1),i=a(t,1);return r!==i?r-i:0===r?t[1]-n[1]:1===r?n[0]-t[0]:2===r?n[1]-t[1]:t[0]-n[0]}return function(i){var a,c,l,s,h,d,y,g,m,E,S,_=i,R=p(),Z={point:x,lineStart:function(){Z.point=W,c&&c.push(l=[]);E=!0,m=!1,y=g=NaN},lineEnd:function(){a&&(W(s,h),d&&m&&R.rejoin(),a.push(R.result()));Z.point=x,m&&_.lineEnd()},polygonStart:function(){_=R,a=[],c=[],S=!0},polygonEnd:function(){var t=function(){for(var t=0,r=0,i=c.length;r<i;++r)for(var e,u,a=c[r],f=1,l=a.length,p=a[0],s=p[0],h=p[1];f<l;++f)e=s,u=h,s=(p=a[f])[0],h=p[1],u<=o?h>o&&(s-e)*(o-u)>(h-u)*(n-e)&&++t:h<=o&&(s-e)*(o-u)<(h-u)*(n-e)&&--t;return t}(),r=S&&t,e=(a=O(a)).length;(r||e)&&(i.polygonStart(),r&&(i.lineStart(),u(null,null,1,i),i.lineEnd()),e&&v(a,f,t,u,i),i.polygonEnd());_=i,a=c=l=null}};function x(n,t){e(n,t)&&_.point(n,t)}function W(i,u){var a=e(i,u);if(c&&l.push([i,u]),E)s=i,h=u,d=a,E=!1,a&&(_.lineStart(),_.point(i,u));else if(a&&m)_.point(i,u);else{var f=[y=Math.max(B,Math.min(H,y)),g=Math.max(B,Math.min(H,g))],p=[i=Math.max(B,Math.min(H,i)),u=Math.max(B,Math.min(H,u))];!function(n,t,r,i,o,e){var u,a=n[0],f=n[1],c=0,l=1,p=t[0]-a,s=t[1]-f;if(u=r-a,p||!(u>0)){if(u/=p,p<0){if(u<c)return;u<l&&(l=u)}else if(p>0){if(u>l)return;u>c&&(c=u)}if(u=o-a,p||!(u<0)){if(u/=p,p<0){if(u>l)return;u>c&&(c=u)}else if(p>0){if(u<c)return;u<l&&(l=u)}if(u=i-f,s||!(u>0)){if(u/=s,s<0){if(u<c)return;u<l&&(l=u)}else if(s>0){if(u>l)return;u>c&&(c=u)}if(u=e-f,s||!(u<0)){if(u/=s,s<0){if(u>l)return;u>c&&(c=u)}else if(s>0){if(u<c)return;u<l&&(l=u)}return c>0&&(n[0]=a+c*p,n[1]=f+c*s),l<1&&(t[0]=a+l*p,t[1]=f+l*s),!0}}}}}(f,p,n,t,r,o)?a&&(_.lineStart(),_.point(i,u),S=!1):(m||(_.lineStart(),_.point(f[0],f[1])),_.point(p[0],p[1]),a||_.lineEnd(),S=!1)}y=i,g=u,m=a}return Z}}var j=r(7423);function P(n){return function(t){var r=new k;for(var i in n)r[i]=n[i];return r.stream=t,r}}function k(){}k.prototype={constructor:k,point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var U=r(3790),z=r(3310);function T(n,t,r){var i=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),null!=i&&n.clipExtent(null),(0,U.Z)(r,n.stream(z.Z)),t(z.Z.result()),null!=i&&n.clipExtent(i),n}function F(n,t,r){return T(n,(function(r){var i=t[1][0]-t[0][0],o=t[1][1]-t[0][1],e=Math.min(i/(r[1][0]-r[0][0]),o/(r[1][1]-r[0][1])),u=+t[0][0]+(i-e*(r[1][0]+r[0][0]))/2,a=+t[0][1]+(o-e*(r[1][1]+r[0][1]))/2;n.scale(150*e).translate([u,a])}),r)}var I=(0,i.mC)(30*i.uR);function K(n,t){return+t?function(n,t){function r(o,e,u,a,f,c,l,p,s,h,v,d,y,g){var m=l-o,E=p-e,S=m*m+E*E;if(S>4*t&&y--){var _=a+h,R=f+v,Z=c+d,x=(0,i._b)(_*_+R*R+Z*Z),O=(0,i.ZR)(Z/=x),W=(0,i.Wn)((0,i.Wn)(Z)-1)<i.Ho||(0,i.Wn)(u-s)<i.Ho?(u+s)/2:(0,i.fv)(R,_),b=n(W,O),M=b[0],w=b[1],C=M-o,N=w-e,$=E*C-m*N;($*$/S>t||(0,i.Wn)((m*C+E*N)/S-.5)>.3||a*h+f*v+c*d<I)&&(r(o,e,u,a,f,c,M,w,W,_/=x,R/=x,Z,y,g),g.point(M,w),r(M,w,W,_,R,Z,l,p,s,h,v,d,y,g))}}return function(t){var i,o,e,u,a,f,c,l,p,s,h,v,d={point:y,lineStart:g,lineEnd:S,polygonStart:function(){t.polygonStart(),d.lineStart=_},polygonEnd:function(){t.polygonEnd(),d.lineStart=g}};function y(r,i){r=n(r,i),t.point(r[0],r[1])}function g(){l=NaN,d.point=E,t.lineStart()}function E(i,o){var e=m([i,o]),u=n(i,o);r(l,p,c,s,h,v,l=u[0],p=u[1],c=i,s=e[0],h=e[1],v=e[2],16,t),t.point(l,p)}function S(){d.point=y,t.lineEnd()}function _(){g(),d.point=R,d.lineEnd=Z}function R(n,t){E(i=n,t),o=l,e=p,u=s,a=h,f=v,d.point=E}function Z(){r(l,p,c,s,h,v,o,e,i,u,a,f,16,t),d.lineEnd=S,S()}return d}}(n,t):function(n){return P({point:function(t,r){t=n(t,r),this.stream.point(t[0],t[1])}})}(n)}var L=P({point:function(n,t){this.stream.point(n*i.uR,t*i.uR)}});function q(n,t,r,o,e,u){if(!u)return function(n,t,r,i,o){function e(e,u){return[t+n*(e*=i),r-n*(u*=o)]}return e.invert=function(e,u){return[(e-t)/n*i,(r-u)/n*o]},e}(n,t,r,o,e);var a=(0,i.mC)(u),f=(0,i.O$)(u),c=a*n,l=f*n,p=a/n,s=f/n,h=(f*r-a*t)/n,v=(f*t+a*r)/n;function d(n,i){return[c*(n*=o)-l*(i*=e)+t,r-l*n-c*i]}return d.invert=function(n,t){return[o*(p*n-s*t+h),e*(v-s*n-p*t)]},d}function D(n){return function(n){var t,r,e,a,f,c,l,p,s,h,v=150,d=480,y=250,g=0,m=0,E=0,S=0,_=0,R=0,Z=1,x=1,O=null,W=w,b=null,M=j.Z,C=.5;function N(n){return p(n[0]*i.uR,n[1]*i.uR)}function H(n){return(n=p.invert(n[0],n[1]))&&[n[0]*i.RW,n[1]*i.RW]}function B(){var n=q(v,0,0,Z,x,R).apply(null,t(g,m)),i=q(v,d-n[0],y-n[1],Z,x,R);return r=u(E,S,_),l=o(t,i),p=o(r,l),c=K(l,C),k()}function k(){return s=h=null,N}return N.stream=function(n){return s&&h===n?s:s=L(function(n){return P({point:function(t,r){var i=n(t,r);return this.stream.point(i[0],i[1])}})}(r)(W(c(M(h=n)))))},N.preclip=function(n){return arguments.length?(W=n,O=void 0,k()):W},N.postclip=function(n){return arguments.length?(M=n,b=e=a=f=null,k()):M},N.clipAngle=function(n){return arguments.length?(W=+n?$(O=n*i.uR):(O=null,w),k()):O*i.RW},N.clipExtent=function(n){return arguments.length?(M=null==n?(b=e=a=f=null,j.Z):A(b=+n[0][0],e=+n[0][1],a=+n[1][0],f=+n[1][1]),k()):null==b?null:[[b,e],[a,f]]},N.scale=function(n){return arguments.length?(v=+n,B()):v},N.translate=function(n){return arguments.length?(d=+n[0],y=+n[1],B()):[d,y]},N.center=function(n){return arguments.length?(g=n[0]%360*i.uR,m=n[1]%360*i.uR,B()):[g*i.RW,m*i.RW]},N.rotate=function(n){return arguments.length?(E=n[0]%360*i.uR,S=n[1]%360*i.uR,_=n.length>2?n[2]%360*i.uR:0,B()):[E*i.RW,S*i.RW,_*i.RW]},N.angle=function(n){return arguments.length?(R=n%360*i.uR,B()):R*i.RW},N.reflectX=function(n){return arguments.length?(Z=n?-1:1,B()):Z<0},N.reflectY=function(n){return arguments.length?(x=n?-1:1,B()):x<0},N.precision=function(n){return arguments.length?(c=K(l,C=n*n),k()):(0,i._b)(C)},N.fitExtent=function(n,t){return F(N,n,t)},N.fitSize=function(n,t){return function(n,t,r){return F(n,[[0,0],t],r)}(N,n,t)},N.fitWidth=function(n,t){return function(n,t,r){return T(n,(function(r){var i=+t,o=i/(r[1][0]-r[0][0]),e=(i-o*(r[1][0]+r[0][0]))/2,u=-o*r[0][1];n.scale(150*o).translate([e,u])}),r)}(N,n,t)},N.fitHeight=function(n,t){return function(n,t,r){return T(n,(function(r){var i=+t,o=i/(r[1][1]-r[0][1]),e=-o*r[0][0],u=(i-o*(r[1][1]+r[0][1]))/2;n.scale(150*o).translate([e,u])}),r)}(N,n,t)},function(){return t=n.apply(this,arguments),N.invert=t.invert&&H,B()}}((function(){return n}))()}function X(n,t){return[n,(0,i.cM)((0,i.OR)((i.ou+t)/2))]}function Q(){return function(n){var t,r,o,e=D(n),a=e.center,f=e.scale,c=e.translate,l=e.clipExtent,p=null;function s(){var a=i.pi*f(),c=e(function(n){function t(t){return(t=n(t[0]*i.uR,t[1]*i.uR))[0]*=i.RW,t[1]*=i.RW,t}return n=u(n[0]*i.uR,n[1]*i.uR,n.length>2?n[2]*i.uR:0),t.invert=function(t){return(t=n.invert(t[0]*i.uR,t[1]*i.uR))[0]*=i.RW,t[1]*=i.RW,t},t}(e.rotate()).invert([0,0]));return l(null==p?[[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]]:n===X?[[Math.max(c[0]-a,p),t],[Math.min(c[0]+a,r),o]]:[[p,Math.max(c[1]-a,t)],[r,Math.min(c[1]+a,o)]])}return e.scale=function(n){return arguments.length?(f(n),s()):f()},e.translate=function(n){return arguments.length?(c(n),s()):c()},e.center=function(n){return arguments.length?(a(n),s()):a()},e.clipExtent=function(n){return arguments.length?(null==n?p=t=r=o=null:(p=+n[0][0],t=+n[0][1],r=+n[1][0],o=+n[1][1]),s()):null==p?null:[[p,t],[r,o]]},s()}(X).scale(961/i.BZ)}X.invert=function(n,t){return[n,2*(0,i.z4)((0,i.Qq)(t))-i.ou]}},3790:function(n,t,r){"use strict";function i(n,t){n&&e.hasOwnProperty(n.type)&&e[n.type](n,t)}r.d(t,{Z:function(){return f}});var o={Feature:function(n,t){i(n.geometry,t)},FeatureCollection:function(n,t){for(var r=n.features,o=-1,e=r.length;++o<e;)i(r[o].geometry,t)}},e={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var r=n.coordinates,i=-1,o=r.length;++i<o;)n=r[i],t.point(n[0],n[1],n[2])},LineString:function(n,t){u(n.coordinates,t,0)},MultiLineString:function(n,t){for(var r=n.coordinates,i=-1,o=r.length;++i<o;)u(r[i],t,0)},Polygon:function(n,t){a(n.coordinates,t)},MultiPolygon:function(n,t){for(var r=n.coordinates,i=-1,o=r.length;++i<o;)a(r[i],t)},GeometryCollection:function(n,t){for(var r=n.geometries,o=-1,e=r.length;++o<e;)i(r[o],t)}};function u(n,t,r){var i,o=-1,e=n.length-r;for(t.lineStart();++o<e;)i=n[o],t.point(i[0],i[1],i[2]);t.lineEnd()}function a(n,t){var r=-1,i=n.length;for(t.polygonStart();++r<i;)u(n[r],t,1);t.polygonEnd()}function f(n,t){n&&o.hasOwnProperty(n.type)?o[n.type](n,t):i(n,t)}},6641:function(n,t,r){"use strict";r.d(t,{W:function(){return l}});var i=r(7294),o=r(8710),e=r(9896);function u(){return(u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])}return n}).apply(this,arguments)}function a(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(n)))return;var r=[],i=!0,o=!1,e=void 0;try{for(var u,a=n[Symbol.iterator]();!(i=(u=a.next()).done)&&(r.push(u.value),!t||r.length!==t);i=!0);}catch(f){o=!0,e=f}finally{try{i||null==a.return||a.return()}finally{if(o)throw e}}return r}(n,t)||function(n,t){if(!n)return;if("string"===typeof n)return f(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=n[r];return i}function c(n,t){if(null==n)return{};var r,i,o=function(n,t){if(null==n)return{};var r,i,o={},e=Object.keys(n);for(i=0;i<e.length;i++)r=e[i],t.indexOf(r)>=0||(o[r]=n[r]);return o}(n,t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);for(i=0;i<e.length;i++)r=e[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function l(n){var t=n.offset,r=n.layout,f=n.width,l=n.dataKey,p=n.data,s=n.dataPointFormatter,h=n.xAxis,v=n.yAxis,d=c(n,["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"]),y=(0,e.L6)(d),g=p.map((function(n,e){var c=s(n,l),p=c.x,d=c.y,g=c.value,m=c.errorVal;if(!m)return null;var E,S,_=[];if(Array.isArray(m)){var R=a(m,2);E=R[0],S=R[1]}else E=S=m;if("vertical"===r){var Z=h.scale,x=d+t,O=x+f,W=x-f,b=Z(g-E),M=Z(g+S);_.push({x1:M,y1:O,x2:M,y2:W}),_.push({x1:b,y1:x,x2:M,y2:x}),_.push({x1:b,y1:O,x2:b,y2:W})}else if("horizontal"===r){var w=v.scale,C=p+t,N=C-f,$=C+f,H=w(g-E),B=w(g+S);_.push({x1:N,y1:B,x2:$,y2:B}),_.push({x1:C,y1:H,x2:C,y2:B}),_.push({x1:N,y1:H,x2:$,y2:H})}return i.createElement(o.m,u({className:"recharts-errorBar",key:"bar-".concat(e)},y),_.map((function(n,t){return i.createElement("line",u({},n,{key:"line-".concat(t)}))})))}));return i.createElement(o.m,{className:"recharts-errorBars"},g)}l.defaultProps={stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"},l.displayName="ErrorBar"},3815:function(n,t,r){"use strict";r.d(t,{b:function(){return i}});var i=function(n){return null};i.displayName="Cell"},1084:function(n,t,r){"use strict";function i(n,t,r,i){var o,e=!1,u=0;function a(){o&&clearTimeout(o)}function f(){for(var f=arguments.length,c=new Array(f),l=0;l<f;l++)c[l]=arguments[l];var p=this,s=Date.now()-u;function h(){u=Date.now(),r.apply(p,c)}function v(){o=void 0}e||(i&&!o&&h(),a(),void 0===i&&s>n?h():!0!==t&&(o=setTimeout(i?v:h,void 0===i?n-s:n)))}return"boolean"!==typeof t&&(i=r,r=t,t=void 0),f.cancel=function(){a(),e=!0},f}function o(n,t,r){return void 0===r?i(n,t,!1):i(n,r,!1!==t)}r.d(t,{D:function(){return o}})}}]);