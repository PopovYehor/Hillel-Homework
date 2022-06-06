
//Задача 1
var str1 = 'ahb acb aeb aeeb adcb axeb'
var regEx1 = /a\w+b/g
console.log(str1.match(regEx1))

//Задача 2
var str2 = '*+ *q+ *qq+ *qqq+ *qqq qqq+'
var regEx2 = /\*q{1,3}\+/g
console.log(str2.match(regEx2))

//Задача 3

var str3 = '2012/09/18 12:10'
var regEx3 = /^(1\d{3}\/[0-1][1-9]\/[0-3][1-9]\s[0-2][1-9]\:[0-6][0-9]$)|^(200\d\/[0-1][1-9]\/[0-3][1-9]\s[0-2][1-9]\:[0-6][0-9]$)|^(201[1-2]\/[0-1][1-9]\/[0-3][1-9]\s[0-2][1-9]\:[0-6][0-9]$)/
console.log(regEx3.test(str3))

//Задача 4.

var str4 = 'Extra   spaces => Extra spaces\n Sentence.   Sentence. => Sentence.  Sentence.'
str4 = str4.replace(/\s{2,}/i, ' ').replace(/\s{2,}/g ,'  ').replace(/\=\>/g, '')
console.log(str4)
