import{d as E,a as C,q as b,O as B,u as O,s as p,o as k,U as m,ah as W,b as z,c as I,e as A,C as L,f as j,a6 as D,_ as R}from"./index-3521c6ce.js";import{a as T}from"./index-652fcb89.js";import"./axios-4a70c6fc.js";import"./_commonjsHelpers-042e6b4d.js";const U={class:"classify_container"},$=E({__name:"classify",setup(q){const h=C();let n=b(()=>h.themeStatus);const r=B("$echarts"),x=O();let l=p([]),c=p(),g=[],_=[],d=["#00ffff","#409B5C","#006ced","#ffe000","#ffa800","#ff5b00","#ff3000"];const w=async()=>{let i=await T();S(i.data)};let t;k(async()=>{await w(),t||(t=r.init(document.getElementById("echart_main"))),t.setOption(e.value),t.on("click",i=>{let a=i.name.split(" ")[0];x.push(`/labelList/${a}`)})});const S=i=>{i.forEach(a=>{a.tags.forEach(o=>{let y=l.value.findIndex(v=>v.name===o);if(y!==-1)l.value[y].value++;else{let v={name:o,value:1};l.value.push(v)}})}),c.value=l.value.reduce((a,o)=>a+o.value,0);for(let a=0;a<l.value.length;a++){let o=l.value[a].name+"  "+l.value[a].value;_.push(o),g.push({value:l.value[a].value,name:o,itemStyle:{borderWidth:0,borderRadius:10,shadowBlur:10,borderColor:d[a],shadowColor:d[a]}},{value:c.value/100,name:"",itemStyle:{label:{show:!1},labelLine:{show:!1},color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}})}};let f=[{name:"",type:"pie",clockwise:!1,radius:["50%","70%"],center:["30%","50%"],emphasis:{scale:!1},label:{show:!1},data:g}],e=p({backgroundColor:n.value?"#021425":"#fff",title:{text:"总文章数",subtext:c,textStyle:{color:"#19E1E3",fontSize:18,padding:[0,0,25,0]},subtextStyle:{fontSize:28,fontWeight:"bolder",color:"#19E1E3"},x:"27%",y:"45%"},color:d,tooltip:{show:!0},legend:{icon:"rect",itemWidth:16,itemHeight:8,itemStyle:{borderWidth:3},orient:"vertical",data:_,right:"10%",top:"center",align:"left",textStyle:{color:n.value?"#fff":"#111",fontSize:16,padding:[0,0,0,10]},itemGap:20},toolbox:{show:!1},series:f});m(()=>n.value,()=>{e.value.backgroundColor=n.value?"#021425":"#fff",e.value.legend.textStyle.color=n.value?"#fff":"#111",t.setOption(e.value)});let u=b(()=>h.isOpen);m(()=>u.value,async()=>{await t.dispose(),t=r.init(document.getElementById("echart_main")),t.setOption(e.value),s.value<=450&&(e.value.title.x=u.value?"35%":"40%",await t.dispose(),t=r.init(document.getElementById("echart_main")),t.setOption(e.value))});const{width:s}=W();return m(()=>s.value,async()=>{s.value>375&&s.value<=992&&(s.value<=800?(e.value.legend.orient="horizontal",e.value.legend.top="5%",e.value.legend.right="auto",e.value.title.x="44%",f[0].center=["50%","50%"],s.value<=450&&(e.value.title.x=u.value?"35%":"40%")):(e.value.legend.orient="vertical",e.value.legend.top="center",e.value.legend.right="5%",e.value.title.x="34%",f[0].center=["40%","50%"]),t&&await t.dispose(),D(()=>{t=r.init(document.getElementById("echart_main")),t.setOption(e.value)}))},{immediate:!0}),(i,a)=>(z(),I("div",U,[A("div",{id:"echart_main",class:L({opened:!j(u)})},null,2)]))}});const V=R($,[["__scopeId","data-v-8aaed014"]]);export{V as default};
