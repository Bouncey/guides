webpackJsonp([0xaa6192ae01b2],{4434:function(e,t){e.exports={data:{markdownRemark:{html:'<h2>Regular Expressions Reference</h2>\n<p>In JavaScript, regular expressions are a shorthand used to match the desired part of a string. These are beneficial when trying to manipulate or validate strings used in your code.</p>\n<h3>Syntax</h3>\n<p>Regular expressions are made up of two parts - the <code>pattern</code> and the <code>flags</code> (optional). The pattern is written between two forward slashes, followed by the optional flags: <code>var exp = /pattern/flags</code>.</p>\n<h4>Patterns</h4>\n<p>The use of alphanumeric (A-Z, a-z, 0-9) characters makes for a straightforward match. However, the real power of regular expressions comes with character classes. </p>\n<p>Say, for example, you want to all the places a string that has a number from 0-9. Rather than explicitly calling out <code>/[0-9]/</code>, you can use the special character class of <code>/\\d/</code>. The backslash escapes the <code>d</code> character (so don’t match the letter <code>d</code>), but instead uses the special matching abilities of <code>\\d</code>.</p>\n<p>This same principle applies to non-numeric characters, white space, and other broad matching groups. Regular expressions can become even more sophisticated with the use of certain modifiers, such as the <code>+</code> character.</p>\n<p>This quantifier allows you to match the preceding character in your pattern one or more times. <code>/s+/</code> would match the <code>s</code> in <code>desert</code> and both <code>s</code>’s in <code>dessert</code>!</p>\n<p>There are plenty more modifiers that allow your pattern to match whatever you might need. See the More Information section below to see all the possible character options for use in regular expressions.</p>\n<h4>Flags</h4>\n<p>There are 5 flags you can use to apply specific rules to the whole regular expression you are writing. They are:</p>\n<p><code>g</code> - the global match; this allows you to match all instances of your expression, rather than stopping after the first occurrence. </p>\n<p><code>i</code> - the ignore case match (self-explanatory)</p>\n<p><code>m</code> - the multi-line match; this applies your pattern to each line as new; if you are searching for a line that starts with a particular pattern, this does so for all lines, rather than just the first one</p>\n<p><code>u</code> - the Unicode match; this signals to read your pattern as Unicode rather than plain text</p>\n<p><code>y</code> - the sticky match; this matches your pattern only starting at the index found in the <code>RegExp.lastIndex</code> property</p>\n<h3>Creating a regular expression</h3>\n<p>A regular expression is a type of object. It can either be constructed\nwith the RegExp constructor or written as a literal value by enclosing the\npattern in forward slash ( / ) characters.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>var re1 = new RegExp (" abc ") ;\nvar re2 = / abc /;</code></pre>\n      </div>\n<p>Both of these regular expression objects represent the same pattern: an\na character followed by a b followed by a c.</p>\n<h3>The RegExp Object</h3>\n<p><code>RegExp</code> is a constructor that creates an object from the regular expression pattern you create. In addition to the literal notation described above, you can also use the constructor format to create a regular expression: <code>new RegExp(pattern[, flags])</code></p>\n<h3>Testing for matches</h3>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>console . log (/ abc /. test (" abcde ") );\n// → true\nconsole . log (/ abc /. test (" abxde ") );\n// → false</code></pre>\n      </div>\n<h3>Matching a set of characters</h3>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>console . log (/[0123456789]/. test (" in 1992") );\n// → true\nconsole . log (/[0 -9]/. test (" in 1992") );\n// → true</code></pre>\n      </div>\n<h3>Choice patterns</h3>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>var animalCount = /\\ b \\ d + ( pig | cow | chicken )s ?\\ b /;\nconsole . log ( animalCount . test ("15 pigs ") );\n// → true\nconsole . log ( animalCount . test ("15 pigchickens ") );\n// → false</code></pre>\n      </div>\n<h4>Methods</h4>\n<p>You will most likely use regular expressions in <code>String</code> methods, such as <code>String.replace()</code>, but there are a handful of methods that belong to the <code>RegExp</code> object.</p>\n<p>For example, <code>RegExp.test()</code> will return a Boolean for whether there exists a match between the regular expression pattern and the string in question. <code>RegExp.toString()</code> will turn the expression object into a string, which can be handy when running tests on your code.</p>\n<p>The first argument can also be a regular expression, in which case thefirst match of the regular expression is replaced. When a g option (for global) is added to the regular expression, all matches in the string will be replaced, not just the first.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>console . log (" Borobudur ". replace (/[ ou ]/ , "a ") );\n// → Barobudur\nconsole . log (" Borobudur ". replace (/[ ou ]/g , "a ") );\n// → Barabadar</code></pre>\n      </div>\n<h3>More Information:</h3>\n<ul>\n<li>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp" target=\'_blank\' rel=\'nofollow\'>Here you can read</a> about all the pattern match characters, object properties, see some examples and more.</p>\n</li>\n<li>\n<p><a href="https://regex101.com/" target=\'_blank\' rel=\'nofollow\'>Here is a great site</a> that lets you test out regular expression patterns in real-time, save your favorites and explore patterns made by others.</p>\n</li>\n</ul>',fields:{slug:"/javascript/regular-expressions-reference/"},frontmatter:{title:"Regular Expressions Reference"}}},pathContext:{slug:"/javascript/regular-expressions-reference/"}}}});
//# sourceMappingURL=path---javascript-regular-expressions-reference-cf50fde95dfb32b53375.js.map