var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var l=Array(e),i=0,r=0;r<t;r++)for(var s=arguments[r],n=0,o=s.length;n<o;n++,i++)l[i]=s[n];return l};System.register(["./p-4045657f.system.js"],(function(e){"use strict";var r,t;return{setters:[function(e){r=e.e;t=e.i}],execute:function(){e({a:s,i:l,u:i});function l(e,r){return r?r==="Host"||!!e.querySelector(r):!!e.firstElementChild}function i(e,t,l,i){if(!r(t)){if(e.selector){if(e.selector==="Host"){l([e.el],t)}else{var s=e.all?e.el.querySelectorAll(e.selector):[e.el.querySelector(e.selector)];if(s[0]){l(s,t);i===null||i===void 0?void 0:i.disconnect()}}}else{var n=e.all?__spreadArrays(e.el.children):[e.el.firstElementChild];if(n&&n[0]){l(n,t);i===null||i===void 0?void 0:i.disconnect()}}}}function s(e,s,n){if(t(s)&&!r(s)){if(l(e.el,e.selector)){i(e,s,n)}else{var o=new MutationObserver((function(){i(e,s,n,o)}));o.observe(e.el,{childList:true,subtree:true})}}}}}}));