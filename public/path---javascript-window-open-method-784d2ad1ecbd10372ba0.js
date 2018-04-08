webpackJsonp([50854741948349],{4817:function(n,e){n.exports={data:{markdownRemark:{html:'<h2>Window Open Method</h2>\n<p>The Window <code>open()</code> method can be used to load a specified resource into the browsing context (window or tab) with the specified name. If such name doesn’t exist, then a new window is created and the resource is loaded into its context.</p>\n<h2>Prameters</h2>\n<p><code>url</code>\n<br>\nA DOMString indicating the resource to be loaded. This can be a path or URL to any resource which is supported by the browser.</p>\n<p><code>windowName</code>\n<br>\nA DOMString specifying the name of the browsing context (window or tab) into which the content will be loaded; if the name doesn’t indicate an existing context, a new window is created and is given the name specified by windowName. This name can then be used as the target of links and forms by specifying it as the target attribute.</p>\n<p><code>windowFeatures</code> <code>optional</code>\n<br>\nA DOMString containing a comma-separated list of window features given with their corresponding values in the form “name=value”. These features include options such as the window’s default size and position etc.</p>\n<h2>Syntax</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>  <span class="token keyword">var</span> window <span class="token operator">=</span>  window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> windowName<span class="token punctuation">,</span> <span class="token punctuation">[</span>windowFeatures<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>Example</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> windowObjectReference<span class="token punctuation">;</span>\n<span class="token keyword">var</span> strWindowFeatures <span class="token operator">=</span> <span class="token string">"menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">openRequestedPopup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  windowObjectReference <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"http://www.cnn.com/"</span><span class="token punctuation">,</span> <span class="token string">"CNN_WindowName"</span><span class="token punctuation">,</span> strWindowFeatures<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<br>\nIf a window with the name already exists, then strURL is loaded into the existing window. In this case the return value of the method is the existing window and strWindowFeatures is ignored.\n<h4>More Information:</h4>\n<p><a href=\'https://developer.mozilla.org/en-US/docs/Web/API/Window/open\' target=\'_blank\' rel=\'nofollow\'>MDN Docs</a></p>',fields:{slug:"/javascript/window-open-method/"},frontmatter:{title:"Window Open Method"}}},pathContext:{slug:"/javascript/window-open-method/"}}}});
//# sourceMappingURL=path---javascript-window-open-method-784d2ad1ecbd10372ba0.js.map