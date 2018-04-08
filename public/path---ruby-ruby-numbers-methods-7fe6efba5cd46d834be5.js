webpackJsonp([0x709781eceecd],{5950:function(n,e){n.exports={data:{markdownRemark:{html:'<p>Ruby provides a variety of built-in methods you may use on numbers. The following is an incomplete list of <a href=\'https://ruby-doc.org/core-2.2.0/Integer.html\' target=\'_blank\' rel=\'nofollow\'>integer</a> and <a href=\'https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil\' target=\'_blank\' rel=\'nofollow\'>float</a> methods.</p>\n<h2><a href=\'https://ruby-doc.org/core-2.2.0/Integer.html#method-i-even-3F\' target=\'_blank\' rel=\'nofollow\'>Even</a>:</h2>\n<p>Use <code>.even?</code> to check whether or not an <a href=\'https://ruby-doc.org/core-2.2.0/Integer.html\' target=\'_blank\' rel=\'nofollow\'><strong>integer</strong></a> is even. Returns a <code>true</code> or <code>false</code> <strong>boolean</strong>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code>    <span class="token number">15</span><span class="token punctuation">.</span>even<span class="token operator">?</span> <span class="token comment" spellcheck="true">#=> false</span>\n    <span class="token number">4</span><span class="token punctuation">.</span>even<span class="token operator">?</span>  <span class="token comment" spellcheck="true">#=> true</span>\n</code></pre>\n      </div>\n<h2><a href=\'https://ruby-doc.org/core-2.2.0/Integer.html#method-i-odd-3F\' target=\'_blank\' rel=\'nofollow\'>Odd</a>:</h2>\n<p>Use <code>.odd?</code> to check whether or not an <a href=\'https://ruby-doc.org/core-2.2.0/Integer.html\' target=\'_blank\' rel=\'nofollow\'><strong>integer</strong></a> is odd. Returns a <code>true</code> or <code>false</code> <strong>boolean</strong>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code>    <span class="token number">15</span><span class="token punctuation">.</span>odd<span class="token operator">?</span> <span class="token comment" spellcheck="true">#=> true</span>\n    <span class="token number">4</span><span class="token punctuation">.</span>odd<span class="token operator">?</span>  <span class="token comment" spellcheck="true">#=> false</span>\n</code></pre>\n      </div>\n<h2><a href=\'https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil\' target=\'_blank\' rel=\'nofollow\'>Ceil</a>:</h2>\n<p>The <code>.ceil</code> method rounds <a href=\'https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil\' target=\'_blank\' rel=\'nofollow\'><strong>floats</strong></a> <strong>up</strong> to the nearest number. Returns an <a href=\'https://ruby-doc.org/core-2.2.0/Integer.html\' target=\'_blank\' rel=\'nofollow\'><strong>integer</strong></a>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code>    <span class="token number">8.3</span><span class="token punctuation">.</span>ceil <span class="token comment" spellcheck="true">#=> 9</span>\n    <span class="token number">6.7</span><span class="token punctuation">.</span>ceil <span class="token comment" spellcheck="true">#=> 7</span>\n</code></pre>\n      </div>\n<h2><a href=\'https://ruby-doc.org/core-2.2.0/Float.html#method-i-floor\' target=\'_blank\' rel=\'nofollow\'>Floor</a>:</h2>\n<p>The <code>.floor</code> method rounds <a href=\'https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil\' target=\'_blank\' rel=\'nofollow\'><strong>floats</strong></a> <strong>down</strong> to the nearest number. Returns an <a href=\'https://ruby-doc.org/core-2.2.0/Integer.html\' target=\'_blank\' rel=\'nofollow\'><strong>integer</strong></a>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code>    <span class="token number">8.3</span><span class="token punctuation">.</span>floor <span class="token comment" spellcheck="true">#=> 8</span>\n    <span class="token number">6.7</span><span class="token punctuation">.</span>floor <span class="token comment" spellcheck="true">#=> 6</span>\n</code></pre>\n      </div>\n<h2><a href=\'https://ruby-doc.org/core-2.2.0/Integer.html#method-i-next\' target=\'_blank\' rel=\'nofollow\'>Next</a>:</h2>\n<p>Use <code>.next</code> to return the next consecutive <a href=\'https://ruby-doc.org/core-2.2.0/Integer.html\' target=\'_blank\' rel=\'nofollow\'><strong>integer</strong></a>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code>    <span class="token number">15</span><span class="token punctuation">.</span><span class="token keyword">next</span> <span class="token comment" spellcheck="true">#=> 16</span>\n    <span class="token number">2</span><span class="token punctuation">.</span><span class="token keyword">next</span>  <span class="token comment" spellcheck="true">#=> 3</span>\n    <span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">.</span><span class="token keyword">next</span> <span class="token comment" spellcheck="true">#=> -3</span>\n</code></pre>\n      </div>\n<h2><a href=\'https://ruby-doc.org/core-1.8.7/Integer.html#method-i-pred\' target=\'_blank\' rel=\'nofollow\'>Pred</a>:</h2>\n<p>Use <code>.pred</code> to return the previous consecutive <a href=\'https://ruby-doc.org/core-2.2.0/Integer.html\' target=\'_blank\' rel=\'nofollow\'><strong>integer</strong></a>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code>    <span class="token number">15</span><span class="token punctuation">.</span>pred <span class="token comment" spellcheck="true">#=> 14</span>\n    <span class="token number">2</span><span class="token punctuation">.</span>pred  <span class="token comment" spellcheck="true">#=> 1</span>\n    <span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span>pred <span class="token comment" spellcheck="true">#=> -5</span>\n</code></pre>\n      </div>\n<h2><a href=\'https://ruby-doc.org/core-2.4.2/Object.html#method-i-to_s\' target=\'_blank\' rel=\'nofollow\'>To String</a>:</h2>\n<p>Using <code>.to_s</code> on a number (<a href=\'https://ruby-doc.org/core-2.2.0/Integer.html\' target=\'_blank\' rel=\'nofollow\'><strong>integer</strong></a>, <a href=\'https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil\' target=\'_blank\' rel=\'nofollow\'><strong>floats</strong></a>, etc.) returns a <a href=\'https://ruby-doc.org/core-2.2.0/String.html\' target=\'_blank\' rel=\'nofollow\'>string</a> of that number.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code>    <span class="token number">15</span><span class="token punctuation">.</span>to_s  <span class="token comment" spellcheck="true">#=> "15"</span>\n    <span class="token number">3.4</span><span class="token punctuation">.</span>to_s <span class="token comment" spellcheck="true">#=> "3.4"</span>\n</code></pre>\n      </div>\n<h2><a href=\'https://ruby-doc.org/core-2.2.0/Integer.html#method-i-gcd\' target=\'_blank\' rel=\'nofollow\'>Greatest Common Denominator</a>:</h2>\n<p>The <code>.gcd</code> method provides the greatest common divisor (always positive) of two numbers. Returns an <a href=\'https://ruby-doc.org/core-2.2.0/Integer.html\' target=\'_blank\' rel=\'nofollow\'><strong>integer</strong></a>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code>    <span class="token number">15</span><span class="token punctuation">.</span><span class="token function">gcd</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">#=> 5</span>\n    <span class="token number">3</span><span class="token punctuation">.</span><span class="token function">gcd</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">7</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">#=> 1</span>\n</code></pre>\n      </div>\n<h2><a href=\'http://ruby-doc.org/core-2.2.0/Integer.html#method-i-round\' target=\'_blank\' rel=\'nofollow\'>Round</a>:</h2>\n<p>Use <code>.round</code> to return a rounded <a href=\'https://ruby-doc.org/core-2.2.0/Integer.html\' target=\'_blank\' rel=\'nofollow\'><strong>integer</strong></a> or <a href=\'https://ruby-doc.org/core-2.2.0/Float.html\' target=\'_blank\' rel=\'nofollow\'><strong>float</strong></a>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code>    <span class="token number">1</span><span class="token punctuation">.</span>round        <span class="token comment" spellcheck="true">#=> 1</span>\n    <span class="token number">1</span><span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>     <span class="token comment" spellcheck="true">#=> 1.0</span>\n    <span class="token number">15</span><span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>   <span class="token comment" spellcheck="true">#=> 20</span>\n</code></pre>\n      </div>\n<h2><a href=\'http://ruby-doc.org/core-2.2.0/Integer.html#method-i-times\' target=\'_blank\' rel=\'nofollow\'>Times</a>:</h2>\n<p>Use <code>.times</code> to iterate the given block <code>int</code> times.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code>    <span class="token number">5</span><span class="token punctuation">.</span>times <span class="token keyword">do</span> <span class="token operator">|</span>i<span class="token operator">|</span>\n      print i<span class="token punctuation">,</span> <span class="token string">" "</span>\n    <span class="token keyword">end</span>\n    <span class="token comment" spellcheck="true">#=> 0 1 2 3 4</span>\n</code></pre>\n      </div>',fields:{slug:"/ruby/ruby-numbers-methods/"},frontmatter:{title:"Ruby Number Methods"}}},pathContext:{slug:"/ruby/ruby-numbers-methods/"}}}});
//# sourceMappingURL=path---ruby-ruby-numbers-methods-7fe6efba5cd46d834be5.js.map