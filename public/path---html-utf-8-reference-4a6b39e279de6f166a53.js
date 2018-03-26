webpackJsonp([0xb8e8ddd9df29],{4333:function(e,a){e.exports={data:{markdownRemark:{html:'<h2>UTF 8 Reference</h2>\n<p>UTF 8 is an encoding scheme used to translate the characters we see on screens into numbers computers can store. Specifying a character encoding like UTF8 will allow the browser to properly display advanced characters like accented letters and emoji.</p>\n<p>In HTML documents, you can specify the character encoding on the page by placing this meta tag in the <code>head</code> tag of your HTML page: <code>&#x3C;meta charset="UTF-8"></code>. UTF 8 is the standard encoding.</p>\n<p>The <a href="https://www.unicode.org/">Unicode</a> standard was developed in order to accomodate the characters used in languages across the world. </p>\n<p>But wait! What does Unicode have to do with UTF 8? UTF 8 is the encoding scheme but it is important to understand Unicode is the character set definition. In plain speak what this means is Unicode defines a unique number - called a code point - for many major characters used in languages across the world and UTF 8 will translate (aka encode) the character into computer-friendly binary format. <sup>1</sup> Here is an example:</p>\n<ol>\n<li>\n<p>You want to mention freeCodeCamp somewhere in your web page (because, you know, freeCodeCamp is 🔥 🔥 🔥).</p>\n</li>\n<li>\n<p>The character code points to spell freeCodeCamp as defined in Unicode are:   </p>\n<p>   | f | r | e | e | C | o | d | e | C | a | m | p |\n| :---: |  :---: |  :---: |  :---: |  :---: |  :---: |  :---: |  :---: |  :---: |  :---: |  :---: |  :---: |\n|102| 114| 101| 101|  67| 111| 100| 101|  67|  97| 109| 112|</p>\n</li>\n<li>\n<p>UTF 8 translates the code points to binary: 1100110 1110010 1100101 1100101 1000011 1101111 1100100 1100101 1000011 1100001 1101101 1110000  </p>\n</li>\n</ol>\n<h3>How to use UTF-8 In Your Webpage</h3>\n<p>Specify a meta tag with a charset of UTF 8 in your head tag.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h4>More Information:</h4>\n<!-- Please add any articles you think might be helpful to read before writing the article -->\n<ul>\n<li><a href="https://www.unicode.org/charts/index.html">Unicode Character Code Charts</a></li>\n<li><a href="https://www.w3schools.com/charsets/ref_html_utf8.asp">HTML Unicode Reference</a></li>\n</ul>',fields:{slug:"/html/utf-8-reference/"},frontmatter:{title:"UTF 8 Reference"}}},pathContext:{slug:"/html/utf-8-reference/"}}}});
//# sourceMappingURL=path---html-utf-8-reference-4a6b39e279de6f166a53.js.map