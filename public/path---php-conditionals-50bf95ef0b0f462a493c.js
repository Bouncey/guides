webpackJsonp([0xee8e1038f9e6],{5738:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Conditionals</h2>\n<p>Conditionals in PHP are written using the <code>if</code>, <code>elseif</code>, <code>else</code> syntax. Using conditionals allows you to perform different actions depending on different inputs and values provided to a page at run time. In PHP conditionals are often referred to as control structures.</p>\n<h3>If</h3>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string">\'name\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"freecodecamp"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">echo</span> <span class="token string">"You viewed the freeCodeCamp Page!"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Elseif</h3>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string">\'name\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"freecodecamp"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">echo</span> <span class="token string">"You viewed the freeCodeCamp Page!"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">elseif</span> <span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string">\'name\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"freecodecampguide"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">echo</span> <span class="token string">"You viewed the freeCodeCamp Guide Page!"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Else</h3>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string">\'name\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"freecodecamp"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">echo</span> <span class="token string">"You viewed the freeCodeCamp Page!"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">elseif</span> <span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string">\'name\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"freecodecampguide"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">echo</span> <span class="token string">"You viewed the freeCodeCamp Guide Page!"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  <span class="token keyword">echo</span> <span class="token string">"You viewed a page that does not exist yet!"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Note</h3>\n<p>In cases where you have a lot of possible conditions you may want to use a <a href="/php/switch">Switch Statement</a>.</p>\n<h4>More Information:</h4>\n<ul>\n<li><a href="https://secure.php.net/manual/en/control-structures.elseif.php" rel="nofollow">php.net control structures manual</a></li>\n</ul>',fields:{slug:"/php/conditionals/"},frontmatter:{title:"Conditionals"}}},pathContext:{slug:"/php/conditionals/"}}}});
//# sourceMappingURL=path---php-conditionals-50bf95ef0b0f462a493c.js.map