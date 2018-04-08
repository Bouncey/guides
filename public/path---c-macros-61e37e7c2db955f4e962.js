webpackJsonp([67192859618420],{3547:function(n,a){n.exports={data:{markdownRemark:{html:'<h2>Macros in C</h2>\n<p>A macro is a piece of code with a given name. When the name is used, it is replaced by the content of the macro.</p>\n<h4>Defining macros</h4>\n<p>The <code>#define</code> keyword is used to define new macros. It’s followed by a name and a content. By convention, macro names are written in uppercase.</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token macro property">#<span class="token directive keyword">define</span> PI 3.14</span>\n</code></pre>\n      </div>\n<p>If you use the macro this way:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Value of PI: %d"</span><span class="token punctuation">,</span> PI<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Is the same as write this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Value of PI: %d"</span><span class="token punctuation">,</span> <span class="token number">3.14</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4>Types of macros</h4>\n<p>There are two type of macros. The <code>Object-like</code> macros, showed above, and the <code>Function-like</code> macros.</p>\n<h4>Function-like Macros</h4>\n<p>Function-like uses the same <code>#define</code> keyword. The difference is that you use a pair o parentheses after the function name.</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token macro property">#<span class="token directive keyword">define</span> hello_world() printf("Hello World!")</span>\n</code></pre>\n      </div>\n<p>So calling:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token function">hello_world</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>You get:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>You can set parameters too:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token macro property">#<span class="token directive keyword">define</span> hello(X) printf("Hello " X "!")</span>\n</code></pre>\n      </div>\n<p>Now calling:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token function">hello</span><span class="token punctuation">(</span><span class="token string">"World"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>You get the equivallent of:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4>More Information:</h4>\n<!-- Please add any articles you think might be helpful to read before writing the article -->\n<p><a href="https://gcc.gnu.org/onlinedocs/cpp/Macros.html">GCC Online Documentation: Macros</a></p>\n<p><a href="https://gcc.gnu.org/onlinedocs/cpp/Object-like-Macros.html#Object-like-Macros">GCC Online Documentation: Object-like macros</a></p>\n<p><a href="https://gcc.gnu.org/onlinedocs/cpp/Function-like-Macros.html#Function-like-Macros">GCC Online Documentation: Function-like macros</a></p>',fields:{slug:"/c/macros/"},frontmatter:{title:"Macros in C"}}},pathContext:{slug:"/c/macros/"}}}});
//# sourceMappingURL=path---c-macros-61e37e7c2db955f4e962.js.map