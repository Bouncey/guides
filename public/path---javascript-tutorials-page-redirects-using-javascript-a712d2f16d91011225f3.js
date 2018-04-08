webpackJsonp([0xb7551f992ffd],{4801:function(e,n){e.exports={data:{markdownRemark:{html:'<h2>Page Redirects Using JavaScript</h2>\n<p>If you’re trying to redirect a user to another page, you can easily use JavaScript to accomplish this task. It is important to note the following:</p>\n<p>Even if you have the jQuery library loaded in your scripts, you might wish to use the pure JavaScript solution for page redirects for efficiency purposes. </p>\n<p>There are several different ways to go about this, but the simplest way is to use the <code>window.location</code> object to send the user to the page you wish them to be redirected to. The <code>window.location</code> object can use any valid URL value such as <code>http://www.yoururl.com</code>, <code>somepage.html</code>, etc.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>window<span class="token punctuation">.</span>location <span class="token operator">=</span> <span class="token string">\'http://www.yoururl.com\'</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// window.location = \'somepage.html\';</span>\n<span class="token comment" spellcheck="true">// etc.</span>\n</code></pre>\n      </div>\n<h3>Special Case Redirect</h3>\n<p>You can use a special redirect method that is, by default, attached to the <code>window.location</code> object in every major browser named <code>replace()</code>. This method accepts the same valid URL values as just using <code>window.location</code>.</p>\n<p>Here is an example of using this method (it will still work the same as just using <code>window.location</code> in other browsers):</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">\'http://www.yoururl.com\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// window.location.replace(\'somepage.html\');</span>\n<span class="token comment" spellcheck="true">// etc.</span>\n</code></pre>\n      </div>\n<h3>A Simple Timed Redirect Using JS</h3>\n<p>Here is an example of a simple timed redirect using the <code>setTimeout()</code> function. Timed redirects are useful so that you can explain to the user, via the content on the redirect page, the reason why they are being redirected to another page.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment" spellcheck="true">// the 5000 below is 5000 milliseconds which equals 5 seconds until the redirect happens</span>\n<span class="token comment" spellcheck="true">// keep in mind that 1 second = 1000 milliseconds</span>\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    window<span class="token punctuation">.</span>location <span class="token operator">=</span> <span class="token string">\'http://www.yoururl.com\'</span><span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// window.location = \'somepage.html\';</span>\n    <span class="token comment" spellcheck="true">// etc.</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>Fallback</h3>\n<p>Sometimes users browse the internet with JavaScript disabled, and this would obviously present problems with a JS dependant redirect solution. I recommend setting a <code>&#x3C;meta></code> element that will refresh the browser with the new location. I would set the time for this meta element to be a second after the JS redirect is supposed to take place. So, if you have a redirect that happens in JS after 5 seconds, set the <code>&#x3C;meta></code> element redirect to take place at 6 seconds.</p>\n<p>Place the <code>&#x3C;meta></code> element within the <code>&#x3C;head></code> of your document like so:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token comment" spellcheck="true">&lt;!-- Change the 6 below to however many seconds you wish to wait until redirection to the new page.  Change the portion after "URL=" to the URL of your choice.  This can be a local page: URL=somepage.html, a web address: URL=http://www.yoururl.com, or any other valid URL. It is important to note the semicolon between the number of seconds to refresh and the URL. --></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>refresh<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>6;URL<span class="token punctuation">=</span>http://www.yoururl.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Keep in mind that not all browsers support the <code>&#x3C;meta></code> element (I’m looking at you, older versions of IE, and Safari), but most modern browsers do (Microsoft Edge, Google Chrome, Mozilla Firefox, Opera).</p>',fields:{slug:"/javascript/tutorials/page-redirects-using-javascript/"},frontmatter:{title:"Page Redirects Using JavaScript"}}},pathContext:{slug:"/javascript/tutorials/page-redirects-using-javascript/"}}}});
//# sourceMappingURL=path---javascript-tutorials-page-redirects-using-javascript-a712d2f16d91011225f3.js.map