webpackJsonp([53874397557655],{3737:function(e,t){e.exports={data:{markdownRemark:{html:'<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3" title=":triangular_flag_on_post:" alt=":triangular_flag_on_post:" class="forum-image"> Remember to use <a><strong><code>Read-Search-Ask</code></strong></a> if you get stuck. Try to pair program <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3" title=":busts_in_silhouette:" alt=":busts_in_silhouette:" class="forum-image"> and write your own code <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3" title=":pencil:" alt=":pencil:" class="forum-image"></p>\n<h3><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3" title=":checkered_flag:" alt=":checkered_flag:" class="forum-image"> Problem Explanation:</h3>\n<p>You will create a program that takes a sentence, then search for a word in it and replaces it for a new one while preserving the uppercase if there is one.</p>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\' target=\'_blank\' rel=\'nofollow\'>String global object</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942\' target=\'_blank\' rel=\'nofollow\'>JS String Prototype Replace</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 1</h2>\n<ul>\n<li>Find the index where <code>before</code> is in the string.</li>\n</ul>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 2</h2>\n<ul>\n<li>Check first letter case.</li>\n</ul>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 3</h2>\n<ul>\n<li>Strings are immutable, you will need to save the edits on another variable, even if you must reuse the same one just to make it look like the changes where done using just that one variable.</li>\n</ul>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2>Spoiler Alert!</h2>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif" alt="warning sign"></p>\n<p><strong>Solution ahead!</strong></p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3" title=":beginner:" alt=":beginner:" class="forum-image"> Basic Code Solution:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function myReplace(str, before, after) {\n  // Find index where before is on string\n  var index = str.indexOf(before);\n  // Check to see if the first letter is uppercase or not\n  if (str<a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"\' target=\'_blank\' rel=\'nofollow\'>index] === str[index].toUpperCase()) {\n    // Change the after word to be capitalized before we use it.\n    after = after.charAt(0).toUpperCase() + after.slice(1);\n  }\n  // Now replace the original str with the edited one.\n  str = str.replace(before, after);\n\n  return str;\n}\n\n// test here\nmyReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLmo/0\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>Use <code>indexOf()</code> to find location of <strong>before</strong> in string.</li>\n<li>If first letter of <strong>before</strong> is capitalized, change first letter of <strong>after</strong> to uppercase.</li>\n<li>Replace <strong>before</strong> in the string with <strong>after</strong>.</li>\n<li>Return the new string.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936\' target=\'_blank\' rel=\'nofollow\'>JS String Prototype IndexOf</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950\' target=\'_blank\' rel=\'nofollow\'>JS String Prototype ToUpperCase</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-string-prototype-charat/15932\' target=\'_blank\' rel=\'nofollow\'>JS String Prototype CharAt</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-string-prototype-slice/15943\' target=\'_blank\' rel=\'nofollow\'>JS String Prototype Slice</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3" title=":sunflower:" alt=":sunflower:" class="forum-image"> Intermediate Code Solution:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function myReplace(str, before, after) {\n//Create a regular expression object\n  var re = new RegExp(before,"gi");\n//Check whether the first letter is uppercase or not\n  if(/<a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"\' target=\'_blank\' rel=\'nofollow\'>A-Z]/.test(before[0])){\n  //Change the word to be capitalized\n    after = after.charAt(0).toUpperCase()+after.slice(1);\n     }\n     //Replace the original word with new one\n  var  newStr =  str.replace(re,after);\n\n return newStr;\n}\n\n// test here\nmyReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLmp/0\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>In this solution, regular expression <code>&#x3C;a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:"\' target=\'_blank\' rel=\'nofollow\'>A-Z]</code> is used to check if character is uppercase.</li>\n<li>Create a new regular expression object, <strong>re</strong>.</li>\n<li>If first letter of <strong>before</strong> is capitalized, change the first letter of <strong>after</strong> to uppercase.</li>\n<li>Replace <strong>before</strong> with <strong>after</strong> in the string.</li>\n<li>Return the new string.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a>JS Regex Resources</a></li>\n</ul>\n<h2>![:rotating_light:</a> Advanced Code Solution:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function myReplace(str, before, after) {\n\n    // create a function that will change the casing of any number of letter in parameter "target"\n    // matching parameter "source"\n    function applyCasing(source, target) {\n        // split the source and target strings to array of letters\n        var targetArr = target.split("");\n        var sourceArr = source.split("");\n        // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array\n        for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++){\n            // find out the casing of every letter from sourceArr using regular expression\n            // if sourceArr<a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"\' target=\'_blank\' rel=\'nofollow\'>i] is upper case then convert targetArr[i] to upper case\n            if (/[A-Z]/.test(sourceArr[i])) {\n                targetArr[i] = targetArr[i].toUpperCase();\n            }\n            // if sourceArr[i] is not upper case then convert targetArr[i] to lower case\n            else targetArr[i] = targetArr[i].toLowerCase();\n        }\n        // join modified targetArr to string and return\n        return (targetArr.join(""));\n    }\n\n    // replace "before" with "after" with "before"-casing\n    return str.replace(before, applyCasing(before, after));\n}\n\n// test here\nmyReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLmq/0\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>Both the <strong>before</strong> and <strong>after</strong> are passed as arguments to <code>applyCasing()</code>.</li>\n<li>The function <code>applyCasing()</code> is used to change the case of respective characters in <strong>targetArr</strong> i.e., <strong>after</strong> in accordance with that of characters in <strong>sourceArr</strong> i.e., <strong>before</strong>.</li>\n<li><code>replace()</code> is used to replace <strong>before</strong> with <strong>after</strong>, whose casing is same as <strong>before</strong>.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944\' target=\'_blank\' rel=\'nofollow\'>JS String Prototype Split</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained\' target=\'_blank\' rel=\'nofollow\'>JS For Loops Explained</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-math-min/14684\' target=\'_blank\' rel=\'nofollow\'>JS Math Min</a></li>\n<li><a>String.length</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948\' target=\'_blank\' rel=\'nofollow\'>JS String Prototype ToLowerCase</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292\' target=\'_blank\' rel=\'nofollow\'>JS Array Prototype Join</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3" title=":clipboard:" alt=":clipboard:" class="forum-image"> NOTES FOR CONTRIBUTIONS:</h2>\n<ul>\n<li><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong>DO NOT</strong> add solutions that are similar to any existing solutions. If you think it is <strong><em>similar but better</em></strong>, then try to merge (or replace) the existing similar solution.</li>\n<li>Add an explanation of your solution.</li>\n<li>Categorize the solution in one of the following categories — <strong>Basic</strong>, <strong>Intermediate</strong> and <strong>Advanced</strong>. <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3" title=":traffic_light:" alt=":traffic_light:" class="forum-image"></li>\n<li>Please add your username only if you have added any <strong>relevant main contents</strong>. (<img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong><em>DO NOT</em></strong> <em>remove any existing usernames</em>)</li>\n</ul>\n<blockquote>\n<p>See <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3" title=":point_right:" alt=":point_right:" class="forum-image"> <a href=\'http://forum.freecodecamp.com/t/algorithm-article-template/14272\' target=\'_blank\' rel=\'nofollow\'><strong><code>Wiki Challenge Solution Template</code></strong></a> for reference.</p>\n</blockquote>',fields:{slug:"/certificates/search-and-replace/"},frontmatter:{title:"Search and Replace"}}},pathContext:{slug:"/certificates/search-and-replace/"}}}});
//# sourceMappingURL=path---certificates-search-and-replace-cd5cc061332ff98a2a25.js.map