
//Задача 1
var str1 = 'ahb acb aeb aeeb adcb axeb'
var regEx1 = /a\w+b/g
//console.log(str1.match(regEx1))

//Задача 2
var str2 = '*+ *q+ *qq+ *qqq+ *qqq qqq+'
var regEx2 = /\*q{1,3}\+/g
//console.log(str2.match(regEx2))

//Задача 3

var str3 = '2012/12/30 23:59'
var regEx3 = /^((1[0-9]{3})|(20[0-1][0-2])|(200[0-9]))\/((0[0-9])|[1][0-2])\/(([0-2][0-9])|(30))\s(([0-1][0-9])|([2][0-3]))\:([0-5][0-9]$)/

//console.log(regExYears.test(str3))
//Задача 4.

var str4 = 'Extra   spaces\nSentence.   Sentence.'
var str5 = str4.replace(/\s+/g, " ").replace(/(\.)(\s+)/g, "$1  ")
console.log(str5)
