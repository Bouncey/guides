webpackJsonp([0xd8298d88fdd6],{5736:function(e,n){e.exports={data:{markdownRemark:{html:'<h1>Basic Syntax</h1>\n<p>A PHP script can be placed anywhere in the document.</p>\n<p>A PHP script starts with <code>&#x3C;?php</code> and ends with <code>?></code></p>\n<p>Below, we have an example of a simple PHP file, with a PHP script that uses a built-in PHP function “echo” to output the text “Hello World!” on a web page</p>\n<div class="gatsby-highlight">\n      <pre class="language-<!doctype html>"><code><html>\n<body>\n\n<h1>My first PHP page</h1>\n\n<?php echo "Hello World!"; ?>\n\n</body>\n</html> </code></pre>\n      </div>\n<p>The output of that would be :</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>My first PHP page\n\nHello World!</code></pre>\n      </div>\n<h4>Note: PHP statements end with a semicolon (;).</h4>\n<h1>Comments in PHP</h1>\n<p>PHP supports several ways of commenting:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><!DOCTYPE html>\n<html>\n<body>\n\n<?php\n// This is a single-line comment\n\n# This is also a single-line comment\n\n/*\nThis is a multiple-lines comment block\nthat spans over multiple\nlines\n*/\n\n// You can also use comments to leave out parts of a code line\n$x = 5 /* + 15 */ + 5;\necho $x;\n?>\n\n</body>\n</html></code></pre>\n      </div>\n<h1>PHP Case Sensitivity</h1>\n<p>In PHP, all keywords (e.g. if, else, while, echo, etc.), classes, functions, and user-defined functions are NOT case-sensitive.</p>\n<p>In the example below, all three echo statements below are legal (and equal):</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><!DOCTYPE html>\n<html>\n<body>\n\n<?php\nECHO "Hello World!<br>";\necho "Hello World!<br>";\nEcHo "Hello World!<br>";\n?>\n\n</body>\n</html></code></pre>\n      </div>\n<h3>However; all variable names are case-sensitive.</h3>\n<p>In the example below, only the first statement will display the value of the $color variable (this is because $color, $COLOR, and $coLOR are treated as three different variables):</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><!DOCTYPE html>\n<html>\n<body>\n\n<?php\n$color = "red";\necho "My car is " . $color . "<br>";\necho "My house is " . $COLOR . "<br>";\necho "My boat is " . $coLOR . "<br>";\n?>\n\n</body>\n</html></code></pre>\n      </div>',fields:{slug:"/php/basic-syntax/"},frontmatter:{title:"Basic Syntax"}}},pathContext:{slug:"/php/basic-syntax/"}}}});
//# sourceMappingURL=path---php-basic-syntax-85b1d01d8c975f10d7bb.js.map