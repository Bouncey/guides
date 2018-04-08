webpackJsonp([79251597151899],{4087:function(e,t){e.exports={data:{markdownRemark:{html:"<h1>CSS Selectors</h1>\n<p>In CSS, selectors are patterns used to select DOM elements.</p>\n<p>Here is an example of using selectors. In the following code, <code>a</code> and <code>h1</code> are selectors:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-css\"><code><span class=\"token selector\">a</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> black<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\">h1</span> <span class=\"token punctuation\">{</span>\n  font-size 24px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n      </div>\n<h2>Cheat list of selectors</h2>\n<table>\n<thead>\n<tr>\n<th>Selector</th>\n<th>Selects</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>head</code></td>\n<td>selects the element with the \n<code>head</code>\n tag</td>\n</tr>\n<tr>\n<td><code>.red</code></td>\n<td>selects all elements with the ‘red’ class</td>\n</tr>\n<tr>\n<td><code>#nav</code></td>\n<td>selects the elements with the ‘nav’ Id</td>\n</tr>\n<tr>\n<td><code>div.row</code></td>\n<td>selects all elements with the \n<code>div</code>\n tag and the ‘row’ class</td>\n</tr>\n<tr>\n<td><code>[aria-hidden=\"true\"]</code></td>\n<td>selects all elements with the \n<code>aria-hidden</code>\n attribute with a value of “true”</td>\n</tr>\n<tr>\n<td><code>*</code></td>\n<td>Wildcard selector. Selects all DOM elements. See bellow for using it with other selectors</td>\n</tr>\n</tbody>\n</table>\n<p>We can combine selectors in interesting ways. Some examples:</p>\n<table>\n<thead>\n<tr>\n<th>Selectors</th>\n<th>Selects</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>li a</code></td>\n<td>DOM descendant combinator. All \n<code>a</code>\n tags that are a child of \n<code>li</code>\n tags</td>\n</tr>\n<tr>\n<td><code>div.row *</code></td>\n<td>selects all elements that are descendant (or child) of the elements with \n<code>div</code>\n tag and ‘row’ class</td>\n</tr>\n<tr>\n<td><code>li > a</code></td>\n<td>Difference combinator. Select direct descendants, instead of all descendants like the descendant selectors</td>\n</tr>\n<tr>\n<td><code>li + a</code></td>\n<td>The adjacent combinator. It selects the element that is immediately preceded by the former element. In this case, only the first \n<code>a</code>\n after each \n<code>li</code>\n.</td>\n</tr>\n<tr>\n<td><code>li, a</code></td>\n<td>Selects all \n<code>a</code>\n elements and all \n<code>li</code>\n elements.</td>\n</tr>\n<tr>\n<td><code>li ~ a</code></td>\n<td>The sibling combinator. Selects \n<code>a</code>\n element following a \n<code>li</code>\n element.</td>\n</tr>\n</tbody>\n</table>\n<p>Pseudo-selectors or pseudo structural classes are also useful for selecting structural elements from the DOM. Here are some of them:</p>\n<table>\n<thead>\n<tr>\n<th>Selectors</th>\n<th>Selects</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>:first-child</code></td>\n<td>Target the first element immediately inside (or child of) another element</td>\n</tr>\n<tr>\n<td><code>:last-child</code></td>\n<td>Target the last element immediately inside (or child of) another element</td>\n</tr>\n<tr>\n<td><code>:nth-child()</code></td>\n<td>Target the nth element immediately inside (or child of) another element. Admits integers, \n<code>even</code>\n, \n<code>odd</code>\n, or formulas</td>\n</tr>\n<tr>\n<td><code>a:not(.name)</code></td>\n<td>Selects all \n<code>a</code>\n elements that are not of the \n<code>.name</code>\n class</td>\n</tr>\n<tr>\n<td><code>::after</code></td>\n<td>Allows inserting content onto a page from CSS, instead of HTML. While the end result is not actually in the DOM, it appears on the page as if it is. This content loads after HTML elements.</td>\n</tr>\n<tr>\n<td><code>::before</code></td>\n<td>Allows inserting content onto a page from CSS, instead of HTML. While the end result is not actually in the DOM, it appears on the page as if it is. This content loads before HTML elements.</td>\n</tr>\n</tbody>\n</table>\n<p>We can use pseudo-classes to define a special state of an element of the DOM but don’t point to an element by themselves . Some examples:</p>\n<table>\n<thead>\n<tr>\n<th>Pseudo-class</th>\n<th>Selects</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>:hover</code></td>\n<td>selects an element that is being hovered by a mouse pointer</td>\n</tr>\n<tr>\n<td><code>:focus</code></td>\n<td>selects an element receiving focus from the keyboard or programattially</td>\n</tr>\n<tr>\n<td><code>:active</code></td>\n<td>selects an element being clicked by a mouse pointer</td>\n</tr>\n<tr>\n<td><code>:link</code></td>\n<td>selects all links that have not been clicked yet</td>\n</tr>\n<tr>\n<td><code>:visited</code></td>\n<td>selects a link that has already been clicked</td>\n</tr>\n</tbody>\n</table>\n<h2>Games</h2>\n<p><a href='http://flukeout.github.io' target='_blank' rel='nofollow'>CSS Diner</a> is a web game that teaches almost everything there is to know about combining selectors.</p>\n<h2>Additional reference</h2>\n<p>There are many more CSS selectors! Learn about them at <a href='http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048' target='_blank' rel='nofollow'>CodeTuts</a>, <a href='https://css-tricks.com/almanac/selectors/' target='_blank' rel='nofollow'>CSS-tricks.com</a>, <a href='http://www.w3schools.com/cssref/css_selectors.asp' target='_blank' rel='nofollow'>w3schools.com</a> or at <a href='https://developer.mozilla.org/en/docs/Web/Guide/CSS/Getting_started/Selectors' target='_blank' rel='nofollow'>Mozilla Developer Network</a>.</p>",fields:{slug:"/css/tutorials/css-selectors-cheat-sheet/"},frontmatter:{title:"CSS Selectors Cheat Sheet"}}},pathContext:{slug:"/css/tutorials/css-selectors-cheat-sheet/"}}}});
//# sourceMappingURL=path---css-tutorials-css-selectors-cheat-sheet-6b3ddc9bd240139f803c.js.map