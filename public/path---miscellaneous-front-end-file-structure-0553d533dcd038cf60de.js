webpackJsonp([0xc60aad28661a],{5554:function(e,t){e.exports={data:{markdownRemark:{html:"<p>First things first: All your user-facing files and angular files are in <strong>/client/app/</strong></p>\n<ol>\n<li><strong>app.js</strong>: defines your app and includes some basic app-wide functions, you probably don’t really need to mess with it unless you’re trying to add more dependencies to your app. We’re not gonna worry about that right now.</li>\n<li><strong>app.css</strong>: an app-wide stylesheet, you can put styles here if you want but I’d recommend you put them in <strong>main/main.css</strong>, as these styles are also app-wide.</li>\n<li><strong>main/</strong>: this folder contains what the user sees first when they load up your site. <strong>main.html</strong> is the page template, <strong>main.js</strong> routes the user to <strong>main.html</strong> when the user goes to the top level directory of your website—that is, <a><a href=\"http://yourapp.wherever.itis/\">http://yourapp.wherever.itis/</a></a> with no <a>/other/url/hierarchy</a>. You’ll also learn soon that you can define your app’s <a>/url/heirarchy/fairly/arbitrarily</a>. You won’t really need to edit <strong>main.js</strong> or <strong>main.controller.spec.js</strong>, so let’s not worry about those right now. If you look through the <strong>main.html</strong> file you’ll see it uses <em>ng-repeat</em> to show <em>things</em> in <em>awesomeThings</em>. Where does it get <em>awesomeThings</em>?</li>\n<li><strong>main/main.controller.js</strong>: all of the javascript functions you want to use to interact directly with the user go here! You’ll put functions here to interact with your API, refresh views for your user, etc. Here, <em>awesomeThings</em> are pulled from your database and added to the local scope so your HTML view can display them! How cool! We’ll get to adding custom objects to your database in a minute.</li>\n</ol>\n<p>Great! Now you know how to interact with the user! But what if you want your app to have another page that does something else? Maybe <strong>main.html</strong> shows the home page, but you want a page that shows a form to add a poll? maybe <a><a href=\"http://yourapp.wherever.itis/newpage\">http://yourapp.wherever.itis/newpage</a></a>? This is where the yeoman generator comes in handy.</p>\n<p><a href='http://forum.freecodecamp.com/t/guides-to-back-end-projects/14265' target='_blank' rel='nofollow'>PREVIOUS</a> <a>NEXT</a></p>",fields:{slug:"/miscellaneous/front-end-file-structure/"},frontmatter:{title:"Front End File Structure"}}},pathContext:{slug:"/miscellaneous/front-end-file-structure/"}}}});
//# sourceMappingURL=path---miscellaneous-front-end-file-structure-0553d533dcd038cf60de.js.map