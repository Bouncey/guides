webpackJsonp([0xa54bb24784ce],{5869:function(e,t){e.exports={data:{markdownRemark:{html:"<p><strong>TODO: <code>list</code> basic info</strong></p>\n<p><a href='https://docs.python.org/3/library/stdtypes.html#lists' target='_blank' rel='nofollow'>Python Docs - Lists</a></p>\n<p><strong>Creation:</strong></p>\n<p>An empty <code>list</code> is created using a pair of square brackets, <code>&#x3C;a href='https://docs.python.org/3/tutorial/datastructures.html#more-on-lists' target='_blank' rel='nofollow'>]</code>:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>>>> empty_list = []\n>>> type(empty_list)\n<class 'list'>\n>>> len(empty_list)\n0</code></pre>\n      </div>\n<p>A <code>list</code> can be created with elements by enclosing a comma separated list of elements with square brackets. Lists allow for the elements to be of different types (heterogeneous) but are most commonly of a single type (homogeneous):</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>>>> homogeneous_list = [1, 1, 2, 3, 5, 8]\n>>> type(homogeneous_list)\n<class 'list'>\n>>> print(homogeneous_list)\n[1, 1, 2, 3, 5, 8]\n>>> len(homogeneous_list)\n6\n>>> heterogeneous_list = [1, \"Hello Campers!\"]\n>>> print(heterogeneous_list)\n[1, \"Hello Campers!\"]\n>>> len(heterogeneous_list)\n2</code></pre>\n      </div>\n<p>The <code>list</code> constructor can also be used to create a <code>list</code>:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>>>> empty_list = list()                            # Creates an empty list\n>>> print(empty_list)\n[]\n>>> list_from_iterable = list(\"Hello campers!\")    # Creates a list from an\niterable.\n>>> print(list_from_iterable)\n['H', 'e', 'l', 'l', 'o', ' ', 'c', 'a', 'm', 'p', 'e', 'r', 's', '!']</code></pre>\n      </div>\n<p><strong>Accessing elements of a <code>list</code>:</strong></p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>>>> my_list = [1, 2, 9, 16, 25]\n>>> print(my_list)\n[1, 2, 9, 16, 25]</code></pre>\n      </div>\n<p><em>Zero indexed</em></p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>>>> my_list[0]\n1\n>>> my_list[1]\n2\n>>> my_list[2]\n9</code></pre>\n      </div>\n<p><em>Wrap around indexing</em></p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>>>> my_list[-1]\n25\n>>> my_list[-2]\n16</code></pre>\n      </div>\n<p><strong>Mutable:</strong></p>\n<p><code>lists</code> are mutable containers. Mutable containers are containers that allow changes to which objects are contained by the container. <strong>TODO: ADD MORE?</strong></p>\n<p><em>Re-arranging elements in a list</em></p>\n<p>Elements from a <code>list</code> may be extracted and re-arranged using another <code>list</code> as index.\n<br>\n>>> my<em>list = [1, 2, 9, 16, 25, 34, 53, 21]\n>>> my</em>index = [5, 2, 0]\n>>> my<em>new</em>list = [my<em>list[i] for i in my</em>index]\n>>> print(my<em>new</em>list)\n[34, 9, 1]\n</p>\n<p><strong>TODO: Which of these should be discussed here:</strong></p>\n<p>[Python Docs - More on Lists</a></p>\n<ul>\n<li>\n<p><code>list.append(x)</code> Add an item to the end of the list. Equivalent to a[len(a):] = [x].</p>\n</li>\n<li>\n<p><code>list.extend(L)</code> Extend the list by appending all the items in the given list. Equivalent to a[len(a):] = L.</p>\n</li>\n<li>\n<p><code>list.insert(i, x)</code> Insert an item at a given position. The first argument is the index of the element before which to insert, so a.insert(0, x) inserts at the front of the list, and a.insert(len(a), x) is equivalent to a.append(x).</p>\n</li>\n<li>\n<p><code>list.remove(x)</code> Remove the first item from the list whose value is x. It is an error if there is no such item.</p>\n</li>\n<li>\n<p><code>list.pop([i])</code> Remove the item at the given position in the list, and return it. If no index is specified, a.pop() removes and returns the last item in the list. (The square brackets around the i in the method signature denote that the parameter is optional, not that you should type square brackets at that position. You will see this notation frequently in the Python Library Reference.)</p>\n</li>\n<li>\n<p><code>list.clear()</code> Remove all items from the list. Equivalent to del a[:].</p>\n</li>\n<li>\n<p><code>list.index(x)</code> Return the index in the list of the first item whose value is x. It is an error if there is no such item.</p>\n</li>\n<li>\n<p><code>list.count(x)</code> Return the number of times x appears in the list.</p>\n</li>\n<li>\n<p><code>list.sort(key=None, reverse=False)</code> Sort the items of the list in place (the arguments can be used for sort customization, see sorted() for their explanation).</p>\n</li>\n<li>\n<p><code>list.reverse()</code> Reverse the elements of the list in place.</p>\n</li>\n<li>\n<p><code>list.copy()</code> Return a shallow copy of the list. Equivalent to a[:].</p>\n</li>\n</ul>",fields:{slug:"/python/learn-about-python-lists/"},frontmatter:{title:"Learn About Python Lists"}}},pathContext:{slug:"/python/learn-about-python-lists/"}}}});
//# sourceMappingURL=path---python-learn-about-python-lists-5f485bc2c41042dae95f.js.map