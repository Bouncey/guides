webpackJsonp([0x96f310684064],{6113:function(s,n){s.exports={data:{markdownRemark:{html:'<h2>Null Type</h2>\n<p>In TypeScript, null type has the values null. Null is valid values of every type. </p>\n<div class="gatsby-highlight">\n      <pre class="language-ts"><code><span class="token keyword">let</span> u<span class="token punctuation">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>When using —strictNullChecks flag, null is only assignable to void and their type.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ts"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token string">"foo"</span><span class="token punctuation">;</span>\ns <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// error, \'null\' is not assignable to \'string\'</span>\n<span class="token keyword">let</span> sn<span class="token punctuation">:</span> <span class="token keyword">string</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token string">"bar"</span><span class="token punctuation">;</span>\nsn <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// ok</span>\n</code></pre>\n      </div>',fields:{slug:"/typescript/null-type/"},frontmatter:{title:"Null Type"}}},pathContext:{slug:"/typescript/null-type/"}}}});
//# sourceMappingURL=path---typescript-null-type-a516b1780deb67f69fc8.js.map