webpackJsonp([0x63433fce5523],{4192:function(e,t){e.exports={data:{markdownRemark:{html:'<h2>Git Checkout</h2>\n<p>The <code>git checkout</code> command switches between branches or restores working tree files.  There are a number of different options for this command that won’t be covered here, but you can take a look at all of them in the <a href=\'https://git-scm.com/docs/git-checkout\' target=\'_blank\' rel=\'nofollow\'>Git documentation</a>.</p>\n<h3>Checkout a specific commit</h3>\n<p>to checkout a specific commit, run the command :</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code>git checkout specific-commit-id</code></pre>\n      </div>\n<p>we can get the specific commit id’s by running: </p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code>git log</code></pre>\n      </div>\n<h3>Checkout an Existing Branch</h3>\n<p>To checkout an existing branch, run the command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code>git checkout BRANCH-NAME</code></pre>\n      </div>\n<p>Generally, Git won’t let you checkout another branch unless your working directory is clean, because you would lose any working directory changes that aren’t committed. You have three options to handle your changes: 1) trash them, 2) <a href=\'https://guide.freecodecamp.org/git/git-commit/\' target=\'_blank\' rel=\'nofollow\'>commit them</a>, or 3) <a href=\'https://guide.freecodecamp.org/git/git-stash/\' target=\'_blank\' rel=\'nofollow\'>stash them</a>.</p>\n<h3>Checkout a New Branch</h3>\n<p>To create and checkout out a new branch with a single command, you can use:</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code>git checkout -b NEW-BRANCH-NAME</code></pre>\n      </div>\n<p>This will automatically switch you to the new branch.</p>\n<h3>Checkout a New Branch or Reset a Branch to a Start Point</h3>\n<p>The following command is similar to checking out a new branch, but uses the <code>-B</code> (note the captital B) flag and an optional <code>START-POINT</code> parameter:</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code>git checkout -B BRANCH-NAME START-POINT</code></pre>\n      </div>\n<p>If the <code>BRANCH-NAME</code> branch doesn’t exist, Git will create it and start it at <code>START-POINT</code>. If the <code>BRANCH-NAME</code> branch already exists, then Git resets the branch to <code>START-POINT</code>. This is equivalent to running <code>git branch</code> with <code>-f</code>.</p>\n<h3>Force a Checkout</h3>\n<p>You can pass the <code>-f</code> or <code>--force</code> option with the <code>git checkout</code> command to force Git to switch branches, even if you have un-staged changes (in other words, the index of the working tree differs from <code>HEAD</code>). Basically, it can be used to throw away local changes.</p>\n<p>When you run the following command, Git will ignore unmerged entries:</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code>git checkout -f BRANCH-NAME\n\n# Alternative\ngit checkout --force BRANCH-NAME</code></pre>\n      </div>\n<h3>Undo Changes in your Working Directory</h3>\n<p>You can use the <code>git checkout</code> command to undo changes you’ve made to a file in your working directory. This will revert the file back to the version in <code>HEAD</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code>git checkout -- FILE-NAME</code></pre>\n      </div>',fields:{slug:"/git/git-checkout/"},frontmatter:{title:"Git Checkout"}}},pathContext:{slug:"/git/git-checkout/"}}}});
//# sourceMappingURL=path---git-git-checkout-b672470730fc6dcb5ab9.js.map