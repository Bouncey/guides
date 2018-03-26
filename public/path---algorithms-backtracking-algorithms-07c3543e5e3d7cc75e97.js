webpackJsonp([0x63cfd171d516],{3475:function(e,t){e.exports={data:{markdownRemark:{html:'<h1>Backtracking Algorithms</h1>\n<p>Backtracking is a general algorithm for finding all (or some) solutions to some computational problems, notably constraint satisfaction problems, that incrementally builds candidates to the solutions, and abandons each partial candidate <em>(“backtracks”)</em> as soon as it determines that the candidate cannot possibly be completed to a valid solution.</p>\n<h3>Example Problem (The Knight’s tour problem)</h3>\n<p>   <em>The knight is placed on the first block of an empty board and, moving according to the rules of chess, must visit each square exactly once.</em></p>\n<h3>Path followed by Knight to cover all the cells</h3>\n<p>  Following is chessboard with 8 x 8 cells. Numbers in cells indicate move number of Knight.\n<a href="https://postimg.org/image/7657eoop3v/"><img src="https://s1.postimg.org/3mj9ovlzbz/chrome_2017-10-21_11-54-32.png" alt="chrome_2017-10-21_11-54-32.png"></a></p>\n<h3>Naive Algorithm for Knight’s tour</h3>\n<p>The Naive Algorithm is to generate all tours one by one and check if the generated tour satisfies the constraints.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>while there are untried tours\n{ \n   generate the next tour \n   if this tour covers all squares \n   { \n      print this path;\n   }\n}</code></pre>\n      </div>\n<h3>Backtracking Algorithm for Knight’s tour</h3>\n<p>Following is the Backtracking algorithm for Knight’s tour problem.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>If all squares are visited \n    print the solution\nElse\n   a) Add one of the next moves to solution vector and recursively \n   check if this move leads to a solution. (A Knight can make maximum \n   eight moves. We choose one of the 8 moves in this step).\n   b) If the move chosen in the above step doesn\'t lead to a solution\n   then remove this move from the solution vector and try other \n   alternative moves.\n   c) If none of the alternatives work then return false (Returning false \n   will remove the previously added item in recursion and if false is \n   returned by the initial call of recursion then "no solution exists" )</code></pre>\n      </div>\n<h3>More Information</h3>\n<p><a href="https://en.wikipedia.org/wiki/Backtracking">Wikipedia</a></p>\n<p><a href="http://www.geeksforgeeks.org/backtracking-set-1-the-knights-tour-problem/">Geeks 4 Geeks</a></p>',fields:{slug:"/algorithms/backtracking-algorithms/"},frontmatter:{title:"Backtracking Algorithms"}}},pathContext:{slug:"/algorithms/backtracking-algorithms/"}}}});
//# sourceMappingURL=path---algorithms-backtracking-algorithms-07c3543e5e3d7cc75e97.js.map