webpackJsonp([0x6fad29c9b4c9],{6020:function(n,e){n.exports={data:{markdownRemark:{html:'<h2>SQL Select Distinct Statement</h2>\n<h3>Introduction</h3>\n<p>This keyword allows us to get lists of unique values in a column. This guide will demonstrate that.</p>\n<h3>Full dispaly of the data in the student table</h3>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">USE</span> fcc_sql_guides_database<span class="token punctuation">;</span>\n<span class="token keyword">SELECT</span> studentID<span class="token punctuation">,</span> FullName<span class="token punctuation">,</span> sat_score<span class="token punctuation">,</span> programOfStudy<span class="token punctuation">,</span> rcd_Created<span class="token punctuation">,</span> rcd_Updated <span class="token keyword">FROM</span> student<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>+-----------+------------------------+-----------+------------------+---------------------+---------------------+\n| studentID | FullName               | sat_score | programOfStudy   | rcd_Created         | rcd_Updated         |\n+-----------+------------------------+-----------+------------------+---------------------+---------------------+\n|         1 | Monique Davis          |       400 | Literature       | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 |\n|         2 | Teri Gutierrez         |       800 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 |\n|         3 | Spencer Pautier        |      1000 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 |\n|         4 | Louis Ramsey           |      1200 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 |\n|         5 | Alvin Greene           |      1200 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 |\n|         6 | Sophie Freeman         |      1200 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 |\n|         7 | Edgar Frank "Ted" Codd |      2400 | Computer Science | 2017-08-16 15:35:33 | 2017-08-16 15:35:33 |\n|         8 | Donald D. Chamberlin   |      2400 | Computer Science | 2017-08-16 15:35:33 | 2017-08-16 15:35:33 |\n|         9 | Raymond F. Boyce       |      2400 | Computer Science | 2017-08-16 15:35:33 | 2017-08-16 15:35:33 |\n+-----------+------------------------+-----------+------------------+---------------------+---------------------+\n9 rows in set (0.00 sec)</code></pre>\n      </div>\n<h3>Get list of fields of study</h3>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> programOfStudy <span class="token keyword">FROM</span> student<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>+------------------+\n| programOfStudy   |\n+------------------+\n| Literature       |\n| Programming      |\n| Computer Science |\n+------------------+\n3 rows in set (0.00 sec)</code></pre>\n      </div>\n<p>As with all of these SQL things there is MUCH MORE to them than what’s in this introductory guide.  </p>\n<p>I hope this at least gives you enough to get started.  </p>\n<p>Please see the manual for your database manager and have fun trying different options yourself.</p>',fields:{slug:"/sql/sql-select-distinct-statement/"},frontmatter:{title:"SQL Select Distinct Statement"}}},pathContext:{slug:"/sql/sql-select-distinct-statement/"}}}});
//# sourceMappingURL=path---sql-sql-select-distinct-statement-5e54d31b45ecaf5e7cbd.js.map