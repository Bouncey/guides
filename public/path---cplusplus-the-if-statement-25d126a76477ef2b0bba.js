webpackJsonp([54845608944923],{3912:function(n,s){n.exports={data:{markdownRemark:{html:'<h1>The IF statement.</h1>\n<p><strong>What does an <code>If</code> Statement do?</strong></p>\n<ul>\n<li>The <code>if</code> statement evaluates your test expression present inside the parenthesis.</li>\n<li>The <code>if</code> statement uses relational and logical operators to make logical expressions.</li>\n</ul>\n<hr>\n<p>The general form of an <code>if</code> statement:</p>\n<p> if (Test Expression / Condition )\n{\n// code block if test expression is True\n}</p>\n<hr>\n<p>If the value of your test expression is <code>true</code>, then the block of\ncode inside the if statement is executed.</p>\n<p>If the value of your test expression is <code>false</code>, then the block of\ncode inside the if statement is skipped and your code continues.</p>\n<p>Example of <code>if</code> Statement:</p>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code>  <span class="token keyword">int</span> a<span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n  \n  <span class="token comment" spellcheck="true">//TRUE STATEMENT</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token operator">&lt;</span><span class="token number">20</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">//execute block of code</span>\n  <span class="token punctuation">}</span>\n<span class="token comment" spellcheck="true">//FALSE STATEMENT</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span>\n <span class="token punctuation">{</span>\n   <span class="token comment" spellcheck="true">//Skip block of code.</span>\n <span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">//program continues   //program continues</span>\n</code></pre>\n      </div>\n<p>Example in C++ :</p>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code><span class="token comment" spellcheck="true">//Program to check if number entered by the user is positive</span>\n<span class="token comment" spellcheck="true">//If negative, the block of code is skipped</span>\n\n<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;iostream></span></span>\n<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token punctuation">{</span>\n\n<span class="token keyword">int</span> no <span class="token punctuation">;</span>\ncout <span class="token operator">&lt;&lt;</span> <span class="token string">"Enter a number : "</span><span class="token punctuation">;</span>\ncin <span class="token operator">>></span> no <span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">//If Statement to check if the number is positive</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>no<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\ncout <span class="token operator">&lt;&lt;</span> <span class="token string">"You have entered a positive number : "</span><span class="token operator">&lt;&lt;</span> no <span class="token operator">&lt;&lt;</span> endl <span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment" spellcheck="true">//If number is not positive, then if statement is skipped a program continues</span>\ncout<span class="token operator">&lt;&lt;</span><span class="token string">"This step is always printed"</span><span class="token operator">&lt;&lt;</span>endl <span class="token punctuation">;</span>\n\n<span class="token keyword">return</span> <span class="token number">0</span> <span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Output :</h3>\n<p>  OUTPUT 1 :</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Enter a number :  5\nYou have entered a positive number : 5\nThis step is always printed </code></pre>\n      </div>\n<p>  This is the output when the number entered is positive.</p>\n<p>  OUTPUT 2 :</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Enter a number :  -1\nThis step is always printed</code></pre>\n      </div>\n<p>  This is the output when the number entered is negative.</p>\n<p><a href=\'https://repl.it/Mg9X\' target=\'_blank\' rel=\'nofollow\'>Try the code yourself ! :) </a></p>',fields:{slug:"/cplusplus/the-if-statement/"},frontmatter:{title:"C++ If Statement"}}},pathContext:{slug:"/cplusplus/the-if-statement/"}}}});
//# sourceMappingURL=path---cplusplus-the-if-statement-25d126a76477ef2b0bba.js.map