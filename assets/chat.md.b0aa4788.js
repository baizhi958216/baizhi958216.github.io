import{d as _,r as d,e as h,o as c,c as i,a as e,F as u,f as m,u as v,w as g,v as f,n as x,t as b,_ as y,g as C,b as T}from"./app.a818a77e.js";const N={class:"container"},k={class:"result"},w={class:"ipt"},E=_({__name:"ChatExperience",setup(r){const t=d();let s=h([{role:"a",message:"喵喵喵？"}]);const l=async()=>{s.push({role:"b",message:t.value});const o=t.value;t.value="",await fetch("https://baizhi958216-literate-goggles-qp4p6v44g55f6697-3000.preview.app.github.dev/api/chat/chatgpt",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({inMessage:o})}).then(a=>a.text()).then(a=>{s.push({role:"a",message:a})})};return(o,a)=>(c(),i("div",N,[e("div",k,[(c(!0),i(u,null,m(v(s),(n,p)=>(c(),i("div",{class:x(["chat",n.role=="a"?"chat_a":"chat_b"]),key:p},[e("div",null,b(n.message),1)],2))),128))]),e("div",w,[g(e("input",{class:"c_ipt",type:"text","onUpdate:modelValue":a[0]||(a[0]=n=>t.value=n)},null,512),[[f,t.value]]),e("button",{onClick:l,class:"submit"},"✈")])]))}});const O=y(E,[["__scopeId","data-v-3005a8c3"]]),P=e("h1",{id:"你可以在此处体验-chatgpt",tabindex:"-1"},[T("你可以在此处体验 ChatGPT "),e("a",{class:"header-anchor",href:"#你可以在此处体验-chatgpt","aria-hidden":"true"},"#")],-1),B=JSON.parse('{"title":"你可以在此处体验 ChatGPT","description":"","frontmatter":{},"headers":[],"relativePath":"chat.md"}'),S={name:"chat.md"},D=Object.assign(S,{setup(r){return(t,s)=>(c(),i("div",null,[P,C(O)]))}});export{B as __pageData,D as default};
