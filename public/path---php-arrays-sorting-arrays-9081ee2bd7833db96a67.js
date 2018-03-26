webpackJsonp([0xd8b65e3da72c],{5734:function(n,a){n.exports={data:{markdownRemark:{html:'<h2>Sorting Arrays</h2>\n<p>PHP offers several functions to sort arrays. This page describes the different functions and includes examples.</p>\n<h3>sort()</h3>\n<p>The <code>sort()</code> function sorts the values of an array in ascending alphabetical/numerical order (E.g. A, B, C, D, E… 5, 4, 3, 2, 1…)</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token variable">$freecodecamp</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string">"free"</span><span class="token punctuation">,</span> <span class="token string">"code"</span><span class="token punctuation">,</span> <span class="token string">"camp"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">sort</span><span class="token punctuation">(</span><span class="token variable">$freecodecamp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$freecodecamp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><strong>Output:</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>Array\n(\n    [0] => camp\n    [1] => code\n    [2] => free\n)</code></pre>\n      </div>\n<h3>rsort()</h3>\n<p>The <code>rsort()</code> functions sort the values of an array in descending alphabetical/numerical order (E.g. Z, Y, X, W, V… 5, 4, 3, 2, 1…)</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token variable">$freecodecamp</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string">"free"</span><span class="token punctuation">,</span> <span class="token string">"code"</span><span class="token punctuation">,</span> <span class="token string">"camp"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">rsort</span><span class="token punctuation">(</span><span class="token variable">$freecodecamp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$freecodecamp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><strong>Output:</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>Array\n(\n    [0] => free\n    [1] => code\n    [2] => camp\n)</code></pre>\n      </div>\n<h3>asort()</h3>\n<p>The <code>asort()</code> function sorts an associative array, by it’s values, in ascending alphabetical/numerical order (E.g. A, B, C, D, E… 5, 4, 3, 2, 1…)</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token variable">$freecodecamp</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string">"zero"</span><span class="token operator">=</span><span class="token operator">></span><span class="token string">"free"</span><span class="token punctuation">,</span> <span class="token string">"one"</span><span class="token operator">=</span><span class="token operator">></span><span class="token string">"code"</span><span class="token punctuation">,</span> <span class="token string">"two"</span><span class="token operator">=</span><span class="token operator">></span><span class="token string">"camp"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">asort</span><span class="token punctuation">(</span><span class="token variable">$freecodecamp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$freecodecamp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><strong>Output:</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>Array\n(\n    [two] => camp\n    [one] => code\n    [zero] => free\n)</code></pre>\n      </div>\n<h3>ksort()</h3>\n<p>The <code>ksort()</code> function sorts an associative array, by it’s keys, in ascending alphabetical/numerical order (E.g. A, B, C, D, E… 5, 4, 3, 2, 1…)</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token variable">$freecodecamp</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string">"zero"</span><span class="token operator">=</span><span class="token operator">></span><span class="token string">"free"</span><span class="token punctuation">,</span> <span class="token string">"one"</span><span class="token operator">=</span><span class="token operator">></span><span class="token string">"code"</span><span class="token punctuation">,</span> <span class="token string">"two"</span><span class="token operator">=</span><span class="token operator">></span><span class="token string">"camp"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">ksort</span><span class="token punctuation">(</span><span class="token variable">$freecodecamp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$freecodecamp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><strong>Output:</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>Array\n(\n    [one] => code\n    [two] => camp\n    [zero] => free\n)</code></pre>\n      </div>\n<h3>arsort()</h3>\n<p>The <code>arsort()</code> function sorts an associative array, by it’s values, in descending alphabetical/numerical order (E.g. Z, Y, X, W, V… 5, 4, 3, 2, 1…)</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token variable">$freecodecamp</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string">"zero"</span><span class="token operator">=</span><span class="token operator">></span><span class="token string">"free"</span><span class="token punctuation">,</span> <span class="token string">"one"</span><span class="token operator">=</span><span class="token operator">></span><span class="token string">"code"</span><span class="token punctuation">,</span> <span class="token string">"two"</span><span class="token operator">=</span><span class="token operator">></span><span class="token string">"camp"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">arsort</span><span class="token punctuation">(</span><span class="token variable">$freecodecamp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$freecodecamp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><strong>Output:</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>Array\n(\n    [zero] => free\n    [one] => code\n    [two] => camp\n)</code></pre>\n      </div>\n<h3>krsort()</h3>\n<p>The <code>krsort()</code> function sorts an associative array, by it’s keys in descending alphabetical/numerical order (E.g. Z, Y, X, W, V… 5, 4, 3, 2, 1…)</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token variable">$freecodecamp</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string">"zero"</span><span class="token operator">=</span><span class="token operator">></span><span class="token string">"free"</span><span class="token punctuation">,</span> <span class="token string">"one"</span><span class="token operator">=</span><span class="token operator">></span><span class="token string">"code"</span><span class="token punctuation">,</span> <span class="token string">"two"</span><span class="token operator">=</span><span class="token operator">></span><span class="token string">"camp"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">krsort</span><span class="token punctuation">(</span><span class="token variable">$freecodecamp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$freecodecamp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><strong>Output:</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>Array\n(\n    [zero] => free\n    [two] => camp\n    [one] => code\n)</code></pre>\n      </div>\n<h4>More Information:</h4>\n<ul>\n<li><a href="https://secure.php.net/manual/en/function.sort.php" rel="nofollow">php.net sort() manual</a></li>\n<li><a href="https://secure.php.net/manual/en/function.rsort.php" rel="nofollow">php.net rsort() manual</a></li>\n<li><a href="https://secure.php.net/manual/en/function.asort.php" rel="nofollow">php.net asort() manual</a></li>\n<li><a href="https://secure.php.net/manual/en/function.ksort.php" rel="nofollow">php.net ksort() manual</a></li>\n<li><a href="https://secure.php.net/manual/en/function.arsort.php" rel="nofollow">php.net arsort() manual</a></li>\n<li><a href="https://secure.php.net/manual/en/function.krsort.php" rel="nofollow">php.net krsort() manual</a></li>\n<li><a href="https://secure.php.net/manual/en/function.print-r.php" rel="nofollow">php.net print_r() manual</a></li>\n</ul>',fields:{slug:"/php/arrays/sorting-arrays/"},frontmatter:{title:"Sorting Arrays"}}},pathContext:{slug:"/php/arrays/sorting-arrays/"}}}});
//# sourceMappingURL=path---php-arrays-sorting-arrays-9081ee2bd7833db96a67.js.map