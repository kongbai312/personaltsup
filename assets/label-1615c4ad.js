import{d as y,n as x,o as k,a as E,l as v,u as w,c as i,x as A,w as d,f as n,X as C,aa as I,e as p,i as M,a7 as B,B as L}from"./index-54b2a01e.js";import{E as S}from"./el-card-7688ffcb.js";import{E as D}from"./el-tag-33b94648.js";import{a as N}from"./index-b5140b1a.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import"./use-form-common-props-e279b422.js";import"./constants-84857360.js";import"./axios-4a70c6fc.js";import"./_commonjsHelpers-042e6b4d.js";const V={class:"label_container"},$=y({__name:"label",setup(j){let l=["","success","info","danger","warning"],c=x([]);const _=async()=>{let a=await N();u(a.data)},u=a=>{let r=[];a.forEach(t=>{t.tags.forEach(o=>{r.findIndex(b=>b===o)===-1&&r.push(o)})});let e,s;r.forEach(t=>{if(e=Math.round(Math.random()*(l.length-1)),e===s)for(;e===s;)e=Math.round(Math.random()*(l.length-1));let o={type:l[e],label:t};c.value.push(o),s=e})};k(()=>{_()});const f=E();let m=v(()=>f.themeStatus);const h=w(),g=a=>{h.push(`/labelList/${a}`)};return(a,r)=>{const e=D,s=S;return n(),i("div",V,[A(s,{shadow:"hover",class:"label_elCard"},{default:d(()=>[(n(!0),i(C,null,I(p(c),t=>(n(),M(e,{key:t.label,type:t.type,size:"large",effect:p(m)?"dark":"plain",class:"tagItem",onClick:o=>g(t.label)},{default:d(()=>[B(L(t.label),1)]),_:2},1032,["type","effect","onClick"]))),128))]),_:1})])}}});const K=T($,[["__scopeId","data-v-fa45dc50"]]);export{K as default};
