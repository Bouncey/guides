webpackJsonp([0xbe3f78e559b1],{5654:function(e,o){e.exports={data:{markdownRemark:{html:'<p>Now it’s time to set up our file structure before we write any code.</p>\n<p>Firstly, let’s create a new file called <code>.gitignore</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>touch .gitignore</code></pre>\n      </div>\n<p>This file will contain a list of all the files and folders that are <strong>not</strong> to be included when we push our project to GitHub. There is a website that serves boilerplate code for <code>.gitignore</code> files, which is very useful, because often, a <code>.gitignore</code> file can be rather long and verbose, and we may forget some files or folders that we want Git to ignore.</p>\n<p>Go to <a href=\'https://www.gitignore.io/\' target=\'_blank\' rel=\'nofollow\'>https://www.gitignore.io/</a> and type <code>Node</code> into the search bar, then click <code>Generate</code>. This will generate a file that looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code># Created by https://www.gitignore.io/api/node\n\n### Node ###\n# Logs\nlogs\n*.log\nnpm-debug.log*\n\n# Runtime data\npids\n*.pid\n*.seed\n\n# Directory for instrumented libs generated by jscoverage/JSCover\nlib-cov\n\n# Coverage directory used by tools like istanbul\ncoverage\n\n# Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)\n.grunt\n\n# node-waf configuration\n.lock-wscript\n\n# Compiled binary addons (http://nodejs.org/api/addons.html)\nbuild/Release\n\n# Dependency directories\nnode_modules\njspm_packages\n\n# Optional npm cache directory\n.npm\n\n# Optional REPL history\n.node_repl_history</code></pre>\n      </div>\n<p>Now we can copy and paste that into our <code>.gitignore</code> file.</p>\n<p>Notice that the <code>.gitignore</code> file should always include <code>node_modules</code>. This is extremely important, because we don’t want to include our <code>node_modules</code> folder with our Git commits, as they take up a lot of disk space, and can be installed with <code>npm install</code>, which refers to our <code>package.json</code>.</p>\n<p>Most of the files and folders listed in our <code>.gitignore</code> file don’t exist in our project yet, but if they do in the future, they won’t be included in our Git commits, which is important and useful, because we must be selective about what we commit.</p>\n<p>Now, we need to make a new folder that will contain the contents of our <strong>development</strong> code. Let’s call it <code>src</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>mkdir src</code></pre>\n      </div>\n<p>Then, we need to make a folder that will contain files that we use for <strong>production</strong> purposes. We’ll call this folder <code>dist</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>mkdir dist</code></pre>\n      </div>\n<ul>\n<li><a href=\'http://stackoverflow.com/questions/23730882/what-is-the-role-of-src-and-dist-folders/23731040#23731040\' target=\'_blank\' rel=\'nofollow\'>Help: More about <code>src</code> and <code>dist</code> folders</a></li>\n</ul>\n<p>Now that we have installed our packages and created empty <code>src</code> and <code>dist</code> folders, our tree will look like this (not including <code>.gitignore</code>, which is a hidden file):</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>.\n├── dist\n├── node_modules\n├── package.json\n├── src\n└── webpack.config.js</code></pre>\n      </div>\n<p>Now, we can make a new <code>js</code> folder that goes into our <code>src</code> folder. This will contain all our React code:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>mkdir src/js</code></pre>\n      </div>\n<p>We can go ahead and create an empty <code>client.js</code> in our <code>src/js</code>. This will be our main React file:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>touch src/js/client.js</code></pre>\n      </div>\n<p>We also need an <code>index.html</code> that <strong>should not</strong> go into our <code>src</code> folder, rather into our <code>dist</code> folder, because it is required for the <strong>production</strong> of our app:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>touch dist/index.html</code></pre>\n      </div>\n<p>So now, our tree looks something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>.\n├── dist\n│   └── index.html\n├── node_modules\n├── package.json\n├── src\n│   └── js\n│       └── client.js\n└── webpack.config.js</code></pre>\n      </div>',fields:{slug:"/miscellaneous/react-with-webpack-file-structure/"},frontmatter:{title:"React with Webpack File Structure"}}},pathContext:{slug:"/miscellaneous/react-with-webpack-file-structure/"}}}});
//# sourceMappingURL=path---miscellaneous-react-with-webpack-file-structure-043ba6f6034f961b8e26.js.map