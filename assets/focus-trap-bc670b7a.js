import{o as R,ae as B,L as k,k as y,_ as te,d as ne,K as se,J as C,e as T,r as oe,W as $,N as re}from"./index-af1c2c1f.js";import{E as Q}from"./index-6c98106a.js";import{i as ce}from"./config-provider-bd422448.js";let p=[];const M=e=>{const n=e;n.key===Q.esc&&p.forEach(s=>s(n))},ae=e=>{R(()=>{p.length===0&&document.addEventListener("keydown",M),B&&p.push(e)}),k(()=>{p=p.filter(n=>n!==e),p.length===0&&B&&document.removeEventListener("keydown",M)})},O="focus-trap.focus-after-trapped",g="focus-trap.focus-after-released",ue="focus-trap.focusout-prevented",W={cancelable:!0,bubbles:!1},ie={cancelable:!0,bubbles:!1},j="focusAfterTrapped",q="focusAfterReleased",de=Symbol("elFocusTrap"),N=y(),P=y(0),I=y(0);let F=0;const X=e=>{const n=[],s=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const c=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||c?NodeFilter.FILTER_SKIP:o.tabIndex>=0||o===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;s.nextNode();)n.push(s.currentNode);return n},J=(e,n)=>{for(const s of e)if(!fe(s,n))return s},fe=(e,n)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(n&&e===n)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},le=e=>{const n=X(e),s=J(n,e),o=J(n.reverse(),e);return[s,o]},ve=e=>e instanceof HTMLInputElement&&"select"in e,l=(e,n)=>{if(e&&e.focus){const s=document.activeElement;e.focus({preventScroll:!0}),I.value=window.performance.now(),e!==s&&ve(e)&&n&&e.select()}};function Y(e,n){const s=[...e],o=e.indexOf(n);return o!==-1&&s.splice(o,1),s}const pe=()=>{let e=[];return{push:o=>{const c=e[0];c&&o!==c&&c.pause(),e=Y(e,o),e.unshift(o)},remove:o=>{var c,d;e=Y(e,o),(d=(c=e[0])==null?void 0:c.resume)==null||d.call(c)}}},Ee=(e,n=!1)=>{const s=document.activeElement;for(const o of e)if(l(o,n),document.activeElement!==s)return},z=pe(),me=()=>P.value>I.value,_=()=>{N.value="pointer",P.value=window.performance.now()},G=()=>{N.value="keyboard",P.value=window.performance.now()},Te=()=>(R(()=>{F===0&&(document.addEventListener("mousedown",_),document.addEventListener("touchstart",_),document.addEventListener("keydown",G)),F++}),k(()=>{F--,F<=0&&(document.removeEventListener("mousedown",_),document.removeEventListener("touchstart",_),document.removeEventListener("keydown",G))}),{focusReason:N,lastUserFocusTimestamp:P,lastAutomatedFocusTimestamp:I}),b=e=>new CustomEvent(ue,{...ie,detail:e}),Fe=ne({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[j,q,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:n}){const s=y();let o,c;const{focusReason:d}=Te();ae(t=>{e.trapped&&!v.paused&&n("release-requested",t)});const v={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},E=t=>{if(!e.loop&&!e.trapped||v.paused)return;const{key:r,altKey:a,ctrlKey:u,metaKey:i,currentTarget:x,shiftKey:H}=t,{loop:V}=e,ee=r===Q.tab&&!a&&!u&&!i,m=document.activeElement;if(ee&&m){const L=x,[h,w]=le(L);if(h&&w){if(!H&&m===w){const f=b({focusReason:d.value});n("focusout-prevented",f),f.defaultPrevented||(t.preventDefault(),V&&l(h,!0))}else if(H&&[h,L].includes(m)){const f=b({focusReason:d.value});n("focusout-prevented",f),f.defaultPrevented||(t.preventDefault(),V&&l(w,!0))}}else if(m===L){const f=b({focusReason:d.value});n("focusout-prevented",f),f.defaultPrevented||t.preventDefault()}}};se(de,{focusTrapRef:s,onKeydown:E}),C(()=>e.focusTrapEl,t=>{t&&(s.value=t)},{immediate:!0}),C([s],([t],[r])=>{t&&(t.addEventListener("keydown",E),t.addEventListener("focusin",A),t.addEventListener("focusout",U)),r&&(r.removeEventListener("keydown",E),r.removeEventListener("focusin",A),r.removeEventListener("focusout",U))});const S=t=>{n(j,t)},Z=t=>n(q,t),A=t=>{const r=T(s);if(!r)return;const a=t.target,u=t.relatedTarget,i=a&&r.contains(a);e.trapped||u&&r.contains(u)||(o=u),i&&n("focusin",t),!v.paused&&e.trapped&&(i?c=a:l(c,!0))},U=t=>{const r=T(s);if(!(v.paused||!r))if(e.trapped){const a=t.relatedTarget;!ce(a)&&!r.contains(a)&&setTimeout(()=>{if(!v.paused&&e.trapped){const u=b({focusReason:d.value});n("focusout-prevented",u),u.defaultPrevented||l(c,!0)}},0)}else{const a=t.target;a&&r.contains(a)||n("focusout",t)}};async function K(){await $();const t=T(s);if(t){z.push(v);const r=t.contains(document.activeElement)?o:document.activeElement;if(o=r,!t.contains(r)){const u=new Event(O,W);t.addEventListener(O,S),t.dispatchEvent(u),u.defaultPrevented||$(()=>{let i=e.focusStartEl;re(i)||(l(i),document.activeElement!==i&&(i="first")),i==="first"&&Ee(X(t),!0),(document.activeElement===r||i==="container")&&l(t)})}}}function D(){const t=T(s);if(t){t.removeEventListener(O,S);const r=new CustomEvent(g,{...W,detail:{focusReason:d.value}});t.addEventListener(g,Z),t.dispatchEvent(r),!r.defaultPrevented&&(d.value=="keyboard"||!me()||t.contains(document.activeElement))&&l(o??document.body),t.removeEventListener(g,S),z.remove(v)}}return R(()=>{e.trapped&&K(),C(()=>e.trapped,t=>{t?K():D()})}),k(()=>{e.trapped&&D()}),{onKeydown:E}}});function _e(e,n,s,o,c,d){return oe(e.$slots,"default",{handleKeydown:e.onKeydown})}var Le=te(Fe,[["render",_e],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);export{Le as E,de as F};
