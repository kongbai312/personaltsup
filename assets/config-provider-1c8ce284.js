import{p as s}from"./use-global-config-8f2efcff.js";import{j as r,V as t,d as i,K as p,r as u}from"./index-ae23ef46.js";import{u as l}from"./index-b9d7366f.js";function b(e){return e==null}const y="update:modelValue",E="change",P="input",c=r({a11y:{type:Boolean,default:!0},locale:{type:t(Object)},size:l,button:{type:t(Object)},experimentalFeatures:{type:t(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:t(Object)},zIndex:Number,namespace:{type:String,default:"el"}}),d={},N=i({name:"ElConfigProvider",props:c,setup(e,{slots:n}){p(()=>e.message,a=>{Object.assign(d,a??{})},{immediate:!0,deep:!0});const o=s(e);return()=>u(n,"default",{config:o==null?void 0:o.value})}});export{E as C,P as I,y as U,N as a,b as i,d as m};