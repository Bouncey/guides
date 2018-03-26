webpackJsonp([0xdcea5dff39f6],{4464:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Array.prototype.sort</h2>\n<p>This method both returns your array sorted and sort the original array.</p>\n<p>The <code>sort()</code> method follows the <strong>ASCII order</strong>!</p>\n<table>\n<thead>\n<tr>\n<th>index</th>\n<th>character</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>33</td>\n<td>!</td>\n</tr>\n<tr>\n<td>34</td>\n<td>”</td>\n</tr>\n<tr>\n<td>35</td>\n<td>#</td>\n</tr>\n<tr>\n<td>36</td>\n<td>$</td>\n</tr>\n<tr>\n<td>37</td>\n<td>%</td>\n</tr>\n</tbody>\n</table>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> myArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'#\'</span><span class="token punctuation">,</span> <span class="token string">\'!\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> sortedArray <span class="token operator">=</span> myArray<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment" spellcheck="true">// [\'!\', \'#\'] because in the ASCII table "!" is before "#"</span>\n\nmyArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'a\'</span><span class="token punctuation">,</span> <span class="token string">\'c\'</span><span class="token punctuation">,</span> <span class="token string">\'b\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myArray<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// [\'a\', \'b\', \'c\']</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myArray<span class="token punctuation">)</span> <span class="token comment" spellcheck="true">// [\'a\', \'b\', \'c\']</span>\n\nmyArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'b\'</span><span class="token punctuation">,</span> <span class="token string">\'a\'</span><span class="token punctuation">,</span> <span class="token string">\'aa\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myArray<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment" spellcheck="true">// [\'a\', \'aa\', \'b\']</span>\n\nmyArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myArray<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment" spellcheck="true">// [1, 13, 2, 23] numbers are treated like strings!</span>\n</code></pre>\n      </div>\n<h1>Advance usage</h1>\n<p>The <code>sort()</code> method can also accept a parameter: <code>array.sort(compareFunction)</code></p>\n<h3>For example</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">compare</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">></span> b<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> myArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myArray<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// [ 1, 13, 2, 23 ]</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myArray<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>compare<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment" spellcheck="true">// [ 1, 2, 13, 23 ]</span>\n\nmyArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nsortedArray <span class="token operator">=</span> myArray<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment" spellcheck="true">// it depends from the compareFunction</span>\n</code></pre>\n      </div>',fields:{slug:"/javascript/standard-objects/array/array-prototype-sort/"},frontmatter:{title:"Array.prototype.sort"}}},pathContext:{slug:"/javascript/standard-objects/array/array-prototype-sort/"}}}});
//# sourceMappingURL=path---javascript-standard-objects-array-array-prototype-sort-b907685baa6f39a327ed.js.map