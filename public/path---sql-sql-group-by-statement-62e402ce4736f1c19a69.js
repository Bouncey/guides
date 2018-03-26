webpackJsonp([0x5efa10bd5c48],{6002:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>SQL Group By Statemet</h2>\n<h3>Example of use</h3>\n<p>GROUP BY gives us a way to combine rows and aggregate data.</p>\n<p>The data used is from the campaign contributions data we’ve been using in some of these guides.</p>\n<p>The following SQL statement is answering the question: “which candidates received the largest total contributions in 2016 BUT only those that had more than $20 Million USD?”</p>\n<p>Ordering this data set in a descending (DESC) order places the candidates with the largest total contributions at the top of the list.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">SELECT</span> Candidate<span class="token punctuation">,</span> Election_year<span class="token punctuation">,</span> <span class="token function">sum</span><span class="token punctuation">(</span>Total_$<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span>\n<span class="token keyword">FROM</span> combined_party_data\n<span class="token keyword">WHERE</span> Election_year <span class="token operator">=</span> <span class="token number">2016</span>\n<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> Candidate<span class="token punctuation">,</span> Election_year <span class="token comment" spellcheck="true">-- this tells the DBMS to summarize by these two columns</span>\n<span class="token keyword">HAVING</span> <span class="token function">sum</span><span class="token punctuation">(</span>Total_$<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">20000000</span>  <span class="token comment" spellcheck="true">-- limits the rows presented from the summary of money ($20 Million USD)</span>\n<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token function">sum</span><span class="token punctuation">(</span>Total_$<span class="token punctuation">)</span> <span class="token keyword">DESC</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">-- orders the presented rows with the largest ones first.</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>+--------------------------------------------------+---------------+-------------------+----------+\n| Candidate                                        | Election_year | sum(Total_$)      | count(*) |\n+--------------------------------------------------+---------------+-------------------+----------+\n| CLINTON, HILLARY RODHAM & KAINE, TIMOTHY M (TIM) |          2016 | 568135094.4400003 |      126 |\n| TRUMP, DONALD J & PENCE, MICHAEL R (MIKE)        |          2016 | 366853142.7899999 |      114 |\n| SANDERS, BERNARD (BERNIE)                        |          2016 |      258562022.17 |      122 |\n| CRUZ, RAFAEL EDWARD (TED)                        |          2016 | 93430700.29000005 |      104 |\n| CARSON, BENJAMIN S (BEN)                         |          2016 | 62202411.12999996 |       93 |\n| RUBIO, MARCO ANTONIO                             |          2016 |        44384313.9 |      106 |\n| BUSH, JOHN ELLIS (JEB)                           |          2016 |       34606731.78 |       97 |\n+--------------------------------------------------+---------------+-------------------+----------+\n7 rows in set (0.01 sec)</code></pre>\n      </div>\n<p>As with all of these SQL things there is MUCH MORE to them than what’s in this introductory guide.  </p>\n<p>I hope this at least gives you enough to get started.  </p>\n<p>Please see the manual for your database manager and have fun trying different options yourself.</p>',fields:{slug:"/sql/sql-group-by-statement/"},frontmatter:{title:"SQL Group By Statement"}}},pathContext:{slug:"/sql/sql-group-by-statement/"}}}});
//# sourceMappingURL=path---sql-sql-group-by-statement-62e402ce4736f1c19a69.js.map