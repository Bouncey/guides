webpackJsonp([0x65c6674ba219],{4221:function(o,n){o.exports={data:{markdownRemark:{html:'<h1>Installing Go on Windows</h1>\n<h2>Downloading Go</h2>\n<p>Go to <a href="https://golang.org/">https://golang.org/</a> and click on <strong>Download Go</strong>. Click and download <strong>go1.9.1.windows-amd64.msi</strong> and go through the Setup Wizard once the download completes.</p>\n<h2>Creating a workspace</h2>\n<p>You will need to create a workspace to write and run Go code. You can create your workspace by opening the Windows PowerShell application. You should be in the user directory already, but if you aren’t then navigate to <strong>C:\\Users\\YOUR<em>WINDOWS</em>USERNAME</strong>. Once here, run the following commands on PowerShell:</p>\n<p><code>mkdir go</code></p>\n<p><code>cd .\\go\\</code></p>\n<p><code>mkdir src</code></p>\n<p><code>cd .\\src\\</code></p>\n<p><code>mkdir hello</code></p>\n<p><code>cd .\\hello\\</code></p>\n<p>After creating the workspace, create a file named <code>hello.go</code> with your preferred text editor and save it in the workspace you just created - <strong>C:\\Users\\YOUR<em>WINDOWS</em>USERNAME\\go\\src\\hello</strong></p>\n<h2>Writing and running a Go program</h2>\n<p>After creating your workspace, you can add the following code to <code>hello.go</code> and save it:</p>\n<div class="gatsby-highlight">\n      <pre class="language-go"><code><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token string">"fmt"</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Hello, FreeCodeCamp!\\n"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Back in PowerShell, make sure you are in <strong>C:\\Users\\YOUR<em>WINDOWS</em>USERNAME\\go\\src\\hello</strong>. You can now build your code with the <code>go</code> tool:</p>\n<p><code>go build</code></p>\n<p>This command builds an executable named <code>hello.exe</code> in the directory alongside your source code. You can then run your executable by running this command:</p>\n<p><code>.\\hello.exe</code></p>\n<p>The output of the program should be <strong>Hello, FreeCodeCamp!</strong> Congratulations! Your Go installation is working and you are well on your way to writing Go!</p>\n<h2>Useful links</h2>\n<p>For more information on code organization, packages, testing, etc. check out the following links:</p>\n<ul>\n<li>How to Write Go Code  - <a href="https://golang.org/doc/code.html">https://golang.org/doc/code.html</a></li>\n<li>Setting GOPATH - <a href="https://github.com/golang/go/wiki/Setting-GOPATH">https://github.com/golang/go/wiki/Setting-GOPATH</a></li>\n</ul>',fields:{slug:"/go/installing-go/"},frontmatter:{title:"Installing Go"}}},pathContext:{slug:"/go/installing-go/"}}}});
//# sourceMappingURL=path---go-installing-go-ca36791cebeec37bae1f.js.map