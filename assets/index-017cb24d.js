import{d,u as _,a as c,o as r,b as h,c as m,e,f as u,p,g as v}from"./index-382c556c.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const t=s=>(p("data-v-e58967b3"),s=s(),v(),s),f={class:"home_container"},b=t(()=>e("h1",{class:"home_title"},"Swhite's  Cabin",-1)),w={class:"home_navbar"},k=t(()=>e("div",{class:"home_circleContainer"},[e("div",{class:"home_circle"}),e("div",{class:"home_circle_img"})],-1)),x=t(()=>e("span",{class:"home_navbar_item navbar_item_right"},"OTHER",-1)),I=t(()=>e("div",{class:"home_live2d"},[e("canvas",{id:"live2dcanvas",width:"600",height:"600"})],-1)),H=d({__name:"index",setup(s){const i=_(),n=()=>{window.L2Dwidget.init({pluginRootPath:"/personaltsup/live2d/",pluginJsPath:"lib/",pluginModelPath:"live2d-widget-model-shizuku/assets/",tagMode:!1,debug:!1,model:{jsonPath:"/personaltsup/live2d/live2d-widget-model-shizuku/assets/shizuku.model.json",scale:1},display:{width:600,height:600},mobile:{show:!0,motion:!0},log:!1,dialog:{enable:!1,hitokoto:!1}})},o=c(),l=()=>{console.log(o.isFirstHome),o.isFirstHome===!0?o.setIsFirstHome(!1):(location.reload(),o.setIsFirstHome(!0))};return r(()=>{l(),n()}),(S,a)=>(h(),m("div",f,[b,e("div",w,[e("span",{class:"home_navbar_item navbar_item_left",onClick:a[0]||(a[0]=y=>u(i).push("/personal"))},"BLOG"),k,x]),I]))}});const F=g(H,[["__scopeId","data-v-e58967b3"]]);export{F as default};
