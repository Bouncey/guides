webpackJsonp([0x93f4078c6e7],{4340:function(n,s){n.exports={data:{markdownRemark:{html:'<h1>Basic Operations</h1>\n<p>Java supports the following operations on variables:</p>\n<ul>\n<li><strong>Arithmetic</strong> : <code>Addition (+)</code>, <code>Subtraction (-)</code>, <code>Multiplication (*)</code>, <code>Division (/)</code>, <code>Modulus (%)</code>,<code>Increment (++)</code>,<code>Decrement (--)</code>.</li>\n<li><strong>String concatenation</strong>: <code>+</code> can be used for String concatenation but subtraction <code>-</code> on a String is not a valid operation.</li>\n<li><strong>Relational</strong>: <code>Equal to (==)</code>, <code>Not Equal to (!=)</code>, <code>Greater than (>)</code>, <code>Less than (&#x3C;)</code>, <code>Greater than or equal to (>=)</code>, <code>Less than or equal to (&#x3C;=)</code></li>\n<li><strong>Bitwise</strong>: <code>Bitwise And (&#x26;)</code>, <code>Bitwise Or (|)</code>, <code>Bitwise XOR (^)</code>, <code>Bitwise Compliment (~)</code>, <code>Left shift (&#x3C;&#x3C;)</code>, <code>Right Shift (>>)</code>, <code>Zero fill right shift (>>>)</code></li>\n<li><strong>Logical</strong>: <code>Logical And (&#x26;&#x26;)</code>, <code>Logical Or (||)</code>, <code>Logical Not (!)</code></li>\n<li><strong>Assignment</strong>: <code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>%=</code>, <code>&#x3C;&#x3C;=</code>, <code>>>=</code>, <code>&#x26;=</code>, <code>^=</code>, <code>|=</code></li>\n<li><strong>Others</strong>: <code>Conditional/Ternary(?:)</code>, <code>instanceof</code></li>\n</ul>\n<p>While most of the operations are self-explanatory, the Conditional (Ternary) Operator works as follows:</p>\n<p><code>expression that results in boolean output ? return this value if true : return this value if false;</code></p>\n<p>Example:\nTrue Condition:</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code>    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">5</span> <span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// y will equal 5 since the expression x == 10 evaluates to true</span>\n    \n</code></pre>\n      </div>\n<p>False Condition:</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code>    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">5</span> <span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// y will equal 9 since the expression x == 10 evaluates to false</span>\n</code></pre>\n      </div>\n<p>The instance of operator is used for type checking. It can be used to test if an object is an instance of a class, a subclass or an interface. General format-\n*object <strong>instance</strong> of class/subclass/interface*</p>\n<p>Here is a program to illustrate instanecof operator:</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code>  Person obj1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        Person obj2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n        <span class="token comment" spellcheck="true">// As obj is of type person, it is not an</span>\n        <span class="token comment" spellcheck="true">// instance of Boy or interface</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"obj1 instanceof Person: "</span> <span class="token operator">+</span>  <span class="token punctuation">(</span>obj1 <span class="token keyword">instanceof</span> <span class="token class-name">Person</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">/*it returns true since obj1 is an instance of person */</span>\n                           \n       \n</code></pre>\n      </div>',fields:{slug:"/java/basic-operations/"},frontmatter:{title:"Basic Operations"}}},pathContext:{slug:"/java/basic-operations/"}}}});
//# sourceMappingURL=path---java-basic-operations-5f7d6c643034eefd8611.js.map