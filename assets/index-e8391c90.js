import{l as w,aV as T,d as v,i as N,q as V,b as l,c as I,e as t,r as m,C as o,f as a,j as c,w as r,z as k,n as g,B as C,E as y,F as b,aw as h,T as M,k as $,I as F}from"./index-fc725d61.js";import{u as P}from"./use-form-common-props-2d749c1e.js";const j=w({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:T,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),q={close:n=>n instanceof MouseEvent,click:n=>n instanceof MouseEvent},K=v({name:"ElTag"}),A=v({...K,props:j,emits:q,setup(n,{emit:i}){const B=n,E=P(),s=N("tag"),u=V(()=>{const{type:e,hit:f,effect:S,closable:_,round:z}=B;return[s.b(),s.is("closable",_),s.m(e),s.m(E.value),s.m(S),s.is("hit",f),s.is("round",z)]}),p=e=>{i("close",e)},d=e=>{i("click",e)};return(e,f)=>e.disableTransitions?(l(),I("span",{key:0,class:o(a(u)),style:h({backgroundColor:e.color}),onClick:d},[t("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(l(),c(a(y),{key:0,class:o(a(s).e("close")),onClick:C(p,["stop"])},{default:r(()=>[k(a(g))]),_:1},8,["class","onClick"])):b("v-if",!0)],6)):(l(),c(M,{key:1,name:`${a(s).namespace.value}-zoom-in-center`,appear:""},{default:r(()=>[t("span",{class:o(a(u)),style:h({backgroundColor:e.color}),onClick:d},[t("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(l(),c(a(y),{key:0,class:o(a(s).e("close")),onClick:C(p,["stop"])},{default:r(()=>[k(a(g))]),_:1},8,["class","onClick"])):b("v-if",!0)],6)]),_:3},8,["name"]))}});var D=$(A,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const J=F(D);export{J as E,j as t};
