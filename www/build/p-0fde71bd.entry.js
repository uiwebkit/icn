import{r as e,h as s,g as t}from"./p-ba77ed68.js";import"./p-aa337fce.js";import{u as r}from"./p-5b10d675.js";const o=class{constructor(s){e(this,s),this.type="solid",this.rotate=!1}render(){const e=`uni-${function(e){switch(e){case"brands":return"fab";case"regular":return"far";case"solid":default:return"fas"}}(this.type)}-${this.name}`;return s(e,null)}componentDidLoad(){const{el:e,color:s,size:t,rotate:o,degree:i,speed:a,steps:n}=this;r({el:e,color:s,size:t,rotate:o,degree:i,speed:a,steps:n,selector:"svg"})}get el(){return t(this)}};o.style="uni-icon-fa {line-height: 1}";export{o as uni_icon_fa}