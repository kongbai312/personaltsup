import{j as de,$ as le,a0 as fe,aK as ue,d as Q,c4 as ce,c5 as ke,c6 as he,q as ve,h as me,ay as be,n as w,c7 as Ie,aH as _e,l as y,R as oe,a5 as pe,o as ge,b as m,i as re,x as o,w as h,e as v,A as i,f as a,av as ie,z as ze,C as b,E as N,k as Le,c as E,X as J,aT as Ce,P as Ee,c8 as Se,c9 as Ne,au as Oe,ca as Te,cb as xe,aa as $e,y as Ae,D as Re,r as K,T as Ve,F as Be,_ as we,H as V,cc as B,cd as Me,G as ye,bt as Ye,aq as F,B as De,m as Xe,bG as He,W as Pe,ce as Fe}from"./index-382c556c.js";import{t as se}from"./throttle-e934e5e8.js";import{u as je}from"./index-2dce88ce.js";import{i as We}from"./position-8fa1b45c.js";import{a as qe}from"./scroll-5d062615.js";const Ge=de({urlList:{type:le(Array),default:()=>fe([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),Ze={close:()=>!0,switch:p=>ue(p)},Ke=["src"],Je=Q({name:"ElImageViewer"}),Qe=Q({...Je,props:Ge,emits:Ze,setup(p,{expose:O,emit:d}){const r=p,T={CONTAIN:{name:"contain",icon:ce(ke)},ORIGINAL:{name:"original",icon:ce(he)}},{t:I}=ve(),s=me("image-viewer"),{nextZIndex:U}=be(),x=w(),S=w([]),_=Ie(),k=w(!0),u=w(r.initialIndex),c=_e(T.CONTAIN),l=w({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),M=y(()=>{const{urlList:e}=r;return e.length<=1}),$=y(()=>u.value===0),j=y(()=>u.value===r.urlList.length-1),ee=y(()=>r.urlList[u.value]),Y=y(()=>{const{scale:e,deg:t,offsetX:n,offsetY:f,enableTransition:L}=l.value;let g=n/e,C=f/e;switch(t%360){case 90:case-270:[g,C]=[C,-g];break;case 180:case-180:[g,C]=[-g,-C];break;case 270:case-90:[g,C]=[-C,g];break}const R={transform:`scale(${e}) rotate(${t}deg) translate(${g}px, ${C}px)`,transition:L?"transform .3s":""};return c.value.name===T.CONTAIN.name&&(R.maxWidth=R.maxHeight="100%"),R}),ae=y(()=>ue(r.zIndex)?r.zIndex:U());function A(){te(),d("close")}function D(){const e=se(n=>{switch(n.code){case V.esc:r.closeOnPressEscape&&A();break;case V.space:H();break;case V.left:G();break;case V.up:z("zoomIn");break;case V.right:Z();break;case V.down:z("zoomOut");break}}),t=se(n=>{const f=n.deltaY||n.deltaX;z(f<0?"zoomIn":"zoomOut",{zoomRate:r.zoomRate,enableTransition:!1})});_.run(()=>{B(document,"keydown",e),B(document,"wheel",t)})}function te(){_.stop()}function ne(){k.value=!1}function W(e){k.value=!1,e.target.alt=I("el.image.error")}function q(e){if(k.value||e.button!==0||!x.value)return;l.value.enableTransition=!1;const{offsetX:t,offsetY:n}=l.value,f=e.pageX,L=e.pageY,g=se(R=>{l.value={...l.value,offsetX:t+R.pageX-f,offsetY:n+R.pageY-L}}),C=B(document,"mousemove",g);B(document,"mouseup",()=>{C()}),e.preventDefault()}function X(){l.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function H(){if(k.value)return;const e=Me(T),t=Object.values(T),n=c.value.name,L=(t.findIndex(g=>g.name===n)+1)%e.length;c.value=T[e[L]],X()}function P(e){const t=r.urlList.length;u.value=(e+t)%t}function G(){$.value&&!r.infinite||P(u.value-1)}function Z(){j.value&&!r.infinite||P(u.value+1)}function z(e,t={}){if(k.value)return;const{zoomRate:n,rotateDeg:f,enableTransition:L}={zoomRate:r.zoomRate,rotateDeg:90,enableTransition:!0,...t};switch(e){case"zoomOut":l.value.scale>.2&&(l.value.scale=Number.parseFloat((l.value.scale/n).toFixed(3)));break;case"zoomIn":l.value.scale<7&&(l.value.scale=Number.parseFloat((l.value.scale*n).toFixed(3)));break;case"clockwise":l.value.deg+=f;break;case"anticlockwise":l.value.deg-=f;break}l.value.enableTransition=L}return oe(ee,()=>{pe(()=>{const e=S.value[0];e!=null&&e.complete||(k.value=!0)})}),oe(u,e=>{X(),d("switch",e)}),ge(()=>{var e,t;D(),(t=(e=x.value)==null?void 0:e.focus)==null||t.call(e)}),O({setActiveItem:P}),(e,t)=>(m(),re(Be,{to:"body",disabled:!e.teleported},[o(Ve,{name:"viewer-fade",appear:""},{default:h(()=>[v("div",{ref_key:"wrapper",ref:x,tabindex:-1,class:i(a(s).e("wrapper")),style:ie({zIndex:a(ae)})},[v("div",{class:i(a(s).e("mask")),onClick:t[0]||(t[0]=ze(n=>e.hideOnClickModal&&A(),["self"]))},null,2),b(" CLOSE "),v("span",{class:i([a(s).e("btn"),a(s).e("close")]),onClick:A},[o(a(N),null,{default:h(()=>[o(a(Le))]),_:1})],2),b(" ARROW "),a(M)?b("v-if",!0):(m(),E(J,{key:0},[v("span",{class:i([a(s).e("btn"),a(s).e("prev"),a(s).is("disabled",!e.infinite&&a($))]),onClick:G},[o(a(N),null,{default:h(()=>[o(a(Ce))]),_:1})],2),v("span",{class:i([a(s).e("btn"),a(s).e("next"),a(s).is("disabled",!e.infinite&&a(j))]),onClick:Z},[o(a(N),null,{default:h(()=>[o(a(Ee))]),_:1})],2)],64)),b(" ACTIONS "),v("div",{class:i([a(s).e("btn"),a(s).e("actions")])},[v("div",{class:i(a(s).e("actions__inner"))},[o(a(N),{onClick:t[1]||(t[1]=n=>z("zoomOut"))},{default:h(()=>[o(a(Se))]),_:1}),o(a(N),{onClick:t[2]||(t[2]=n=>z("zoomIn"))},{default:h(()=>[o(a(Ne))]),_:1}),v("i",{class:i(a(s).e("actions__divider"))},null,2),o(a(N),{onClick:H},{default:h(()=>[(m(),re(Oe(a(c).icon)))]),_:1}),v("i",{class:i(a(s).e("actions__divider"))},null,2),o(a(N),{onClick:t[3]||(t[3]=n=>z("anticlockwise"))},{default:h(()=>[o(a(Te))]),_:1}),o(a(N),{onClick:t[4]||(t[4]=n=>z("clockwise"))},{default:h(()=>[o(a(xe))]),_:1})],2)],2),b(" CANVAS "),v("div",{class:i(a(s).e("canvas"))},[(m(!0),E(J,null,$e(e.urlList,(n,f)=>Ae((m(),E("img",{ref_for:!0,ref:L=>S.value[f]=L,key:n,src:n,style:ie(a(Y)),class:i(a(s).e("img")),onLoad:ne,onError:W,onMousedown:q},null,46,Ke)),[[Re,f===u.value]])),128))],2),K(e.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var Ue=we(Qe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const ea=ye(Ue),aa=de({hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:{type:Boolean,default:!1},scrollContainer:{type:le([String,Object])},previewSrcList:{type:le(Array),default:()=>fe([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),ta={load:p=>p instanceof Event,error:p=>p instanceof Event,switch:p=>ue(p),close:()=>!0,show:()=>!0},na=["src","loading"],sa={key:0},la=Q({name:"ElImage",inheritAttrs:!1}),oa=Q({...la,props:aa,emits:ta,setup(p,{emit:O}){const d=p;let r="";const{t:T}=ve(),I=me("image"),s=Ye(),U=je(),x=w(),S=w(!1),_=w(!0),k=w(!1),u=w(),c=w(),l=F&&"loading"in HTMLImageElement.prototype;let M,$;const j=y(()=>s.style),ee=y(()=>{const{fit:e}=d;return F&&e?{objectFit:e}:{}}),Y=y(()=>{const{previewSrcList:e}=d;return Array.isArray(e)&&e.length>0}),ae=y(()=>{const{previewSrcList:e,initialIndex:t}=d;let n=t;return t>e.length-1&&(n=0),n}),A=y(()=>d.loading==="eager"?!1:!l&&d.loading==="lazy"||d.lazy),D=()=>{F&&(_.value=!0,S.value=!1,x.value=d.src)};function te(e){_.value=!1,S.value=!1,O("load",e)}function ne(e){_.value=!1,S.value=!0,O("error",e)}function W(){We(u.value,c.value)&&(D(),H())}const q=Fe(W,200,!0);async function X(){var e;if(!F)return;await pe();const{scrollContainer:t}=d;He(t)?c.value=t:Pe(t)&&t!==""?c.value=(e=document.querySelector(t))!=null?e:void 0:u.value&&(c.value=qe(u.value)),c.value&&(M=B(c,"scroll",q),setTimeout(()=>W(),100))}function H(){!F||!c.value||!q||(M==null||M(),c.value=void 0)}function P(e){if(e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function G(){Y.value&&($=B("wheel",P,{passive:!1}),r=document.body.style.overflow,document.body.style.overflow="hidden",k.value=!0,O("show"))}function Z(){$==null||$(),document.body.style.overflow=r,k.value=!1,O("close")}function z(e){O("switch",e)}return oe(()=>d.src,()=>{A.value?(_.value=!0,S.value=!1,H(),X()):D()}),ge(()=>{A.value?X():D()}),(e,t)=>(m(),E("div",{ref_key:"container",ref:u,class:i([a(I).b(),e.$attrs.class]),style:ie(a(j))},[S.value?K(e.$slots,"error",{key:0},()=>[v("div",{class:i(a(I).e("error"))},De(a(T)("el.image.error")),3)]):(m(),E(J,{key:1},[x.value!==void 0?(m(),E("img",Xe({key:0},a(U),{src:x.value,loading:e.loading,style:a(ee),class:[a(I).e("inner"),a(Y)&&a(I).e("preview"),_.value&&a(I).is("loading")],onClick:G,onLoad:te,onError:ne}),null,16,na)):b("v-if",!0),_.value?(m(),E("div",{key:1,class:i(a(I).e("wrapper"))},[K(e.$slots,"placeholder",{},()=>[v("div",{class:i(a(I).e("placeholder"))},null,2)])],2)):b("v-if",!0)],64)),a(Y)?(m(),E(J,{key:2},[k.value?(m(),re(a(ea),{key:0,"z-index":e.zIndex,"initial-index":a(ae),infinite:e.infinite,"zoom-rate":e.zoomRate,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:Z,onSwitch:z},{default:h(()=>[e.$slots.viewer?(m(),E("div",sa,[K(e.$slots,"viewer")])):b("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):b("v-if",!0)],64)):b("v-if",!0)],6))}});var ra=we(oa,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const va=ye(ra);export{va as E};
