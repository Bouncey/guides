webpackJsonp([92066860006123],{5520:function(e,t){e.exports={data:{markdownRemark:{html:'<h2>Introduction to Trie</h2>\n<p>The word trie is an inflix of the word “re<strong>trie</strong>val”, because the trie can find a single word in a dictionary with only a prefix of the word.<br>\nTrie is an efficient data retrieval data structure, using trie, search complexities can be brought to an optimal limit, i.e. length of the string.<br>\nIt is a multi-way tree structure useful for storing strings over an alphabet, when we are storing them.<br>\nIt has been used to store large dictionaries of English, say, words in spell-checking programs.<br>\nHowever, the penalty on tries is the storage requirement.</p>\n<h2>What is a trie?</h2>\n<p>A trie is a tree like data structure which stores strings, and helps you find the data associated with that string using the prefix of the string.<br>\nFor example, say you plan on building a dictionary to store strings along with their meanings. You must be wondering why can’t I simply use a hash table, to get the information.<br>\nYes, you obviously can get information using a hash table, but, the <a>hash tables</a> can only find data where the string exactly matches the one we’ve added. But trie will give us the capability to find strings with common prefixes, a missing character etc in lesser time, in comparison to a hash table.<br>\nA trie typically, looks something like this,</p>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/c/c43e222a6f9152512d73f97b8117db5c074bbc8e.png" alt="Trie"></p>\n<p>This is an image of a Trie, which stores the words {assoc, algo, all, also, tree, trie}.</p>\n<h2>How to implement a trie?</h2>\n<p>Let’s implement a trie in python, for storing words with their meanings from english dictionary.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>ALPHABET_SIZE = 26 # For English\n\nclass TrieNode:\n\tdef __init__(self):\n\t\tself.edges = [None]*(ALPHABET_SIZE) # Each index respective to each character.\n\t\tself.meaning = None # Meaning of the word.\n\t\tself.ends_here = False # Tells us if the word ends here.</code></pre>\n      </div>\n<p>As you can see, edges are 26 in length, each index referring to each character in the alphabet. ‘A’ corresponding to 0, ‘B’ to 1, ‘C’ to 2 … ‘Z’ to 25th index. If the character you are looking for is pointing to <code>None</code>, that implies the word is not there in the trie.</p>\n<p>A typical Trie should implement at least these two functions:</p>\n<ul>\n<li><code>add_word(word,meaning)</code></li>\n<li><code>search_word(word)</code></li>\n<li><code>delete_word(word)</code></li>\n</ul>\n<p>Additionally, one can also add something like</p>\n<ul>\n<li><code>get_all_words()</code></li>\n<li><code>get_all_words_with_prefix(prefix)</code></li>\n</ul>\n<h4>Adding Word to the trie</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>\tdef add_word(self,word,meaning):\n\t\tif len(word)==0:\n\t\t\tself.ends_here = True # Because we have reached the end of the word\n\t\t\tself.meaning = meaning # Adding the meaning to that node\n\t\t\treturn\n\t\tch = word[0] # First character\n\t\t# ASCII value of the first character (minus) the ASCII value of \'a\'-> the first character of our ALPHABET gives us the index of the edge we have to look up.\n\t\tindex = ord(ch) - ord(\'a\')\n\t\tif self.edges[index] == None:\n\t\t\t# This implies that there\'s no prefix with this character yet.\n\t\t\tnew_node = TrieNode()\n\t\t\tself.edges[index] = new_node\n\n\t\tself.edges[index].add(word[1:],meaning) #Adding the remaining word</code></pre>\n      </div>\n<h4>Retrieving data</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>\tdef search_word(self,word):\n\t\tif len(word)==0:\n\t\t\tif self.ends_here:\n\t\t\t\treturn True\n\t\t\telse:\n\t\t\t\treturn "Word doesn\'t exist in the Trie"\n\t\tch = word[0]\n\t\tindex = ord(ch)-ord(\'a\')\n\t\tif self.edge[index]== None:\n\t\t\treturn False\n\t\telse:\n\t\t\treturn self.edge[index].search_word(word[1:])</code></pre>\n      </div>\n<p>The <code>search_word</code> function will tell us if the word exists in the Trie or not. Since ours is a dictionary, we need to fetch the meaning as well, now lets declare a function to do that.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>\tdef get_meaning(self,word):\n\t\tif len(word)==0 :\n\t\t\tif self.ends_here:\n\t\t\t\treturn self.meaning\n\t\t\telse:\n\t\t\t\treturn "Word doesn\'t exist in the Trie"\n\t\tch = word[0]\n\t\tindex = ord(ch) - ord(\'a\')\n\t\tif self.edges[index] == None:\n\t\t\treturn "Word doesn\'t exist in the Trie"\n\t\telse:\n\t\t\treturn self.edges[index].get_meaning(word[1:])</code></pre>\n      </div>\n<h4>Deleting data</h4>\n<p>By deleting data, you just need to change the variable <code>ends_here</code> to <code>False</code>. Doing that doesn’t alter the prefixes, but stills deletes the meaning and the existence of the word from the trie.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>\tdef delete_word(self,word):\n\t\tif len(word)==0:\n\t\t\tif self.ends_here:\n\t\t\t\tself.ends_here = False\n\t\t\t\tself.meaning = None\n\t\t\t\treturn "Deleted"\n\t\t\telse:\n\t\t\t\treturn "Word doesn\'t exist in the Trie"\n\t\tch = word[0]\n\t\tindex = ord(ch) - ord(\'a\')\n\t\tif self.edges[index] == None:\n\t\t\treturn "Word doesn\'t exist in the Trie"\n\t\telse:\n\t\t\treturn self.edges[index].delete_word(word[1:])</code></pre>\n      </div>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CWbr\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h2>Resources</h2>\n<ul>\n<li>For further reading, you can try this <a href=\'https://www.topcoder.com/community/data-science/data-science-tutorials/using-tries/\' target=\'_blank\' rel=\'nofollow\'>topcoder</a> tutorial.</li>\n<li>Also, a tutorial from <a href=\'http://www.geeksforgeeks.org/trie-insert-and-search/\' target=\'_blank\' rel=\'nofollow\'>geeksforgeeks</a></li>\n</ul>',fields:{slug:"/miscellaneous/data-structure-trie/"},frontmatter:{title:"Data Structure Trie"}}},pathContext:{slug:"/miscellaneous/data-structure-trie/"}}}});
//# sourceMappingURL=path---miscellaneous-data-structure-trie-e6790dd8b77425a47b29.js.map