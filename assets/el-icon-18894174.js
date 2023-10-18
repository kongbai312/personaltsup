import{ao as de,o as te,a1 as fe,U as me,s as j,ab as pe,N as ve,h as K,ap as ye,aq as se,K as G,R as H,ar as ge,I as he,as as be,J as Ce,at as q,j as Z,$ as W,d as P,x as T,r as C,V as we,L as Ee,q as ke,M as J,l as A,f as S,c as Y,b as O,A as E,e as o,B as _e,w as b,i as X,au as Ie,E as De,C as x,av as ne,_ as ae,aw as Me,ax as Se,ay as Be,n as B,az as Te,aA as $e,a5 as Le,Y as Fe,Z as Q,ah as Ae,S as Oe,y as Pe,m as Re,ak as ze,D as Ne,T as Ve,F as Ye,G as qe,p as Ue,g as je}from"./index-54b2a01e.js";import{E as He}from"./el-image-viewer-dc0d34ab.js";import{P as U}from"./vnode-ea9339ba.js";import{F as We,u as ee,E as Xe}from"./focus-trap-5407a7c0.js";import{U as le,u as oe}from"./index-61abcfa7.js";import{g as xe}from"./scroll-84e16846.js";import{_ as Ke}from"./_plugin-vue_export-helper-c27b6911.js";const Ze=(...e)=>t=>{e.forEach(a=>{de(a)?a(t):a.value=t})},Ge=(e,t,a)=>{let s={offsetX:0,offsetY:0};const u=l=>{const d=l.clientX,p=l.clientY,{offsetX:f,offsetY:v}=s,n=e.value.getBoundingClientRect(),m=n.left,k=n.top,R=n.width,z=n.height,N=document.documentElement.clientWidth,$=document.documentElement.clientHeight,V=-m+f,L=-k+v,_=N-m-R+f,I=$-k-z+v,F=w=>{const c=Math.min(Math.max(f+w.clientX-d,V),_),h=Math.min(Math.max(v+w.clientY-p,L),I);s={offsetX:c,offsetY:h},e.value.style.transform=`translate(${j(c)}, ${j(h)})`},y=()=>{document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",F),document.addEventListener("mouseup",y)},i=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",u)},r=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",u)};te(()=>{fe(()=>{a.value?i():r()})}),me(()=>{r()})},Je=(e,t={})=>{pe(e)||ve("[useLockscreen]","You need to pass a ref param to this function");const a=t.ns||K("popup"),s=ye(()=>a.bm("parent","hidden"));if(!se||G(document.body,s.value))return;let u=0,i=!1,r="0";const l=()=>{setTimeout(()=>{Ce(document==null?void 0:document.body,s.value),i&&document&&(document.body.style.width=r)},200)};H(e,d=>{if(!d){l();return}i=!G(document.body,s.value),i&&(r=document.body.style.width),u=xe(a.namespace.value);const p=document.documentElement.clientHeight<document.body.scrollHeight,f=ge(document.body,"overflowY");u>0&&(p||f==="scroll")&&i&&(document.body.style.width=`calc(100% - ${u}px)`),he(document.body,s.value)}),be(()=>l())},ce=e=>{if(!e)return{onClick:q,onMousedown:q,onMouseup:q};let t=!1,a=!1;return{onClick:r=>{t&&a&&e(r),t=a=!1},onMousedown:r=>{t=r.target===r.currentTarget},onMouseup:r=>{a=r.target===r.currentTarget}}},Qe=Z({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:W([String,Array,Object])},zIndex:{type:W([String,Number])}}),eo={click:e=>e instanceof MouseEvent},oo="overlay";var to=P({name:"ElOverlay",props:Qe,emits:eo,setup(e,{slots:t,emit:a}){const s=K(oo),u=d=>{a("click",d)},{onClick:i,onMousedown:r,onMouseup:l}=ce(e.customMaskEvent?void 0:u);return()=>e.mask?T("div",{class:[s.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:i,onMousedown:r,onMouseup:l},[C(t,"default")],U.STYLE|U.CLASS|U.PROPS,["onClick","onMouseup","onMousedown"]):we("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[C(t,"default")])}});const so=to,re=Symbol("dialogInjectionKey"),ue=Z({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:Ee},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),no={close:()=>!0},ao=["aria-label"],lo=["id"],co=P({name:"ElDialogContent"}),ro=P({...co,props:ue,emits:no,setup(e){const t=e,{t:a}=ke(),{Close:s}=Me,{dialogRef:u,headerRef:i,bodyId:r,ns:l,style:d}=J(re),{focusTrapRef:p}=J(We),f=Ze(p,u),v=A(()=>t.draggable);return Ge(u,i,v),(n,m)=>(S(),Y("div",{ref:o(f),class:E([o(l).b(),o(l).is("fullscreen",n.fullscreen),o(l).is("draggable",o(v)),o(l).is("align-center",n.alignCenter),{[o(l).m("center")]:n.center},n.customClass]),style:ne(o(d)),tabindex:"-1"},[O("header",{ref_key:"headerRef",ref:i,class:E(o(l).e("header"))},[C(n.$slots,"header",{},()=>[O("span",{role:"heading",class:E(o(l).e("title"))},_e(n.title),3)]),n.showClose?(S(),Y("button",{key:0,"aria-label":o(a)("el.dialog.close"),class:E(o(l).e("headerbtn")),type:"button",onClick:m[0]||(m[0]=k=>n.$emit("close"))},[T(o(De),{class:E(o(l).e("close"))},{default:b(()=>[(S(),X(Ie(n.closeIcon||o(s))))]),_:1},8,["class"])],10,ao)):x("v-if",!0)],2),O("div",{id:o(r),class:E(o(l).e("body"))},[C(n.$slots,"default")],10,lo),n.$slots.footer?(S(),Y("footer",{key:0,class:E(o(l).e("footer"))},[C(n.$slots,"footer")],2)):x("v-if",!0)],6))}});var uo=ae(ro,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const io=Z({...ue,appendToBody:{type:Boolean,default:!1},beforeClose:{type:W(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),fo={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[le]:e=>Se(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},mo=(e,t)=>{const s=Fe().emit,{nextZIndex:u}=Be();let i="";const r=oe(),l=oe(),d=B(!1),p=B(!1),f=B(!1),v=B(e.zIndex||u());let n,m;const k=Te("namespace",$e),R=A(()=>{const g={},M=`--${k.value}-dialog`;return e.fullscreen||(e.top&&(g[`${M}-margin-top`]=e.top),e.width&&(g[`${M}-width`]=j(e.width))),g}),z=A(()=>e.alignCenter?{display:"flex"}:{});function N(){s("opened")}function $(){s("closed"),s(le,!1),e.destroyOnClose&&(f.value=!1)}function V(){s("close")}function L(){m==null||m(),n==null||n(),e.openDelay&&e.openDelay>0?{stop:n}=Q(()=>y(),e.openDelay):y()}function _(){n==null||n(),m==null||m(),e.closeDelay&&e.closeDelay>0?{stop:m}=Q(()=>w(),e.closeDelay):w()}function I(){function g(M){M||(p.value=!0,d.value=!1)}e.beforeClose?e.beforeClose(g):_()}function F(){e.closeOnClickModal&&I()}function y(){se&&(d.value=!0)}function w(){d.value=!1}function c(){s("openAutoFocus")}function h(){s("closeAutoFocus")}function D(g){var M;((M=g.detail)==null?void 0:M.focusReason)==="pointer"&&g.preventDefault()}e.lockScroll&&Je(d);function ie(){e.closeOnPressEscape&&I()}return H(()=>e.modelValue,g=>{g?(p.value=!1,L(),f.value=!0,v.value=e.zIndex?v.value++:u(),Le(()=>{s("open"),t.value&&(t.value.scrollTop=0)})):d.value&&_()}),H(()=>e.fullscreen,g=>{t.value&&(g?(i=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=i)}),te(()=>{e.modelValue&&(d.value=!0,f.value=!0,L())}),{afterEnter:N,afterLeave:$,beforeLeave:V,handleClose:I,onModalClick:F,close:_,doClose:w,onOpenAutoFocus:c,onCloseAutoFocus:h,onCloseRequested:ie,onFocusoutPrevented:D,titleId:r,bodyId:l,closed:p,style:R,overlayDialogStyle:z,rendered:f,visible:d,zIndex:v}},po=["aria-label","aria-labelledby","aria-describedby"],vo=P({name:"ElDialog",inheritAttrs:!1}),yo=P({...vo,props:io,emits:fo,setup(e,{expose:t}){const a=e,s=Ae();ee({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},A(()=>!!s.title)),ee({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},A(()=>!!a.customClass));const u=K("dialog"),i=B(),r=B(),l=B(),{visible:d,titleId:p,bodyId:f,style:v,overlayDialogStyle:n,rendered:m,zIndex:k,afterEnter:R,afterLeave:z,beforeLeave:N,handleClose:$,onModalClick:V,onOpenAutoFocus:L,onCloseAutoFocus:_,onCloseRequested:I,onFocusoutPrevented:F}=mo(a,i);Oe(re,{dialogRef:i,headerRef:r,bodyId:f,ns:u,rendered:m,style:v});const y=ce(V),w=A(()=>a.draggable&&!a.fullscreen);return t({visible:d,dialogContentRef:l}),(c,h)=>(S(),X(Ye,{to:"body",disabled:!c.appendToBody},[T(Ve,{name:"dialog-fade",onAfterEnter:o(R),onAfterLeave:o(z),onBeforeLeave:o(N),persisted:""},{default:b(()=>[Pe(T(o(so),{"custom-mask-event":"",mask:c.modal,"overlay-class":c.modalClass,"z-index":o(k)},{default:b(()=>[O("div",{role:"dialog","aria-modal":"true","aria-label":c.title||void 0,"aria-labelledby":c.title?void 0:o(p),"aria-describedby":o(f),class:E(`${o(u).namespace.value}-overlay-dialog`),style:ne(o(n)),onClick:h[0]||(h[0]=(...D)=>o(y).onClick&&o(y).onClick(...D)),onMousedown:h[1]||(h[1]=(...D)=>o(y).onMousedown&&o(y).onMousedown(...D)),onMouseup:h[2]||(h[2]=(...D)=>o(y).onMouseup&&o(y).onMouseup(...D))},[T(o(Xe),{loop:"",trapped:o(d),"focus-start-el":"container",onFocusAfterTrapped:o(L),onFocusAfterReleased:o(_),onFocusoutPrevented:o(F),onReleaseRequested:o(I)},{default:b(()=>[o(m)?(S(),X(uo,Re({key:0,ref_key:"dialogContentRef",ref:l},c.$attrs,{"custom-class":c.customClass,center:c.center,"align-center":c.alignCenter,"close-icon":c.closeIcon,draggable:o(w),fullscreen:c.fullscreen,"show-close":c.showClose,title:c.title,onClose:o($)}),ze({header:b(()=>[c.$slots.title?C(c.$slots,"title",{key:1}):C(c.$slots,"header",{key:0,close:o($),titleId:o(p),titleClass:o(u).e("title")})]),default:b(()=>[C(c.$slots,"default")]),_:2},[c.$slots.footer?{name:"footer",fn:b(()=>[C(c.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):x("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,po)]),_:3},8,["mask","overlay-class","z-index"]),[[Ne,o(d)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var go=ae(yo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const ho=qe(go);const bo=""+new URL("wechat-8ba79a1e.jpg",import.meta.url).href,Co=""+new URL("qq-2b03b122.jpg",import.meta.url).href,wo=e=>(Ue("data-v-5086d833"),e=e(),je(),e),Eo=wo(()=>O("span",{class:"contactDialog_header"},"添加作者联系",-1)),ko={class:"contactDialog_container"},_o=P({__name:"pr_contactDialog",props:{activeIcon:{default:"qq"},modelValue:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:t}){const a=s=>{t("update:modelValue",!1),s()};return(s,u)=>{const i=He,r=ho;return S(),Y("div",null,[T(r,{modelValue:s.modelValue,class:"contactDialog","show-close":!1,center:"","before-close":a},{header:b(()=>[Eo]),default:b(()=>[O("div",ko,[T(i,{src:s.activeIcon&&s.activeIcon==="qq"?o(Co):o(bo),class:"wechatImg",fit:"contain"},null,8,["src"])])]),_:1},8,["modelValue"])])}}});const Lo=Ke(_o,[["__scopeId","data-v-5086d833"]]);export{so as E,Lo as _,fo as a,ho as b,io as d,mo as u};