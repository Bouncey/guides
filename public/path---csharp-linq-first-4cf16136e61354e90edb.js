webpackJsonp([96197810680671],{3928:function(n,s){n.exports={data:{markdownRemark:{html:'<h1>First</h1>\n<p>Returns the first element that satisfies an optional given condition. If no element is found, throws an <code>InvalidOperationException</code>;</p>\n<h3>Signature</h3>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code>Enumerable<span class="token punctuation">.</span><span class="token generic-method function">First<span class="token punctuation">&lt;</span>TSource<span class="token punctuation">></span></span><span class="token punctuation">(</span>IEnumerable<span class="token operator">&lt;</span>TSource<span class="token operator">></span><span class="token punctuation">,</span> Func<span class="token operator">&lt;</span>TSource<span class="token punctuation">,</span> Boolean<span class="token operator">></span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h2>Example</h2>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code><span class="token keyword">var</span> fruits <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">List</span><span class="token operator">&lt;</span>Fruit<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">new</span> <span class="token class-name">Fruit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">"Orange"</span><span class="token punctuation">,</span>     Color <span class="token operator">=</span> <span class="token string">"Orange"</span><span class="token punctuation">,</span> Quantity<span class="token punctuation">:</span> <span class="token number">3</span>   <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token class-name">Fruit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">"Strawberry"</span><span class="token punctuation">,</span> Color <span class="token operator">=</span> <span class="token string">"Red"</span><span class="token punctuation">,</span>    Quantity<span class="token punctuation">:</span> <span class="token number">12</span>  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token class-name">Fruit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">"Grape"</span><span class="token punctuation">,</span>      Color <span class="token operator">=</span> <span class="token string">"Purple"</span><span class="token punctuation">,</span> Quantity<span class="token punctuation">:</span> <span class="token number">25</span>  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token class-name">Fruit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">"Pineapple"</span><span class="token punctuation">,</span>  Color <span class="token operator">=</span> <span class="token string">"Yellow"</span><span class="token punctuation">,</span> Quantity<span class="token punctuation">:</span> <span class="token number">1</span>   <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token class-name">Fruit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">"Apple"</span><span class="token punctuation">,</span>      Color <span class="token operator">=</span> <span class="token string">"Red"</span><span class="token punctuation">,</span>    Quantity<span class="token punctuation">:</span> <span class="token number">5</span>   <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token class-name">Fruit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">"Mango"</span><span class="token punctuation">,</span>      Color <span class="token operator">=</span> <span class="token string">"Yellow"</span><span class="token punctuation">,</span> Quantity<span class="token punctuation">:</span> <span class="token number">2</span>   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> firstFruit <span class="token operator">=</span> fruits<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Orange</span>\n\n<span class="token keyword">var</span> firstYellowFruit <span class="token operator">=</span> fruits<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span>f <span class="token operator">=</span><span class="token operator">></span> f<span class="token punctuation">.</span>Color <span class="token operator">==</span> <span class="token string">"Yellow"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Pineapple</span>\n</code></pre>\n      </div>',fields:{slug:"/csharp/linq/first/"},frontmatter:{title:"First"}}},pathContext:{slug:"/csharp/linq/first/"}}}});
//# sourceMappingURL=path---csharp-linq-first-4cf16136e61354e90edb.js.map