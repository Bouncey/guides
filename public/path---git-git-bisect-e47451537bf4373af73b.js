webpackJsonp([0x963d99434992],{4195:function(t,e){t.exports={data:{markdownRemark:{html:'<h2>Git Bisect</h2>\n<p>The <code>git bisect</code> command helps you find commits that added specific changes in your project. This is particularly useful if you need to find which change introduced a bug.</p>\n<p>This command works by providing it a “bad” commit that includes the bug and a “good” commit from before the bug was introduced. Through binary search, <code>git bisect</code> will pick commits and ask you to identify whether the commit is “good” or “bad”. This continues until the command is able to find the exact commit that introduced the change.</p>\n<h3>Bisect Commands</h3>\n<p>To start a bisect session, you will tell git to start a bisect session, identify a “bad” version, and identify a “good” version. Assuming the current commit is broken but commit <code>4b60707</code> is good, you will run the following:</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code>git bisect start\ngit bisect bad\ngit bisect good 4b60707</code></pre>\n      </div>\n<p>Git will check out a commit between the “good” and “bad” versions and output something like the following:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Bisecting: 2 revisions left to test after this (roughly 2 steps)</code></pre>\n      </div>\n<p>You should now tell git if the current commit works with <code>git bisect good</code> or if the current commit is broken with <code>git bisect bad</code>. This process will repeat until the command is able to print out the first bad commit.</p>\n<p>When finished, you should clean up the bisect session. This will reset your HEAD to what it was before you started the bisect session:</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code>git bisect reset</code></pre>\n      </div>\n<h3>Other Resources</h3>\n<ul>\n<li><a href="https://git-scm.com/docs/git-bisect">Git bisect documentation</a></li>\n</ul>',fields:{slug:"/git/git-bisect/"},frontmatter:{title:"Git Bisect"}}},pathContext:{slug:"/git/git-bisect/"}}}});
//# sourceMappingURL=path---git-git-bisect-e47451537bf4373af73b.js.map