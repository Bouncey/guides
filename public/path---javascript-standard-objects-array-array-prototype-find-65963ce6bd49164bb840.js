webpackJsonp([1337299950131],{4448:function(n,a){n.exports={data:{markdownRemark:{html:'<h2>Information</h2>\n<p>The <code>find()</code> method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned. The <code>find()</code> method does not mutate the array on which it is called.</p>\n<p>Syntax:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>arr.find(callback[, thisArg])</code></pre>\n      </div>\n<h5>Parameters</h5>\n<ul>\n<li>\n<p><code>callback</code></p>\n<ul>\n<li>Function to execute on each value in the array, taking three arguments:</li>\n<li><code>element</code></li>\n<li>The current element being processed in the array.</li>\n<li><code>index</code></li>\n<li>The index of the current element being processed in the array.</li>\n<li><code>array</code></li>\n<li>The array find was called upon.</li>\n</ul>\n</li>\n<li>\n<p><code>thisArg</code> (Optional)</p>\n<ul>\n<li>Object to use as this when executing callback.</li>\n</ul>\n</li>\n</ul>\n<h5>Return value</h5>\n<p>A value in the array if an element passes the test; otherwise, undefined.</p>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find">MDN</a></p>\n<h2>Examples</h2>\n<p>This example will find the corresponding item in the array and return the object from it.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">let</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">\'books\'</span><span class="token punctuation">,</span> quantity<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">\'movies\'</span><span class="token punctuation">,</span> quantity<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">\'games\'</span><span class="token punctuation">,</span> quantity<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">findMovies</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span> \n    <span class="token keyword">return</span> item<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">\'movies\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>items<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>findMovies<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// Output</span>\n<span class="token comment" spellcheck="true">//  { name: \'movies\', quantity: 1 }</span>\n</code></pre>\n      </div>\n<p>The following example shows the output of each optional parameter to the callback function. This will return <code>undefined</code> because none of the items will return true from the callback function.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">showInfo</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'element = \'</span> <span class="token operator">+</span> element <span class="token operator">+</span> <span class="token string">\', index = \'</span> <span class="token operator">+</span> index <span class="token operator">+</span> <span class="token string">\', array = \'</span> <span class="token operator">+</span> array<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'return = \'</span> <span class="token operator">+</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>showInfo<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// Output</span>\n<span class="token comment" spellcheck="true">//  element = 4, index = 0, array = 4,6,8,12</span>\n<span class="token comment" spellcheck="true">//  element = 6, index = 1, array = 4,6,8,12</span>\n<span class="token comment" spellcheck="true">//  element = 8, index = 2, array = 4,6,8,12</span>\n<span class="token comment" spellcheck="true">//  element = 12, index = 3, array = 4,6,8,12</span>\n<span class="token comment" spellcheck="true">//  return = undefined</span>\n</code></pre>\n      </div>',fields:{slug:"/javascript/standard-objects/array/array-prototype-find/"},frontmatter:{title:"Array.prototype.find"}}},pathContext:{slug:"/javascript/standard-objects/array/array-prototype-find/"}}}});
//# sourceMappingURL=path---javascript-standard-objects-array-array-prototype-find-65963ce6bd49164bb840.js.map