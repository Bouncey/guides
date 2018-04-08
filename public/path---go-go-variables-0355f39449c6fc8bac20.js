webpackJsonp([53314025477154],{4223:function(a,n){a.exports={data:{markdownRemark:{html:'<h1>Variable declarations in Go</h1>\n<h2>Method 1: Regular Variable Declarations</h2>\n<p>A regular variable declaration creates one or more variables by binding identifiers with a type and an initial value. If a variable is declared without a type, then that variable is given the type of the corresponding initialization value in the assignment. If a variable is defined with no initial value, then the variable is initialized to its <a href="https://golang.org/ref/spec#The_zero_value">zero value</a>.</p>\n<p>The following examples are all valid variable declarations in go:</p>\n<div class="gatsby-highlight">\n      <pre class="language-go"><code><span class="token keyword">var</span> x <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span>\n<span class="token keyword">var</span> y <span class="token builtin">int</span>\n<span class="token keyword">var</span> z <span class="token operator">=</span> <span class="token number">0</span>\n<span class="token keyword">var</span> a<span class="token punctuation">,</span> b <span class="token builtin">float32</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span>\n</code></pre>\n      </div>\n<h2>Method 2: Short Variable Declarations</h2>\n<p>Shorthand variable declarations create variables with only an identifier and an initial value. The <code>var</code> keyword and types are not needed to declare a variable using shorthand syntax:</p>\n<div class="gatsby-highlight">\n      <pre class="language-go"><code>x <span class="token operator">:=</span> <span class="token number">1</span>\ntext<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>reader<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Short variable declarations may appear only inside functions. In some contexts such as the initializers for <code>if</code>, <code>for</code>, or <code>switch</code> statements, they can be used to declare local temporary variables.</p>\n<h4>More Information:</h4>\n<!-- Please add any articles you think might be helpful to read before writing the article -->\n<ul>\n<li><a href="https://tour.golang.org/basics/8">A Tour of Go</a></li>\n<li><a href="https://gobyexample.com/variables">Go By Example</a></li>\n<li><a href="https://www.golang-book.com/books/intro/4">Golang Book</a></li>\n<li><a href="https://golang.org/ref/spec#Variable_declarations">The Go Programming Language Specification</a></li>\n</ul>',fields:{slug:"/go/go-variables/"},frontmatter:{title:"Go Variables"}}},pathContext:{slug:"/go/go-variables/"}}}});
//# sourceMappingURL=path---go-go-variables-0355f39449c6fc8bac20.js.map