webpackJsonp([36070020850617],{4754:function(n,s){n.exports={data:{markdownRemark:{html:'<h2><code>this</code> reference</h2>\n<p>In JavaScript, every function has a <code>this</code> reference automatically created when you declare it. This reference is quite similar to <code>this</code> reference in other class-based languages such as Java or C# (JavaScript is a prototype-based language and no “class” concept): <em>It points to the which object is calling to the function</em> (this object sometimes called as <em>context</em>). In JavaScript, however, <em>the <code>this</code> reference inside functions can be bound to different objects depending on where the function is being called</em>. Here are 5 basic rules for <code>this</code> binding in JavaScript:</p>\n<h3>Rule 1</h3>\n<p>When a function is called in the global scope, the <code>this</code> reference is by default bound to the <strong>global object</strong> (<code>window</code> in the browser, or <code>global</code> in Node.js). For example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 2</span>\n</code></pre>\n      </div>\n<p>Note: If you declare the <code>foo()</code> function above in strict mode, then you call this function in global scope, <code>this</code> will be <code>undefined</code> and assignment <code>this.a = 2</code> will throw <code>Uncaught TypeError</code> exception.</p>\n<h3>Rule 2</h3>\n<p>Let’s examine example below:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  foo<span class="token punctuation">:</span> foo\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nobj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 2</span>\n</code></pre>\n      </div>\n<p>Clearly, in the above snippet, the <code>foo()</code> function is being called with <em>context</em> is <code>obj</code> object and <code>this</code> reference now is bound to <code>obj</code>. So when a function is called with a context object, the <code>this</code> reference will be bound to this object.</p>\n<h3>Rule 3</h3>\n<p><code>.call</code>, <code>.apply</code> and <code>.bind</code> can all be used at the call site to explicitly bind <code>this</code>. Using <code>.bind(this)</code> is something you may see in quite a lot of React components.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>bar<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\nfoo<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span> bar<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">// 1</span>\n</code></pre>\n      </div>\n<p>Here’s a quick example of how each one is used to bind <code>this</code>:</p>\n<ul>\n<li><code>.call()</code>: <code>fn.call(thisObj, fnParam1, fnParam2)</code></li>\n<li><code>.apply()</code>: <code>fn.apply(thisObj, [fnParam1, fnParam2])</code></li>\n<li><code>.bind()</code>: <code>const newFn = fn.bind(thisObj, fnParam1, fnParam2)</code></li>\n</ul>\n<h3>Rule 4</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Point2D</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point2D</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 1</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 2</span>\n</code></pre>\n      </div>\n<p>The thing you must notice that is the <code>Point2D</code> function called with <code>new</code> keyword, and <code>this</code> reference is bound to <code>p1</code> object. So when a function is called with <code>new</code> keyword, it will create a new object and <code>this</code> reference will be bound to this object.</p>\n<p>Note: As you call a function with <code>new</code> keyword, we also call it as <em>constructor function</em>.</p>\n<h3>Rule 5</h3>\n<p>JavaScript determines the value of <code>this</code> at runtime, based on the current context. So <code>this</code> can sometimes point to something other than what you expect. </p>\n<p>Consider this example of a Cat class with a method called <code>makeSound()</code>, following the pattern in Rule 4 (above) with a constructor function and the <code>new</code> keyword.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> Cat <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> sound<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>sound <span class="token operator">=</span> sound<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>makeSound <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">\' says: \'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sound <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> kitty <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token string">\'Fat Daddy\'</span><span class="token punctuation">,</span> <span class="token string">\'Mrrooowww\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nkitty<span class="token punctuation">.</span><span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Fat Daddy says: Mrrooowww</span>\n</code></pre>\n      </div>\n<p>Now let’s try to give the cat a way to <code>annoy()</code> people by repeating his sound 100 times, once every half second.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> Cat <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> sound<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>sound <span class="token operator">=</span> sound<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>makeSound <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">\' says: \'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sound <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>annoy <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>\n        <span class="token keyword">var</span> t <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// &lt;-- this line fails with `this.makeSound is not a function` </span>\n            count<span class="token operator">++</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token function">clearTimeout</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> kitty <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token string">\'Fat Daddy\'</span><span class="token punctuation">,</span> <span class="token string">\'Mrrooowww\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nkitty<span class="token punctuation">.</span><span class="token function">annoy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>That doesn’t work because inside the <code>setInterval</code> callback we’ve created a new context with global scope, so <code>this</code> no longer points to our kitty instance. In a web browser, <code>this</code> will instead point to the Window object, which doesn’t have a <code>makeSound()</code> method.</p>\n<p>A couple of ways to make it work: </p>\n<ol>\n<li>Before creating the new context, assign <code>this</code> to a local variable named <code>me</code>, or <code>self</code>, or whatever you want to call it, and use that variable inside the callback.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> Cat <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> sound<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>sound <span class="token operator">=</span> sound<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>makeSound <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">\' says: \'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sound <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>annoy <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>\n        <span class="token keyword">var</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n        <span class="token keyword">var</span> t <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            self<span class="token punctuation">.</span><span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            count<span class="token operator">++</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token function">clearTimeout</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> kitty <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token string">\'Fat Daddy\'</span><span class="token punctuation">,</span> <span class="token string">\'Mrrooowww\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nkitty<span class="token punctuation">.</span><span class="token function">annoy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<ol start="2">\n<li>With ES6 you can avoid assigning <code>this</code> to a local variable by using an arrow function, which binds <code>this</code> to the context of the surrounding code where it’s defined.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> Cat <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> sound<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>sound <span class="token operator">=</span> sound<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>makeSound <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">\' says: \'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sound <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>annoy <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>\n        <span class="token keyword">var</span> t <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            count<span class="token operator">++</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token function">clearTimeout</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> kitty <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token string">\'Fat Daddy\'</span><span class="token punctuation">,</span> <span class="token string">\'Mrrooowww\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nkitty<span class="token punctuation">.</span><span class="token function">annoy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>Other resources</h3>\n<ul>\n<li><a href=\'http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/\' target=\'_blank\' rel=\'nofollow\'>javascriptissexy.com</a></li>\n<li><a href=\'https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md\' target=\'_blank\' rel=\'nofollow\'>You Don’t Know JS</a></li>\n</ul>',fields:{slug:"/javascript/this-reference/"},frontmatter:{title:"this reference"}}},pathContext:{slug:"/javascript/this-reference/"}}}});
//# sourceMappingURL=path---javascript-this-reference-82843562cabeb53fafe5.js.map