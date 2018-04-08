webpackJsonp([0x842a5a003328],{4401:function(e,a){e.exports={data:{markdownRemark:{html:'<h2>Default Parameters</h2>\n<p>If you are familiar with other programming languages like Ruby, Python then default parameters isn’t new to you.</p>\n<p>Default parameters are parameters which are given by default while declaring a function. But it’s value can be changed when calling the function.</p>\n<p>Example</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>let Func = (a, b = 10) => {\n return a + b; \n}\nFunc(20); // 20 + 10 = 30</code></pre>\n      </div>\n<p>In the above example, we are passing only one parameter. The function makes use of the default parameter and executes the function.</p>\n<p>Consider another example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Func(20, 50); // 20 + 50 = 70</code></pre>\n      </div>\n<p>In the above example, the function takes two parameters and the second parameter replaces the default parameter.</p>\n<p>Consider another example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>let NotWorkingFunction = (a = 10, b) => {\n return a + b;\n}\nNotWorkingFunction(20); // NAN. Not gonna work.</code></pre>\n      </div>\n<p>When you are calling the function with parameters they get assigned in the order. (i.e) the first value gets assigned to the first parameter and the second value gets assign to the second parameter and so on..</p>\n<p>In the above example, the value 20 gets assigned to parameter ‘a’ and ‘b’ is not having any value. So we are not getting any output.</p>\n<p>But,</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>NotWorkingFunction(20, 30); // 50;</code></pre>\n      </div>\n<p>Works fine.</p>',fields:{slug:"/javascript/es6/default_parameters/"},frontmatter:{title:"Default Parameters"}}},pathContext:{slug:"/javascript/es6/default_parameters/"}}}});
//# sourceMappingURL=path---javascript-es-6-default-parameters-d89da7f2aa540c93759f.js.map