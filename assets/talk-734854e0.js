import{d as b,l as L,o as y,b as e,c as n,s as c,f as m,e as t,w as p,P as h,a1 as u,i as f,z as a,A as B,Z as g,p as C,g as E}from"./index-ae23ef46.js";import{E as T}from"./el-card-35757019.js";import{E as V}from"./el-image-viewer-1cb1cd06.js";import{_ as z}from"./pr_headerImg-2227746a.js";import{i as N}from"./index-d1312783.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-a21c3982.js";import"./index-a2fdb93b.js";import"./index-0d833cd1.js";import"./isObject-5520b7e1.js";import"./throttle-bde9afc3.js";import"./scroll-fd71bb0b.js";const A=""+new URL("bigV-e1c9d3d0.png",import.meta.url).href,i=o=>(C("data-v-afb5027e"),o=o(),E(),o),D={class:"talk_container"},j={class:"talk_content"},F={class:"talkItem"},M={class:"talkItem_header"},P={class:"header_content"},R={class:"name"},U=i(()=>t("img",{class:"nameImg",src:A,alt:""},null,-1)),Z={class:"createTime"},q={class:"talkItem_content"},G={class:"text"},H={key:0,class:"imgBox"},J={class:"discord"},K={class:"discordItem"},O=i(()=>t("i",{class:"iconfont icon-dianzan"},null,-1)),Q={class:"discordItem"},W=i(()=>t("i",{class:"iconfont icon-pinglun"},null,-1)),X=b({__name:"talk",setup(o){let v="https://img-baofun.zhhainiao.com/fs/bfec7f6af878a00db3eca7706ae983aa.jpg",l=L();const k=async()=>{let r=await N();l.value=r.data.reverse()};return y(()=>{k()}),(r,Y)=>{const I=z,_=V,d=T;return e(),n("div",D,[c(I,{img:m(v),titleArr:["说","说"]},null,8,["img"]),t("div",j,[c(d,{shadow:"hover",class:"talkList"},{default:p(()=>[(e(!0),n(h,null,u(m(l),s=>(e(),f(d,{shadow:"hover",class:"talkItem_elCard",key:s.id},{default:p(()=>[t("div",F,[t("div",M,[c(_,{fit:"cover",class:"headerImg",src:s.avatar,alt:""},null,8,["src"]),t("div",P,[t("div",R,[t("span",null,a(s.name),1),U]),t("span",Z,a(s.createTime),1)])]),t("div",q,[t("span",G,a(s.text),1),s.imageList.length>0?(e(),n("div",H,[(e(!0),n(h,null,u(s.imageList,(x,w)=>(e(),f(_,{lazy:"",fit:"cover",class:"imgItem",src:x,"preview-src-list":s.imageList,"initial-index":w,alt:""},null,8,["src","preview-src-list","initial-index"]))),256))])):B("",!0),t("div",J,[t("span",K,[O,g(a(s.like),1)]),t("span",Q,[W,g(a(s.comment),1)])])])])]),_:2},1024))),128))]),_:1})])])}}});const dt=S(X,[["__scopeId","data-v-afb5027e"]]);export{dt as default};
