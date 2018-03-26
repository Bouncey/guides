webpackJsonp([0xa116c6c5e5a2],{6021:function(n,a){n.exports={data:{markdownRemark:{html:'<h2>SQL Select into Statement</h2>\n<p>The SELECT INTO statement copies data from one table into a new table.</p>\n<ul>\n<li>\n<p>The number of columns and data type of column must be same.</p>\n</li>\n<li>\n<p>WHERE condition is optional.</p>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">column</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>\n<span class="token keyword">INTO</span> new_table\n<span class="token keyword">FROM</span> old_table\n<span class="token keyword">WHERE</span> condition<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<ul>\n<li>If you want to copy the table into another database use IN clause:</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">column</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>\n<span class="token keyword">INTO</span> new_table <span class="token operator">IN</span> externaldb\n<span class="token keyword">FROM</span> old_table<span class="token punctuation">;</span>\n</code></pre>\n      </div>',fields:{slug:"/sql/sql-select-into-statement/"},frontmatter:{title:"SQL Select into Statement"}}},pathContext:{slug:"/sql/sql-select-into-statement/"}}}});
//# sourceMappingURL=path---sql-sql-select-into-statement-1207ca59f1eae2b0bf4e.js.map