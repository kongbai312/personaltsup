import{_ as v}from"./pr_headerImg-2227746a.js";import{d as m,a6 as w,u as y,l as C,b as a,c as d,s,w as _,f as l,P as N,a1 as k,i as I,e as c,z as E}from"./index-ae23ef46.js";import{E as j}from"./el-card-35757019.js";import{E as B,a as $}from"./el-carousel-item-d776d8bd.js";import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-a21c3982.js";import"./vnode-a0a03cf1.js";import"./throttle-bde9afc3.js";import"./isObject-5520b7e1.js";const z=[{id:1,title:"说 说",img:"https://pic.imgdb.cn/item/64cdf4701ddac507cc076b1a.jpg",path:"/talk",index:0},{id:2,title:"相 册",img:"https://pic.imgdb.cn/item/64cdf4701ddac507cc076b75.jpg",path:"/album",index:1},{id:3,title:"留 言",img:"https://pic.imgdb.cn/item/64cdf4701ddac507cc076b34.jpg",path:"/leaveword",index:2},{id:4,title:"网 站",img:"https://pic.imgdb.cn/item/64cdf4701ddac507cc076b64.jpg",path:"/web",index:3}],R={class:"relaxNarbar_container"},S=["onClick"],V=["src"],A={class:"carouselItem_text"},D=m({__name:"relaxNarbar",setup(g){const{width:o}=w(),p=y();let r=C(0);const n=(t,i)=>{r.value=t},h=(t,i)=>{i===r.value&&p.push(t)};return(t,i)=>{const f=$,x=B,b=j;return a(),d("div",R,[s(b,{shadow:"hover",class:"relaxNarbar_elCard"},{default:_(()=>[s(x,{onChange:n,trigger:"click",type:"card",autoplay:!1,class:"relaxNarbar_carousel",arrow:"always",direction:l(o)<=400?"vertical":"horizontal"},{default:_(()=>[(a(!0),d(N,null,k(l(z),e=>(a(),I(f,{class:"carouselItem",key:e.id},{default:_(()=>[c("div",{class:"carouselItem_content",onClick:W=>h(e.path,e.index)},[c("img",{class:"carouselItem_img",src:e.img,alt:""},null,8,V),c("div",A,E(e.title),1)],8,S)]),_:2},1024))),128))]),_:1},8,["direction"])]),_:1})])}}});const F=u(D,[["__scopeId","data-v-fade8e6d"]]),J={class:"relax_container"},L={class:"relax_content"},P=m({__name:"index",setup(g){let o="https://pic.imgdb.cn/item/64c09d9f1ddac507cc807523.jpg";return(p,r)=>{const n=v;return a(),d("div",J,[s(n,{titleArr:["休","闲"],img:l(o)},null,8,["img"]),c("div",L,[s(F)])])}}});const X=u(P,[["__scopeId","data-v-31e5d507"]]);export{X as default};