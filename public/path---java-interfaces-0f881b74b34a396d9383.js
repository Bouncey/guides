webpackJsonp([0xb5dfa199e6d3],{4354:function(n,s){n.exports={data:{markdownRemark:{html:'<h1>Interfaces</h1>\n<p>Interface in Java is a bit like the Class, but with a significant difference : an <code>interface</code> can <em>only</em> have method signatures, fields and default methods. Since Java 8, you can also create <a href="https://docs.oracle.com/javase/tutorial/java/IandI/defaultmethods.html">default methods</a>. In the next block you can see an example of interface :</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Vehicle</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> String licensePlate <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token keyword">float</span> maxVel\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">blowHorn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n      System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Blowing horn"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The interface above contains one field and two methods. Alone, it is not of much use, but they are usually used along with Classes. How? Simple, you have to make sure some class <code>implements</code> it.</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token keyword">implements</span> <span class="token class-name">Vehicle</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"starting engine..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"stopping engine..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CItd/0\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<p>Now, there is a <strong>ground rule</strong> : The Class must implement <strong>all</strong> of the methods in the Interface. The methods must have <em>the exact same</em> signature (name, parameters and exceptions) as described in the interface. The class <em>does not</em> need to declare the fields though, only the methods.</p>\n<h2>Instances of an Interface</h2>\n<p>Once you create a Java Class which <code>implements</code> any Interface, the object instance can be referenced as an instance of the Interface. Similar concept as of Inheritance instantiation.</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token comment" spellcheck="true">// following our previous example</span>\n\nVehicle tesla <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ntesla<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// starting engine ...</span>\n</code></pre>\n      </div>\n<p>But, you <strong>cannot</strong> create an instance of an Interface itself. You must create instance of some class implementing an Interface to reference it. Think of interfaces as a blank contract form, or a template.</p>\n<p>What can you do with this feature? Polymorphism! You can use only interfaces to refer to object instances!</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Truck</span> <span class="token keyword">implements</span> <span class="token class-name">Vehicle</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"starting truck engine..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"stopping truck engine..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Starter</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// static method, can be called without instantiating the class</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">startEngine</span><span class="token punctuation">(</span>Vehicle vehicle<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        vehicle<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nVehicle tesla <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nVehicle tata <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Truck</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nStarter<span class="token punctuation">.</span><span class="token function">startEngine</span><span class="token punctuation">(</span>tesla<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// starting engine ...</span>\nStarter<span class="token punctuation">.</span><span class="token function">startEngine</span><span class="token punctuation">(</span>tata<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// starting truck engine ...</span>\n</code></pre>\n      </div>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CItm/0\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h2>But how about multiple interfaces?</h2>\n<p>Yes, you can implement multiple Interfaces in a single class. While in <a href="//forum.freecodecamp.com/t/java-docs-inheritance">Inheritance</a> within Classes you were restricted to inherit only one class, here you can extend any number of interfaces. But do not forget to implement <em>all</em> of the methods of all the Interfaces, otherwise compilation will fail!</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">GPS</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getCoordinates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Radio</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">startRadio</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">stopRadio</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Smartphone</span> <span class="token keyword">implements</span> <span class="token class-name">GPS</span><span class="token punctuation">,</span>Radio <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getCoordinates</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// return some coordinates</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">startRadio</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment" spellcheck="true">// start Radio</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">stopRadio</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// stop Radio</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CIto/0\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h2>Some features of Interfaces</h2>\n<ul>\n<li>You can place variables within an Interface, although it won’t be a sensible decision as Classes are not bound to have the same variable. In short, avoid placing variables!</li>\n<li>All variables and methods in an Interface are public, even if you leave out the <code>public</code> keyword.</li>\n<li>An Interface cannot specify the implementation of a particular method. Its upto the Classes to do it. Although there has been a recent exception (see below).</li>\n<li>If a Class implements multiple Interfaces, then there is a remote chance of method signature overlap. Since Java does not allow multiple methods of the exact same signature, this can lead to problems. See <a href=\'http://stackoverflow.com/questions/2598009/method-name-collision-in-interface-implementation-java\' target=\'_blank\' rel=\'nofollow\'>this question</a> for more info.</li>\n</ul>\n<h2>Interface Default Methods</h2>\n<p>Before Java 8, we had no way to direct an Interface to have a particular method implementation. This lead to lot of confusion and code breaks if an Interface definition is suddenly changed.</p>\n<p>Suppose, you wrote an open source library, which contains an Interface. Say, your clients, i.e. practically all developers around the world, are using it heavily and are happy. Now you have had to upgrade the library by adding a new method definition to the Interface to support a new feature. But that would break <em>all</em> builds since all Classes implementing that Interface has to change now. What a catastrophe!</p>\n<p>Thankfully, Java 8 now provides us <code>default</code> methods of Interfaces. A <code>default</code> method <em>can</em> contain its own implementation <em>directly</em> within the Interface! So, if a Class does not implement a default method, the compiler will take the implementation mentioned within the Interface. Nice, isn’t it? So in your library, you may add any number of default methods in interfaces without the fear of breaking anything!</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">GPS</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getCoordinates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">default</span> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getRoughCoordinates</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// implementation to return coordinates from rough sources</span>\n        <span class="token comment" spellcheck="true">// such as wifi &amp; mobile</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Fetching rough coordinates..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Radio</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">startRadio</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">stopRadio</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Smartphone</span> <span class="token keyword">implements</span> <span class="token class-name">GPS</span><span class="token punctuation">,</span>Radio <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getCoordinates</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// return some coordinates</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">startRadio</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment" spellcheck="true">// start Radio</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">stopRadio</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// stop Radio</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment" spellcheck="true">// no implementation of getRoughCoordinates()</span>\n<span class="token punctuation">}</span>\n\nSmartphone motoG <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Smartphone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmotog<span class="token punctuation">.</span><span class="token function">getRoughCoordinates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Fetching rough coordinates...</span>\n</code></pre>\n      </div>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CItp/0\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>But, what happens if two interfaces have the same method signature?</h3>\n<p>Awesome question. In that case, if you do not provide the implementation in the Class, poor compiler will get confused and simply fail! You have to provide a default method implemention within the Class also. There is also a nifty way using <code>super</code> to call which implementation you like :</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Radio</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// public void startRadio();</span>\n    <span class="token comment" spellcheck="true">// public void stopRadio();</span>\n\n    <span class="token keyword">default</span> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Next from Radio"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MusicPlayer</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// public void start();</span>\n    <span class="token comment" spellcheck="true">// public void pause();</span>\n    <span class="token comment" spellcheck="true">// public void stop();</span>\n\n    <span class="token keyword">default</span> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Next from MusicPlayer"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Smartphone</span> <span class="token keyword">implements</span> <span class="token class-name">Radio</span><span class="token punctuation">,</span> MusicPlayer <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// Suppose you want to call MusicPlayer next</span>\n        MusicPlayer<span class="token punctuation">.</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nSmartphone motoG <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Smartphone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmotoG<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Next from MusicPlayer</span>\n</code></pre>\n      </div>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CIts/0\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h2>Inheriting an Interface</h2>\n<p>It is also possible in Java for an Interface to <em>inherit</em> another Interface, by using, you guessed it, <code>extends</code> keyword :</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Player</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MusicPlayer</span> <span class="token keyword">extends</span> <span class="token class-name">Player</span> <span class="token punctuation">{</span>\n    <span class="token keyword">default</span> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Next from MusicPlayer"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>That means, the Class implementing <code>MusicPlayer</code> Interface has to implement <em>all</em> methods of <code>MusicPlayer</code> as well as <code>Player</code> :</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SmartPhone</span> <span class="token keyword">implements</span> <span class="token class-name">MusicPlayer</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"start"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"stop"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"pause"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CIty/0\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<p>Whoops, did I forget <code>next()</code> ? See, since it was a <code>default</code> method, I didn’t had to provide an implementation at all. (Wont work for JDK &#x3C; 8)</p>\n<p>So, now you have a good grasp of Interfaces! Go learn about Abstract Classes to know how Java gives you yet another way to define contracts.</p>',fields:{slug:"/java/interfaces/"},frontmatter:{title:"Interfaces"}}},pathContext:{slug:"/java/interfaces/"}}}});
//# sourceMappingURL=path---java-interfaces-0f881b74b34a396d9383.js.map