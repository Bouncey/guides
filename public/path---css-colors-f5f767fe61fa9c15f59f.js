webpackJsonp([0x769c01d2a290],{3948:function(e,a){e.exports={data:{markdownRemark:{html:'<h2>Colors</h2>\n<p>CSS Colors is a CSS module that deals with colors, color types, color blending, and opacity. Not all CSS properties that take a <color> as a value are part of this module, but they do depend upon it. In CSS, you can change the color of almost any element in your HTML page. Properties like <code>background-color</code>, <code>color</code>, and <code>border-color</code> set the color of those elements.</p>\n<p>CSS supports color names, hexadecimal and RGB colors.\nAs well as introducing the <code>opacity</code> declaration, colors in CSS3 can now be specified using color names, or RGB, HEX, HSL, RGBA, HSLA values.</p>\n<p>HTML supports 140 standard <a href=\'https://www.w3schools.com/colors/colors_names.asp\' target=\'_blank\' rel=\'nofollow\'>color names</a>.</p>\n<h3>RGB(A)</h3>\n<p>RGB stands for “Red, Green, Blue”.\nAn RGB value is a combination of intensity values for red, green, and blue. Each is between 0 (black) and 255 (full intensity).\nRGBA color values are an extension of RGB color values with an alpha channel - which specifies the opacity for a color. The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).</p>\n<p>An RGB color value is specified with: rgb(red, green, blue)\nAn RGBA color value is similar, with the alpha value in last position: rgba(red, green, blue, alpha)</p>\n<h3>HSL(A)</h3>\n<p>HSL stands for “Hue, Saturation and Lightness”.\nHue is a degree on the color wheel (from 0 to 360):\n0 (or 360) is red\n120 is green\n240 is blue\nSaturation is a percentage value: 100% is the full color.\nLightness is also a percentage; 0% is dark (black) and 100% is white.\nHSLA color values are an extension of HSL color values with an alpha channel - which specifies the opacity for a color.</p>\n<p>An HSL color value is specified with: hsl(hue, saturation, lightness).\nAn HSLA color value is similar, with the alpha value in last position: hsla(hue, saturation, lightness, alpha)\n</p>\n<h3>Hexcodes</h3>\n<p>Hexcode, short for hexadecimal code, is a way to express a color value to your computer. It is named this way because 16 unique symbols can be used as values. In this case, the numbers 0 to 9 and letters a to f are used.</p>\n<p>Hex codes are expressed in this format: #000000, which would be the color black in this instance. Six characters are used in each hexcode, using any of the 16 characters mentioned previously. These six characters are divided into three pairs of two.</p>\n<p>These three pairs each express a value for the amount of red, green and blue in a particular color. Taking the hexcode color #AA11BB, AA is the amount of red, 11 the amount of green, and BB the amount of blue. 0 is the lowest value of a color while f is the highest value.</p>\n<p>Hex codes are case insensitive, meaning that #FFFFFF and #ffffff would be the same color: white.</p>\n<p>Additionally, there are 16,777,216 possible color combinations using hexcode.</p>\n<h3>Opacity</h3>\n<p>The CSS3 opacity property sets the opacity for the whole element (both background color and text will be opaque/transparent). Unlike alpha values specified with rgba and hsla, opacity is inherited by child elements.</p>\n<p>The opacity property value must be a number between 0.0 (fully transparent) and 1.0 (fully opaque).</p>\n<h4>Examples</h4>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Hello Moto<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>In the above example, the <code>background-color: green</code> turns the <code>&#x3C;body></code> element green. This turns the whole web page green. The <code>&#x3C;p></code> elements are all white after <code>color: white</code> too.\nYou can use named colors, like <code>green</code>, <code>blue</code>, <code>yellow</code>, <code>red</code>, <code>purple</code>, and many others. But for custom colors, you can use hex codes (<code>#147ACC</code>), RGB values (<code>rgb(20, 122, 204)</code>), and even HSL values (<code>hsl(145, 59%, 30%)</code>).</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>244, 145, 14, 0.80<span class="token punctuation">)</span><span class="token punctuation">;</span> // bright orange\n<span class="token punctuation">}</span>\n\n<span class="token selector">h2</span> <span class="token punctuation">{</span>\n <span class="token property">color</span><span class="token punctuation">:</span> #FA8072<span class="token punctuation">;</span> //salmon \n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>You can also add an alpha value, or transparency to colors. Transparency allows text to be overlaid on an image and stil have the image partially viewable trhough the text, or can be used to change the shade of the colour if no other elements are in front or behind the text. Use <code>rgba()</code> or <code>hsla()</code> and fill in your color values. The alpha value goes last and is a percent converted to a decimal. (For example, 20% is 0.2, 75% is 0.75, etc.)</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>184, 87%, 94%<span class="token punctuation">)</span><span class="token punctuation">;</span> // bright blue\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Above shows paragraphs styled bright orange and 20% transparent, h2 elements a salmon pink, and the body’s background bright blue.</p>\n<p>To get custom colors to use in CSS, you might find a color picker helpful. Some text editors have built-in color pickers, like Visual Studio Code. If you search “color picker” on Google or DuckDuckGo, you will get a color picker that you can use. Google Chrome and Firefox also have color picker add-ons that you can install. Adobe Color CC not only helps you pick a color, but will also help you pick out a color scheme for your web page! It’s a good idea to check that you have enough contrast between your text and background colors by using a tool like WebAIM’s Color Contrast Checker.</p>\n<h4>More Information:</h4>\n<p><a href="https://color.adobe.com/" target="_blank">Adobe Color CC</a><br>\n<a href="https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg?hl=en" target="_blank">ColorPick Eyedropper on Chrome Web Store</a><br>\n<a href="https://addons.mozilla.org/en-US/firefox/addon/colorzilla/" target="_blank">ColorZilla add-on for Firefox</a><br>\n<a href="http://www.colorhexa.com/" target="_blank">Explore different Hex colors</a><br>\n<a href="https://webaim.org/resources/contrastchecker/" target="_blank">WebAIM Color Contrast Checker</a></p>',fields:{slug:"/css/colors/"},frontmatter:{title:"CSS3 Colors"}}},pathContext:{slug:"/css/colors/"}}}});
//# sourceMappingURL=path---css-colors-f5f767fe61fa9c15f59f.js.map