webpackJsonp([0x7d4cfc463e47],{6019:function(n,a){n.exports={data:{markdownRemark:{html:'<h2>SQL Right Join</h2>\n<h3>Example of use</h3>\n<p>For this guide we’ll discuss the SQL RIGHT JOIN.</p>\n<h3>Right Join</h3>\n<p>The RIGHT JOIN keyword returns all records from the right table (table2), and the matched records from the left table(table1) . The result is NULL from the left side, when there is no match.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span>\n<span class="token keyword">FROM</span> table1\n<span class="token keyword">RIGHT</span> <span class="token keyword">JOIN</span> table2\n<span class="token keyword">ON</span> table1<span class="token punctuation">.</span>column_name <span class="token operator">=</span> table2<span class="token punctuation">.</span>column_name<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>Complete table listings for reference</h3>\n<p>food or LEFT table data</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>+---------+--------------+-----------+------------+\n| ITEM_ID | ITEM_NAME    | ITEM_UNIT | COMPANY_ID |\n+---------+--------------+-----------+------------+\n| 1       | Chex Mix     | Pcs       | 16         |\n| 6       | Cheez-It     | Pcs       | 15         |\n| 2       | BN Biscuit   | Pcs       | 15         |\n| 3       | Mighty Munch | Pcs       | 17         |\n| 4       | Pot Rice     | Pcs       | 15         |\n| 5       | Jaffa Cakes  | Pcs       | 18         |\n| 7       | Salt n Shake | Pcs       |            |\n+---------+--------------+-----------+------------+\n\n\n\ncompany or RIGHT table data\n``` text\n+------------+---------------+--------------+\n| COMPANY_ID | COMPANY_NAME  | COMPANY_CITY |\n+------------+---------------+--------------+\n| 18         | Order All     | Boston       |\n| 15         | Jack Hill Ltd | London       |\n| 16         | Akas Foods    | Delhi        |\n| 17         | Foodies.      | London       |\n| 19         | sip-n-Bite.   | New York     |\n+------------+---------------+--------------+</code></pre>\n      </div>\n<p>To get company name from company table and company ID, item name columns from foods table, the following SQL statement can be used:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">SELECT</span> company<span class="token punctuation">.</span>company_id<span class="token punctuation">,</span>company<span class="token punctuation">.</span>company_name<span class="token punctuation">,</span>\ncompany<span class="token punctuation">.</span>company_city<span class="token punctuation">,</span>foods<span class="token punctuation">.</span>company_id<span class="token punctuation">,</span>foods<span class="token punctuation">.</span>item_name\n<span class="token keyword">FROM</span>   company\n<span class="token keyword">RIGHT</span> <span class="token keyword">JOIN</span> foods\n<span class="token keyword">ON</span> company<span class="token punctuation">.</span>company_id <span class="token operator">=</span> foods<span class="token punctuation">.</span>company_id<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>OUTPUT</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>COMPANY_ID COMPANY_NAME              COMPANY_CITY              COMPANY_ID ITEM_NAME\n---------- ------------------------- ------------------------- ---------- --------------\n18         Order All                 Boston                    18         Jaffa Cakes\n15         Jack Hill Ltd             London                    15         Pot Rice\n15         Jack Hill Ltd             London                    15         BN Biscuit\n15         Jack Hill Ltd             London                    15         Cheez-It\n16         Akas Foods                Delhi                     16         Chex Mix\n17         Foodies.                  London                    17         Mighty Munch\nNULL       NULL                      NULL                      NULL       Salt n Shake</code></pre>\n      </div>',fields:{slug:"/sql/sql-right-join-keyword/"},frontmatter:{title:"SQL Right Join"}}},pathContext:{slug:"/sql/sql-right-join-keyword/"}}}});
//# sourceMappingURL=path---sql-sql-right-join-keyword-2e36353ceb177dc6c94b.js.map