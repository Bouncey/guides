webpackJsonp([0x82d774a9050a],{5827:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Complex numbers have a real and an imaginary part, each represented by a floating point number.</p>\n<p>The imaginary part of a complex number can be created using an imaginary literal, this results in a complex number with a real part of <code>0.0</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token operator">>></span><span class="token operator">></span> a <span class="token operator">=</span> <span class="token number">3.5j</span>\n<span class="token operator">>></span><span class="token operator">></span> type<span class="token punctuation">(</span>a<span class="token punctuation">)</span>\n<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">\'complex\'</span><span class="token operator">></span>\n<span class="token operator">>></span><span class="token operator">></span> <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>\n<span class="token number">3.5j</span>\n<span class="token operator">>></span><span class="token operator">></span> a<span class="token punctuation">.</span>real\n<span class="token number">0.0</span>\n<span class="token operator">>></span><span class="token operator">></span> a<span class="token punctuation">.</span>imag\n<span class="token number">3.5</span>\n</code></pre>\n      </div>\n<p>No literal exists for creating a complex number with non-zero real and imaginary parts. To create a non-zero real part complex number, add an imaginary literal to a floating point number:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token operator">>></span><span class="token operator">></span> a <span class="token operator">=</span> <span class="token number">1.1</span> <span class="token operator">+</span> <span class="token number">3.5j</span>\n<span class="token operator">>></span><span class="token operator">></span> type<span class="token punctuation">(</span>a<span class="token punctuation">)</span>\n<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">\'complex\'</span><span class="token operator">></span>\n<span class="token operator">>></span><span class="token operator">></span> <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>\n<span class="token punctuation">(</span><span class="token number">1.1</span><span class="token operator">+</span><span class="token number">3.5j</span><span class="token punctuation">)</span>\n<span class="token operator">>></span><span class="token operator">></span> a<span class="token punctuation">.</span>real\n<span class="token number">1.1</span>\n<span class="token operator">>></span><span class="token operator">></span> a<span class="token punctuation">.</span>imag\n<span class="token number">3.5</span>\n</code></pre>\n      </div>\n<p>Or use the <a href=\'https://docs.python.org/3/library/functions.html#complex\' target=\'_blank\' rel=\'nofollow\'>complex constructor</a>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">complex</span><span class="token punctuation">(</span><span class="token punctuation">[</span>real<span class="token punctuation">[</span><span class="token punctuation">,</span> imag<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>The arguments used to call the complex constructor can be of numeric (including <code>complex</code>) type for either parameter:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token operator">>></span><span class="token operator">></span> complex<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">1j</span><span class="token punctuation">)</span>\n<span class="token operator">>></span><span class="token operator">></span> complex<span class="token punctuation">(</span><span class="token number">1j</span><span class="token punctuation">,</span> <span class="token number">1j</span><span class="token punctuation">)</span>\n<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">1j</span><span class="token punctuation">)</span>\n<span class="token operator">>></span><span class="token operator">></span> complex<span class="token punctuation">(</span><span class="token number">1.1</span><span class="token punctuation">,</span> <span class="token number">3.5</span><span class="token punctuation">)</span>\n<span class="token punctuation">(</span><span class="token number">1.1</span><span class="token operator">+</span><span class="token number">3.5j</span><span class="token punctuation">)</span>\n<span class="token operator">>></span><span class="token operator">></span> complex<span class="token punctuation">(</span><span class="token number">1.1</span><span class="token punctuation">)</span>\n<span class="token punctuation">(</span><span class="token number">1.1</span><span class="token operator">+</span><span class="token number">0j</span><span class="token punctuation">)</span>\n<span class="token operator">>></span><span class="token operator">></span> complex<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3.5</span><span class="token punctuation">)</span>\n<span class="token number">3.5j</span>\n</code></pre>\n      </div>\n<p>A <code>string</code> can also be used as the argument. No second argument is allowed if a string is used as an argument</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token operator">>></span><span class="token operator">></span> complex<span class="token punctuation">(</span><span class="token string">"1.1+3.5j"</span><span class="token punctuation">)</span>\n<span class="token punctuation">(</span><span class="token number">1.1</span><span class="token operator">+</span><span class="token number">3.5j</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>',fields:{slug:"/python/complex-numbers/"},frontmatter:{title:"Python Complex Numbers"}}},pathContext:{slug:"/python/complex-numbers/"}}}});
//# sourceMappingURL=path---python-complex-numbers-f5ab8e39adc750079eab.js.map