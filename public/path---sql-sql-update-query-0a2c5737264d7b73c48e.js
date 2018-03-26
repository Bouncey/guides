webpackJsonp([55595086480428],{6027:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>SQL Update Query</h2>\n<h3>What an Update query can do</h3>\n<p>An update query gives the DBA or SQL-using programmer the ability to update many records with one command. </p>\n<p>Important Safety Tip! Always have a backup copy of what you are about to change BEFORE you change it!</p>\n<p>This guide will:  </p>\n<ul>\n<li>add a new field to the student table</li>\n<li>test the logic to update that field with a school assigned email address</li>\n<li>update the new field.</li>\n</ul>\n<p>Here is the student table as we start this process</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> student<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>+-----------+------------------------+-----------+------------------+---------------------+---------------------+\n| studentID | FullName               | sat_score | programOfStudy   | rcd_Created         | rcd_Updated         |\n+-----------+------------------------+-----------+------------------+---------------------+---------------------+\n|         1 | Monique Davis          |       400 | Literature       | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 |\n|         2 | Teri Gutierrez         |       800 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 |\n|         3 | Spencer Pautier        |      1000 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 |\n|         4 | Louis Ramsey           |      1200 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 |\n|         5 | Alvin Greene           |      1200 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 |\n|         6 | Sophie Freeman         |      1200 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 |\n|         7 | Edgar Frank "Ted" Codd |      2400 | Computer Science | 2017-08-16 15:35:33 | 2017-08-16 15:35:33 |\n|         8 | Donald D. Chamberlin   |      2400 | Computer Science | 2017-08-16 15:35:33 | 2017-08-16 15:35:33 |\n|         9 | Raymond F. Boyce       |      2400 | Computer Science | 2017-08-16 15:35:33 | 2017-08-16 15:35:33 |\n+-----------+------------------------+-----------+------------------+---------------------+---------------------+\n9 rows in set (0.00 sec)</code></pre>\n      </div>\n<h3>Alter the table and add a new field</h3>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code>    <span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token punctuation">`</span>fcc_sql_guides_database<span class="token punctuation">`</span><span class="token punctuation">.</span><span class="token punctuation">`</span>student<span class="token punctuation">`</span> \n\t<span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> <span class="token punctuation">`</span>schoolEmailAdr<span class="token punctuation">`</span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">125</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">AFTER</span> <span class="token punctuation">`</span>programOfStudy<span class="token punctuation">`</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The student table after the alter is executed.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>mysql> SELECT FullName, sat_score, programOfStudy, schoolEmailAdr FROM student;\n+------------------------+-----------+------------------+----------------+\n| FullName               | sat_score | programOfStudy   | schoolEmailAdr |\n+------------------------+-----------+------------------+----------------+\n| Monique Davis          |       400 | Literature       | NULL           |\n| Teri Gutierrez         |       800 | Programming      | NULL           |\n| Spencer Pautier        |      1000 | Programming      | NULL           |\n| Louis Ramsey           |      1200 | Programming      | NULL           |\n| Alvin Greene           |      1200 | Programming      | NULL           |\n| Sophie Freeman         |      1200 | Programming      | NULL           |\n| Edgar Frank "Ted" Codd |      2400 | Computer Science | NULL           |\n| Donald D. Chamberlin   |      2400 | Computer Science | NULL           |\n| Raymond F. Boyce       |      2400 | Computer Science | NULL           |\n+------------------------+-----------+------------------+----------------+\n9 rows in set (0.00 sec)</code></pre>\n      </div>\n<h3>TESTING the logic (VERY important step!)</h3>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">SELECT</span> FullName<span class="token punctuation">,</span> instr<span class="token punctuation">(</span>FullName<span class="token punctuation">,</span><span class="token string">" "</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> firstSpacePosition<span class="token punctuation">,</span> \nconcat<span class="token punctuation">(</span>substring<span class="token punctuation">(</span>FullName<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>instr<span class="token punctuation">(</span>FullName<span class="token punctuation">,</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">"@someSchool.edu"</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> schoolEmail\n<span class="token keyword">FROM</span> student<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>+------------------------+--------------------+------------------------+\n| FullName               | firstSpacePosition | schoolEmail            |\n+------------------------+--------------------+------------------------+\n| Monique Davis          |                  8 | Monique@someSchool.edu |\n| Teri Gutierrez         |                  5 | Teri@someSchool.edu    |\n| Spencer Pautier        |                  8 | Spencer@someSchool.edu |\n| Louis Ramsey           |                  6 | Louis@someSchool.edu   |\n| Alvin Greene           |                  6 | Alvin@someSchool.edu   |\n| Sophie Freeman         |                  7 | Sophie@someSchool.edu  |\n| Edgar Frank "Ted" Codd |                  6 | Edgar@someSchool.edu   |\n| Donald D. Chamberlin   |                  7 | Donald@someSchool.edu  |\n| Raymond F. Boyce       |                  8 | Raymond@someSchool.edu |\n+------------------------+--------------------+------------------------+\n9 rows in set (0.00 sec)</code></pre>\n      </div>\n<p><em>A note about concat(): in MySQL this command is used to combined strings, not so in other SQL versions (check your manual).  In this usage it works like this: The substring of the FullName field up to but not including the first space is combined with “@someSchool.edu”.  In the real world this would HAVE TO be much more complex and you would need to ensure that the email address is unique.</em></p>\n<h3>Doing the update</h3>\n<p>We’ll pretend that this is what we want and update the table with this information:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">UPDATE</span> student <span class="token keyword">SET</span> schoolEmailAdr <span class="token operator">=</span> concat<span class="token punctuation">(</span>substring<span class="token punctuation">(</span>FullName<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>instr<span class="token punctuation">(</span>FullName<span class="token punctuation">,</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">"@someSchool.edu"</span><span class="token punctuation">)</span>\n<span class="token keyword">WHERE</span> schoolEmailAdr <span class="token operator">is</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Success!</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>mysql> SELECT FullName, sat_score, programOfStudy, schoolEmailAdr FROM student;\n+------------------------+-----------+------------------+------------------------+\n| FullName               | sat_score | programOfStudy   | schoolEmailAdr         |\n+------------------------+-----------+------------------+------------------------+\n| Monique Davis          |       400 | Literature       | Monique@someSchool.edu |\n| Teri Gutierrez         |       800 | Programming      | Teri@someSchool.edu    |\n| Spencer Pautier        |      1000 | Programming      | Spencer@someSchool.edu |\n| Louis Ramsey           |      1200 | Programming      | Louis@someSchool.edu   |\n| Alvin Greene           |      1200 | Programming      | Alvin@someSchool.edu   |\n| Sophie Freeman         |      1200 | Programming      | Sophie@someSchool.edu  |\n| Edgar Frank "Ted" Codd |      2400 | Computer Science | Edgar@someSchool.edu   |\n| Donald D. Chamberlin   |      2400 | Computer Science | Donald@someSchool.edu  |\n| Raymond F. Boyce       |      2400 | Computer Science | Raymond@someSchool.edu |\n+------------------------+-----------+------------------+------------------------+\n9 rows in set (0.00 sec)</code></pre>\n      </div>\n<p>As with all of these SQL things there is MUCH MORE to them than what’s in this introductory guide.  </p>\n<p>I hope this at least gives you enough to get started.  </p>\n<p>Please see the manual for your database manager and have fun trying different options yourself.</p>',fields:{slug:"/sql/sql-update-query/"},frontmatter:{title:"SQL Update Query"}}},pathContext:{slug:"/sql/sql-update-query/"}}}});
//# sourceMappingURL=path---sql-sql-update-query-0a2c5737264d7b73c48e.js.map