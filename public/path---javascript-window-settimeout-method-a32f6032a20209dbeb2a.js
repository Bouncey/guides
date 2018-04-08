webpackJsonp([87491998164017],{4819:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Window setTimeout Method</h2>\n<p>The <code>setTimeout()</code> method calls a function or evaluates an expression after a specified number of milliseconds.</p>\n<p>Tips:</p>\n<ul>\n<li>1000 ms = 1 second.</li>\n<li>The function is only executed once. If you need to repeat execution, use the <code>setInterval()</code> method.</li>\n<li>Use the <code>clearTimeout()</code> method to prevent the function from running.</li>\n</ul>\n<p>The syntax of the <code>setTimout()</code> method is as follows:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">,</span> milliseconds<span class="token punctuation">,</span> param1<span class="token punctuation">,</span> param2<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>For example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>A very important thing about <code>setTimeout()</code> is that it will be executed asynchronously. Let’s take an example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"A"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"B"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"C"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// The order in the console will be</span>\n<span class="token comment" spellcheck="true">// A</span>\n<span class="token comment" spellcheck="true">// C</span>\n<span class="token comment" spellcheck="true">// B</span>\n</code></pre>\n      </div>\n<p><strong>Not as exepected! But we specify only 0 seconds!!!</strong>\nTo solve this problem and make sure that our code will execute synchronously we have just to nest the last console in the function</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"A"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"B"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"C"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// The order in the console will be</span>\n<span class="token comment" spellcheck="true">// A</span>\n<span class="token comment" spellcheck="true">// B</span>\n<span class="token comment" spellcheck="true">// C</span>\n</code></pre>\n      </div>\n<h4>More Information:</h4>\n<p>Documentation: <a href=\'https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout\' target=\'_blank\' rel=\'nofollow\'>MDN</a></p>\n<p>More examples of setTimeout function: <a href=\'https://www.w3schools.com/jsref/met_win_settimeout.asp\' target=\'_blank\' rel=\'nofollow\'>w3schools</a></p>\n<p>To understand what really happen under the hood just watch this awesome video\n<a href="https://www.youtube.com/watch?v=8aGhZQkoFbQ">Philip Roberts: What the heck is the event loop anyway? | JSConf EU 2014</a></p>',fields:{slug:"/javascript/window-settimeout-method/"},frontmatter:{title:"Window setTimeout Method"}}},pathContext:{slug:"/javascript/window-settimeout-method/"}}}});
//# sourceMappingURL=path---javascript-window-settimeout-method-a32f6032a20209dbeb2a.js.map