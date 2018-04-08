webpackJsonp([0xd191c0433eca],{3958:function(s,a){s.exports={data:{markdownRemark:{html:'<h2>CSS3 Border Radius Property</h2>\n<p>With CSS3, you can give any element “rounded corners”, by using the <code>border-radius</code> property. The value can be in any valid CSS length unit.</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code>  <span class="token selector">.rounded-corners</span> <span class="token punctuation">{</span>\n    <span class="token property">border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector">.circle</span> <span class="token punctuation">{</span>\n    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><img src="https://github.com/kaithrendyle/guide-photos/blob/master/rounded-circle.png?raw=true" alt="examples"></p>\n<p><strong>Note:</strong> The <code>border-radius</code> property is actually a shorthand property for the <code>border-top-left-radius</code>, <code>border-top-right-radius</code>, <code>border-bottom-right-radius</code> and <code>border-bottom-left-radius</code> properties. </p>\n<p>If just one value provided, the border-radius will be the same for all four corners, as in the examples above. But you also have the option to specify different values for each corner.  </p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">.new-shape</span> <span class="token punctuation">{</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> 20px 50px 5px 0<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">/* top left, top right, bottom right, bottom left */</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>If only two values are provided, the first value applies to the top-left and bottom-right corner, and the second value applies to the top-right and bottom-left corner.</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">.leaf-shape</span> <span class="token punctuation">{</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0 50%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>If three values are set, the first again applies to the top-left radius, the second value indicates top-right and bottom-left, leaving the third value to indicate the bottom-right corner.</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">.odd-shape</span> <span class="token punctuation">{</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0 20px 50%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><img src="https://github.com/kaithrendyle/guide-photos/blob/master/odd-shapes.png?raw=true" alt="examples"></p>\n<p>The rounding of a corner does not have to be perfectly symmetrical. You may specify both the horizontal and vertical radiuses using a slash (”/”) to achieve a corner with an elliptical shape.</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">.elliptical-1</span> <span class="token punctuation">{</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50px/10px<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">/* horizontal radius / vertical radius */</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.elliptical-2</span> <span class="token punctuation">{</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px/50px<span class="token punctuation">;</span> \n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><img src="https://github.com/kaithrendyle/guide-photos/blob/master/elliptical-basic.png?raw=true" alt="examples"></p>\n<p>Since only one pair of values is given in the above examples, all four corners are the same. But, of course, if you want a more complex shape, you may supply up to four values for the horizontal radiuses and four for the vertical radiuses.</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">.elliptical-3</span> <span class="token punctuation">{</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50px 20px 50px 20px/20px 50px 20px 50px<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">/* horizontal top-left, horizontal top-right, horizontal bottom-right, horizontal bottom-left / vertical top-left, vertical top-right, vertical bottom-right, vertical bottom-left */</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Notice how the shorthand above produces the same result as specifying individual properties below. Be aware that when corners are set individually the values are space-separated instead of slash-separated.</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">.elliptical-4</span> <span class="token punctuation">{</span>\n  <span class="token property">border-top-left-radius</span><span class="token punctuation">:</span> 50px 20px<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">/* horizontal radius, vertical radius */</span>\n  <span class="token property">border-top-right-radius</span><span class="token punctuation">:</span> 20px 50px<span class="token punctuation">;</span>\n  <span class="token property">border-bottom-right-radius</span><span class="token punctuation">:</span> 50px 20px<span class="token punctuation">;</span>\n  <span class="token property">border-bottom-left-radius</span><span class="token punctuation">:</span> 20px 50px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><img src="https://github.com/kaithrendyle/guide-photos/blob/master/elliptical-advance.png?raw=true" alt="examples"></p>\n<h3>More Information:</h3>\n<ul>\n<li>CSS Tricks : <a href=\'https://css-tricks.com/almanac/properties/b/border-radius/\' target=\'_blank\' rel=\'nofollow\'>CSS Tricks</a></li>\n<li>MDN Documentation: <a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius\' target=\'_blank\' rel=\'nofollow\'>MDN</a></li>\n<li>Browser Support: <a href=\'http://caniuse.com/#search=border-radius\' target=\'_blank\' rel=\'nofollow\'>caniuse</a></li>\n</ul>',fields:{slug:"/css/css3-borders-rounded-corners/"},frontmatter:{title:"CSS3 Border Radius Property"}}},pathContext:{slug:"/css/css3-borders-rounded-corners/"}}}});
//# sourceMappingURL=path---css-css-3-borders-rounded-corners-0ee55a604ab6523fb748.js.map