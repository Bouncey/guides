webpackJsonp([20469118081879],{3694:function(e,t){e.exports={data:{markdownRemark:{html:'<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3" title=":triangular_flag_on_post:" alt=":triangular_flag_on_post:" class="forum-image"> Remember to use <a><strong><code>Read-Search-Ask</code></strong></a> if you get stuck. Try to pair program <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3" title=":busts_in_silhouette:" alt=":busts_in_silhouette:" class="forum-image"> and write your own code <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3" title=":pencil:" alt=":pencil:" class="forum-image"></p>\n<h3><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3" title=":checkered_flag:" alt=":checkered_flag:" class="forum-image"> Problem Explanation:</h3>\n<p>You will create a program that will find the missing letter from a string and return it. If there is no missing letter, the program should return undefined. There is currently no test case for the string missing more than one letter, but if there was one, recursion would be used. Also, the letters are always provided in order so there is no need to sort them.</p>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\' target=\'_blank\' rel=\'nofollow\'>String global object</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-string-prototype-charcodeat/15933\' target=\'_blank\' rel=\'nofollow\'>JS String Prototype CharCodeAt</a></li>\n<li><a>String.fromCharCode</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 1</h2>\n<p>You will need to convert from character to ASCII code using the two methods provided in the description.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 2</h2>\n<p>You will have to check for the difference in ASCII code as they are in order. Using a chart would be very helpful.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 3</h2>\n<p>You will need to figure out where the missing letter is, along with handling the case that there is not missing letter as it needs an specific return value.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2>Spoiler Alert!</h2>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif" alt="warning sign"></p>\n<p><strong>Solution ahead!</strong></p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3" title=":beginner:" alt=":beginner:" class="forum-image"> Basic Code Solution:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function fearNotLetter(str) {\n\n  for(var i = 0; i < str.length; i++) {\n    /* code of current character */\n    var code = str.charCodeAt(i);\n\n    /* if code of current character is not equal to first character + no of iteration\n    hence character has been escaped */\n    if (code !== str.charCodeAt(0) + i) {\n\n      /* if current character has escaped one character find previous char and return */\n      return String.fromCharCode(code - 1);\n    }  \n  }\n  return undefined;\n}\n\n// test here\nfearNotLetter("abce");</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLnD/0\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>This solutions makes use of a <code>for</code> loop.</li>\n<li>Code of encountered character is stored in <strong>code</strong>.</li>\n<li>It is checked if code of current character is the expected one (no characters are skipped) by using the logic - <code>code of current character = code of first character + number of iterations</code>.</li>\n<li>If a character is missing, the missing character is found and the final string is returned.</li>\n<li><code>undefined</code> is returned if there is no missing character in the string.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained\' target=\'_blank\' rel=\'nofollow\'>JS For Loops Explained</a></li>\n<li><a>String.length</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3" title=":sunflower:" alt=":sunflower:" class="forum-image"> Intermediate Code Solution:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>// Adding this solution for the sake of avoiding using \'for\' and \'while\' loops.\n// See the explanation for reference as to why. It\'s worth the effort.\n\nfunction fearNotLetter(str) {\n  var compare = str.charCodeAt(0), missing;\n\n  str.split(\'\').map(function(letter,index) {\n    if (str.charCodeAt(index) == compare) {\n      ++compare;\n    } else {\n      missing = String.fromCharCode(compare);\n    }\n  });\n\n  return missing;\n}\n\n// test here\nfearNotLetter("abce");</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLnE/0\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>First we define variables to store the character code for the first letter in the string, and to store whatever missing letters we may find.</li>\n<li>We turn the string to an array in order to map through it instead of using <code>for</code> and <code>while</code> loops.</li>\n<li>As we <code>map</code> through our letters’ character codes, we go comparing with the one that should be in that position.</li>\n<li>If the current letter matches, we move the comparison variable to its next position so we can compare on the next cycle.</li>\n<li>If not, the missing letter will be assigned to the <code>missing</code> variable, which will be returned after the map is finished.</li>\n<li>If there are no missing characters, return <code>undefined</code>.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944\' target=\'_blank\' rel=\'nofollow\'>JS String Prototype Split</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294\' target=\'_blank\' rel=\'nofollow\'>JS Array Prototype Map</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3" title=":rotating_light:" alt=":rotating_light:" class="forum-image"> Advanced Code Solution:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function fearNotLetter(str) {\n  var allChars = \'\';\n  var notChars = new RegExp(\'<a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"\' target=\'_blank\' rel=\'nofollow\'>^\'+str+\']\',\'g\');\n\n  for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++)\n    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);\n\n  return allChars.match(notChars) ? allChars.match(notChars).join(\'\') : undefined;\n}\n\n// test here\nfearNotLetter("abce");</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLnG/0\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>A new string <strong>allChars</strong> is created.</li>\n<li>Create a regular expression <strong>notChars</strong> which selects everything except <strong>str</strong>.</li>\n<li>The <code>for</code> loop is used to add all the letters in the range to <strong>allChars</strong>.</li>\n<li><code>match()</code> is used to strip off the <strong>str</strong> letters from the newly created string and it is returned.</li>\n<li>If there are no missing characters, return <code>undefined</code>.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a>JS Regex Resources</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-ternary-operator/15973\' target=\'_blank\' rel=\'nofollow\'>JS Ternary</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-string-prototype-match/15941\' target=\'_blank\' rel=\'nofollow\'>JS String Prototype Match</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292\' target=\'_blank\' rel=\'nofollow\'>JS Array Prototype Join</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3" title=":clipboard:" alt=":clipboard:" class="forum-image"> NOTES FOR CONTRIBUTIONS:</h2>\n<ul>\n<li><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong>DO NOT</strong> add solutions that are similar to any existing solutions. If you think it is <strong><em>similar but better</em></strong>, then try to merge (or replace) the existing similar solution.</li>\n<li>Add an explanation of your solution.</li>\n<li>Categorize the solution in one of the following categories — <strong>Basic</strong>, <strong>Intermediate</strong> and <strong>Advanced</strong>. <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3" title=":traffic_light:" alt=":traffic_light:" class="forum-image"></li>\n<li>Please add your username only if you have added any <strong>relevant main contents</strong>. (<img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong><em>DO NOT</em></strong> <em>remove any existing usernames</em>)</li>\n</ul>\n<blockquote>\n<p>See <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3" title=":point_right:" alt=":point_right:" class="forum-image"> <a href=\'http://forum.freecodecamp.com/t/algorithm-article-template/14272\' target=\'_blank\' rel=\'nofollow\'><strong><code>Wiki Challenge Solution Template</code></strong></a> for reference.</p>\n</blockquote>',fields:{slug:"/certificates/missing-letters/"},frontmatter:{title:"Missing Letters"}}},pathContext:{slug:"/certificates/missing-letters/"}}}});
//# sourceMappingURL=path---certificates-missing-letters-73aba9e445f27cef6f75.js.map