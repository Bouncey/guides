webpackJsonp([0x7f3484f104c4],{3818:function(e,n){e.exports={data:{markdownRemark:{html:'<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3" title=":triangular_flag_on_post:" alt=":triangular_flag_on_post:" class="forum-image"> Remember to use <a><strong><code>Read-Search-Ask</code></strong></a> if you get stuck. Try to pair program <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3" title=":busts_in_silhouette:" alt=":busts_in_silhouette:" class="forum-image"> and write your own code <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3" title=":pencil:" alt=":pencil:" class="forum-image"></p>\n<h3><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3" title=":checkered_flag:" alt=":checkered_flag:" class="forum-image"> Problem Explanation:</h3>\n<p>This can be a tricky problem to understand. You need to find where in the array a number should be inserted by order, and return the index where it should go.</p>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306\' target=\'_blank\' rel=\'nofollow\'>JS Array Sort</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 1</h2>\n<p>The first thing to do is sort the array from lower to bigger, just to make the code easier. This is where sort comes in, it needs a callback function so you have to create it.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 2</h2>\n<p>Once the array is sorted, then just check for the first number that is bigger and return the index.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 3</h2>\n<p>If there is no index for that number then you will have to deal with that case too.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2>Spoiler Alert!</h2>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif" alt="warning sign"></p>\n<p><strong>Solution ahead!</strong></p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3" title=":beginner:" alt=":beginner:" class="forum-image"> Basic Code Solution:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function getIndexToIns(arr, num) {\n  arr.sort(function(a, b) {\n    return a - b;\n  });\n\n  for (var a = 0; a < arr.length; a++) {\n    if (arr<a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"\' target=\'_blank\' rel=\'nofollow\'>a] >= num)\n      return a;\n  }\n\n  return arr.length;\n}</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLjU/36\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h2>Code Explanation:</h2>\n<ul>\n<li>First I sort the array using <code>.sort(callbackFuntion)</code> to sort it by lowest to highest, from left to right.</li>\n<li>Then I use a for loop to compare the items in the array starting from the smallest one. When an item on the array is greater than the number we are comparing against, then we return the index as an integer.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-parseint/14686\' target=\'_blank\' rel=\'nofollow\'>parseInt()</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3" title=":beginner:" alt=":beginner:" class="forum-image"> Basic Code Solution:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function getIndexToIns(arr, num) {\n  // Find my place in this sorted array.\n  var times = arr.length; // runs the for loop once for each thing in the array\n  var count = 0; \n  for (i=0;i<times;i++){\n    if(num>arr<a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"\' target=\'_blank\' rel=\'nofollow\'>i]){count++;} } // counts how many array numbers are smaller than num\n    return count; // the above equals num\'s position in a sorted array\n}\n\ngetIndexToIns([40, 60], 50);</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLjU/2547\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h2>Code Explanation:</h2>\n<ul>\n<li>I do not sort the arr input array</li>\n<li>I run a for loop counting whenever the num input is bigger than an arr input number.</li>\n<li>This number is equivalent to what num’s position would be in a sorted array.</li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3" title=":beginner:" alt=":beginner:" class="forum-image"> Basic Code Solution:</h2>\n<p>by <a href="/u/harinapana">@HarinaPana</a></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function getIndexToIns(arr, num) {\n\n  arr.sort(function(a, b) {\n  return a - b;\n  });\n\n  var i = 0;\n  while (num > arr<a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"\' target=\'_blank\' rel=\'nofollow\'>i]) {\n  i++;\n  }\n\n  return i;\n}\n\ngetIndexToIns([40, 60], 50);</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLjU/4135\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h2>Code Explanation:</h2>\n<ul>\n<li>Sort existing array.</li>\n<li>Iterate through the array while checking if <em>num</em> is bigger.</li>\n<li>The loop will stop when <em>num</em> isn’t bigger than <em>i</em> and return the last element checked.</li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3" title=":sunflower:" alt=":sunflower:" class="forum-image"> Intermediate Code Solution:</h2>\n<p>by <a href="/u/faustodc">@faustodc</a></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function getIndexToIns(arr, num) {\n  arr.push(num);\n  arr.sort(function(a, b){return a-b});\n  return arr.indexOf(num);\n}</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/EB10/1\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h2>Code Explanation:</h2>\n<ul>\n<li>First we add the number <code>num</code> to the array using <code>push()</code> which adds it as the last element of the array.</li>\n<li>Then we use <code>sort()</code> with the callback function <code>function(a, b){return a-b}</code> to sort the numbers in ascending order.</li>\n<li>Lastly we return the postion or index of <code>num</code> in the array with the <code>indexOf()</code> function.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298\' target=\'_blank\' rel=\'nofollow\'>push()</a></li>\n<li><a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort\' target=\'_blank\' rel=\'nofollow\'>sort()</a></li>\n<li><a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf\' target=\'_blank\' rel=\'nofollow\'>indexOf()</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3" title=":sunflower:" alt=":sunflower:" class="forum-image"> Intermediate Code Solution:</h2>\n<p><strong>Using <code>.findIndex()</code></strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function getIndexToIns(arr, num) {\n  // sort and find right index\n  var index = arr.sort((curr, next) => curr > next)\n    .findIndex((currNum)=> num <= currNum);\n  // Returns proper answer\n  return index === -1 ? arr.length : index;\n}\n\ngetIndexToIns(<a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"\' target=\'_blank\' rel=\'nofollow\'>40, 60], 500);</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLjU/63\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h2>Code Explanation:</h2>\n<ul>\n<li>First sort the array in ascending order, this is currently done using array functions for minimal footprint.</li>\n<li>Once the array it is sorted, we directly apply the <code>.findIndex()</code> where we are going to compare every element in the array until we find where <code>num &#x3C;= currNum</code> meaning where the number we want to insert is less or equal to the current number number in the iteration.</li>\n<li>Then we use ternary operations to check whether we got an index returned or <code>-1</code>. We only get <code>-1</code> when the index was not found meaning when we get a false for all elements int he array, and for such case, it would mean that <code>num</code> should be inserted at the end of the list hence why we use <code>arr.length</code>.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex\' target=\'_blank\' rel=\'nofollow\'>Array.findIndex()</a></li>\n<li><a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions\' target=\'_blank\' rel=\'nofollow\'>Arrow Functions</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-ternary-operator/15973\' target=\'_blank\' rel=\'nofollow\'>Ternary Operator</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3" title=":rotating_light:" alt=":rotating_light:" class="forum-image"> Advanced Code Solution:</h2>\n<p>by <a href="/u/nivrith">@nivrith</a></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function getIndexToIns(arr, num) {\n\nreturn arr.concat(num).sort((a,b) => a-b).indexOf(num);\n\n}\n\ngetIndexToIns(<a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"\' target=\'_blank\' rel=\'nofollow\'>1,3,4],2);</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/IUJE/0\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h2>Code Explanation:</h2>\n<ul>\n<li>We use method-chaining to invoke one method after another to solve the problem in a single line. First we merge <code>arr</code> and <code>num</code> by invoking the arr.concat(num) method</li>\n<li>Then we use <code>sort()</code> with the callback <strong>arrow function</strong> <code>(a, b) => return a-b</code> to sort the numbers in ascending order</li>\n<li>Lastly we return the postion or index of <code>num</code> in the array with the <code>indexOf()</code> method</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'https://schier.co/blog/2013/11/14/method-chaining-in-javascript.html\' target=\'_blank\' rel=\'nofollow\'>Method chaining in JavaScript</a></li>\n<li><a href=\'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=example\' target=\'_blank\' rel=\'nofollow\'>concat()</a></li>\n<li><a href=\'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions\' target=\'_blank\' rel=\'nofollow\'>Arrow functions</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3" title=":clipboard:" alt=":clipboard:" class="forum-image"> NOTES FOR CONTRIBUTIONS:</h2>\n<ul>\n<li><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong>DO NOT</strong> add solutions that are similar to any existing solutions. If you think it is <strong><em>similar but better</em></strong>, then try to merge (or replace) the existing similar solution.</li>\n<li>Add an explanation of your solution.</li>\n<li>Categorize the solution in one of the following categories — <strong>Basic</strong>, <strong>Intermediate</strong> and <strong>Advanced</strong>. <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3" title=":traffic_light:" alt=":traffic_light:" class="forum-image"></li>\n<li>Please add your username only if you have added any <strong>relevant main contents</strong>. (<img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong><em>DO NOT</em></strong> <em>remove any existing usernames</em>)</li>\n</ul>\n<blockquote>\n<p>See <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3" title=":point_right:" alt=":point_right:" class="forum-image"> <a href=\'http://forum.freecodecamp.com/t/algorithm-article-template/14272\' target=\'_blank\' rel=\'nofollow\'><strong><code>Wiki Challenge Solution Template</code></strong></a> for reference.</p>\n</blockquote>',fields:{slug:"/certificates/where-do-i-belong/"},frontmatter:{title:"Where Do I Belong"}}},pathContext:{slug:"/certificates/where-do-i-belong/"}}}});
//# sourceMappingURL=path---certificates-where-do-i-belong-31b9d56f1f8af33eccb7.js.map