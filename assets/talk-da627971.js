import{d as w,s as L,o as y,b as e,c as n,z as c,f as m,e as t,w as p,Z as h,ab as u,j as f,D as a,F as B,a8 as g,p as C,g as E,_ as T}from"./index-fc725d61.js";import{E as V}from"./el-card-33d2578d.js";import{E as z}from"./el-image-viewer-701a57b5.js";import{_ as N}from"./pr_headerImg-aeb26ef1.js";import{e as S}from"./index-652fcb89.js";import"./throttle-723f6b2f.js";import"./debounce-eddc59ba.js";import"./index-1018f5a7.js";import"./position-d05d0f69.js";import"./scroll-23a40b9a.js";import"./axios-4a70c6fc.js";import"./_commonjsHelpers-042e6b4d.js";const D=""+new URL("bigV-e1c9d3d0.png",import.meta.url).href,i=o=>(C("data-v-afb5027e"),o=o(),E(),o),j={class:"talk_container"},A={class:"talk_content"},F={class:"talkItem"},M={class:"talkItem_header"},R={class:"header_content"},U={class:"name"},Z=i(()=>t("img",{class:"nameImg",src:D,alt:""},null,-1)),q={class:"createTime"},G={class:"talkItem_content"},H={class:"text"},J={key:0,class:"imgBox"},K={class:"discord"},O={class:"discordItem"},P=i(()=>t("i",{class:"iconfont icon-dianzan"},null,-1)),Q={class:"discordItem"},W=i(()=>t("i",{class:"iconfont icon-pinglun"},null,-1)),X=w({__name:"talk",setup(o){let v="https://img-baofun.zhhainiao.com/fs/bfec7f6af878a00db3eca7706ae983aa.jpg",l=L();const k=async()=>{let r=await S();l.value=r.data.reverse()};return y(()=>{k()}),(r,Y)=>{const I=N,_=z,d=V;return e(),n("div",j,[c(I,{img:m(v),titleArr:["说","说"]},null,8,["img"]),t("div",A,[c(d,{shadow:"hover",class:"talkList"},{default:p(()=>[(e(!0),n(h,null,u(m(l),s=>(e(),f(d,{shadow:"hover",class:"talkItem_elCard",key:s.id},{default:p(()=>[t("div",F,[t("div",M,[c(_,{fit:"cover",class:"headerImg",src:s.avatar,alt:""},null,8,["src"]),t("div",R,[t("div",U,[t("span",null,a(s.name),1),Z]),t("span",q,a(s.createTime),1)])]),t("div",G,[t("span",H,a(s.text),1),s.imageList.length>0?(e(),n("div",J,[(e(!0),n(h,null,u(s.imageList,(x,b)=>(e(),f(_,{lazy:"",fit:"cover",class:"imgItem",src:x,"preview-src-list":s.imageList,"initial-index":b,alt:""},null,8,["src","preview-src-list","initial-index"]))),256))])):B("",!0),t("div",K,[t("span",O,[P,g(a(s.like),1)]),t("span",Q,[W,g(a(s.comment),1)])])])])]),_:2},1024))),128))]),_:1})])])}}});const dt=T(X,[["__scopeId","data-v-afb5027e"]]);export{dt as default};
