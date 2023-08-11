import{aw as ie,aq as Ne,i as ue,an as Ee,k as b,j as P,e,J as j,o as ce,S as Te,L as Me,K as $e,N as Ae,P as ve,d as Y,g as fe,a as A,c as V,b as q,h as se,w as F,s as J,x as B,v as K,q as G,A as X,T as oe,z as U,r as de,aj as me,O as Be,a0 as He,y as Le,_ as he,G as Oe,I as Pe,aS as Ve,aT as ze,C as Re,Z as De}from"./index-9120937d.js";import{E as ne,h as je,b as Ke}from"./index-e37a253e.js";import{f as Ue}from"./vnode-44783176.js";import{t as re}from"./throttle-bde9afc3.js";const We=(n,k,r)=>Ue(n.subTree).filter(u=>{var a;return Ne(u)&&((a=u.type)==null?void 0:a.name)===k&&!!u.component}).map(u=>u.component.uid).map(u=>r[u]).filter(u=>!!u),qe=(n,k)=>{const r={},s=ie([]);return{children:s,addChild:a=>{r[a.uid]=a,s.value=We(n,k,r)},removeChild:a=>{delete r[a],s.value=s.value.filter(d=>d.uid!==a)}}},Fe=ue({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),Ge={change:(n,k)=>[n,k].every(Ee)},pe=Symbol("carouselContextKey"),le=300,Je=(n,k,r)=>{const{children:s,addChild:g,removeChild:u}=qe(ve(),"ElCarouselItem"),a=b(-1),d=b(null),y=b(!1),C=b(),I=b(0),N=P(()=>n.arrow!=="never"&&!e(h)),T=P(()=>s.value.some(t=>t.props.label.toString().length>0)),_=P(()=>n.type==="card"),h=P(()=>n.direction==="vertical"),H=P(()=>n.height!=="auto"?{height:n.height}:{height:`${I.value}px`,overflow:"hidden"}),S=re(t=>{l(t)},le,{trailing:!0}),E=re(t=>{z(t)},le);function M(){d.value&&(clearInterval(d.value),d.value=null)}function L(){n.interval<=0||!n.autoplay||d.value||(d.value=setInterval(()=>i(),n.interval))}const i=()=>{a.value<s.value.length-1?a.value=a.value+1:n.loop&&(a.value=0)};function l(t){if(Ae(t)){const R=s.value.filter(W=>W.props.name===t);R.length>0&&(t=s.value.indexOf(R[0]))}if(t=Number(t),Number.isNaN(t)||t!==Math.floor(t))return;const m=s.value.length,$=a.value;t<0?a.value=n.loop?m-1:0:t>=m?a.value=n.loop?0:m-1:a.value=t,$===a.value&&f($),x()}function f(t){s.value.forEach((m,$)=>{m.translateItem($,a.value,t)})}function o(t,m){var $,R,W,ee;const D=e(s),te=D.length;if(te===0||!t.states.inStage)return!1;const Ie=m+1,we=m-1,ae=te-1,be=D[ae].states.active,ke=D[0].states.active,_e=(R=($=D[Ie])==null?void 0:$.states)==null?void 0:R.active,Se=(ee=(W=D[we])==null?void 0:W.states)==null?void 0:ee.active;return m===ae&&ke||_e?"left":m===0&&be||Se?"right":!1}function w(){y.value=!0,n.pauseOnHover&&M()}function O(){y.value=!1,L()}function c(t){e(h)||s.value.forEach((m,$)=>{t===o(m,$)&&(m.states.hover=!0)})}function v(){e(h)||s.value.forEach(t=>{t.states.hover=!1})}function p(t){a.value=t}function z(t){n.trigger==="hover"&&t!==a.value&&(a.value=t)}function Z(){l(a.value-1)}function ye(){l(a.value+1)}function x(){M(),L()}function Ce(t){n.height==="auto"&&(I.value=t)}j(()=>a.value,(t,m)=>{f(m),m>-1&&k("change",t,m)}),j(()=>n.autoplay,t=>{t?L():M()}),j(()=>n.loop,()=>{l(a.value)}),j(()=>n.interval,()=>{x()}),j(()=>s.value,()=>{s.value.length>0&&l(n.initialIndex)});const Q=ie();return ce(()=>{Q.value=Te(C.value,()=>{f()}),L()}),Me(()=>{M(),C.value&&Q.value&&Q.value.stop()}),$e(pe,{root:C,isCardType:_,isVertical:h,items:s,loop:n.loop,addItem:g,removeItem:u,setActiveItem:l,setContainerHeight:Ce}),{root:C,activeIndex:a,arrowDisplay:N,hasLabel:T,hover:y,isCardType:_,items:s,isVertical:h,containerStyle:H,handleButtonEnter:c,handleButtonLeave:v,handleIndicatorClick:p,handleMouseEnter:w,handleMouseLeave:O,setActiveItem:l,prev:Z,next:ye,throttledArrowClick:S,throttledIndicatorHover:E}},Xe=["onMouseenter","onClick"],Ye={key:0},Ze="ElCarousel",Qe=Y({name:Ze}),xe=Y({...Qe,props:Fe,emits:Ge,setup(n,{expose:k,emit:r}){const s=n,{root:g,activeIndex:u,arrowDisplay:a,hasLabel:d,hover:y,isCardType:C,items:I,isVertical:N,containerStyle:T,handleButtonEnter:_,handleButtonLeave:h,handleIndicatorClick:H,handleMouseEnter:S,handleMouseLeave:E,setActiveItem:M,prev:L,next:i,throttledArrowClick:l,throttledIndicatorHover:f}=Je(s,r),o=fe("carousel"),w=P(()=>{const c=[o.b(),o.m(s.direction)];return e(C)&&c.push(o.m("card")),c}),O=P(()=>{const c=[o.e("indicators"),o.em("indicators",s.direction)];return e(d)&&c.push(o.em("indicators","labels")),s.indicatorPosition==="outside"&&c.push(o.em("indicators","outside")),e(N)&&c.push(o.em("indicators","right")),c});return k({setActiveItem:M,prev:L,next:i}),(c,v)=>(A(),V("div",{ref_key:"root",ref:g,class:B(e(w)),onMouseenter:v[6]||(v[6]=K((...p)=>e(S)&&e(S)(...p),["stop"])),onMouseleave:v[7]||(v[7]=K((...p)=>e(E)&&e(E)(...p),["stop"]))},[q("div",{class:B(e(o).e("container")),style:me(e(T))},[e(a)?(A(),se(oe,{key:0,name:"carousel-arrow-left",persisted:""},{default:F(()=>[J(q("button",{type:"button",class:B([e(o).e("arrow"),e(o).em("arrow","left")]),onMouseenter:v[0]||(v[0]=p=>e(_)("left")),onMouseleave:v[1]||(v[1]=(...p)=>e(h)&&e(h)(...p)),onClick:v[2]||(v[2]=K(p=>e(l)(e(u)-1),["stop"]))},[G(e(ne),null,{default:F(()=>[G(e(je))]),_:1})],34),[[X,(c.arrow==="always"||e(y))&&(s.loop||e(u)>0)]])]),_:1})):U("v-if",!0),e(a)?(A(),se(oe,{key:1,name:"carousel-arrow-right",persisted:""},{default:F(()=>[J(q("button",{type:"button",class:B([e(o).e("arrow"),e(o).em("arrow","right")]),onMouseenter:v[3]||(v[3]=p=>e(_)("right")),onMouseleave:v[4]||(v[4]=(...p)=>e(h)&&e(h)(...p)),onClick:v[5]||(v[5]=K(p=>e(l)(e(u)+1),["stop"]))},[G(e(ne),null,{default:F(()=>[G(e(Ke))]),_:1})],34),[[X,(c.arrow==="always"||e(y))&&(s.loop||e(u)<e(I).length-1)]])]),_:1})):U("v-if",!0),de(c.$slots,"default")],6),c.indicatorPosition!=="none"?(A(),V("ul",{key:0,class:B(e(O))},[(A(!0),V(Be,null,He(e(I),(p,z)=>(A(),V("li",{key:z,class:B([e(o).e("indicator"),e(o).em("indicator",c.direction),e(o).is("active",z===e(u))]),onMouseenter:Z=>e(f)(z),onClick:K(Z=>e(H)(z),["stop"])},[q("button",{class:B(e(o).e("button"))},[e(d)?(A(),V("span",Ye,Le(p.props.label),1)):U("v-if",!0)],2)],42,Xe))),128))],2)):U("v-if",!0)],34))}});var et=he(xe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);const tt=ue({name:{type:String,default:""},label:{type:[String,Number],default:""}}),at=(n,k)=>{const r=Oe(pe),s=ve(),g=.83,u=b(),a=b(!1),d=b(0),y=b(1),C=b(!1),I=b(!1),N=b(!1),T=b(!1),{isCardType:_,isVertical:h}=r;function H(i,l,f){const o=f-1,w=l-1,O=l+1,c=f/2;return l===0&&i===o?-1:l===o&&i===0?f:i<w&&l-i>=c?f+1:i>O&&i-l>=c?-2:i}function S(i,l){var f,o;const w=e(h)?((f=r.root.value)==null?void 0:f.offsetHeight)||0:((o=r.root.value)==null?void 0:o.offsetWidth)||0;return N.value?w*((2-g)*(i-l)+1)/4:i<l?-(1+g)*w/4:(3+g)*w/4}function E(i,l,f){const o=r.root.value;return o?((f?o.offsetHeight:o.offsetWidth)||0)*(i-l):0}const M=(i,l,f)=>{var o;const w=e(_),O=(o=r.items.value.length)!=null?o:Number.NaN,c=i===l;!w&&!ze(f)&&(T.value=c||i===f),!c&&O>2&&r.loop&&(i=H(i,l,O));const v=e(h);C.value=c,w?(N.value=Math.round(Math.abs(i-l))<=1,d.value=S(i,l),y.value=e(C)?1:g):d.value=E(i,l,v),I.value=!0,c&&u.value&&r.setContainerHeight(u.value.offsetHeight)};function L(){if(r&&e(_)){const i=r.items.value.findIndex(({uid:l})=>l===s.uid);r.setActiveItem(i)}}return ce(()=>{r.addItem({props:n,states:Pe({hover:a,translate:d,scale:y,active:C,ready:I,inStage:N,animating:T}),uid:s.uid,translateItem:M})}),Ve(()=>{r.removeItem(s.uid)}),{carouselItemRef:u,active:C,animating:T,hover:a,inStage:N,isVertical:h,translate:d,isCardType:_,scale:y,ready:I,handleItemClick:L}},st=Y({name:"ElCarouselItem"}),ot=Y({...st,props:tt,setup(n){const k=n,r=fe("carousel"),{carouselItemRef:s,active:g,animating:u,hover:a,inStage:d,isVertical:y,translate:C,isCardType:I,scale:N,ready:T,handleItemClick:_}=at(k),h=P(()=>{const S=`${`translate${e(y)?"Y":"X"}`}(${e(C)}px)`,E=`scale(${e(N)})`;return{transform:[S,E].join(" ")}});return(H,S)=>J((A(),V("div",{ref_key:"carouselItemRef",ref:s,class:B([e(r).e("item"),e(r).is("active",e(g)),e(r).is("in-stage",e(d)),e(r).is("hover",e(a)),e(r).is("animating",e(u)),{[e(r).em("item","card")]:e(I),[e(r).em("item","card-vertical")]:e(I)&&e(y)}]),style:me(e(h)),onClick:S[0]||(S[0]=(...E)=>e(_)&&e(_)(...E))},[e(I)?J((A(),V("div",{key:0,class:B(e(r).e("mask"))},null,2)),[[X,!e(g)]]):U("v-if",!0),de(H.$slots,"default")],6)),[[X,e(T)]])}});var ge=he(ot,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);const ut=Re(et,{CarouselItem:ge}),ct=De(ge);export{ut as E,ct as a};
