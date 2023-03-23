import{o as p,c as o,a as s,b as e,d as t}from"./app.77346e2d.js";const c=s("h1",{id:"求多次-prompt-输入之和",tabindex:"-1"},[e("求多次 prompt 输入之和 "),s("a",{class:"header-anchor",href:"#求多次-prompt-输入之和","aria-hidden":"true"},"#")],-1),r=t(`<h2 id="题目" tabindex="-1">题目 <a class="header-anchor" href="#题目" aria-hidden="true">#</a></h2><p>实现可以多次弹出输入框(prompt)，让用户输入成绩，如果输入值大于 100，弹出警告框提示输入有误，请重新输入，当输入-1 时结束输入，返回前面几次正确输入值之和。要求用循环实现；</p><h2 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> achieve </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> (</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tmp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">parseFloat</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">输入成绩:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">tmp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">tmp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">100</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">输入有误, 请重新输入</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">continue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">achieve</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tmp</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(achieve)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,4),D=JSON.parse('{"title":"求多次 prompt 输入之和","description":"","frontmatter":{},"headers":[{"level":2,"title":"题目","slug":"题目","link":"#题目","children":[]},{"level":2,"title":"代码","slug":"代码","link":"#代码","children":[]}],"relativePath":"AllDocs/Frontend/multiprompt.md","lastUpdated":1679553997000}'),F={name:"AllDocs/Frontend/multiprompt.md"},d=Object.assign(F,{setup(y){const l=()=>{let n=0;for(;;){const a=parseFloat(prompt("输入成绩:"));if(a==-1)break;if(a>100){alert("输入有误, 请重新输入");continue}else n+=a}alert(n)};return(n,a)=>(p(),o("div",null,[c,s("ul",null,[s("li",null,[s("span",{onClick:l,style:{cursor:"pointer",color:"#6f8ac9"}},"测试")])]),r]))}});export{D as __pageData,d as default};
