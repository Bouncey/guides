webpackJsonp([80604562596038],{5545:function(n,e){n.exports={data:{markdownRemark:{html:"<p>As it turns out, in <strong>thing.controller.js</strong> as well as in any other endpoints you may generate, the <em>exports.update</em> function that is called when you make an <em>$http.put</em> call from your frontend to modify an existing database object is broken. This is a <a href='https://github.com/DaftMonk/generator-angular-fullstack/issues/310' target='_blank' rel='nofollow'>known issue</a>, and can be fixed by changing the following line:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>// Updates an existing thing in the DB.\nexports.update = function(req, res) { \n...    \n    var updated = _.extend(thing, req.body); \n    // change _.merge to _.extend\n... \n };</code></pre>\n      </div>",fields:{slug:"/miscellaneous/fixing-exportsupdate-in-angular/"},frontmatter:{title:"Fixing Exportsupdate in Angular"}}},pathContext:{slug:"/miscellaneous/fixing-exportsupdate-in-angular/"}}}});
//# sourceMappingURL=path---miscellaneous-fixing-exportsupdate-in-angular-142e4603d829dfcf264b.js.map