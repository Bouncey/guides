webpackJsonp([0xddf79856f789],{3492:function(n,a){n.exports={data:{markdownRemark:{html:'<h2>Linear Search</h2>\n<p>Suppose you are given a list or an array of items. You are searching for a particular item. How do you do that?</p>\n<p>Find the number 13 in the given list.</p>\n<p><img src="https://i.imgur.com/ThkzYEV.jpg" alt="Linear Search 1"></p>\n<p>You just look at the list and there it is!</p>\n<p><img src="https://i.imgur.com/K7HfCly.jpg" alt="Linear Search 2"></p>\n<p>Now, how do you tell a computer to find it.</p>\n<p>A computer cannot look at more than the value at a given instant of time. So it takes one item from the array and checks if it is the same as what you are looking for.</p>\n<p><img src="https://i.imgur.com/ZOSxeZD.jpg" alt="Linear Search 3"></p>\n<p>The first item did not match. So move onto the next one.</p>\n<p><img src="https://i.imgur.com/SwKsPxD.jpg" alt="Linear Search 4"></p>\n<p>And so on…</p>\n<p>This is done till a match is found or until all the items have been checked.</p>\n<p><img src="https://i.imgur.com/3AaViff.jpg" alt="Linear Search 5"></p>\n<p>In this algorithm, you can stop when the item is found and then there is no need to look further.</p>\n<p>So how long would it take to do the linear search operation?\nIn the best case, you could get lucky and the item you are looking at maybe at the first position in the array!\nBut in the worst case, you would have to look at each and every item before you find the item at the last place or before you realize that the item is not in the array.</p>\n<p>The complexity therefore of the linear search is: O(n).</p>\n<p>The code for a linear search function in JavaScript is shown below. This function returns the position of the item we are looking for in the array. If the item is not present in the array, the function would return null.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">linearSearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// Go through all the elements of arr to look for item.</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">// Found it!</span>\n      <span class="token keyword">return</span> i<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  \n  <span class="token comment" spellcheck="true">// Item not found in the array.</span>\n  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h4>Relevant Video:</h4>\n<!-- Please add any articles you think might be helpful to read before writing the article -->\n<p><a href=\'https://www.youtube.com/watch?v=vZWfKBdSgXI\' target=\'_blank\' rel=\'nofollow\'>Linear Search - CS50</a></p>',fields:{slug:"/algorithms/search-algorithms/linear-search/"},frontmatter:{title:"Linear Search"}}},pathContext:{slug:"/algorithms/search-algorithms/linear-search/"}}}});
//# sourceMappingURL=path---algorithms-search-algorithms-linear-search-ff63020eea51664b41d9.js.map