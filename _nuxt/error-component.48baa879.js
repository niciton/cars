import{o as f,c as g,n as E,g as k,u as s,d as n,_ as o}from"./entry.d601c08b.js";const P={__name:"nuxt-error-page",props:{error:Object},setup(c){const{error:t}=c;(t.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const r=Number(t.statusCode||500),a=r===404,u=t.statusMessage??(a?"Page Not Found":"Internal Server Error"),i=t.message||t.toString(),p=void 0,_=n(()=>o(()=>import("./error-404.7674e331.js"),["./error-404.7674e331.js","./entry.d601c08b.js","./entry.acb83391.css","./composables.0af8eac3.js","./_plugin-vue_export-helper.c27b6911.js","./error-404.fda4aa6a.css"],import.meta.url).then(e=>e.default||e)),d=n(()=>o(()=>import("./error-500.7edb89c8.js"),["./error-500.7edb89c8.js","./composables.0af8eac3.js","./entry.d601c08b.js","./entry.acb83391.css","./_plugin-vue_export-helper.c27b6911.js","./error-500.88db509d.css"],import.meta.url).then(e=>e.default||e)),l=a?_:d;return(e,m)=>(f(),g(s(l),E(k({statusCode:s(r),statusMessage:s(u),description:s(i),stack:s(p)})),null,16))}},x=P;export{x as default};
