webpackJsonp([0xe6f7557f4ea2],{4452:function(n,a){n.exports={data:{markdownRemark:{html:'<h2>Array.prototype.indexOf</h2>\n<p>The <code>indexOf()</code> method returns the first index at which a given element can be found in the array. If the element is not present, it returns -1.</p>\n<p><strong>Syntax</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>  arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>searchElement<span class="token punctuation">[</span><span class="token punctuation">,</span> fromIndex<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h2>Parameters</h2>\n<ul>\n<li>\n<p><strong>searchElement</strong> Element for which you are looking</p>\n</li>\n<li>\n<p><strong>fromIndex</strong> Optional. The index at which you want to start the search at. Ifthe fromIndex is greater than or equal to the array’s length, the array is not searched and the method returns -1. If the fromIndex is a negative number, it considered an offset from the end of the array (the array is still searched forwards from there). The default value is 0, which means the entire array is searched.</p>\n</li>\n</ul>\n<h2>Description</h2>\n<p>The <code>indexOf</code> method takes each array element in ascending index order and checks it against <code>searchElement</code> using strict equality (<code>===</code>). Once it finds an element that returns <code>true</code>, it returns its index.</p>\n<h2>Examples</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span>\n\narray<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 0</span>\narray<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 4</span>\narray<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// -1</span>\narray<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">\'1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// -1</span>\narray<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">\'hello\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// -1</span>\narray<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 3</span>\narray<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 3</span>\n</code></pre>\n      </div>\n<h3>More Information:</h3>\n<p><a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf\' target=\'_blank\' rel=\'nofollow\'>MDN link</a></p>\n<p><a href=\'https://docs.microsoft.com/en-us/scripting/javascript/reference/indexof-method-array-javascript\' target=\'_blank\' rel=\'nofollow\'>MSDN Link</a></p>',fields:{slug:"/javascript/standard-objects/array/array-prototype-indexof/"},frontmatter:{title:"Array.prototype.indexOf"}}},pathContext:{slug:"/javascript/standard-objects/array/array-prototype-indexof/"}}}});
//# sourceMappingURL=path---javascript-standard-objects-array-array-prototype-indexof-e924d8ee5f97e6c6dbb2.js.map