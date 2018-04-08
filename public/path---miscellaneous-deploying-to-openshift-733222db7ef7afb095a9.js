webpackJsonp([0xa187bbd3d002],{5531:function(e,o){e.exports={data:{markdownRemark:{html:"<p>If you deploy your applications to Heroku you can only upload 5 applications, if you want to deploy a new one, you need to verify you account with your credit card.</p>\n<p><img src=\"//discourse-user-assets.s3.amazonaws.com/original/2X/2/27219029fea50142009b1521d5268c06ded15b57.jpg\" alt=\"Heroku Error\"></p>\n<p>These are the steps you need to follow to deploy to <a href='https://www.openshift.com/app/account/new' target='_blank' rel='nofollow'>OpenShift</a>.</p>\n<h2>Requirements</h2>\n<ul>\n<li>An account in <a href='https://www.openshift.com/app/account/new' target='_blank' rel='nofollow'>OpenShift</a></li>\n<li>Our app in a <a href=\"//forum.freecodecamp.com/t/wiki-git-resources/13136\">Git</a> Repository</li>\n</ul>\n<h2>Changes in your code</h2>\n<ul>\n<li><code>app.listen</code> with <code>process.env.OPENSHIFT_NODEJS_PORT</code> and <code>process.env.OPENSHIFT_NODEJS_IP</code>, both requires.</li>\n<li>In your <strong>package.json</strong> set your <code>\"main\": 'yourMainFile.js</code> and <code>\"script\": { \"start\": \"node yourMainFile.js\" }</code></li>\n</ul>\n<h2>Deploying our app</h2>\n<ul>\n<li><a href='https://openshift.redhat.com/app/console/application_types' target='_blank' rel='nofollow'>Add a new application</a></li>\n</ul>\n<p><img src=\"//discourse-user-assets.s3.amazonaws.com/original/2X/e/e07c056ab351ee6bd728b8d5f648b3fac9c6bf86.jpg\" alt=\"Choose a web programming cartridge\"></p>\n<ul>\n<li>Choose a name (second input will be same for all you apps)</li>\n</ul>\n<p>[<img src=\"//discourse-user-assets.s3.amazonaws.com/original/2X/9/9e929388f653ca9725e4dc2ca823f06cee493bc2.jpg\" alt=\"Fill our name and our domain\"></p>\n<ul>\n<li>Fill our Git URL and our branch name</li>\n</ul>\n<p><img src=\"//discourse-user-assets.s3.amazonaws.com/original/2X/1/1a720934d9c2fd79a4aaa14b4ca07e6c1df7f2ce.jpg\" alt=\"Where you can find your Git URL and your branch name at Github\"></p>\n<p><img src=\"//discourse-user-assets.s3.amazonaws.com/original/2X/9/989e44c1af80c9b8f26883a3d897f377b3a27ca4.jpg\" alt=\"Fill your Git URL and your branch name\"></p>\n<ul>\n<li>“Create Application”. It will take some time</li>\n</ul>\n<p><img src=\"//discourse-user-assets.s3.amazonaws.com/original/2X/f/f0de3f67ec78b75df6786301560a903f76aec022.jpg\" alt=\"You will be redirected here when you finish deployment\"></p>\n<ul>\n<li>Enter to “Application”, then into your App and check it’s started.</li>\n</ul>\n<p><img src=\"//discourse-user-assets.s3.amazonaws.com/original/2X/d/d71ea954dd23eb341243bf568a3d67b682590274.jpg\" alt=\"Your applications list\"></p>\n<p><img src=\"//discourse-user-assets.s3.amazonaws.com/original/2X/4/497bacfd85fd2c8e815413df1e942a1a42f045f0.jpg\" alt=\"Details of your application\"></p>\n<h2>Enviroment variables</h2>\n<p>In my case I have my database in mLab, so I need to create some enviroment variables.</p>\n<ul>\n<li><a href='https://developers.openshift.com/getting-started/windows.html#client-tools' target='_blank' rel='nofollow'>Install Ruby and rhc.</a></li>\n</ul>\n<p><strong>rhc</strong> only works with versions 1.9.3 and 2.0.0 of Ruby.</p>\n<ul>\n<li><a href='https://developers.openshift.com/getting-started/windows.html#rhc-setup' target='_blank' rel='nofollow'>Setting up Your Machine</a></li>\n</ul>\n<p>If you are having trouble with setting up <code>rhc</code>, try <a href='http://stackoverflow.com/questions/28896733/rhc-setup-gives-error-no-such-file-dl-import' target='_blank' rel='nofollow'>this</a> answer on StackOverflow.</p>\n<ul>\n<li><a href='https://developers.openshift.com/managing-your-applications/environment-variables.html#custom-variables' target='_blank' rel='nofollow'>Custom Environment Variables</a></li>\n</ul>\n<p><code>rhc env set VARIABLE=value VARIABLE2=value2 -a App_Name</code>.</p>\n<p>You need to restart your app to load the variables.</p>\n<p>If you find a better way to solve this limitation. Feel free to contribute to our <a>Wiki</a> and share it with us.</p>\n<p>You can check the app working at <a href='http://voting-pitazo.rhcloud.com/#/polls' target='_blank' rel='nofollow'>http://voting-pitazo.rhcloud.com/#/polls</a></p>",fields:{slug:"/miscellaneous/deploying-to-openshift/"},frontmatter:{title:"Deploying to Openshift"}}},pathContext:{slug:"/miscellaneous/deploying-to-openshift/"}}}});
//# sourceMappingURL=path---miscellaneous-deploying-to-openshift-733222db7ef7afb095a9.js.map