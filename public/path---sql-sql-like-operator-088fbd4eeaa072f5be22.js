webpackJsonp([0xfd2abf26ac59],{6023:function(n,e){n.exports={data:{markdownRemark:{html:'<h2>SQL LIKE Operator</h2>\n<h3>LIKE Operator defined</h3>\n<p>The <code>LIKE</code> operator is used in a <code>WHERE</code> or <code>HAVING</code> (as part of the <code>GROUP BY</code>) to limit the selected rows to the items when a column has a certain pattern of characters contained in it. </p>\n<h3>This guide will demonstrate:</h3>\n<ul>\n<li>Determining if a string starts or ends with a given string pattern</li>\n<li>Determining if a pattern exists in the middle of the string</li>\n<li>Determining if a string is not contained in the string</li>\n</ul>\n<h3>A column starts or ends with a given string pattern</h3>\n<p>This SQL will select students that have <code>FullName</code> starting with “Monique” or ending with “Greene”.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">SELECT</span> studentID<span class="token punctuation">,</span> FullName<span class="token punctuation">,</span> sat_score<span class="token punctuation">,</span> rcd_updated\n<span class="token keyword">FROM</span> student \n<span class="token keyword">WHERE</span> \nFullName <span class="token operator">LIKE</span> <span class="token string">\'Monique%\'</span> <span class="token operator">OR</span> <span class="token comment" spellcheck="true">-- note the % at the end but not the beginning</span>\nFullName <span class="token operator">LIKE</span> <span class="token string">\'%Greene\'</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">-- note the % at the beginning but not the end</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>+-----------+---------------+-----------+---------------------+\n| studentID | FullName      | sat_score | rcd_updated         |\n+-----------+---------------+-----------+---------------------+\n|         1 | Monique Davis |       400 | 2017-08-16 15:34:50 |\n|         5 | Alvin Greene  |      1200 | 2017-08-16 15:34:50 |\n+-----------+---------------+-----------+---------------------+\n2 rows in set (0.00 sec)</code></pre>\n      </div>\n<h3>A string pattern is in the middle of the column</h3>\n<p>This SQL will select students that have “ree” anywhere in the name.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">SELECT</span> studentID<span class="token punctuation">,</span> FullName<span class="token punctuation">,</span> sat_score<span class="token punctuation">,</span> rcd_updated\n<span class="token keyword">FROM</span> student \n<span class="token keyword">WHERE</span> FullName <span class="token operator">LIKE</span> <span class="token string">\'%ree%\'</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">-- note the % at the beginning AND at the end</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>+-----------+----------------+-----------+---------------------+\n| studentID | FullName       | sat_score | rcd_updated         |\n+-----------+----------------+-----------+---------------------+\n|         5 | Alvin Greene   |      1200 | 2017-08-16 15:34:50 |\n|         6 | Sophie Freeman |      1200 | 2017-08-16 15:34:50 |\n+-----------+----------------+-----------+---------------------+\n2 rows in set (0.00 sec)</code></pre>\n      </div>\n<h3>A string is NOT in the column</h3>\n<p>You can place “NOT” before LIKE to exclude the rows with the string pattern instead of selecting them.\nThis SQL excludes records that contain “cer Pau” and “Ted” in the FullName column.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">SELECT</span> studentID<span class="token punctuation">,</span> FullName<span class="token punctuation">,</span> sat_score<span class="token punctuation">,</span> rcd_updated\n<span class="token keyword">FROM</span> student \n<span class="token keyword">WHERE</span> FullName <span class="token operator">NOT</span> <span class="token operator">LIKE</span> <span class="token string">\'%cer Pau%\'</span> <span class="token operator">AND</span> FullName <span class="token operator">NOT</span> <span class="token operator">LIKE</span> <span class="token string">\'%"Ted"%\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>+-----------+----------------------+-----------+---------------------+\n| studentID | FullName             | sat_score | rcd_updated         |\n+-----------+----------------------+-----------+---------------------+\n|         1 | Monique Davis        |       400 | 2017-08-16 15:34:50 |\n|         2 | Teri Gutierrez       |       800 | 2017-08-16 15:34:50 |\n|         4 | Louis Ramsey         |      1200 | 2017-08-16 15:34:50 |\n|         5 | Alvin Greene         |      1200 | 2017-08-16 15:34:50 |\n|         6 | Sophie Freeman       |      1200 | 2017-08-16 15:34:50 |\n|         8 | Donald D. Chamberlin |      2400 | 2017-08-16 15:35:33 |\n|         9 | Raymond F. Boyce     |      2400 | 2017-08-16 15:35:33 |\n+-----------+----------------------+-----------+---------------------+\n7 rows in set (0.00 sec)</code></pre>\n      </div>\n<p><em>Here is the current full student list to compare to the where clause result sets above.</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">SELECT</span> studentID<span class="token punctuation">,</span> FullName<span class="token punctuation">,</span> sat_score<span class="token punctuation">,</span> rcd_updated <span class="token keyword">FROM</span> student<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>+-----------+------------------------+-----------+---------------------+\n| studentID | FullName               | sat_score | rcd_updated         |\n+-----------+------------------------+-----------+---------------------+\n|         1 | Monique Davis          |       400 | 2017-08-16 15:34:50 |\n|         2 | Teri Gutierrez         |       800 | 2017-08-16 15:34:50 |\n|         3 | Spencer Pautier        |      1000 | 2017-08-16 15:34:50 |\n|         4 | Louis Ramsey           |      1200 | 2017-08-16 15:34:50 |\n|         5 | Alvin Greene           |      1200 | 2017-08-16 15:34:50 |\n|         6 | Sophie Freeman         |      1200 | 2017-08-16 15:34:50 |\n|         7 | Edgar Frank "Ted" Codd |      2400 | 2017-08-16 15:35:33 |\n|         8 | Donald D. Chamberlin   |      2400 | 2017-08-16 15:35:33 |\n|         9 | Raymond F. Boyce       |      2400 | 2017-08-16 15:35:33 |\n+-----------+------------------------+-----------+---------------------+\n9 rows in set (0.00 sec)</code></pre>\n      </div>',fields:{slug:"/sql/sql-like-operator/"},frontmatter:{title:"SQL LIKE Operator"}}},pathContext:{slug:"/sql/sql-like-operator/"}}}});
//# sourceMappingURL=path---sql-sql-like-operator-088fbd4eeaa072f5be22.js.map