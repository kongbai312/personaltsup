import{r}from"./request-b9a3aa7f.js";const s=async()=>{let t={},a=await r({url:"https://api.ipify.org/?format=json"});t.ip=a.ip;let p=await r({url:`https://api.vore.top/api/IPdata?ip=${t.ip}`});return t.address=p.adcode.c,t};export{s as g};