webpackJsonp([0xb9f536e88a6d],{5620:function(n,a){n.exports={data:{markdownRemark:{html:'<p>It is the act of taking a function with more than one argument and converting it into an equivalent function that takes a single argument. This is based on returning partially applied functions.</p>\n<p><strong>Original</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function add (verb, a, b) {\n   return "The " + verb + " of " + a + \' and \' + b + \' is \' + (a + b)\n }\n\n add(\'sum\', 5, \'6\')\n   //=> \'The sum of 5 and 6 is 11\'</code></pre>\n      </div>\n<p><strong>Curried Version</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function addCurried (verb) {\n    return function (a) {\n      return function (b) {\n        return "The " + verb + " of " + a + \' and \' + b + \' is \' + (a + b)\n      }\n    }\n  }\n\n  addCurried(\'total\')(6)(5)\n   //=> \'The total of 6 and 5 is 11\'</code></pre>\n      </div>\n<p>Currying by hand would be an incredible effort, but its close relationship with partial application means that if you have left partial application, you can derive currying. Or if you have currying, you can derive left partial application.</p>\n<p>Here’s a function that curries any function with two arguments:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>  function curryTwo (fn) {\n    return function (x) {\n      return callFirst(fn, x)\n    }\n  }\n\n  function add2 (a, b) { return a + b }\n\n  curryTwo(add2)(5)(6)\n   //=> 11</code></pre>\n      </div>',fields:{slug:"/miscellaneous/learn-about-currying/"},frontmatter:{title:"Learn About Currying"}}},pathContext:{slug:"/miscellaneous/learn-about-currying/"}}}});
//# sourceMappingURL=path---miscellaneous-learn-about-currying-bc00d570b8783e87e75c.js.map