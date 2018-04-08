webpackJsonp([0xf1c377561380],{5627:function(e,o){e.exports={data:{markdownRemark:{html:"<p>Free Code Camp learners are encouraged to use <a href='http://www.codepen.io/' target='_blank' rel='nofollow'>Codepen.io</a> to put together projects, and Codepen is a fantastic resource for quickly putting together useable code. However, Codepen does introduce an additional level of abstraction into the process of debugging code. Here are some known issues that can trip you up in Codepen, if you’re not aware of them:</p>\n<ol>\n<li><strong>URL issue with anchor tags:</strong> CodePen overrides <code>&#x3C;a href='URL'></code> anchor elements, which means that you have to add a <code>target='_blank'</code> to your anchor elements - otherwise they won’t work.</li>\n<li><strong>https plugin issue:</strong> The Chrome extension “HTTPS Everywhere” (created by the <a href='http://www.eff.org/' target='_blank' rel='nofollow'>Electronic Frontiers Foundation</a>) has been known to interfere with AJAX calls. Because the extension automatically uses HTTPS, it can cause a “mixed content” error that prevents the JSON/XML data from being loaded. If you encounter such an error, make sure that your plugins are not the culprit. Optionally you could use <a href='http://crossorigin.me' target='_blank' rel='nofollow'>crossorigin.me</a> as a proxy.</li>\n<li><strong>imgur hotlinking:</strong> If you use images from <a href='http://imgur.com' target='_blank' rel='nofollow'>http://imgur.com</a> they will not show up most of the time, this is due to their TOS. A way to solve this is to use an alternate service like <a href='http://postimg.org' target='_blank' rel='nofollow'>http://postimg.org</a></li>\n<li><strong>auto reload:</strong> By default, everytime you make changes in the HTML or JS editor windows, the preview window refreshes. You can turn this off and enable a “Run Button”, by going to Settings > Behaviour > “Want a Run Button?” and unticking the box.</li>\n<li><strong>location.reload:</strong> If you run into an issue of your code working in the debug view or in JSFiddle, but not in Codepen editor view or full page view, double check if you used <code>location.reload()</code>. If you did, you have to find another way to achieve desired, because Codepen will strip <code>location.reload</code> and leave only <code>()</code> in your code. Read more <a href='https://blog.codepen.io/documentation/editor/things-we-strip/' target='_blank' rel='nofollow'>here:</a></li>\n<li>\n<p><strong>display images, add css/js files, hosted on Github:</strong> You may want to include in your Codepen project stylesheet, image or js file hosted on a Github. If you add Github link of your file to your settings in Codepen, or to your html/css it will not work out of box. What you need to do is:</p>\n<ol>\n<li>Go to the “Raw” version of the file</li>\n<li>Copy the URL</li>\n<li>Change <code>raw.githubusercontent.com</code> to <code>rawgit.com</code></li>\n<li>use that URL to link to a files hosted on a github</li>\n</ol>\n</li>\n</ol>",fields:{slug:"/miscellaneous/known-issues-with-codepen/"},frontmatter:{title:"Known Issues with Codepen"}}},pathContext:{slug:"/miscellaneous/known-issues-with-codepen/"}}}});
//# sourceMappingURL=path---miscellaneous-known-issues-with-codepen-609ca495a7d3fa4dbb72.js.map