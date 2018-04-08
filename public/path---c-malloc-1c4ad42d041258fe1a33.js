webpackJsonp([91519407754894],{3548:function(e,n){e.exports={data:{markdownRemark:{html:'<h1>Malloc in C</h1>\n<p>Malloc is a library function that allows C to allocate memory dynamically from the heap. The heap is an area of memory where something is stored.</p>\n<h2>Using Malloc</h2>\n<p>Malloc() allocates memory of a requested size and returns a pointer to the beginning of the block. To hold this returned pointer, we must create a variable. The pointer should be of same type used in the malloc statement.<br>\nHere we’ll make a pointer to a soon-to-be array of ints</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token keyword">int</span><span class="token operator">*</span> arrayPtr<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Unlike other languages, C does not know the data type it is allocating memory for, it needs to be told. Luckily, c has a function called <code>sizeof()</code> that we can use.</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code>arrayPtr <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This statement used malloc to set aside memory for an array of 10 integers. As sizes can change between computers, it’s important to use the sizeof() function to calculate the size on the current computer.  </p>\n<p>Any memory allocated during the program will need to be freed before the program closes. To <code>free</code> memory, we can use the free() function</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token function">free</span><span class="token punctuation">(</span> arrayPtr <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This statement will deallocate the memory previously allocated. C does not come with a <code>garbage collector</code> like some other languages, like Java. Because of this, memory not properly freed will continue to be allocated after the program is closed.</p>\n<h1>Before you go on…</h1>\n<h2>A Review</h2>\n<ul>\n<li>Malloc is used for dynamic memory allocation and is useful when you don’t know the amount of memory needed during compile time.</li>\n<li>Allocating memory allows objects to exist beyond the scope of the current block.</li>\n<li>C passes by value instead of reference. Using malloc to assign memory, and then pass the pointer to another function, is more efficient than having the function recreate the structure.</li>\n</ul>',fields:{slug:"/c/malloc/"},frontmatter:{title:"malloc"}}},pathContext:{slug:"/c/malloc/"}}}});
//# sourceMappingURL=path---c-malloc-1c4ad42d041258fe1a33.js.map