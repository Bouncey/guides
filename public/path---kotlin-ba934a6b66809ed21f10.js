webpackJsonp([0xe0e7be923d4a],{4824:function(t,e){t.exports={data:{markdownRemark:{html:'<p><strong>What is Kotlin?</strong></p>\n<p><a href=\'https://kotlinlang.org/\'>Kotlin</a> is a programming language developed by <a href=\'https://www.jetbrains.com\'>Jetbrains</a>, the company behind some of the world’s most popular IDEs like IntelliJ and Pycharm.</p>\n<p> It serves as a replacement for Java and runs on the JVM. It has been in development for close to 6 years and it hit 1.0 just a year ago. </p>\n<p> The developer community has embraced Kotlin to such an extent that Google announced first class support for the language for Android Development at <a href=\'https://blog.jetbrains.com/kotlin/2017/05/kotlin-on-android-now-official/\'>Google I/O 2017</a>.</p>\n<h2>Version</h2>\n<p>As of this writing, the latest stable release of Kotlin happens to be <a href=\'https://blog.jetbrains.com/kotlin/2017/09/kotlin-1-1-50-is-out/\'>version 1.1.51</a></p>\n<h2>Installation</h2>\n<p>Before proceeding with the installation instructions for Kotlin, you need to make sure that you have set up <strong>JDK (Java Development Kit)</strong> set up on your system.</p>\n<p>If you do not have JDK installed on your computer, head over to the <strong>Installation section</strong> on <a href = \'https://guide.freecodecamp.org/java\'>this link to learn</a> how to set it up.</p>\n<p>Kotlin works with <strong>JDK 1.6+</strong> so make sure you get the correct version installed. Once you are done setting up JDK, proceed with the following steps.</p>\n<ul>\n<li>\n<h2>IntelliJ IDEA</h2>\n<p>The quickest way to get Kotlin running on your machines is by using it alongside <strong>IntelliJ IDEA</strong>. This is the recommended IDE for Kotlin because of the tooling support that is provided by Jetbrains. You can grab the <a href=\'http://www.jetbrains.com/idea/download/index.html\'>Community Edition</a> of IntelliJ from <a href=\'https://www.jetbrains.com\'>JetBrains</a>.</p>\n</li>\n</ul>\n<p>Once you have installed IntelliJ you can basically get started with your first project in Kotlin without any further configurations.</p>\n<p>Create a <strong>New Project</strong> and make sure you select the Java Module. Select the Kotlin checkbox on that screen </p>\n<p><img src="https://kotlinlang.org/assets/images/tutorials/getting-started/new_project_step1.png" alt="new project screen"></p>\n<p>Give your project a name and click Finish.</p>\n<p><img src="https://kotlinlang.org/assets/images/tutorials/getting-started/project_name.png" alt="project name "></p>\n<p>You will now be taken to the main editor where you will see your project files organized in the following manner.</p>\n<p><img src="https://kotlinlang.org/assets/images/tutorials/getting-started/folders.png" alt="project structure "></p>\n<p>In order to verify your installation, create a new Kotlin file in the <strong>src</strong> folder and name it <strong>app</strong> (or anything else that suits you)</p>\n<p><img src="https://kotlinlang.org/assets/images/tutorials/getting-started/new_file.png" alt="project structure "></p>\n<p>Once you have the file created, type out the following cremonial Hello World code. Don’t worry if it doesn’t make sense right away, it will be dealt with in detail later on in the guide.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>fun main (args: Array<String>) {\n    println("Hello World!")\n}</code></pre>\n      </div>\n<p><img src="https://kotlinlang.org/assets/images/tutorials/getting-started/hello_world.png" alt="project structure "></p>\n<p>You can now run this program by either clicking on the Kotlin icon on the gutter (left side of your editor with line numbers)</p>\n<p><img src="https://kotlinlang.org/assets/images/tutorials/getting-started/run_default.png" alt="hello world "></p>\n<p>If everything goes fine, you should see the message Hello World! in your Run window as shown below </p>\n<p><img src="https://kotlinlang.org/assets/images/tutorials/getting-started/run_window.png" alt="run window "></p>\n<ul>\n<li>\n<h2>Eclipse</h2>\n</li>\n</ul>\n<p>While IntelliJ is the recommended IDE for developing with Kotlin, it is definitely not the only option out there. <strong>Eclipse</strong> happens to be another popular IDE of choice among Java developers and Kotlin is supported by Eclipse as well.</p>\n<p>After setting up the <strong>JDK</strong> on your system, follow the instructions below.</p>\n<p>Download <a href=\'https://www.eclipse.org/downloads/\'><strong>Eclipse Neon</strong> </a>for your operating system and once you have successfully installed it on your system, download the <strong>Kotlin Plugin</strong> for Eclipse from the <a href=\'http://marketplace.eclipse.org/content/kotlin-plugin-eclipse\'><strong>Eclipse Marketplace</strong></a>.</p>\n<p><img src="https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/marketplace.png" alt="eclipse marketplace "></p>\n<p><strong><em>NOTE: You can also do the same by going into Help -> Eclipse Marketplace and then search for Kotlin Plugin</em></strong></p>\n<p>Once, the plugin is installed you are pretty much done but it would be a good idea to take the IDE for a spin with a quick Hello World sample.</p>\n<p>Create a new Kotlin Project by clicking on File -> New -> Kotlin Project</p>\n<p><img src="https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/new-project.png" alt="new kotlin project "></p>\n<p>An empty project will be created with a directory structure quite similar to a Java project. It would look something like this</p>\n<p><img src="https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/empty-project.png" alt="empty kotlin project "></p>\n<p>Go ahead and create a new Kotlin file in the <strong>src</strong> folder</p>\n<p>Once that is done go ahead and type out the following code. Don’t worry if it does not make sense right now, it will be covered later in the guide.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>fun main (args: Array<String>) {\n    println("Hello World!")\n}</code></pre>\n      </div>\n<p><img src="https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/hello-world.png" alt="eclipse hello world "></p>\n<p>Now that you are done typing out the Hello World code, go ahead and run it. To run the file, right click anywhere inside the editor and click on <strong><em>Run As -> Kotlin Application</em></strong></p>\n<p><img src="https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/run-as.png" alt="eclipse run app"></p>\n<p>If all goes well, the console window would open to show you the output.</p>\n<p><img src="https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/output.png" alt="eclipse run app"></p>\n<ul>\n<li>\n<h2>Using the standalone compiler on the terminal</h2>\n<p>If you are someone who prefers doing things in a more manual way and do not want to tie yourself down to an editor/IDE you might wanna use the Kotlin compiler.</p>\n</li>\n</ul>\n<h3>Downloading the compiler</h3>\n<p>With every release of Kotlin, Jetbrains ship a standalone compiler which can be downloaded from the <a href=\'https://github.com/JetBrains/kotlin/releases/tag/v1.1.51\'>GitHub releases</a>. Version 1.1.51 happens to be the latest at the time of this writing.</p>\n</br>\n<p><strong>Manual Installation</strong></p>\n<p>Once you have downloaded the compiler you need to unzip it and proceed with the standard installation using the installation wizard. Adding the <strong>bin</strong> directory to the system path is an optional step. It contains the scripts that are necessary to compile and run Kotlin on Windows, Linux and macOS.</p>\n</br>\n<p><strong>Installation via Homebrew</strong></p>\n<p>You can install the compiler on macOS using <a href=\'http://brew.sh/\'>Homebrew </a>which is a package manager for macOS. Launch the Terminal app and issue the following commands</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ brew update\n$ brew install kotlin</code></pre>\n      </div>\n<p><strong>Installation via SDKMAN!</strong></p>\n<p>Another simple way of installing the Kotlin compiler on macOS, Linux, Cygwin, FreeBSD and Solaris is by using <a href=\'http://sdkman.io/\'>SDKMAN!</a>. Launch the terminal and issue the following commands</p>\n<p><code>$ curl -s https://get.sdkman.io | bash</code></p>\n<p>Follow the instructions on screen and once SDKMAN! is setup issue the follwoing command inside terminal</p>\n<p><code>$ sdk install kotlin</code></p>\n<p>As with all previous installation options, it would be a good idea to test run the installation. </p>\n<p>Open a text editor of your choice and write a basic Kotlin program given below </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>fun main(args: Array<String>) {\n    println("Hello, World!")\n}</code></pre>\n      </div>\n<p>Save this file with a <strong>.kt</strong> extension. You are now ready to compile it and see the results. To do so, issue the following command</p>\n<p><code>$ kotlinc hello.kt -include-runtime -d hello.jar</code></p>\n<p>the <code>-d</code> option tells the compiler what you want the output to be called.  The <code>-include-runtime</code> option makes the resulting .jar file self-contained and runnable by including the Kotlin runtime library in it.</p>\n<p>If there were no compilation errors, run the application using the following command</p>\n<p><code>$ java -jar hello.jar</code></p>\n<p>If all goes well, you should see <strong>Hello World!</strong> printed on your terminal screen</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ java -jar hello.jar       \nHello, World!</code></pre>\n      </div>\n<p>Congratulations you have successfully set up the Kotlin compiler and development environment on your system. We will cover all of the intricacies and fun parts of Kotlin in this guide, but you can get a headstart if you want by going to the <a href=\'https://try.kotlinlang.org/\'>Try Kotlin</a> website and going through the exercises there.</p>\n<h2>Documentation</h2>\n<p>One of the greatest things about Kotlin is it’s comprehensive and well structured documentation. Even if you are new to programming, you will find yourself right at home with the docs. They do a pretty amazing job at laying it all out in a well structured manner. You can check out the official documentation at <a href=\'https://kotlinlang.org/docs/reference/\'>this link</a>.</p>',fields:{slug:"/kotlin/"},frontmatter:{title:"Kotlin"}}},pathContext:{slug:"/kotlin/"}}}});
//# sourceMappingURL=path---kotlin-ba934a6b66809ed21f10.js.map