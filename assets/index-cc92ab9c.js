import{U as x,m as C,h as D,l as H,S as P,p as b}from"./_Uint8Array-0e3b9807.js";import{bG as J,bc as I,bH as K,bd as M,bA as $,bI as Q,aq as X,bJ as Y}from"./index-54b2a01e.js";var Z="__lodash_hash_undefined__";function W(e){return this.__data__.set(e,Z),this}function z(e){return this.__data__.has(e)}function L(e){var n=-1,r=e==null?0:e.length;for(this.__data__=new J;++n<r;)this.add(e[n])}L.prototype.add=L.prototype.push=W;L.prototype.has=z;function j(e,n){for(var r=-1,s=e==null?0:e.length;++r<s;)if(n(e[r],r,e))return!0;return!1}function V(e,n){return e.has(n)}var k=1,ee=2;function h(e,n,r,s,t,a){var f=r&k,i=e.length,l=n.length;if(i!=l&&!(f&&l>i))return!1;var d=a.get(e),c=a.get(n);if(d&&c)return d==n&&c==e;var p=-1,u=!0,v=r&ee?new L:void 0;for(a.set(e,n),a.set(n,e);++p<i;){var g=e[p],o=n[p];if(s)var A=f?s(o,g,p,n,e,a):s(g,o,p,e,n,a);if(A!==void 0){if(A)continue;u=!1;break}if(v){if(!j(n,function(T,y){if(!V(v,y)&&(g===T||t(g,T,r,s,a)))return v.push(y)})){u=!1;break}}else if(!(g===o||t(g,o,r,s,a))){u=!1;break}}return a.delete(e),a.delete(n),u}function ne(e){var n=-1,r=Array(e.size);return e.forEach(function(s,t){r[++n]=[t,s]}),r}function re(e){var n=-1,r=Array(e.size);return e.forEach(function(s){r[++n]=s}),r}var ae=1,se=2,te="[object Boolean]",fe="[object Date]",ie="[object Error]",ue="[object Map]",le="[object Number]",de="[object RegExp]",ge="[object Set]",pe="[object String]",ce="[object Symbol]",ve="[object ArrayBuffer]",oe="[object DataView]",B=I?I.prototype:void 0,R=B?B.valueOf:void 0;function Ae(e,n,r,s,t,a,f){switch(r){case oe:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case ve:return!(e.byteLength!=n.byteLength||!a(new x(e),new x(n)));case te:case fe:case le:return K(+e,+n);case ie:return e.name==n.name&&e.message==n.message;case de:case pe:return e==n+"";case ue:var i=ne;case ge:var l=s&ae;if(i||(i=re),e.size!=n.size&&!l)return!1;var d=f.get(e);if(d)return d==n;s|=se,f.set(e,n);var c=h(i(e),i(n),s,t,a,f);return f.delete(e),c;case ce:if(R)return R.call(e)==R.call(n)}return!1}var _e=1,Te=Object.prototype,ye=Te.hasOwnProperty;function Ee(e,n,r,s,t,a){var f=r&_e,i=C(e),l=i.length,d=C(n),c=d.length;if(l!=c&&!f)return!1;for(var p=l;p--;){var u=i[p];if(!(f?u in n:ye.call(n,u)))return!1}var v=a.get(e),g=a.get(n);if(v&&g)return v==n&&g==e;var o=!0;a.set(e,n),a.set(n,e);for(var A=f;++p<l;){u=i[p];var T=e[u],y=n[u];if(s)var S=f?s(y,T,u,n,e,a):s(T,y,u,e,n,a);if(!(S===void 0?T===y||t(T,y,r,s,a):S)){o=!1;break}A||(A=u=="constructor")}if(o&&!A){var E=e.constructor,O=n.constructor;E!=O&&"constructor"in e&&"constructor"in n&&!(typeof E=="function"&&E instanceof E&&typeof O=="function"&&O instanceof O)&&(o=!1)}return a.delete(e),a.delete(n),o}var Oe=1,m="[object Arguments]",G="[object Array]",w="[object Object]",we=Object.prototype,U=we.hasOwnProperty;function Le(e,n,r,s,t,a){var f=M(e),i=M(n),l=f?G:D(e),d=i?G:D(n);l=l==m?w:l,d=d==m?w:d;var c=l==w,p=d==w,u=l==d;if(u&&H(e)){if(!H(n))return!1;f=!0,c=!1}if(u&&!c)return a||(a=new P),f||b(e)?h(e,n,r,s,t,a):Ae(e,n,l,r,s,t,a);if(!(r&Oe)){var v=c&&U.call(e,"__wrapped__"),g=p&&U.call(n,"__wrapped__");if(v||g){var o=v?e.value():e,A=g?n.value():n;return a||(a=new P),t(o,A,r,s,a)}}return u?(a||(a=new P),Ee(e,n,r,s,t,a)):!1}function q(e,n,r,s,t){return e===n?!0:e==null||n==null||!$(e)&&!$(n)?e!==e&&n!==n:Le(e,n,r,s,q,t)}function Se(e,n){return q(e,n)}const xe=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),Ce=e=>Q(e),_=new Map;let F;X&&(document.addEventListener("mousedown",e=>F=e),document.addEventListener("mouseup",e=>{for(const n of _.values())for(const{documentHandler:r}of n)r(e,F)}));function N(e,n){let r=[];return Array.isArray(n.arg)?r=n.arg:Y(n.arg)&&r.push(n.arg),function(s,t){const a=n.instance.popperRef,f=s.target,i=t==null?void 0:t.target,l=!n||!n.instance,d=!f||!i,c=e.contains(f)||e.contains(i),p=e===f,u=r.length&&r.some(g=>g==null?void 0:g.contains(f))||r.length&&r.includes(i),v=a&&(a.contains(f)||a.contains(i));l||d||c||p||u||v||n.value(s,t)}}const De={beforeMount(e,n){_.has(e)||_.set(e,[]),_.get(e).push({documentHandler:N(e,n),bindingFn:n.value})},updated(e,n){_.has(e)||_.set(e,[]);const r=_.get(e),s=r.findIndex(a=>a.bindingFn===n.oldValue),t={documentHandler:N(e,n),bindingFn:n.value};s>=0?r.splice(s,1,t):r.push(t)},unmounted(e){_.delete(e)}};export{De as C,Ce as c,xe as e,Se as i};
