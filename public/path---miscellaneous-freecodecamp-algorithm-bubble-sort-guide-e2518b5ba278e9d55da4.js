webpackJsonp([0x6aa6e5ed0ab1],{5547:function(e,n){e.exports={data:{markdownRemark:{html:"<p>Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison based algorithm in which each pair of adjacent elements is<br>\ncompared and elements are swapped if they are not in order. This algorithm does sorting in-place i.e. it does not creates a new array while<br>\ncarrying out the sorting process.</p>\n<h4>Example</h4>\n<p><a href='http://www.sorting-algorithms.com/bubble-sort' target='_blank' rel='nofollow'>Animation of BubbleSort</a></p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>array = <a href='https://repl.it/CXif' target='_blank' rel='nofollow'>5, 1, 4, 2, 8]\n\nFirst Pass:\n( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.\n( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4\n( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2\n( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.\n\nSecond Pass:\n( 1 4 2 5 8 ) –> ( 1 4 2 5 8 )\n( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2\n( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )\n( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 )\nNow, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any\nswap to know it is sorted.\n\nThird Pass:\n( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )\n( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )\n( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )\n( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )</code></pre>\n      </div>\n<h4>C++ Implementation</h4>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>// Function to implement bubble sort\nvoid bubble_sort(int array[], int n)\n{\n    // Here n is the number of elements in array\n    int temp;\n\n    for(int i = 0; i < n-1; i++)\n{\n    // Last i elements are already in place\n    for(int j = 0; j < n-i-1; j++)\n    {\n        if (array[j] > array[j+1])\n        {\n            // swap elements at index j and j+1\n            temp = array[j];\n            array[j] = array[j+1];\n            array[j+1] = temp;\n        }\n    }\n}\n}</code></pre>\n      </div>\n<p>:rocket: [Run Code</a> #### Python Implementation  </p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>def bubble_sort(arr):\n    exchanges = True # A check to see if the array is already sorted so that no further steps gets executed\n    i = len(arr)-1\n    while i > 0 and exchanges:\n       exchanges = False\n       for j in range(i):\n           if arr<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 \":rocket:\"' target='_blank' rel='nofollow'>j]>arr[j+1]:\n               exchanges = True\n               arr[j], arr[j+1] = arr[j+1], arr[j]\n       i -= 1\n\narr = [5,3,23,1,43,2,54]\nbubble_sort(arr)\nprint(arr) # Prints [1, 2, 3, 5, 23, 43, 54]</code></pre>\n      </div>\n<p><img src=\"https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3\" title=\":rocket:\" alt=\":rocket:\" class=\"forum-image\"> <a href='https://repl.it/CW0M/1' target='_blank' rel='nofollow'>Run Code</a></p>\n<h4><a href='https://www.freecodecamp.com/videos/big-o-notation-what-it-is-and-why-you-should-care' target='_blank' rel='nofollow'>Complexity of Algorithm</a></h4>\n<p><strong>Worst and Average Case Time Complexity:</strong> O(n*n). Worst case occurs when array is reverse sorted i.e. the elements are in decreasing order</p>\n<p><strong>Best Case Time Complexity:</strong> O(n). Best case occurs when array is already sorted.</p>",fields:{slug:"/miscellaneous/freecodecamp-algorithm-bubble-sort-guide/"},frontmatter:{title:"Freecodecamp Algorithm Bubble Sort Guide"}}},pathContext:{slug:"/miscellaneous/freecodecamp-algorithm-bubble-sort-guide/"}}}});
//# sourceMappingURL=path---miscellaneous-freecodecamp-algorithm-bubble-sort-guide-e2518b5ba278e9d55da4.js.map