webpackJsonp([63465391773526],{5653:function(e,n){e.exports={data:{markdownRemark:{html:'<p>Based on <a href=\'http://ricostacruz.com/cheatsheets/react-router.html\' target=\'_blank\' rel=\'nofollow\'>http://ricostacruz.com/cheatsheets/react-router.html</a> but updated for v2.0.0 of React Router.</p>\n<h2>Basic</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>import { render } from \'react-dom\'\nimport { Router, Route, browserHistory } from \'react-router\'\n\n// Import RootView and NoMatch\n\nrender((\n  <Router history={browserHistory}>\n    <Route path="/" component={RootView} />\n    <Route path="*" component={PageNotFound} />\n  </Router>\n), document.getElementById(\'app\'))</code></pre>\n      </div>\n<h2>Nesting</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>import React from \'react\'\nimport { render } from \'react-dom\'\nimport { Router, Route, browserHistory } from \'react-router\'\n\n// Import About, Inbox and Messages\n\nclass Chrome extends React {\n  render () {\n    return (\n      <div>\n        <h1>App</h1>\n        <a href="/about">About</a>\n        <a href="/inbox">Inbox</a>\n        <a href="/messages">Messages</a>\n        { this.props.children }\n      </div>\n    )\n  }\n}\n\nrender((\n  <Router history={browserHistory}>\n    <Route path="/" component={Chrome}>\n      <Route path="about" component={About} />\n      <Route path="inbox" component={Inbox} />\n      <Route path="messages" component={Messages} />\n    </Route>\n  </Router>\n), document.getElementById(\'app\'))</code></pre>\n      </div>\n<h2>URL params</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>class Message extends React {\n  componentDidMount() {\n    // from the path `/inbox/messages/:id`\n    const id = this.props.params.id\n    ...</code></pre>\n      </div>\n<h2>Link</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>import { Link } from \'react-router\'\n\n/* Nav Component */\n  ...\n  render() {\n    ...\n    const userId = 10;\n\n    return (\n      // Adding params is as simple as appending them to the route\n      <Link to={`user/${userId}`}>User 10</Link>\n\n      // Classes can be added to the link element if the current route is the one they link to\n      <Link to="login"\n        activeClassName="-active">Login</Link>\n    )\n  }</code></pre>\n      </div>\n<h2>Other config</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><Route path="/">\n  <IndexRoute component={Home} />\n  <Route path="*" handler={NotFound} />\n\n  // arbitrary/url/login -> /arbitrary/url/sessions/new\n  <Redirect from="login" to="sessions/new" />\n  // arbitrary/url/about/1 -> /arbitrary/url/profile/1\n  <Redirect from="about/:id" to="profile/:id" />\n\n  <Route name="about-user" ... />\n  ...</code></pre>\n      </div>',fields:{slug:"/miscellaneous/react-router-cheatsheet/"},frontmatter:{title:"React Router Cheatsheet"}}},pathContext:{slug:"/miscellaneous/react-router-cheatsheet/"}}}});
//# sourceMappingURL=path---miscellaneous-react-router-cheatsheet-60a42a6ad7e0559af106.js.map