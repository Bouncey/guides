webpackJsonp([0x95242ee579e0],{5987:function(e,t){e.exports={data:{markdownRemark:{html:'<h2>SQL Guide - ALTER TABLE</h2>\n<h2>Introduction</h2>\n<p>This guide will introduce you to and attempt to explain some of the basics of the SQL alter table functions within a relational database.\nIMPORTANT Safety Tip!!!   ALWAYS backup your data before making changes!!!!</p>\n<p>We will be using MySQL for all examples throughout this freeCodeCamp SQL guide. The reasons for selecting MySQL are 1) it is very commonly used on websites for the backend database, 2) it’s free, and is fun and easy to use.</p>\n<h2>Covered in this Guide</h2>\n<p>We will use the tables created in the “CREATE TABLE” guide.  Feel free to review that guide if you are not familiar with creating a table.</p>\n<ul>\n<li>Alter the created table will alter it in several different ways. </li>\n<li>We’ll change its name and modify columns</li>\n<li>add columns ( While adding columns we will also review several of the most important column types and their use.)</li>\n<li>drop columns (meaning remove the column column) </li>\n<li>Creating a table by importing a CSV file and altering that table</li>\n<li>Creating and modifying tables with MySQL workbench tools</li>\n</ul>\n<p>Most of this will be done using SQL statements in the MySQL workbench scripting tool but we will also review how to alter a table using the workbench interface instead of with SQL statements.</p>\n<h2>The table before alterations;</h2>\n<p><img src="https://github.com/SteveChevalier/guide-images/blob/master/alter_table01a.JPG?raw=true" alt="image-1"></p>\n<p>Add date and email address columns (a date and a character column)\n<img src="https://github.com/SteveChevalier/guide-images/blob/master/alter_table01.JPG?raw=true" alt="image-1"></p>\n<p>Add a numeric column (note that it was added in a specific location in the table)\n<img src="https://github.com/SteveChevalier/guide-images/blob/master/alter_table02.JPG?raw=true" alt="image-1"></p>\n<p>Rename some columns\n<img src="https://github.com/SteveChevalier/guide-images/blob/master/alter_table03.JPG?raw=true" alt="image-1"></p>\n<p>Remove a column\n<img src="https://github.com/SteveChevalier/guide-images/blob/master/alter_table04.JPG?raw=true" alt="image-1"></p>\n<p>You can also use the alter table workbench tool.  Just RIGHT click on the table you want to change and change as you wish.\n<img src="https://github.com/SteveChevalier/guide-images/blob/master/alter_table05.JPG?raw=true" alt="image-1"></p>\n<p>There is much more that can be done, check the manual of your database management software to learn more.</p>',fields:{slug:"/sql/sql-alter-table-statement/"},frontmatter:{title:"SQL Alter Table Statement"}}},pathContext:{slug:"/sql/sql-alter-table-statement/"}}}});
//# sourceMappingURL=path---sql-sql-alter-table-statement-2736d042258599126ad1.js.map