webpackJsonp([53496193565722],{5777:function(e,s){e.exports={data:{markdownRemark:{html:'<h1>PHP Sessions</h1>\n<p>A session is a way to store information (in variables) to be used across multiple pages.<br>\nUnlike a cookie, the information is not stored on the user’s computer.</p>\n<h2>What is a PHP Session?</h2>\n<p>When you work with an application, you open it, do some changes, and then you close it. This is much like a Session.<br>\nThe computer knows who you are. It knows when you start the application and when you end.<br>\nBut on the internet there is one problem: the web server does not know who you are or what you do, because the HTTP address <em>doesn’t maintain state</em>.  </p>\n<p>Session variables solve this problem by storing user information to be used across multiple pages (e.g. username, favorite color, etc).<br>\nBy default, session variables last until the user closes the browser.  </p>\n<p><strong>Session variables hold information about one single user, and are available to all pages in one application.</strong>  </p>\n<p><strong>Note:</strong> If you need a permanent storage, you may want to store the data in a database.</p>\n<h2>Start a PHP Session</h2>\n<p>A session is started with the <em>session</em>start()_ function.<br>\nSession variables are set with the PHP global variable: $_SESSION.</p>\n<p><strong>Example:</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><?php\n// Start the session\nsession_start();\n?>\n<!DOCTYPE html>\n<html>\n<body>\n\n<?php\n// Set session variables\n$_SESSION["favcolor"] = "blue";\n$_SESSION["favanimal"] = "dog";\necho "Session variables are set.";\n?>\n\n</body>\n</html></code></pre>\n      </div>\n<p><strong>Note:</strong> The session_start() function must be the <strong>very first thing</strong> in your document. <strong>Before</strong> any HTML tags.</p>\n<p>Output:<br>\nSession variables are set.</p>\n<h2>Get PHP Session Variable Values</h2>\n<p>Note that session variables are not passed individually to each new page, instead they are retrieved from the session we open at the beginning of each page (session_start()).</p>\n<p>Also note that all session variable values are stored in the global $_SESSION variable:</p>\n<p><strong>Example:</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><?php\nsession_start();\n?>\n<!DOCTYPE html>\n<html>\n<body>\n\n<?php\n// Echo session variables that were set on previous page\necho "Favorite color is " . $_SESSION["favcolor"] . ".<br>";\necho "Favorite animal is " . $_SESSION["favanimal"] . ".";\n?>\n\n</body>\n</html></code></pre>\n      </div>\n<p>Output:<br>\nFavorite color is blue.<br>\nFavorite animal is dog.</p>\n<p>Another way to show all the session variable values for a user session is to run the following code:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><?php\nprint_r($_SESSION);\n?></code></pre>\n      </div>\n<h3>How does it work?</h3>\n<p>Most sessions set a user-key on the user’s computer that looks something like this: 765487cf34ert8dede5a562e4f3a7e12.<br>\nThen, when a session is opened on another page, it scans the computer for a user-key.<br>\nIf there is a match, it accesses that session, if not, it starts a new session.</p>\n<h2>Modify a Session Variable</h2>\n<p>To change a session variable, just overwrite it:</p>\n<p><strong>Example:</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><?php\nsession_start();\n?>\n<!DOCTYPE html>\n<html>\n<body>\n\n<?php\n// to change a session variable, just overwrite it \n$_SESSION["favcolor"] = "pink";\nprint_r($_SESSION);\n?>\n\n</body>\n</html></code></pre>\n      </div>\n<h2>Destroy a PHP Session</h2>\n<p>To remove all global session variables and destroy the session, use <em>session</em>unset()_ and <em>session</em>destroy()_:</p>\n<p><strong>Example:</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><?php\nsession_start();\n?>\n<!DOCTYPE html>\n<html>\n<body>\n\n<?php\n// remove all session variables\nsession_unset(); \n\n// destroy the session \nsession_destroy(); \n?>\n\n</body>\n</html></code></pre>\n      </div>',fields:{slug:"/php/pp-sessions/"},frontmatter:{title:"PHP Sessions"}}},pathContext:{slug:"/php/pp-sessions/"}}}});
//# sourceMappingURL=path---php-pp-sessions-e37ff5391e2afe4e61a5.js.map