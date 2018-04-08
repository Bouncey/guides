webpackJsonp([0x9f3fa457f860],{5637:function(a,e){a.exports={data:{markdownRemark:{html:'<p>Variables are containers for storing data such as <code>strings</code>, <code>integers</code>, <code>boolean</code> values, <code>array</code> and objects.</p>\n<p>PHP follows certain rules for variable declarations such as:</p>\n<ul>\n<li>The variable must begin with a dollar sign ($)</li>\n</ul>\n<p>Example:</p>\n<p>`php  </p>\n<?php  \n$var = 5;  \n?>` \n<ul>\n<li>The variable name can contain characters such as A-Z, a-z, 0-9, _ and <a href=\'http://www.asciitable.com/ "ASCII Table"\' target=\'_blank\' rel=\'nofollow\'>ASCII</a> characters from 127-255.</li>\n</ul>\n<p>Example:</p>\n<p>`php  </p>\n<?php  \n$var = 5; //Valid  \n$var_1 = "Foo"; //Valid  \n$_var2 = \'Bar\'; //Valid  \n$var.3 = \'Baz\'; //Invalid  \n?>` \n<ul>\n<li>The variable name can begin with underscore (_).</li>\n</ul>\n<p>Example:</p>\n<p>`php  </p>\n<?php  \n$_var2 = \'Bar\'; //Valid  \n?>` \n<ul>\n<li>The variable name must not begin with a number 0-9.</li>\n</ul>\n<p>Example:</p>\n<p>`php  </p>\n<?php  \n$9var3 = \'Baz\'; //Invalid  \n?>` \n<ul>\n<li>The variable name is case sensitive.</li>\n</ul>\n<p>Example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><?php\n    $var = 5; //Valid\n    $VAR = "Foo"; //Valid\n    echo $var; //Output 5\n    echo "<br>";\n    echo $VAR; //Output Foo\n?></code></pre>\n      </div>\n<p>PHP is a loosely typed language, hence we don’t need to declare the data type of a variable when declaring the variable. Unlike Java or C.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><?php\n    $var = 5; \n    $var2 = 4; \n    $sum = $var+$var2;\n    echo $sum; //Output 9\n    echo "<br>";\n    echo $var+$var2; //Output 9\n?></code></pre>\n      </div>\n<p>The variables can also be assigned by referencing. This allows two variables to refer to the same content. The <code>&#x26;</code> operator is placed before the variable that is to be referenced.</p>\n<p>Example :</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><?php\n    $var1 = "foo";\n    $var2 = "bar";\n\nmyTest($var1, $var2);\n\necho $var1; //Output foo\necho $var2; //Output BAR\n\nfunction myTest($var1, &$var2){\n    $var1 = "FOO";\n    $var2 = "BAR";\n}\n?></code></pre>\n      </div>\n<p>To have variable names set dynamically we use the variable variables. This can be particularly useful when there is a need to create multiple variables.</p>\n<p>Example :</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><?php\n\n    $var = \'Tom\'; \n    echo $var;      //Output Tom\n    $$var = \'Cat\'; //The value of $$var is the value of $var. So $$var and $Tom give the same output.\n    echo $$var;   //Output Cat\n    echo $Tom;   //Output Cat\n?></code></pre>\n      </div>\n<h1>Variable Scope</h1>\n<p>Scope of variable refers to the places from where a variable is accessible.</p>\n<ul>\n<li>Global scope is for the variables that are declared outside a function. These variables can be accessed from anywhere but not within a function.</li>\n<li>Local scope is for the variables declared within a function that can not be accessed from anywhere outside the function.</li>\n</ul>\n<p>Example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><?php\n   $global = "Hello";\n\n  function Test(){\n   $local = "World";\n   echo $global; //Error\n   echo $local; //Output World\n  }\n\n   Test();\n   echo $global; //Output Hello\n   echo $local; //Error\n?></code></pre>\n      </div>\n<p>To access global variables inside a function:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><?php\n   $global = "Hello";\n\n function Test(){\n   global $global;\n   $local = "World";\n   echo $global; //Output Hello\n   echo $local; //Output World\n  }\n\n   Test();\n   echo $global; //Output Hello\n   echo $local; //Error\n?></code></pre>\n      </div>\n<h1>Static Variables</h1>\n<p>Everytime a function is created all of its local variables are deleted. To retain the variable’s last value we declare it <code>static</code>.</p>\n<p>Example :</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><?php\n\n function WithStatic(){\n   static $var = 0;\n   echo $var;\n   $var++;\n  }\n\n   WithStatic(); //Output 0\n   WithStatic(); //Output 1\n   WithStatic(); //Output 2\n\n function WithoutStatic(){\n   $var = 0;\n   echo $var;\n   $var++;\n  }\n\n   WithoutStatic(); //Output 0\n   WithoutStatic(); //Output 0\n   WithoutStatic(); //Output 0\n?></code></pre>\n      </div>',fields:{slug:"/miscellaneous/learn-about-php-variables/"},frontmatter:{title:"Learn About Php Variables"}}},pathContext:{slug:"/miscellaneous/learn-about-php-variables/"}}}});
//# sourceMappingURL=path---miscellaneous-learn-about-php-variables-c817f3711e2de4774291.js.map