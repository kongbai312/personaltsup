import{bQ as Bt,$ as M,l as A,ao as De,R as F,o as qe,Y as mn,aq as Oe,ax as It,f as c,aH as gn,n as j,U as Se,bR as ht,bS as hn,bT as bn,bU as yn,j as ee,aK as wn,S as Ce,d as L,r as ie,_ as se,h as ke,M as le,b as Z,c as $e,A as jt,av as On,at as Ze,y as _t,bV as Tn,a4 as En,X as Cn,bW as Rn,bX as An,x as Re,bY as Ft,bG as He,i as ce,w as te,m as Je,C as Ae,ay as xn,G as Dt,H as bt,aj as Pn,a6 as we,D as Sn,T as kn,F as Mn,bm as Bn,bZ as In,b_ as jn,B as _n}from"./index-382c556c.js";import{i as Lt}from"./event-ada0a21c.js";import{a as Fn,u as Dn}from"./index-ffe0bee1.js";import{a as yt}from"./constants-84857360.js";import{E as Ln}from"./focus-trap-f36aaad9.js";const Y=(e,t,{checkForDefaultPrevented:n=!0}={})=>r=>{const a=e==null?void 0:e(r);if(n===!1||!a)return t==null?void 0:t(r)};function Nn(e){return e===void 0}const $n=Bt({type:M(Boolean),default:null}),Hn=Bt({type:M(Function)}),Nt=e=>{const t=`update:${e}`,n=`onUpdate:${e}`,o=[t],r={[e]:$n,[n]:Hn};return{useModelToggle:({indicator:i,toggleReason:u,shouldHideWhenRouteChanges:s,shouldProceed:l,onShow:f,onHide:d})=>{const h=mn(),{emit:m}=h,g=h.props,v=A(()=>De(g[n])),T=A(()=>g[e]===null),p=O=>{i.value!==!0&&(i.value=!0,u&&(u.value=O),De(f)&&f(O))},w=O=>{i.value!==!1&&(i.value=!1,u&&(u.value=O),De(d)&&d(O))},E=O=>{if(g.disabled===!0||De(l)&&!l())return;const R=v.value&&Oe;R&&m(t,!0),(T.value||!R)&&p(O)},b=O=>{if(g.disabled===!0||!Oe)return;const R=v.value&&Oe;R&&m(t,!1),(T.value||!R)&&w(O)},C=O=>{It(O)&&(g.disabled&&O?v.value&&m(t,!1):i.value!==O&&(O?p():w()))},x=()=>{i.value?b():E()};return F(()=>g[e],C),s&&h.appContext.config.globalProperties.$route!==void 0&&F(()=>({...h.proxy.$route}),()=>{s.value&&i.value&&b()}),qe(()=>{C(g[e])}),{hide:b,show:E,toggle:x,hasUpdateHandler:v}},useModelToggleProps:r,useModelToggleEmits:o}};Nt("modelValue");var H="top",K="bottom",U="right",W="left",Xe="auto",Me=[H,K,U,W],fe="start",xe="end",Wn="clippingParents",$t="viewport",ye="popper",qn="reference",wt=Me.reduce(function(e,t){return e.concat([t+"-"+fe,t+"-"+xe])},[]),Ye=[].concat(Me,[Xe]).reduce(function(e,t){return e.concat([t,t+"-"+fe,t+"-"+xe])},[]),Kn="beforeRead",Un="read",zn="afterRead",Vn="beforeMain",Zn="main",Gn="afterMain",Jn="beforeWrite",Xn="write",Yn="afterWrite",Qn=[Kn,Un,zn,Vn,Zn,Gn,Jn,Xn,Yn];function J(e){return e?(e.nodeName||"").toLowerCase():null}function z(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function de(e){var t=z(e).Element;return e instanceof t||e instanceof Element}function q(e){var t=z(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Qe(e){if(typeof ShadowRoot>"u")return!1;var t=z(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function eo(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var o=t.styles[n]||{},r=t.attributes[n]||{},a=t.elements[n];!q(a)||!J(a)||(Object.assign(a.style,o),Object.keys(r).forEach(function(i){var u=r[i];u===!1?a.removeAttribute(i):a.setAttribute(i,u===!0?"":u)}))})}function to(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(o){var r=t.elements[o],a=t.attributes[o]||{},i=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:n[o]),u=i.reduce(function(s,l){return s[l]="",s},{});!q(r)||!J(r)||(Object.assign(r.style,u),Object.keys(a).forEach(function(s){r.removeAttribute(s)}))})}}var Ht={name:"applyStyles",enabled:!0,phase:"write",fn:eo,effect:to,requires:["computeStyles"]};function G(e){return e.split("-")[0]}var ae=Math.max,We=Math.min,ve=Math.round;function me(e,t){t===void 0&&(t=!1);var n=e.getBoundingClientRect(),o=1,r=1;if(q(e)&&t){var a=e.offsetHeight,i=e.offsetWidth;i>0&&(o=ve(n.width)/i||1),a>0&&(r=ve(n.height)/a||1)}return{width:n.width/o,height:n.height/r,top:n.top/r,right:n.right/o,bottom:n.bottom/r,left:n.left/o,x:n.left/o,y:n.top/r}}function et(e){var t=me(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function Wt(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Qe(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Q(e){return z(e).getComputedStyle(e)}function no(e){return["table","td","th"].indexOf(J(e))>=0}function ne(e){return((de(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ke(e){return J(e)==="html"?e:e.assignedSlot||e.parentNode||(Qe(e)?e.host:null)||ne(e)}function Ot(e){return!q(e)||Q(e).position==="fixed"?null:e.offsetParent}function oo(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&q(e)){var o=Q(e);if(o.position==="fixed")return null}var r=Ke(e);for(Qe(r)&&(r=r.host);q(r)&&["html","body"].indexOf(J(r))<0;){var a=Q(r);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return r;r=r.parentNode}return null}function Be(e){for(var t=z(e),n=Ot(e);n&&no(n)&&Q(n).position==="static";)n=Ot(n);return n&&(J(n)==="html"||J(n)==="body"&&Q(n).position==="static")?t:n||oo(e)||t}function tt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Te(e,t,n){return ae(e,We(t,n))}function ro(e,t,n){var o=Te(e,t,n);return o>n?n:o}function qt(){return{top:0,right:0,bottom:0,left:0}}function Kt(e){return Object.assign({},qt(),e)}function Ut(e,t){return t.reduce(function(n,o){return n[o]=e,n},{})}var ao=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,Kt(typeof e!="number"?e:Ut(e,Me))};function io(e){var t,n=e.state,o=e.name,r=e.options,a=n.elements.arrow,i=n.modifiersData.popperOffsets,u=G(n.placement),s=tt(u),l=[W,U].indexOf(u)>=0,f=l?"height":"width";if(!(!a||!i)){var d=ao(r.padding,n),h=et(a),m=s==="y"?H:W,g=s==="y"?K:U,v=n.rects.reference[f]+n.rects.reference[s]-i[s]-n.rects.popper[f],T=i[s]-n.rects.reference[s],p=Be(a),w=p?s==="y"?p.clientHeight||0:p.clientWidth||0:0,E=v/2-T/2,b=d[m],C=w-h[f]-d[g],x=w/2-h[f]/2+E,O=Te(b,x,C),R=s;n.modifiersData[o]=(t={},t[R]=O,t.centerOffset=O-x,t)}}function so(e){var t=e.state,n=e.options,o=n.element,r=o===void 0?"[data-popper-arrow]":o;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||!Wt(t.elements.popper,r)||(t.elements.arrow=r))}var lo={name:"arrow",enabled:!0,phase:"main",fn:io,effect:so,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ge(e){return e.split("-")[1]}var uo={top:"auto",right:"auto",bottom:"auto",left:"auto"};function po(e){var t=e.x,n=e.y,o=window,r=o.devicePixelRatio||1;return{x:ve(t*r)/r||0,y:ve(n*r)/r||0}}function Tt(e){var t,n=e.popper,o=e.popperRect,r=e.placement,a=e.variation,i=e.offsets,u=e.position,s=e.gpuAcceleration,l=e.adaptive,f=e.roundOffsets,d=e.isFixed,h=i.x,m=h===void 0?0:h,g=i.y,v=g===void 0?0:g,T=typeof f=="function"?f({x:m,y:v}):{x:m,y:v};m=T.x,v=T.y;var p=i.hasOwnProperty("x"),w=i.hasOwnProperty("y"),E=W,b=H,C=window;if(l){var x=Be(n),O="clientHeight",R="clientWidth";if(x===z(n)&&(x=ne(n),Q(x).position!=="static"&&u==="absolute"&&(O="scrollHeight",R="scrollWidth")),x=x,r===H||(r===W||r===U)&&a===xe){b=K;var I=d&&x===C&&C.visualViewport?C.visualViewport.height:x[O];v-=I-o.height,v*=s?1:-1}if(r===W||(r===H||r===K)&&a===xe){E=U;var P=d&&x===C&&C.visualViewport?C.visualViewport.width:x[R];m-=P-o.width,m*=s?1:-1}}var k=Object.assign({position:u},l&&uo),D=f===!0?po({x:m,y:v}):{x:m,y:v};if(m=D.x,v=D.y,s){var S;return Object.assign({},k,(S={},S[b]=w?"0":"",S[E]=p?"0":"",S.transform=(C.devicePixelRatio||1)<=1?"translate("+m+"px, "+v+"px)":"translate3d("+m+"px, "+v+"px, 0)",S))}return Object.assign({},k,(t={},t[b]=w?v+"px":"",t[E]=p?m+"px":"",t.transform="",t))}function co(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=o===void 0?!0:o,a=n.adaptive,i=a===void 0?!0:a,u=n.roundOffsets,s=u===void 0?!0:u,l={placement:G(t.placement),variation:ge(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Tt(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Tt(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var zt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:co,data:{}},Le={passive:!0};function fo(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,a=r===void 0?!0:r,i=o.resize,u=i===void 0?!0:i,s=z(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(f){f.addEventListener("scroll",n.update,Le)}),u&&s.addEventListener("resize",n.update,Le),function(){a&&l.forEach(function(f){f.removeEventListener("scroll",n.update,Le)}),u&&s.removeEventListener("resize",n.update,Le)}}var Vt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:fo,data:{}},vo={left:"right",right:"left",bottom:"top",top:"bottom"};function Ne(e){return e.replace(/left|right|bottom|top/g,function(t){return vo[t]})}var mo={start:"end",end:"start"};function Et(e){return e.replace(/start|end/g,function(t){return mo[t]})}function nt(e){var t=z(e),n=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:n,scrollTop:o}}function ot(e){return me(ne(e)).left+nt(e).scrollLeft}function go(e){var t=z(e),n=ne(e),o=t.visualViewport,r=n.clientWidth,a=n.clientHeight,i=0,u=0;return o&&(r=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=o.offsetLeft,u=o.offsetTop)),{width:r,height:a,x:i+ot(e),y:u}}function ho(e){var t,n=ne(e),o=nt(e),r=(t=e.ownerDocument)==null?void 0:t.body,a=ae(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=ae(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),u=-o.scrollLeft+ot(e),s=-o.scrollTop;return Q(r||n).direction==="rtl"&&(u+=ae(n.clientWidth,r?r.clientWidth:0)-a),{width:a,height:i,x:u,y:s}}function rt(e){var t=Q(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function Zt(e){return["html","body","#document"].indexOf(J(e))>=0?e.ownerDocument.body:q(e)&&rt(e)?e:Zt(Ke(e))}function Ee(e,t){var n;t===void 0&&(t=[]);var o=Zt(e),r=o===((n=e.ownerDocument)==null?void 0:n.body),a=z(o),i=r?[a].concat(a.visualViewport||[],rt(o)?o:[]):o,u=t.concat(i);return r?u:u.concat(Ee(Ke(i)))}function Ge(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function bo(e){var t=me(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Ct(e,t){return t===$t?Ge(go(e)):de(t)?bo(t):Ge(ho(ne(e)))}function yo(e){var t=Ee(Ke(e)),n=["absolute","fixed"].indexOf(Q(e).position)>=0,o=n&&q(e)?Be(e):e;return de(o)?t.filter(function(r){return de(r)&&Wt(r,o)&&J(r)!=="body"}):[]}function wo(e,t,n){var o=t==="clippingParents"?yo(e):[].concat(t),r=[].concat(o,[n]),a=r[0],i=r.reduce(function(u,s){var l=Ct(e,s);return u.top=ae(l.top,u.top),u.right=We(l.right,u.right),u.bottom=We(l.bottom,u.bottom),u.left=ae(l.left,u.left),u},Ct(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function Gt(e){var t=e.reference,n=e.element,o=e.placement,r=o?G(o):null,a=o?ge(o):null,i=t.x+t.width/2-n.width/2,u=t.y+t.height/2-n.height/2,s;switch(r){case H:s={x:i,y:t.y-n.height};break;case K:s={x:i,y:t.y+t.height};break;case U:s={x:t.x+t.width,y:u};break;case W:s={x:t.x-n.width,y:u};break;default:s={x:t.x,y:t.y}}var l=r?tt(r):null;if(l!=null){var f=l==="y"?"height":"width";switch(a){case fe:s[l]=s[l]-(t[f]/2-n[f]/2);break;case xe:s[l]=s[l]+(t[f]/2-n[f]/2);break}}return s}function Pe(e,t){t===void 0&&(t={});var n=t,o=n.placement,r=o===void 0?e.placement:o,a=n.boundary,i=a===void 0?Wn:a,u=n.rootBoundary,s=u===void 0?$t:u,l=n.elementContext,f=l===void 0?ye:l,d=n.altBoundary,h=d===void 0?!1:d,m=n.padding,g=m===void 0?0:m,v=Kt(typeof g!="number"?g:Ut(g,Me)),T=f===ye?qn:ye,p=e.rects.popper,w=e.elements[h?T:f],E=wo(de(w)?w:w.contextElement||ne(e.elements.popper),i,s),b=me(e.elements.reference),C=Gt({reference:b,element:p,strategy:"absolute",placement:r}),x=Ge(Object.assign({},p,C)),O=f===ye?x:b,R={top:E.top-O.top+v.top,bottom:O.bottom-E.bottom+v.bottom,left:E.left-O.left+v.left,right:O.right-E.right+v.right},I=e.modifiersData.offset;if(f===ye&&I){var P=I[r];Object.keys(R).forEach(function(k){var D=[U,K].indexOf(k)>=0?1:-1,S=[H,K].indexOf(k)>=0?"y":"x";R[k]+=P[S]*D})}return R}function Oo(e,t){t===void 0&&(t={});var n=t,o=n.placement,r=n.boundary,a=n.rootBoundary,i=n.padding,u=n.flipVariations,s=n.allowedAutoPlacements,l=s===void 0?Ye:s,f=ge(o),d=f?u?wt:wt.filter(function(g){return ge(g)===f}):Me,h=d.filter(function(g){return l.indexOf(g)>=0});h.length===0&&(h=d);var m=h.reduce(function(g,v){return g[v]=Pe(e,{placement:v,boundary:r,rootBoundary:a,padding:i})[G(v)],g},{});return Object.keys(m).sort(function(g,v){return m[g]-m[v]})}function To(e){if(G(e)===Xe)return[];var t=Ne(e);return[Et(e),t,Et(t)]}function Eo(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,a=r===void 0?!0:r,i=n.altAxis,u=i===void 0?!0:i,s=n.fallbackPlacements,l=n.padding,f=n.boundary,d=n.rootBoundary,h=n.altBoundary,m=n.flipVariations,g=m===void 0?!0:m,v=n.allowedAutoPlacements,T=t.options.placement,p=G(T),w=p===T,E=s||(w||!g?[Ne(T)]:To(T)),b=[T].concat(E).reduce(function(oe,X){return oe.concat(G(X)===Xe?Oo(t,{placement:X,boundary:f,rootBoundary:d,padding:l,flipVariations:g,allowedAutoPlacements:v}):X)},[]),C=t.rects.reference,x=t.rects.popper,O=new Map,R=!0,I=b[0],P=0;P<b.length;P++){var k=b[P],D=G(k),S=ge(k)===fe,N=[H,K].indexOf(D)>=0,_=N?"width":"height",B=Pe(t,{placement:k,boundary:f,rootBoundary:d,altBoundary:h,padding:l}),y=N?S?U:W:S?K:H;C[_]>x[_]&&(y=Ne(y));var $=Ne(y),V=[];if(a&&V.push(B[D]<=0),u&&V.push(B[y]<=0,B[$]<=0),V.every(function(oe){return oe})){I=k,R=!1;break}O.set(k,V)}if(R)for(var Ie=g?3:1,Ue=function(oe){var X=b.find(function(_e){var be=O.get(_e);if(be)return be.slice(0,oe).every(function(ue){return ue})});if(X)return I=X,"break"},he=Ie;he>0;he--){var je=Ue(he);if(je==="break")break}t.placement!==I&&(t.modifiersData[o]._skip=!0,t.placement=I,t.reset=!0)}}var Co={name:"flip",enabled:!0,phase:"main",fn:Eo,requiresIfExists:["offset"],data:{_skip:!1}};function Rt(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function At(e){return[H,U,K,W].some(function(t){return e[t]>=0})}function Ro(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,i=Pe(t,{elementContext:"reference"}),u=Pe(t,{altBoundary:!0}),s=Rt(i,o),l=Rt(u,r,a),f=At(s),d=At(l);t.modifiersData[n]={referenceClippingOffsets:s,popperEscapeOffsets:l,isReferenceHidden:f,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":d})}var Ao={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ro};function xo(e,t,n){var o=G(e),r=[W,H].indexOf(o)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,i=a[0],u=a[1];return i=i||0,u=(u||0)*r,[W,U].indexOf(o)>=0?{x:u,y:i}:{x:i,y:u}}function Po(e){var t=e.state,n=e.options,o=e.name,r=n.offset,a=r===void 0?[0,0]:r,i=Ye.reduce(function(f,d){return f[d]=xo(d,t.rects,a),f},{}),u=i[t.placement],s=u.x,l=u.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=l),t.modifiersData[o]=i}var So={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Po};function ko(e){var t=e.state,n=e.name;t.modifiersData[n]=Gt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Jt={name:"popperOffsets",enabled:!0,phase:"read",fn:ko,data:{}};function Mo(e){return e==="x"?"y":"x"}function Bo(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,a=r===void 0?!0:r,i=n.altAxis,u=i===void 0?!1:i,s=n.boundary,l=n.rootBoundary,f=n.altBoundary,d=n.padding,h=n.tether,m=h===void 0?!0:h,g=n.tetherOffset,v=g===void 0?0:g,T=Pe(t,{boundary:s,rootBoundary:l,padding:d,altBoundary:f}),p=G(t.placement),w=ge(t.placement),E=!w,b=tt(p),C=Mo(b),x=t.modifiersData.popperOffsets,O=t.rects.reference,R=t.rects.popper,I=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,P=typeof I=="number"?{mainAxis:I,altAxis:I}:Object.assign({mainAxis:0,altAxis:0},I),k=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(x){if(a){var S,N=b==="y"?H:W,_=b==="y"?K:U,B=b==="y"?"height":"width",y=x[b],$=y+T[N],V=y-T[_],Ie=m?-R[B]/2:0,Ue=w===fe?O[B]:R[B],he=w===fe?-R[B]:-O[B],je=t.elements.arrow,oe=m&&je?et(je):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:qt(),_e=X[N],be=X[_],ue=Te(0,O[B],oe[B]),ln=E?O[B]/2-Ie-ue-_e-P.mainAxis:Ue-ue-_e-P.mainAxis,un=E?-O[B]/2+Ie+ue+be+P.mainAxis:he+ue+be+P.mainAxis,ze=t.elements.arrow&&Be(t.elements.arrow),pn=ze?b==="y"?ze.clientTop||0:ze.clientLeft||0:0,lt=(S=k==null?void 0:k[b])!=null?S:0,cn=y+ln-lt-pn,fn=y+un-lt,ut=Te(m?We($,cn):$,y,m?ae(V,fn):V);x[b]=ut,D[b]=ut-y}if(u){var pt,dn=b==="x"?H:W,vn=b==="x"?K:U,re=x[C],Fe=C==="y"?"height":"width",ct=re+T[dn],ft=re-T[vn],Ve=[H,W].indexOf(p)!==-1,dt=(pt=k==null?void 0:k[C])!=null?pt:0,vt=Ve?ct:re-O[Fe]-R[Fe]-dt+P.altAxis,mt=Ve?re+O[Fe]+R[Fe]-dt-P.altAxis:ft,gt=m&&Ve?ro(vt,re,mt):Te(m?vt:ct,re,m?mt:ft);x[C]=gt,D[C]=gt-re}t.modifiersData[o]=D}}var Io={name:"preventOverflow",enabled:!0,phase:"main",fn:Bo,requiresIfExists:["offset"]};function jo(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function _o(e){return e===z(e)||!q(e)?nt(e):jo(e)}function Fo(e){var t=e.getBoundingClientRect(),n=ve(t.width)/e.offsetWidth||1,o=ve(t.height)/e.offsetHeight||1;return n!==1||o!==1}function Do(e,t,n){n===void 0&&(n=!1);var o=q(t),r=q(t)&&Fo(t),a=ne(t),i=me(e,r),u={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(o||!o&&!n)&&((J(t)!=="body"||rt(a))&&(u=_o(t)),q(t)?(s=me(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):a&&(s.x=ot(a))),{x:i.left+u.scrollLeft-s.x,y:i.top+u.scrollTop-s.y,width:i.width,height:i.height}}function Lo(e){var t=new Map,n=new Set,o=[];e.forEach(function(a){t.set(a.name,a)});function r(a){n.add(a.name);var i=[].concat(a.requires||[],a.requiresIfExists||[]);i.forEach(function(u){if(!n.has(u)){var s=t.get(u);s&&r(s)}}),o.push(a)}return e.forEach(function(a){n.has(a.name)||r(a)}),o}function No(e){var t=Lo(e);return Qn.reduce(function(n,o){return n.concat(t.filter(function(r){return r.phase===o}))},[])}function $o(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Ho(e){var t=e.reduce(function(n,o){var r=n[o.name];return n[o.name]=r?Object.assign({},r,o,{options:Object.assign({},r.options,o.options),data:Object.assign({},r.data,o.data)}):o,n},{});return Object.keys(t).map(function(n){return t[n]})}var xt={placement:"bottom",modifiers:[],strategy:"absolute"};function Pt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function at(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,o=n===void 0?[]:n,r=t.defaultOptions,a=r===void 0?xt:r;return function(i,u,s){s===void 0&&(s=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},xt,a),modifiersData:{},elements:{reference:i,popper:u},attributes:{},styles:{}},f=[],d=!1,h={state:l,setOptions:function(v){var T=typeof v=="function"?v(l.options):v;g(),l.options=Object.assign({},a,l.options,T),l.scrollParents={reference:de(i)?Ee(i):i.contextElement?Ee(i.contextElement):[],popper:Ee(u)};var p=No(Ho([].concat(o,l.options.modifiers)));return l.orderedModifiers=p.filter(function(w){return w.enabled}),m(),h.update()},forceUpdate:function(){if(!d){var v=l.elements,T=v.reference,p=v.popper;if(Pt(T,p)){l.rects={reference:Do(T,Be(p),l.options.strategy==="fixed"),popper:et(p)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(R){return l.modifiersData[R.name]=Object.assign({},R.data)});for(var w=0;w<l.orderedModifiers.length;w++){if(l.reset===!0){l.reset=!1,w=-1;continue}var E=l.orderedModifiers[w],b=E.fn,C=E.options,x=C===void 0?{}:C,O=E.name;typeof b=="function"&&(l=b({state:l,options:x,name:O,instance:h})||l)}}}},update:$o(function(){return new Promise(function(v){h.forceUpdate(),v(l)})}),destroy:function(){g(),d=!0}};if(!Pt(i,u))return h;h.setOptions(s).then(function(v){!d&&s.onFirstUpdate&&s.onFirstUpdate(v)});function m(){l.orderedModifiers.forEach(function(v){var T=v.name,p=v.options,w=p===void 0?{}:p,E=v.effect;if(typeof E=="function"){var b=E({state:l,name:T,instance:h,options:w}),C=function(){};f.push(b||C)}})}function g(){f.forEach(function(v){return v()}),f=[]}return h}}at();var Wo=[Vt,Jt,zt,Ht];at({defaultModifiers:Wo});var qo=[Vt,Jt,zt,Ht,So,Co,Io,lo,Ao],Ko=at({defaultModifiers:qo});const Uo=(e,t,n={})=>{const o={name:"updateState",enabled:!0,phase:"write",fn:({state:s})=>{const l=zo(s);Object.assign(i.value,l)},requires:["computeStyles"]},r=A(()=>{const{onFirstUpdate:s,placement:l,strategy:f,modifiers:d}=c(n);return{onFirstUpdate:s,placement:l||"bottom",strategy:f||"absolute",modifiers:[...d||[],o,{name:"applyStyles",enabled:!1}]}}),a=gn(),i=j({styles:{popper:{position:c(r).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),u=()=>{a.value&&(a.value.destroy(),a.value=void 0)};return F(r,s=>{const l=c(a);l&&l.setOptions(s)},{deep:!0}),F([e,t],([s,l])=>{u(),!(!s||!l)&&(a.value=Ko(s,l,c(r)))}),Se(()=>{u()}),{state:A(()=>{var s;return{...((s=c(a))==null?void 0:s.state)||{}}}),styles:A(()=>c(i).styles),attributes:A(()=>c(i).attributes),update:()=>{var s;return(s=c(a))==null?void 0:s.update()},forceUpdate:()=>{var s;return(s=c(a))==null?void 0:s.forceUpdate()},instanceRef:A(()=>c(a))}};function zo(e){const t=Object.keys(e.elements),n=ht(t.map(r=>[r,e.styles[r]||{}])),o=ht(t.map(r=>[r,e.attributes[r]]));return{styles:n,attributes:o}}function St(){let e;const t=(o,r)=>{n(),e=window.setTimeout(o,r)},n=()=>window.clearTimeout(e);return hn(()=>n()),{registerTimeout:t,cancelTimeout:n}}let kt;const Xt=()=>{const e=yn(),t=Fn(),n=A(()=>`${e.value}-popper-container-${t.prefix}`),o=A(()=>`#${n.value}`);return{id:n,selector:o}},Vo=e=>{const t=document.createElement("div");return t.id=e,document.body.appendChild(t),t},Zo=()=>{const{id:e,selector:t}=Xt();return bn(()=>{Oe&&!kt&&!document.body.querySelector(t.value)&&(kt=Vo(e.value))}),{id:e,selector:t}},Go=ee({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),Jo=({showAfter:e,hideAfter:t,autoClose:n,open:o,close:r})=>{const{registerTimeout:a}=St(),{registerTimeout:i,cancelTimeout:u}=St();return{onOpen:f=>{a(()=>{o(f);const d=c(n);wn(d)&&d>0&&i(()=>{r(f)},d)},c(e))},onClose:f=>{u(),a(()=>{r(f)},c(t))}}},Yt=Symbol("elForwardRef"),Xo=e=>{Ce(Yt,{setForwardRef:n=>{e.value=n}})},Yo=e=>({mounted(t){e(t)},updated(t){e(t)},unmounted(){e(null)}}),it=Symbol("popper"),Qt=Symbol("popperContent"),Qo=["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],en=ee({role:{type:String,values:Qo,default:"tooltip"}}),er=L({name:"ElPopper",inheritAttrs:!1}),tr=L({...er,props:en,setup(e,{expose:t}){const n=e,o=j(),r=j(),a=j(),i=j(),u=A(()=>n.role),s={triggerRef:o,popperInstanceRef:r,contentRef:a,referenceRef:i,role:u};return t(s),Ce(it,s),(l,f)=>ie(l.$slots,"default")}});var nr=se(tr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);const tn=ee({arrowOffset:{type:Number,default:5}}),or=L({name:"ElPopperArrow",inheritAttrs:!1}),rr=L({...or,props:tn,setup(e,{expose:t}){const n=e,o=ke("popper"),{arrowOffset:r,arrowRef:a,arrowStyle:i}=le(Qt,void 0);return F(()=>n.arrowOffset,u=>{r.value=u}),Se(()=>{a.value=void 0}),t({arrowRef:a}),(u,s)=>(Z(),$e("span",{ref_key:"arrowRef",ref:a,class:jt(c(o).e("arrow")),style:On(c(i)),"data-popper-arrow":""},null,6))}});var ar=se(rr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);const ir="ElOnlyChild",sr=L({name:ir,setup(e,{slots:t,attrs:n}){var o;const r=le(Yt),a=Yo((o=r==null?void 0:r.setForwardRef)!=null?o:Ze);return()=>{var i;const u=(i=t.default)==null?void 0:i.call(t,n);if(!u||u.length>1)return null;const s=nn(u);return s?_t(Tn(s,n),[[a]]):null}}});function nn(e){if(!e)return null;const t=e;for(const n of t){if(En(n))switch(n.type){case An:continue;case Rn:case"svg":return Mt(n);case Cn:return nn(n.children);default:return n}return Mt(n)}return null}function Mt(e){const t=ke("only-child");return Re("span",{class:t.e("content")},[e])}const on=ee({virtualRef:{type:M(Object)},virtualTriggering:Boolean,onMouseenter:{type:M(Function)},onMouseleave:{type:M(Function)},onClick:{type:M(Function)},onKeydown:{type:M(Function)},onFocus:{type:M(Function)},onBlur:{type:M(Function)},onContextmenu:{type:M(Function)},id:String,open:Boolean}),lr=L({name:"ElPopperTrigger",inheritAttrs:!1}),ur=L({...lr,props:on,setup(e,{expose:t}){const n=e,{role:o,triggerRef:r}=le(it,void 0);Xo(r);const a=A(()=>u.value?n.id:void 0),i=A(()=>{if(o&&o.value==="tooltip")return n.open&&n.id?n.id:void 0}),u=A(()=>{if(o&&o.value!=="tooltip")return o.value}),s=A(()=>u.value?`${n.open}`:void 0);let l;return qe(()=>{F(()=>n.virtualRef,f=>{f&&(r.value=Ft(f))},{immediate:!0}),F(r,(f,d)=>{l==null||l(),l=void 0,He(f)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach(h=>{var m;const g=n[h];g&&(f.addEventListener(h.slice(2).toLowerCase(),g),(m=d==null?void 0:d.removeEventListener)==null||m.call(d,h.slice(2).toLowerCase(),g))}),l=F([a,i,u,s],h=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((m,g)=>{Lt(h[g])?f.removeAttribute(m):f.setAttribute(m,h[g])})},{immediate:!0})),He(d)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(h=>d.removeAttribute(h))},{immediate:!0})}),Se(()=>{l==null||l(),l=void 0}),t({triggerRef:r}),(f,d)=>f.virtualTriggering?Ae("v-if",!0):(Z(),ce(c(sr),Je({key:0},f.$attrs,{"aria-controls":c(a),"aria-describedby":c(i),"aria-expanded":c(s),"aria-haspopup":c(u)}),{default:te(()=>[ie(f.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}});var pr=se(ur,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);const cr=["fixed","absolute"],fr=ee({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:M(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:Ye,default:"bottom"},popperOptions:{type:M(Object),default:()=>({})},strategy:{type:String,values:cr,default:"absolute"}}),rn=ee({...fr,id:String,style:{type:M([String,Array,Object])},className:{type:M([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:M([String,Array,Object])},popperStyle:{type:M([String,Array,Object])},referenceEl:{type:M(Object)},triggerTargetEl:{type:M(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},ariaLabel:{type:String,default:void 0},virtualTriggering:Boolean,zIndex:Number}),dr={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},vr=(e,t=[])=>{const{placement:n,strategy:o,popperOptions:r}=e,a={placement:n,strategy:o,...r,modifiers:[...gr(e),...t]};return hr(a,r==null?void 0:r.modifiers),a},mr=e=>{if(Oe)return Ft(e)};function gr(e){const{offset:t,gpuAcceleration:n,fallbackPlacements:o}=e;return[{name:"offset",options:{offset:[0,t??12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:o}},{name:"computeStyles",options:{gpuAcceleration:n}}]}function hr(e,t){t&&(e.modifiers=[...e.modifiers,...t??[]])}const br=0,yr=e=>{const{popperInstanceRef:t,contentRef:n,triggerRef:o,role:r}=le(it,void 0),a=j(),i=j(),u=A(()=>({name:"eventListeners",enabled:!!e.visible})),s=A(()=>{var p;const w=c(a),E=(p=c(i))!=null?p:br;return{name:"arrow",enabled:!Nn(w),options:{element:w,padding:E}}}),l=A(()=>({onFirstUpdate:()=>{g()},...vr(e,[c(s),c(u)])})),f=A(()=>mr(e.referenceEl)||c(o)),{attributes:d,state:h,styles:m,update:g,forceUpdate:v,instanceRef:T}=Uo(f,n,l);return F(T,p=>t.value=p),qe(()=>{F(()=>{var p;return(p=c(f))==null?void 0:p.getBoundingClientRect()},()=>{g()})}),{attributes:d,arrowRef:a,contentRef:n,instanceRef:T,state:h,styles:m,role:r,forceUpdate:v,update:g}},wr=(e,{attributes:t,styles:n,role:o})=>{const{nextZIndex:r}=xn(),a=ke("popper"),i=A(()=>c(t).popper),u=j(e.zIndex||r()),s=A(()=>[a.b(),a.is("pure",e.pure),a.is(e.effect),e.popperClass]),l=A(()=>[{zIndex:c(u)},c(n).popper,e.popperStyle||{}]),f=A(()=>o.value==="dialog"?"false":void 0),d=A(()=>c(n).arrow||{});return{ariaModal:f,arrowStyle:d,contentAttrs:i,contentClass:s,contentStyle:l,contentZIndex:u,updateZIndex:()=>{u.value=e.zIndex||r()}}},Or=(e,t)=>{const n=j(!1),o=j();return{focusStartRef:o,trapped:n,onFocusAfterReleased:l=>{var f;((f=l.detail)==null?void 0:f.focusReason)!=="pointer"&&(o.value="first",t("blur"))},onFocusAfterTrapped:()=>{t("focus")},onFocusInTrap:l=>{e.visible&&!n.value&&(l.target&&(o.value=l.target),n.value=!0)},onFocusoutPrevented:l=>{e.trapping||(l.detail.focusReason==="pointer"&&l.preventDefault(),n.value=!1)},onReleaseRequested:()=>{n.value=!1,t("close")}}},Tr=L({name:"ElPopperContent"}),Er=L({...Tr,props:rn,emits:dr,setup(e,{expose:t,emit:n}){const o=e,{focusStartRef:r,trapped:a,onFocusAfterReleased:i,onFocusAfterTrapped:u,onFocusInTrap:s,onFocusoutPrevented:l,onReleaseRequested:f}=Or(o,n),{attributes:d,arrowRef:h,contentRef:m,styles:g,instanceRef:v,role:T,update:p}=yr(o),{ariaModal:w,arrowStyle:E,contentAttrs:b,contentClass:C,contentStyle:x,updateZIndex:O}=wr(o,{styles:g,attributes:d,role:T}),R=le(yt,void 0),I=j();Ce(Qt,{arrowStyle:E,arrowRef:h,arrowOffset:I}),R&&(R.addInputId||R.removeInputId)&&Ce(yt,{...R,addInputId:Ze,removeInputId:Ze});let P;const k=(S=!0)=>{p(),S&&O()},D=()=>{k(!1),o.visible&&o.focusOnShow?a.value=!0:o.visible===!1&&(a.value=!1)};return qe(()=>{F(()=>o.triggerTargetEl,(S,N)=>{P==null||P(),P=void 0;const _=c(S||m.value),B=c(N||m.value);He(_)&&(P=F([T,()=>o.ariaLabel,w,()=>o.id],y=>{["role","aria-label","aria-modal","id"].forEach(($,V)=>{Lt(y[V])?_.removeAttribute($):_.setAttribute($,y[V])})},{immediate:!0})),B!==_&&He(B)&&["role","aria-label","aria-modal","id"].forEach(y=>{B.removeAttribute(y)})},{immediate:!0}),F(()=>o.visible,D,{immediate:!0})}),Se(()=>{P==null||P(),P=void 0}),t({popperContentRef:m,popperInstanceRef:v,updatePopper:k,contentStyle:x}),(S,N)=>(Z(),$e("div",Je({ref_key:"contentRef",ref:m},c(b),{style:c(x),class:c(C),tabindex:"-1",onMouseenter:N[0]||(N[0]=_=>S.$emit("mouseenter",_)),onMouseleave:N[1]||(N[1]=_=>S.$emit("mouseleave",_))}),[Re(c(Ln),{trapped:c(a),"trap-on-focus-in":!0,"focus-trap-el":c(m),"focus-start-el":c(r),onFocusAfterTrapped:c(u),onFocusAfterReleased:c(i),onFocusin:c(s),onFocusoutPrevented:c(l),onReleaseRequested:c(f)},{default:te(()=>[ie(S.$slots,"default")]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16))}});var Cr=se(Er,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);const Rr=Dt(nr),st=Symbol("elTooltip"),an=ee({...Go,...rn,appendTo:{type:M([String,Object])},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,ariaLabel:String,visible:{type:M(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean}),sn=ee({...on,disabled:Boolean,trigger:{type:M([String,Array]),default:"hover"},triggerKeys:{type:M(Array),default:()=>[bt.enter,bt.space]}}),{useModelToggleProps:Ar,useModelToggleEmits:xr,useModelToggle:Pr}=Nt("visible"),Sr=ee({...en,...Ar,...an,...sn,...tn,showArrow:{type:Boolean,default:!0}}),kr=[...xr,"before-show","before-hide","show","hide","open","close"],Mr=(e,t)=>Pn(e)?e.includes(t):e===t,pe=(e,t,n)=>o=>{Mr(c(e),t)&&n(o)},Br=L({name:"ElTooltipTrigger"}),Ir=L({...Br,props:sn,setup(e,{expose:t}){const n=e,o=ke("tooltip"),{controlled:r,id:a,open:i,onOpen:u,onClose:s,onToggle:l}=le(st,void 0),f=j(null),d=()=>{if(c(r)||n.disabled)return!0},h=we(n,"trigger"),m=Y(d,pe(h,"hover",u)),g=Y(d,pe(h,"hover",s)),v=Y(d,pe(h,"click",b=>{b.button===0&&l(b)})),T=Y(d,pe(h,"focus",u)),p=Y(d,pe(h,"focus",s)),w=Y(d,pe(h,"contextmenu",b=>{b.preventDefault(),l(b)})),E=Y(d,b=>{const{code:C}=b;n.triggerKeys.includes(C)&&(b.preventDefault(),l(b))});return t({triggerRef:f}),(b,C)=>(Z(),ce(c(pr),{id:c(a),"virtual-ref":b.virtualRef,open:c(i),"virtual-triggering":b.virtualTriggering,class:jt(c(o).e("trigger")),onBlur:c(p),onClick:c(v),onContextmenu:c(w),onFocus:c(T),onMouseenter:c(m),onMouseleave:c(g),onKeydown:c(E)},{default:te(()=>[ie(b.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}});var jr=se(Ir,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);const _r=L({name:"ElTooltipContent",inheritAttrs:!1}),Fr=L({..._r,props:an,setup(e,{expose:t}){const n=e,{selector:o}=Xt(),r=ke("tooltip"),a=j(null),i=j(!1),{controlled:u,id:s,open:l,trigger:f,onClose:d,onOpen:h,onShow:m,onHide:g,onBeforeShow:v,onBeforeHide:T}=le(st,void 0),p=A(()=>n.transition||`${r.namespace.value}-fade-in-linear`),w=A(()=>n.persistent);Se(()=>{i.value=!0});const E=A(()=>c(w)?!0:c(l)),b=A(()=>n.disabled?!1:c(l)),C=A(()=>n.appendTo||o.value),x=A(()=>{var y;return(y=n.style)!=null?y:{}}),O=A(()=>!c(l)),R=()=>{g()},I=()=>{if(c(u))return!0},P=Y(I,()=>{n.enterable&&c(f)==="hover"&&h()}),k=Y(I,()=>{c(f)==="hover"&&d()}),D=()=>{var y,$;($=(y=a.value)==null?void 0:y.updatePopper)==null||$.call(y),v==null||v()},S=()=>{T==null||T()},N=()=>{m(),B=Bn(A(()=>{var y;return(y=a.value)==null?void 0:y.popperContentRef}),()=>{if(c(u))return;c(f)!=="hover"&&d()})},_=()=>{n.virtualTriggering||d()};let B;return F(()=>c(l),y=>{y||B==null||B()},{flush:"post"}),F(()=>n.content,()=>{var y,$;($=(y=a.value)==null?void 0:y.updatePopper)==null||$.call(y)}),t({contentRef:a}),(y,$)=>(Z(),ce(Mn,{disabled:!y.teleported,to:c(C)},[Re(kn,{name:c(p),onAfterLeave:R,onBeforeEnter:D,onAfterEnter:N,onBeforeLeave:S},{default:te(()=>[c(E)?_t((Z(),ce(c(Cr),Je({key:0,id:c(s),ref_key:"contentRef",ref:a},y.$attrs,{"aria-label":y.ariaLabel,"aria-hidden":c(O),"boundaries-padding":y.boundariesPadding,"fallback-placements":y.fallbackPlacements,"gpu-acceleration":y.gpuAcceleration,offset:y.offset,placement:y.placement,"popper-options":y.popperOptions,strategy:y.strategy,effect:y.effect,enterable:y.enterable,pure:y.pure,"popper-class":y.popperClass,"popper-style":[y.popperStyle,c(x)],"reference-el":y.referenceEl,"trigger-target-el":y.triggerTargetEl,visible:c(b),"z-index":y.zIndex,onMouseenter:c(P),onMouseleave:c(k),onBlur:_,onClose:c(d)}),{default:te(()=>[i.value?Ae("v-if",!0):ie(y.$slots,"default",{key:0})]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[Sn,c(b)]]):Ae("v-if",!0)]),_:3},8,["name"])],8,["disabled","to"]))}});var Dr=se(Fr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);const Lr=["innerHTML"],Nr={key:1},$r=L({name:"ElTooltip"}),Hr=L({...$r,props:Sr,emits:kr,setup(e,{expose:t,emit:n}){const o=e;Zo();const r=Dn(),a=j(),i=j(),u=()=>{var p;const w=c(a);w&&((p=w.popperInstanceRef)==null||p.update())},s=j(!1),l=j(),{show:f,hide:d,hasUpdateHandler:h}=Pr({indicator:s,toggleReason:l}),{onOpen:m,onClose:g}=Jo({showAfter:we(o,"showAfter"),hideAfter:we(o,"hideAfter"),autoClose:we(o,"autoClose"),open:f,close:d}),v=A(()=>It(o.visible)&&!h.value);Ce(st,{controlled:v,id:r,open:In(s),trigger:we(o,"trigger"),onOpen:p=>{m(p)},onClose:p=>{g(p)},onToggle:p=>{c(s)?g(p):m(p)},onShow:()=>{n("show",l.value)},onHide:()=>{n("hide",l.value)},onBeforeShow:()=>{n("before-show",l.value)},onBeforeHide:()=>{n("before-hide",l.value)},updatePopper:u}),F(()=>o.disabled,p=>{p&&s.value&&(s.value=!1)});const T=()=>{var p,w;const E=(w=(p=i.value)==null?void 0:p.contentRef)==null?void 0:w.popperContentRef;return E&&E.contains(document.activeElement)};return jn(()=>s.value&&d()),t({popperRef:a,contentRef:i,isFocusInsideContent:T,updatePopper:u,onOpen:m,onClose:g,hide:d}),(p,w)=>(Z(),ce(c(Rr),{ref_key:"popperRef",ref:a,role:p.role},{default:te(()=>[Re(jr,{disabled:p.disabled,trigger:p.trigger,"trigger-keys":p.triggerKeys,"virtual-ref":p.virtualRef,"virtual-triggering":p.virtualTriggering},{default:te(()=>[p.$slots.default?ie(p.$slots,"default",{key:0}):Ae("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),Re(Dr,{ref_key:"contentRef",ref:i,"aria-label":p.ariaLabel,"boundaries-padding":p.boundariesPadding,content:p.content,disabled:p.disabled,effect:p.effect,enterable:p.enterable,"fallback-placements":p.fallbackPlacements,"hide-after":p.hideAfter,"gpu-acceleration":p.gpuAcceleration,offset:p.offset,persistent:p.persistent,"popper-class":p.popperClass,"popper-style":p.popperStyle,placement:p.placement,"popper-options":p.popperOptions,pure:p.pure,"raw-content":p.rawContent,"reference-el":p.referenceEl,"trigger-target-el":p.triggerTargetEl,"show-after":p.showAfter,strategy:p.strategy,teleported:p.teleported,transition:p.transition,"virtual-triggering":p.virtualTriggering,"z-index":p.zIndex,"append-to":p.appendTo},{default:te(()=>[ie(p.$slots,"content",{},()=>[p.rawContent?(Z(),$e("span",{key:0,innerHTML:p.content},null,8,Lr)):(Z(),$e("span",Nr,_n(p.content),1))]),p.showArrow?(Z(),ce(c(ar),{key:0,"arrow-offset":p.arrowOffset},null,8,["arrow-offset"])):Ae("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])]),_:3},8,["role"]))}});var Wr=se(Hr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);const Zr=Dt(Wr);export{Zr as E,st as T,Ye as a,sn as b,an as u};