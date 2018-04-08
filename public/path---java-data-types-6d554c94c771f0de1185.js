webpackJsonp([0xa1c331c00ae],{4353:function(n,a){n.exports={data:{markdownRemark:{html:'<h1>Data Types</h1>\n<p>Java is a strongly typed language. This means that, in Java, each data type has its own strict definition. There are no implicit data type conversions when any conflicts occur between the data types. Any change in data types should be explicitly declared by the programmer.</p>\n<p>Java defines 8 primitive data types : <code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code>, <code>char</code>, <code>float</code>, <code>double</code> and <code>boolean</code>.</p>\n<p>They are divided into the following categories:</p>\n<ul>\n<li>Integers</li>\n<li>Floating Point Numbers</li>\n<li>Characters</li>\n<li>Boolean Type</li>\n</ul>\n<p>The details of each of the data types is given below :</p>\n<h2>Integers:</h2>\n<p>These are of four types: <code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code>. It is important to note that these are signed positive and negative values. Signed integers are stored in a computer using <a href=\'http://www.ele.uri.edu/courses/ele447/proj_pages/divid/twos.html\' target=\'_blank\' rel=\'nofollow\'>2’s complement</a>. It consist both negative and positive values but in different formats like <code>(-1 to -128)</code> or <code>(0 to +127)</code>. An unsigned integer can hold a larger positive value, and no negative value like <code>(0 to 255)</code>. Unlike C++ there is no unsigned integer in Java.</p>\n<h3>byte:</h3>\n<p>Byte data type is an 8-bit signed two’s complement integer.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Wrapper Class: Byte\n\nMinimum value: -128 (-2^7)\n\nMaximum value: 127 (2^7 -1)\n\nDefault value: 0\n\nExample: byte a = 10 , byte b = -50</code></pre>\n      </div>\n<h3>short:</h3>\n<p>Short data type is a 16-bit signed two’s complement integer.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Wrapper Class: Short\n\nMinimum value: -32,768 (-2^15)\n\nMaximum value: 32,767 (2^15 -1)\n\nDefault value: 0.\n\nExample: short s = 10, short r = -1000</code></pre>\n      </div>\n<h3>int:</h3>\n<p>int data type is a 32-bit signed two’s complement integer. It is generally used as the default data type for integral values unless there is a concern about memory.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Wrapper Class: Integer\n\nMinimum value: (-2^31)\n\nMaximum value: (2^31 -1)\n\nThe default value: 0.\n\nExample: int a = 50000, int b = -20</code></pre>\n      </div>\n<h3>long:</h3>\n<p>Long data type is a 64-bit signed two’s complement integer.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Wrapper Class: Long\n\nMinimum value: (-2^63)\n\nMaximum value: (2^63 -1)\n\nDefault value: 0L.\n\nExample: long a = 100000L, long b = -600000L; \n\nBy default all integer type variable is "int". So long num=600851475143  will give an error.\nBut it can be specified as long by appending the suffix L (or l)</code></pre>\n      </div>\n<h2>Floating­ Point​:</h2>\n<p>These are also called real numbers and are used for expressions involving fractional precision. These are of two types: <code>float</code>, <code>double</code>. Float is actually avoided in case of precise data such as currency or research data.</p>\n<h3>float:</h3>\n<p>float data type is a single-precision 32-bit <a href=\'http://steve.hollasch.net/cgindex/coding/ieeefloat.html\' target=\'_blank\' rel=\'nofollow\'>IEEE 754 floating point</a>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Wrapper Class: Float\n\nFloat is mainly used to save memory in large arrays of floating point numbers.\n\nDefault value: 0.0f.\n\nExample: float f1 = 24.5f\n\nThe default data type of floating-point number is double. So float f = 24.5 will introduce an error.\nHowever, we can append the suffix F (or f) to designate the data type as float.</code></pre>\n      </div>\n<h3>double:</h3>\n<p>double data type is a double-precision 64-bit IEEE 754 floating point.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Wrapper Class: Double\n\nThis data type is generally used as the default data type for decimal values.\n\nDefault value: 0.0d.\n\nExample: double d1 = 123.400778</code></pre>\n      </div>\n<h2>Character:</h2>\n<p>We use this data type to store characters. This is not the same as the char in C/C++. Java uses a <code>UNICODE</code>, internationally accepted character set. Char in Java is 16­bits long while that in C/C++ is 8­bits.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Wrapper Class: Character\n\nMinimum value: \'\\u0000\' (or 0).\n\nMaximum value: \'\\uffff\' (or 65,535).\n\nExample: char letterA =\'a\'</code></pre>\n      </div>\n<h2>Boolean:</h2>\n<p>This is used for storing logical values. A boolean type can have a value of either true or false. This type is generally returned by relational operators.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>There are only two possible values: true and false.\n\nWrapper Class: Boolean\n\nThis data type is used for simple flags that track true/false conditions.\n\nDefault value is false.\n\nExample: boolean b = true, boolean b1 = 1, boolean b2;</code></pre>\n      </div>\n<h2>Reference Data Types:</h2>\n<p>Apart from primitive data types there are reference variables created using constructors of different classes. Reference variables are used for any class as well as array, String, Scanner, Random, Die etc. Reference variables are initialised using the new keyword.</p>\n<p>Example :</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Box</span><span class="token punctuation">{</span>\n\n    <span class="token keyword">int</span> length<span class="token punctuation">,</span> breadth<span class="token punctuation">,</span> height<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token function">Box</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        length<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span>\n        breadth<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>\n        height<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">demo</span><span class="token punctuation">{</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        Box box1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Box</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                <span class="token comment" spellcheck="true">//box1 is the reference variable  </span>\n        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">char</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>           <span class="token comment" spellcheck="true">//arr is the reference variable</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>String:</h2>\n<p>String is not a primitive data type, but it lets you store multiple character data types in an array and has many methods that can be used. It is used quite commonly when the user types in data and you have to manipulate it. </p>\n<p>In the example below, we try to remove all of the letters from the string and output it:</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code>String input <span class="token operator">=</span> <span class="token string">"My birthday is 10 January 1984 and my favorite number is 42"</span><span class="token punctuation">;</span>\nString output <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>\n\n<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>input<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n<span class="token comment" spellcheck="true">//if the character at index i on the string is a letter or a space, move on to the next index</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span>Character<span class="token punctuation">.</span><span class="token function">isLetter</span><span class="token punctuation">(</span>input<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span> input<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token operator">==</span><span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">{</span> \n    \n    <span class="token keyword">continue</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\noutput <span class="token operator">=</span> output <span class="token operator">+</span> input<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">//the number is added onto the output</span>\n\n<span class="token punctuation">}</span>\n\nSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Output: </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>10198442</code></pre>\n      </div>',fields:{slug:"/java/data-types/"},frontmatter:{title:"Data Types"}}},pathContext:{slug:"/java/data-types/"}}}});
//# sourceMappingURL=path---java-data-types-6d554c94c771f0de1185.js.map