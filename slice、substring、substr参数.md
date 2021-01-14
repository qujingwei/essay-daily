`slice`、`substring`、`substr`的正数、负数参数傻傻搞不懂？  
一个简单的技巧让你记住。看下面几个例子

先来一个是正数的：
```js
let str = 'Hello World'

console.log(str.slice(3));  //lo World
console.log(str.substring(3));  //lo World
console.log(str.substr(3)); //lo World

console.log(str.slice(3, 7));  //lo W
console.log(str.substring(3, 7));  //lo W
console.log(str.substr(3, 7)); //lo Worl
```
来一个是负数的:
```js
console.log(str.slice(-3));  //rld
console.log(str.substring(-3));  //Hello World
console.log(str.substr(-3)); //rld

console.log(str.slice(3, -4));  //lo W
console.log(str.substring(3, -4));  //Hel
console.log(str.substr(3, -4)); // ’‘
```
再整一个都是负数的：
```js
console.log(str.slice(-3, -4));  // ’‘ 
console.log(str.slice(-4, -3));  // 'o' 
console.log(str.substring(-3, -4));  // '' 
console.log(str.substring(-4, -3));  //'' 
console.log(str.substr(-3, -4)); // ’‘ 
console.log(str.substr(-4, -3)); // ’‘ 
```
壮士！醒醒~ 醒醒~  
是不是已经傻傻分不清了

先说一下参数是正数的情况。`slice`和`substring`第一个参数表示字符串开始的位置，第二个参数表示字符串结束的位置(即该位置之前的字符串)，如果第二个参数没有的话表示第一个参数到字符串末尾。对`substr`而言第二个参数表示截取的字符串数量，如果没有则截取到字符串末尾。  
当参数是负数的时候呢，这三个方法的行为就又不一样了。`slice`会将所有负参数都加上字符串的长度，相加之后的结果值再作为参数。`substring`会将所有负参数都转换位0，如果第二个参数小于第一个参数，那么将调换两个参数的位置。`substr`会将第一个负参数加上字符串长度的结果值作为参数，将第二个负参数转换成0.  

其实这里不好记的主要就是参数为负数的情况。下面就展示一下我发现的终极奥义！

```js
//这是一段伪代码 param都代表负数
slice(param1, param2) + +
substring(param1, param2)  0 0
substr(param1, param2) + 0
```
相信大家已经明白上面 `+`和`0`所代表的的意思了。`+`表示负参数加字符串长度，`0`表示负参数转换成0。
>哈哈哈~ 这样记负参数的情况是不是简单多了。 恭喜你也掌握了`slice`、`substring`、`substr`三个方法负参数的终极奥义！

**思考题：**
>如果负数的绝对值大于字符串的长度呢？可以自己试试~


