webpackJsonp([0x670bb9e33736],{4e3:function(n,a){n.exports={data:{markdownRemark:{html:'<h2>Navigation Bars</h2>\n<p>Navigation bars are a very important element to any website. They provide the main method of navigation by providing a main list of links to a user. There are many methods to creating a navigation bar. The easiest way to create a navigation bar is to use an unordered list and style it with CSS.</p>\n<p><strong>Example:</strong></p>\n<p>There are two parts to any navigation: the HTML and the CSS. This is just a quick example.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>myNav<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>                                 <span class="token comment" spellcheck="true">&lt;!-- Any element can be used here --></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>index.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>about.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>About<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>contact.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Contact<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token comment" spellcheck="true">/* Define the main Navigation block */</span>\n<span class="token selector">.myNav</span> <span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>\n    <span class="token property">line-height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment" spellcheck="true">/* Remove bullets, margin and padding */</span>\n<span class="token selector">.myNav ul</span> <span class="token punctuation">{</span>\n    <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.myNav li</span> <span class="token punctuation">{</span>\n    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">/* Or you can use display: inline; */</span>\n<span class="token punctuation">}</span>\n<span class="token comment" spellcheck="true">/* Define the block styling for the links */</span>\n<span class="token selector">.myNav li a</span> <span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>\n    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 14px 16px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment" spellcheck="true">/* This is optional, however if you want to display the active link differently apply a background to it */</span>\n<span class="token selector">.myNav li a.active</span> <span class="token punctuation">{</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> #3786E1<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->\n<h4>More Information:</h4>\n<!-- Please add any articles you think might be helpful to read before writing the article -->\n<p>More Navigation Examples: <a href="https://www.w3schools.com/css/css_navbar.asp">W3Schools</a></p>',fields:{slug:"/css/navigation-bars/"},frontmatter:{title:"Navigation Bars"}}},pathContext:{slug:"/css/navigation-bars/"}}}});
//# sourceMappingURL=path---css-navigation-bars-643b77a79da6aa1b4d9d.js.map