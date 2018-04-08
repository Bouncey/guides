webpackJsonp([41425758308453],{4086:function(e,o){e.exports={data:{markdownRemark:{html:"<h1>CSS Flexbox</h1>\n<p><a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes' target='_blank' rel='nofollow'>CSS Flexbox</a> allows us to easily format our HTML like you never knew was possible. With flexbox it is possible to align vertically and horizontally, easily. Like the sound of it? Yeah me too.</p>\n<p>It is also fantastic for general layout of your website or app, it is easy to learn, supported well (in all modern browsers) and is great to work with, not to mention it doesn’t take long to get to grips with at all!</p>\n<h2>Flexbox</h2>\n<p>Here is a list of the flexbox properties that can be used to position out elements in css:</p>\n<h3>CSS that can be applied to the container</h3>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>display: flexbox | inline-flex;\nflex-direction: row | row-reverse | column | column-reverse;\nflex-wrap: nowrap | wrap | wrap-reverse;\nflex-flow: <‘flex-direction’> || <‘flex-wrap’>\njustify-content: flex-start | flex-end | center | space-between | space-around;\nalign-items: flex-start | flex-end | center | baseline | stretch;\nalign-content: flex-start | flex-end | center | space-between | space-around | stretch;</code></pre>\n      </div>\n<h3>CSS that can be applied to items/elements in the container</h3>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>order: <integer>;\nflex-grow: <number>; /* default 0 */\nflex-shrink: <number>; /* default 1 */\nflex-basis: <length> | auto; /* default auto */\nflex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]\nalign-self: auto | flex-start | flex-end | center | baseline | stretch;</code></pre>\n      </div>\n<p>So now you have your toolkit but you ask “What do I do with my tools, how do I use these?”, well let me show you.</p>\n<h3>Display Flex</h3>\n<p><code>display: flex;</code> is just to tell your browser hey I would like to use flexbox with this container, please. This will initialize this box as a flex container and apply some default flex properties.</p>\n<p>This is what out container looks like without <code>display: flex;</code></p>\n<p><img src=\"//discourse-user-assets.s3.amazonaws.com/original/2X/8/8f20f30d24cba9a7f56bf950a3f23d37d356ca51.png\" alt=\"CSS playground no flex properties\"></p>\n<p>After adding <code>display: flex;</code> we get the below, the default flex properties are applied causing it to show as such</p>\n<p><img src=\"//discourse-user-assets.s3.amazonaws.com/original/2X/6/66404664f9177ae748be00f769faf67d5956034d.png\" alt=\"CSS playground display flex default style\"></p>\n<h3>Flex Direction</h3>\n<p><code>flex-direction:</code> allows us to control how the items in the container display, do you want them left to right, right to left, top to bottom or bottom to top? you can do all these easily with setting the flex direction of the container.</p>\n<p>Flexbox applies row as the default for the direction. Here is what they all look like:</p>\n<p><code>flex-direction: row;</code></p>\n<p><img src=\"//discourse-user-assets.s3.amazonaws.com/original/2X/9/951cc993820547efa28e70dca905f5531a4488d5.png\" alt=\"flex-direction: row; example\"></p>\n<p><code>flex-direction: row-reverse;</code></p>\n<p><img src=\"//discourse-user-assets.s3.amazonaws.com/original/2X/c/cf738aaf83f29eccdb461e91b775b10e41b92389.png\" alt=\"flex-direction: row-reverse example\"></p>\n<p><code>flex-direction: column;</code></p>\n<p><img src=\"//discourse-user-assets.s3.amazonaws.com/original/2X/7/7ef77565bc07ee86fd3033a531dd76b49709cf7e.png\" alt=\"flex-direction: column example\"></p>\n<p><code>flex-direction: column-reverse;</code></p>\n<p><img src=\"//discourse-user-assets.s3.amazonaws.com/original/2X/e/ec9a1ec064bf0027fa61016ca620df14d9bd47a9.png\" alt=\"flex-direction: column-reverse example\"></p>\n<h3>Flex Wrap</h3>\n<p>Flexbox by default will try to fit all elements into one row but you can change this with the flex-wrap property, this allows you to set if the elements will spill over or not, there are 3 properties for <code>flex-wrap:</code></p>\n<p><code>flex-wrap: nowrap</code> this is the default and will look to fit everything in one row from left to right.</p>\n<p><code>flex-wrap: wrap</code> this will allow items to go on to create multiple rows and from left to right.</p>\n<p><code>flex-wrap: wrap-reverse</code> allows for items to be on multiple rows but displaying right to left this time.</p>\n<h3>Flex Flow</h3>\n<p>Flex flow combines the use of <code>flex-wrap</code> and <code>flex-direction</code> into one property, it is used by first setting the direction and then the wrap.</p>\n<p><code>flex-flow: column wrap;</code> is an example if how to use this.</p>\n<h3>Justify Content</h3>\n<p><code>justify-content</code> is a a property to align items in the container along the main axis (this changes depending on how content is displayed). There are multiple options for this and it allows us to fill any empty space on rows but defining how we want to ‘justify’ it.</p>\n<p>Here are our options when we justify our content <code>flex-start | flex-end | center | space-between | space-around;</code>.</p>\n<h3>Align Items</h3>\n<p>Align items allows us to align items along the cross-axis. This allows content to be positioned in many different ways using justify content and align items together.</p>\n<p><code>align-items: flex-start | flex-end | center | baseline | stretch;</code></p>\n<h3>Align Content</h3>\n<p>This is for aligning items with multiple lines, it is for aligning on the cross-axis and will have no effect on content that is one line.</p>\n<p><code>align-content: flex-start | flex-end | center | space-between | space-around | stretch;</code></p>\n<h2>Games and Apps</h2>\n<p><a href='http://www.flexboxdefense.com/' target='_blank' rel='nofollow'>Flexbox Defense</a> is a web game that teaches flexbox the fun way.</p>\n<p><a href='http://flexboxfroggy.com/' target='_blank' rel='nofollow'>Flexbox Froggy</a> is also a web game that teaches flexbox the fun way.</p>\n<p><a href='http://flexboxin5.com/' target='_blank' rel='nofollow'>Flexbox in 5</a> is a web app that allows you to be able to see how flexbox works with a few simple controls.</p>\n<p><a href='http://the-echoplex.net/flexyboxes/' target='_blank' rel='nofollow'>Flexyboxes</a> is an app that allows you too see code samples and change parameters to see how flexbox works visually.</p>\n<p><a href='http://www.flexboxpatterns.com' target='_blank' rel='nofollow'>Flexbox Patters</a> is a website that shows off loads of flexbox examples</p>\n<h2>Documentation</h2>\n<p><a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes' target='_blank' rel='nofollow'>Mozilla Developer Network</a></p>\n<p><a href='https://css-tricks.com/snippets/css/a-guide-to-flexbox/' target='_blank' rel='nofollow'>CSS Tricks</a></p>\n<h2>Videos</h2>\n<p><a href='https://www.youtube.com/watch?v=G7EIAgfkhmg' target='_blank' rel='nofollow'>Flexbox Essentials</a></p>\n<p><a href='https://www.youtube.com/watch?v=H1lREysgdgc' target='_blank' rel='nofollow'>Flexbox Practical Examples</a></p>\n<p><a href='https://www.youtube.com/watch?v=Vj7NZ6FiQvo&list=PLu8EoSxDXHP7xj_y6NIAhy0wuCd4uVdid' target='_blank' rel='nofollow'>What The Flexbox?!</a></p>",fields:{slug:"/css/tutorials/css-flexbox-tips-and-tricks/"},frontmatter:{title:"CSS Flexbox Tips and Tricks"}}},pathContext:{slug:"/css/tutorials/css-flexbox-tips-and-tricks/"}}}});
//# sourceMappingURL=path---css-tutorials-css-flexbox-tips-and-tricks-98427563875e2ab703d6.js.map