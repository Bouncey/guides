webpackJsonp([49785112070359],{3545:function(n,e){n.exports={data:{markdownRemark:{html:'<h1>If</h1>\n<p>The if statement executes different blocks of code based on conditions.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>if (condition) {\n\t// Do something when `condition` is true\n}\nelse {\n\t// Do something when `condition` is false\n}</code></pre>\n      </div>\n<p>When <code>condition</code> is true, code inside the <code>if</code> section executes, otherwise <code>else</code> executes. Sometimes you would need to add a second condition. For readability, you should use a <code>else if</code> rather than nesting <code>if</code> statements.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>if (condition) {\n\t// Do something if `condition` is true\n}\nelse if (anotherCondition) {\n\t// Do something if `anotherCondition` is ture\n}\nelse {\n\t// Do something if `condition` AND `anotherCondition` is false\n}</code></pre>\n      </div>\n<p>Note that the <code>else</code> and <code>else if</code> sections are not required, while <code>if</code> is mandatory.</p>\n<h2>Example</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>#include <stdio.h>\n\nint main () {\n\n   // Local variable definition\n   int a = 10;\n\n   // Check the boolean condition\n   if(a < 5) {\n      // If condition is true then print the following\n      printf("a is less than 5!\\n" );\n   }\n   else {\n      // If condition is false then print the following\n      printf("a is not less than 5!\\n" );\n   }\n\n   printf("Value of a is : %d\\n", a);\n\n   return 0;\n}</code></pre>\n      </div>\n<h2>Outuput</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>-> a is not less than 20!\n-> Value of a is : 100</code></pre>\n      </div>',fields:{slug:"/c/if/"},frontmatter:{title:"If"}}},pathContext:{slug:"/c/if/"}}}});
//# sourceMappingURL=path---c-if-92410e1b3b29ab0920f5.js.map