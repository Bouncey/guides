webpackJsonp([0xfc5b6b95102b],{6001:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>SQL COUNT Aggregate Function</h2>\n<p>The COUNT operator is usually used in combination with a GROUP BY clause. It is one of the SQL “aggregate” functions, which include AVG (average) and SUM.</p>\n<p>This function will count the number of rows and return that count as a column in the result set. </p>\n<p>Here are examples of what you would use COUNT for:</p>\n<ul>\n<li>Counting all rows in a table (no group by required)</li>\n<li>Counting the totals of subsets of data (requires a Group By section of the statement)</li>\n</ul>\n<p>For reference, here is the current data for all the rows in our example student database.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">select</span> studentID<span class="token punctuation">,</span> FullName<span class="token punctuation">,</span> programOfStudy<span class="token punctuation">,</span> sat_score <span class="token keyword">from</span> student<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">-- all records with fields of interest</span>\n</code></pre>\n      </div>\n<p><img src="https://github.com/SteveChevalier/guide-images/blob/master/count01.JPG?raw=true" alt="image-1"></p>\n<p>This SQL statement provides a count of all rows.  Note that you can give the resulting COUNT column a name using “AS”.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> studentCount <span class="token keyword">from</span> student<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">-- count of all records</span>\n</code></pre>\n      </div>\n<p><img src="https://github.com/SteveChevalier/guide-images/blob/master/count02.JPG?raw=true" alt="image-1"></p>\n<p>Here we get a count of students in each field of study.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code> <span class="token keyword">select</span> studentID<span class="token punctuation">,</span> FullName<span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> studentCount <span class="token keyword">from</span> the student <span class="token keyword">table</span> <span class="token keyword">with</span> <span class="token number">a</span> <span class="token keyword">group</span> <span class="token keyword">by</span> programOfStudy<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><img src="https://github.com/SteveChevalier/guide-images/blob/master/count03.JPG?raw=true" alt="image-1"></p>\n<p>Here we get a count of students with the same SAT scores.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code> <span class="token keyword">select</span> studentID<span class="token punctuation">,</span> FullName<span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> studentCount <span class="token keyword">from</span> the student <span class="token keyword">table</span> <span class="token keyword">with</span> <span class="token number">a</span> <span class="token keyword">group</span> <span class="token keyword">by</span> sat_score<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><img src="https://github.com/SteveChevalier/guide-images/blob/master/count04.JPG?raw=true" alt="image-1"></p>\n<p>Here is an example using the campaign funds table. This is a sum total of the dollars in each transaction and the number of contributions for each political party during the 2016 US Presidential Campaign.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">select</span> Specific_Party<span class="token punctuation">,</span> Election_Year<span class="token punctuation">,</span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span>Total_$<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> contribution$Total<span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> numberOfContributions \n<span class="token keyword">from</span> combined_party_data\n<span class="token keyword">group</span> <span class="token keyword">by</span> Specific_Party<span class="token punctuation">,</span>Election_Year\n<span class="token keyword">having</span> Election_Year <span class="token operator">=</span> <span class="token number">2016</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><img src="https://github.com/SteveChevalier/guide-images/blob/master/count05.JPG?raw=true" alt="image-1"></p>\n<p>As with all of these things there is much more to it, so please see the manual for your database manager and have fun trying different tests yourself.</p>',fields:{slug:"/sql/sql-count-function/"},frontmatter:{title:"SQL COUNT Aggregate Function"}}},pathContext:{slug:"/sql/sql-count-function/"}}}});
//# sourceMappingURL=path---sql-sql-count-function-1877f6ed55c3d58d7068.js.map