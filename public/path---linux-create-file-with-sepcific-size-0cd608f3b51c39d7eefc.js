webpackJsonp([0xa122cd9a3822],{4829:function(e,i){e.exports={data:{markdownRemark:{html:'<h2>How to create dummy files with a specific size using the “dd” command:</h2>\n<p>The “dd” command can be used to create a file of a specific size. This is useful if you would like to test download speeds, or any other tests, and need a file of a specific size.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>dd if=/dev/zero of=file_name.txt bs=1024k count=10</code></pre>\n      </div>\n<p>This will create a file of 1MB called file_name.txt.</p>\n<p>bs is your byte size and count represent the number of blocks. An easy way to look at is 1024K X 10.</p>\n<p>Here is an even simpler way to create a 1MB file:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>dd if=/dev/zero of=file_name.txt bs=1MB count=1</code></pre>\n      </div>',fields:{slug:"/linux/create-file-with-sepcific-size/"},frontmatter:{title:"Create a dummy file with a specific size"}}},pathContext:{slug:"/linux/create-file-with-sepcific-size/"}}}});
//# sourceMappingURL=path---linux-create-file-with-sepcific-size-0cd608f3b51c39d7eefc.js.map