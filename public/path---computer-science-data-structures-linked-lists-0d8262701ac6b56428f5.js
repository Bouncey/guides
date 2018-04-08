webpackJsonp([0xa468e4247866],{3862:function(e,n){e.exports={data:{markdownRemark:{html:'<h2>Linked Lists</h2>\n<h4>A Linked List is a simple <em>linear-access</em> data structure.</h4>\n<p>A linked list is a simple data structure, but it can be used to implement more complicated Data Structures like Queues, Stacks, etc. There are three types of Linked Lists:</p>\n<ol>\n<li>Simple Linked List</li>\n<li>Doubly Linked List (or Double Ended Linked List)</li>\n<li>Circular Linked Lists (Ring Buffer)</li>\n</ol>\n<p>Linked List |  (Introduction)\nLike arrays, Linked List is a linear data structure. Unlike arrays, linked list elements are not stored at contiguous location; the elements are linked using pointers or like in the example using Javascript, a reference to the next node.</p>\n<p>If you want to understand Linked Lists, it helps to understand <strong>Arrays</strong>.</p>\n<p>To recap, an array is traditionally a <strong>static</strong> <strong>linear</strong> data structure that supports constant time random access. Insertions and Deletions are not always constant time.</p>\n<p>Advantages over arrays</p>\n<ol>\n<li>Dynamic size</li>\n<li>Ease of insertion/deletion</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>static = size fixed at creation time\nlinear = stored linearly in memory as a single block</code></pre>\n      </div>\n<h4>Arrays have the following disadvantages:-</h4>\n<ol>\n<li>Arrays are static structures and therefore cannot be easily extended or reduced to fit the data set. </li>\n<li>Arrays are also expensive to maintain new insertions and deletions.</li>\n</ol>\n<p>Linked Lists address some of the limitations of arrays. Unlike an array, where all the elements are stored in a contiguous block of memory, in a linked list each element is a separate object and has a <strong>link</strong> to the next element in sequence. This allows a linked list to start with space for only one element, and grow to accomodate an arbitrary number of elements by allocating memory as and when needed. </p>\n<p>Deleting elements is also simply handled by manipulating links.</p>\n<p>Once you understand the Simple Linked List (which from here on will be referred as <strong>‘List’</strong>), you can move on to the Doubly Linked List.</p>\n<p>A List as illustrated below is made up of the following components:-</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>         head    \n             |\n             | \n        +---+---+     +---+---+       +----+------+\n        | 1  | o----->|  2  | o-----> |  3 |   φ  |\n        +---+---+     +---+---+       +----+------+       \n                                              |\n                                              | \n                                              tail    </code></pre>\n      </div>\n<table>\n<thead>\n<tr>\n<th>Node</th>\n<th>Significance</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>HEAD</td>\n<td>Beginning of the List</td>\n</tr>\n<tr>\n<td>Node(s)</td>\n<td>Dynamically allocated self-referential block contain 1 Data element and a link to the next node</td>\n</tr>\n<tr>\n<td>TAIL</td>\n<td>End of the List</td>\n</tr>\n</tbody>\n</table>\n<p>Most common operations available on List are,  </p>\n<ol>\n<li>AddFirst - Inserts an element at the front of the List.  </li>\n<li>AddLast - Inserts an element at the tail of the List.</li>\n<li>InsertAfter - Inserts an element after an existing element in the List.</li>\n<li>InsertBefore - Inserts an element before an existing element in the List.</li>\n<li>Remove - Remove an existing element from the List.</li>\n<li>Access / Peek - Access an existing element from the List.</li>\n<li>Size / Count - Returns the number of elements currently present in the List.</li>\n<li>IsEmpty - Check whether the List is empty or not.</li>\n</ol>\n<h4>Applications</h4>\n<ul>\n<li>Base Data Structure for Vector, Array, Queue, Stack, etc  </li>\n<li>Polynomial Representation  </li>\n<li>Ring Buffer  </li>\n</ul>\n<h4>More Information:</h4>\n<ul>\n<li><a href=\'http://www.geeksforgeeks.org/linked-list-set-1-introduction/\' target=\'_blank\' rel=\'nofollow\'>Introduction to Linked Lists</a></li>\n</ul>\n<p>Drawbacks:</p>\n<ol>\n<li>Random access is not allowed. We have to access elements sequentially starting from the first node. So we cannot do binary search with linked lists.</li>\n<li>Extra memory space for a pointer is required with each element of the list</li>\n</ol>\n<p>Types:</p>\n<ol>\n<li>\n<p>(Singly) linked lists contain nodes which have a data field as well as a ‘next’ field, which points to the next node in line of nodes. Operations that can be performed on singly linked lists include insertion, deletion and traversal.</p>\n</li>\n<li>\n<p>(Doubly) In a ‘doubly linked list’, each node contains, besides the next-node link, a second link field pointing to the ‘previous’ node in the sequence. The two links may be called ‘forward(‘s’) and ‘backwards’, or ‘next’ and ‘prev’(‘previous’).</p>\n</li>\n</ol>\n<p>Example in Javascript:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function LinkedList () {\n\t\tthis.head = null;\n\t\tthis.tail = null;\n\t}\n\n    // Node has three properties value, next, prev\n\n\tfunction Node (value, next, prev) {\n\n\t\tthis.value = value;\n\n\t// A \'pointer\' referencing to the next Node (if present) otherwise null\n\n\t\tthis.next = next;\n\n\t// A \'pointer\' referencing the previous Node, otherwise null\n\n\t\tthis.prev = prev;\n\t}\n\n    LinkedList.prototype.addToHead = function(value) {\n\t\n\t\tlet newNode = new Node(value, this.head, null);\n\n\t\tif (this.head) this.head.prev = newNode;\n\n\t\telse this.tail = newNode;\n\n\t\tthis.head = newNode;\n\t}</code></pre>\n      </div>\n<p>Now Execute code</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>let LL = new LinkedList();\n\n\tLL.addToHead(100);\n\n\tLL.addToHead(200);\n    \n\tconsole.log(LL);</code></pre>\n      </div>\n<p>Representation in C:\nA linked list is represented by a pointer to the first node of the linked list. The first node is called head. If the linked list is empty, then value of head is NULL.\nEach node in a list consists of at least two parts:</p>\n<ol>\n<li>data</li>\n<li>\n<p>pointer to the next node\nIn C, we can represent a node using structures. Below is an example of a linked list node with an integer data.\nIn Java, LinkedList can be represented as a class and a Node as a separate class. The LinkedList class contains a reference of Node class type</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token comment" spellcheck="true">// A linked list node</span>\n<span class="token keyword">struct</span> Node\n<span class="token punctuation">{</span>\n<span class="token keyword">int</span> data<span class="token punctuation">;</span>\n<span class="token keyword">struct</span> Node <span class="token operator">*</span>next<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h1>Linked List with three elements</h1>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token comment" spellcheck="true">// A simple C program to introduce</span>\n<span class="token comment" spellcheck="true">// a linked list</span>\n<span class="token macro property">#<span class="token directive keyword">include</span><span class="token string">&lt;stdio.h></span></span>\n<span class="token macro property">#<span class="token directive keyword">include</span><span class="token string">&lt;stdlib.h></span></span>\n</code></pre>\n      </div>\n</li>\n</ol>\n<p>struct Node\n{\nint data;\nstruct Node *next;\n};</p>\n<p>// Program to create a simple linked\n// list with 3 nodes\nint main()\n{\nstruct Node* head = NULL;\nstruct Node* second = NULL;\nstruct Node* third = NULL;</p>\n<p>  // allocate 3 nodes in the heap<br>\nhead = (struct Node<em>)malloc(sizeof(struct Node));\nsecond = (struct Node</em>)malloc(sizeof(struct Node));\nthird = (struct Node*)malloc(sizeof(struct Node));</p>\n<p>  /* Three blocks have been allocated  dynamically.\nWe have pointers to these three blocks as first, second and third<br>\nhead           second           third\n|                |               |\n|                |               |\n+---+-----+     +----+----+     +----+----+\n| #  | #  |     | #  | #  |     |  # |  # |\n+---+-----+     +----+----+     +----+----+\n</p>\n<h1>represents any random value.</h1>\n<p>   Data is random because we haven’t assigned anything yet  */</p>\n<p>  head->data = 1; //assign data in first node\nhead->next = second; // Link first node with the second node</p>\n<p>  /* data has been assigned to data part of first block (block\npointed by head).  And next pointer of first block points to\nsecond.  So they both are linked.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>   head          second         third\n    |              |              |\n    |              |              |\n+---+---+     +----+----+     +-----+----+\n| 1  | o----->| #  | #  |     |  #  | #  |\n+---+---+     +----+----+     +-----+----+    </code></pre>\n      </div>\n<p>  */ </p>\n<p>  second->data = 2; //assign data to second node\nsecond->next = third; // Link second node with the third node</p>\n<p>  /* data has been assigned to data part of second block (block pointed by\nsecond). And next pointer of the second block points to third block.<br>\nSo all three blocks are linked.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>   head         second         third\n    |             |             |\n    |             |             |\n+---+---+     +---+---+     +----+----+\n| 1  | o----->| 2 | o-----> |  # |  # |\n+---+---+     +---+---+     +----+----+      */   </code></pre>\n      </div>\n<p>  third->data = 3; //assign data to third node\nthird->next = NULL;</p>\n<p>  /* data has been assigned to data part of third block (block pointed\nby third). And next pointer of the third block is made NULL to indicate\nthat the linked list is terminated here.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code> We have the linked list ready.  \n\n       head    \n         |\n         | \n    +---+---+     +---+---+       +----+------+\n    | 1  | o----->|  2  | o-----> |  3 | NULL |\n    +---+---+     +---+---+       +----+------+       \n\n \nNote that only head is sufficient to represent the whole list.  We can \ntraverse the complete list by following next pointers.    */     </code></pre>\n      </div>\n<p>  return 0;\n}</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code></code></pre>\n      </div>',fields:{slug:"/computer-science/data-structures/linked-lists/"},frontmatter:{title:"Linked Lists"}}},pathContext:{slug:"/computer-science/data-structures/linked-lists/"}}}});
//# sourceMappingURL=path---computer-science-data-structures-linked-lists-0d8262701ac6b56428f5.js.map