import{d as u,u as g,b as s,c as a,x as n,f as _,e,w as b,X as f,aa as h,B as i}from"./index-382c556c.js";import{E as x}from"./el-card-9f0c2b10.js";import{_ as v}from"./pr_headerImg-14bb683e.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const k=[{id:1,image:"https://pic.imgdb.cn/item/64c4bcd71ddac507cc35faa0.jpg",title:"精选壁纸",text:"图片"},{id:2,image:"https://pic.imgdb.cn/item/64c4bcd71ddac507cc35faa0.jpg",title:"测试壁纸",text:"图片"}],I={class:"album_container"},y={class:"album_content"},B=["onClick"],j=["src"],w={class:"albumItem_content"},E={class:"text"},$={class:"textHover"},A=u({__name:"album",setup(L){let l="https://pic.imgdb.cn/item/64c4b14a1ddac507cc1f832d.jpg";const d=g(),r=(c,o)=>{d.push(`/album/${c}?title=${o}`)};return(c,o)=>{const m=v,p=x;return s(),a("div",I,[n(m,{img:_(l),titleArr:["相","册"]},null,8,["img"]),e("div",y,[n(p,{shadow:"hover",class:"album_elCard"},{default:b(()=>[(s(!0),a(f,null,h(_(k),t=>(s(),a("div",{class:"albumItem",onClick:N=>r(t.id,t.title),key:t.id},[e("img",{class:"albumItem_img",src:t.image,alt:""},null,8,j),e("div",w,[e("span",E,i(t.title),1),e("span",$,i(t.text),1)])],8,B))),128))]),_:1})])])}}});const R=C(A,[["__scopeId","data-v-f0066580"]]);export{R as default};