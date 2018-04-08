webpackJsonp([0xd9cf0f0c587d],{5582:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>How to Create a Contact Form with CSS</h2>\n<p>First we create the HTML elements - input fields for First Name, Last Name, Email and a Text Area for the message.</p>\n<p>Later we apply CSS styles to make the form visually appealing.</p>\n<h3>The HTML part</h3>\n<p>The HTML section has a div with class <code>container</code> with the heading <code>h3</code> ”<strong>Contact Form</strong>”</p>\n<p>The form with name <strong>contact_form</strong> contains input fields for:</p>\n<ul>\n<li>First Name</li>\n<li>Last Name</li>\n<li>Email</li>\n<li>Message</li>\n</ul>\n<p>A div with class <code>center</code> to align the items center. An <code>input</code> type <code>submit</code> to submit the form.\n<br>The <code>required</code> attribute in the text fields are checked for value on submission.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Contact Form<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>contact_form<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>first_name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>First Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>first_name<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">required</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>John<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>last_name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Last Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>last_name<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">required</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Doe<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Email<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">required</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>you@domain.com<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span> <span class="token attr-name">cols</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>30<span class="token punctuation">"</span></span> <span class="token attr-name">rows</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Enter your message here ...<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>\t\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h3>The CSS part</h3>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token comment" spellcheck="true">/* Importing the Roboto font from Google Fonts. */</span>\n<span class="token atrule"><span class="token rule">@import</span> <span class="token url">url("https://fonts.googleapis.com/css?family=Roboto:400")</span><span class="token punctuation">;</span></span>\n\n<span class="token comment" spellcheck="true">/* Set font of all elements to \'Roboto\' */</span>\n<span class="token selector">*</span> <span class="token punctuation">{</span>\n\t<span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">\'Roboto\'</span>, sans-serif<span class="token punctuation">;</span>\n\t<span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">/* Remove outline of all elements on focus */</span>\n<span class="token selector">*:focus</span> <span class="token punctuation">{</span>\n\t<span class="token property">outline</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">body</span> <span class="token punctuation">{</span>\n\t<span class="token property">background</span><span class="token punctuation">:</span> #263238<span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">/* Set background color to #263238*/</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">h3</span> <span class="token punctuation">{</span>\n\t<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">/* Add styles to \'container\' class */</span>\n<span class="token selector">.container</span> <span class="token punctuation">{</span>\n\t<span class="token property">padding</span><span class="token punctuation">:</span> 12px 24px 24px 24px<span class="token punctuation">;</span>\n\t<span class="token property">margin</span><span class="token punctuation">:</span> 48px 12px<span class="token punctuation">;</span>\n\t<span class="token property">background</span><span class="token punctuation">:</span> #E3F2FD<span class="token punctuation">;</span>\n\t<span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">/* Add styles to \'label\' selector */</span>\n<span class="token selector">label</span> <span class="token punctuation">{</span>\n\t<span class="token property">font-size</span><span class="token punctuation">:</span> 0.85em<span class="token punctuation">;</span>\n\t<span class="token property">margin-left</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">/* Add styles to \'input\' and \'textarea\' selectors */</span>\n<span class="token selector">input[type=text],input[type=email], textarea</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>\n    <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>\n    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>\n    <span class="token property">margin-top</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>\n    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>\n    <span class="token property">resize</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">/* Add styles to show \'focus\' of selector */</span>\n<span class="token selector">input[type=text]:focus,input[type=email]:focus, textarea:focus</span> <span class="token punctuation">{</span>\n\t<span class="token property">border</span><span class="token punctuation">:</span> 1px solid green<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">/* Add styles to the submit button */</span>\n<span class="token selector">input[type=submit]</span> <span class="token punctuation">{</span>\n\t<span class="token property">background</span><span class="token punctuation">:</span> #64B5F6<span class="token punctuation">;</span>\n\t<span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>\n\t<span class="token property">outline</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n\t<span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n\t<span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n\t<span class="token property">padding</span><span class="token punctuation">:</span> 12px 24px<span class="token punctuation">;</span>\n\t<span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>\n\t<span class="token property">transition</span><span class="token punctuation">:</span> all ease-in-out 0.1s<span class="token punctuation">;</span>\n\t<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n\t<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>\n\t<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">/* Add styles for \'focus\' property */</span>\n<span class="token selector">input[type=submit]:focus</span> <span class="token punctuation">{</span>\n\t<span class="token property">background</span><span class="token punctuation">:</span> #A5D6A7<span class="token punctuation">;</span>\n\t<span class="token property">color</span><span class="token punctuation">:</span> whitesmoke<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">/* Style \'hover\' property */</span>\n<span class="token selector">input[type=submit]:hover</span> <span class="token punctuation">{</span>\n\t<span class="token property">background</span><span class="token punctuation">:</span> #2196F3<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">/* Align items to center of the \'div\' with the class \'center\' */</span>\n<span class="token selector">.center</span> <span class="token punctuation">{</span>\n\t<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Output</h3>\n<p><img src="http://res.cloudinary.com/crack-jack/image/upload/v1508434398/FCC_Github_Contact_form.png" alt="FreeCodeCamp/guides - Contact Form"></p>\n<h3>More Information:</h3>\n<p> Visit the <a href="https://codepen.io/rakhi2104/pen/QqYOoe/"> FreeCodeCamp - Contact Form</a> on <a href="https://codepen.io">Codepen.io</a></p>',fields:{slug:"/miscellaneous/how-to-create-a-contact-form-with-css/"},frontmatter:{title:"How to Create a Contact Form with CSS"}}},pathContext:{slug:"/miscellaneous/how-to-create-a-contact-form-with-css/"}}}});
//# sourceMappingURL=path---miscellaneous-how-to-create-a-contact-form-with-css-adba755a1256ba9bfb12.js.map