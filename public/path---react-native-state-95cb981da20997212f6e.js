webpackJsonp([66250100956556],{5925:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Component State</h2>\n<p>In <code>Class</code> components, there is a way to store and manage state built in to React Native.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  constructor <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      counter<span class="token punctuation">:</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  incrementCount <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      counter<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>counter <span class="token operator">+</span> <span class="token number">1</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  decrementCount <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      counter<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>counter <span class="token operator">-</span> <span class="token number">1</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  render <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>View<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Text<span class="token operator">></span>Count<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>counter<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Button onPres<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>decrementCount<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">-</span><span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Button onPres<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>incrementCount<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">+</span><span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>State is similar to props, but it is private and fully controlled by the component. Here, the <code>constructor()</code> method is calling the parent class’ constructor with <code>super();</code> - <strong><code>Component</code></strong> is the parent class of <code>App</code> because we are using the <code>extends</code> keyword. The <code>constructor()</code> method also initializes the component’s state object:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>this.state = {\n  counter: 0\n};</code></pre>\n      </div>\n<p>The state can be displayed within the component:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>counter<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Or updated by calling:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><strong>Note:</strong> Aside from its initial creation in your component’s <code>constructor()</code> method, you should never directly modify the component’s state with <code>this.state =</code>. You must use <code>this.setState</code> as can be seen in the <code>incrementCount</code> and <code>decrementCount</code> functions above.</p>\n<p>The count is incremented and decremented by calling the functions passed to the <code>onPress</code> handlers just like they would be if you called a click handler from JavaScript on the web.</p>\n<p><em>ASIDE: In the first example, <code>&#x3C;Button></code> is a custom component; it’s a combination of <code>&#x3C;TouchableOpacity></code> and <code>&#x3C;Text></code> from the React Native API:</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> Button <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> onPress<span class="token punctuation">,</span> children<span class="token punctuation">,</span> buttonProps<span class="token punctuation">,</span> textProps <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> buttonStyle<span class="token punctuation">,</span> textStyle <span class="token punctuation">}</span> <span class="token operator">=</span> styles<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>TouchableOpacity onPress<span class="token operator">=</span><span class="token punctuation">{</span>onPress<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>buttonStyle<span class="token punctuation">,</span> buttonProps<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>textStyle<span class="token punctuation">,</span> textProps<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">></span>\n        <span class="token punctuation">{</span>children<span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>TouchableOpacity<span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>',fields:{slug:"/react-native/state/"},frontmatter:{title:"Component State"}}},pathContext:{slug:"/react-native/state/"}}}});
//# sourceMappingURL=path---react-native-state-95cb981da20997212f6e.js.map