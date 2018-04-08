webpackJsonp([0xdef4a5c564ad],{5893:function(n,a){n.exports={data:{markdownRemark:{html:'<h2>Introduction</h2>\n<p>RESTful APIs are a major component of any well-architected stack, and Python happens to have some brilliant frameworks for quickly composing APIs. One of these frameworks is called <a href="https://falconframework.org">Falcon</a> - and it’s great! Essentially a microframework, it ships with a sizable number of advantages:</p>\n<ol>\n<li>\n<p>It’s fast. Really fast. Check out the benchmarks <a href="https://falconframework.org/#sectionBenchmarks">here</a>.</p>\n</li>\n<li>\n<p>HTTP Resources are defined as classes, with class methods being used for different REST operations on these resources. This helps maintaining a clean codebase.</p>\n</li>\n<li>\n<p>It’s quite extensible - check out <a href="https://github.com/falconry/falcon/wiki/Complementary-Packages">this section</a> on their wiki, to get a feel for it. </p>\n</li>\n<li>\n<p>It’s based on WSGI - the Pythonic standard for web apps - so it works with Python 2.6, 2.7, and 3.3+. And if you need more performance, run it using PyPy!</p>\n</li>\n</ol>\n<h2>Getting started</h2>\n<p>First, let’s prepare our environment. Personally, it’s always great to work in virtual environments - you can use <code>virtualenv</code>, <code>virtualenvwrapper</code> or <code>venv</code>. Next, install Falcon using <code>pip</code>: <code>pip install falcon</code>.</p>\n<p>We’re going to develop a small sample API that does very basic time-zone manipulations for us. It will display the current time in UTC, as well as the corresponding epoch time. To that end, we’ll grab a nifty library called <code>arrow</code>: <code>pip install arrow</code>.</p>\n<p>You can find the finished sample at <a href="https://github.com/rudimk/freecodecamp-guides-rest-api-falcon">https://github.com/rudimk/freecodecamp-guides-rest-api-falcon</a>.</p>\n<h2>Resources</h2>\n<p>Think of a resource as an entity that your API needs to manipulate. In our case, the best resource would be a <code>Timestamp</code>. Our routing would typically be something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>GET /timestamp</code></pre>\n      </div>\n<p>Here, <code>GET</code> is the HTTP verb used to call this endpoint, and <code>/timestamp</code> is the URL itself. Now that we’ve gotten this bit out of the way, let’s create a module!</p>\n<p><code>$ touch timestamp.py</code></p>\n<p>Time to import the Falcon library:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token keyword">import</span> json\n\n<span class="token keyword">import</span> falcon\n\n<span class="token keyword">import</span> arrow\n</code></pre>\n      </div>\n<p>Note we’ve also import the <code>json</code> package and the <code>arrow</code> library. Now, let’s define a class for our resource:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Timestamp</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">:</span>\n\n\t<span class="token keyword">def</span> <span class="token function">on_get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> req<span class="token punctuation">,</span> resp<span class="token punctuation">)</span><span class="token punctuation">:</span>\n\t\tpayload <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\t\tpayload<span class="token punctuation">[</span><span class="token string">\'utc\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> arrow<span class="token punctuation">.</span>utcnow<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>format<span class="token punctuation">(</span><span class="token string">\'YYYY-MM-DD HH:mm:SS\'</span><span class="token punctuation">)</span>\n\t\tpayload<span class="token punctuation">[</span><span class="token string">\'unix\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> arrow<span class="token punctuation">.</span>utcnow<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>timestamp\n\n\t\tresp<span class="token punctuation">.</span>body <span class="token operator">=</span> json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>payload<span class="token punctuation">)</span>\n\t\tresp<span class="token punctuation">.</span>status <span class="token operator">=</span> falcon<span class="token punctuation">.</span>HTTP_200\n</code></pre>\n      </div>\n<p>Let’s go through this snippet. We’ve defined a <code>Timestamp</code> class, and defined a class method called <code>on_get</code> - this function tells Falcon that when a <code>GET</code> request is issued to an endpoint for this resource, run the <code>on_get</code> function and provide the request and response objects as parameters. After that, it’s smooth sailing - we create an empty dictionary, fill it up with the current UTC and UNIX timestamps, convert it to JSON and attach it to the response object. </p>\n<p>Pretty simple, right? But sadly, that’s not all. We now need to create a Falcon server and hook up the resource class we’ve just defined to an actual endpoint. </p>\n<p><code>$ touch app.py</code></p>\n<p>Now, add the code below:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token keyword">import</span> falcon\n\n<span class="token keyword">from</span> timestamp <span class="token keyword">import</span> Timestamp\n\napi <span class="token operator">=</span> application <span class="token operator">=</span> falcon<span class="token punctuation">.</span>API<span class="token punctuation">(</span><span class="token punctuation">)</span>\n\ntimestamp <span class="token operator">=</span> Timestamp<span class="token punctuation">(</span><span class="token punctuation">)</span>\n\napi<span class="token punctuation">.</span>add_route<span class="token punctuation">(</span><span class="token string">\'/timestamp\'</span><span class="token punctuation">,</span> timestamp<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Here, we’ve defined a Falcon API, and initialized an instance of the resource class we created earlier. Then, we’ve hooked up the <code>/timestamp</code> endpoint with the class instance - and now we’re good to go! To test this API install <code>gunicorn</code>(<code>pip install gunicorn</code>), and run <code>gunicorn app</code>. Use Postman or simple <code>cURL</code> to test this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ curl http://localhost:8000/timestamp                                                    \n{"utc": "2017-10-20 06:03:14", "unix": 1508479437}</code></pre>\n      </div>\n<p>And that does it!</p>\n<h2>Moving on</h2>\n<p>Once you’ve got the hang of Falcon, composing powerful RESTful APIs that interact with databases or messaging queues is very easy. Do check out the <a href="https://falcon.readthedocs.io/en/stable/index.html">Falcon docs</a>, as well as PyPI for interesting Falcon modules that keep popping up.</p>',fields:{slug:"/python/rest-api-with-falcon/"},frontmatter:{title:"REST APIs with Falcon"}}},pathContext:{slug:"/python/rest-api-with-falcon/"}}}});
//# sourceMappingURL=path---python-rest-api-with-falcon-79275dd74c3b1c7b1d76.js.map