import{f as n,g as e}from"./p-d8f3608d.js";function t(n){const e=document.head.querySelectorAll("style");if(!Array.from(e).some((e=>e.textContent===n))){const e=document.createElement("style");e.appendChild(document.createTextNode(n)),document.head.appendChild(e)}}function i(n){let e={};const t=`rotate(${n}deg)`;return e.transform=t,e["-webkit-transform"]=t,{styles:e}}function r({speed:n,steps:e}){let t={};const i=`uni-rotate ${n||1}s infinite ${e?"steps("+e+")":"linear"}`;return t.animation=i,t["-webkit-animation"]=i,{styles:t}}function s({color:n,filter:e,size:t,fontSize:i}){const r=["primary","success","accent","warn"],s=["lg","md","sm","xs"];let o=[],a={};return r.includes(n)?o.push("uni-color-"+n):n&&(a.color=n,a.fill=n),r.includes(e)?o.push("uni-filter-"+e):e&&(a.filter=e),s.includes(t)?o.push("uni-size-"+t):t&&(a.height=t,a.width=t),s.includes(i)?o.push("uni-font-size-"+i):i&&(a.fontSize=i+"px"),{classes:o,styles:a}}function o(n,e){e&&n.forEach((n=>{n.textContent=e}))}function a(n,e){for(const[t,i]of Object.entries(e))n.forEach((n=>{n.style[t]=i}))}function l(l){const{el:h,color:d,filter:x,size:z,fontSize:m,selector:v,all:b}=l;let{classes:w,styles:y}=d||x||z||m?s({color:d,filter:x,size:z,fontSize:m}):{classes:[],styles:{}};w=[...w,...l.classes?l.classes.split(" "):[]],d&&t(c),x&&t(f),z&&t(g),m&&t(u),l.degree&&(y=Object.assign(Object.assign({},y),i(l.degree).styles)),l.spin&&(t(p),y=Object.assign(Object.assign({},y),r(l).styles)),n({el:h,selector:v,all:b},w,e),n({el:h,selector:v,all:b},y,a),n({el:h,selector:v,all:b},l.content,o)}const c="\n.uni-color-primary {\n  color: #3f51b5;\n  color: var(--uni-color-primary, #3f51b5);\n  fill: #3f51b5;\n  fill: var(--uni-color-primary, #3f51b5);\n}\n.uni-color-success {\n  color: #018786;\n  color: var(--uni-color-success, #018786);\n  fill: #018786;\n  fill: var(--uni-color-success, #018786);\n}\n.uni-color-accent {\n  color: #ff4081;\n  color: var(--uni-color-accent, #ff4081);\n  fill: #ff4081;\n  fill: var(--uni-color-accent, #ff4081);\n}\n.uni-color-warn {\n  color: #f44336;\n  color: var(--uni-color-warn, #f44336);\n  fill: #f44336;\n  fill: var(--uni-color-warn, #f44336);\n}",f="\n.uni-filter-primary {\n  filter: invert(31%) sepia(10%) saturate(6644%) hue-rotate(204deg) brightness(95%) contrast(89%);\n  filter: var(--uni-color-primary-fix, invert(31%) sepia(10%) saturate(6644%) hue-rotate(204deg) brightness(95%) contrast(89%));\n}\n.uni-filter-success {\n  filter: invert(26%) sepia(88%) saturate(1958%) hue-rotate(160deg) brightness(94%) contrast(99%);\n  filter: var(--uni-color-success-fix, invert(26%) sepia(88%) saturate(1958%) hue-rotate(160deg) brightness(94%) contrast(99%));\n}\n.uni-filter-accent {\n  filter: invert(48%) sepia(88%) saturate(3768%) hue-rotate(315deg) brightness(99%) contrast(106%);\n  filter: var(--uni-color-accent-fix, invert(48%) sepia(88%) saturate(3768%) hue-rotate(315deg) brightness(99%) contrast(106%));\n}\n.uni-filter-warn {\n  filter: invert(42%) sepia(40%) saturate(3627%) hue-rotate(336deg) brightness(93%) contrast(107%);\n  filter: var(--uni-color-warn-fix, invert(42%) sepia(40%) saturate(3627%) hue-rotate(336deg) brightness(93%) contrast(107%));\n}",u="\n.uni-font-size-lg {\n  font-size: 48px;\n  font-size: var(--uni-size-lg, 48px);\n}\n.uni-font-size-md {\n  font-size: 36px;\n  font-size: var(--uni-size-md, 36px);\n}\n.uni-font-size-sm {\n  font-size: 24px;\n  font-size: var(--uni-size-sm, 24px);\n}\n.uni-font-size-xs {\n  font-size: 12px;\n  font-size: var(--uni-size-xs, 12px);\n}",p="\n@-webkit-keyframes uni-rotate {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n@keyframes uni-rotate {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}",g="\n.uni-size-lg {\n  height: 48px;\n  height: var(--uni-size-lg, 48px);\n  width: 48px;\n  width: var(--uni-size-lg, 48px);\n}\n.uni-size-md {\n  height: 36px;\n  height: var(--uni-size-md, 36px);\n  width: 36px;\n  width: var(--uni-size-md, 48px);\n}\n.uni-size-sm {\n  height: 24px;\n  height: var(--uni-size-sm, 24px);\n  width: 24px;\n  width: var(--uni-size-sm, 24px);\n}\n.uni-size-xs {\n  height: 12px;\n  height: var(--uni-size-xs, 12px);\n  width: 12px;\n  width: var(--uni-size-xs, 12px);\n}";export{c as U,i as a,r as b,s as c,o as d,a as e,l as f,f as g,u as h,p as i,g as j,t as u}