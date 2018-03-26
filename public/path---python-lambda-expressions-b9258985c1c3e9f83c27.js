webpackJsonp([0x62b9fdfb8612],{5859:function(n,a){n.exports={data:{markdownRemark:{html:'<h2>Lambda Expressions</h2>\n<p>Lambda Expressions in Python are a short way to declare small and anonymous functions (it is not necessary to provide a name for lambda functions). Lambda functions behave just like regular functions declared with the <code>def</code> keyword. They come in handy when you want to define a small function in a concise way.</p>\n<h4>Syntax of Lambda Function</h4>\n<p><code>lambda arguments: expression</code></p>\n<p>Lambda functions can have any number of arguments but only one expression</p>\n<h4>Example code</h4>\n<div class="gatsby-highlight">\n      <pre class="language-py"><code># Lambda function to calculate square of a number\nsquare = lambda x: x ** 2\nprint(square(3)) # Output: 9\n\n# Traditional function to calculate square of a number\ndef square1(num):\n  return num ** 2\nprint(square(5)) # Output: 25</code></pre>\n      </div>\n<p>In the above lambda example <code>lambda x: x ** 2</code> yields an anonymous function object which can be associated with any name.\nSo, we associated the function object with <code>square</code> and hence from now on we can call the <code>square</code> object like any traditional function. e.g. <code>square(10)</code></p>\n<h2>Examples</h2>\n<h3>Beginner</h3>\n<div class="gatsby-highlight">\n      <pre class="language-py"><code>lambda_func = lambda x: x**2 # Function that takes an integer and returns its square\nlambda_func(3) # Returns 9</code></pre>\n      </div>\n<h3>Intermediate</h3>\n<div class="gatsby-highlight">\n      <pre class="language-py"><code>lambda_func = lambda x: True if x**2 >= 10 else False\nlambda_func(3) # Returns False\nlambda_func(4) # Returns True</code></pre>\n      </div>\n<h3>Complex</h3>\n<div class="gatsby-highlight">\n      <pre class="language-py"><code>my_dict = {"A": 1, "B": 2, "C": 3}\nsorted(my_dict, key=lambda x: my_dict[x]%3) # Returns [\'C\', \'A\', \'B\']</code></pre>\n      </div>\n<h4>More Information:</h4>\n<ul>\n<li><a href="https://docs.python.org/3/reference/expressions.html#lambda">Official Doc</a></li>\n<li><a href="https://dbader.org/blog/python-lambda-functions">Further Read</a></li>\n</ul>',fields:{slug:"/python/lambda-expressions/"},frontmatter:{title:"Lambda Expressions"}}},pathContext:{slug:"/python/lambda-expressions/"}}}});
//# sourceMappingURL=path---python-lambda-expressions-b9258985c1c3e9f83c27.js.map