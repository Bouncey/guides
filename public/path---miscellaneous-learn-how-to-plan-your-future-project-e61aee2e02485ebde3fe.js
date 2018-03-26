webpackJsonp([33533475554207],{5634:function(e,o){e.exports={data:{markdownRemark:{html:"<p>An ounce of preparation is worth a pound of cure. That’s true in medicine, and that’s definitely true in software development.</p>\n<p>Here’s a structured 10-step workflow that will guide you through the app planning process, with the goal of saving you from writing a lot of unnecessary code.</p>\n<p>Together, we’ll plan out a simple “To-do” single-page web app. We’ll also plan for an API backend for a future mobile app.</p>\n<h2>1) Create our Trello board</h2>\n<p><a href='https://trello.com/' target='_blank' rel='nofollow'>Trello</a> is a fun, free way to break your planning and development process into small tasks that can be tracked.</p>\n<p><img src=\"https://lh3.googleusercontent.com/EI4AQ4NINm3B2DHR_YIS29JyKVa5dTPiT3RtITylmndFlpshTHepsKuO8_1KQNfdPDSBjslDReHCuPFeH1GNrDtgOwTyq6ZtGf3DFBmq1AsAhPHKt_0pLXQLf0o4ZbDuKVj4-Bo\" alt=\"Image of Trello board\"></p>\n<p><a href='https://trello.com/b/O9MZcYyY/todo-app' target='_blank' rel='nofollow'>Here’s what our Trello board will eventually look like</a>. I prefer to split my tasks into 3 columns (depending on the complexity of the project):</p>\n<ul>\n<li>To Do - what is left to do</li>\n<li>In progress - tasks that people are currently working on</li>\n<li>Done - tasks that are done and ready for testing</li>\n</ul>\n<h2>2) Write user stories</h2>\n<p>Here are some example user stories. These will guide how we think about our app’s features and functionality. Note that they all follow a similar structure: as a <a href='https://lh5.googleusercontent.com/2v6iIMbCrLSKVfqttEToum7OA3YGQCBKWUHcSCB1KEbEcijXxQtKJKY6fhLXeecJiO27P4icOuPlkVc9_uNXolzlzNXOo_TPh09GZsAqRH-JISqPrpx0PZdtbHOr0RIuQUbTbaw' target='_blank' rel='nofollow'>person] I can [do something].</p>\n<ul>\n<li>as a logged-in user I can see the list of my to-do’s.</li>\n<li>as a logged-in user I can add a new to-do.</li>\n<li>as a logged-in user I can delete a to-do (only my to-do’s - not other users’).</li>\n<li>as a logged-in user I can complete a to-do (only my to-do’s - not other users’).</li>\n<li>as an anonymous user, I can register for a new account, recover my password, or log in to the app with an existing account.</li>\n</ul>\n<h2>3) Create our use case model</h2>\n<p>Our use case model will help us visualize our user stories so we can better understand how to implement them.</p>\n<p>![Anonymous user case diagram</a></p>\n<p><img src=\"https://lh6.googleusercontent.com/3V6dVvAcyjqFkaOukimucYOX0CfwBBYNN9SvjmnVy40Pdhs4Wtrr34i3E-9pbV7tFsp4jHm77IFQvFupjq6OWyxqEgCzcQ995Ayh52Msczu6TfwKeNhL9PYHyxSgmPYA1TR6l6Q\" alt=\"Authenticated user case diagram\"></p>\n<h2>4) Create our activity diagram</h2>\n<p>Our activity diagram will show the different paths our users can take through our app.</p>\n<p><img src=\"https://lh6.googleusercontent.com/jAQL4myqWOPA3gk2iTpGyAQBrO6p1GlPe8BQQ1Se6a-Di40X3Zw1p0wfJewZUL-YyDmedYzX5Lxvo2GW2Qnr6I-6kuKe1sDb9_5F_n46cKoawWReWW_ZoZCIJO6Semc4fvsiuHc\" alt=\"Activity diagram picture\"></p>\n<p>A user accesses our to-do application.</p>\n<ul>\n<li>\n<p>If the user is not logged in she will see our login page.</p>\n</li>\n<li>\n<p>If she already has an account, she can log in.</p>\n</li>\n<li>\n<p>If she has an account, but she forgot her password, she can recover her password.</p>\n</li>\n<li>\n<p>If she doesn’t have an account, she can create one.</p>\n</li>\n<li>\n<p>Both “create an account” and “recover my password” will require email validation. A user can log in to our application only after she has confirmed her email address.</p>\n</li>\n<li>\n<p>If she is logged in, she will see her to-do list (this can be empty if she hasn’t added any to-dos yet).</p>\n</li>\n<li>\n<p>A logged in user:</p>\n<ul>\n<li>\n<p>is able to see her tasks list</p>\n</li>\n<li>\n<p>is able to mark a task from her list as completed</p>\n</li>\n<li>\n<p>is able to search within her task list</p>\n</li>\n<li>\n<p>is able to delete a task from her list</p>\n</li>\n<li>\n<p>can logout.</p>\n</li>\n</ul>\n</li>\n<li>\n<p>The user can exit the application at any time.</p>\n</li>\n</ul>\n<h2>5) Create our mockups</h2>\n<p>Our mockups show what our app should look like. It’s much faster to iterate on a mockup than it is to do so on working code.</p>\n<p><img src=\"https://lh3.googleusercontent.com/GBFhmBkfr-xM5YSXlR0Fm9y8b24ivdRlUtRWQOHJ8skNxEgjTkAef0e5nZ-CcHKNUq2p4V4hgDuAm9LSEuvbovlVborH1ZioAUXVlEblWZ4hN_d2tGEpxhfTkKH9os2JS1pab4w\" alt=\"Mockup picture\"></p>\n<h2>6) Choose the right technologies for our project</h2>\n<p>Because this is a single page app, we’ll rely heavily - or in this case exclusively - on JavaScript. Let’s use one of the most popular JavaScript stacks: the MEAN stack. One big benefit of the MEAN stack is that all of its components are free and open-source. There are also tons of resources available for learning the MEAN stack, and for debugging it when you inevitably encounter errors.</p>\n<p>You can have a <a href='http://www.freecodecamp.com/challenges/get-set-for-our-back-end-development-projects' target='_blank' rel='nofollow'>MEAN stack development environment</a> up and running in the cloud in less than an hour, for free.</p>\n<p>Here are the components we’ll use:</p>\n<ol>\n<li><a href='http://mongodb.org/' target='_blank' rel='nofollow'>MongoDB</a> for our database</li>\n<li><a href='http://nodejs.org/' target='_blank' rel='nofollow'>Node.js</a> and <a href='http://expressjs.com/' target='_blank' rel='nofollow'>Express.js</a> for implementing our API</li>\n<li><a href='http://angularjs.org/' target='_blank' rel='nofollow'>AngularJS</a>, along with HTML and CSS (and Bootstrap) for our client-side application</li>\n<li><a href='http://mongoosejs.com/' target='_blank' rel='nofollow'>Mongoose</a> to connect our application to MongoDB</li>\n</ol>\n<h2>7) Design our database schema</h2>\n<p>It’s worth the effort to design a database schema, even for our simple application.</p>\n<p>We’ll have two collections: our “Users” collection will house our user data, and our “ToDo” collection will house our tasks that need to be done. One user can have zero, one, or many tasks in her to-do list, so we will have a one-to-many (1:m) relationship between our two collections.</p>\n<p><img src=\"https://lh6.googleusercontent.com/5uSb_xnSSc5CWXJD0yyUGVJsL92RRZl3Bex_3wjuzl5Xr69Ks0j3od-yFju24SAd5wWMBNy9uqBrvOzdrUWluOkbcr4H5zFg-ZemJX3ZRWS12D42OowuvWnxA7wWIGrhhzaQ0aw\" alt=\"Database schema diagram\"></p>\n<h2>8) Define our use cases</h2>\n<ol>\n<li>What happens to the to-dos related to a user that deletes her account? When the user deletes her account the to-dos related to that user should also be deleted.</li>\n<li>No to-do can be added without being attached to a confirmed user.</li>\n<li>A to-do can only be deleted by its owner.</li>\n<li>No user can be added with an empty username or password.</li>\n<li>No to-do can be added with an empty task.</li>\n</ol>\n<p>Things to keep in mind:</p>\n<ol>\n<li>Use the Mongoose middleware to remove dependent documents like to-dos when a user deletes her account.</li>\n<li>Use Mongoose validation rules on models to prevent empty fields from being added to our database.</li>\n</ol>\n<h2>9) Design and test our API</h2>\n<p>I used a free product called Apiary <a href='http://docs.fcctodoapp.apiary.io/' target='_blank' rel='nofollow'>to document our API</a>.</p>\n<p>Here’s the syntax I used to <a href='https://jsapi.apiary.io/apis/fcctodoapp.apib' target='_blank' rel='nofollow'>create this simple BluePrint</a>.</p>\n<p>I recommend you create an account and start playing with it. If you link your <a href='http://github.com/' target='_blank' rel='nofollow'>GitHub</a> account with Apiary, you can ensure your documentation always stays up to date. You’ll also be able to test your data visually without the need for actually hitting your API endpoints. If you prefer to test your API from the command line, <a href='http://docs.agendor.apiary.io/' target='_blank' rel='nofollow'>here’s an example of how to do this</a>.</p>\n<p>Later, once you’ve implemented your API with Node.js and Express.js, you’ll just need to set your URL in Apiary. Then you can start testing your calls. Our current host url (<a href='http://fcctodoapp.apiblueprint.org/' target='_blank' rel='nofollow'>http://fcctodoapp.apiblueprint.org/</a>) will be replaced by your API’s URL.</p>\n<p><img src=\"https://lh6.googleusercontent.com/hU3ilG_y9FqtL_zajQ_KOjWy8Qx590Go8nkNvA1j0oR50YJTpjJhL1lAPgjyeLTAS06tq6V62EcJrLQyT_TR2BK49DYiX6kksU6s9cqJDvvaS6jvepIM6uiO4JMbXuu-oXhdsas\" alt=\"App demo picture\"></p>\n<h2>10) Start writing code!</h2>\n<p>This is the fun part, and it will take up most of your project’s time. If you need help with this, join us and learn to code.</p>",fields:{slug:"/miscellaneous/learn-how-to-plan-your-future-project/"},frontmatter:{title:"Learn How to Plan Your Future Project"}}},pathContext:{slug:"/miscellaneous/learn-how-to-plan-your-future-project/"}}}});
//# sourceMappingURL=path---miscellaneous-learn-how-to-plan-your-future-project-e61aee2e02485ebde3fe.js.map