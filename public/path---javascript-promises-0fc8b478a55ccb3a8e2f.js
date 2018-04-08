webpackJsonp([0x791f1f9840a6],{4441:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Promises</h2>\n<p>JavaScript is single threaded, meaning that two bits of script cannot run at the same time; they have to run one after another. A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// do thing, then…</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token comment" spellcheck="true">/* everything worked */</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"See, it worked!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token function">reject</span><span class="token punctuation">(</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">"It broke"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>A Promise exists in one of these states</h2>\n<ul>\n<li>Pending: initial state, neither fulfilled nor rejected.</li>\n<li>Fulfilled: operation completed successfully.</li>\n<li>Rejected: operation failed.</li>\n</ul>\n<p>The Promise object works as proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action’s eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.</p>\n<h2>Using ‘Then’ (Promise Chaining)</h2>\n<p>To take several asynchronous calls and synchronize them one after the other, you can use promise chaining. This allows using a value from the first promise in later subsequent callbacks.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'some\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">// &lt;-- This will happen after the above Promise resolves (returning the value \'some\')</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        string <span class="token operator">+=</span> <span class="token string">\'thing\'</span><span class="token punctuation">;</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">// &lt;-- This will happen after the above .then\'s new Promise resolves</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// &lt;-- Logs \'something\' to the console</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>=======</p>\n<h2>Promise API</h2>\n<p>There are 4 static methods in the Promise class:</p>\n<ul>\n<li>Promise.resolve</li>\n<li>Promise.reject</li>\n<li>Promise.all</li>\n<li>Promise.race</li>\n</ul>\n<h2>Promises can be chained together</h2>\n<p>When writing Promises to solve a particular problem, you can chain them together to form logic.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> add <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> sum <span class="token operator">=</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>sum<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token function">reject</span><span class="token punctuation">(</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">"Could not add the two values!"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> subtract <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> sum <span class="token operator">=</span> x <span class="token operator">-</span> y<span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>sum<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token function">reject</span><span class="token punctuation">(</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">"Could not subtract the two values!"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>added<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// added = 4</span>\n    <span class="token keyword">return</span> <span class="token function">subtract</span><span class="token punctuation">(</span>added<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>subtracted<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// subtracted = 1</span>\n    <span class="token keyword">return</span> <span class="token function">add</span><span class="token punctuation">(</span>subtracted<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>added<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// added = 6</span>\n    <span class="token keyword">return</span> added <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>    \n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// If any part of the chain is rejected, print the message.</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// > My result is 12</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"My result is "</span><span class="token punctuation">,</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This is useful for following a <em>Functional Programming</em> paradigm. By creating\nfunctions for manipulating data you can chain them together to assemble a final\nresult. If at any point in the chain of functions a value is <em>rejected</em> the chain\nwill skip to the nearest <code>catch()</code> handler.</p>\n<p>For more information on Functional Programming: <a href=\'https://en.wikipedia.org/wiki/Functional_programming\' target=\'_blank\' rel=\'nofollow\'>Functional Programming</a></p>\n<h2>Function Generators</h2>\n<p>In recent releases, JavaScript has introduced more ways to natively handle Promises. One such way is the function generator. Function generators are “pausable” functions. When used with Promises, generators can make using a lot easier to read and appear “synchronous”.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> myFirstGenerator <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> one <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> two <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> three <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token number">3</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token string">\'Finished!\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> gen <span class="token operator">=</span> <span class="token function">myFirstGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Here’s our first generator, which you can see by the <code>function*</code> syntax. The <code>gen</code> variable we declared will not run <code>myFirstGenerator</code>, but instead will “this generator is ready to use”.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// Returns { value: 1, done: false }</span>\n</code></pre>\n      </div>\n<p>When we run <code>gen.next()</code> it will unpause the generator and carry on. Since this is the first time we have called <code>gen.next()</code> it will run <code>yield 1</code> and pause until we call <code>gen.next()</code> again. When <code>yield 1</code> is called, it will return to us the <code>value</code> that was yielded and whether or not the generator is <code>done</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// Returns { value: 2, done: false }</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// Returns { value: 3, done: false }</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// Returns { value: \'Finished!\', done: true }</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// Will throw an error</span>\n</code></pre>\n      </div>\n<p>As we keep calling <code>gen.next()</code> it will keep going onto the next <code>yield</code> and pausing each time. Once there are no more <code>yield</code>’s left, it will proceed to run the rest of the generator, which in this case simply returns <code>\'Finished!\'</code>. If you call <code>gen.next()</code> again, it will throw an error as the generator is finished.</p>\n<p>Now, imagine if each <code>yield</code> in this example was a <code>Promise</code>, the code itself would appear extremely synchronous. Libraries such as <a href=\'https://github.com/redux-saga/redux-saga\' target=\'_blank\' rel=\'nofollow\'>redux-saga</a> make use of this to implement easier-to-understand side-effects in your Redux applications.</p>\n<h3>More Information</h3>\n<p>For more information on promises: <a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise\' target=\'_blank\' rel=\'nofollow\'>Promises</a></p>',fields:{slug:"/javascript/promises/"},frontmatter:{title:"Promises"}}},pathContext:{slug:"/javascript/promises/"}}}});
//# sourceMappingURL=path---javascript-promises-0fc8b478a55ccb3a8e2f.js.map