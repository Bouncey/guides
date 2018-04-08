webpackJsonp([0x80765ee08d7d],{3495:function(n,a){n.exports={data:{markdownRemark:{html:'<h2>Binary Search</h2>\n<p>A binary search locates an item in a sorted array by repeatedly dividing the search interval in half.</p>\n<p>How do you search a name in a telephone directory?</p>\n<p>One way would be to start from the first page and look at each name in the phonebook till we find what we are looking for. But that would be an extremely laborious and inefficient way to search.</p>\n<p>Because we know that names in the phonebook are sorted alphabetically, we could probably work along the following steps:</p>\n<ol>\n<li>Open the middle page of the phonebook</li>\n<li>If it has the name we are looking for, we are done!</li>\n<li>Otherwise, throw away the half of the phonebook that does not contain the name</li>\n<li>Repeat until you find the name or there are no more pages left in the phonebook</li>\n</ol>\n<p>Time complexity: As we dispose off one part of the search case during every step of binary search, and perform the search operation on the other half, this results in a worst case time complexity of <em>O</em>(<em>log<sub>2</sub>N</em>).</p>\n<p>In detail, how many times can you divide N by 2 until you have 1? This is essentially saying, do a binary search (half the elements) until you found it. In a formula this would be this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>1 = N / 2x</code></pre>\n      </div>\n<p>Multiply by 2x:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>2x = N</code></pre>\n      </div>\n<p>Now do the log2:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>log2(2x)    = log2 N\nx * log2(2) = log2 N\nx * 1       = log2 N</code></pre>\n      </div>\n<p>This means you can divide log N times until you have everything divided. Which means you have to divide log N (“do the binary search step”) until you found your element.</p>\n<p>This is the binary search algorithm. It is elegant and efficient but for it to work correctly, the array must be <strong>sorted</strong>.</p>\n<hr>\n<p>Find 5 in the given array of numbers using binary search.</p>\n<p><img src="https://i.imgur.com/QAuugOL.jpg" alt="Binary Search 1"></p>\n<p>Mark low, high and mid positions in the array.</p>\n<p><img src="https://i.imgur.com/1710fEx.jpg" alt="Binary Search 2"></p>\n<p>Compare the item you are looking for with the middle element.</p>\n<p><img src="https://i.imgur.com/jr4icze.jpg" alt="Binary Search 3"></p>\n<p>Throw away the left half and look in the right half.</p>\n<p><img src="https://i.imgur.com/W57lGsk.jpg" alt="Binary Search 4"></p>\n<p>Again compare with the middle element.</p>\n<p><img src="https://i.imgur.com/5Twm8NE.jpg" alt="Binary Search 5"></p>\n<p>Now, move to the left half.</p>\n<p><img src="https://i.imgur.com/01xetay.jpg" alt="Binary Search 6"></p>\n<p>The middle element is the item we were looking for!</p>\n<p>The binary search algorithm takes a divide-and-conquer approach where the array is continuously divided until the item is found or until there are no more elements left for checking. Hence, this algorithm can be defined recursively to generate an elegant solution.</p>\n<p>The two base cases for recursion would be:</p>\n<ul>\n<li>No more elements left in the array</li>\n<li>Item is found</li>\n</ul>\n<p>The code for recursive binary search is shown below:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> item<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>low <span class="token operator">></span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">// No more elements in the array.</span>\n        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token comment" spellcheck="true">// Find the middle of the array.</span>\n    <span class="token keyword">var</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token punctuation">(</span>low <span class="token operator">+</span> high<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">===</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">// Found the item!</span>\n        <span class="token keyword">return</span> mid<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token keyword">if</span> <span class="token punctuation">(</span>item <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">// Item is in the half from low to mid-1.</span>\n        <span class="token keyword">return</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> item<span class="token punctuation">,</span> low<span class="token punctuation">,</span> mid<span class="token number">-1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">// Item is in the half from mid+1 to high.</span>\n        <span class="token keyword">return</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> item<span class="token punctuation">,</span> mid<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> high<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token function">print</span><span class="token punctuation">(</span><span class="token function">binarySearch</span><span class="token punctuation">(</span>numbers<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> numbers<span class="token punctuation">.</span>length<span class="token number">-1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The Power of Binary Search in Data Systems (B+ trees):\nBinary Search Trees are very powerful because of their O(log n) search times, second to the hashmap data structure which uses a hasing key to search for data in O(1). It is important to understand how the log n run time comes from the height of a binary search tree. If each node splits into two nodes, (binary), then the depth of the tree is log n (base 2).. In order to improve this speed in Data System, we use B+ trees because they have a larger branching factor, and therefore more height. I hope this short article helps expand your mind about how binary search is used in practical systems.</p>\n<h3>More Information</h3>\n<p><a href="https://youtu.be/P3YID7liBug">Binary search (YouTube video)</a></p>\n<p><a href="https://www.youtube.com/watch?v=5xlIPT1FRcA">Binary Search - CS50</a></p>',fields:{slug:"/algorithms/search-algorithms/binary-search/"},frontmatter:{title:"Binary Search"}}},pathContext:{slug:"/algorithms/search-algorithms/binary-search/"}}}});
//# sourceMappingURL=path---algorithms-search-algorithms-binary-search-9a8641af1506d6af7702.js.map