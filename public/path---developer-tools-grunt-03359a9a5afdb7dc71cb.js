webpackJsonp([0xc368e0457454],{4131:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Grunt</h2>\n<p><code>Grunt</code> is a JavaScript Task Runner you can use to automate repetitive tasks.</p>\n<h3>Why Use Grunt?</h3>\n<p>There are many repetitive tasks in web development. For example: compiling, minifying, and copying files. Doing these tasks manually takes a lot of effort and time.</p>\n<p>You will make your job easier with Grunt. You only need to configure the tasks through a <a href=\'https://gruntjs.com/sample-gruntfile\' target=\'_blank\' rel=\'nofollow\'>Gruntfile</a>.</p>\n<h3>Getting Started</h3>\n<ol>\n<li>Install <a href=\'https://www.npmjs.org/\' target=\'_blank\' rel=\'nofollow\'>npm</a>.</li>\n<li>Install Grunt’s command line interface (CLI) globally with <code>npm install -g grunt-cli</code>.</li>\n<li>List Grunt and the Grunt plugins as devDependencies in a <code>package.json</code> file.</li>\n<li>Install Grunt and the Grunt plugins with <code>npm i</code>.</li>\n<li>Configure tasks in a <code>Gruntfile.js</code> file.</li>\n<li>Run Grunt with <code>grunt</code>.</li>\n</ol>\n<h3>Example</h3>\n<p>Below is an example of a <code>package.json</code> and <code>Gruntfile.js</code> to do the following tasks:</p>\n<ol>\n<li>Minify HTML files.</li>\n<li>Add vendor prefixes and minify CSS file.</li>\n<li>Concatenate and minify JavaScript files.</li>\n<li>Minify images.</li>\n</ol>\n<h4>package.json</h4>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"project-name"</span><span class="token punctuation">,</span>\n  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"0.1.0"</span><span class="token punctuation">,</span>\n  <span class="token property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"grunt"</span><span class="token operator">:</span> <span class="token string">"latest"</span><span class="token punctuation">,</span>\n    <span class="token property">"grunt-contrib-htmlmin"</span><span class="token operator">:</span> <span class="token string">"latest"</span><span class="token punctuation">,</span>\n    <span class="token property">"grunt-postcss"</span><span class="token operator">:</span> <span class="token string">"latest"</span><span class="token punctuation">,</span>\n    <span class="token property">"autoprefixer"</span><span class="token operator">:</span> <span class="token string">"latest"</span><span class="token punctuation">,</span>\n    <span class="token property">"cssnano"</span><span class="token operator">:</span> <span class="token string">"latest"</span><span class="token punctuation">,</span>\n    <span class="token property">"grunt-contrib-uglify"</span><span class="token operator">:</span> <span class="token string">"latest"</span><span class="token punctuation">,</span>\n    <span class="token property">"grunt-contrib-imagemin"</span><span class="token operator">:</span> <span class="token string">"latest"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h4>Gruntfile.js</h4>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>grunt<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  grunt<span class="token punctuation">.</span><span class="token function">initConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    htmlmin<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        removeComments<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        collapseWhitespace<span class="token punctuation">:</span> <span class="token boolean">true</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      html<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        files<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n          expand<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n          cwd<span class="token punctuation">:</span> <span class="token string">"src/"</span><span class="token punctuation">,</span>\n          src<span class="token punctuation">:</span> <span class="token string">"**/*.html"</span><span class="token punctuation">,</span>\n          dest<span class="token punctuation">:</span> <span class="token string">"dest/"</span>\n        <span class="token punctuation">}</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    \n    postcss<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        processors<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"autoprefixer"</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"cssnano"</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      css<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        src<span class="token punctuation">:</span> <span class="token string">"dest/css/*.css"</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    \n     uglify<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      js<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        files<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          <span class="token string">"dest/js/main.js"</span><span class="token punctuation">:</span> <span class="token string">"src/js/*.js"</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    \n    imagemin<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      img<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          optimizationLevel<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n          quality<span class="token punctuation">:</span> <span class="token number">75</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        files<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n          expand<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n          cwd<span class="token punctuation">:</span> <span class="token string">"src/img/"</span><span class="token punctuation">,</span>\n          src<span class="token punctuation">:</span> <span class="token string">"**"</span><span class="token punctuation">,</span>\n          dest<span class="token punctuation">:</span> <span class="token string">"dest/img/"</span>\n        <span class="token punctuation">}</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  \n  grunt<span class="token punctuation">.</span><span class="token function">loadNpmTasks</span><span class="token punctuation">(</span><span class="token string">"grunt-contrib-htmlmin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  grunt<span class="token punctuation">.</span><span class="token function">loadNpmTasks</span><span class="token punctuation">(</span><span class="token string">"grunt-postcss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  grunt<span class="token punctuation">.</span><span class="token function">loadNpmTasks</span><span class="token punctuation">(</span><span class="token string">"grunt-contrib-uglify"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  grunt<span class="token punctuation">.</span><span class="token function">loadNpmTasks</span><span class="token punctuation">(</span><span class="token string">"grunt-contrib-imagemin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  \n  grunt<span class="token punctuation">.</span><span class="token function">registerTask</span><span class="token punctuation">(</span><span class="token string">"default"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"htmlmin"</span><span class="token punctuation">,</span> <span class="token string">"postcss"</span><span class="token punctuation">,</span> <span class="token string">"uglify, imagemin"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4>More Information:</h4>\n<p>Grunt documentation: <a href=\'https://gruntjs.com/getting-started\' target=\'_blank\' rel=\'nofollow\'>Getting Started</a></p>',fields:{slug:"/developer-tools/grunt/"},frontmatter:{title:"Grunt"}}},pathContext:{slug:"/developer-tools/grunt/"}}}});
//# sourceMappingURL=path---developer-tools-grunt-03359a9a5afdb7dc71cb.js.map