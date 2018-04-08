webpackJsonp([98396466091971],{5917:function(n,a){n.exports={data:{markdownRemark:{html:'<h2>Handling Data with Props in React</h2>\n<p>Props provide a way for passing and accessing data in React components.</p>\n<p>Data is passed to React components as an attribute in JSX.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token operator">&lt;</span>MyComponent someAttribute<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>value<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<p>In JSX the curly braces indicate a JavaScript expression which must return a value. The passed data is accessed via props in the defined component.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> MyComponent <span class="token operator">=</span> props <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>someAttribute<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Now let’s walk through an example in CodePen.</p>\n<h3>Getting Started</h3>\n<p>If you haven’t already, go ahead and sign up for a <a href="https://codepen.io/accounts/signup/user/free">free CodePen account</a>.</p>\n<p>Create a new pen by selecting ‘Create’ > ‘New Pen’ next to your CodePen profile picture.</p>\n<p>Next we’ll add the appropriate libraries to render our React components.</p>\n<p>Open your JavaScript settings pane by selecting ‘Settings’ > ‘JavaScript’. Select ‘Babel’ under ‘JavaScript Preprocessor’.</p>\n<p>Next let’s add our React libraries. Under ‘External JavaScript’ select the ‘Quick-add’ drop-down and add both the ‘React’ and ‘React DOM’ libraries.</p>\n<h3>Using Props</h3>\n<p>First lets define some dummy data in our JavaScript file.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> blogData <span class="token operator">=</span> <span class="token punctuation">{</span>\n  title<span class="token punctuation">:</span> <span class="token string">\'My blog title\'</span><span class="token punctuation">,</span>\n  body<span class="token punctuation">:</span> <span class="token string">\'Arcu viverra dolor eros interdum, quis nonummy accusantium at lorem luctus iaculis.\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Next let’s define our blog components.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> Heading <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>h1<span class="token operator">></span>My Blog<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Blog <span class="token operator">=</span> props <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>div<span class="token operator">></span>\n      <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>\n      <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>body<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Noticed how we used the props object to render the title and body values that will be passed to the Blog component. Props is read-only or immutable, so we don’t have to worry about changing the props values.</p>\n<p>Before we write our App component, we need to protect our component be defining the variable type that will passed down to each prop. We will define this using React.PropTypes. Add the following to your JavaScript file.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>Blog<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  title<span class="token punctuation">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>\n  body<span class="token punctuation">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>string\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Here we are defining that the the data passed down to our Blog component will be strings for both title and body. Check out <a href="https://reactjs.org/docs/typechecking-with-proptypes.html">React’s documentation</a> for a list of all propTypes.</p>\n<p>Now let’s put this together in an app component and pass down our data.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> App <span class="token operator">=</span> props <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>div<span class="token operator">></span>\n      <span class="token operator">&lt;</span>Heading <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>Blog title<span class="token operator">=</span><span class="token punctuation">{</span>blogData<span class="token punctuation">.</span>title<span class="token punctuation">}</span> body<span class="token operator">=</span><span class="token punctuation">{</span>blogData<span class="token punctuation">.</span>body<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>Blog title<span class="token operator">=</span><span class="token punctuation">{</span>blogData<span class="token punctuation">.</span>title<span class="token punctuation">}</span> body<span class="token operator">=</span><span class="token punctuation">{</span>blogData<span class="token punctuation">.</span>body<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>Blog title<span class="token operator">=</span><span class="token punctuation">{</span>blogData<span class="token punctuation">.</span>title<span class="token punctuation">}</span> body<span class="token operator">=</span><span class="token punctuation">{</span>blogData<span class="token punctuation">.</span>body<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Finally, let’s render our app (be sure to add a root <code>&#x3C;div></code> tag to the HTML file ):</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Now you should be seeing our blog components rendered with the dummy data passed down via props.</p>\n<p>You can see a CodePen example <a href="https://codepen.io/trey-davis/pen/MvdZGX">here</a>.</p>',fields:{slug:"/react/Handling Data with Props in React/"},frontmatter:{title:"Handling Data with Props in React"}}},pathContext:{slug:"/react/Handling Data with Props in React/"}}}});
//# sourceMappingURL=path---react-handling-data-with-props-in-react-0e7060948dd9712498b3.js.map