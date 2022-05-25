//Задача 1

function changeText(){
    var z = document.getElementsByClassName('zzz')
    for(var i=0; i<z.length; i++){
        z[i].innerHTML = i
    }
}
changeText()

//Задача 3

function addText(){
   
var body = document.querySelector('body')
var ul = document.createElement('ul')
body.append(ul)
var z = document.getElementsByClassName('zzz')

for (var i = 0; i<z.length; i++){
    var li = document.createElement('li')
    ul.append(li)
    var zText = z[i].textContent
    li.append(zText)
}
}
addText()

//Задача 2

function wwwClassAdd (){

var arr = []
var body = document.querySelector('body')
var bodyChildren = body.children

for (var i = 0; i < bodyChildren.length; i++){
    arr.push(bodyChildren[i].textContent)
    if (arr[i].includes('www')){
        bodyChildren[i].classList.add('blue')
    }
}
}
wwwClassAdd()