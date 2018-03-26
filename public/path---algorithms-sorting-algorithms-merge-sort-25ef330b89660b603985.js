webpackJsonp([0xffcbce24f9df],{3498:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Merge Sort</h2>\n<p>Merge Sort is a <a href=\'https://guide.freecodecamp.org/algorithms/divide-and-conquer-algorithms\' target=\'_blank\' rel=\'nofollow\'>Divide and Conquer</a> algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. The major portion of the algorithm is given two sorted arrays, we have to merge them into a single sorted array. There is something known as the <a href=\'http://www.geeksforgeeks.org/merge-two-sorted-arrays/\' target=\'_blank\' rel=\'nofollow\'>Two Finger Algorithm</a> that helps us merge two sorted arrays together. Using this subroutine and calling the merge sort function on the array halves recursively will give us the final sorted array we are looking for.</p>\n<p>Since this is a recursion based algorithm, we have a recurrence relation for it. A recurrence relation is simply a way of representing a problem in terms of its subproblems. </p>\n<p><code>T(n) = 2 * T(n / 2) + O(n)</code></p>\n<p>Putting it in plain english, we break down the subproblem into two parts at every step and we have some linear amount of work that we have to do for merging the two sorted halves together at each step. </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>T(n) = 2T(n/2) + n\n     = 2(2T(n/4) + n/2) + n\n     = 4T(n/4) + n + n\n     = 4(2T(n/8) + n/4) + n + n\n     = 8T(n/8) + n + n + n\n     = nT(n/n) + n + ... + n + n + n\n     = n + n + ... + n + n + n</code></pre>\n      </div>\n<p>Counting the number of repetitions of n in the sum at the end, we see that there are lg n + 1 of them.  Thus the running time is n(lg n + 1) = n lg n + n. We observe that n lg n + n &#x3C; n lg n + n lg n = 2n lg n for n>0, so the running time is O(n lg n).     </p>\n<div class="gatsby-highlight">\n      <pre class="language-algorithm"><code>MergeSort(arr[], left,  right):\nIf right > l:\n     1. Find the middle point to divide the array into two halves:\n             mid = (left+right)/2\n     2. Call mergeSort for first half:\n             Call mergeSort(arr, left, mid)\n     3. Call mergeSort for second half:\n             Call mergeSort(arr, mid+1, right)\n     4. Merge the two halves sorted in step 2 and 3:\n             Call merge(arr, left, mid, right)</code></pre>\n      </div>\n<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Merge_sort_algorithm_diagram.svg/300px-Merge_sort_algorithm_diagram.svg.png" alt="Merge Sort Algorithm"></p>\n<h3>Properties:</h3>\n<ul>\n<li>Space Complexity: O(n)</li>\n<li>Time Complexity: O(n*log(n)). The time complexity for the Merge Sort might not be obvious from the first glance. The log(n) factor that comes in is because of the recurrence relation we have mentioned before. </li>\n<li>Sorting In Place: No in a typical implementation</li>\n<li>Stable: Yes</li>\n</ul>\n<h3>Visualization:</h3>\n<ul>\n<li><a href=\'https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html\'>USFCA</a></li>\n<li><a href=\'https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/\'>HackerEarth</a></li>\n</ul>\n<h3>Relavant videos on freeCodeCamp YouTube channel</h3>\n<ul>\n<li><a href=\'https://youtu.be/TzeBrDU-JaY\'>Merge Sort algorithm - MyCodeSchool</a></li>\n</ul>\n<h3>More Readings:</h3>\n<ul>\n<li><a href=\'https://en.wikipedia.org/wiki/Merge_sort\' target=\'_blank\' rel=\'nofollow\'>Wikipedia</a></li>\n<li><a href=\'www.geeksforgeeks.org/merge-sort\' target=\'_blank\' rel=\'nofollow\'>GeeksForGeeks</a></li>\n</ul>\n<h3>Implementaion in JS</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>\n\n<span class="token keyword">const</span> mergeSort <span class="token operator">=</span> <span class="token punctuation">(</span>list<span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> list<span class="token punctuation">;</span>\n  <span class="token keyword">const</span> middle <span class="token operator">=</span> list<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span> <span class="token punctuation">;</span>\n  <span class="token keyword">const</span> left <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> middle<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> right <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>middle<span class="token punctuation">,</span> list<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token function">mergeSort</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> merge <span class="token operator">=</span> <span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">while</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>length <span class="token operator">||</span> right<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> right<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span><span class="token punctuation">(</span>left<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> right<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>right<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>right<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">mergeSort</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">// [ 3, 4, 8, 15, 16, 23, 42 ]</span>\n</code></pre>\n      </div>',fields:{slug:"/algorithms/sorting-algorithms/merge-sort/"},frontmatter:{title:"Merge Sort"}}},pathContext:{slug:"/algorithms/sorting-algorithms/merge-sort/"}}}});
//# sourceMappingURL=path---algorithms-sorting-algorithms-merge-sort-25ef330b89660b603985.js.map