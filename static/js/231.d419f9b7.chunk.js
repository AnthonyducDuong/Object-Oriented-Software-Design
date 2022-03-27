"use strict";(self.webpackChunkadoptpet=self.webpackChunkadoptpet||[]).push([[231],{7231:function(t,n,e){e.d(n,{UO:function(){return w},Mi:function(){return T},uf:function(){return b},Qh:function(){return M},Xc:function(){return j}});var i=e(5971),r=e(6198),a=e.n(r),o=e(1856),s=e(151),u=e(2791);function l(t,n){if(null==t)return{};var e,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)e=a[i],n.indexOf(e)>=0||(r[e]=t[e]);return r}function c(){return c=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},c.apply(this,arguments)}var d={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},f={position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},v={position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},m={position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},x={position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}};function y(t){var n;switch(null!=(n=null==t?void 0:t.direction)?n:"right"){case"right":default:return v;case"left":return f;case"bottom":return x;case"top":return m}}var E={enter:{duration:.2,ease:d.easeOut},exit:{duration:.1,ease:d.easeIn}},p=function(t,n){return c({},t,{delay:(0,i.hj)(n)?n:null==n?void 0:n.enter})},h=function(t,n){return c({},t,{delay:(0,i.hj)(n)?n:null==n?void 0:n.exit})},g=["in","unmountOnExit","animateOpacity","startingHeight","endingHeight","style","className","transition","transitionEnd"],O={exit:{height:{duration:.2,ease:d.ease},opacity:{duration:.3,ease:d.ease}},enter:{height:{duration:.3,ease:d.ease},opacity:{duration:.4,ease:d.ease}}},k={exit:function(t){var n,e,i=t.animateOpacity,r=t.startingHeight,a=t.transition,o=t.transitionEnd,s=t.delay;return c({},i&&{opacity:(e=r,null!=e&&parseInt(e.toString(),10)>0?1:0)},{overflow:"hidden",height:r,transitionEnd:null==o?void 0:o.exit,transition:null!=(n=null==a?void 0:a.exit)?n:h(O.exit,s)})},enter:function(t){var n,e=t.animateOpacity,i=t.endingHeight,r=t.transition,a=t.transitionEnd,o=t.delay;return c({},e&&{opacity:1},{height:i,transitionEnd:null==a?void 0:a.enter,transition:null!=(n=null==r?void 0:r.enter)?n:p(O.enter,o)})}},w=u.forwardRef((function(t,n){var e=t.in,r=t.unmountOnExit,d=t.animateOpacity,f=void 0===d||d,v=t.startingHeight,m=void 0===v?0:v,x=t.endingHeight,y=void 0===x?"auto":x,E=t.style,p=t.className,h=t.transition,O=t.transitionEnd,w=l(t,g),N=u.useState(!1),b=N[0],C=N[1];u.useEffect((function(){var t=setTimeout((function(){C(!0)}));return function(){return clearTimeout(t)}}),[]),(0,i.ZK)({condition:Boolean(m>0&&r),message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});var R=parseFloat(m.toString())>0,M={startingHeight:m,endingHeight:y,animateOpacity:f,transition:b?h:{enter:{duration:0}},transitionEnd:a()(O,{enter:{overflow:"initial"},exit:r?void 0:{display:R?"block":"none"}})},S=!r||e,H=e||r?"enter":"exit";return u.createElement(o.M,{initial:!1,custom:M},S&&u.createElement(s.E.div,c({ref:n},w,{className:(0,i.cx)("chakra-collapse",p),style:c({overflow:"hidden",display:"block"},E),custom:M,variants:k,initial:!!r&&"exit",animate:H,exit:"exit"})))}));i.Ts&&(w.displayName="Collapse");var N=["unmountOnExit","in","className","transition","transitionEnd","delay"],b={initial:"exit",animate:"enter",exit:"exit",variants:{enter:function(t){var n,e=void 0===t?{}:t,i=e.transition,r=e.transitionEnd,a=e.delay;return{opacity:1,transition:null!=(n=null==i?void 0:i.enter)?n:p(E.enter,a),transitionEnd:null==r?void 0:r.enter}},exit:function(t){var n,e=void 0===t?{}:t,i=e.transition,r=e.transitionEnd,a=e.delay;return{opacity:0,transition:null!=(n=null==i?void 0:i.exit)?n:h(E.exit,a),transitionEnd:null==r?void 0:r.exit}}}},C=u.forwardRef((function(t,n){var e=t.unmountOnExit,r=t.in,a=t.className,d=t.transition,f=t.transitionEnd,v=t.delay,m=l(t,N),x=r||e?"enter":"exit",y=!e||r&&e,E={transition:d,transitionEnd:f,delay:v};return u.createElement(o.M,{custom:E},y&&u.createElement(s.E.div,c({ref:n,className:(0,i.cx)("chakra-fade",a),custom:E},b,{animate:x},m)))}));i.Ts&&(C.displayName="Fade");var R=["unmountOnExit","in","reverse","initialScale","className","transition","transitionEnd","delay"],M={initial:"exit",animate:"enter",exit:"exit",variants:{exit:function(t){var n,e=t.reverse,i=t.initialScale,r=t.transition,a=t.transitionEnd,o=t.delay;return c({opacity:0},e?{scale:i,transitionEnd:null==a?void 0:a.exit}:{transitionEnd:c({scale:i},null==a?void 0:a.exit)},{transition:null!=(n=null==r?void 0:r.exit)?n:h(E.exit,o)})},enter:function(t){var n,e=t.transitionEnd,i=t.transition,r=t.delay;return{opacity:1,scale:1,transition:null!=(n=null==i?void 0:i.enter)?n:p(E.enter,r),transitionEnd:null==e?void 0:e.enter}}}},S=u.forwardRef((function(t,n){var e=t.unmountOnExit,r=t.in,a=t.reverse,d=void 0===a||a,f=t.initialScale,v=void 0===f?.95:f,m=t.className,x=t.transition,y=t.transitionEnd,E=t.delay,p=l(t,R),h=!e||r&&e,g=r||e?"enter":"exit",O={initialScale:v,reverse:d,transition:x,transitionEnd:y,delay:E};return u.createElement(o.M,{custom:O},h&&u.createElement(s.E.div,c({ref:n,className:(0,i.cx)("chakra-offset-slide",m)},M,{animate:g,custom:O},p)))}));i.Ts&&(S.displayName="ScaleFade");var H=["direction","style","unmountOnExit","in","className","transition","transitionEnd","delay"],P={exit:{duration:.15,ease:d.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},L={exit:function(t){var n,e=t.direction,i=t.transition,r=t.transitionEnd,a=t.delay;return c({},y({direction:e}).exit,{transition:null!=(n=null==i?void 0:i.exit)?n:h(P.exit,a),transitionEnd:null==r?void 0:r.exit})},enter:function(t){var n,e=t.direction,i=t.transitionEnd,r=t.transition,a=t.delay;return c({},y({direction:e}).enter,{transition:null!=(n=null==r?void 0:r.enter)?n:p(P.enter,a),transitionEnd:null==i?void 0:i.enter})}},T=u.forwardRef((function(t,n){var e=t.direction,r=void 0===e?"right":e,a=t.style,d=t.unmountOnExit,f=t.in,v=t.className,m=t.transition,x=t.transitionEnd,E=t.delay,p=l(t,H),h=y({direction:r}),g=Object.assign({position:"fixed"},h.position,a),O=!d||f&&d,k=f||d?"enter":"exit",w={transitionEnd:x,transition:m,direction:r,delay:E};return u.createElement(o.M,{custom:w},O&&u.createElement(s.E.div,c({},p,{ref:n,initial:"exit",className:(0,i.cx)("chakra-slide",v),animate:k,exit:"exit",custom:w,variants:L,style:g})))}));i.Ts&&(T.displayName="Slide");var X=["unmountOnExit","in","reverse","className","offsetX","offsetY","transition","transitionEnd","delay"],j={initial:"initial",animate:"enter",exit:"exit",variants:{initial:function(t){var n,e=t.offsetX,i=t.offsetY,r=t.transition,a=t.transitionEnd,o=t.delay;return{opacity:0,x:e,y:i,transition:null!=(n=null==r?void 0:r.exit)?n:h(E.exit,o),transitionEnd:null==a?void 0:a.exit}},enter:function(t){var n,e=t.transition,i=t.transitionEnd,r=t.delay;return{opacity:1,x:0,y:0,transition:null!=(n=null==e?void 0:e.enter)?n:p(E.enter,r),transitionEnd:null==i?void 0:i.enter}},exit:function(t){var n,e=t.offsetY,i=t.offsetX,r=t.transition,a=t.transitionEnd,o=t.reverse,s=t.delay,u={x:i,y:e};return c({opacity:0,transition:null!=(n=null==r?void 0:r.exit)?n:h(E.exit,s)},o?c({},u,{transitionEnd:null==a?void 0:a.exit}):{transitionEnd:c({},u,null==a?void 0:a.exit)})}}},A=u.forwardRef((function(t,n){var e=t.unmountOnExit,r=t.in,a=t.reverse,d=void 0===a||a,f=t.className,v=t.offsetX,m=void 0===v?0:v,x=t.offsetY,y=void 0===x?8:x,E=t.transition,p=t.transitionEnd,h=t.delay,g=l(t,X),O=!e||r&&e,k=r||e?"enter":"exit",w={offsetX:m,offsetY:y,reverse:d,transition:E,transitionEnd:p,delay:h};return u.createElement(o.M,{custom:w},O&&u.createElement(s.E.div,c({ref:n,className:(0,i.cx)("chakra-offset-slide",f),custom:w},j,{animate:k},g)))}));i.Ts&&(A.displayName="SlideFade")},1856:function(t,n,e){e.d(n,{M:function(){return y}});var i=e(9388),r=e(2791),a=e(2968),o=e(2199);function s(){var t=(0,r.useRef)(!1);return(0,o.L)((function(){return t.current=!0,function(){t.current=!1}}),[]),t}var u=e(131),l=e(9829),c=e(8174),d=function(t){var n=t.children,e=t.initial,a=t.isPresent,o=t.onExitComplete,s=t.custom,d=t.presenceAffectsLayout,v=(0,l.h)(f),m=(0,c.M)(),x=(0,r.useMemo)((function(){return{id:m,initial:e,isPresent:a,custom:s,onExitComplete:function(t){var n,e;v.set(t,!0);try{for(var r=(0,i.XA)(v.values()),a=r.next();!a.done;a=r.next()){if(!a.value)return}}catch(s){n={error:s}}finally{try{a&&!a.done&&(e=r.return)&&e.call(r)}finally{if(n)throw n.error}}null===o||void 0===o||o()},register:function(t){return v.set(t,!1),function(){return v.delete(t)}}}}),d?void 0:[a]);return(0,r.useMemo)((function(){v.forEach((function(t,n){return v.set(n,!1)}))}),[a]),r.useEffect((function(){!a&&!v.size&&(null===o||void 0===o||o())}),[a]),r.createElement(u.O.Provider,{value:x},n)};function f(){return new Map}var v=e(7497),m=e(1475),x=function(t){return t.key||""};var y=function(t){var n=t.children,e=t.custom,u=t.initial,l=void 0===u||u,c=t.onExitComplete,f=t.exitBeforeEnter,y=t.presenceAffectsLayout,E=void 0===y||y,p=(0,i.CR)(function(){var t=s(),n=(0,i.CR)((0,r.useState)(0),2),e=n[0],o=n[1],u=(0,r.useCallback)((function(){t.current&&o(e+1)}),[e]);return[(0,r.useCallback)((function(){return a.ZP.postRender(u)}),[u]),e]}(),1),h=p[0],g=(0,r.useContext)(v.p).forceRender;g&&(h=g);var O=s(),k=function(t){var n=[];return r.Children.forEach(t,(function(t){(0,r.isValidElement)(t)&&n.push(t)})),n}(n),w=k,N=new Set,b=(0,r.useRef)(w),C=(0,r.useRef)(new Map).current,R=(0,r.useRef)(!0);if((0,o.L)((function(){R.current=!1,function(t,n){t.forEach((function(t){var e=x(t);n.set(e,t)}))}(k,C),b.current=w})),(0,m.z)((function(){R.current=!0,C.clear(),N.clear()})),R.current)return r.createElement(r.Fragment,null,w.map((function(t){return r.createElement(d,{key:x(t),isPresent:!0,initial:!!l&&void 0,presenceAffectsLayout:E},t)})));w=(0,i.ev)([],(0,i.CR)(w),!1);for(var M=b.current.map(x),S=k.map(x),H=M.length,P=0;P<H;P++){var L=M[P];-1===S.indexOf(L)&&N.add(L)}return f&&N.size&&(w=[]),N.forEach((function(t){if(-1===S.indexOf(t)){var n=C.get(t);if(n){var i=M.indexOf(t);w.splice(i,0,r.createElement(d,{key:x(n),isPresent:!1,onExitComplete:function(){C.delete(t),N.delete(t);var n=b.current.findIndex((function(n){return n.key===t}));if(b.current.splice(n,1),!N.size){if(b.current=k,!1===O.current)return;h(),c&&c()}},custom:e,presenceAffectsLayout:E},n))}}})),w=w.map((function(t){var n=t.key;return N.has(n)?t:r.createElement(d,{key:x(t),isPresent:!0,presenceAffectsLayout:E},t)})),r.createElement(r.Fragment,null,N.size?w:w.map((function(t){return(0,r.cloneElement)(t)})))}}}]);
//# sourceMappingURL=231.d419f9b7.chunk.js.map