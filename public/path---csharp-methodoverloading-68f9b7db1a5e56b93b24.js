webpackJsonp([0xfdf12f9210c5],{3929:function(e,n){e.exports={data:{markdownRemark:{html:'<h1>Method Overloading</h1>\n<p>Default parameters were introduced in C# version 4.0, but up until that, C# coders have been using a different technique, which basically does the same, called method overloading. It allows the programmer do define several methods with the same name, as long as they take a different set of parameters. When you use the classes of the .NET framework, you will soon realize that method overloading is used all over the place.</p>\n<h2>Example</h2>\n<ol>\n<li>\n<p>Create a class file named Person.cs &#x26; input the following code.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>public class Person\n{\npublic string FirstName { get; private set; }\npublic string LastName { get; set; }\n\npublic Person(string firstName, string lastName)\n{\n    this.FirstName = firstName;\n    this.LastName = lastName;\n}\n\npublic string SayHello(string name)\n{\n    return "Hello there, " + name;\n}\n\npublic string SayHello(Person person)\n{\n    return "Hello there, " + person.FirstName + " " + person.LastName;\n}\n}</code></pre>\n      </div>\n</li>\n<li>\n<p>In your default Program.cs file you can call now this class Person using the method overloading.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>class Program\n{\n    static void Main(string[] args)\n    {\n        Person person = new Person("Jane", "Doe");\n        Console.WriteLine(person.SayHello("Peter Smith"));\n\n        Person friend = new Person("Chuck", "Norris");\n        Console.WriteLine(person.SayHello(friend));\n\n        Console.ReadKey();</code></pre>\n      </div>\n</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>    }\n}</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code></code></pre>\n      </div>',fields:{slug:"/csharp/methodoverloading/"},frontmatter:{title:"Method Overloading"}}},pathContext:{slug:"/csharp/methodoverloading/"}}}});
//# sourceMappingURL=path---csharp-methodoverloading-68f9b7db1a5e56b93b24.js.map