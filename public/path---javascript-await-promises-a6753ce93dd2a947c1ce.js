webpackJsonp([0xf8e057553660],{4387:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Await Promises</h2>\n<p>The <code>async</code> / <code>await</code> <a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators\' target=\'_blank\' rel=\'nofollow\'>operators</a> make it easier to implement many async Promises. They also allow engineers to write clearer, more succinct, testable code.</p>\n<p>To understand this subject, you should have a solid understanding of how <a href=\'https://guide.freecodecamp.org/javascript/promises\' target=\'_blank\' rel=\'nofollow\'>Promises</a> work.</p>\n<hr>\n<h2>Basic Syntax</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">slowlyResolvedPromiseFunc</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span> <span class="token punctuation">{</span> \n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>resolve <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">doIt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> myPromise <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">slowlyResolvedPromiseFunc</span><span class="token punctuation">(</span><span class="token string">"foo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myPromise<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// "foo"</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">doIt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>There are a few things to note:</p>\n<ul>\n<li>The function that encompasses the <code>await</code> declaration must include the <code>async</code> operator. This will tell the JS interpreter that it must wait until the Promise is resolved or rejected.</li>\n<li>The <code>await</code> operator must be inline, during the const declaration.</li>\n<li>This works for <code>reject</code> as well as <code>resolve</code>.</li>\n</ul>\n<hr>\n<h2>Nested Promises vs. <code>Async</code> / <code>Await</code></h2>\n<p>Implementing a single Promise is pretty straightforward. In contrast, Chained Promises or the creation of a dependency pattern may produce “spaghetti code”.</p>\n<p>The following examples assume that the <a href=\'https://github.com/request/request-promise\' target=\'_blank\' rel=\'nofollow\'><code>request-promise</code></a> library is available as <code>rp</code>.</p>\n<h3>Chained/Nested Promises</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment" spellcheck="true">// First Promise</span>\n<span class="token keyword">const</span> fooPromise <span class="token operator">=</span> <span class="token function">rp</span><span class="token punctuation">(</span><span class="token string">"http://domain.com/foo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nfooPromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resultFoo <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// Must wait for "foo" to resolve</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resultFoo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> barPromise <span class="token operator">=</span> <span class="token function">rp</span><span class="token punctuation">(</span><span class="token string">"http://domain.com/bar"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> bazPromise <span class="token operator">=</span> <span class="token function">rp</span><span class="token punctuation">(</span><span class="token string">"http://domain.com/baz"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>barPromise<span class="token punctuation">,</span> bazPromise<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resultArr <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// Handle "bar" and "baz" resolutions here</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resultArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resultArr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3><code>async</code> and <code>await</code> Promises</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment" spellcheck="true">// Wrap everything in an async function</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">doItAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// Grab data from "foo" endpoint, but wait for resolution</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">rp</span><span class="token punctuation">(</span><span class="token string">"http://domain.com/foo"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment" spellcheck="true">// Concurrently kick off the next two async calls,</span>\n    <span class="token comment" spellcheck="true">// don\'t wait for "bar" to kick off "baz"</span>\n    <span class="token keyword">const</span> barPromise <span class="token operator">=</span> <span class="token function">rp</span><span class="token punctuation">(</span><span class="token string">"http://domain.com/bar"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> bazPromise <span class="token operator">=</span> <span class="token function">rp</span><span class="token punctuation">(</span><span class="token string">"http://domain.com/baz"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment" spellcheck="true">// After both are concurrently kicked off, wait for both</span>\n    <span class="token keyword">const</span> barResponse <span class="token operator">=</span> <span class="token keyword">await</span> barPromise<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> bazResponse <span class="token operator">=</span> <span class="token keyword">await</span> bazPromise<span class="token punctuation">;</span>\n\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>barResponse<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bazResponse<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// Finally, invoke the async function</span>\n<span class="token function">doItAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Done!\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The advantages of using <code>async</code> and <code>await</code> should be clear. This code is more readable, modular, and testable.</p>\n<p>It’s fair to note that even though there is an added sense of concurrency, the underlying computational process is the same as the previous example.</p>\n<hr>\n<h2>Handling Errors / Rejection</h2>\n<p>A basic try-catch block handles a rejected Promise.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">errorExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> rejectedPromise <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">"Oh-oh!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// "Uh-oh!"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">errorExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<hr>\n<h4>More Information:</h4>\n<ul>\n<li><code>await</code> Operator <a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await\' target=\'_blank\' rel=\'nofollow\'>MDN Docs</a></li>\n<li><code>async</code> Function Operator <a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function\' target=\'_blank\' rel=\'nofollow\'>MDN Docs</a></li>\n</ul>',fields:{slug:"/javascript/await-promises/"},frontmatter:{title:"Await Promises"}}},pathContext:{slug:"/javascript/await-promises/"}}}});
//# sourceMappingURL=path---javascript-await-promises-a6753ce93dd2a947c1ce.js.map