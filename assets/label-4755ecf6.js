import{d as y,s as x,o as k,a as E,q as v,u as w,b as n,c as d,z as A,w as i,Z as C,ab as I,f as p,j as M,a8 as L,D as B,_ as D}from"./index-fc725d61.js";import{E as S}from"./el-card-33d2578d.js";/* empty css               */import{a as j}from"./index-652fcb89.js";import{E as z}from"./index-e8391c90.js";import"./axios-4a70c6fc.js";import"./_commonjsHelpers-042e6b4d.js";import"./use-form-common-props-2d749c1e.js";import"./constants-84857360.js";const N={class:"label_container"},T=y({__name:"label",setup(V){let l=["","success","info","danger","warning"],c=x([]);const _=async()=>{let a=await j();u(a.data)},u=a=>{let r=[];a.forEach(t=>{t.tags.forEach(o=>{r.findIndex(g=>g===o)===-1&&r.push(o)})});let e,s;r.forEach(t=>{if(e=Math.round(Math.random()*(l.length-1)),e===s)for(;e===s;)e=Math.round(Math.random()*(l.length-1));let o={type:l[e],label:t};c.value.push(o),s=e})};k(()=>{_()});const f=E();let m=v(()=>f.themeStatus);const h=w(),b=a=>{h.push(`/labelList/${a}`)};return(a,r)=>{const e=z,s=S;return n(),d("div",N,[A(s,{shadow:"hover",class:"label_elCard"},{default:i(()=>[(n(!0),d(C,null,I(p(c),t=>(n(),M(e,{key:t.label,type:t.type,size:"large",effect:p(m)?"dark":"plain",class:"tagItem",onClick:o=>b(t.label)},{default:i(()=>[L(B(t.label),1)]),_:2},1032,["type","effect","onClick"]))),128))]),_:1})])}}});const K=D(T,[["__scopeId","data-v-fa45dc50"]]);export{K as default};
