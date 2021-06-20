我们知道HTTP是浏览器中使用最多且最重要的协议，是浏览器和服务器之间的通信语言，也是互联网的基石。目前我们所能接触的HTTP协议版本主要就是
- **即将完成使命的HTTP/1**
- **正在向我们走来的HTTP/2**
- **面向未来的HTTP/3**

下面我们通过HTTP的发展历史以及他们的优缺点来分别了解它们

##超文本传输协议HTTP/0.9
最早版本的HTTP协议是诞生于1991年，主要是为了学术交流内部使用。需求也很简单就是传输HTML的，所以称之为**超文本传输协议**。整体来看实现比较简单，基于请求响应的模式，客户端发起请求服务端响应请求
下面是一个整体的请求流程

![](https://pic.imgdb.cn/item/60cabb5b844ef46bb2521c61.jpg)

- 因为HTTP都是基于TCP协议的，所以客户端要现根据IP、端口和服务器建立TCP连接，这个过程就是TCP的三次握手的过程
- 建立连接之后浏览器会发起一个GET请求获取HTML文本，比如GET host/index.html
- 服务端收到请求之后根据URL读取到index.html并返回
- 浏览器获取到index.html之后断开连接

从上面的分析可以总结一下HTTP/0.9的一些特点
- 只有一个请求行也就是URL，并没有**请求头和请求体**，因为客户端只需要一个请求行就能表达自己的需求了
- 服务端也没有响应头，因为客户端并不需要
- 返回的文件是以ASCII字符来传输的，因为请求内容只有HTML，所以使用ASCII是最合适的

##被浏览器推动的HTTP/1.0

随着拨号上网的发展以及网景浏览器的推出，万维网也不再仅限于内部学术交流使用，高速的发展也就带来了更多新的需求
首先就是在浏览器中展示的不再仅仅是HTML了，还包括了JavaScript、CSS、图片、音频、视频等各种类型的文件。因此对HTTP/1.0做核心的述求就是支持多种文件格式的传输

**那怎么才能满足多种文件类型的传输呢？**

上面说到HTTP/0.9只有一个请求行，只能传输HTML格式的文件。为了让客户端和服务端能够更深入的交流，**HTTP/1.0加入了请求头和响应头**，他们是以**key-value的形式**保存的。在浏览器发起HTTP请求的时候会带上请求头信息，服务端返回数据时也会返回响应头信息
请求流程参考下图

![](https://pic.imgdb.cn/item/60cabbe5844ef46bb257cb90.jpg)

下面我们看看HTTP/1.0是如何通过请求头和响应头解决以下几个问题的
- 浏览器和服务端需要互相告诉对方想要传输的数据类型
- 随着传输文件大小和数量的增加，为了传输性能服务端需要对文件进行压缩，所以双方需要决定一种压缩方式
- 由于互联网在全球范围内的流行，国际化也是需要支持的，这就需要浏览器告诉服务端自己所需要的语言版本
- 不同文件类型可能采用不同的编码格式，这也需要服务端告诉浏览器文件编码格式，以便于浏览器可以准确的读取文件

基于以上问题，下面是相关的头信息

请求头
```
Accept: text/html,application/xhtml+xml,application/xml
Accept-Encoding: gzip, deflate, br
Accept-Language: zh,zh-CN
```
其中第一行表示期望服务器返回返回HTML、XHTML或者XML类型的文件，第二行表示期望服务器采用gzip、deflate或者br的方式压缩文件，第三行表示期望的第一语言是中文

响应头
```
Content-Encoding: gzip
Content-Type: text/html;charset=utf-8
```
第一行表示服务器采用了gzip压缩方式，第二行表示文件类型是HTML，编码格式是utf-8。因为需要对国家化的支持以及对文件大小的兼容目前基本都是采用utf-8编码格式

除了上面提到的一些功能支持，HTTP/1.0基于头信息还实现了更多典型的特性
- **状态码** 有的请求服务器可能无法处理，或者处理出错，这就需要服务器告诉浏览器其处理的结果，这就是状态码。通过响应头实现
- **Cache机制** 在HTTP/1.0就已经提供了缓存的机制，主要也是通过响应头配合浏览器来实现的
- **User-Agent** 由于客服端类型越来越多，服务端为了更好的区分和兼容而增加了此header。但是当你观察不同浏览器的这个字段的时候会发现一个有意思的现象，好像每个浏览器带的值都差不多，把包括但不限于的Mozilla、Mac OS AppleWebKit、Chrome、Safari等名字都塞在User-Agent字段里面，其实这也是因为历史原因导致，客户端为了想要获取服务端做大限度的兼容性才这么做的

##持续改进的HTTP/1.1
由于需求的不断变化以及互联网爆发性的增长，很快HTTP/1.0也不能再满足需求所以HTTP/1.1在1.0的基础上又做了很多修改优化。下面看看HTTP/1.0遇到了哪些问题以及1.1又是如何做的改进

####1. 短连接 -> 持久连接
HTTP/1.0每进行一次数据的传输都要经历TCP建立(握手)、数据传输、断开连接(挥手)这三个步骤，如下图

![](https://pic.imgdb.cn/item/60caf800844ef46bb23203e2.jpg)

随着浏览器的发展，单个页面中包含的资源越来越多。一个站点包含上百个资源都是很正常的事情，如果在短时间内有大量请求，反复的建立和断开TCP连接无疑是一件效率非常低的事情
为了解决这个问题，HTTP/1.1引入了持久连接技术，其特点是在完成数据传输之后不会断开连接，可以持续传输多个HTTP请求数据，只要浏览器和服务器没有主动断开该链接就会持续保持

![](https://pic.imgdb.cn/item/60cafbad844ef46bb25bc0b9.jpg)

从上图可以看出来持久连接可以有效减少建立和断开连接的过程，减小开销的同时很大程度上也能缩短请求时长。HTTP/1.1是默认开启的持久连接的，通过头信息`Connection: keep-alive`来控制，浏览器可以将其设置为`close`来关闭，在浏览器关闭tab页或者刷新的时候也会主动断开连接。目前同一个域名下最多可同时建立6个TCP连接

####2. 被放弃的管线化技术
持久连接虽然可以减少TCP的建立和断开次数，但是多个请求依然需要有顺序的传输，只有等前面的请求结束才能发送下一个请求。如果TCP通道中有一个请求因为某些原因没有及时返回，那么就会对后面的请求造成阻塞，这就是著名的**队头阻塞**问题
在HTTP/1.1中试图通过管线化技术来解决此问题，HTTP管线化就是将多个HTTP请求整批提交的技术，在发送过程中不需先等待服务端的回应。虽然可以整批的发送请求，不过服务器还是需要根据顺序来依次响应给浏览器，所以队头阻塞还会发生。
后来因为种种原因，HTTP管线化也是被各大现代浏览器所放弃

####3. host支持虚拟主机
在HTTP/1.0的时候，一个域名只对应一个IP，也就是一台物理服务器。随着服务器和虚拟主机的发展，一台物理主机可以绑定多个虚拟主机，多个虚拟主机使用同一IP不同域名。
因此HTTP/1.1的请求头里增加了host字段，用来标记自己当前的域名，这样服务端就能根据host来做不同的处理

####4. 对动态生成内容的支持
HTTP/1.0中，响应头里会有一个Content-Length: 500字段，用来标识传输数据的大小，这样浏览器就能数据是否接收完。不过随着技术的发展，出现了越来越多动态生成的内容，因为不知道数据大小，这就导致在传输的时候并不知道何时才能传输完
HTTP/1.1通过**Chunk transfer 机制**来解决了这个问题，服务器会把生成的内容分成多个数据块进行传输，每个数据块都会附加上数据块的长度，当数据传输完的时候服务器会生成一个0长度的数据块作为结束标志，当浏览器收到这个标志的时候就代表着数据传输完成。这样就完成了对动态内容的支持

####5. cookie的引入
HTTP协议一直都是无状态的，但是随着web应用的发展有状态似乎已经成了每个网站必备的功能，HTTP/1.1为了实现用户登录状态，引入了cookie的概念。下面通过一个登录流程说一下
- 用户打开登录页面，输入账号密码并提交给服务器
- 服务器收到之后查询数据库做比对校验，成功之后会根据用户信息生成一段代表当前用户的字符串，并把该字符串写到响应头的**Set-Cookie**字段上。比如`Set-Cookie: sessionId=6d34w813s41; path=/`
- 浏览器收到返回信息并解析到响应头中的Set-Cookie字段时，就会把对应的值保存在本地
- 当浏览器再次向服务器发起请求的时候就会把存储在本地的cookie写入到请求头的**Cookie**字段里。比如`Cookie: sessionId=6d34w813s41;`
- 服务器在收到请求之后就会检查请求头里面的Cookie信息，如果能取到sessionId并且经过判断此ID处于登录状态，就会把对应的信息返回给浏览器，否者返回未登录相关的信息
- 这样浏览器就能根据返回的不同信息，来展示不同状态用户的界面信息了

###最后
目前使用最广泛的HTTP协议版本就是1.1，虽然HTTP/1.1相比于之前的版本做了大量优化个改进，但是由于一些效率问题始终无法解决，所以最终推出了HTTP/2.0并逐渐在取代HTTP/1.1
那HTTP/1.1到底有哪些不足，HTTP/2.0又做了哪些改进。由于篇幅我们下篇继续介绍






