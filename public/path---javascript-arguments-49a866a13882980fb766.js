webpackJsonp([0xc278a0a871c9],{4382:function(n,a){n.exports={data:{markdownRemark:{html:'<p>The arguments object is an <strong>array-like object</strong> <em>(in that the structure of the object is similar to that of an array however it should not be considered an array as it has all the functionality of an object)</em> that stores all of the arguments that you passed to a function and is proprietary to that function in particular. If you were to pass 3 arguments to a function, say <code>storeNames()</code>, those 3 arguments would be stored inside an object called <strong>arguments</strong> and it would look like this when we pass the arguments <code>storeNames("Mulder", "Scully", "Alex Krycek")</code> to our function:</p>\n<ul>\n<li>First, we declare a function and make it return the arguments object.</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">storeNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> arguments<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>Then, when we execute that function with <strong>n arguments</strong>, 3 in this case, it will return the object to us and it will <strong>look like</strong> an array. We can convert it to an array, but more on that later…</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment" spellcheck="true">// If we execute the following line in the console:</span>\n<span class="token function">storeNames</span><span class="token punctuation">(</span><span class="token string">"Mulder"</span><span class="token punctuation">,</span> <span class="token string">"Scully"</span><span class="token punctuation">,</span> <span class="token string">"Alex Kryceck"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// The output will be { \'0\': \'Mulder\', \'1\': \'Scully\', \'2\': \'Alex Kryceck\' }</span>\n</code></pre>\n      </div>\n<p>If you want to know more about this, such as converting it to an array or the optimization problem that comes with using the <em>slice(</em>) method and how to solve it, click on <strong>read more</strong> (Gitter Chat Only).</p>\n<h2>Treat it as an array</h2>\n<p>You can invoke arguments by using <code>arguments[n]</code> (where <em>n</em> is the index of the argument in the array-like object) but if you want to use it as an array for iteration purposes or applying array methods to it, you need to <em>convert it to an array</em> by declaring a variable and using the Array.prototype.slice.call method (because <em>arguments</em> is not an array):</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> args <span class="token operator">=</span> Array<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>slice<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// or the es6 way:</span>\n<span class="token keyword">var</span> args <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Since <strong>slice()</strong> has two (the parameter <strong>end</strong> is optional) parameters, you can grab a certain portion of the arguments by specifying (using the <em>slice.call()</em> method renders these two parameters optional, not just <em>end</em>) the beginning and the ending of your portion; check out the following code:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getGrades</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> args <span class="token operator">=</span> Array<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>slice<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> args<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// Let\'s output this!</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getGrades</span><span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">89</span><span class="token punctuation">,</span> <span class="token number">95</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// OUTPUT SHOULD BE: //</span>\n<span class="token comment" spellcheck="true">// [100, 75] &lt;- Why? Because it started from index 1 and stopped at index 3</span>\n<span class="token comment" spellcheck="true">// so, index 3 (40) wasn\'t taken into consideration.</span>\n<span class="token comment" spellcheck="true">//</span>\n<span class="token comment" spellcheck="true">// If we remove the \'3\' parameter, leaving just (arguments, 1) we\'d get</span>\n<span class="token comment" spellcheck="true">// every argument from index 1: [100, 75, 40, 89, 95].</span>\n</code></pre>\n      </div>\n<h3>Optimization issues with Array.slice()</h3>\n<p>There is a little problem, it’s not recommended to use slice in the arguments object (optimization reasons)…</p>\n<blockquote>\n<p><strong>Important</strong>: You should not slice on arguments because it prevents optimizations in JavaScript engines (V8 for example). Instead, try constructing a new array by iterating through the arguments object.</p>\n<p><em>by</em> <strong><em>Mozilla Developer Network</em></strong> <a href=\'https://developer.mozilla.org/ca/docs/Web/JavaScript/Reference/Functions/arguments\' target=\'_blank\' rel=\'nofollow\'>(reference)<a></p>\n</blockquote>\n<p>So, what other method is available to convert <em>arguments</em> to an array? I recommend the for-loop (not the for-in loop), you can do it like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Empty array, at first.</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    args<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span> <span class="token comment" spellcheck="true">// Now \'args\' is an array that holds your arguments.</span>\n</code></pre>\n      </div>\n<p>For more information on the optimization issues:<br>\nOptimization Killers: <a href=\'https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments\' target=\'_blank\' rel=\'nofollow\'>Managing Arguments</a></p>\n<h3>ES6 rest parameter as a way to circumvent the arguments object</h3>\n<p>In ES2015/ES6 it is possible to use the rest parameter (<code>...</code>) instead of the arguments object in most places. Say we have the following function (non-ES6): </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function getIntoAnArgument() {\n    var args = arguments.slice();\n    args.forEach(function(arg) {\n        console.log(arg);\n    });\n}</code></pre>\n      </div>\n<p>That function can be replaced in ES6 by: </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function getIntoAnArgument(...args) {\n    args.forEach(arg => console.log(arg));\n}</code></pre>\n      </div>\n<p>note that we also used an arrow function to shorten the forEach callback!   </p>\n<p>The arguments object is not available inside the body of an arrow function.</p>\n<p>The rest parameter must always come as the last argument in your function definition.<br>\n<code>function getIntoAnArgument(arg1, arg2, arg3, ...restOfArgs /*no more arguments allowed here*/) { //function body }</code>   </p>',fields:{slug:"/javascript/arguments/"},frontmatter:{title:"Arguments"}}},pathContext:{slug:"/javascript/arguments/"}}}});
//# sourceMappingURL=path---javascript-arguments-49a866a13882980fb766.js.map