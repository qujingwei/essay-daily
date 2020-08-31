var array=[101,20,9,8,79,65,100];
// 冒泡排序
for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
        if(array[j] > array[j+1]){
            var mask = array[j]
            array[j] = array[j + 1]
            array[j + 1] = mask
        }
    }
}

// 快排

console.log(array);
