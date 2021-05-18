// 防抖——触发高频事件后 n 秒后函数只会执行一次，如果 n 秒内高频事件再 次被触发，则重新计算时间；
function debounce(fn,time) {
    let timeout = null
    return function() {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, arguments)
        }, time)
    }
}

function sayHi() {
    console.log('防抖成功')
}
let inp = document.getElementById('inp')
inp.addEventListener('input', debounce(sayHi,1000))


// 节流——高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执 行频率。
function throttle(fn, time){
    let isRun = false
    return function (){
        if(isRun) return
        isRun = true
        setTimeout(() => {
            fn.apply(this, arguments)
            isRun = false
        },time)
    }
}