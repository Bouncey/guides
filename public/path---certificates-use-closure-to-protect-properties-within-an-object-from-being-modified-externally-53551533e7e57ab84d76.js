webpackJsonp([0xbaab900a281e],{3794:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Objects have their own attributes, called <em>properties</em>, and their own functions, called <em>methods</em>.</p>\n<p>You can use the <code>this</code> keyword to reference <em>public properties and methods</em> of the current objects. However, when You need to create private ones so they are not accessible from the outside of the object you just remove the keyword <code>this</code> from the object property or method declaration and declare it with <code>var</code> so that it is private outside its scope.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>var Bike = function() {\n  var speed = 100; // private\n  function addUnit(value) { // private\n    return value + "KM/H";\n  }\n\n  this.getSpeed = function () {  // public\n    return addUnit(speed);\n  };\n\n};</code></pre>\n      </div>\n<h2>Another example:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>var Cake = function() {\n\n  var loot = 2;\n  // Getter to know how much loot you have\n  this.getLoot = function() {\n    return loot;\n  };\n\n  // Setter to change the ammount of loot\n  this.setLoot = function(num){\n    loot = num;\n  };</code></pre>\n      </div>',fields:{slug:"/certificates/use-closure-to-protect-properties-within-an-object-from-being-modified-externally/"},frontmatter:{title:"Use Closure to Protect Properties Within an Object from Being Modified Externally"}}},pathContext:{slug:"/certificates/use-closure-to-protect-properties-within-an-object-from-being-modified-externally/"}}}});
//# sourceMappingURL=path---certificates-use-closure-to-protect-properties-within-an-object-from-being-modified-externally-53551533e7e57ab84d76.js.map