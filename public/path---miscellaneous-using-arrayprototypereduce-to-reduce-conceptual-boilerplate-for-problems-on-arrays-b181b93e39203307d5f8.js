webpackJsonp([0xca20c8524c5],{5690:function(e,t){e.exports={data:{markdownRemark:{html:"<p>That’s quite a mouthful! It could have just been titled as <strong>Use <a><code>Array.prototype.reduce()</code></a> to Solve Array Problems Easily</strong> or <strong><code>Array.prototype.reduce()</code> FTW!</strong>. That would have been so much easier to read and parse.</p>\n<p>But It was not. Loops in JavaScript are just like that. They are not terse, they make you beat around the bush for a while. As the joke goes, two things are most difficult in computer science - <a href='https://en.wikipedia.org/wiki/Cache_invalidation' target='_blank' rel='nofollow'>cache invalidation</a>, <a href='https://www.quora.com/Why-is-naming-things-hard-in-computer-science-and-how-can-it-can-be-made-easier' target='_blank' rel='nofollow'>naming things</a>, and <a href='https://en.wikipedia.org/wiki/Off-by-one_error' target='_blank' rel='nofollow'>off-by-one error</a>.</p>\n<p>And then there is the danger of writing <a href='http://stackoverflow.com/questions/11488014/asynchronous-process-inside-a-javascript-for-loop' target='_blank' rel='nofollow'>asynchonous code inside a for loop without using closure from IIFE</a>.</p>\n<p>This article would start with a claim - that you can avoid using a for-loop or while-loop to solve any <code>Array</code> related problems. Instead, you can solve all of them using <code>Array.prototype.reduce()</code>. If you wish to read forward; do make sure you know about recursive functions, and some of the cool functional tools like <a><code>Array.prototype.map()</code></a> or <a><code>Array.prototype.filter()</code></a>.</p>\n<p>Grand claims require grand evidence. So let’s demonstrate how we can get accustomed with using <code>reduce()</code>.</p>\n<p>It’s time you knew, that, if you haven’t solved the FreeCodeCamp algorithm scripting sections, you might want to hold off on reading this next part. Some of the examples could very well match those problems.</p>\n<p>This is the cliched spoiler alert; to make sure you give those problems an honest attempt and not take a peek at the solutions before you have even tried.</p>\n<p>Also, if you already understand it well enough, perhaps you would like to review this piece of writing and provide feedback.</p>\n<h2>Can I Reduce Any Array-related Problem?</h2>\n<p>Yes, you can! In fact, the problem doesn’t even have to have an Array - <em>it just has to be a problem, where you can create an intermediate array</em>.</p>\n<p>Let’s take an example. It’s quite common to create a <a href='https://en.wikipedia.org/wiki/Semantic_URL#Slug' target='_blank' rel='nofollow'>slug url</a> from standard white-spaced string such as news headlines, blog article headings or even questions on Q&#x26;A forums.</p>\n<p>Say, we have to write a utility function, that creates this slug. You could probably write something like this:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>function createSlug(str){\n  return str.split(\" \").reduce(function(prev, next){\n    return prev.concat(<a href='https://signalvnoise.com/posts/3124-give-it-five-minutes' target='_blank' rel='nofollow'>next.toLowerCase()]);\n  }, [])\n  .join(\"-\");\n}</code></pre>\n      </div>\n<p>Don’t take my word for it! Go ahead, and test it out in your console with some input like “Leo Finally Wins a Freaking Oscar!” See what it returns. I will wait…done? Ok, moving on.</p>\n<p>Yes, it’s not a robust implementation. It does not take care of some edge cases, also it assumes the joining should happen with <code>\"-\"</code>.</p>\n<p>But it’s a start. Notice how the usage of <code>reduce</code> takes the boilerplate out of your way — the action happens only at the line:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>return prev.concat([next.toLowerCase()]);</code></pre>\n      </div>\n<p>That’s the core of the functionality we want. In fact, we are so assured of its awesomeness, that we start the <code>function</code> body with a <code>return</code> statement!</p>\n<p>You might very well imagine that, this looks like dark magic. Make sure that is not a knee-jerk reaction, because you are too used to writing loops. Just [give it five minutes</a>!</p>\n<p>If the above code was not clear, you need to understand how <code>reduce</code> works. And by <em>understand</em>, I mean, know it like the back of your hand.</p>\n<h2>But I Do NOT Understand Reduce At All!</h2>\n<p>Well, fear not! You are about to be a <code>reduce</code> Ninja in the next few minutes.</p>\n<p>Every JavaScript function has three things you need to know, to understand how the function works:</p>\n<ul>\n<li>The input</li>\n<li>The output</li>\n<li>The execution context</li>\n</ul>\n<p>Yes, I can see you opening the official <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce' target='_blank' rel='nofollow'>MDN documentation</a> in a new tab! It’s ok, go read that first. I am serious, this is no joke.</p>\n<p>You should always start at the official documentation to understand something.</p>\n<p>Good, now that you are confused with the <code>prev</code> and <code>next</code> inside the callback; you are ready to follow the text here.</p>\n<p><code>Array.prototype.reduce()</code> takes a callback and initial value as input arguments (The initial value is important. A lot of developers forget to provide the initial value correctly; and screw up their code).</p>\n<p>As you must have seen in the documentation, it takes a few additional but optional arguments as well. But more on that later. Assuming <code>arr</code> is an arbitrary array.</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>arr.reduce(function(){}, initialValue);</code></pre>\n      </div>\n<p>Now, let’s have a closer look at the callback function, which is the first argument of <code>reduce</code>. This callback, in turn, takes two arguments. These two arguments are called in the official documentation as <code>prev</code> and <code>next</code>. Personally, I don’t think those names do justice to their true nature.</p>\n<p>So, throughout this text, we would be referring to them as <code>acc</code>, to represent accumulated value; and <code>item</code>, to denote the current item being accessed.</p>\n<p>With these so far, here’s what a <code>reduce</code> should look like:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>arr.reduce(function(acc, item){\n /* here you have to complete the function */\n}, initialValue);</code></pre>\n      </div>\n<p>Now, let’s find out what would the value of these <code>acc</code> and <code>item</code> are. We have mentioned earlier that the <code>reduce</code> is a replacement for iterative constructs.</p>\n<p>It stands to reason that <code>reduce</code> would take your custom callback function; and iterate over the Array on which <code>reduce</code> has been invoked.</p>\n<p>Instead of describing these, let’s ask the JS execution engine what these are!</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>var arr = <a href='http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/' target='_blank' rel='nofollow'>10, 20, 30, 60];\narr.reduce(function(acc, item){\n   console.log(acc, item);\n}, 0);</code></pre>\n      </div>\n<p>Executing the above in browser or Node console would give you this as output:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>0 10\nundefined 20\nundefined 30\nundefined 60</code></pre>\n      </div>\n<p>Notice the number of outputs are same as number of elements in the Array <code>[10, 20, 30, 60]</code>. In fact, it prints out the elements of the Array!</p>\n<p>So, we can deduce that <code>reduce()</code> takes your custom callback and executes it on each element of the Array. While doing so, it makes the current item available to the custom callback as <code>item</code> argument.</p>\n<p>But what about <code>acc</code>? We see that other than the first line, when <code>item = 10</code>, it is <code>undefined</code>. In the first line, which corresponds to the first iteration, its value is same as <code>initialvalue</code>.</p>\n<p>In short, our <code>acc</code> accumulator, is not accumulating!</p>\n<p>But then, how do we make it accumulate? Let’s try executing this:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>var arr = [10, 20, 30, 60];\narr.reduce(function(acc, item){\n   console.log(acc, item);\n   return acc;\n}, 0);</code></pre>\n      </div>\n<p>This time the output changes to:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>0 10\n0 20\n0 30\n0 60</code></pre>\n      </div>\n<p>As you can see, the value of <code>acc</code> would remain constant throughout. And that is expected - we are not altering the value of <code>acc</code> anywhere in the custom callback. We return whatever <code>reduce</code> makes available at a given iteration.</p>\n<p>But we did realize something - the value of <code>acc</code> for current iteration, would be the <code>return</code> value from custom callback from previous iteration. And ultimately, when the iteration is over, the final value of <code>acc</code> would be returned by <code>reduce</code> call.</p>\n<p>This leaves only one important part in our understanding - the value of execution context, or [<code>this</code></a>!</p>\n<p>So, we again approach our friendly neighbor, the JS console and execute this:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>var arr = <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode' target='_blank' rel='nofollow'>10, 20, 30, 60];\narr.reduce(function(acc, item){\n   console.log(acc, item, this);\n   return acc;\n}, 0);</code></pre>\n      </div>\n<p>If you are in [strict mode</a>, it would return <code>undefined</code> as value of <code>this</code>. Otherwise, in-browser, it would point to <a href='https://developer.mozilla.org/en-US/docs/Web/API/Window' target='_blank' rel='nofollow'><code>window</code></a> object as <code>this</code>. Can we override and set it on our own, using <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind' target='_blank' rel='nofollow'><code>bind</code></a>? Sure! just use <code>bind</code> with the callback:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>var arr = <a href='https://en.wikipedia.org/wiki/Loop_invariant' target='_blank' rel='nofollow'>10, 20, 30, 60];\narr.reduce(function(acc, item){\n   console.log(acc, item, this);\n   return acc;\n}.bind(arr), 0);</code></pre>\n      </div>\n<p>I have bound the array <code>arr</code> itself; but you can set it to any object in your environment.</p>\n<h2>Understanding Reduce</h2>\n<p>Let’s summarize our understanding of this <code>reduce</code> function for easy reference:</p>\n<ul>\n<li>Reduce takes a custom callback as its first argument, and some initial value as its second argument.</li>\n<li>It’s important we don’t forget about the second argument, the initial value; and we explicitly set it while using it.</li>\n<li>The input arguments to the custom callback is accumulated value <code>acc</code>; and the current item in Array, <code>item</code>.</li>\n<li>The value of <code>acc</code> for next iteration would be the returned value from inside the callback, in current iteration.</li>\n<li>Whole point of using <code>reduce()</code> is to form the <code>acc</code> properly; to return it finally from the <code>reduce()</code> call.</li>\n</ul>\n<p>Don’t you try remembering them by cramming! Instead, let’s remember them by applying them in real code.</p>\n<h2>Using Reduce</h2>\n<p>Let’s start a simple Array operation off the top-of our head - <em>finding maximum in an Array</em></p>\n<p>For the sake of brevity, I am assuming it’s an integer Array.</p>\n<p>To form a solution, we need to think of how to form the <code>acc</code> as <code>reduce</code> takes our callback and iterates over the Array.</p>\n<p>An idea I find helpful, is to think in terms of [loop-invariants</a>. We want to come up with a formulation that no matter what the size or content of the Array; <code>acc</code> should always have the maximum value so far.</p>\n<p>Say, My Array is <code>[20, 50, 5, 60]</code>. After two iterations; <code>item</code> would be <code>5</code> and <code>acc</code> should be <code>max(20, 50) = 50</code>.</p>\n<p>The only way <code>acc</code> always gets the maximum of <em>subarray traversed so far</em>, is if we always pick maximum of current <code>item</code> and <code>acc</code> - and return he winner!</p>\n<p>So, here’s what the function would look like:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>var arr = [20, 50, 5, 60];\narr.reduce(function(acc, item){\n  return Math.max(acc, item);\n}, 0);</code></pre>\n      </div>\n<p>It could be tempting to rewrite it as follows, in tandem with functional programming principles;</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>var arr = [20, 50, 5, 60];\narr.reduce(Math.max, 0);</code></pre>\n      </div>\n<p>but this would not work and would return <code>NaN</code>. Here’s the reason - <code>acc</code> and <code>item</code> are not the <strong>only</strong> arguments to the custom callback. When you call <a href=\"//forum.freecodecamp.com/t/javascript-math-max/14682\"><code>Math.max()</code></a> tries to call it on non-numeric arguments, resulting in <code>NaN</code>.</p>\n<p>Notice that I didn’t put much thought into picking the initial value. I just picked it as <code>0</code>; resulting in a bug!</p>\n<p>So, what if my Array is consisted of values less than zero? Say, <code>arr = &#x3C;a href='https://en.wikipedia.org/wiki/Least_common_multiple' target='_blank' rel='nofollow'>-7, -56, -5, -2]</code>. The returned value would be <code>0</code>, which is not even present in the Array <code>arr</code>.</p>\n<p>Instead, we should pick the lowest possible value for initial value.</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>var arr = [-20, -50, -5, -60];\narr.reduce(function(acc, item){\n  return Math.max(acc, item);\n}, -Infinity);</code></pre>\n      </div>\n<p>We are getting there. We should hone our skills on another Array related problem. Just to have some fun, let’s go with a bit tougher one.</p>\n<p>Say, we are to find [LCM</a> of an Array of integers. Now, from theory, we know that LCM of two numbers would be product of them, divided by their <a href='https://en.wikipedia.org/wiki/Greatest_common_divisor' target='_blank' rel='nofollow'>HCF</a>.</p>\n<p>Eucledian algorithm for HCF finding exists; and abundant are its implementation. No point wasting your time making you write an HCF function when you can write one yourself, or find one.</p>\n<p>Rather, let’s look at how to extend LCM of two numbers into LCM of multiple numbers. Newsflash - it’s not product of entire array divided by their HCF. Nope. That would be mathematically wrong.</p>\n<p>LCM of three numbers would be LCM of first two numbers; then LCM of the first LCM with the remaining number. Similarly, you can formulate a strategy to find out LCM of sub-array first, then take another number and find its LCM with the first LCM.</p>\n<p>So, how do we formulate the solution? We need to think of <code>acc</code> in the middle of an iteration. The final <code>acc</code> should be the LCM of the entire array, no doubt. But during the <code>nth</code> iteration also; <code>acc</code> should hold the LCM of the <code>(n-1)</code> elements traversed so far.</p>\n<p>And yes, the initial value. It should be a number, whose LCM with another number would be the other number. Clearly, it is <code>1</code>.</p>\n<p>Let’s write our <code>reduce</code> solution.</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>var arr = <a href='http://www.freecodecamp.com/challenges/symmetric-difference' target='_blank' rel='nofollow'>1, 2, 3, 4, 5, 6];\narr.reduce(function(acc, item){\n  return acc * item / hcf(acc, item);\n}, 1);</code></pre>\n      </div>\n<p>I am assuming an <code>hcf()</code> function is available in the environment. I picked the entries in a way; it should return <code>60</code> as answer.</p>\n<h2>More Reduce</h2>\n<p>Reduce is not just a function to provide you with utilities to solve some Mathy problems like sum of the array, hcf of the array, minimum of the array etc.</p>\n<p>It is perfectly capable of going above and beyond. We shall be dealing with some complex examples for now.</p>\n<p>Say, you wish to flatten nested arrays. And yes, before you start jumping up-and-down in your seat - the nesting could be any arbitrary level deep.</p>\n<p>For instance, we could take this Array to test our code with.</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>var arr = [[1, 2, 3], ['cat', 'dog', ['fish', 'bird'], [[[]]]]];</code></pre>\n      </div>\n<p>This looks sufficiently complex to begin with - nested arrays, empty nested arrays with varying depth.</p>\n<p>The output should be <code>[1, 2, 3, 'cat', 'dog', 'fish', 'bird']</code></p>\n<p>It’s time to formulate a strategy. We clearly need to distinguish between an array and an element. Also, <code>acc</code> should be the array being formed throughout the iteration; meaning the initial value would be an empty array <code>[]</code>.</p>\n<p>Throughout the callback function code, we would simply extract the content from the <code>item</code>, which can be a deeply nested array; and we would <a><code>Array.prototype.concat()</code></a> it with the <code>acc</code> value. It’s better to use <code>concat()</code> over <a><code>Array.prototype.push()</code></a>; because <code>push()</code> alters the original array; while <code>concat()</code> creates a new array and returns it.</p>\n<p>And since we don’t know the level of nesting at any given instant; we must go call our custom callback recursively. Meaning, we have to write it somewhere else and call it by name inside <code>reduce()</code>.</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>var arr = [[1, 2, 3], ['cat', 'dog', ['fish', 'bird'], [[[]]]]];\n\nfunction flattenArray(arr) {\n  return arr.reduce(function(acc, item){\n    if(Array.isArray(item)){\n      return acc.concat(flattenArray(item)); // recursively call to flatten nested array\n    return acc.concat(item); // this does the ordering. If you want reverse ordered output, just reverse it!\n  }, [])\n\n}\n\n// call it like this\nflattenArray(arr);</code></pre>\n      </div>\n<p>Of course, this requires some background in recursive functions; but that’s not too difficult to pick up, compared to the matter of this long one!</p>\n<p>Yes, go ahead and play with it. But notice how we can simply write 3-4 lines of clean functions keeping a few simple guidelines in mind - and do something as complex as that reliably. This is readable and maintainable.</p>\n<p>For instance, if you want to alter or tweak the logic the logic later (Say you want to upper case some string or encode some string); you can easily identify where to alter. The actual nesting happens inside the <code>if</code> condition. And the way we have used the <code>reduce</code> call there - it maintains the order of elements as they are in the array.</p>\n<p>Let’s take another seemingly complex example, and bring it to its knees weilding the sword of <code>reduce</code>!</p>\n<p>We are to find out the [symmetrical differences</a> of two or more arrays. It looks daunting; but then you start to think.</p>\n<p>What would the initial value be? Of course, we are forming an array; so it would be an empty array <code>&#x3C;a href='https://github.com/reactjs/redux' target='_blank' rel='nofollow'>]</code> to begin with. Then there’s the <code>acc</code> - since our final solution would contain a diff-ed array; it would have to be an array too. This would keep piling on the symmetric differences of the arrays encountered so far.</p>\n<p>Just to be clear, this function could accept arbitrary number of arrays; so, we have to convert them all to an array of arrays for easy manipulation.</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>function symDiff(args){\n  // convert args to an Array\n  var argsArray = Array.prototype.slice.call(arguments);\n\n  // now do the reduce magic!\n  argsArray.reduce(function(acc, item){\n    return acc\n      .filter(function(itemInAcc){\n        return item.indexOf(itemInAcc) === -1;\n      })\n      .concat(item.filter(function(itemInItem){\n        return acc.indexOf(itemInItem) === -1;\n      }));\n  }. []);\n}</code></pre>\n      </div>\n<p>Yes, I know. It looks big. So, let’s see if we can refactor to make it small. Notice that both the <code>filter</code> functions do same work; except with altered set of argument pairs. Cool! Let’s create a separate function and call it twice with those arguments.</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>function symDiff(args){\n  // convert args to an Array\n  var argsArray = Array.prototype.slice.call(arguments);\n\n  // now do the reduce magic!\n  argsArray.reduce(function(acc, item){\n    var funWithFiltering = function(arr1, arr2){\n      return arr1.filter(function(itemInArr1){\n        return arr2.indexOf(itemInArr1) === -1;\n      });\n    };\n\n    return funWithFiltering(acc, item).concat(funWithFiltering(item, acc));\n  }. []);\n}</code></pre>\n      </div>\n<p>This looks better. But there is still one other problem. This would keep duplicates in the array. If that is not needed, we could just as easily write another function using <code>reduce</code> to remove the duplicates.</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>function removeDuplicates(arr){\n  arr.filter(item, index, self){\n    // Keep only the first instance of the array, as given by indexOf()\n    // Remove other elements from Array\n    return self.indexOf(item) === index;\n  }\n}</code></pre>\n      </div>\n<p>We cannot keep on ignoring this any longer. I have been using <code>filter</code> while promising to use <code>reduce</code>, right? The reason is simple - <code>filter</code> can be written with <code>reduce</code>. In fact, any array operation, in theory; can be implemented with <code>reduce()</code>.</p>\n<p>Do give it a try! Implement <code>map</code> and <code>filter</code> with <code>reduce</code>. You have to take care of optional arguments too.</p>\n<h2>Wrapping up</h2>\n<p>Whoa that was quite a lot! But I think I have made a strong case of using <code>reduce</code> whenever you want to use a loop to get it done. Be habituated with it like its your first nature.</p>\n<p>As soon as you get a problem on some String transformation or Array manipuation; start by writing</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>return arr.reduce(function(acc, item){_}, _);</code></pre>\n      </div>\n<p>And then fill in the blanks. When you are using <code>reduce()</code>, you are thinking in terms of interaction of every element with another element. You are forming the output by acculumating it from start to finish.</p>\n<p>The framework [Redux</a> embraces the <code>reduce</code> principle and is gaining high popularity in web design.</p>\n<p>Also notice another salient feature - <code>reduce</code> forces or guides you to form your solution without altering anything existing. For instance, in the last example; we were filtering and concatenating - but we knew it would work as is; because the first set of operation did not change any of the <code>acc</code> or <code>item</code> within that iteration.</p>\n<p>This would be a great time to level with you, that, the <code>initialValue</code> parameter is <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Parameters' target='_blank' rel='nofollow'>optional</a>. You don’t need to provide it explicitly.</p>\n<p>If you omit this; for the first iteration <code>acc</code> would be the first item in the array, and <code>item</code> would be the second item in the array. This would mean we can write a sum of array utility just omitting it. Or, we don’t need to think of <code>-Infinity</code> in case of finding maximum value in array - it would work just fine if we remove the initial value.</p>\n<p>But in some complex situations, it would be better to visualize and formulate the solution in terms of some base - some initialization. However, if you are more comfortable without it, to each his own!</p>\n<p>If you have any further questions or suggestions, come join our <a href='https://gitter.im/FreeCodeCamp/FreeCodeCamp' target='_blank' rel='nofollow'>gitter chatroom</a>; and tell us how you <code>reduce</code>!</p>",fields:{slug:"/miscellaneous/using-arrayprototypereduce-to-reduce-conceptual-boilerplate-for-problems-on-arrays/"},frontmatter:{title:"Using Arrayprototypereduce to Reduce Conceptual Boilerplate for Problems on Arrays"}}},pathContext:{slug:"/miscellaneous/using-arrayprototypereduce-to-reduce-conceptual-boilerplate-for-problems-on-arrays/"}}}});
//# sourceMappingURL=path---miscellaneous-using-arrayprototypereduce-to-reduce-conceptual-boilerplate-for-problems-on-arrays-b181b93e39203307d5f8.js.map