webpackJsonp([0xfd5b30cedeac],{6028:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>SQL Replace VIEW Statement</h2>\n<h2>Introduction</h2>\n<p>A View is a database object that presents data from in one or more tables. The same SQL statement used to create a view can also be used to replace an existing view.</p>\n<p>This guide will update (replace) the existing view “programming-students-v” with one that is slightly different and has a different name.</p>\n<p>Safety tip: always backup the schema before making changes to it.</p>\n<h3>General sytax</h3>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token operator">OR</span> REPLACE <span class="token keyword">VIEW</span> view_name <span class="token keyword">AS</span>\n<span class="token keyword">SELECT</span> column1<span class="token punctuation">,</span> column2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token keyword">FROM</span> table_name\n<span class="token keyword">WHERE</span> condition<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>SQL Used to create the view and the current data</h3>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">view</span> <span class="token punctuation">`</span>programming<span class="token operator">-</span>students<span class="token operator">-</span>v<span class="token punctuation">`</span> <span class="token keyword">as</span>\n<span class="token keyword">select</span> FullName<span class="token punctuation">,</span> programOfStudy \n<span class="token keyword">from</span> student \n<span class="token keyword">where</span> programOfStudy <span class="token operator">=</span> <span class="token string">\'Programming\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token punctuation">`</span>programming<span class="token operator">-</span>students<span class="token operator">-</span>v<span class="token punctuation">`</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Current Data:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>+-----------------+----------------+\n| FullName        | programOfStudy |\n+-----------------+----------------+\n| Teri Gutierrez  | Programming    |\n| Spencer Pautier | Programming    |\n| Louis Ramsey    | Programming    |\n| Alvin Greene    | Programming    |\n| Sophie Freeman  | Programming    |\n+-----------------+----------------+\n5 rows in set (0.00 sec)</code></pre>\n      </div>\n<p>A list of the existing views:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">SHOW</span> <span class="token keyword">FULL</span> <span class="token keyword">TABLES</span> <span class="token operator">IN</span> fcc_sql_guides_database <span class="token keyword">WHERE</span> TABLE_TYPE <span class="token operator">LIKE</span> <span class="token string">\'VIEW\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>+-----------------------------------+------------+\n| Tables_in_fcc_sql_guides_database | Table_type |\n+-----------------------------------+------------+\n| programming-students-v            | VIEW       |\n| students-contact-info_v           | VIEW       |\n| students_dropme_v                 | VIEW       |\n+-----------------------------------+------------+\n3 rows in set (0.00 sec)</code></pre>\n      </div>\n<h3>Replacing the view</h3>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">create</span> <span class="token operator">or</span> replace <span class="token keyword">view</span> <span class="token punctuation">`</span>programming<span class="token operator">-</span>students<span class="token operator">-</span>v<span class="token punctuation">`</span> <span class="token keyword">as</span>\n<span class="token keyword">select</span> FullName<span class="token punctuation">,</span> programOfStudy<span class="token punctuation">,</span> sat_score \n<span class="token keyword">from</span> student \n<span class="token keyword">where</span> programOfStudy <span class="token operator">=</span> <span class="token string">\'Programming\'</span><span class="token punctuation">;</span>    \n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token punctuation">`</span>programming<span class="token operator">-</span>students<span class="token operator">-</span>v<span class="token punctuation">`</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Note: the view now shows the sat_score.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>+-----------------+----------------+-----------+\n| FullName        | programOfStudy | sat_score |\n+-----------------+----------------+-----------+\n| Teri Gutierrez  | Programming    |       800 |\n| Spencer Pautier | Programming    |      1000 |\n| Louis Ramsey    | Programming    |      1200 |\n| Alvin Greene    | Programming    |      1200 |\n| Sophie Freeman  | Programming    |      1200 |\n+-----------------+----------------+-----------+</code></pre>\n      </div>\n<p>Note: the list of views hasn’t change, our view is replaced.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>mysql>  SHOW FULL TABLES IN fcc_sql_guides_database WHERE TABLE_TYPE LIKE \'VIEW\';\n+-----------------------------------+------------+\n| Tables_in_fcc_sql_guides_database | Table_type |\n+-----------------------------------+------------+\n| programming-students-v            | VIEW       |\n| students-contact-info_v           | VIEW       |\n| students_dropme_v                 | VIEW       |\n+-----------------------------------+------------+\n3 rows in set (0.00 sec)</code></pre>\n      </div>\n<p>*As with all of these SQL things there is MUCH MORE to them than what’s in this introductory guide. I hope this at least gives you enough to get started. Please see the manual for your database manager and have fun trying different options yourself.</p>',fields:{slug:"/sql/sql-replace-view-statement/"},frontmatter:{title:"SQL Replace VIEW Statement"}}},pathContext:{slug:"/sql/sql-replace-view-statement/"}}}});
//# sourceMappingURL=path---sql-sql-replace-view-statement-8822f29c0c36a9ecd8ba.js.map