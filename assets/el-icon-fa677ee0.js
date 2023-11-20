import{ap as de,o as te,a2 as fe,W as me,x as H,ac as pe,P as ve,i as K,aq as ye,ar as se,M as Q,U as W,as as ge,K as he,at as be,L as Ce,au as Y,l as G,a0 as X,d as P,z as T,r as C,X as we,N as Ee,v as ke,O as Z,q as A,b as S,c as q,e as O,C as E,f as o,D as Ie,w as b,j,av as _e,E as De,F as x,aw as ne,k as ae,ax as Me,ay as Se,az as Be,s as B,aA as Te,aB as $e,a6 as Le,h as Fe,$ as J,ai as Ae,V as Oe,A as Pe,m as ze,al as Ne,G as Re,T as Ve,H as qe,I as Ye,p as Ue,g as He,_ as We}from"./index-3521c6ce.js";import{E as Xe}from"./el-image-viewer-114494fc.js";import{P as U}from"./vnode-525684b2.js";import{F as je,u as ee,E as xe}from"./focus-trap-5cea2008.js";import{U as le,u as oe}from"./index-f06f5645.js";import{g as Ke}from"./scroll-b8339b6a.js";const Ge=(...e)=>t=>{e.forEach(a=>{de(a)?a(t):a.value=t})},Qe=(e,t,a)=>{let s={offsetX:0,offsetY:0};const i=l=>{const d=l.clientX,p=l.clientY,{offsetX:f,offsetY:v}=s,n=e.value.getBoundingClientRect(),m=n.left,k=n.top,z=n.width,N=n.height,R=document.documentElement.clientWidth,$=document.documentElement.clientHeight,V=-m+f,L=-k+v,I=R-m-z+f,_=$-k-N+v,F=w=>{const c=Math.min(Math.max(f+w.clientX-d,V),I),h=Math.min(Math.max(v+w.clientY-p,L),_);s={offsetX:c,offsetY:h},e.value.style.transform=`translate(${H(c)}, ${H(h)})`},y=()=>{document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",F),document.addEventListener("mouseup",y)},r=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",i)},u=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",i)};te(()=>{fe(()=>{a.value?r():u()})}),me(()=>{u()})},Ze=(e,t={})=>{pe(e)||ve("[useLockscreen]","You need to pass a ref param to this function");const a=t.ns||K("popup"),s=ye(()=>a.bm("parent","hidden"));if(!se||Q(document.body,s.value))return;let i=0,r=!1,u="0";const l=()=>{setTimeout(()=>{Ce(document==null?void 0:document.body,s.value),r&&document&&(document.body.style.width=u)},200)};W(e,d=>{if(!d){l();return}r=!Q(document.body,s.value),r&&(u=document.body.style.width),i=Ke(a.namespace.value);const p=document.documentElement.clientHeight<document.body.scrollHeight,f=ge(document.body,"overflowY");i>0&&(p||f==="scroll")&&r&&(document.body.style.width=`calc(100% - ${i}px)`),he(document.body,s.value)}),be(()=>l())},ce=e=>{if(!e)return{onClick:Y,onMousedown:Y,onMouseup:Y};let t=!1,a=!1;return{onClick:u=>{t&&a&&e(u),t=a=!1},onMousedown:u=>{t=u.target===u.currentTarget},onMouseup:u=>{a=u.target===u.currentTarget}}},Je=G({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:X([String,Array,Object])},zIndex:{type:X([String,Number])}}),eo={click:e=>e instanceof MouseEvent},oo="overlay";var to=P({name:"ElOverlay",props:Je,emits:eo,setup(e,{slots:t,emit:a}){const s=K(oo),i=d=>{a("click",d)},{onClick:r,onMousedown:u,onMouseup:l}=ce(e.customMaskEvent?void 0:i);return()=>e.mask?T("div",{class:[s.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:r,onMousedown:u,onMouseup:l},[C(t,"default")],U.STYLE|U.CLASS|U.PROPS,["onClick","onMouseup","onMousedown"]):we("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[C(t,"default")])}});const so=to,ue=Symbol("dialogInjectionKey"),ie=G({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:Ee},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),no={close:()=>!0},ao=["aria-label"],lo=["id"],co=P({name:"ElDialogContent"}),uo=P({...co,props:ie,emits:no,setup(e){const t=e,{t:a}=ke(),{Close:s}=Me,{dialogRef:i,headerRef:r,bodyId:u,ns:l,style:d}=Z(ue),{focusTrapRef:p}=Z(je),f=Ge(p,i),v=A(()=>t.draggable);return Qe(i,r,v),(n,m)=>(S(),q("div",{ref:o(f),class:E([o(l).b(),o(l).is("fullscreen",n.fullscreen),o(l).is("draggable",o(v)),o(l).is("align-center",n.alignCenter),{[o(l).m("center")]:n.center},n.customClass]),style:ne(o(d)),tabindex:"-1"},[O("header",{ref_key:"headerRef",ref:r,class:E(o(l).e("header"))},[C(n.$slots,"header",{},()=>[O("span",{role:"heading",class:E(o(l).e("title"))},Ie(n.title),3)]),n.showClose?(S(),q("button",{key:0,"aria-label":o(a)("el.dialog.close"),class:E(o(l).e("headerbtn")),type:"button",onClick:m[0]||(m[0]=k=>n.$emit("close"))},[T(o(De),{class:E(o(l).e("close"))},{default:b(()=>[(S(),j(_e(n.closeIcon||o(s))))]),_:1},8,["class"])],10,ao)):x("v-if",!0)],2),O("div",{id:o(u),class:E(o(l).e("body"))},[C(n.$slots,"default")],10,lo),n.$slots.footer?(S(),q("footer",{key:0,class:E(o(l).e("footer"))},[C(n.$slots,"footer")],2)):x("v-if",!0)],6))}});var io=ae(uo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const ro=G({...ie,appendToBody:{type:Boolean,default:!1},beforeClose:{type:X(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),fo={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[le]:e=>Se(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},mo=(e,t)=>{const s=Fe().emit,{nextZIndex:i}=Be();let r="";const u=oe(),l=oe(),d=B(!1),p=B(!1),f=B(!1),v=B(e.zIndex||i());let n,m;const k=Te("namespace",$e),z=A(()=>{const g={},M=`--${k.value}-dialog`;return e.fullscreen||(e.top&&(g[`${M}-margin-top`]=e.top),e.width&&(g[`${M}-width`]=H(e.width))),g}),N=A(()=>e.alignCenter?{display:"flex"}:{});function R(){s("opened")}function $(){s("closed"),s(le,!1),e.destroyOnClose&&(f.value=!1)}function V(){s("close")}function L(){m==null||m(),n==null||n(),e.openDelay&&e.openDelay>0?{stop:n}=J(()=>y(),e.openDelay):y()}function I(){n==null||n(),m==null||m(),e.closeDelay&&e.closeDelay>0?{stop:m}=J(()=>w(),e.closeDelay):w()}function _(){function g(M){M||(p.value=!0,d.value=!1)}e.beforeClose?e.beforeClose(g):I()}function F(){e.closeOnClickModal&&_()}function y(){se&&(d.value=!0)}function w(){d.value=!1}function c(){s("openAutoFocus")}function h(){s("closeAutoFocus")}function D(g){var M;((M=g.detail)==null?void 0:M.focusReason)==="pointer"&&g.preventDefault()}e.lockScroll&&Ze(d);function re(){e.closeOnPressEscape&&_()}return W(()=>e.modelValue,g=>{g?(p.value=!1,L(),f.value=!0,v.value=e.zIndex?v.value++:i(),Le(()=>{s("open"),t.value&&(t.value.scrollTop=0)})):d.value&&I()}),W(()=>e.fullscreen,g=>{t.value&&(g?(r=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=r)}),te(()=>{e.modelValue&&(d.value=!0,f.value=!0,L())}),{afterEnter:R,afterLeave:$,beforeLeave:V,handleClose:_,onModalClick:F,close:I,doClose:w,onOpenAutoFocus:c,onCloseAutoFocus:h,onCloseRequested:re,onFocusoutPrevented:D,titleId:u,bodyId:l,closed:p,style:z,overlayDialogStyle:N,rendered:f,visible:d,zIndex:v}},po=["aria-label","aria-labelledby","aria-describedby"],vo=P({name:"ElDialog",inheritAttrs:!1}),yo=P({...vo,props:ro,emits:fo,setup(e,{expose:t}){const a=e,s=Ae();ee({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},A(()=>!!s.title)),ee({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},A(()=>!!a.customClass));const i=K("dialog"),r=B(),u=B(),l=B(),{visible:d,titleId:p,bodyId:f,style:v,overlayDialogStyle:n,rendered:m,zIndex:k,afterEnter:z,afterLeave:N,beforeLeave:R,handleClose:$,onModalClick:V,onOpenAutoFocus:L,onCloseAutoFocus:I,onCloseRequested:_,onFocusoutPrevented:F}=mo(a,r);Oe(ue,{dialogRef:r,headerRef:u,bodyId:f,ns:i,rendered:m,style:v});const y=ce(V),w=A(()=>a.draggable&&!a.fullscreen);return t({visible:d,dialogContentRef:l}),(c,h)=>(S(),j(qe,{to:"body",disabled:!c.appendToBody},[T(Ve,{name:"dialog-fade",onAfterEnter:o(z),onAfterLeave:o(N),onBeforeLeave:o(R),persisted:""},{default:b(()=>[Pe(T(o(so),{"custom-mask-event":"",mask:c.modal,"overlay-class":c.modalClass,"z-index":o(k)},{default:b(()=>[O("div",{role:"dialog","aria-modal":"true","aria-label":c.title||void 0,"aria-labelledby":c.title?void 0:o(p),"aria-describedby":o(f),class:E(`${o(i).namespace.value}-overlay-dialog`),style:ne(o(n)),onClick:h[0]||(h[0]=(...D)=>o(y).onClick&&o(y).onClick(...D)),onMousedown:h[1]||(h[1]=(...D)=>o(y).onMousedown&&o(y).onMousedown(...D)),onMouseup:h[2]||(h[2]=(...D)=>o(y).onMouseup&&o(y).onMouseup(...D))},[T(o(xe),{loop:"",trapped:o(d),"focus-start-el":"container",onFocusAfterTrapped:o(L),onFocusAfterReleased:o(I),onFocusoutPrevented:o(F),onReleaseRequested:o(_)},{default:b(()=>[o(m)?(S(),j(io,ze({key:0,ref_key:"dialogContentRef",ref:l},c.$attrs,{"custom-class":c.customClass,center:c.center,"align-center":c.alignCenter,"close-icon":c.closeIcon,draggable:o(w),fullscreen:c.fullscreen,"show-close":c.showClose,title:c.title,onClose:o($)}),Ne({header:b(()=>[c.$slots.title?C(c.$slots,"title",{key:1}):C(c.$slots,"header",{key:0,close:o($),titleId:o(p),titleClass:o(i).e("title")})]),default:b(()=>[C(c.$slots,"default")]),_:2},[c.$slots.footer?{name:"footer",fn:b(()=>[C(c.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):x("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,po)]),_:3},8,["mask","overlay-class","z-index"]),[[Re,o(d)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var go=ae(yo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const ho=Ye(go);const bo=""+new URL("wechat-8ba79a1e.jpg",import.meta.url).href,Co=""+new URL("qq-2b03b122.jpg",import.meta.url).href,wo=e=>(Ue("data-v-5086d833"),e=e(),He(),e),Eo=wo(()=>O("span",{class:"contactDialog_header"},"添加作者联系",-1)),ko={class:"contactDialog_container"},Io=P({__name:"pr_contactDialog",props:{activeIcon:{default:"qq"},modelValue:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:t}){const a=s=>{t("update:modelValue",!1),s()};return(s,i)=>{const r=Xe,u=ho;return S(),q("div",null,[T(u,{modelValue:s.modelValue,class:"contactDialog","show-close":!1,center:"","before-close":a},{header:b(()=>[Eo]),default:b(()=>[O("div",ko,[T(r,{src:s.activeIcon&&s.activeIcon==="qq"?o(Co):o(bo),class:"wechatImg",fit:"contain"},null,8,["src"])])]),_:1},8,["modelValue"])])}}});const $o=We(Io,[["__scopeId","data-v-5086d833"]]);export{so as E,$o as _,fo as a,ho as b,ro as d,mo as u};