webpackJsonp([66268776643406],{3553:function(n,a){n.exports={data:{markdownRemark:{html:'<h1>Pointers in C</h1>\n<p>By now you’re aware that C is a low-level language, and nothing shows that better than pointers. Pointers are variables that get you the variable value by “pointing” to a memory location rather than storing the value of the variable itself. This allows for some handy tricks, and is also what gives us access to arrays and file handling, among other things.</p>\n<h2>Making and Using a Pointer</h2>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">double</span> my_double_variable <span class="token operator">=</span> <span class="token number">10.1</span><span class="token punctuation">;</span>\n    <span class="token keyword">double</span> <span class="token operator">*</span>my_pointer<span class="token punctuation">;</span>\n\n    my_pointer <span class="token operator">=</span> <span class="token operator">&amp;</span>my_double_variable<span class="token punctuation">;</span>\n\n    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%f\\n"</span><span class="token punctuation">,</span> my_double_variable<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token operator">++</span>my_double_variable<span class="token punctuation">;</span>\n    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%f\\n"</span><span class="token punctuation">,</span> <span class="token operator">*</span>my_pointer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>In this code, there are two declarations. The first is a typical variable initialization which creates a <code>double</code> and sets it equal to 10.1. New in our declarations is the usage of <code>*</code>. The asterisk (<code>*</code>) is usually used for multiplication, but when we use it by placing it in front of a variable it tells C that this is a pointer variable.  </p>\n<p>The next line tells the compiler where that somewhere else actually is. By using <code>&#x26;</code> in this way, it becomes the ‘dereferencing operator’, and returns the memory location of the variable it’s looking at.</p>\n<p>With that in mind, let’s take another look at this chunk of code:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token keyword">double</span> <span class="token operator">*</span>my_pointer<span class="token punctuation">;</span>\n\nmy_pointer <span class="token operator">=</span> <span class="token operator">&amp;</span>my_double_variable<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><code>my_pointer</code> has been declared, and it’s been declared as a pointer. The C compiler now knows that <code>my_pointer</code> is going to point to a memory location. The next line assigns <code>my_pointer</code> a memory location value using the <code>&#x26;</code>.</p>\n<p>Now let’s take a look what referring to a memory location means for your code:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%f\\n"</span><span class="token punctuation">,</span> my_double_variable<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">++</span>my_double_variable<span class="token punctuation">;</span>\n<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%f\\n"</span><span class="token punctuation">,</span> <span class="token operator">*</span>my_pointer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Notice that in order to get the value of the data at <code>*my_pointer</code>, you’ll need to tell C that you want to get the value the variable is pointing at. Try running this code without that asterisk, and you’ll be able to print the memory location, because that’s what the <code>my_variable</code> variable is actually holding.</p>\n<p>You can declare multiple pointer in a single statement as with standard variables, like so: </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>int *x, *y;</code></pre>\n      </div>\n<p>Notice that the <code>*</code> is required before each variable. This is because being a pointer is considered as part of the variable and not part of the datatype.</p>\n<h2>Practical Uses of Pointers</h2>\n<h3>Arrays</h3>\n<p>The most common application of a pointer is in an array. Arrays, which you’ll read about later, allow for a group of variables. You don’t actually have to deal with <code>*</code> and <code>&#x26;</code> to use arrays, but that’s what they’re doing behind the scenes.</p>\n<h3>Functions</h3>\n<p>Sometimes you want to adjust a variable in a function, but if you pass it to an array, it has its own copy to work with. If instead you pass that memory location, however, you can access it from outside of its normal scope. This is because you are touching the original memory location itself, allowing you to adjust something in a function and having it make changes elsewhere.</p>\n<h3>POINTERS AS PARAMETERS TO FUNCTION</h3>\n<p>when we pass any parameter to function we are making a copy of the parameter. let see with the example</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>\n\n<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span>\n    <span class="token function">func</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment" spellcheck="true">// print 11</span>\n    \n\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span><span class="token punctuation">{</span>\n a<span class="token operator">=</span><span class="token number">5</span>\n <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment" spellcheck="true">//print 5</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>In the example above we are changinging the value of integer a in function func, but we still geting 11 in the main function. This happens because in the function copy of integer a has passed as parameter, so in this function we have not access to the ‘a’ which is in main function.</p>\n<p>So how could you change the value of integer defined in main , by using another function? Here POINTERS comes in to role.\nwhen we supply pointer as a parameter , we have access to address of that parameter and we could to any thig with this parameter and result will be shown everywhere.\nBelow is an example which does exactly the same thing we want…</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>\n<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span>\n    <span class="token function">func</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment" spellcheck="true">// passing address of integer a</span>\n    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment" spellcheck="true">// prints 5</span>\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>a<span class="token punctuation">)</span><span class="token punctuation">{</span>\n <span class="token operator">*</span>a<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span>\n <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">*</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment" spellcheck="true">//prints 5</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Tricks with Memory Locations</h3>\n<p>Whenever it can be avoided, it’s a good idea to keep your code easy to read and understand. In the best case scenario, your code will tell a story- it will have easy to read variable names and make sense if you read it out loud, and you’ll use the occasional comment to clarify what a line of code does.</p>\n<p>Because of that, you should be careful when using pointers. It’s easy to make something confusing for you to debug or for someone else to read. However, it is possible to do some pretty neat things with them.</p>\n<p>Take a look at this code, which turns something from uppercase to lowercase:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>\n<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;ctype.h></span></span>\n\n<span class="token keyword">char</span> <span class="token operator">*</span>lowerCase <span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>string<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">char</span> <span class="token operator">*</span>p <span class="token operator">=</span> string<span class="token punctuation">;</span>\n    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">*</span>p<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isupper</span><span class="token punctuation">(</span><span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token function">tolower</span><span class="token punctuation">(</span><span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        p<span class="token operator">++</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> string<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This starts by taking a string (something you’ll learn about when you get into arrays) and runs through each location. Notice the p++. This increments the pointer, which means that it is looking at the next memory location. Each letter is a memory location, so in this way the pointer is looking at every letter and deciding what to do for each one.</p>\n<h3>Const Qualifer</h3>\n<p>The qualifier const can be applied to the declaration of any variable to specify that its value will not be changed ( Which depends upon where const variables are stored, we may change value of const variable by using pointer ).</p>\n<h1>Pointer to variable</h1>\n<p>We can change the value of ptr and we can also change the value of object ptr pointing to.\nFollowing code fragment explains pointer to variabel</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>#include <stdio.h>\nint main(void)\n{\n    int i = 10;\n    int j = 20;\n    int *ptr = &i;        /* pointer to integer */\n    printf("*ptr: %d\\n", *ptr);\n  \n    /* pointer is pointing to another variable */\n    ptr = &j;\n    printf("*ptr: %d\\n", *ptr);\n  \n    /* we can change value stored by pointer */\n    *ptr = 100;\n    printf("*ptr: %d\\n", *ptr);\n  \n    return 0;\n}</code></pre>\n      </div>\n<h1>Pointer to constant</h1>\n<p>We can change pointer to point to any other integer variable, but cannot change value of object (entity) pointed using pointer ptr.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>#include <stdio.h> \nint main(void)\n{\n    int i = 10;   \n    int j = 20;\n    const int *ptr = &i;    /* ptr is pointer to constant */\n  \n    printf("ptr: %d\\n", *ptr); \n    *ptr = 100;        /* error: object pointed cannot be modified\n                     using the pointer ptr */\n  \n    ptr = &j;          /* valid */\n    printf("ptr: %d\\n", *ptr);\n  \n    return 0;\n}</code></pre>\n      </div>\n<h1>Constant pointer to variable</h1>\n<p>In this we can change the value of the variable the pointer is pointing to. But we can’t change the pointer to point to\nanother variable.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>#include <stdio.h>\nint main(void)\n{\n   int i = 10;\n   int j = 20;\n   int *const ptr = &i;    /* constant pointer to integer */\n  \n   printf("ptr: %d\\n", *ptr);\n  \n   *ptr = 100;    /* valid */\n   printf("ptr: %d\\n", *ptr);\n  \n   ptr = &j;        /* error */\n   return 0;\n}</code></pre>\n      </div>\n<h1>constant pointer to constant</h1>\n<p>Above declaration is constant pointer to constant variable which means we cannot change value pointed by pointer as well as we cannot point the pointer to other variable.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>#include <stdio.h>\n  \nint main(void)\n{\n    int i = 10;\n    int j = 20;\n    const int *const ptr = &i;        /* constant pointer to constant integer */\n  \n    printf("ptr: %d\\n", *ptr);\n  \n    ptr = &j;            /* error */\n    *ptr = 100;        /* error */\n  \n    return 0;\n}</code></pre>\n      </div>\n<h1>Before you go on…</h1>\n<h2>A review</h2>\n<ul>\n<li>Pointers are variables, but instead of storing a value, they store a memory location.</li>\n<li><code>*</code> and <code>&#x26;</code> are used to access values at memory locations and to access memory locations, respectively.</li>\n<li>Pointers are useful for some of the underlying features of C.</li>\n</ul>',fields:{slug:"/c/pointers/"},frontmatter:{title:"Pointers"}}},pathContext:{slug:"/c/pointers/"}}}});
//# sourceMappingURL=path---c-pointers-1584e2cbb08472bcbe21.js.map