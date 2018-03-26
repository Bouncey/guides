webpackJsonp([0x9a22c78c1b76],{3740:function(e,o){e.exports={data:{markdownRemark:{html:'<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3" title=":triangular_flag_on_post:" alt=":triangular_flag_on_post:" class="forum-image"> Remember to use <a><strong><code>Read-Search-Ask</code></strong></a> if you get stuck. Try to pair program <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3" title=":busts_in_silhouette:" alt=":busts_in_silhouette:" class="forum-image"> and write your own code <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3" title=":pencil:" alt=":pencil:" class="forum-image"></p>\n<h3><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3" title=":checkered_flag:" alt=":checkered_flag:" class="forum-image"> Problem Explanation:</h3>\n<p>The smallest common multiple between two numbers is the smallest number that both numbers can divide into. This concept can be extended to more than two numbers as well.</p>\n<p>We can first start with just finding the smallest common multiple between two numbers. Naively, you can start writing out multiple of each number until you write a multiple that exists from both numbers.</p>\n<p>An example would be the numbers <code>3</code> and <code>4</code>. The multiples of <code>3</code> are <code>3, 6, 9, 12, 15, 18, ...</code> and the multiples of <code>4</code> are <code>4, 8, 12, 16, 20, ...</code>. The first smallest number we run into in both lists is <code>12</code> so this is the smallest common multiple between <code>3</code> and <code>4</code>.</p>\n<p>This problem can be confusing because most people look for the smallest common multiple of just the two numbers but forget the keyword <strong>range</strong>. However, this means that if you are given <code>&#x3C;a href=\'https://en.wikipedia.org/wiki/Least_common_multiple\' target=\'_blank\' rel=\'nofollow\'>1,5]</code>, then you have to check for the smallest common multiple for all the numbers <code>[1,2,3,4,5]</code> that is evenly divisible by all of them.</p>\n<h4>Relevant Links</h4>\n<ul>\n<li>[Least (Smallest) Common Multiple</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 1</h2>\n<p>Create an array with all the numbers that are missing from the original array to make it easier to check when having to check for even division.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 2</h2>\n<p>You can use remainder operator (<code>%</code>) to check if the reminder of a division is 0, which means it is evenly divisible.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 3</h2>\n<p>If you sort the array from greatest to smallest, then you can use the first two numbers as a first check for the smallest common multiple. This is because they are more likely to be the smallest common multiple than the lower numbers.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2>Spoiler Alert!</h2>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif" alt="warning sign"></p>\n<p><strong>Solution ahead!</strong></p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3" title=":beginner:" alt=":beginner:" class="forum-image"> Basic Code Solution:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function smallestCommons(arr) {\n  // Sort array from greater to lowest\n  // This line of code was from Adam Doyle (http://github.com/Adoyle2014)\n  arr.sort(function(a, b) {\n    return b - a;\n  });\n\n  // Create new array and add all values from greater to smaller from the\n  // original array.\n  var newArr = <a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"\' target=\'_blank\' rel=\'nofollow\'>];\n  for (var i = arr[0]; i >= arr[1]; i--) {\n    newArr.push(i);\n  }\n\n  // Variables needed declared outside the loops.\n  var quot = 0;\n  var loop = 1;\n  var n;\n\n  // Run code while n is not the same as the array length.\n  do {\n    quot = newArr[0] * loop * newArr[1];\n    for (n = 2; n < newArr.length; n++) {\n      if (quot % newArr[n] !== 0) {\n        break;\n      }\n    }\n\n    loop++;\n  } while (n !== newArr.length);\n\n  return quot;\n}\n\n// test here\nsmallestCommons([1,5]);</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLn2/0\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>Because of the possibility of the smallest common denominator being among the two biggest numbers, it makes sense to check those first, so sort the array.</li>\n<li>Create a new array to sort all the numbers, <code>newArr</code>.</li>\n<li>Use a descending <code>for</code> loop (<code>var i = arr&#x3C;a href=\'http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306\' target=\'_blank\' rel=\'nofollow\'>0]; i >= arr[1]; i--</code>) to add the numbers from the biggest to the smallest in the new array.</li>\n<li>\n<p>Declare the variables for the quotient so we can access them outside the loop:</p>\n<ul>\n<li>the quotient that’ll be our smallest common multiple (<code>quot</code>)</li>\n<li>the loop number we’re checking (<code>loop</code>)</li>\n<li>the index of the array of numbers (<code>n</code>)</li>\n</ul>\n</li>\n<li>Use a <code>do</code> <code>while</code>loop to check what we need while<code>n</code> is not the same length as the new array.</li>\n<li>In the <code>do</code> part, we are going to multiply the very first number, times the number of loops, times the second number (<code>quot = newArr[0] * loop * newArr[1];</code>).</li>\n<li>The <code>loop</code> part will allows us to increase the number we’re checking beyond the greatest number we have without having to change the algorithm.</li>\n<li>We enter a <code>for</code> loop that will go from <code>n</code> being 2 and going up by one (<code>loop++</code>) while it is smaller than the array with all the numbers (<code>n &#x3C; newArr.length</code>).</li>\n<li>If the quotient does not divide evenly (<code>quot % newArr[n] !== 0</code>), then stop the loop (<code>break;</code>). If it is even, then check for the next elements (<code>n++</code>) in the array until it is not even or we find our answer.</li>\n<li>Outside the loop, increase the value of loop (<code>loop++</code>).</li>\n<li>At the end of the loop return the quotient (<code>return quot;</code>).</li>\n</ul>\n<p>Note: If the array only has two elements, then the <code>for</code> loop never gets used and the return value is the product of said numbers.</p>\n<h4>Relevant Links</h4>\n<ul>\n<li>[JS Array Prototype Sort</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained\' target=\'_blank\' rel=\'nofollow\'>JS For Loops Explained</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298\' target=\'_blank\' rel=\'nofollow\'>JS Array Prototype Push</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-do-while-loop/14662\' target=\'_blank\' rel=\'nofollow\'>JS Do While Loop</a></li>\n<li><a>String.length</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3" title=":sunflower:" alt=":sunflower:" class="forum-image"> Intermediate Code Solution:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function smallestCommons(arr) {\n    var range = <a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"\' target=\'_blank\' rel=\'nofollow\'>];\n    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {\n    range.push(i);\n    }\n\n    // can use reduce() in place of this block\n    var lcm = range[0];\n    for (i = 1; i < range.length; i++) {\n    var GCD = gcd(lcm, range[i]);\n    lcm = (lcm * range[i]) / GCD;\n    }\n    return lcm;\n\n    function gcd(x, y) {    // Implements the Euclidean Algorithm\n    if (y === 0)\n        return x;\n    else\n        return gcd(y, x%y);\n    }\n}\n\n// test here\nsmallestCommons([1,5]);</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLn4/0\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>The first, basic solution requires over 2,000 loops to calculate the test case <code>smallestCommons(&#x3C;a href=\'https://en.wikipedia.org/wiki/Euclidean_algorithm\' target=\'_blank\' rel=\'nofollow\'>1,13])</code>, and over 4 million loops to calculate <code>smallestCommons([1,25])</code>. This solution evaluates <code>smallestCommons([1,13])</code> in around 20 loops and <code>smallestCommons([1,25])</code> in 40, by using a more efficient algorithm.</li>\n<li>Make an empty array <strong>range</strong>.</li>\n<li>All numbers between the given range are pushed to <strong>range</strong> using a <code>for</code> loop.</li>\n<li>The next block of code implements the Euclidean algorithm, which is used for finding smallest common multiples.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li>[Euclidean algorithm</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-math-max/14682\' target=\'_blank\' rel=\'nofollow\'>JS Math Max</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-math-min/14684\' target=\'_blank\' rel=\'nofollow\'>JS Math Min</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3" title=":rotating_light:" alt=":rotating_light:" class="forum-image"> Advanced Code Solution:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function smallestCommons(arr) {\n\n  // range\n  let min = Math.min.apply(null, arr);\n  let max = Math.max.apply(null, arr);\n\n  let smallestCommon = lcm(min, min + 1);\n\n  while(min < max) {\n    min++;\n    smallestCommon = lcm(smallestCommon, min);\n  }\n\n  return smallestCommon;\n}\n\n/**\n * Calculates Greatest Common Divisor\n * of two nubers using Euclidean algorithm\n * https://en.wikipedia.org/wiki/Euclidean_algorithm\n */\nfunction gcd(a, b) {\n  while (b > 0) {\n    let tmp = a;\n    a = b;\n    b = tmp % b;\n  }\n  return a;\n}\n\n/**\n * Calculates Least Common Multiple\n * for two numbers utilising GCD\n */\nfunction lcm(a, b) {\n  return (a * b / gcd(a, b));\n}\n\n\n// test here\nsmallestCommons([1,5]);</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/MR9P/latest\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>Extract minimum and maximum from provided <strong>arr</strong>.</li>\n<li>Initialise <strong>smallestCommon</strong> with the LCM of first two numbers.</li>\n<li>Loop through range computing LCM of current LCM and next number in range <strong>lcm(a, b, c) = lcm(lcm(a, b), c)</strong>.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply\' target=\'_blank\' rel=\'nofollow\'>JS Function.prototype.apply()</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3" title=":clipboard:" alt=":clipboard:" class="forum-image"> NOTES FOR CONTRIBUTIONS:</h2>\n<ul>\n<li><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong>DO NOT</strong> add solutions that are similar to any existing solutions. If you think it is <strong><em>similar but better</em></strong>, then try to merge (or replace) the existing similar solution.</li>\n<li>Add an explanation of your solution.</li>\n<li>Categorize the solution in one of the following categories — <strong>Basic</strong>, <strong>Intermediate</strong> and <strong>Advanced</strong>. <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3" title=":traffic_light:" alt=":traffic_light:" class="forum-image"></li>\n<li>Please add your username only if you have added any <strong>relevant main contents</strong>. (<img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong><em>DO NOT</em></strong> <em>remove any existing usernames</em>)</li>\n</ul>\n<blockquote>\n<p>See <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3" title=":point_right:" alt=":point_right:" class="forum-image"> <a href=\'http://forum.freecodecamp.com/t/algorithm-article-template/14272\' target=\'_blank\' rel=\'nofollow\'><strong><code>Wiki Challenge Solution Template</code></strong></a> for reference.</p>\n</blockquote>',fields:{slug:"/certificates/smallest-common-multiple/"},frontmatter:{title:"Smallest Common Multiple"}}},pathContext:{slug:"/certificates/smallest-common-multiple/"}}}});
//# sourceMappingURL=path---certificates-smallest-common-multiple-ff65ce542dbc0cc6f0d2.js.map