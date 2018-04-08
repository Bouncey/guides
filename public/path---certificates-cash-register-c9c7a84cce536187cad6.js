webpackJsonp([76463244595536],{3595:function(e,o){e.exports={data:{markdownRemark:{html:'<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3" title=":triangular_flag_on_post:" alt=":triangular_flag_on_post:" class="forum-image"> Remember to use <a><strong><code>Read-Search-Ask</code></strong></a> if you get stuck. Try to pair program <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3" title=":busts_in_silhouette:" alt=":busts_in_silhouette:" class="forum-image"> and write your own code <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3" title=":pencil:" alt=":pencil:" class="forum-image"></p>\n<h3><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3" title=":checkered_flag:" alt=":checkered_flag:" class="forum-image"> Problem Explanation:</h3>\n<ul>\n<li>You have to create a program that will return an object containing a <code>status</code> key and a <code>change</code> key. The value of <code>status</code> is the string <code>INSUFFICIENT_FUNDS</code>, <code>CLOSED</code>, or <code>OPEN</code>, and the value of <code>change</code> is a 2D array of the change due.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a>Data Structure Arrays</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 1</h2>\n<ul>\n<li>It is easier when you know how much money is in your register beforehand. For this it is recommended to have a function to assign this information to a variable. Then you can see if you have enough money to complete the transaction and return change, or if you should close the register.</li>\n</ul>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 2</h2>\n<ul>\n<li>This problem is easier when you know the value of each bill or coin you are working with, rather than just the sum of each in the register. For example, it’s useful to know that a nickel is worth .05, along with the fact that you have $2.05 worth of nickels in the cash register.</li>\n</ul>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 3</h2>\n<ul>\n<li>You will have to get as much change from one type of bill or coin before moving to the next, from greater to lesser value. Keep going until you have calculated all the change due.</li>\n</ul>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2>Spoiler Alert!</h2>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif" alt="warning sign"></p>\n<p><strong>Solution ahead!</strong></p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3" title=":beginner:" alt=":beginner:" class="forum-image"> Beginner Code Solution:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>// Create an array of objects which hold the denominations and their values\nvar denom = [\n  { name: \'ONE HUNDRED\', val: 100.00},\n  { name: \'TWENTY\', val: 20.00},\n  { name: \'TEN\', val: 10.00},\n  { name: \'FIVE\', val: 5.00},\n  { name: \'ONE\', val: 1.00},\n  { name: \'QUARTER\', val: 0.25},\n  { name: \'DIME\', val: 0.10},\n  { name: \'NICKEL\', val: 0.05},\n  { name: \'PENNY\', val: 0.01}\n];\n\nfunction checkCashRegister(price, cash, cid) {\n  var output = { status: null, change: [] };\n  var change = cash - price;\n\n  // Transform CID array into drawer object\n  var register = cid.reduce(function(acc, curr) {\n    acc.total += curr[1];\n    acc[curr[0]] = curr[1];\n    return acc;\n  }, { total: 0 });\n\n  // Handle exact change\n  if (register.total === change) {\n    output.status = \'CLOSED\';\n    output.change = cid;\n    return output;\n  }\n\n  // Handle obvious insufficient funds\n  if (register.total < change) {\n    output.status = \'INSUFFICIENT_FUNDS\';\n    return output;\n  }\n\n  // Loop through the denomination array\n  var change_arr = denom.reduce(function(acc, curr) {\n    var value = 0;\n    // While there is still money of this type in the drawer\n    // And while the denomination is larger than the change remaining\n    while (register[curr.name] > 0 && change >= curr.val) {\n      change -= curr.val;\n      register[curr.name] -= curr.val;\n      value += curr.val;\n\n      // Round change to the nearest hundreth deals with precision errors\n      change = Math.round(change * 100) / 100;\n    }\n    // Add this denomination to the output only if any was used.\n    if (value > 0) {\n        acc.push([ curr.name, value ]);\n    }\n    return acc; // Return the current change_arr\n  }, []); // Initial value of empty array for reduce\n\n  // If there are no elements in change_arr or we have leftover change, return\n  // the string "Insufficient Funds"\n  if (change_arr.length < 1 || change > 0) {\n    output.status = \'INSUFFICIENT_FUNDS\';\n    return output;\n  }\n\n  // Here is your change, ma\'am.\n  output.status = \'OPEN\';\n  output.change = change_arr;\n  return output;\n}\n\n// test here\ncheckCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/@scissorsneedfoo/cash-register-example\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<p>First, create an array of objects with the value of each denomination of bill or coin, along with an output object with the status and change keys. Next, transform the CID array into a drawer object. Then, handle the conditions of exact change and insufficient funds. Loop through the <code>denom</code> array and update the change and values while there is still money of each type in the drawer and while the denomination is larger than the change remaining. Add this denomination to the accumulator of <code>change_arr</code> if any of this type was used. After the loop, <code>change_arr</code> is a 2D array of the change due, sorted from highest to lowest denomination. If there are no elements in <code>change_arr</code> or you still owe change, return the output object with a status of <code>INSUFFICIENT_FUNDS</code>. Finally you can give the correct change. Return the output object with a status of <code>OPEN</code> and <code>change_arr</code> as the value of change.</p>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299\' target=\'_blank\' rel=\'nofollow\'>JS Array Reduce</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/using-array-prototype-reduce-to-reduce-conceptual-boilerplate-for-problems-on-arrays/14687\' target=\'_blank\' rel=\'nofollow\'>JS Reduce Made Easy</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-loops/14681\' target=\'_blank\' rel=\'nofollow\'>JS Loops</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298\' target=\'_blank\' rel=\'nofollow\'>JS Array Push</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3" title=":clipboard:" alt=":clipboard:" class="forum-image"> NOTES FOR CONTRIBUTIONS:</h2>\n<ul>\n<li><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong>DO NOT</strong> add solutions that are similar to any existing solutions. If you think it is <strong><em>similar but better</em></strong>, then try to merge (or replace) the existing similar solution.</li>\n<li>Add an explanation of your solution.</li>\n<li>Categorize the solution in one of the following categories — <strong>Basic</strong>, <strong>Intermediate</strong> and <strong>Advanced</strong>. <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3" title=":traffic_light:" alt=":traffic_light:" class="forum-image"></li>\n<li>Please add your username only if you have added any <strong>relevant main contents</strong>. (<img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong><em>DO NOT</em></strong> <em>remove any existing usernames</em>)</li>\n</ul>\n<blockquote>\n<p>See <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3" title=":point_right:" alt=":point_right:" class="forum-image"> <a href=\'http://forum.freecodecamp.com/t/algorithm-article-template/14272\' target=\'_blank\' rel=\'nofollow\'><strong><code>Wiki Challenge Solution Template</code></strong></a> for reference.</p>\n</blockquote>',fields:{slug:"/certificates/cash-register/"},frontmatter:{title:"Cash Register"}}},pathContext:{slug:"/certificates/cash-register/"}}}});
//# sourceMappingURL=path---certificates-cash-register-c9c7a84cce536187cad6.js.map