webpackJsonp([0x75d050ef9083],{3535:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>File Handling</h2>\n<h3>Introduction</h3>\n<p>If you’ve written the C <code>helloworld</code> program before, you’ve already done file IO in C!  Congratulations! :tada:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token comment" spellcheck="true">/* A simple hello world in C. */</span>\n<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h></span></span>\n\n<span class="token comment" spellcheck="true">// Import IO functions.</span>\n<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// This printf is where all the file IO magic happens!</span>\n    <span class="token comment" spellcheck="true">// How exciting!</span>\n    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Hello, world!\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> EXIT_SUCCESS<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>File Handling is most important part of a programmer . In C language we use a structure pointer of a file type to declare a file</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code>FILE <span class="token operator">*</span>fp<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>C provides a number of build-in function to perform basic file operation</p>\n<p><strong>fopen()</strong>   <strong>-</strong>   <strong>create a new file or open a existing file</strong></p>\n<p><strong>fclose()</strong>   <strong>-</strong>   <strong>close a file</strong></p>\n<p><strong>getc()</strong>   <strong>-</strong>   <strong>reads a character from a file</strong></p>\n<p><strong>putc()</strong>   <strong>-</strong>   <strong>writes a character to a file</strong></p>\n<p><strong>fscanf()</strong>   <strong>-</strong>   <strong>reads a set of data from a file</strong></p>\n<p><strong>fprintf()</strong>   <strong>-</strong>   <strong>writes a set of data to a file</strong></p>\n<p><strong>getw()</strong>   <strong>-</strong>   <strong>reads a integer from a file</strong></p>\n<p><strong>putw()</strong>   <strong>-</strong>   <strong>writes a integer to a file</strong></p>\n<p><strong>fseek()</strong>   <strong>-</strong>   <strong>set the position to desire point</strong></p>\n<p><strong>ftell()</strong>   <strong>-</strong>   <strong>gives current position in the file</strong></p>\n<p><strong>rewind()</strong>   <strong>-</strong>   <strong>set the position to the begining point</strong></p>\n<h3>Opening a file</h3>\n<p>  The <strong>fopen()</strong> function is used to create a file or open a existing file</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span> filename<span class="token punctuation">,</span><span class="token keyword">const</span> <span class="token keyword">char</span> mode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>  In C there are many mode for opening a file\n<strong>r</strong>  <strong>-</strong>   <strong>open a file in reading mode</strong></p>\n<p>  <strong>w</strong>  <strong>-</strong>   <strong>opens or create a text file in writing mode</strong></p>\n<p>  <strong>a</strong>  <strong>-</strong>   <strong>opens a file in append mode</strong></p>\n<p>  <strong>r+</strong>  <strong>-</strong>   <strong>opens a file in both reading and writing mode</strong></p>\n<p>  <strong>a+</strong>  <strong>-</strong>   <strong>opens a file in both reading and writing mode</strong></p>\n<p>  <strong>w+</strong>  <strong>-</strong>   <strong>opens a file in both reading and writing mode</strong></p>\n<p>  Here’s an  example of reading and writing data to a file</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token macro property">#<span class="token directive keyword">include</span><span class="token string">&lt;stdio.h></span></span>\n<span class="token macro property">#<span class="token directive keyword">include</span><span class="token string">&lt;conio.h></span></span>\n<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\nFILE <span class="token operator">*</span>fp<span class="token punctuation">;</span>\n<span class="token keyword">char</span> ch<span class="token punctuation">;</span>\nfp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">"hello.txt"</span><span class="token punctuation">,</span> <span class="token string">"w"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter data"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">while</span><span class="token punctuation">(</span> <span class="token punctuation">(</span>ch <span class="token operator">=</span> <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token constant">EOF</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">putc</span><span class="token punctuation">(</span>ch<span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>\nfp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">"hello.txt"</span><span class="token punctuation">,</span> <span class="token string">"r"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">while</span><span class="token punctuation">(</span> <span class="token punctuation">(</span>ch <span class="token operator">=</span> <span class="token function">getc</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token operator">!</span> <span class="token operator">=</span> <span class="token constant">EOF</span><span class="token punctuation">)</span>\n  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%c"</span><span class="token punctuation">,</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  \n<span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Now you might be thinking, “this justs prints text to my screen.  How is this file IO?”\nThe answer isn’t obvious at first, and needs some understanding about the UNIX system.\nUnder a UNIX system, everything is treated as a file, meaning you can read and write from it.\nThis means that your printer can be abstracted as a file since all you do with a printer is write with it.\nIt is also useful to think of these files as streams, since as you’ll see later, you can redirect them with the shell.</p>\n<p>So how does this relate to <code>helloworld</code> and file IO?</p>\n<p>When you call <code>printf</code>, you are really just writing to a special file called <code>stdout</code>, short for <strong>standard output</strong>.\n<code>stdout</code> represents, well, the standard output as decided by your shell, which is usually the terminal.\nThis explains why it printed to your screen.</p>\n<p>There are two other streams (i.e. files) that are available to you with effort, <code>stdin</code> and <code>stderr</code>.\n<code>stdin</code> represents the <strong>standard input</strong>, which your shell usually attaches to the keyboard.\n<code>stderr</code> represents the <strong>standard error</strong> output, which your shell usually attaches to the terminal.</p>\n<h3>Rudimentary File IO, or How I Learnt to Lay Pipes</h3>\n<p>Enough theory, let’s get down to business by writing some code!\nThe easist way to write to a file is to redirect the output stream using the output redirect tool, <code>></code>.\nIf you want to append, you can use <code>>></code>. <em>N.b. these redirection operators are in</em> <code>bash</code> <em>and similar shells.</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token comment" spellcheck="true"># This will output to the screen...</span>\n./helloworld\n<span class="token comment" spellcheck="true"># ...but this will write to a file!</span>\n./helloworld <span class="token operator">></span> hello.txt\n</code></pre>\n      </div>\n<p>The contents of <code>hello.txt</code> will, not surprisingly, be</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Hello, world!</code></pre>\n      </div>\n<p>Say we have another program called <code>greet</code>, similar to <code>helloworld</code>, that greets you given your name.</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>\n<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h></span></span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// Initialize an array to hold the name.</span>\n    <span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// Read a string and save it to name.</span>\n    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%s"</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// Print the greeting.</span>\n    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Hello, %s!"</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> EXIT_SUCCESS<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Instead of reading from the keyboard, we can redirect <code>stdin</code> to read from a file using the <code>&#x3C;</code> tool.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token comment" spellcheck="true"># Write a file containing a name.</span>\n<span class="token keyword">echo</span> Kamala <span class="token operator">></span> name.txt\n<span class="token comment" spellcheck="true"># This will read the name from the file and print out the greeting to the screen.</span>\n./greet <span class="token operator">&lt;</span> name.txt\n<span class="token comment" spellcheck="true"># ==> Hello, Kamala!</span>\n<span class="token comment" spellcheck="true"># If you wanted to also write the greeting to a file, you could do so using ">".</span>\n</code></pre>\n      </div>\n<h3>The Real Deal</h3>\n<p>The above methods only worked for the most basic of cases.  If you wanted to do bigger and better things, you will probably want to work with files from within C instead of through the shell.\nTo accomplish this, you will use a function called <code>fopen</code>.  This function takes two string parameters, the first being the file name and the second being the mode.\nMode is basically permissions, so <code>r</code> for read, <code>w</code> for write, <code>a</code> for append.  You can also combine them, so <code>rw</code> would mean you could read and write to the file.  There are more modes, but these are the most used.</p>\n<p>After you have a <code>FILE</code> pointer, you can use basically the same IO commands you would’ve used, except that you have to prefix them with <code>f</code> and the first argument will be the file pointer.\nFor example, <code>printf</code>’s file version is <code>fprintf</code>.</p>\n<p>Here’s a program called <code>greetings</code> that reads a from a file containing a list of names and writes to another file the greetings.</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>\n<span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h></span></span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// Create file pointers.</span>\n    FILE <span class="token operator">*</span>names <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">"names.txt"</span><span class="token punctuation">,</span> <span class="token string">"r"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    FILE <span class="token operator">*</span>greet <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">"greet.txt"</span><span class="token punctuation">,</span> <span class="token string">"w"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment" spellcheck="true">// Check that everything is OK.</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>names <span class="token operator">||</span> <span class="token operator">!</span>greet<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">fprintf</span><span class="token punctuation">(</span><span class="token constant">stderr</span><span class="token punctuation">,</span> <span class="token string">"File opening failed!\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> EXIT_FAILURE<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment" spellcheck="true">// Greetings time!</span>\n    <span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// Basically keep on reading untill there\'s nothing left.</span>\n    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">fscanf</span><span class="token punctuation">(</span>names<span class="token punctuation">,</span> <span class="token string">"%s\\n"</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">fprintf</span><span class="token punctuation">(</span>greet<span class="token punctuation">,</span> <span class="token string">"Hello, %s!\\n"</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment" spellcheck="true">// When reached the end, print a message to the terminal to inform the user.</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">feof</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Greetings are done!\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> EXIT_SUCCESS<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Suppose <code>names.txt</code> contains the following:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Kamala\nLogan\nCarol</code></pre>\n      </div>\n<p>Then after running <code>greetings</code> the file <code>greet.txt</code> will contain:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Hello, Kamala!\nHello, Logan!\nHello, Carol!</code></pre>\n      </div>\n<p>Super awesome, right! :smile:</p>\n<h3>More Information:</h3>\n<ul>\n<li><a href=\'https://en.wikibooks.org/wiki/C_Programming/File_IO\' target=\'_blank\' rel=\'nofollow\'>Wikibooks page on file IO</a></li>\n</ul>',fields:{slug:"/c/file-handling/"},frontmatter:{title:"File Handling"}}},pathContext:{slug:"/c/file-handling/"}}}});
//# sourceMappingURL=path---c-file-handling-5df03473c8282d7faeca.js.map