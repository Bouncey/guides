webpackJsonp([0xf95843ab9c0],{3554:function(n,a){n.exports={data:{markdownRemark:{html:'<h1>Short-Circuit Evaluation</h1>\n<p>The Short-Circuit evaluation consist in check or execute the second argument only if the first argument is not enough to determine the value of the expression. </p>\n<p>You can do a short-circuit evaluation with &#x26;&#x26; and || operators.</p>\n<h2>Example with &#x26;&#x26; operator:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code>  <span class="token function">canOpenFile</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">openFile</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// If you can open the file then open it.</span>\n</code></pre>\n      </div>\n<p>The example above is equivalent to:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code>  <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token function">canOpenFile</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">openFile</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Example with || operator:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code>  isServerOn <span class="token operator">||</span> <span class="token function">startServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// If the server is not on then start it.</span>\n</code></pre>\n      </div>\n<p> The example above is equivalent to:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code> <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span>isServerOn <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token function">startServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Keep it all together in real example</h2>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>\n<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h></span></span>\n\n<span class="token keyword">char</span> <span class="token operator">*</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> \n\t<span class="token comment" spellcheck="true">// Get first argument passed via terminal</span>\n\t<span class="token keyword">char</span> <span class="token operator">*</span>name <span class="token operator">=</span> argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n\t<span class="token comment" spellcheck="true">// If name is not passed via terminal then print message and then get the name</span>\n\tname <span class="token operator">||</span> <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Please give me your name:"</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n\n\t<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Hello %s\\n"</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">char</span> <span class="token operator">*</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment" spellcheck="true">// Allocate memory </span>\n\t<span class="token keyword">char</span> <span class="token operator">*</span>name <span class="token operator">=</span> <span class="token function">malloc</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\n\t<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%s"</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token keyword">return</span> name<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',fields:{slug:"/c/short-circuit-evaluation/"},frontmatter:{title:"Short-Circuit Evaluation"}}},pathContext:{slug:"/c/short-circuit-evaluation/"}}}});
//# sourceMappingURL=path---c-short-circuit-evaluation-ea1d9d4ef15de58690ad.js.map