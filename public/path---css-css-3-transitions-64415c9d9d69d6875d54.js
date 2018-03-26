webpackJsonp([0x910a14d18738],{3962:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>CSS3 Transitions</h2>\n<p>Using CSS3 <strong>Transitions</strong> can be useful if you want your app or your web page to be more dynamic and good looking.</p>\n<p>Indeed, transitions allow you to change property (<code>width</code>, <code>color</code>, …) values in a <strong>smooth</strong> way.</p>\n<p>The <code>transition</code> property is a shorthand property for <code>transition-property</code>, <code>transition-duration</code>, <code>transition-timing-function</code>, <code>transition-delay</code>, the syntax is the following :</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token property">transition</span><span class="token punctuation">:</span> transition-property transition-duration transition-timing-function transition-delay\n</code></pre>\n      </div>\n<p>For example : </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>transition: width 2s ease-in-out 1s;</code></pre>\n      </div>\n<h3>Description of the properties</h3>\n<h4><code>transition-property</code></h4>\n<p>Specify the <strong>name</strong> of property to which you should apply a transition : </p>\n<ul>\n<li><code>background-color</code></li>\n<li><code>color</code></li>\n<li><code>width</code></li>\n<li><code>height</code></li>\n<li><code>margin</code></li>\n<li><code>border-radius</code></li>\n<li>And so on !</li>\n</ul>\n<p>For example : </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>transition-property: width; /* means the transition applies on the width */</code></pre>\n      </div>\n<h4><code>transition-duration</code></h4>\n<p>Specify the <strong>number of seconds or milliseconds</strong> the transition should <strong>take</strong> : </p>\n<p>For example :</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>transition-duration: 2s /* means the transition effect last 2s */</code></pre>\n      </div>\n<h4><code>transition-timing-function</code></h4>\n<p>Specify the <strong>speed curve</strong> of the transition effect. Thus, you can change your <strong>transition’s speed over its duration</strong>. </p>\n<p>Here are the most used values :</p>\n<ul>\n<li><code>linear</code></li>\n<li><code>ease</code></li>\n<li><code>ease-in</code></li>\n<li><code>ease-out</code></li>\n<li><code>ease-in-out</code></li>\n<li><code>cubic-bezier(n, n, n, n)</code></li>\n</ul>\n<p>For example :</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token property">transition-timing-function</span><span class="token punctuation">:</span> linear\n</code></pre>\n      </div>\n<p>N.B : All the values above are in fact specifics <code>cubic-bezier</code>. <code>linear</code>, for instance, is equivalent to <code>cubic-bezier(0.25,0.1,0.25,1)</code></p>\n<p>You can experiment and learn more about <em>Cubic Bezier</em> <a href="http://cubic-bezier.com/">here</a></p>\n<h4><code>transition-delay</code></h4>\n<p>Specify in <strong>seconds or milliseconds</strong> when the transition will <strong>start</strong>.</p>\n<p>For example :</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>transition-delay: 1s /* means wait 1s before the transition effect start */</code></pre>\n      </div>\n<h3>How to use transitions ?</h3>\n<p>You can write a transition in two ways :</p>\n<h4>Using the shorthand property (<code>transition</code>)</h4>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">transition</span><span class="token punctuation">:</span> all 1s ease-in-out<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">div:hover</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h4>Giving all transition properties a value</h4>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">transition-property</span><span class="token punctuation">:</span> width<span class="token punctuation">;</span>\n  <span class="token property">transition-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>\n  <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>N.B : Both examples are <strong>equivalent</strong></p>\n<h3>Examples</h3>\n<p>Here are some simple pens containing simple transitions :</p>\n<ul>\n<li><a href="https://codepen.io/thomlom/pen/gGqzNp">Basic transitions</a></li>\n<li><a href="https://codepen.io/thomlom/pen/JrxZKz?editors=1111">Transitions + JavaScript</a></li>\n</ul>\n<h4>More Information:</h4>\n<ul>\n<li><a href="https://www.w3schools.com/css/css3_transitions.asp">w3schools : CSS3 Transitions</a> </li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions">MDN web docs : Using CSS transitions</a></li>\n<li><a href="https://www.youtube.com/watch?v=8kK-cA99SA0">DevTips : CSS Transition</a></li>\n</ul>',fields:{slug:"/css/css3-transitions/"},frontmatter:{title:"CSS3 Transitions"}}},pathContext:{slug:"/css/css3-transitions/"}}}});
//# sourceMappingURL=path---css-css-3-transitions-64415c9d9d69d6875d54.js.map