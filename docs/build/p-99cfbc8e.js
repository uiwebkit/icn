import{e as s,i as t}from"./p-b2b8e073.js";function n(s,t){return t?"Host"===t||!!s.querySelector(t):!!s.firstElementChild}function e(t,n,e,o){if(!s(n))if(t.selector)if("Host"===t.selector)e([t.el],n);else{const s=t.all?t.el.querySelectorAll(t.selector):[t.el.querySelector(t.selector)];s[0]&&(e(s,n),null==o||o.disconnect())}else{const s=t.all?[...t.el.children]:[t.el.firstElementChild];s&&s[0]&&(e(s,n),null==o||o.disconnect())}}function o(o,i,f){if(t(i)&&!s(i))if(n(o.el,o.selector))e(o,i,f);else{const s=new MutationObserver((()=>{e(o,i,f,s)}));s.observe(o.el,{childList:!0,subtree:!0})}}function i(s,t){for(const[n,e]of Object.entries(t))s.forEach((s=>{s.style[n]=e}))}export{o as a,i as b,n as i,e as u}