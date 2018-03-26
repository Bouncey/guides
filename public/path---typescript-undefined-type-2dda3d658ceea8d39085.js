webpackJsonp([0xc9a3e84d2915],{6117:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Undefined Type</h2>\n<p>In TypeScript, same with null type, undefined type has the values undefined. Undefined is valid values of every type. </p>\n<div class="gatsby-highlight">\n      <pre class="language-ts"><code><span class="token keyword">let</span> u<span class="token punctuation">:</span> undefined <span class="token operator">=</span> undefined<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>When using <code>--strictNullChecks</code> flag, undefined is only assignable to void and their type.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ts"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token string">"foo"</span><span class="token punctuation">;</span>\ns <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// error, \'null\' is not assignable to \'string\'</span>\n<span class="token keyword">let</span> sn<span class="token punctuation">:</span> <span class="token keyword">string</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token string">"bar"</span><span class="token punctuation">;</span>\nsn <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// ok</span>\n\nsn <span class="token operator">=</span> undefined<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// error, \'undefined\' is not assignable to \'string | null\'</span>\n</code></pre>\n      </div>\n<p>With <code>--strictNullChecks</code>, an optional parameter automatically adds <code>| undefined</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-ts"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">,</span> y<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> x <span class="token operator">+</span> <span class="token punctuation">(</span>y <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> undefined<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// error, \'null\' is not assignable to \'number | undefined\'</span>\n</code></pre>\n      </div>',fields:{slug:"/typescript/undefined-type/"},frontmatter:{title:"Undefined Type"}}},pathContext:{slug:"/typescript/undefined-type/"}}}});
//# sourceMappingURL=path---typescript-undefined-type-2dda3d658ceea8d39085.js.map