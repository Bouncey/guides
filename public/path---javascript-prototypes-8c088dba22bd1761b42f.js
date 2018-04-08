webpackJsonp([89464330119782],{4442:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Prototypes</h2>\n<p>JavaScript is a prototype-based language, therefore understanding the prototype object is one of the most important concepts which  JavaScript practitioners need to know. This article will give you a short overview of the Prototype object through various  examples. Before reading this article, you will need to have a basic understanding of  <a href="/javascript/this-in-javascript"><code>this</code> reference in JavaScript</a>.</p>\n<h3>Prototype object</h3>\n<p>For the sake of clarity, let’s examine the following example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Point2D</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>As <code>Point2D</code> function is declared, a property named <code>prototype</code> will be created by default for it (note that, in JavaScript, a function is also a object). The <code>prototype</code> property is also a object which contains a <code>constructor</code> property and its value is <code>Point2D</code> function: <code>Point2D.prototype.constructor = Point2D</code>. And when you call <code>Point2D</code> with <code>new</code> keyword, <em>newly created objects will inherit all properties from</em> <code>Point2D.prototype</code>. To check that, you can add a method named <code>move</code> into <code>Point2D.prototype</code> as follow:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>Point2D<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>move <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>dx<span class="token punctuation">,</span> dy<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">+=</span> dx<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">+=</span> dy<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point2D</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\np1<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 4</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 6</span>\n</code></pre>\n      </div>\n<p>The <code>Point2D.prototype</code> is called <strong>prototype object</strong> or <strong>prototype</strong> of <code>p1</code> object and for any object created with <code>new Point2D(...)</code> syntax. You can add more properties to <code>Point2D.prototype</code> object as you like. The common pattern is declare methods to <code>Point2D.prototype</code> and other properties will be declared in constructor function.</p>\n<p>Built-in objects in JavaScript is constructed similar as above. For example:</p>\n<ul>\n<li>Prototype of objects created with <code>new Object()</code> or <code>{}</code> syntax is <code>Object.prototype</code>.</li>\n<li>Prototype of arrays created with <code>new Array()</code> or <code>[]</code> syntax is <code>Array.prototype</code>.</li>\n<li>And so on with other built-in objects such as <code>Date</code> and <code>RegExp</code>.</li>\n</ul>\n<p><code>Object.prototype</code> is inherited by all objects and it has no prototype (its prototype is <code>null</code>).</p>\n<h3>Prototype chain</h3>\n<p>The prototype chain mechanism is simple: When you access a property <code>p</code> on object <code>obj</code>, the JavaScript engine will search this property inside <code>obj</code> object. If the engine fails to search, it continues searching in the  prototype of <code>obj</code> object and so on until reaching <code>Object.prototype</code>. If after the search has finished, and nothing has been found the result will be <code>undefined</code>.\nFor example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>\n  a<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  b<span class="token punctuation">:</span> <span class="token number">2</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> obj2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>\nobj2<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 2</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 2</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">.</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// undefined</span>\n</code></pre>\n      </div>\n<p>In above snippet, the statement <code>var obj2 = Object.create(obj1)</code> will create <code>obj2</code> object with prototype  <code>obj1</code> object. In other words, <code>obj1</code> becomes the prototype of <code>obj2</code> instead of <code>Object.prototype</code> by default. As you can see,  <code>b</code> is not a property of <code>obj2</code>, you can still access it via the  prototype chain. For <code>c</code> property, however, you get <code>undefined</code> value because it can’t be found in <code>obj1</code> and <code>Object.prototype</code>.</p>\n<h3>Classes</h3>\n<p>In ES2016, we now get to use the <code>Class</code> keyword as well as the methods mentioned above to manipulate <code>prototype</code>. The JavaScript <code>Class</code> appeals to developers from OOP backgrounds, but it’s essentially doing the same thing as above.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>height<span class="token punctuation">,</span> width<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height\n    <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">get</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">calcArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">calcArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>width\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> square <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>square<span class="token punctuation">.</span>area<span class="token punctuation">)</span> <span class="token comment" spellcheck="true">// 100</span>\n</code></pre>\n      </div>\n<p>This is basically the same as:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Rectangle</span><span class="token punctuation">(</span>height<span class="token punctuation">,</span> width<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height\n  <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width\n<span class="token punctuation">}</span>\n\nRectangle<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>calcArea <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">calcArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>width\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The <code>getter</code> and <code>setter</code> methods in classes bind an Object property to a function that will be called when that property is looked up. It’s just syntactic sugar to help make it easier to <em>look up</em> or <em>set</em> properties.</p>',fields:{slug:"/javascript/prototypes/"},frontmatter:{title:"Prototypes"}}},pathContext:{slug:"/javascript/prototypes/"}}}});
//# sourceMappingURL=path---javascript-prototypes-8c088dba22bd1761b42f.js.map