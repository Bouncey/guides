webpackJsonp([0xf323822940c],{4667:function(e,t){e.exports={data:{markdownRemark:{html:'<h1>Object Is</h1>\n<h2>Description</h2>\n<p>The <code>object.is()</code> method is used to determine if two values are the same value. This method was introduced in ES6.</p>\n<h2>Syntax</h2>\n<p><code>Object.is(val1, val2)</code></p>\n<h3>Parameters</h3>\n<p><strong>val1</strong> - first value to compare</p>\n<p><strong>val2</strong> - second value to compare</p>\n<h2>Return value</h2>\n<p>A <a href="https://guide.freecodecamp.org/javascript/booleans">Boolean</a> indicating whether the two arguments have the same value</p>\n<h2>Description</h2>\n<p><code>Object.is()</code> compares two values for sameness, returning <code>true</code> if both values meet one of the following conditions:</p>\n<ul>\n<li><code>undefined</code></li>\n<li><code>null</code></li>\n<li>Both <code>true</code> or both <code>false</code></li>\n<li>String of the same length and same characters</li>\n<li>Same object</li>\n<li>\n<p>Both numbers and:</p>\n<ul>\n<li>Both <code>+0</code> or both <code>-0</code> </li>\n<li>Both <code>NaN</code></li>\n<li>or both a number that is not zero and not <code>NaN</code></li>\n</ul>\n</li>\n</ul>\n<h2>Examples</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Object.is(\'string\', \'string\'); // true\nObject.is(undefined, undefined); // true\nObject.is(null, null); // true\n\nObject.is(\'string, \'word\'); // false\nObject.is(true, false); // false\nObject.is([], []); //false  \n\nvar obj = {name: Jane};\nObject.is(obj, obj); // true\n\nObject.is(NaN, NaN); // true\n\nObject.is(+0, -0); // false\nObject.is(-0, -0); // true</code></pre>\n      </div>\n<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->\n<h4>More Information:</h4>\n<!-- Please add any articles you think might be helpful to read before writing the article -->\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is">Object.is() MDN Web Docs</a>\n<br>\n<a href="https://guide.freecodecamp.org/certificates/comparison-with-the-strict-equality-operator">Strict equality operator <code>===</code></a></p>',fields:{slug:"/javascript/standard-objects/object/object-is/"},frontmatter:{title:"Object Is"}}},pathContext:{slug:"/javascript/standard-objects/object/object-is/"}}}});
//# sourceMappingURL=path---javascript-standard-objects-object-object-is-6baa5833de41d0c9f3d1.js.map