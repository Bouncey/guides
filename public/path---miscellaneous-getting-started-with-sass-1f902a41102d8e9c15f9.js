webpackJsonp([0x9e7e22239fd],{5552:function(e,s){e.exports={data:{markdownRemark:{html:'<h3>Introduction</h3>\n<p>Sass stands for “Syntactically Awesome Stylesheets” and is a CSS Pre-Processor. A Pre-Processor compiles code written in a specific language down to “product” code that is machine-readable (browser-readable). Basically, Sass compiles code down to regular CSS that our browsers can interpret! <em>Why write code in Sass when CSS already exists?</em> The short answer is Sass comes with more powerful features built into its syntax that allow developers to write DRY-er, scalable, and more maintainable front-end code.</p>\n<p>If you’re familiar with CSS, then learning Sass will come a little easier to you. If not, it might be ideal to start learning some CSS basics on Free Code Camp’s HTML5 &#x26; CSS section in their Front End Development Certification course, as well as taking a look at <a href=\'https://developer.mozilla.org/en-US/docs/Web/CSS\' target=\'_blank\' rel=\'nofollow\'>MDN’s CSS Article</a>.</p>\n<p>In Part 1 of this article, I will explain how to get Sass installed on your computer and how to compile your Sass-written code into CSS.</p>\n<h2>Installation</h2>\n<p>The simplest way to install Sass onto your machine is through the command line. Sass is a Ruby gem and will require the following command:</p>\n<p>For Macs and PCs:</p>\n<p><code>sudo gem install sass</code></p>\n<p>For Linux you will need to install the Ruby language first, then:</p>\n<p><code>sudo su -c "gem install sass"</code></p>\n<p>You should now be able to check the version of Sass installed:</p>\n<p><code>sass -v</code></p>\n<p>And it should return something similar to:</p>\n<p><code>Sass 3.4.21 (Selective Steve)</code></p>\n<p>If so, congrats, you’ve just installed Sass! Now onto using Sass.</p>\n<h2>Basic Use &#x26; Syntax</h2>\n<p>Let’s begin with a very simple example to illustrate how Sass actually works. You can follow along with the steps or simply read along.</p>\n<p><em>An import sidenote: Sass can be written in two slightly different styles, each of which has its own benefits. One style will use the file extension</em> <code>.sass</code> <em>and the other will use</em> <code>.scss</code>. <em>Brief explanations will be given on the differences of the two styles later on. For an in-depth explanation, check out John W. Long’s</em> <a href=\'http://thesassway.com/editorial/sass-vs-scss-which-syntax-is-better\' target=\'_blank\' rel=\'nofollow\'>Sass vs. SCSS article</a>.</p>\n<p><em>For the sake of consistency, this article will provide code examples in <code>.scss</code> format, however both styles are equally popular.</em></p>\n<p>Alright, let’s get started. We will create a new folder to house our example files (you may do this anywhere on your computer, and can use the command line or do this manually).</p>\n<p>In the folder, we will create a file called <code>style.scss</code> and an HTML file to style called <code>index.html</code>:</p>\n<p><em>The <code>tree</code> command in the image above is from an npm package you can install and is not native to the command line. The <code>ls</code> command essentially does the same.</em></p>\n<p>Now that we have our project folder setup, we can use the Sass watch command to “keep an eye” on our Sass file and compile our code when it detects a change in the file. We type in the watch command on the file we want to watch:</p>\n<p><code>sass --watch style.scss</code></p>\n<p>The next step is to open up the project folder in your text editor of choice. Once we have our files opened and ready for editing, we can add in a very basic HTML page (for us to style) which will look like the following:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Sass!</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <article>\n    <h1>Hello World</h1>\n    <p class="cat-paragraph-1">Cat ipsum dolor sit amet, stand in front of the computer screen, so chase imaginary bugs has closed eyes but still sees you caticus cuteicus.</p>\n    <p class="cat-paragraph-2">Drink water out of the faucet chew on cable or if it fits, i sits roll on the floor purring your whiskers off.</p>\n  </article>\n</body>\n</html></code></pre>\n      </div>\n<p>After setting up the HTML we can open up our <code>style.scss</code> file and begin styling in Sass. In the sample code below, you will probably notice how some the style selectors are nested within the article selector; something unique to Sass. Don’t fret, the syntax will be explained in Part 2. For now we just want to acquire an understanding of how Sass works in its simplest form.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>article {\n  h2 {\n    font-family: Arial;\n    color: blue;\n  }\n  .cat-paragraph-1 {\n    color: red;\n  }\n  .cat-paragraph-2 {\n    color: green;\n  }\n}</code></pre>\n      </div>\n<p>Once that code has been typed and saved into the <code>style.scss</code> file, the watch task we punched into the command line will have detected a change in the file, compiled our Sass to CSS, and output a new file titled <code>style.css</code>. You may also see a file called <code>style.css.map</code> in your project folder that has magically appeared as well. This file is called a sourcemap and is of great use when debugging Sass, but for now we’ll just leave it be.</p>\n<p>Below we can see the files listed in the project folder.</p>\n<p>And now if we open up <code>index.html</code> in a web browser, we can see our HTML page styled using CSS which was compiled from the sample Sass code. Similarly, we can open up the <code>style.css</code> file to see how Sass output the original Sass code. Compact, isn’t it?</p>\n<h2>Where To Go From Here?</h2>\n<p><em>Great! Now I know how to compile Sass on my computer. Is that it?</em></p>\n<p>Not by a long shot. This was a bare-bones example of how Sass works, therefore the benefits of writing in Sass over vanilla CSS may not be apparent. We wrote 12 lines of “Sass” and got 7 lines of CSS as a result. Not exactly a major difference by any standards. In Part 2 we will explain the <strong>magic</strong> behind Sass syntax such as variables and mixins, and how the use of such tools can lend us superpowers when styling.</p>\n<p>If you’re still stuck on how Sass is magically compiling down into CSS or maybe you would like to mess with sample code some more, <a href=\'http://www.sassmeister.com/\' target=\'_blank\' rel=\'nofollow\'>Sassmeister</a> is a great online interface which lets you write in Sass syntax and instantly see your code compiled into CSS without having to install anything or do any setup on your computer. It’s a very useful resource for sandboxing and trying out your Sass code.</p>',fields:{slug:"/miscellaneous/getting-started-with-sass/"},frontmatter:{title:"Getting Started with Sass"}}},pathContext:{slug:"/miscellaneous/getting-started-with-sass/"}}}});
//# sourceMappingURL=path---miscellaneous-getting-started-with-sass-1f902a41102d8e9c15f9.js.map