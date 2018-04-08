webpackJsonp([0xc7c01783d24d],{6207:function(e,o){e.exports={data:{markdownRemark:{html:"<h2>Useful Commands</h2>\n<h3>Moving in “normal” mode</h3>\n<p>Vim allows a wide range of movement in normal mode.</p>\n<p>Basic one character movements (using key from the keyboard homerow):</p>\n<ul>\n<li><strong>h</strong>   move one character left</li>\n<li><strong>j</strong>   move one row down</li>\n<li><strong>k</strong>   move one row up</li>\n<li><strong>l</strong>   move one character right</li>\n</ul>\n<p>As many vim commands, row movement can be prefixed by a number to move several lines at a time:</p>\n<ul>\n<li><strong>4j</strong>  move 4 rows down</li>\n<li><strong>6k</strong>  move 6 rows up</li>\n</ul>\n<p>Basic word movements:</p>\n<ul>\n<li><strong>w</strong>   move to beginning of next word</li>\n<li><strong>b</strong>   move to previous beginning of word</li>\n<li><strong>e</strong>   move to end of word</li>\n<li><strong>W</strong>   move to beginning of next word after a whitespace</li>\n<li><strong>B</strong>   move to beginning of previous word before a whitespace</li>\n<li><strong>E</strong>   move to end of word before a whitespace</li>\n</ul>\n<p>As said above all these commands can be prefixed with a number to specify the number of word to used:\n— <strong>2w</strong> move to the beginning of the “second” next word</p>\n<p>Beginning/End of line movement:</p>\n<ul>\n<li><strong>0</strong>   move to the beginning of the line</li>\n<li><strong>$</strong>   move to the end of the line</li>\n</ul>\n<h3>Saving</h3>\n<ol>\n<li>Press <code>Escape</code> to make sure you’re in <code>normal mode</code>;</li>\n<li>Type in <code>:w</code> (“w” stands for “write”);</li>\n<li>Press <code>Enter</code>.</li>\n</ol>\n<h2>Exiting Vi, Vim, Nvim, Gvim</h2>\n<ol>\n<li>Press escape to get you into “normal” mode</li>\n<li>Type <code>:q</code>, press enter. If you receive an error try <code>:q!</code></li>\n<li>To exit and save, type <code>:q</code></li>\n</ol>\n<p><strong>OR</strong></p>\n<ul>\n<li>Type ZZ (save and quit)</li>\n<li>Type <code>:wq</code> (save and quit but using with the commonly used “w” and “q” commands)</li>\n</ul>\n<h2>Setting line numbers</h2>\n<ol>\n<li>Press escape to get you into “normal” mode</li>\n<li>Type <code>:set number</code>, press enter</li>\n</ol>\n<p>To set line numbers on by default:</p>\n<ol>\n<li>Open/create the vim configuration file with <code>vim ~/.vimrc</code></li>\n<li>Add the line <code>set number</code>, press enter</li>\n</ol>\n<h2>Bare minimum functionality</h2>\n<p>Most likely you’ll find yourself in “normal” mode, it allows you to enter commands by pressing the colon <code>:</code> key.\nTo get here from other modes you can type <code>ctrl + c</code> or <code>escape</code>.</p>\n<p>To edit text and move around in a familiar way press <code>i</code>, for “insert” mode.\nTry to move around with the arrow keys in “insert” mode.</p>\n<p>Depending on the configuration, you may enter a file browser by typing and entering the command <code>:e .</code> in “normal” mode. The ‘e’ stands for edit, and the period for the file or directory.</p>\n<h2>Writing in a file</h2>\n<ol>\n<li>Press <code>i</code>. You are now in insert mode and can edit your file.</li>\n<li>Press esc to get back to normal mode.</li>\n</ol>\n<h2>Searching a file in Vim</h2>\n<p>When in normal mode (press the <code>escape</code> key to make sure), you can search for any term in the document by typing <code>/</code>, followed by the term you’re looking for, and then pressing <code>enter</code>. For example, type <code>/hello</code> and press <code>enter</code> to search for the word “hello” in the current file.</p>\n<p>You can skip to the next occurrence of your search term by pressing <code>n</code>, or the previous occurrence by pressing <code>N</code>.</p>\n<h2>Pasting blocks of code</h2>\n<p>Very often you will find yourself looking for solutions to problems, and finding someone has written a block of code that does exactly what you want.\nIf you try to copy and paste the code directly into Vim you might find that the code is weirdly formatted or hasnt’t been pasted correctly.\nThis is due to the fact that vim reads each character that you paste one after the other, meaning any key-combinations that activates a Vim shortcut will be executed and Vim will try (and fail) to automatically indent the pasted code.</p>\n<p>To overcome this you can use Vim’s <strong>Paste mode</strong> which you can activate by entering normal mode (press <code>escape</code> or <code>crtl + c</code>) and type <code>:set paste</code>, then press ENTER.\nYou are now in <em>paste</em> mode.\nYou can then enter insert mode with <code>i</code> and paste the block of text/code without any issues!\nTo return to regular Vim without paste mode you can enter normal mode (<code>escape</code> or <code>crtl + c</code>) and type <code>:set nopaste</code>, and press ENTER</p>\n<h2>I Want to Learn Vim!</h2>\n<p>For total beginners, Vim comes with a built in tutorial! You can access it by running <code>vimtutor</code> from your terminal and this will launch an interactive tutorial on <em>how to get started with Vim</em> (takes around 15 minutes to work through).</p>\n<p>If you are not as confident in English, you can lanch <code>vimtutor</code> in your language of choice. For example <code>vimtutor fr</code> will launch the tutorial in french!</p>\n<h2>Find and Replace</h2>\n<ol>\n<li>Press <code>Escape</code> to make sure your are in <code>normal mode</code>;</li>\n<li>Type in <code>:</code> (You will switch to <code>command mode</code>);</li>\n<li>Type <code>%s,word_to_be_replaced,new_word,g</code>;</li>\n<li>Press <code>ENTER</code>.</li>\n</ol>\n<p>Important: if you want to replace the first occurence of the word, remove the at the end.</p>\n<p>Play Vim(<a href=\"https://vim-adventures.com/\">https://vim-adventures.com/</a>) - A fun way to learn vim plating a step-by-step game.</p>\n<p>Read the rest of our Vim Guides to get a better understanding of this powerful editor.</p>\n<h2>Other Resources</h2>\n<ul>\n<li><a href='https://vimgolf.com/' target='_blank' rel='nofollow'>Vim Golf</a> - A good way to learn from doing vim challenges to get the lowest amount of keystrokes. You can see solutions submitted by others if you can’t figure the challenge out.</li>\n<li>Read the rest of our Vim Guides to get a better understanding of this powerful editor.</li>\n</ul>",fields:{slug:"/vim/useful-commands/"},frontmatter:{title:"Useful Commands"}}},pathContext:{slug:"/vim/useful-commands/"}}}});
//# sourceMappingURL=path---vim-useful-commands-617caccba2ae0702c486.js.map