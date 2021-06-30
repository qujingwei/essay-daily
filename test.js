let str = 'Hello World'

// console.log(str.slice(3));  //lo World
// console.log(str.substring(3));  //lo World
// console.log(str.substr(3)); //lo World

// console.log(str.slice(3, 7));  //lo W
// console.log(str.substring(3, 7));  //lo W
// console.log(str.substr(3, 7)); //lo Worl

// console.log(str.slice(-3));  //rld
// console.log(str.substring(-3));  //Hello World
// console.log(str.substr(-3)); //rld

// console.log(str.slice(3, -4));  //lo W
// console.log(str.substring(3, -4));  //Hel
// console.log(str.substr(3, -4)); // ’‘

console.log(str.slice(-3, -4));  // ’‘ 8 7
console.log(str.slice(-4, -3));  // 'o' 7 8
console.log(str.substring(-3, -4));  // '' 0 0
console.log(str.substring(-4, -3));  //'' 0 0
console.log(str.substr(-3, -4)); // ’‘ 8 0
console.log(str.substr(-4, -3)); // ’‘ 7 0

let arr = [{a:1},{a:2}]
arr.find(item => item.a === 2).b = 3

