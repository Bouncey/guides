webpackJsonp([0x6fad89615efe],{5965:function(e,a){e.exports={data:{markdownRemark:{html:'<h2>Steganography</h2>\n<p>Steganography is the concept of conceling text, images, files, or videos within other text, images, files or videos. An offline example of this is using “invisible ink” to conceal a message between the lines of a letter. Lemon juice is a popular candidate for invisible ink:\n<a href="https://www.youtube.com/embed/poCnU_crpjQ">lemon juice invisible ink</a></p>\n<p>The following formula provides a very generic description of the pieces of the steganographic process:</p>\n<p>cover<em>medium + hidden</em>data + steganography<em>key = stegonography</em>medium</p>\n<p>In this context, the cover<em>medium is the file that obscures the hidden</em>data, which may also be encrypted using the steganography<em>key. The resultant file is the steganography</em>medium. The cover<em>medium (and, thus, the steganography</em>medium) are usually image or audio files.</p>\n<h3>Steganography in images</h3>\n<p>On computers, images are stored as binary files. They contain a binary representation of the color or light intensity of each picture element (pixel) comprising the image. For example, this image of a dog: </p>\n<p><img src="https://upload.wikimedia.org/wikipedia/commons/4/47/American_Eskimo_Dog.jpg" alt="american eskimo dog"></p>\n<p>might start out with something like: </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>10010101   00001101   11001001\n10010110   00001111   11001010\n10011111   00010000   11001011\n...</code></pre>\n      </div>\n<p>The simplest approach to hiding data within an image file is called least significant bit (LSB) insertion. In this method, we can take the binary representation of the hidden<em>data and overwrite the LSB of each byte within the cover</em>image. If we are using 24-bit color, the amount of change will be minimal and indistinguishable to the human eye.</p>\n<p>While JPEG can be used for stego applications, it is more common to embed data in GIF or BMP files. GIF and 8-bit BMP files employ what is known as lossless compression, a scheme that allows the software to exactly reconstruct the original image. JPEG, on the other hand, uses lossy compression, which means that the expanded image is very nearly the same as the original but not an exact duplicate.</p>\n<p>This short demo will get you set up with encoding text in an image! <a href="https://github.com/edwdryer/steganography-demo">https://github.com/edwdryer/steganography-demo</a>\nYou can read more about steganography in images here: <a href="http://www.garykessler.net/library/steganography.html">http://www.garykessler.net/library/steganography.html</a></p>\n<h3>Steganography in audio</h3>\n<p>Audio steganography is a technique used to transmit hidden information by modifying an audio signal in an imperceptible manner.</p>\n<p>This blogpost provides an example of concealing an image in an audio file (wow)! <a href="https://solusipse.net/blog/post/basic-methods-of-audio-steganography-spectrograms/">https://solusipse.net/blog/post/basic-methods-of-audio-steganography-spectrograms/</a></p>',fields:{slug:"/security/steganography/"},frontmatter:{title:"Steganography"}}},pathContext:{slug:"/security/steganography/"}}}});
//# sourceMappingURL=path---security-steganography-8e848d5ccc260c1dd8c5.js.map