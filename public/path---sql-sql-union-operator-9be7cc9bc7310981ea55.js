webpackJsonp([0x98c2f7c2b212],{6036:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>SQL Union Operator</h2>\n<h3>Description</h3>\n<p>For this guide we’ll discuss the UNION Operator section of the SQL statement.</p>\n<p>The UNION Operator is used to combine the results of multiple select statements into one result set.</p>\n<p>The SQL statements must have the same number of columns in their Select Statement.</p>\n<h3>Basic Example</h3>\n<p>SQL Statement</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token string">\'aaaaa\'</span>\n<span class="token keyword">UNION</span>\n<span class="token keyword">SELECT</span> <span class="token string">\'bbbbbbbbb\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Output</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>+-----------+\n| aaaaa     |\n+-----------+\n| aaaaa     |\n| bbbbbbbbb |\n+-----------+\n2 rows in set (0.00 sec)</code></pre>\n      </div>\n<h3>Example using the student tables</h3>\n<p>SQL Statement</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">SELECT</span> StudentID<span class="token punctuation">,</span> FullName <span class="token keyword">FROM</span> student <span class="token keyword">WHERE</span> studentID <span class="token operator">BETWEEN</span> <span class="token number">1</span> <span class="token operator">AND</span> <span class="token number">5</span>\n<span class="token keyword">UNION</span>\n<span class="token keyword">SELECT</span> studentID<span class="token punctuation">,</span> studentEmailAddr <span class="token keyword">FROM</span> <span class="token punctuation">`</span>student<span class="token operator">-</span>contact<span class="token operator">-</span>info<span class="token punctuation">`</span> <span class="token keyword">WHERE</span> studentID <span class="token operator">BETWEEN</span> <span class="token number">7</span> <span class="token operator">AND</span> <span class="token number">8</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Output</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>+-----------+--------------------------------+\n| StudentID | FullName                       |\n+-----------+--------------------------------+\n|         1 | Monique Davis                  |\n|         2 | Teri Gutierrez                 |\n|         3 | Spencer Pautier                |\n|         4 | Louis Ramsey                   |\n|         5 | Alvin Greene                   |\n|         7 | Maximo.Smith@freeCodeCamp.org  |\n|         8 | Michael.Roach@freeCodeCamp.ort |\n+-----------+--------------------------------+\n7 rows in set (0.00 sec)</code></pre>\n      </div>\n<h2>SQL UNION ALL Operator</h2>\n<p>The UNION ALL operator is an extension to UNION operator where it should result you a A+B of rows in the ouptput assuming A and B is your input, in simple terms UNION ALL doesn’t deduplicate.</p>\n<h3>Basic Syntax</h3>\n<p>SQL Statement</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">SELECT</span> expression1<span class="token punctuation">,</span> expression2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> expression_n\n<span class="token keyword">FROM</span> <span class="token keyword">tables</span>\n<span class="token punctuation">[</span><span class="token keyword">WHERE</span> conditions<span class="token punctuation">]</span>\n<span class="token keyword">UNION</span> <span class="token keyword">ALL</span>\n<span class="token keyword">SELECT</span> expression1<span class="token punctuation">,</span> expression2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> expression_n\n<span class="token keyword">FROM</span> <span class="token keyword">tables</span>\n<span class="token punctuation">[</span><span class="token keyword">WHERE</span> conditions<span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>As with all of these SQL things there is MUCH MORE to them than what’s in this introductory guide.  </p>\n<p>I hope this at least gives you enough to get started.  </p>\n<p>Please see the manual for your database manager and have fun trying different options yourself.</p>',fields:{slug:"/sql/sql-union-operator/"},frontmatter:{title:"SQL Union Operator"}}},pathContext:{slug:"/sql/sql-union-operator/"}}}});
//# sourceMappingURL=path---sql-sql-union-operator-9be7cc9bc7310981ea55.js.map