webpackJsonp([0x9c8f794634c4],{5530:function(e,o){e.exports={data:{markdownRemark:{html:'<p>// locally ((if you know what you are doing!)\ngit branch -d localBranchName</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>// and then if you need to...\n// on remote\ngit push origin :remoteBranchName</code></pre>\n      </div>\n<h2>When to Delete branches?</h2>\n<p>Normally in a contribution flow <code>Branches</code> are a great way to work on different features, fixes, etc. while isolating them from the main codebase. So a repo may have a <code>master</code> branch, and separate branches to work on different features.</p>\n<p>Typically once the work is completed on a feature and it is recommended to delete the branch.</p>\n<h2>The Delete workflow:</h2>\n<p>Lets say you have a repo called as <code>AwesomeRepo</code>, and its hosted on Github, at a location such as <code>https://github.com/my_username/AwesomeRepo</code>.</p>\n<p>Also lets assume it has the branches like:<br>\n<code>master</code><br>\n<code>feature/some-cool-new-stuff</code><br>\n<code>fix/authentication</code><br>\n<code>staging</code></p>\n<p>For consistency we will assume branch names are same on <code>local</code> as well as on the <code>remote</code>.</p>\n<p>Now, lets say you are done with that fix for authentication and want to remove the branch <code>fix/authentication</code>.</p>\n<h2>Deleting the branch REMOTELY:</h2>\n<p>Simply do:</p>\n<p><code>git push --delete &#x3C;remote> &#x3C;branch></code>.</p>\n<p>For example: <code>git branch --delete origin fix/authentication</code></p>\n<p>If you get the error</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>error: unable to push to unqualified destination: remoteBranchName The destination refspec neither matches an existing ref on the remote nor begins with refs/, and we are unable to guess a prefix based on the source ref. error: failed to push some refs to \'git@repository_name\'</code></pre>\n      </div>\n<p>Perhaps someone else has already deleted the branch. Try to synchronize your branch list using</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>git fetch -p</code></pre>\n      </div>\n<p>The git manual says -p, —prune After fetching, remove any remote-tracking branches which no longer exist on the remote.</p>\n<h2>Deleting the branch LOCALLY:</h2>\n<p>First checkout to a branch other that the one you want to delete:</p>\n<p><code>git checkout &#x3C;branch></code>.</p>\n<p>For example: <code>git checkout master</code></p>\n<p>Git will not let you delete the branch you are currently on.</p>\n<p>Then proceed with deleting:</p>\n<p><code>git branch -D &#x3C;branch></code>.</p>\n<p>For example: <code>git branch -D fix/authentication</code></p>',fields:{slug:"/miscellaneous/delete-a-git-branch-both-locally-and-remotely/"},frontmatter:{title:"Delete a Git Branch Both Locally and Remotely"}}},pathContext:{slug:"/miscellaneous/delete-a-git-branch-both-locally-and-remotely/"}}}});
//# sourceMappingURL=path---miscellaneous-delete-a-git-branch-both-locally-and-remotely-79ad881ce100b7b8bea7.js.map