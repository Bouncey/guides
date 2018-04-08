webpackJsonp([0x95c9ab7220d4],{3752:function(e,o){e.exports={data:{markdownRemark:{html:'<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3" title=":triangular_flag_on_post:" alt=":triangular_flag_on_post:" class="forum-image"> Remember to use <a><strong><code>Read-Search-Ask</code></strong></a> if you get stuck. Try to pair program <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3" title=":busts_in_silhouette:" alt=":busts_in_silhouette:" class="forum-image"> and write your own code <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3" title=":pencil:" alt=":pencil:" class="forum-image"></p>\n<h3><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3" title=":checkered_flag:" alt=":checkered_flag:" class="forum-image"> Problem Explanation:</h3>\n<p>In Computer Science a <em>queue</em> is an abstract <strong>data structure</strong> where items are kept in order. New items can be added at the back of the <strong>queue</strong> and old items are taken off from the front of the <strong>queue</strong>.</p>\n<p>Write a function <code>nextInLine</code> which takes an array (<strong>arr</strong>) and a number (<strong>item</strong>) as arguments. Add the number to the end of the array, then remove the first element of array. The <code>nextInLine</code> function should then return the element that was removed.</p>\n<ul>\n<li>Change the code below <code>//Your Code here</code> and up to <code>//Change this line</code>.</li>\n<li>Ensure that you are editing the inside of the <code>nextInLine</code> function.</li>\n<li>Use an array function you learned to add the <strong>item</strong> to the end of the array <strong>arr</strong>.</li>\n<li>Use an array function you learned to remove the first element from array <strong>arr</strong>.</li>\n<li>Return the element removed.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'http://www.freecodecamp.com/challenges/manipulate-arrays-with-push\' target=\'_blank\' rel=\'nofollow\'>Challenge: Manipulate Arrays With push()</a></li>\n<li><a href=\'http://www.freecodecamp.com/challenges/manipulate-arrays-with-shift\' target=\'_blank\' rel=\'nofollow\'>Challenge: Manipulate Arrays With shift()</a></li>\n<li><a href=\'http://www.freecodecamp.com/challenges/passing-values-to-functions-with-arguments\' target=\'_blank\' rel=\'nofollow\'>Challenge: Passing Values to Functions with Arguments</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 1</h2>\n<p>The <code>push()</code> method adds an item to the end of an array.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 2</h2>\n<p>The <code>shift()</code> method removes the first element of an array. It also returns the element removed.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 3</h2>\n<p>The function <code>nextInLine</code> uses <strong>arr</strong> and <strong>item</strong>. Those are what the tests will use to pass the array elements they will test with. It allows the function to be reusable. Do not hardcode any of the tests inside the function.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2>Spoiler Alert!</h2>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif" alt="warning sign"></p>\n<p><strong>Solution ahead!</strong></p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3" title=":beginner:" alt=":beginner:" class="forum-image"> Basic Code Solution:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function nextInLine(arr, item) {\n  // Your code here\n  arr.push(item);\n  var removed = arr.shift();\n  return removed;  // Change this line\n}</code></pre>\n      </div>\n<h3>Code Explanation:</h3>\n<ul>\n<li>Pushe <strong>item</strong> at the end of <strong>arr</strong>.</li>\n<li>Call the <code>shift()</code> method on <strong>arr</strong> to get the first item and store it in <strong>removed</strong>.</li>\n<li>Return <strong>removed</strong>.</li>\n</ul>\n<p><strong>Example Run</strong></p>\n<ul>\n<li>Test <code>nextInLine(&#x3C;a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:"\' target=\'_blank\' rel=\'nofollow\'>2], 1);</code> runs.</li>\n<li>The <code>nextInLine</code> function is called. <strong>arr</strong> becomes [2]. <strong>item</strong> becomes 1.</li>\n<li><code>arr.push(item);</code> Pushes 1 to [2]. So <strong>arr</strong> is now [2,1].</li>\n<li><code>var removed = arr.shift();</code> removes the first element. So <strong>arr</strong> is now [1]. 2 has been removed and is stored in <strong>removed</strong>.</li>\n<li><code>return removed;</code> 2 is returned.</li>\n</ul>\n<p><strong><em>Note</em></strong>: You don’t actually need the variable <strong>removed</strong>. The element removed can be returned directly using <code>return arr.shift();</code>.</p>\n<h2>![:clipboard:</a> NOTES FOR CONTRIBUTIONS:</h2>\n<ul>\n<li><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong>DO NOT</strong> add solutions that are similar to any existing solutions. If you think it is <strong><em>similar but better</em></strong>, then try to merge (or replace) the existing similar solution.</li>\n<li>Add an explanation of your solution.</li>\n<li>Categorize the solution in one of the following categories — <strong>Basic</strong>, <strong>Intermediate</strong> and <strong>Advanced</strong>. <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3" title=":traffic_light:" alt=":traffic_light:" class="forum-image"></li>\n<li>Please add your username only if you have added any <strong>relevant main contents</strong>. (<img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong><em>DO NOT</em></strong> <em>remove any existing usernames</em>)</li>\n</ul>\n<blockquote>\n<p>See <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3" title=":point_right:" alt=":point_right:" class="forum-image"> <a><strong><code>Wiki Challenge Solution Template</code></strong></a> for reference.</p>\n</blockquote>',fields:{slug:"/certificates/stand-in-line/"},frontmatter:{title:"Stand in Line"}}},pathContext:{slug:"/certificates/stand-in-line/"}}}});
//# sourceMappingURL=path---certificates-stand-in-line-7715da641df7bed6ba9a.js.map