webpackJsonp([0x62d7cf276662],{6010:function(e,s){e.exports={data:{markdownRemark:{html:'<h2>SQL Interview Questions</h2>\n<h3>What is an inner join in SQL?</h3>\n<p>This is the default type of join if no join is specified. It retuns all rows in which there is at least one match in both tables.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> A x <span class="token keyword">JOIN</span> B y <span class="token keyword">ON</span> y<span class="token punctuation">.</span>aId <span class="token operator">=</span> x<span class="token punctuation">.</span>Id\n</code></pre>\n      </div>\n<h3>What is a left join in SQL?</h3>\n<p>A left join returns all rows from the left table, and the matched rows from the right table. Rows in the left table will be returned even if there was no match in the right table. The rows from the left table with no match in the right table will have <code>null</code> for right table values.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> A x <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> B y <span class="token keyword">ON</span> y<span class="token punctuation">.</span>aId <span class="token operator">=</span> x<span class="token punctuation">.</span>Id\n</code></pre>\n      </div>\n<h3>What is a right join in SQL?</h3>\n<p>A right join returns all rows from the right table, and the matched rows from the left table. Opposite of a left join, this will return all rows from the right table even where there is no match in the left table. Rows in the right table that have no match in the left table will have <code>null</code> values for left table columns.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> A x <span class="token keyword">RIGHT</span> <span class="token keyword">JOIN</span> B y <span class="token keyword">ON</span> y<span class="token punctuation">.</span>aId <span class="token operator">=</span> x<span class="token punctuation">.</span>Id\n</code></pre>\n      </div>\n<h3>What is a full join in SQL?</h3>\n<p>A full join returns all rows for which there is a match in either of the tables. So if there are rows in the left table that do not have matches in the right table, those will be included. As well as if there are rows in the right table that do not have matches in the left table, those will be included.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">SELECT</span> Customers<span class="token punctuation">.</span>CustomerName<span class="token punctuation">,</span> Orders<span class="token punctuation">.</span>OrderID\n<span class="token keyword">FROM</span> Customers\n<span class="token keyword">FULL</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span> Orders\n<span class="token keyword">ON</span> Customers<span class="token punctuation">.</span>CustomerID<span class="token operator">=</span>Orders<span class="token punctuation">.</span>CustomerID\n<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> Customers<span class="token punctuation">.</span>CustomerName\n</code></pre>\n      </div>\n<h1>Changes</h1>\n<h3>What is the result of the following command?</h3>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>  DROP VIEW view_name</code></pre>\n      </div>\n<p>Here it’ll be an error because we can’t perform a DML operation on a view.</p>\n<h3>Can we perform a rollback after using ALTER command?</h3>\n<p>No, because ALTER is a DDL command and Oracle server performs an automatic COMMIT when the DDL statements are executed.</p>\n<h3>Which is the only constraint that enforces rules at column level?</h3>\n<p>NOT NULL is the only contstraint that works at the column level.</p>\n<h3>What are the pseudocolumns in SQL? Give some examples?</h3>\n<p>A pseudocolumn is a function which returns a system generated value. The reason it is known as so because a pseudocolumn is an Oracle assigned value used in the same context as an Oracle database column but not stored on disk.</p>\n<div class="gatsby-highlight">\n      <pre class="language-some examples of it are:"><code>    ROWNUM, ROWID, USER, CURRVAL, NEXTVAL etc.</code></pre>\n      </div>',fields:{slug:"/sql/sql-interview-questions/"},frontmatter:{title:"SQL Interview Questions"}}},pathContext:{slug:"/sql/sql-interview-questions/"}}}});
//# sourceMappingURL=path---sql-sql-interview-questions-846c4fe5e5c437b0df09.js.map