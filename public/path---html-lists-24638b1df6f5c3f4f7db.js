webpackJsonp([0xbdd54a850e40],{4318:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Lists</h2>\n<p>Lists are used to display multiple items. There are 3 types of lists.</p>\n<h4>Unordered and ordered lists</h4>\n<p>Ordered lists are numbered lists. You create an ordered list using the <code>&#x3C;ol></code> tag.\nUnordered lists are bulleted lists. You create an unordered list using the <code>&#x3C;ul></code> tag.</p>\n<p>Within the <code>&#x3C;ol></code> or <code>&#x3C;ul></code> tags, you need to put the items in the list. You add them using a <code>&#x3C;li></code> tag. Here is an example of an unordered list with items:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Item 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Item 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Item 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>This would display as:</p>\n<ul>\n<li>Item 1</li>\n<li>Item 2</li>\n<li>Item 3</li>\n</ul>\n<p>An ordered list would display as:</p>\n<ol>\n<li>Item 1</li>\n<li>Item 2</li>\n<li>Item 3</li>\n</ol>\n<p>Lists can also be easily nested within each other, for example:</p>\n<ol>\n  <li>Blue</li>\n    <ul>\n      <li>Indigo</li>\n      <li>Aqua</li>\n    </ul>\n  <li>Red</li>\n    <ul>\n      <li>Burgundy</li>\n      <li>Maroon</li>\n    </ul>\n  </ol>\n<h3>Different markers</h3>\n<p>You can use <code>&#x3C;ol type=""></code> or <code>&#x3C;li type=""></code> to specify the kind of marker to use in the list</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>a<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Item 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Item 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Item 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>This would display as: </p>\n<p>a. Item 1 </p>\n<p>b. Item 2 </p>\n<p>c. Item 3</p>\n<h4>Description lists</h4>\n<p>A description list is a list of terms, with a description of each term. A description list is made using the <code>&#x3C;dl></code> tag.\nEach item in the list is made up of two tags: a term (<code>&#x3C;dt></code>), and a description of that term (<code>&#x3C;dd></code>).</p>\n<p>Here is an example of a description list:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">></span></span>Programming<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span>The process of writing computer programs.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">></span></span>freeCodeCamp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span>An awesome non-profit orgainzation teaching people how to code.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Which would end up looking like so:</p>\n<dl>\n  <dt>Programming</dt>\n  <dd>The process of writing computer programs.</dd>\n  <dt>freeCodeCamp</dt>\n  <dd>An awesome non-profit orgainzation teaching people how to code.</dd>\n</dl>\n<h4>More Information:</h4>\n<!-- Please add any articles you think might be helpful to read before writing the article -->\n<ul>\n<li><a href="https://www.w3schools.com/html/html_lists.asp">HTML lists on w3schools</a></li>\n</ul>',fields:{slug:"/html/lists/"},frontmatter:{title:"Lists"}}},pathContext:{slug:"/html/lists/"}}}});
//# sourceMappingURL=path---html-lists-24638b1df6f5c3f4f7db.js.map