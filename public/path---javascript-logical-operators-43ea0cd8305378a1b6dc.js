webpackJsonp([0x9cd82e9e78be],{4412:function(s,e){s.exports={data:{markdownRemark:{html:'<h1>Logical Operators</h1>\n<p>Logical operators compare Boolean values and return a Boolean response.  There are two types of logical operators - Logical AND, and Logical OR. These operators are often written as &#x26;&#x26; for AND, and || for OR.</p>\n<h4>Logical AND ( &#x26;&#x26; )</h4>\n<p>The AND operator compares two expressions. If the first evaluates as <a href="https://developer.mozilla.org/en-US/docs/Glossary/Truthy">“truthy”</a>, the statement will return the value of the second expression.\nIf the first evaluates as <a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy">“falsy”</a>, the statement will return the value of the first expression.</p>\n<p>When only involving boolean values (either <code>true</code> or <code>false</code>), it returns true if only if both expressions are true. If one or both expressions are false, the entire statement will return false.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">true</span> <span class="token comment" spellcheck="true">//returns  the second value, true</span>\n<span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">false</span> <span class="token comment" spellcheck="true">//returns the second value, false</span>\n<span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">false</span> <span class="token comment" spellcheck="true">//returns the first value, false</span>\n<span class="token number">123</span> <span class="token operator">&amp;&amp;</span> <span class="token string">\'abc\'</span> <span class="token comment" spellcheck="true">// returns the second value, \'abc\'</span>\n<span class="token string">\'abc\'</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">null</span> <span class="token comment" spellcheck="true">//returns the second value, null</span>\nundefined <span class="token operator">&amp;&amp;</span> <span class="token string">\'abc\'</span> <span class="token comment" spellcheck="true">//returns the first value, undefined</span>\n<span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">false</span> <span class="token comment" spellcheck="true">//returns the first value, 0</span>\n</code></pre>\n      </div>\n<h4>Logical OR ( || )</h4>\n<p>The OR operator compares two expressions. If the first evaluates as “falsy”, the statement will return the value of the second second expression. If the first evaluates as “truthy”, the statement will return the value of the first expression.</p>\n<p>When only involving boolean values (either <code>true</code> or <code>false</code>), it returns true if either expression is true. Both expressions can be true, but only one is needed to get true as a result.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token boolean">true</span> <span class="token operator">||</span> <span class="token boolean">true</span> <span class="token comment" spellcheck="true">//returns the first value, true</span>\n<span class="token boolean">true</span> <span class="token operator">||</span> <span class="token boolean">false</span> <span class="token comment" spellcheck="true">//returns the first value, true</span>\n<span class="token boolean">false</span> <span class="token operator">||</span> <span class="token boolean">false</span> <span class="token comment" spellcheck="true">//returns the second value, false</span>\n<span class="token number">123</span> <span class="token operator">||</span> <span class="token string">\'abc\'</span> <span class="token comment" spellcheck="true">// returns the first value, 123</span>\n<span class="token string">\'abc\'</span> <span class="token operator">||</span> <span class="token keyword">null</span> <span class="token comment" spellcheck="true">//returns the first value, \'abc\'</span>\nundefined <span class="token operator">||</span> <span class="token string">\'abc\'</span> <span class="token comment" spellcheck="true">//returns the second value, \'abc\'</span>\n<span class="token number">0</span> <span class="token operator">||</span> <span class="token boolean">false</span> <span class="token comment" spellcheck="true">//returns the second value, false</span>\n</code></pre>\n      </div>\n<h4>Tips:</h4>\n<p>Both logical operators will return the value of the last evaluated expression. For example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token string">"cat"</span> <span class="token operator">&amp;&amp;</span> <span class="token string">"dog"</span> <span class="token comment" spellcheck="true">//returns "dog"</span>\n<span class="token string">"cat"</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">false</span> <span class="token comment" spellcheck="true">//returns false</span>\n<span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token string">"cat"</span>  <span class="token comment" spellcheck="true">//returns 0 (which is a falsy value)</span>\n\n<span class="token string">"cat"</span> <span class="token operator">||</span> <span class="token string">"dog"</span> <span class="token comment" spellcheck="true">//returns "cat"</span>\n<span class="token string">"cat"</span> <span class="token operator">||</span> <span class="token boolean">false</span> <span class="token comment" spellcheck="true">//returns "cat"</span>\n<span class="token number">0</span> <span class="token operator">||</span> <span class="token string">"cat"</span> <span class="token comment" spellcheck="true">//returns "cat"</span>\n</code></pre>\n      </div>\n<p>Note that where <code>&#x26;&#x26;</code> returns the first value, <code>||</code> returns the second value and vice versa.</p>\n<h4>More information:</h4>\n<p><a href="https://guide.freecodecamp.org/javascript/truth-table">Javascript Truth Table</a></p>\n<p><a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Logical_Operators">MDN</a></p>',fields:{slug:"/javascript/logical-operators/"},frontmatter:{title:"Logical Operators"}}},pathContext:{slug:"/javascript/logical-operators/"}}}});
//# sourceMappingURL=path---javascript-logical-operators-43ea0cd8305378a1b6dc.js.map