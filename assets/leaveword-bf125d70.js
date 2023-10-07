import{d as H,n as c,Q as R,l as f,o as $,U as se,a5 as le,aX as oe,V as ie,b as M,c as U,e as g,A as X,r as ue,af as de,x as re,w as ce,B as A,f as k,ab as T,y as W,aP as me,aB as fe,D as ve,p as pe,g as he}from"./index-382c556c.js";import{g as ye}from"./getIp-40bfaa55.js";import{b as ge}from"./index-af4fd9eb.js";import{h as _e}from"./index-b5140b1a.js";import{_ as we}from"./_plugin-vue_export-helper-c27b6911.js";import"./request-31eb552c.js";import"./axios-4a70c6fc.js";import"./_commonjsHelpers-042e6b4d.js";function xe(n,u,p="modelValue",o){return f({get:()=>n[p],set:a=>{u(`update:${p}`,o?o(a):a)}})}var L=H({name:"vue3-danmaku",components:{},props:{danmus:{type:Array,required:!0,default:()=>[]},channels:{type:Number,default:0},autoplay:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},useSlot:{type:Boolean,default:!1},debounce:{type:Number,default:100},speeds:{type:Number,default:200},randomChannel:{type:Boolean,default:!1},fontSize:{type:Number,default:18},top:{type:Number,default:4},right:{type:Number,default:0},isSuspend:{type:Boolean,default:!1},extraStyle:{type:String,default:""}},emits:["list-end","play-end","update:danmus"],setup(n,{emit:u,slots:p}){let o=c(document.createElement("div")),a=c(document.createElement("div"));const h=c(0),C=c(0);let S=0;const I=c(0),w=c(0),v=c(0),x=c(!1),d=c(!1),m=c({}),i=xe(n,u,"danmus"),r=R({channels:f(()=>n.channels||I.value),autoplay:f(()=>n.autoplay),loop:f(()=>n.loop),useSlot:f(()=>n.useSlot),debounce:f(()=>n.debounce),randomChannel:f(()=>n.randomChannel)}),y=R({height:f(()=>w.value),fontSize:f(()=>n.fontSize),speeds:f(()=>n.speeds),top:f(()=>n.top),right:f(()=>n.right)});$(()=>{N()}),se(()=>{z()});function N(){E(),n.isSuspend&&q(),r.autoplay&&D()}function E(){h.value=o.value.offsetWidth,C.value=o.value.offsetHeight}function D(){d.value=!1,S||(S=setInterval(()=>P(),r.debounce))}function P(){if(!d.value&&i.value.length)if(v.value>i.value.length-1){const s=a.value.children.length;r.loop&&(s<v.value&&(u("list-end"),v.value=0),B())}else B()}function B(s){const l=r.loop?v.value%i.value.length:v.value,t=s||i.value[l];let e=document.createElement("div");r.useSlot?e=V(t,l).$el:(e.innerHTML=t,e.setAttribute("style",n.extraStyle),e.style.fontSize=`${y.fontSize}px`,e.style.lineHeight=`${y.fontSize}px`),e.classList.add("dm"),a.value.appendChild(e),e.style.opacity="0",le(()=>{y.height||(w.value=e.offsetHeight),r.channels||(I.value=Math.floor(C.value/(y.height+y.top)));let _=K(e);if(_>=0){const b=e.offsetWidth,ae=y.height;e.classList.add("move"),e.dataset.index=`${l}`,e.style.opacity="1",e.style.top=_*(ae+y.top)+"px",e.style.width=b+y.right+"px",e.style.setProperty("--dm-scroll-width",`-${h.value+b}px`),e.style.left=`${h.value}px`,e.style.animationDuration=`${h.value/y.speeds}s`,e.addEventListener("animationend",()=>{Number(e.dataset.index)===i.value.length-1&&!r.loop&&u("play-end",e.dataset.index),a.value&&a.value.removeChild(e)}),v.value++}else a.value.removeChild(e)})}function V(s,l){return oe({render(){return ie("div",{},[p.dm&&p.dm({danmu:s,index:l})])}}).mount(document.createElement("div"))}function K(s){let l=[...Array(r.channels).keys()];r.randomChannel&&(l=l.sort(()=>.5-Math.random()));for(let t of l){const e=m.value[t];if(e&&e.length)for(let _=0;_<e.length;_++){const b=j(e[_])-10;if(b<=(s.offsetWidth-e[_].offsetWidth)*.88||b<=0)break;if(_===e.length-1)return m.value[t].push(s),s.addEventListener("animationend",()=>m.value[t].splice(0,1)),t%r.channels}else return m.value[t]=[s],s.addEventListener("animationend",()=>m.value[t].splice(0,1)),t%r.channels}return-1}function j(s){const l=s.offsetWidth||parseInt(s.style.width),t=s.getBoundingClientRect().right||a.value.getBoundingClientRect().right+l;return a.value.getBoundingClientRect().right-t}function F(){clearInterval(S),S=0}function q(){let s=[];a.value.addEventListener("mousemove",l=>{let t=l.target;t.className.includes("dm")||(t=t.closest(".dm")||t),t.className.includes("dm")&&(t.classList.add("pause"),s.push(t))}),a.value.addEventListener("mouseout",l=>{let t=l.target;t.className.includes("dm")||(t=t.closest(".dm")||t),t.className.includes("dm")&&(t.classList.remove("pause"),s.forEach(e=>{e.classList.remove("pause")}),s=[])})}function z(){F(),v.value=0}function Q(){w.value=0,N()}function G(){m.value={},a.value.innerHTML="",d.value=!0,x.value=!1,z()}function J(){d.value=!0}function O(s){if(v.value===i.value.length)return i.value.push(s),i.value.length-1;{const l=v.value%i.value.length;return i.value.splice(l,0,s),l+1}}function Y(s){return i.value.push(s),i.value.length-1}function Z(){return!d.value}function ee(){x.value=!1}function te(){x.value=!0}function ne(){E();const s=a.value.getElementsByClassName("dm");for(let l=0;l<s.length;l++){const t=s[l];t.style.setProperty("--dm-scroll-width",`-${h.value+t.offsetWidth}px`),t.style.left=`${h.value}px`,t.style.animationDuration=`${h.value/y.speeds}s`}}return{container:o,dmContainer:a,hidden:x,paused:d,danmuList:i,getPlayState:Z,resize:ne,play:D,pause:J,stop:G,show:ee,hide:te,reset:Q,add:O,push:Y,insert:B}}});const Ce={ref:"container",class:"vue-danmaku"};function Se(n,u,p,o,a,h){return M(),U("div",Ce,[g("div",{ref:"dmContainer",class:X(["danmus",{show:!n.hidden},{paused:n.paused}])},null,2),ue(n.$slots,"default")],512)}function be(n,u){u===void 0&&(u={});var p=u.insertAt;if(!(!n||typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",p==="top"&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=n:a.appendChild(document.createTextNode(n))}}var ke=`.vue-danmaku {
  position: relative;
  overflow: hidden;
}
.vue-danmaku .danmus {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.vue-danmaku .danmus.show {
  opacity: 1;
}
.vue-danmaku .danmus.paused .dm.move {
  animation-play-state: paused;
}
.vue-danmaku .danmus .dm {
  position: absolute;
  font-size: 20px;
  color: #ddd;
  white-space: pre;
  transform: translateX(0);
  transform-style: preserve-3d;
}
.vue-danmaku .danmus .dm.move {
  will-change: transform;
  animation-name: moveLeft;
  animation-timing-function: linear;
  animation-play-state: running;
}
.vue-danmaku .danmus .dm.pause {
  animation-play-state: paused;
  z-index: 10;
}
@keyframes moveLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(var(--dm-scroll-width));
  }
}
@-webkit-keyframes moveLeft {
  from {
    -webkit-transform: translateX(0);
  }
  to {
    -webkit-transform: translateX(var(--dm-scroll-width));
  }
}`;be(ke);L.render=Se;L.__file="src/lib/Danmaku.vue";const Ie=n=>(pe("data-v-994b0d26"),n=n(),he(),n),Be={class:"leaveword_container"},$e=["src"],Le={class:"danmuItem_text"},Ne={class:"leaveword_box"},Ee=Ie(()=>g("div",{class:"leaveword_title"},"留言板",-1)),De={class:"leaveword_inputBox"},ze=["onKeyup"],Re=H({__name:"leaveword",setup(n){const u=c(),p=async()=>{let d=await _e();u.value=d.data,w.value.play()};$(()=>{p()});let o=c(),a=c(!1);const h=()=>{a.value=!0},C=de();let S=f(()=>C.userInfo);const I=async()=>{var d;if(!((d=C.userInfo.position)!=null&&d.ip)){let m=await ye();C.setUserPosition(m)}};$(async()=>{await I()});let w=c(),v=c();const x=()=>{var d;v.value=w.value.add({id:u.value.length+1,name:`${(d=S.value.position)==null?void 0:d.address}用户`,text:o.value,avatar:ge(2)}),o.value="",a.value=!1};return(d,m)=>(M(),U("div",Be,[re(k(L),{ref_key:"danmuRef",ref:w,danmus:k(u),"onUpdate:danmus":m[0]||(m[0]=i=>T(u)?u.value=i:null),class:"danmu_style",top:6,isSuspend:"",useSlot:""},{dm:ce(({index:i,danmu:r})=>[g("div",{class:X(["danmuItem",{danmuItem_active:i===k(v)}])},[g("img",{class:"danmuItem_img",src:r.avatar},null,8,$e),g("span",Le,A(r.name)+"："+A(r.text),1)],2)]),_:1},8,["danmus"]),g("div",Ne,[Ee,g("div",De,[W(g("input",{class:"leaveword_input",onKeyup:fe(x,["enter"]),placeholder:"留下你的足迹吧！",onFocus:h,"onUpdate:modelValue":m[1]||(m[1]=i=>T(o)?o.value=i:o=i),clearable:""},null,40,ze),[[me,k(o)]]),W(g("div",{class:"leaveword_sent",onClick:x},"发送",512),[[ve,k(a)]])])])]))}});const Ve=we(Re,[["__scopeId","data-v-994b0d26"]]);export{Ve as default};
