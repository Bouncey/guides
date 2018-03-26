webpackJsonp([45005511990040],{3476:function(e,t){e.exports={data:{markdownRemark:{html:"<h2>Binary Search Trees</h2>\n<p><img src=\"https://cdn-images-1.medium.com/max/1320/0*x5o1G1UpM1RfLpyx.png\" alt=\"Binary Search Tree\"></p>\n<p>A tree is a data structure composed of nodes that has the following characteristics:</p>\n<ol>\n<li>Each tree has a root node (at the top).</li>\n<li>The root node has zero or more child nodes.</li>\n<li>Each child node has zero or more child nodes, and so on.</li>\n</ol>\n<p>A binary search tree adds these two characteristics:</p>\n<ol>\n<li>Each node has up to two children.</li>\n<li>For each node, its left descendent nodes are less than the current node, which is less than the right descendent nodes.</li>\n</ol>\n<p>Binary search trees allow fast lookup, insert and removal of nodes. The way that they are set up means that, on average, each comparison allows the operations to skip about half of the tree, so that each lookup, insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree.</p>\n<p>Let us define a BST node having some data, referencing to its left and right child nodes.</p>\n<p>struct node {\nint data;<br>\nstruct node *leftChild;\nstruct node *rightChild;\n};</p>\n<h2>Search Operation</h2>\n<p>Whenever an element is to be searched, start searching from the root node. Then if the data is less than the key value, search for the element in the left subtree. Otherwise, search for the element in the right subtree. Follow the same algorithm for each node.</p>\n<p>Algorithm\nstruct node* search(int data){\nstruct node *current = root;\nprintf(“Visiting elements: ”);\n\nwhile(current->data != data){\n\nif(current != NULL) {\nprintf(“%d “,current->data);\n\n//go to left tree\nif(current->data > data){\ncurrent = current->leftChild;\n}//else go to right tree\nelse {<br>\ncurrent = current->rightChild;\n}\n\n//not found\nif(current == NULL){\nreturn NULL;\n}\n}\n}\nreturn current;\n}</p>\n<h2>Insert Operation</h2>\n<p>Whenever an element is to be inserted, first locate its proper location. Start searching from the root node, then if the data is less than the key value, search for the empty location in the left subtree and insert the data. Otherwise, search for the empty location in the right subtree and insert the data.</p>\n<p>Algorithm\nvoid insert(int data) {\nstruct node <em>tempNode = (struct node</em>) malloc(sizeof(struct node));\nstruct node *current;\nstruct node *parent;</p>\n<p>   tempNode->data = data;\ntempNode->leftChild = NULL;\ntempNode->rightChild = NULL;</p>\n<p>   //if tree is empty\nif(root == NULL) {\nroot = tempNode;\n} else {\ncurrent = root;\nparent = NULL;</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>  while(1) {                \n     parent = current;\n\t\t\n     //go to left of the tree\n     if(data < parent->data) {\n        current = current->leftChild;                \n        //insert to the left\n\t\t\t\n        if(current == NULL) {\n           parent->leftChild = tempNode;\n           return;\n        }\n     }//go to right of the tree\n     else {\n        current = current->rightChild;\n        \n        //insert to the right\n        if(current == NULL) {\n           parent->rightChild = tempNode;\n           return;\n        }\n     }\n  }            </code></pre>\n      </div>\n<p>   }\n}        </p>\n<h3>Relevant videos on freeCodeCamp YouTube channel</h3>\n<ul>\n<li><a href='https://youtu.be/5cU1ILGy6dM' target='_blank' rel='nofollow'>Binary Search Tree</a></li>\n<li><a href='https://youtu.be/Aagf3RyK3Lw' target='_blank' rel='nofollow'>Binary Search Tree: Traversal and Height</a></li>\n</ul>\n<p>Following are common types of Binary Trees:-\nFull Binary Tree/Strict Binary Tree: A Binary Tree is full or strict if every node has 0 or 2 children\n18\n/       \\<br>\n15         30<br>\n/  \\        /  <br>\n40    50    100   40\n<br>\nIn Full Binary Tree, number of leaf nodes is equal to number of internal nodes plus one.</p>\n<p> Complete Binary Tree: A Binary Tree is complete Binary Tree if all levels are completely filled except possibly the last level and the last level has all keys as left as possible</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>           18\n       /       \\  \n     15         30  \n    /  \\        /  \\\n  40    50    100   40\n /  \\   /\n8   7  9 </code></pre>\n      </div>",fields:{slug:"/algorithms/binary-search-trees/"},frontmatter:{title:"Binary Search Trees"}}},pathContext:{slug:"/algorithms/binary-search-trees/"}}}});
//# sourceMappingURL=path---algorithms-binary-search-trees-41f8fc4fa3fcefb7847c.js.map