webpackJsonp([0xb309d3f62a7c],{3826:function(e,o){e.exports={data:{markdownRemark:{html:'<p>Lists are fundamental to Clojure. Clojure is a Lisp, and Lisps were originally used for list processing. Everything in a Lisp is a list!</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>(def foo "bar")</code></pre>\n      </div>\n<p>That piece of code is actually a list! So is anything between two round brackets in Clojure. Interesting, isn’t it? This is what makes Lisps so interesting - you can easily write code that generates new code, because generating code is as simple as making a list.</p>\n<h2>Making an actual list</h2>\n<p>The problem is, since everything is a list in Clojure, something like this will return an error:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>(1 2 3 4 5)\n; => ClassCastException java.lang.Long cannot be cast to clojure.lang.IFn</code></pre>\n      </div>\n<p>What a horrid error message. What the REPL is trying to tell us is, “1 is not a function, and it can’t be made into one.” Because everything in a Lisp is a list, the first item of any list is treated as a function, like <code>def</code>, <code>+</code> or <code>str</code>, so if we write <code>(1 2 3 4 5)</code>, it treats the first element (<code>1</code>) as a function, which it clearly isn’t.</p>\n<p>We can solve this in two ways. One is using the <code>list</code> function to construct a list, like using <code>str</code> to concatenate strings together.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>(list 1 2 3 4 5)\n; => (1 2 3 4 5)</code></pre>\n      </div>\n<p>You can also use quoting. Quoting a list essentially says to the compiler that that list is <em>not</em> a function call, and it shouldn’t evaluate any of the code inside it.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>\'(1 2 3 4 5)\n; => (1 2 3 4 5)</code></pre>\n      </div>\n<p>Interestingly, you can also quote function calls. This is how macros work. They’re pretty complex, and deserve their own article, so we won’t elaborate here.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>;; Without a \' to quote it, this would return "foobarbaz".\n\'(str "foo" "bar" "baz")\n; => (str "foo" "bar" "baz")</code></pre>\n      </div>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://ideone.com/6c7UxY\' target=\'_blank\' rel=\'nofollow\'>IDEOne it!</a></p>\n<h2>Adding to a list</h2>\n<p>Lists are designed for prepending, rather than appending. There is no real way to append to a list. You can prepend to a list using <code>cons</code>. <code>conj</code> also works, but that’s meant for vectors, and <code>cons</code> is faster for lists.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>(cons 1 \'(2 3 4))\n; => (1 2 3 4)</code></pre>\n      </div>\n<h2>Retrieving from lists</h2>\n<p>You retrieve items from lists using <code>nth</code>. <code>get</code> does not work on lists, because lists are designed for sequential access, rather than random access. Note that <code>nth</code> works on vectors, but is slower than <code>get</code> because of this.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>(nth \'(1 2 3 4) 0)\n; => 1</code></pre>\n      </div>\n<h2>Converting other collections into lists</h2>\n<p>The <code>list</code> function can’t convert other collections into lists, because it tries to construct a list using the arguments it’s given. Passing <code>list</code> a collection will return a list containing that collection.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>(list [1 2 3 4 5])\n; => ([1 2 3 4 5])</code></pre>\n      </div>\n<p>To convert to a list, use the <code>seq</code> function instead.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>(seq [1 2 3 4 5])\n; => (1 2 3 4 5)</code></pre>\n      </div>\n<h2>Lazy sequences</h2>\n<p>Clojure has a brilliant feature called ‘lazy sequences’. A lazy sequence is a list whose elements aren’t generated until you refer to an element of the sequence later, at which point, it evaluates all the elements of the sequence up until the one you want. This allows you to construct “infinite” sequences!</p>\n<p><code>range</code> is perhaps the most simple lazy sequence. It contains all numbers.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>(range 10)\n; => (0 1 2 3 4 5 6 7 8 9)\n(range -5 5)\n; => (-5 -4 -3 -2 -1 0 1 2 3 4)</code></pre>\n      </div>\n<p>You can use lazy sequences to do really cool things, like generating a lazy sequence of all fibonacci numbers.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>(def fibs\n     (lazy-cat [0 1] (map + (rest fibs) fibs)))\n\n(take 10 fibs) ;; this means, "evaluate the first 10 fibonacci numbers."\n; => (0 1 1 2 3 5 8 13 21 34)</code></pre>\n      </div>\n<p>This example is a bit advanced, and you shouldn’t be expected to understand it if you’re a beginner. It’s just an example of something cool you can do with lazy sequences. Perhaps you can figure it out anyway!</p>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://ideone.com/jwpvt8\' target=\'_blank\' rel=\'nofollow\'>IDEOne it!</a></p>\n<h2>When to use a list?</h2>\n<p>Using a vector is usually preferable to using a list, since there’s no risk of the compiler accidentally evaluating a vector as a function, and it’s faster to access arbitrary elements of a vector. Lists are most useful in 3 cases:</p>\n<ul>\n<li>Generating code using a macro.</li>\n<li>Generating “infinite” lazy sequences.</li>\n<li>Prepending elements to a collection.</li>\n</ul>\n<p>| <a href="//forum.freecodecamp.com/t/clojure-collections/18411"><img src="//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2" title=":point_left:" alt=":point_left:" class="forum-image"> Previous</a> | <a href="//forum.freecodecamp.com/t/clojure-resources/18422"><img src="//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2" title=":book:" alt=":book:" class="forum-image"> Home <img src="//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2" title=":book:" alt=":book:" class="forum-image"></a> | <a href="//forum.freecodecamp.com/t/clojure-vectors/18421">Next <img src="//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2" title=":point_right:" alt=":point_right:" class="forum-image"></a>|<br>\n| <a href="//forum.freecodecamp.com/t/clojure-collections/18411">Collections</a> | <a href="//forum.freecodecamp.com/t/clojure-resources/18422">Table of Contents</a> | <a href="//forum.freecodecamp.com/t/clojure-vectors/18421">Vectors</a>|</p>',fields:{slug:"/clojure/lists-are-everything/"},frontmatter:{title:"Clojure Lists They Are Everything"}}},pathContext:{slug:"/clojure/lists-are-everything/"}}}});
//# sourceMappingURL=path---clojure-lists-are-everything-c8cc94d5bdf04dbc6945.js.map