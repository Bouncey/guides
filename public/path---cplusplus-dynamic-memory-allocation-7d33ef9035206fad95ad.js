webpackJsonp([0xe0f9c2bc4cfb],{3898:function(e,o){e.exports={data:{markdownRemark:{html:"<h2>Dynamic Memory Allocation in C++</h2>\n<h3>What is Dynamic Memory Allocation in C++?</h3>\n<ul>\n<li><strong>Memory Allocation</strong> in C++ refers to the memory alloted to the variables you use throughout your program.</li>\n<li><strong>Dynamic Memory Allocation</strong> is the memory which is alloted to the variables at the run-time and the amount of memory required is also decided at the run-time.</li>\n<li>This memory comes from <strong>heap</strong>, whereas <em>non-static</em> variables and <em>local</em> variables get memory from <strong>stack</strong>.</li>\n<li>In C++, the programmer can perform memory allocations manually, and is called as <strong><em>dynamic memory allocation</em></strong>.</li>\n<li>It was possible in C to do dynamic memory allocation, by using <em>calloc</em> and <em>malloc</em> functions to allocate memory and using <em>free</em> function to de-allocate the dynamic memory.</li>\n<li>In C++, in addition to above, there are two functions, <em>new</em> and <em>delete</em> for performing dynamic memory allocation and de-allocation.</li>\n</ul>\n<h3>NEW operator</h3>\n<ul>\n<li><code>new</code> operator can grant the programmer memory from the heap (if available). If the memory which the programmer asks is available, then the <code>new</code> operator initializes the memory and then returns the address (reference) of the memory allocated.</li>\n<li><strong>Syntax</strong><br>\n<code>pointer-variable-type</code> = <strong>new</strong> <code>data-type;</code><br>\nExample 1: <code>int *ptr</code> = <strong>new</strong> <code>int;</code><br>\nExample 2: <code>int *ptr2</code> = <strong>new</strong> <code>int[10];</code><br>\nHere, <code>pointer-variable-type</code> is a <strong>pointer</strong> of <code>data type</code>. The <code>data-type</code> can be int, char, etc. or user-defined data-type.    </li>\n</ul>\n<h3>DELETE operator</h3>\n<ul>\n<li>It is programmer’s responsibility to de-allocate the dynamically allocated memory otherwise the memory would not be available to be re-allocated until the end of the program.</li>\n<li>To deallocate the memory, <code>delete</code> operator is available and can be used by the programmer.</li>\n<li><strong>Syntax</strong><br>\n<strong>delete</strong> <code>pointer-type-variable;</code><br>\nFor example to free the memory allocated in example 1 above, we type:<br>\n<code>delete ptr;</code><br>\nSimilarly, for example 2, the memory can be freed by:<br>\n<code>delete ptr2</code>;</li>\n</ul>",fields:{slug:"/cplusplus/dynamic-memory-allocation/"},frontmatter:{title:"Dynamic Memory Allocation"}}},pathContext:{slug:"/cplusplus/dynamic-memory-allocation/"}}}});
//# sourceMappingURL=path---cplusplus-dynamic-memory-allocation-7d33ef9035206fad95ad.js.map