webpackJsonp([29757216838776],{4426:function(n,e){n.exports={data:{markdownRemark:{html:'<p>The <code>for...of</code> statement creates a loop iterating over iterable objects (including Array, Map, Set, Arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>for (variable of object) {\n    statement\n}</code></pre>\n      </div>\n<table>\n<thead>\n<tr>\n<th></th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>variable</td>\n<td>On each iteration a value of a different property is assigned to variable.</td>\n</tr>\n<tr>\n<td>object</td>\n<td>Object whose enumerable properties are iterated.</td>\n</tr>\n</tbody>\n</table>\n<p><a href=\'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of\' target=\'_blank\' rel=\'nofollow\'>MDN link</a> | <a href=\'https://msdn.microsoft.com/library/dn858238%28v=vs.94%29.aspx?f=255&MSPPError=-2147217396\' target=\'_blank\' rel=\'nofollow\'>MSDN link</a> | <a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/@@iterator\' target=\'_blank\' rel=\'nofollow\'>arguments @@iterator</a></p>\n<h2>Examples</h2>\n<h3>Array</h3>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>let arr = [ "fred", "tom", "bob" ];\n\nfor (let i of arr) {\n    console.log(i);\n}\n\n// Output:\n// fred\n// tom\n// bob</code></pre>\n      </div>\n<h3>Map</h3>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>var m = new Map();\nm.set(1, "black");\nm.set(2, "red");\n\nfor (var n of m) {\n    console.log(n);\n}\n\n// Output:\n// 1,black\n// 2,red</code></pre>\n      </div>\n<h3>Set</h3>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>var s = new Set();\ns.add(1);\ns.add("red");\n\nfor (var n of s) {\n    console.log(n);\n}\n\n// Output:\n// 1\n// red</code></pre>\n      </div>\n<h3>Arguments object</h3>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>// your browser must support for..of loop\n// and let-scoped variables in for loops\n\nfunction DisplayArgumentsObject()\n{\n    for (let n of arguments) {\n        console.log(n);\n    }\n}\n\nDisplayArgumentsObject(1, "red");\n\n// Output:\n// 1\n// red</code></pre>\n      </div>',fields:{slug:"/javascript/loops/for-of-loop/"},frontmatter:{title:"For...Of Loop"}}},pathContext:{slug:"/javascript/loops/for-of-loop/"}}}});
//# sourceMappingURL=path---javascript-loops-for-of-loop-789a41e98bb2859db7b2.js.map