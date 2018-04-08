webpackJsonp([64854025098463],{5562:function(e,o){e.exports={data:{markdownRemark:{html:"<p><strong>Use-cases</strong></p>\n<p>You might need to modify <code>git</code> commands that access (to update and read from) remote repositories if your internet access is through a <a href='https://en.wikipedia.org/wiki/Proxy_server' target='_blank' rel='nofollow'>proxy server</a>.</p>\n<p>Proxy servers are common in college and business type environments.</p>\n<p>You can <a href='http://www.wikihow.com/Change-Proxy-Settings' target='_blank' rel='nofollow'>locate your proxy settings</a> from your browser’s settings panel.</p>\n<h2>Using Proxy with Git</h2>\n<p>Once you have obtained the proxy settings (server URL, port, username and password); you need to configure your git as follows:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>$ git config --global http.proxy http://<username>:<password>@<proxy-server-url>:<port></code></pre>\n      </div>\n<p>You would need to replace <code>&#x3C;username></code>, <code>&#x3C;password></code>, <code>&#x3C;proxy-server-url></code>, <code>&#x3C;port></code> with the values specific to your proxy server credentials. These fields are optional. For instance, your proxy server might not even require <code>&#x3C;username></code> and <code>&#x3C;password></code>, or that it might be running on port 80 (in which case <code>&#x3C;port></code> is not required).</p>\n<p>Once you have set these, your <code>git pull</code>, <code>git push</code> or even <code>git fetch</code> would work properly.</p>\n<h2>When Not to Use</h2>\n<p>You should not have to use <code>git</code> commands with proxy settings, if either of the following happens</p>\n<ul>\n<li>Your system administrator or corporate policy does not allow you to access remote <code>git</code> repositories from GitHub, BitBucket etc.</li>\n<li>The remote repository in question is not in your machine, but it’s within the internal network. An instance of GitLab deployed internally at your company is a good example.</li>\n</ul>\n<h2>Unset Proxy Settings</h2>\n<p>Use <a href='http://stackoverflow.com/questions/11499805/git-http-proxy-setting' target='_blank' rel='nofollow'>this</a> Stack Overflow discussion to unset your proxy settings.</p>\n<h2>Resources</h2>\n<p>You may use the following for further reading on this:</p>\n<ul>\n<li><a href='https://help.github.com/desktop/faq/articles/can-i-log-in-behind-a-proxy-server/#platform-windows' target='_blank' rel='nofollow'>Can I Log In Behind A Proxy Server</a></li>\n<li><a href='https://git-scm.com/docs/git-config' target='_blank' rel='nofollow'>Git Config</a></li>\n</ul>",fields:{slug:"/miscellaneous/git-behind-a-proxy-server/"},frontmatter:{title:"Git Behind a Proxy Server"}}},pathContext:{slug:"/miscellaneous/git-behind-a-proxy-server/"}}}});
//# sourceMappingURL=path---miscellaneous-git-behind-a-proxy-server-6662d22ca7c1ef9ca342.js.map