import{aq as ke,n as C,M as xe,l as f,o as Pe,R as X,a6 as Ve,aG as Ke,aE as we,j as We,bj as Ue,$ as G,L as Se,a0 as Ye,W as ee,d as Fe,bt as Xe,ah as qe,h as Ie,aC as te,b$ as Je,c0 as Qe,c1 as Ze,a2 as Ge,a5 as V,aY as Ce,y as et,D as tt,f as p,c as w,C as m,X as ae,A as b,e as t,r as W,b as F,i as I,w as M,au as U,E as A,m as oe,x as at,a$ as ot,z as nt,at as st,B as Y,av as lt,_ as it,a4 as ze,G as rt}from"./index-54b2a01e.js";import{u as ut,U as ne,i as ct}from"./index-61abcfa7.js";import{u as dt}from"./index-116fa7c4.js";import{f as pt,a as ft}from"./constants-84857360.js";import{u as vt,a as mt}from"./use-form-common-props-e279b422.js";const ht=()=>ke&&/firefox/i.test(window.navigator.userAgent),yt=o=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o);function bt(o){const l=C();function r(){if(o.value==null)return;const{selectionStart:s,selectionEnd:u,value:d}=o.value;if(s==null||u==null)return;const y=d.slice(0,Math.max(0,s)),c=d.slice(Math.max(0,u));l.value={selectionStart:s,selectionEnd:u,value:d,beforeTxt:y,afterTxt:c}}function a(){if(o.value==null||l.value==null)return;const{value:s}=o.value,{beforeTxt:u,afterTxt:d,selectionStart:y}=l.value;if(u==null||d==null||y==null)return;let c=s.length;if(s.endsWith(d))c=s.length-d.length;else if(s.startsWith(u))c=u.length;else{const h=u[y-1],z=s.indexOf(h,y-1);z!==-1&&(c=z+1)}o.value.setSelectionRange(c,c)}return[r,a]}const gt=()=>{const o=xe(pt,void 0),l=xe(ft,void 0);return{form:o,formItem:l}},xt=(o,{formItemContext:l,disableIdGeneration:r,disableIdManagement:a})=>{r||(r=C(!1)),a||(a=C(!1));const s=C();let u;const d=f(()=>{var y;return!!(!o.label&&l&&l.inputIds&&((y=l.inputIds)==null?void 0:y.length)<=1)});return Pe(()=>{u=X([Ve(o,"id"),r],([y,c])=>{const h=y??(c?void 0:ut().value);h!==s.value&&(l!=null&&l.removeInputId&&(s.value&&l.removeInputId(s.value),!(a!=null&&a.value)&&!c&&h&&l.addInputId(h)),s.value=h)},{immediate:!0})}),Ke(()=>{u&&u(),l!=null&&l.removeInputId&&s.value&&l.removeInputId(s.value)}),{isLabeledByFormItem:d,inputId:s}};let g;const wt=`
  height:0 !important;
  visibility:hidden !important;
  ${ht()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,St=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function It(o){const l=window.getComputedStyle(o),r=l.getPropertyValue("box-sizing"),a=Number.parseFloat(l.getPropertyValue("padding-bottom"))+Number.parseFloat(l.getPropertyValue("padding-top")),s=Number.parseFloat(l.getPropertyValue("border-bottom-width"))+Number.parseFloat(l.getPropertyValue("border-top-width"));return{contextStyle:St.map(d=>`${d}:${l.getPropertyValue(d)}`).join(";"),paddingSize:a,borderSize:s,boxSizing:r}}function Ee(o,l=1,r){var a;g||(g=document.createElement("textarea"),document.body.appendChild(g));const{paddingSize:s,borderSize:u,boxSizing:d,contextStyle:y}=It(o);g.setAttribute("style",`${y};${wt}`),g.value=o.value||o.placeholder||"";let c=g.scrollHeight;const h={};d==="border-box"?c=c+u:d==="content-box"&&(c=c-s),g.value="";const z=g.scrollHeight-s;if(we(l)){let v=z*l;d==="border-box"&&(v=v+s+u),c=Math.max(v,c),h.minHeight=`${v}px`}if(we(r)){let v=z*r;d==="border-box"&&(v=v+s+u),c=Math.min(v,c)}return h.height=`${c}px`,(a=g.parentNode)==null||a.removeChild(g),g=void 0,h}const Ct=We({id:{type:String,default:void 0},size:Ue,disabled:Boolean,modelValue:{type:G([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:G([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Se},prefixIcon:{type:Se},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:G([Object,Array,String]),default:()=>Ye({})}}),zt={[ne]:o=>ee(o),input:o=>ee(o),change:o=>ee(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},Et=["role"],kt=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],Pt=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],Vt=Fe({name:"ElInput",inheritAttrs:!1}),Ft=Fe({...Vt,props:Ct,emits:zt,setup(o,{expose:l,emit:r}){const a=o,s=Xe(),u=qe(),d=f(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=s["aria-haspopup"],e["aria-owns"]=s["aria-owns"],e["aria-expanded"]=s["aria-expanded"]),e}),y=f(()=>[a.type==="textarea"?le.b():n.b(),n.m(Ne.value),n.is("disabled",k.value),n.is("exceed",Be.value),{[n.b("group")]:u.prepend||u.append,[n.bm("group","append")]:u.append,[n.bm("group","prepend")]:u.prepend,[n.m("prefix")]:u.prefix||a.prefixIcon,[n.m("suffix")]:u.suffix||a.suffixIcon||a.clearable||a.showPassword,[n.bm("suffix","password-clear")]:L.value&&J.value},s.class]),c=f(()=>[n.e("wrapper"),n.is("focus",N.value)]),h=dt({excludeKeys:f(()=>Object.keys(d.value))}),{form:z,formItem:v}=gt(),{inputId:se}=xt(a,{formItemContext:v}),Ne=vt(),k=mt(),n=Ie("input"),le=Ie("textarea"),H=te(),S=te(),N=C(!1),q=C(!1),$=C(!1),O=C(!1),ie=C(),D=te(a.inputStyle),T=f(()=>H.value||S.value),re=f(()=>{var e;return(e=z==null?void 0:z.statusIcon)!=null?e:!1}),B=f(()=>(v==null?void 0:v.validateState)||""),ue=f(()=>B.value&&Je[B.value]),$e=f(()=>O.value?Qe:Ze),Te=f(()=>[s.style,a.inputStyle]),ce=f(()=>[a.inputStyle,D.value,{resize:a.resize}]),E=f(()=>ct(a.modelValue)?"":String(a.modelValue)),L=f(()=>a.clearable&&!k.value&&!a.readonly&&!!E.value&&(N.value||q.value)),J=f(()=>a.showPassword&&!k.value&&!a.readonly&&!!E.value&&(!!E.value||N.value)),P=f(()=>a.showWordLimit&&!!h.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!k.value&&!a.readonly&&!a.showPassword),Q=f(()=>E.value.length),Be=f(()=>!!P.value&&Q.value>Number(h.value.maxlength)),Re=f(()=>!!u.suffix||!!a.suffixIcon||L.value||a.showPassword||P.value||!!B.value&&re.value),[_e,Me]=bt(H);Ge(S,e=>{if(Ae(),!P.value||a.resize!=="both")return;const i=e[0],{width:x}=i.contentRect;ie.value={right:`calc(100% - ${x+15+6}px)`}});const R=()=>{const{type:e,autosize:i}=a;if(!(!ke||e!=="textarea"||!S.value))if(i){const x=ze(i)?i.minRows:void 0,K=ze(i)?i.maxRows:void 0,ge=Ee(S.value,x,K);D.value={overflowY:"hidden",...ge},V(()=>{S.value.offsetHeight,D.value=ge})}else D.value={minHeight:Ee(S.value).minHeight}},Ae=(e=>{let i=!1;return()=>{var x;if(i||!a.autosize)return;((x=S.value)==null?void 0:x.offsetParent)===null||(e(),i=!0)}})(R),_=()=>{const e=T.value;!e||e.value===E.value||(e.value=E.value)},Z=async e=>{_e();let{value:i}=e.target;if(a.formatter&&(i=a.parser?a.parser(i):i,i=a.formatter(i)),!$.value){if(i===E.value){_();return}r(ne,i),r("input",i),await V(),_(),Me()}},de=e=>{r("change",e.target.value)},pe=e=>{r("compositionstart",e),$.value=!0},fe=e=>{var i;r("compositionupdate",e);const x=(i=e.target)==null?void 0:i.value,K=x[x.length-1]||"";$.value=!yt(K)},ve=e=>{r("compositionend",e),$.value&&($.value=!1,Z(e))},He=()=>{O.value=!O.value,j()},j=async()=>{var e;await V(),(e=T.value)==null||e.focus()},Oe=()=>{var e;return(e=T.value)==null?void 0:e.blur()},me=e=>{N.value=!0,r("focus",e)},he=e=>{var i;N.value=!1,r("blur",e),a.validateEvent&&((i=v==null?void 0:v.validate)==null||i.call(v,"blur").catch(x=>Ce()))},De=e=>{q.value=!1,r("mouseleave",e)},Le=e=>{q.value=!0,r("mouseenter",e)},ye=e=>{r("keydown",e)},je=()=>{var e;(e=T.value)==null||e.select()},be=()=>{r(ne,""),r("change",""),r("clear"),r("input","")};return X(()=>a.modelValue,()=>{var e;V(()=>R()),a.validateEvent&&((e=v==null?void 0:v.validate)==null||e.call(v,"change").catch(i=>Ce()))}),X(E,()=>_()),X(()=>a.type,async()=>{await V(),_(),R()}),Pe(()=>{!a.formatter&&a.parser,_(),V(R)}),l({input:H,textarea:S,ref:T,textareaStyle:ce,autosize:Ve(a,"autosize"),focus:j,blur:Oe,select:je,clear:be,resizeTextarea:R}),(e,i)=>et((p(),w("div",oe(t(d),{class:t(y),style:t(Te),role:e.containerRole,onMouseenter:Le,onMouseleave:De}),[m(" input "),e.type!=="textarea"?(p(),w(ae,{key:0},[m(" prepend slot "),e.$slots.prepend?(p(),w("div",{key:0,class:b(t(n).be("group","prepend"))},[W(e.$slots,"prepend")],2)):m("v-if",!0),F("div",{class:b(t(c))},[m(" prefix slot "),e.$slots.prefix||e.prefixIcon?(p(),w("span",{key:0,class:b(t(n).e("prefix"))},[F("span",{class:b(t(n).e("prefix-inner")),onClick:j},[W(e.$slots,"prefix"),e.prefixIcon?(p(),I(t(A),{key:0,class:b(t(n).e("icon"))},{default:M(()=>[(p(),I(U(e.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),F("input",oe({id:t(se),ref_key:"input",ref:H,class:t(n).e("inner")},t(h),{type:e.showPassword?O.value?"text":"password":e.type,disabled:t(k),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:a.form,onCompositionstart:pe,onCompositionupdate:fe,onCompositionend:ve,onInput:Z,onFocus:me,onBlur:he,onChange:de,onKeydown:ye}),null,16,kt),m(" suffix slot "),t(Re)?(p(),w("span",{key:1,class:b(t(n).e("suffix"))},[F("span",{class:b(t(n).e("suffix-inner")),onClick:j},[!t(L)||!t(J)||!t(P)?(p(),w(ae,{key:0},[W(e.$slots,"suffix"),e.suffixIcon?(p(),I(t(A),{key:0,class:b(t(n).e("icon"))},{default:M(()=>[(p(),I(U(e.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),t(L)?(p(),I(t(A),{key:1,class:b([t(n).e("icon"),t(n).e("clear")]),onMousedown:nt(t(st),["prevent"]),onClick:be},{default:M(()=>[at(t(ot))]),_:1},8,["class","onMousedown"])):m("v-if",!0),t(J)?(p(),I(t(A),{key:2,class:b([t(n).e("icon"),t(n).e("password")]),onClick:He},{default:M(()=>[(p(),I(U(t($e))))]),_:1},8,["class"])):m("v-if",!0),t(P)?(p(),w("span",{key:3,class:b(t(n).e("count"))},[F("span",{class:b(t(n).e("count-inner"))},Y(t(Q))+" / "+Y(t(h).maxlength),3)],2)):m("v-if",!0),t(B)&&t(ue)&&t(re)?(p(),I(t(A),{key:4,class:b([t(n).e("icon"),t(n).e("validateIcon"),t(n).is("loading",t(B)==="validating")])},{default:M(()=>[(p(),I(U(t(ue))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),e.$slots.append?(p(),w("div",{key:1,class:b(t(n).be("group","append"))},[W(e.$slots,"append")],2)):m("v-if",!0)],64)):(p(),w(ae,{key:1},[m(" textarea "),F("textarea",oe({id:t(se),ref_key:"textarea",ref:S,class:t(le).e("inner")},t(h),{tabindex:e.tabindex,disabled:t(k),readonly:e.readonly,autocomplete:e.autocomplete,style:t(ce),"aria-label":e.label,placeholder:e.placeholder,form:a.form,onCompositionstart:pe,onCompositionupdate:fe,onCompositionend:ve,onInput:Z,onFocus:me,onBlur:he,onChange:de,onKeydown:ye}),null,16,Pt),t(P)?(p(),w("span",{key:0,style:lt(ie.value),class:b(t(n).e("count"))},Y(t(Q))+" / "+Y(t(h).maxlength),7)):m("v-if",!0)],64))],16,Et)),[[tt,e.type!=="hidden"]])}});var Nt=it(Ft,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const At=rt(Nt);export{At as E,xt as a,yt as i,gt as u};