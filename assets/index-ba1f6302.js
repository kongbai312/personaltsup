import{s as n}from"./index-fc725d61.js";const d=()=>{let c=n(!1),t=n();return{showDialog:c,activeIcon:t,iconClick:e=>{e==="qq"||e==="wechat"?(c.value=!0,t.value=e):e==="github"&&(window.location.href="https://github.com/kongbai312")}}},s=()=>{let c=["https://pic.imgdb.cn/item/64ce21f21ddac507cc81733b.jpg","https://pic.imgdb.cn/item/64ce21fa1ddac507cc818ef1.jpg","https://pic.imgdb.cn/item/64ce22011ddac507cc81a76c.jpg","https://pic.imgdb.cn/item/64ce22081ddac507cc81b527.jpg","https://pic.imgdb.cn/item/64ce220f1ddac507cc81c32e.webp","https://pic.imgdb.cn/item/64cdf7521ddac507cc0fa9ef.jpg"],t=Math.round(Math.random()*(c.length-1));return c[t]},m=c=>{const t=["https://pic.imgdb.cn/item/64e72e54661c6c8e54b2bc7e.webp","https://pic.imgdb.cn/item/64e73250661c6c8e54b3b20e.webp","https://pic.imgdb.cn/item/64e732cc661c6c8e54b3c920.jpg"],i=["https://pic.imgdb.cn/item/64ea22c7661c6c8e5456e4ff.webp","https://pic.imgdb.cn/item/64ea2325661c6c8e5456f684.webp","https://pic.imgdb.cn/item/64ea236e661c6c8e54570014.webp"],e=[...i,...t];let a=Math.round(Math.random()*((c!==2?t.length:e.length)-1));return c===2?e[a]:c===1?t[a]:i[a]};export{s as a,m as b,d as u};
