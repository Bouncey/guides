webpackJsonp([29532384194485],{4717:function(e,t){e.exports={data:{markdownRemark:{html:"<p>The <code>length</code> property represents the length of a string.</p>\n<h2>Syntax</h2>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>str.length</code></pre>\n      </div>\n<p><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length' target='_blank' rel='nofollow'>MDN link</a> | <a href='https://msdn.microsoft.com/en-us/LIBRary/3d616214%28v=vs.94%29.aspx' target='_blank' rel='nofollow'>MSDN link</a></p>\n<h2>Description</h2>\n<p>This property returns the number of code units in the string. UTF-16, the string format used by JavaScript, uses a single 16-bit code unit to represent the most common characters, but needs to use two code units for less commonly-used characters, so it’s possible for the value returned by length to not match the actual number of characters in the string.</p>\n<p>For an empty string, length is 0.</p>\n<p>The static property <code>String.length</code> returns the value 1.</p>\n<h2>Examples</h2>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>var x = 'Mozilla';\nvar empty = '';\n\nconsole.log('Mozilla is ' + x.length + ' code units long');\n/* \"Mozilla is 7 code units long\" */\n\nconsole.log('The empty string has a length of ' + empty.length);\n/* \"The empty string has a length of 0\" */\n\nvar str = \"every good boy does fine\";\n        var start = 0;\n        var end = str.length - 1;\n        var tmp = \"\";\n        var arr = new Array(end);\n\n        while (end >= 0) {\n            arr[start++] = str.charAt(end--);\n        }\n\n// Join the elements of the array with a \n        var str2 = arr.join('');\n        document.write(str2);\n\n// Output: enif seod yob doog yreve</code></pre>\n      </div>",fields:{slug:"/javascript/standard-objects/string/string-length/"},frontmatter:{title:"String Length"}}},pathContext:{slug:"/javascript/standard-objects/string/string-length/"}}}});
//# sourceMappingURL=path---javascript-standard-objects-string-string-length-685d45365674037ad49e.js.map