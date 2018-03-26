webpackJsonp([46824202579162],{3558:function(n,a){n.exports={data:{markdownRemark:{html:'<h2>Canvas Dimensions</h2>\n<p>The <code>width</code> and <code>height</code> attributes will control the size of the canvas. These attributes control the size of the drawing canvas, not the actual rendered size.</p>\n<p data-height="265" data-theme-id="0" data-slug-hash="jLWMmM" data-default-tab="js,result" data-user="alanluo" data-embed-version="2" data-pen-title="Canvas dimensions demo" class="codepen">See the Pen <a href="https://codepen.io/alanluo/pen/jLWMmM/">Canvas dimensions demo</a> by Alan Luo (<a href="https://codepen.io/alanluo">@alanluo</a>) on <a href="https://codepen.io">CodePen</a>.</p>\n<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>\n<p>In the above pen, both <code>canvas</code> elements have the same dimensions set through CSS. However, one has twice the height set through the <code>height</code> attribute, thus leading the exact same rectangle to become rendered at half the height.</p>\n<p>This can cause problems when you want to make a dynamically sized canvas. For instnace, you may want to make a full-screen canvas, or use a canvas as a thumbnail.</p>\n<p>In order to make the size of the drawing context match the rendered size of the <code>canvas</code> element, we have to force this in realtime. One common practice is to put the following handler in the <code>onResize</code> listener.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">// somewhere early in the script</span>\n<span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">...</span>\n\nwindow<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"resize"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    canvas<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">"width"</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>scrollWidth<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    canvas<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">"height"</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>scrollHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>canvas<span class="token punctuation">.</span>offsetWidth<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4>More Information:</h4>\n<ul>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">MDN Canvas API</a></li>\n</ul>',fields:{slug:"/canvas/canvas-dimensions/"},frontmatter:{title:"Canvas Dimensions"}}},pathContext:{slug:"/canvas/canvas-dimensions/"}}}});
//# sourceMappingURL=path---canvas-canvas-dimensions-c85c148a7e280c3d2830.js.map