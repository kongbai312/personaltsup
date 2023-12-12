import{l as L,a0 as m,d as T,i as M,q as r,bC as V,bo as O,b1 as j,b8 as q,n as R,ap as U,Y as P,b as l,c,C as i,f as t,e as y,aw as f,r as B,D,F as I,j as N,w as Y,av as G,E as H,k as J,I as K}from"./index-b8e6517e.js";const Q=L({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:u=>u>=0&&u<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:m(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:m([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:m(Function),default:u=>`${u}%`}}),X=["aria-valuenow"],Z={viewBox:"0 0 100 100"},ee=["d","stroke","stroke-width"],te=["d","stroke","opacity","stroke-linecap","stroke-width"],se={key:0},ae=T({name:"ElProgress"}),re=T({...ae,props:Q,setup(u){const s=u,b={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},a=M("progress"),_=r(()=>({width:`${s.percentage}%`,animationDuration:`${s.duration}s`,backgroundColor:C(s.percentage)})),g=r(()=>(s.strokeWidth/s.width*100).toFixed(1)),v=r(()=>["circle","dashboard"].includes(s.type)?Number.parseInt(`${50-Number.parseFloat(g.value)/2}`,10):0),w=r(()=>{const e=v.value,o=s.type==="dashboard";return`
          M 50 50
          m 0 ${o?"":"-"}${e}
          a ${e} ${e} 0 1 1 0 ${o?"-":""}${e*2}
          a ${e} ${e} 0 1 1 0 ${o?"":"-"}${e*2}
          `}),h=r(()=>2*Math.PI*v.value),k=r(()=>s.type==="dashboard"?.75:1),$=r(()=>`${-1*h.value*(1-k.value)/2}px`),F=r(()=>({strokeDasharray:`${h.value*k.value}px, ${h.value}px`,strokeDashoffset:$.value})),x=r(()=>({strokeDasharray:`${h.value*k.value*(s.percentage/100)}px, ${h.value}px`,strokeDashoffset:$.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),E=r(()=>{let e;return s.color?e=C(s.percentage):e=b[s.status]||b.default,e}),W=r(()=>s.status==="warning"?V:s.type==="line"?s.status==="success"?O:j:s.status==="success"?q:R),z=r(()=>s.type==="line"?12+s.strokeWidth*.4:s.width*.111111+2),S=r(()=>s.format(s.percentage));function A(e){const o=100/e.length;return e.map((n,p)=>P(n)?{color:n,percentage:(p+1)*o}:n).sort((n,p)=>n.percentage-p.percentage)}const C=e=>{var o;const{color:d}=s;if(U(d))return d(e);if(P(d))return d;{const n=A(d);for(const p of n)if(p.percentage>e)return p.color;return(o=n[n.length-1])==null?void 0:o.color}};return(e,o)=>(l(),c("div",{class:i([t(a).b(),t(a).m(e.type),t(a).is(e.status),{[t(a).m("without-text")]:!e.showText,[t(a).m("text-inside")]:e.textInside}]),role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[e.type==="line"?(l(),c("div",{key:0,class:i(t(a).b("bar"))},[y("div",{class:i(t(a).be("bar","outer")),style:f({height:`${e.strokeWidth}px`})},[y("div",{class:i([t(a).be("bar","inner"),{[t(a).bem("bar","inner","indeterminate")]:e.indeterminate},{[t(a).bem("bar","inner","striped")]:e.striped},{[t(a).bem("bar","inner","striped-flow")]:e.stripedFlow}]),style:f(t(_))},[(e.showText||e.$slots.default)&&e.textInside?(l(),c("div",{key:0,class:i(t(a).be("bar","innerText"))},[B(e.$slots,"default",{percentage:e.percentage},()=>[y("span",null,D(t(S)),1)])],2)):I("v-if",!0)],6)],6)],2)):(l(),c("div",{key:1,class:i(t(a).b("circle")),style:f({height:`${e.width}px`,width:`${e.width}px`})},[(l(),c("svg",Z,[y("path",{class:i(t(a).be("circle","track")),d:t(w),stroke:`var(${t(a).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-width":t(g),fill:"none",style:f(t(F))},null,14,ee),y("path",{class:i(t(a).be("circle","path")),d:t(w),stroke:t(E),fill:"none",opacity:e.percentage?1:0,"stroke-linecap":e.strokeLinecap,"stroke-width":t(g),style:f(t(x))},null,14,te)]))],6)),(e.showText||e.$slots.default)&&!e.textInside?(l(),c("div",{key:2,class:i(t(a).e("text")),style:f({fontSize:`${t(z)}px`})},[B(e.$slots,"default",{percentage:e.percentage},()=>[e.status?(l(),N(t(H),{key:1},{default:Y(()=>[(l(),N(G(t(W))))]),_:1})):(l(),c("span",se,D(t(S)),1))])],6)):I("v-if",!0)],10,X))}});var oe=J(re,[["__file","/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]]);const le=K(oe);export{le as E};
