webpackJsonp([3887079030144],{5848:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Decorators essentially work as wrappers. They modify the behaviour of the code before and after a target function execution, without the need to modify the function itself, augmenting the original functionality, thus decorating it.</p>\n<p>Before going in detail about decorators, there are some concepts that should be clear. In Python, functions are objects and we can do a lot of useful stuff with them.</p>\n<blockquote>\n<h3>Assigning funtions to a variables:</h3>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>def greet(name):\n  return "Hello "+name\ngreet_someone = greet\nprint greet_someone("John")</code></pre>\n      </div>\n<blockquote>\n<p>Output: Hello John</p>\n</blockquote>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CXGk\' target=\'_blank\' rel=\'nofollow\'>Run code</a></p>\n<blockquote>\n<h3>Defining functions inside other functions:</h3>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>def greet(name):\n  def get_message():\n    return "Hello "\n  result = get_message()+name\n  return result\nprint(greet("John"))</code></pre>\n      </div>\n<blockquote>\n<p>Output: Hello John</p>\n</blockquote>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CXGu\' target=\'_blank\' rel=\'nofollow\'>Run code</a></p>\n<blockquote>\n<h3>Functions can also be passed as parameters to other functions:</h3>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>def greet(name):\n  return "Hello " + name\ndef call_func(func):\n  other_name = "John"\n  return func(other_name)  \nprint call_func(greet)</code></pre>\n      </div>\n<blockquote>\n<p>Output: Hello John</p>\n</blockquote>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CXHC\' target=\'_blank\' rel=\'nofollow\'>Run code</a></p>\n<blockquote>\n<h3>Functions can return other functions:</h3>\n<p>In other words, functions generating other functions.</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>def compose_greet_func():\n  def get_message():\n    return "Hello there!"\n  return get_message\ngreet = compose_greet_func()\nprint(greet())</code></pre>\n      </div>\n<p>Output: Hello there!</p>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CXHG\' target=\'_blank\' rel=\'nofollow\'>Run code</a></p>\n<blockquote>\n<h3>Inner functions have access to the enclosing scope</h3>\n<p>More commonly known as a <a href=\'http://www.shutupandship.com/2012/01/python-closures-explained.html\' target=\'_blank\' rel=\'nofollow\'>closure</a>. A very powerful pattern that we will come across while building decorators. Another thing to note, Python only allows <a href=\'http://www.tech-thoughts-blog.com/2013/07/writing-closure-in-python.html\' target=\'_blank\' rel=\'nofollow\'>read access to the outer scope</a> and not assignment. Notice how we modified the example above to read a “name” argument from the enclosing scope of the inner function and return the new function.</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>def compose_greet_func(name):\n  def get_message():\n      return "Hello there "+name+"!"\n  return get_message\ngreet = compose_greet_func("John")\nprint(greet())</code></pre>\n      </div>\n<blockquote>\n<p>Output: Hello there John!</p>\n</blockquote>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CXHI\' target=\'_blank\' rel=\'nofollow\'>Run code</a></p>\n<h2>Composition of Decorators</h2>\n<p>Function decorators are simply wrappers to existing functions. Putting the ideas mentioned above together, we can build a decorator. In this example let’s consider a function that wraps the string output of another function by p tags.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>def get_text(name):\n   return "lorem ipsum, {0} dolor sit amet".format(name)\n\ndef p_decorate(func):\n   def func_wrapper(name):\n       return "<p>{0}</p>".format(func(name))\n   return func_wrapper\n\nmy_get_text = p_decorate(get_text)\nprint (my_get_text("John"))</code></pre>\n      </div>\n<blockquote>\n<p>Output: <code>&#x3C;p></code>lorem ipsum, John dolor sit amet<code>&#x3C;/p></code></p>\n</blockquote>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CXHL\' target=\'_blank\' rel=\'nofollow\'>Run code</a></p>\n<p>That was our first decorator. A function that takes another function as an argument, generates a new function, augmenting the work of the original function, and returning the generated function so we can use it anywhere. To have <code>get_text</code> itself be decorated by <code>p_decorate</code>, we just have to assign get<em>text to the result of p</em>decorate.  </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>get_text = p_decorate(get_text)\nprint (get_text("John"))</code></pre>\n      </div>\n<blockquote>\n<p>Output: lorem ipsum, John dolor sit amet</p>\n</blockquote>\n<p>Another thing to notice is that our decorated function takes a name argument. All what we had to do in the decorator is to let the wrapper of get_text pass that argument.</p>\n<blockquote>\n<h3>Python’s Decorator Syntax</h3>\n</blockquote>\n<p>Python makes creating and using decorators a bit cleaner and nicer for the programmer through some <a href=\'http://en.wikipedia.org/wiki/Syntactic_sugar\' target=\'_blank\' rel=\'nofollow\'>syntactic sugar</a> To decorate get<em>text we don’t have to get</em>text = p<em>decorator(get</em>text) There is a neat shortcut for that, which is to mention the name of the decorating function before the function to be decorated. The name of the decorator should be perpended with an @ symbol.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>def p_decorate(func):\n   def func_wrapper(name):\n       return "<p>{0}</p>".format(func(name))\n   return func_wrapper\n\n@p_decorate\ndef get_text(name):\n   return "lorem ipsum, {0} dolor sit amet".format(name)\n\nprint get_text("John")</code></pre>\n      </div>\n<blockquote>\n<p>Output: <code>&#x3C;p></code>lorem ipsum, John dolor sit amet<code>&#x3C;/p></code></p>\n</blockquote>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CXHN\' target=\'_blank\' rel=\'nofollow\'>Run code</a></p>\n<p>Now let’s consider we wanted to decorate our get_text function by 2 other functions to wrap a div and strong tag around the string output.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>def p_decorate(func):\n   def func_wrapper(name):\n       return "<p>{0}</p>".format(func(name))\n   return func_wrapper\n\ndef strong_decorate(func):\n    def func_wrapper(name):\n        return "<strong>{0}</strong>".format(func(name))\n    return func_wrapper\n\ndef div_decorate(func):\n    def func_wrapper(name):\n        return "<div>{0}</div>".format(func(name))\n    return func_wrapper</code></pre>\n      </div>\n<p>With the basic approach, decorating get_text would be along the lines of</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>get_text = div_decorate(p_decorate(strong_decorate(get_text)))</code></pre>\n      </div>\n<p>With Python’s decorator syntax, same thing can be achieved with much more expressive power.  </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>@div_decorate\n@p_decorate\n@strong_decorate\ndef get_text(name):\n   return "lorem ipsum, {0} dolor sit amet".format(name)\n\nprint (get_text("John"))</code></pre>\n      </div>\n<blockquote>\n<p>Output: <code>&#x3C;div>&#x3C;p>&#x3C;strong></code>lorem ipsum, John dolor sit amet<code>&#x3C;/strong>&#x3C;/p>&#x3C;/div></code></p>\n</blockquote>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CXHQ\' target=\'_blank\' rel=\'nofollow\'>Run code</a></p>\n<p>One important thing to notice here is that the order of setting our decorators matters. If the order was different in the example above, the output would have been different. ## Decorating Methods In Python, methods are functions that expect their first parameter to be a reference to the current object. We can build decorators for methods the same way, while taking self into consideration in the wrapper function.  </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>def p_decorate(func):\n  def func_wrapper(self):\n    return "<p>{0}</p>".format(func(self))\n  return func_wrapper\n\nclass Person(object):\n  def __init__(self):\n    self.name = "John"\n    self.family = "Doe"\n  @p_decorate\n  def get_fullname(self):\n    return self.name+" "+self.family\n\nmy_person = Person()\nprint (my_person.get_fullname())</code></pre>\n      </div>\n<blockquote>\n<p>Output: <code>&#x3C;p></code>John Doe<code>&#x3C;/p></code> </p>\n</blockquote>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CXH2\' target=\'_blank\' rel=\'nofollow\'>Run code</a></p>\n<p>A much better approach would be to make our decorator useful for functions and methods alike. This can be done by putting <a href=\'http://docs.python.org/2/tutorial/controlflow.html#arbitrary-argument-lists\' target=\'_blank\' rel=\'nofollow\'>*args and **kwargs</a> as parameters for the wrapper, then it can accept any arbitrary number of arguments and keyword arguments.  </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>def p_decorate(func):\n   def func_wrapper(*args, **kwargs):\n       return "<p>{0}</p>".format(func(*args, **kwargs))\n   return func_wrapper\n\nclass Person(object):\n    def __init__(self):\n        self.name = "John"\n        self.family = "Doe"\n    @p_decorate\n    def get_fullname(self):\n        return self.name+" "+self.family\n\nmy_person = Person()\nprint (my_person.get_fullname())</code></pre>\n      </div>\n<blockquote>\n<p>Output : <code>&#x3C;p></code>John Doe<code>&#x3C;/p></code></p>\n</blockquote>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CXH5\' target=\'_blank\' rel=\'nofollow\'>Run code</a></p>\n<h3>Passing arguments to decorators Looking back at the example before the one above, you can notice how redundant the decorators in the example are. 3 decorators(div<em>decorate, p</em>decorate, strong_decorate) each with the same functionality but wrapping the string with different tags. We can definitely do much better than that. Why not have a more general implementation for one that takes the tag to wrap with as a string? Yes please!</h3>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>def tags(tag_name):\n    def tags_decorator(func):\n        def func_wrapper(name):\n            return "<{0}>{1}</{0}>".format(tag_name, func(name))\n        return func_wrapper\n    return tags_decorator\n\n@tags("p")\ndef get_text(name):\n    return "Hello "+name\n\nprint (get_text("John"))</code></pre>\n      </div>\n<blockquote>\n<p>Output: <code>&#x3C;p></code>Hello John<code>&#x3C;/p></code></p>\n</blockquote>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CXH6\' target=\'_blank\' rel=\'nofollow\'>Run code</a></p>\n<p>It took a bit more work in this case. Decorators expect to receive a function as an argument, that is why we will have to build a function that takes those extra arguments and generate our decorator on the fly. In the example above tags, is our decorator generator. Debugging decorated functions At the end of the day decorators are just wrapping our functions, in case of debugging that can be problematic since the wrapper function does not carry the name, module and docstring of the original function. Based on the example above if we do:  </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>print (get_text.__name__)</code></pre>\n      </div>\n<blockquote>\n<p>Output: func<em>wrapper The output was expected to be get</em>text yet, the attributes <strong>name</strong>, <strong>doc</strong>, and <strong>module</strong> of get<em>text got overridden by those of the wrapper(func</em>wrapper. Obviously we can re-set them within func_wrapper but Python provides a much nicer way. ### Functools to the rescue  </p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>from functools import wraps\ndef tags(tag_name):\n    def tags_decorator(func):\n        @wraps(func)\n        def func_wrapper(name):\n            return "<{0}>{1}</{0}>".format(tag_name, func(name))\n        return func_wrapper\n    return tags_decorator\n\n@tags("p")\ndef get_text(name):\n    """returns some text"""\n    return "Hello "+name\n\nprint (get_text.__name__) # get_text\nprint (get_text.__doc__) # returns some text\nprint (get_text.__module__) # __main__</code></pre>\n      </div>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CXHb\' target=\'_blank\' rel=\'nofollow\'>Run code</a></p>\n<p>You can notice from the output that the attributes of get_text are the correct ones now.</p>',fields:{slug:"/python/decorators/"},frontmatter:{title:"Python Decorators"}}},pathContext:{slug:"/python/decorators/"}}}});
//# sourceMappingURL=path---python-decorators-3979a3f245581f6f7927.js.map