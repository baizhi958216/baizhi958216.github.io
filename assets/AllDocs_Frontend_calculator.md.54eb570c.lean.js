import{o as e,c,a as l,b as r,d as y}from"./app.77346e2d.js";const F="/assets/calculator.3a51e1ef.png",D=l("h1",{id:"js-实现简易计算器",tabindex:"-1"},[r("JS 实现简易计算器 "),l("a",{class:"header-anchor",href:"#js-实现简易计算器","aria-hidden":"true"},"#")],-1),i=y("",5),d=JSON.parse('{"title":"JS 实现简易计算器","description":"","frontmatter":{},"headers":[{"level":2,"title":"题目","slug":"题目","link":"#题目","children":[]},{"level":2,"title":"代码","slug":"代码","link":"#代码","children":[]}],"relativePath":"AllDocs/Frontend/calculator.md","lastUpdated":1679573798000}'),C={name:"AllDocs/Frontend/calculator.md"},m=Object.assign(C,{setup(A){const t=()=>{let a,s,p,n;for(;;){const o=parseInt(prompt(`
            欢迎使用简易计算器：
            1.加法运算;
            2.减法运算;
            3.乘法运算;
            4.除法运算;
            5.退出;
            请输入您的选项:
          `));if(!o||o==5)break;switch(p=o,a=parseFloat(prompt("请输入第一个数字：")),s=parseFloat(prompt("请输入第二个数字：")),p){case 1:n=a+s;break;case 2:n=a-s;break;case 3:n=a*s;break;case 4:if(s===0){alert("错误！除数不能为 0！");continue}n=a/s;break;default:alert("错误的选项！");continue}alert(`${a}${["+","-","x","÷"][p-1]}${s}=${n}`)}alert("程序已退出！")};return(a,s)=>(e(),c("div",null,[D,l("ul",null,[l("li",null,[l("span",{onClick:t,style:{cursor:"pointer",color:"#6f8ac9"}},"测试")])]),i]))}});export{d as __pageData,m as default};
