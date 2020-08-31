let str = ' 5hel1lo4 wor2ld '
str.replace(/\d/g,'替换')
console.log(str);


// \s 匹配空白符
// \d 匹配数子
// \w 匹配字母、数子、下划线
// \b 匹配单词边界

/^\d1(\d{11})/.test('15517812883')