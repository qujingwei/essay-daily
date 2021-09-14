
// 1、常见的数据结构，合并有序链表，快速排序的时间复杂度
// 2、进程和线程，浏览器多进程架构
// 3、Tcp udp http http2
// 4、作用域、闭包
// 5、事件循环、Promise
// 6、原型链 继承

// 作用域、闭包
for (var index = 0; index < 10; index++) {
    setTimeout(function(){
        console.log(index);
    }, 0);
}

for (var index = 0; index < 10; index++) {
    var fn = function(index){
        setTimeout(console.log(index), 0);
    }
    fn(index)
}

// 事件循环  Promise
ajaxFn(url, {
    success: (res) => {},
    error: (err) => {},
})

// 原型链 继承
function Person (){
    this.footNum = 2
    this.handNum = 2
    this.headNum = 1
}

Person.prototype.say = function(){
    console.log('Hello World!');
}
let p = new Person()
Person.prototype.say = function(){
    console.log('我是张三');
}
p.say()


function Chinese (){
    Person.call(this)
}
Chinese.prototype = Object.create(Person.prototype)

Chinese.prototype.constructor = Chinese











function tpl(templateStr, arr) {
    //数组
    const array = templateStr.split("{{$")
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        //判断是否有}}
        let item = array[i];
        const index = item.indexOf('}}')
        if (index !== -1) {
            //取出index
            const number = item.slice(0,index)
            item = item.slice(index)
            //然后处理}}
            item = item.split("}}")[1]
            array[i] = arr[number]+item
        }
    }
    return array.join("")
}
module.exports = {
    tpl : tpl
};

