webpackJsonp([0x6609e27f9b37],{4207:function(e,a){e.exports={data:{markdownRemark:{html:'<h2>Tagging in Git</h2>\n<p>Tags are a convenient way to highlight some milestone in you version history. Be it a new version, release or just a flag one could see where you made some decision. From the point of view of git, tag is just another branch name, for a branch that will never change. Typically this feature is used to mark release points.</p>\n<h3>List Tags</h3>\n<p><code>git tag</code> will list the tags in alphabetical order.</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code>$ git tag\nv0.0.1\nv0.0.2</code></pre>\n      </div>\n<p>To list only the tags that match a certain pattern use <code>-l &#x3C;pattern></code>, like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code>$ git tag -l \'v2*\'\nv2.0.0\nv2.0.1</code></pre>\n      </div>\n<h3>Creating Tags</h3>\n<p>There are two available methods to create tags</p>\n<ol>\n<li>Annotated Tags</li>\n<li>Lightweight Tags</li>\n</ol>\n<h3>Annotated Tags</h3>\n<p>Annotated Tags is the full fledged version of creating a tag where it will contain a checksum, tagger name, email, date and tagging message etc.</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code>$ git tag -a v0.0.3 -m "Release Version 0.0.3"\n$ git tag\nv0.0.1\nv0.0.2\nv0.0.3 //new tag</code></pre>\n      </div>\n<p><code>-a</code> flag indicates that this is a annotated tag. <code>-m</code> flag lets you add in line massage. If you avoid <code>-m</code> you’d be provided with a window to enter the massage.</p>\n<p>Other options available are <code>-s</code> and <code>-u</code>, which create a GPG-signed tag using the default e-mail address as key or a given key.</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code>$ git tag -a v0.0.3 -u some-key</code></pre>\n      </div>\n<p>You can view the content of the tag by using <code>git show v0.0.3</code> command.</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code>$ git show v0.0.3\nTagger: John Doe <johndoe@gmail.com>\nDate:   Tue Jun 27 15:39:51 2017 +0530\n\nRelease Version 0.0.3\n\ncommit e3bbf5f990efd7ad54dccc8d9cb777daf65b70f9\nAuthor: John Doe <johndoe@gmail.com>\nDate:   Tue Jun 27 15:33:06 2017 +0530\n\n    Implement an awesome feature</code></pre>\n      </div>\n<h3>Lightweight Tags</h3>\n<p>Lightweight Tags is just keeping a reference to checksum, no other information is kept.</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code>$ git tag v0.0.4\n$ git tag\nv0.0.1\nv0.0.2\nv0.0.3\nv0.0.4 //new tag</code></pre>\n      </div>\n<p>if you use <code>git show</code> on a lightweight tag, you’ll see an output like this.</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code>$ git show v0.0.3\ncommit 1a6875173bfb5a7ad005d02a2dde65b3b424d0fb\nAuthor: John Doe <johndoe@gmail.com>\nDate:   Tue Jul 25 15:09:02 2017 +0530\n\n    Implement an awesome feature</code></pre>\n      </div>\n<p>As you can see only a reference of a checksum is kept here.</p>\n<h3>Tagging Later</h3>\n<p>You can also tag old commits by especifying the commit number at the end of the command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code>$ git tag v1.2 9fceb02</code></pre>\n      </div>\n<h3>Deleting a Tag</h3>\n<p>You may find a situation you want to delete a certain tag and you can find bellow command useful in such situations.</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code>$ git tag --delete v0.0.2\n$ git tag\nv0.0.1\nv0.0.3\nv0.0.4</code></pre>\n      </div>\n<h3>Pushing Tags</h3>\n<p>To share a tag you can you bellow code as <code>git push</code> by default does not transfer tags.</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code>$ git push origin v0.0.3</code></pre>\n      </div>\n<p>This will explicitly push a certain tag.</p>\n<p>But if you want to push all the tags at once, you could adopt below method using <code>--tags</code> flag.</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code>$ git push origin --tags</code></pre>\n      </div>\n<h3>Checking out Tags</h3>\n<p>You can checkout to a tag like you would normally do. But you need to keep in mind that this would result a “detached HEAD” state.</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code>$ git checkout v0.0.3\nNote: checking out \'v0.0.3\'.\n\nYou are in \'detached HEAD\' state. You can look around, make experimental\nchanges and commit them, and you can discard any commits you make in this\nstate without impacting any branches by performing another checkout.\n\n...</code></pre>\n      </div>\n<h4>More Information:</h4>\n<!-- Please add any articles you think might be helpful to read before writing the article -->\n<ul>\n<li>Git documentation: <a href=\'https://git-scm.com/book/en/v2/Git-Basics-Tagging\' target=\'_blank\' rel=\'nofollow\'>tag</a></li>\n</ul>',fields:{slug:"/git/tagging-in-git/"},frontmatter:{title:"Tagging in Git"}}},pathContext:{slug:"/git/tagging-in-git/"}}}});
//# sourceMappingURL=path---git-tagging-in-git-57118814ed9c82a26d40.js.map