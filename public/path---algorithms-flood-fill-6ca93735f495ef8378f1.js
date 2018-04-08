webpackJsonp([96612136831913],{3487:function(n,o){n.exports={data:{markdownRemark:{html:'<h2>Flood Fill Algorithm</h2>\n<p>Flood fill is an algorithm mainly used to determine a bounded area connected to a given node in a multi-dimensional array. It is\na close resemblance to the bucket tool in paint programs.</p>\n<p>The most approached implementation of the algorithm is a stack-based recursive function, and that’s what we’re gonna talk about\nnext.</p>\n<h3>How does it work?</h3>\n<p>The problem is pretty simple and usually follows these steps:</p>\n<ol>\n<li>Take the position of the starting point.</li>\n<li>Decide wether you want to go in 4 directions (<strong>N, S, W, E</strong>) or 8 directions (<strong>N, S, W, E, NW, NE, SW, SE</strong>).</li>\n<li>Choose a replacement color and a target color.</li>\n<li>Travel in those directions.</li>\n<li>If the tile you land on is a target, reaplce it with the chosen color.</li>\n<li>Repeat 4 and 5 until you’ve been everywhere within the boundaries.</li>\n</ol>\n<p>Let’s take the following array as an example:</p>\n<p><img src="https://github.com/firealex2/Codingame/blob/master/small%208%20grid%20paintefffd.png" alt="alt text"></p>\n<p>The red square is the starting point and the gray squares are the so called walls. </p>\n<p>For further details, here’s a piece of code describing the function:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c++"><code>int wall = -1;\n\nvoid flood_fill(int pos_x, int pos_y, int target_color, int color)\n{\n  \n   if(a[pos_x][pos_y] == wall || a[pos_x][pos_y] == color) // if there is no wall or if i haven\'t been there\n      return;                                              // already go back\n   \n   if(a[pos_x][pos_y] != target_color) // if it\'s not color go back\n      return;\n   \n   a[pos_x][pos_y] = color; // mark the point so that I know if I passed through it. \n   \n   flood_fill(pos_x + 1, pos_y, color);  // then i can either go south\n   flood_fill(pos_x - 1, pos_y, color);  // or north\n   flood_fill(pos_x, pos_y + 1, color);  // or east\n   flood_fill(pos_x, pos_y - 1, color);  // or west\n   \n   return;\n\n}</code></pre>\n      </div>\n<p>As seen above, my starting point is (4,4). After calling the function for the start coordinates <strong>x = 4</strong> and <strong>y = 4</strong>,\nI can start checking if there is no wall or color on the spot. If that is valid i mark the spot with one <strong>“color”</strong>\nand start checking the other adiacent squares.</p>\n<p>Going south we will get to point (5,4) and the function runs again.</p>\n<h3>Excercise problem</h3>\n<p>I always considered that solving a (or more) problem/s using a newly learned algorithm is the best way to fully understand\nthe concept.</p>\n<p>So here’s one:</p>\n<p><strong>Statement:</strong> </p>\n<p>  In a bidimensional array you are given n number of <strong>“islands”</strong>. Try to find the largest area of an island and\nthe corresponding island number. 0 marks water and any other x between 1 and n marks one square from the surface corresponding\nto island x.</p>\n<p><strong>Input</strong></p>\n<ul>\n<li><strong>n</strong> - the number of islands.</li>\n<li><strong>l,c</strong> - the dimensions of the matrix.</li>\n<li>the next <strong>l</strong> lines, <strong>c</strong> numbers giving the <strong>l</strong>th row of the matrix.</li>\n</ul>\n<p><strong>Output</strong></p>\n<ul>\n<li><strong>i</strong> - the number of the island with the largest area.</li>\n<li><strong>A</strong> - the area of the <strong>i</strong>‘th island.</li>\n</ul>\n<p><strong>Ex:</strong></p>\n<p>You have the following input:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c++"><code>2 4 4\n0 0 0 1\n0 0 1 1\n0 0 0 2\n2 2 2 2</code></pre>\n      </div>\n<p>For which you will get island no. 2 as the biggest island with the area of 5 squares.</p>\n<h3>Hints</h3>\n<p>The problem is quite easy, but here are some hints:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>1. Use the flood-fill algorithm whenever you encounter a new island.\n2. As opposed to the sample code, you should go through the area of the island and not on the ocean (0 tiles).</code></pre>\n      </div>',fields:{slug:"/algorithms/flood-fill/"},frontmatter:{title:"Flood Fill Algorithm"}}},pathContext:{slug:"/algorithms/flood-fill/"}}}});
//# sourceMappingURL=path---algorithms-flood-fill-6ca93735f495ef8378f1.js.map