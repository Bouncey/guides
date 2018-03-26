webpackJsonp([39442762713644],{5607:function(e,n){e.exports={data:{markdownRemark:{html:'<p>The first thing to do is open our terminal/command line. We need to install Webpack and Webpack Dev Server globally.</p>\n<ul>\n<li>\n<p><a href=\'https://docs.npmjs.com/getting-started/installing-npm-packages-globally\' target=\'_blank\' rel=\'nofollow\'>Help: More about installing Node Modules globally</a></p>\n<p>npm install webpack webpack-dev-server -g</p>\n</li>\n</ul>\n<p>Installing these modules globally means that we can refer to use their respective command line interfaces in the terminal. Installing Webpack allows us to run <code>webpack</code> from the terminal to execute a Webpack script. Installing Webpack Dev Server allows us to run a localhost server using our Webpack configuration. This will all become clear a little later.</p>\n<p>In your directory of choice, make a new directory, for example <code>react-webpack-example</code>, and change directory into it:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>mkdir react-webpack-example && cd $_</code></pre>\n      </div>\n<p>Now that we’re in our new directory, we need to create our Webpack file, which will live in the root. This is a configuration file, and so we name it <code>webpack.config.js</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>touch webpack.config.js</code></pre>\n      </div>\n<p>Now, we can go ahead and <a href=\'https://docs.npmjs.com/cli/init\' target=\'_blank\' rel=\'nofollow\'>initialise an npm project</a> using the following command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>npm init</code></pre>\n      </div>\n<p>We can go ahead and press the enter key to cycle through the options presented to us in the terminal.</p>\n<p>The <code>npm init</code> command will create a <code>package.json</code> file, which is going to contain important data about our project.</p>\n<p>So far, this is what our tree should look like:  </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>.\n├── package.json\n└── webpack.config.js</code></pre>\n      </div>\n<p>If you open your <code>package.json</code> file, you should see something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>{\n  "name": "react-webpack-example",\n  "version": "1.0.0",\n  "description": "",\n  "main": "webpack.config.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "author": "",\n  "license": "ISC"\n}</code></pre>\n      </div>',fields:{slug:"/miscellaneous/initializing-the-react-project-with-webpack/"},frontmatter:{title:"Initializing the React Project with Webpack"}}},pathContext:{slug:"/miscellaneous/initializing-the-react-project-with-webpack/"}}}});
//# sourceMappingURL=path---miscellaneous-initializing-the-react-project-with-webpack-0d07a07c7c43467154a3.js.map