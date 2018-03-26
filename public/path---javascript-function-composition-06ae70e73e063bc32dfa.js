webpackJsonp([6059741760261],{4398:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Function composition</h2>\n<p>Function composition is the pointwise application of one function to the result of another. Developers do it in a manual manner every day when the nest functions:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>compose <span class="token operator">=</span> <span class="token punctuation">(</span>fn1<span class="token punctuation">,</span> fn2<span class="token punctuation">)</span> <span class="token operator">=></span> value <span class="token operator">=></span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token function">fn1</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>But this is hard to read. There is a better way using function composition. Instead of reading them from inside out:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>add2AndSquare <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token function">add2</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>We can use a higher order function to chain them in an ordered way.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>add2AndSquare <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span> add2<span class="token punctuation">,</span> square<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>A simple implementation of compose would be:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>compose <span class="token operator">=</span> <span class="token punctuation">(</span>f1<span class="token punctuation">,</span> f2<span class="token punctuation">)</span> <span class="token operator">=></span> value <span class="token operator">=></span> <span class="token function">f2</span><span class="token punctuation">(</span> <span class="token function">f1</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>To get even more flexibility we can use the reduceRight function:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>compose <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>fns<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>initialVal<span class="token punctuation">)</span> <span class="token operator">=></span> fns<span class="token punctuation">.</span><span class="token function">reduceRight</span><span class="token punctuation">(</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> fn<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fn</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">,</span> initialVal<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Reading compose from left to right allows a clear chaining of higher order functions. Real world examples are adding authentications, logging and context properties. It’s a technique that enables reusability on the highest level. Here are some examples how to use it:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment" spellcheck="true">// example</span>\n<span class="token keyword">const</span> add2        <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=></span> n <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> times2      <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=></span> n <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> times2add2  <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span>add2<span class="token punctuation">,</span> times2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> add6        <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span>add2<span class="token punctuation">,</span> add2<span class="token punctuation">,</span> add2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">times2add2</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// 6</span>\n<span class="token function">add2tiems2</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// 8</span>\n<span class="token function">add6</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment" spellcheck="true">// 8</span>\n</code></pre>\n      </div>\n<p>You might think this is advanced functional programming and it’s not relevant for frontend programming. But it’s also useful in Single Page Applications. For example you can add behavior to a React component by using higher order components:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">logProps</span><span class="token punctuation">(</span>InputComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  InputComponent<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>componentWillReceiveProps <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Current props: \'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Next props: \'</span><span class="token punctuation">,</span> nextProps<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> InputComponent<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// EnhancedComponent will log whenever props are received</span>\n<span class="token keyword">const</span> EnhancedComponent <span class="token operator">=</span> <span class="token function">logProps</span><span class="token punctuation">(</span>InputComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>In conclusion function composition enables reusability of functionality at a very high level. If the functions are structured well it enables developers to created new behavior based upon existing behavior.</p>\n<p>It also increases readability of implementations. Instead of nesting functions you can cleary chain functions and create higher order functions with meaningful names.</p>',fields:{slug:"/javascript/function-composition/"},frontmatter:{title:"Function Composition"}}},pathContext:{slug:"/javascript/function-composition/"}}}});
//# sourceMappingURL=path---javascript-function-composition-06ae70e73e063bc32dfa.js.map