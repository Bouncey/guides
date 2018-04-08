webpackJsonp([0xe264db5858b8],{6006:function(t,n){t.exports={data:{markdownRemark:{html:"<h1>SQL Data Types</h1>\n<p>Each column in a table must have a data type. It indicates the type of value that the column stores.</p>\n<p>Each database can accept differents data types, but in general, the list of data types is:</p>\n<h3>Strings Types</h3>\n<table>\n<thead>\n<tr>\n<th>Data type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>CHAR(n)</code></td>\n<td>Character string. Fixed-length n. Minimal length is 1. If you assign a value to a CHAR column containing fewer characters than the defined length, the remaining space is filled with blanks characters.</td>\n</tr>\n<tr>\n<td><code>VARCHAR(n)</code></td>\n<td>Character string. Variable length. Maximum length n. Minimal length is 1</td>\n</tr>\n<tr>\n<td><code>BINARY(n)</code></td>\n<td>Binary string. Fixed-length n</td>\n</tr>\n<tr>\n<td><code>VARBINARY(n)</code>\n or \n<code>BINARY VARYING(n)</code></td>\n<td>Binary string. Variable length. Maximum length n</td>\n</tr>\n</tbody>\n</table>\n<h3>Numerics Types</h3>\n<table>\n<thead>\n<tr>\n<th>Data type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>INTEGER</code></td>\n<td>Integer numerical. From  -2,147,483,648 to 2,147,483,647.</td>\n</tr>\n<tr>\n<td><code>SMALLINT</code></td>\n<td>Integer numerical.  From -32,768 to 32,767</td>\n</tr>\n<tr>\n<td><code>BIGINT</code></td>\n<td>Integer numerical. From -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807</td>\n</tr>\n<tr>\n<td><code>DECIMAL(p,s)</code>\n or \n<code>NUMERIC(p,s)</code></td>\n<td>Exact numerical, precision p, scale s. Precision is the maximum total number of decimal digits that will be stored, both to the left and to the right of the decimal point. Scale is the number of decimal digits that will be stored to the right of the decimal point. This number is subtracted from p to determine the maximum number of digits to the left of the decimal point. Example: decimal(5,2) is a number that has 3 digits before the decimal and 2 digits after the decimal.</td>\n</tr>\n<tr>\n<td><code>FLOAT(p)</code></td>\n<td>Approximate numerical, mantissa precision p. A floating number in base 10 exponential notation. The size argument for this type consists of a single number specifying the minimum precision</td>\n</tr>\n<tr>\n<td><code>REAL</code></td>\n<td>Approximate numerical, mantissa precision 7</td>\n</tr>\n<tr>\n<td><code>FLOAT</code></td>\n<td>Approximate numerical, mantissa precision 16</td>\n</tr>\n<tr>\n<td><code>DOUBLE PRECISION</code></td>\n<td>Approximate numerical, mantissa precision 16</td>\n</tr>\n</tbody>\n</table>\n<h3>Date and Time Types</h3>\n<table>\n<thead>\n<tr>\n<th>Data type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>DATE</code></td>\n<td>Stores year, month, and day values</td>\n</tr>\n<tr>\n<td><code>TIME</code></td>\n<td>Stores hour, minute, and second values</td>\n</tr>\n<tr>\n<td><code>DATETIME</code></td>\n<td>Stores year, month, day, hour, minute, and second values</td>\n</tr>\n<tr>\n<td><code>TIMESTAMP</code></td>\n<td>Stores the number of seconds since the Unix epoch</td>\n</tr>\n</tbody>\n</table>\n<h3>Other Data Types</h3>\n<table>\n<thead>\n<tr>\n<th>Data type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>BOOLEAN</code></td>\n<td>Stores \n<code>TRUE</code>\n or \n<code>FALSE</code>\n values</td>\n</tr>\n<tr>\n<td><code>ARRAY</code></td>\n<td>A set-length and ordered collection of elements</td>\n</tr>\n<tr>\n<td><code>MULTISET</code></td>\n<td>A variable-length and unordered collection of elements</td>\n</tr>\n<tr>\n<td><code>XML</code></td>\n<td>Stores XML data</td>\n</tr>\n</tbody>\n</table>",fields:{slug:"/sql/sql-data-types/"},frontmatter:{title:"SQL Data Types"}}},pathContext:{slug:"/sql/sql-data-types/"}}}});
//# sourceMappingURL=path---sql-sql-data-types-9601814ec0e7968380db.js.map