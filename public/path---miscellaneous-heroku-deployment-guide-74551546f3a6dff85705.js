webpackJsonp([0xddcc82796cf8],{5574:function(e,o){e.exports={data:{markdownRemark:{html:"<ol>\n<li>\n<p>Create a Heroku account.</p>\n</li>\n<li>\n<p>After making an account, you can go to your <a href='https://dashboard.heroku.com/apps' target='_blank' rel='nofollow'>dashboard</a></p>\n</li>\n<li>\n<p>Click the + sign in the top right hand corner and click Create New App (just like you’re making a new repo on github). Give it a name, and click Create.</p>\n</li>\n<li>\n<p>After creating the app you’ll see its name in your dashboard. Click on it.</p>\n</li>\n<li>\n<p>You’ll be taken to a dashboard for that app. Click on the Deploy tab.</p>\n</li>\n<li>\n<p>There you’ll be pleased to find that you can connect to a github repo. In the Deployment Method section, choose Github and authenticate by signing into Github.</p>\n</li>\n<li>\n<p>Right below that, fill in your github repo name. (This of course requires that you’ve pushed a repo to github from either cloud9 or your local machine…and that you’ve correctly configured it. More on that below.)</p>\n</li>\n<li>\n<p>Scroll down again and click Automatic Deploy or scroll down even more and click Manual Deploy. After a few moments you should see your app running at your-repo-name.herokuapp.com. Sweet.</p>\n</li>\n</ol>\n<h2>Creating your app locally or on Cloud9</h2>\n<ol>\n<li>Make a new folder called timestamp-microservice (or whatever your project is called).</li>\n</ol>\n<p><code>$ mkdir timestamp-microservice &#x26;&#x26; cd timestamp-microservice</code></p>\n<ol>\n<li>Create the files you’re going to need:</li>\n</ol>\n<p><code>$ touch .env .gitignore README.md index.html server.js</code></p>\n<ol>\n<li>Install the packages that you need along the way</li>\n</ol>\n<p>Examples:</p>\n<p><code>$ npm install --save express</code></p>\n<p><code>$ npm install --save moment</code></p>\n<p>These will get added to a folder called node_modules in your root folder.</p>\n<ol>\n<li>Initialize the project with a package.json by doing <code>$ npm init</code></li>\n</ol>\n<p>It’ll ask you a series of questions and create a package.json file in your root folder based on your answers and its defaults. If you’ve already created a file called server.js as mentioned above, this <em>essential</em> line will get added to your package.json file:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>  \"scripts\": {\n\n  \"start\": \"node server.js\"\n\n  }</code></pre>\n      </div>\n<p>If you name it anything else, though, like ‘index.js’, that line won’t get added and you’ll have to manually add that. That’s the default behavior as mentioned <a href='https://docs.npmjs.com/files/package.json#default-values' target='_blank' rel='nofollow'>here</a>. You can install node modules before or after this step and they will get added to package.json automatically.</p>\n<ol>\n<li>When you’re ready, create a new repository on github, copy the remote URL, and initialize the project locally by doing:</li>\n</ol>\n<p><code>$ git init</code></p>\n<p><code>$ git add .</code></p>\n<p><code>$ git commit -m \"initial commit\"</code></p>\n<p><code>$ git remote add origin &#x3C;your github url></code></p>\n<p><code>$ git push -u origin master</code></p>\n<p>Tip: In your server.js file, make sure to use <code>app.listen(process.env.PORT || &#x3C;default port>)</code> so that the app works on heroku.</p>\n<p>Return to step 7 above.</p>",fields:{slug:"/miscellaneous/heroku-deployment-guide/"},frontmatter:{title:"Heroku Deployment Guide"}}},pathContext:{slug:"/miscellaneous/heroku-deployment-guide/"}}}});
//# sourceMappingURL=path---miscellaneous-heroku-deployment-guide-74551546f3a6dff85705.js.map