webpackJsonp([64314535782495],{3730:function(e,o){e.exports={data:{markdownRemark:{html:'<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3" title=":triangular_flag_on_post:" alt=":triangular_flag_on_post:" class="forum-image"> Remember to use <a><strong><code>Read-Search-Ask</code></strong></a> if you get stuck. Try to pair program <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3" title=":busts_in_silhouette:" alt=":busts_in_silhouette:" class="forum-image"> and write your own code <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3" title=":pencil:" alt=":pencil:" class="forum-image"></p>\n<h3><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3" title=":checkered_flag:" alt=":checkered_flag:" class="forum-image"> Problem Explanation:</h3>\n<p>You will get an array that contains sub arrays of numbers and you need to return an array with the largest number from each of the sub arrays.</p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 1</h2>\n<p>You will need to keep track of the array with the answer and the largest number of each sub-array.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 2</h2>\n<p>You can work with multidimensional arrays by <code>Array&#x3C;a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:"\' target=\'_blank\' rel=\'nofollow\'>Index][SubIndex]</code></p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2>![:speech_balloon:</a> Hint: 3</h2>\n<p>Pay close attention to the timing of the storing of variables when working with loops</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2>Spoiler Alert!</h2>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif" alt="warning sign"></p>\n<p><strong>Solutions ahead!</strong></p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3" title=":beginner:" alt=":beginner:" class="forum-image"> Basic Code Solution:</h2>\n<p><strong>(Procedural approach)</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function largestOfFour(arr) {\n  var results = <a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"\' target=\'_blank\' rel=\'nofollow\'>];\n  for (var n = 0; n < arr.length; n++) {\n    var largestNumber = arr[n][0];\n    for (var sb = 1; sb < arr[n].length; sb++) {\n      if (arr[n][sb] > largestNumber) {\n        largestNumber = arr[n][sb];\n      }\n    }\n\n    results[n] = largestNumber;\n  }\n\n  return results;\n}</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLjU/734\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>Create a variable to store the <em>results</em> as an array.</li>\n<li>Create an outer loop to iterate through the outer array.</li>\n<li>Create a second variable to hold the largest number and initialise it with the first number. This must be outside an inner loop so it won’t be reassigned until we find a larger number.</li>\n<li>Create said inner loop to work with the sub-arrays.</li>\n<li>Check if the element of the sub array is larger than the currently stored largest number. If so, then update the number in the variable.</li>\n<li>After the inner loop, save the largest number in the corresponding position inside of the <code>results</code> array.</li>\n<li>And finally return said array.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained\' target=\'_blank\' rel=\'nofollow\'>For loops</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3" title=":sunflower:" alt=":sunflower:" class="forum-image"> Intermediate Code Solution:</h2>\n<p><strong>(Declarative approach)</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function largestOfFour(arr) {\n  return arr.map(function(group){\n    return group.reduce(function(prev, current) {\n      return (current > prev) ? current : prev;\n    });\n  });\n}</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLjU/733\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>we map all items within the main array to a new array using <code>Array.prototype.map()</code> and return this array as the final result</li>\n<li>within each inner array, we reduce its contents down to a single value using <code>Array.prototype.reduce()</code></li>\n<li>the callback function passed to the reduce method takes the previous value and the current value and compares the two values</li>\n<li>if the current value is higher than the previous value we set it as the new previous value for comparison with the next item within the array or returns it to the map method callback if it’s the last item</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294\' target=\'_blank\' rel=\'nofollow\'>Array.prototype.map()</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299\' target=\'_blank\' rel=\'nofollow\'>Array.prototype.reduce()</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-ternary-operator/15973\' target=\'_blank\' rel=\'nofollow\'>Ternary Operators</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3" title=":rotating_light:" alt=":rotating_light:" class="forum-image"> Advanced Code Solution:</h2>\n<p><strong>(Declarative approach)</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function largestOfFour(arr) {\n  return arr.map(Function.apply.bind(Math.max, null));\n}</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLjU/17\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<p>TL;DR: We build a special callback function (using the <code>Function.bind</code> method), that works just like <code>Math.max</code> but also has <code>Function.prototype.apply</code>’s ability to take arrays as its arguments <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/smiley.png?v=3" title=":smiley:" alt=":smiley:" class="forum-image"></p>\n<ul>\n<li>We start by mapping through the elements inside the main array. Meaning each one of the inner arrays.</li>\n<li>Now the need a callback function to find the max of each inner array provided by the map.</li>\n</ul>\n<p>So we want to create a function that does the work of <code>Math.max</code> and accepts input as an array (which by it doesn’t by default).</p>\n<p>In other words, it would be really nice and simple if this worked by itself:</p>\n<p><code>Math.max(&#x3C;a href=\'http://forum.freecodecamp.com/t/javascript-math-max/14682\' target=\'_blank\' rel=\'nofollow\'>9, 43, 20, 6]); // Resulting in 43</code></p>\n<p>Alas, it doesn’t.</p>\n<ul>\n<li>To do the work of accepting arguments in the shape of an array, there is this <code>Function.prototype.apply</code> method, but it complicates things a bit by <em>invoking</em> the <em>context</em> function.  </li>\n</ul>\n<p>i.e. <code>Math.max.apply(null, [9, 43, 20, 6]);</code> would invoke something like a <code>Max.max</code> method. What we’re looking for… almost.</p>\n<p>Here we’re passing <code>null</code> as the <em>context</em> of the <code>Function.prototype.apply</code> method as <code>Math.max</code> doesn’t need any context.</p>\n<ul>\n<li>\n<p>Since <code>arr.map</code> expects a callback function, not just an expression, we create a function out of the previous expression by using the <code>Function.bind</code> method.</p>\n</li>\n<li>\n<p>Since, <code>Function.prototype.apply</code> is a static <em>method</em> of the same <code>Function</code> <em>object</em>, we can call <code>Function.prototype.bind</code> on <code>Function.prototype.apply</code> i.e. <code>Function.prototype.apply.bind</code>.</p>\n</li>\n<li>\n<p>Now we pass the <em>context</em> for the <code>Function.prototype.apply.bind</code> call (in this case we want <code>Math.max</code>so we can gain its functionality).</p>\n</li>\n<li>\n<p>Since the embedded <code>Function.prototype.apply</code> method will also require a context as it’s 1st argument, we need to pass it a bogus <em>context</em>.</p>\n<ul>\n<li>\n<p>So, we pass <code>null</code> as the 2nd param to <code>Function.prototype.apply.bind</code> which gives a <em>context</em> to the <code>Math.max</code> method.</p>\n</li>\n<li>\n<p>Since, <code>Math.max</code> is independent of any <em>context</em>, hence, it ignores the bogus <em>context</em> given by <code>Function.prototype.apply</code> method call.</p>\n</li>\n<li>\n<p>Thus, our <code>Function.prototype.apply.bind(Math.max, null)</code> makes a new function accepting the <code>arr.map</code> values i.e. the inner arrays.</p>\n</li>\n</ul>\n</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li>[Math.max</a></li>\n<li><a href=\'http://devdocs.io/#q=js+Function+apply\' target=\'_blank\' rel=\'nofollow\'>Function.prototype.apply on DevDocs</a></li>\n<li><a href=\'http://devdocs.io/#q=js+Function+bind\' target=\'_blank\' rel=\'nofollow\'>Function.bind on DevDocs</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3" title=":clipboard:" alt=":clipboard:" class="forum-image"> NOTES FOR CONTRIBUTIONS:</h2>\n<ul>\n<li><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong>DO NOT</strong> add solutions that are similar to any existing solutions. If you think it is <strong><em>similar but better</em></strong>, then try to merge (or replace) the existing similar solution.</li>\n<li>Add an explanation of your solution.</li>\n<li>Categorize the solution in one of the following categories — <strong>Basic</strong>, <strong>Intermediate</strong> and <strong>Advanced</strong>. <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3" title=":traffic_light:" alt=":traffic_light:" class="forum-image"></li>\n<li>Please add your username only if you have added any <strong>relevant main contents</strong>. (<img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong><em>DO NOT</em></strong> <em>remove any existing usernames</em>)</li>\n</ul>\n<blockquote>\n<p>See <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3" title=":point_right:" alt=":point_right:" class="forum-image"> <a href=\'http://forum.freecodecamp.com/t/algorithm-article-template/14272\' target=\'_blank\' rel=\'nofollow\'><strong><code>Wiki Challenge Solution Template</code></strong></a> for reference.</p>\n</blockquote>',fields:{slug:"/certificates/return-largest-numbers-in-arrays/"},frontmatter:{title:"Return Largest Numbers in Arrays"}}},pathContext:{slug:"/certificates/return-largest-numbers-in-arrays/"}}}});
//# sourceMappingURL=path---certificates-return-largest-numbers-in-arrays-e023be6d9075d8556cd7.js.map