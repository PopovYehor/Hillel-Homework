<<<<<<< HEAD
var valueTime = prompt("Введіть час дзвінку у форматі ГГ:ХХ")

function strValue (){
var arrValue = []
arrValue.push(valueTime)
var joinValue = arrValue.join()
var replaceValue = joinValue.replace(':','')  
return replaceValue
}
strValue()

function strTime (){
    var arrHours = []
    var arrMinutes = []
    var date = new Date()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    hours < 10 ? hours = "0" + hours : hours
    minutes < 10 ? minutes = "0" + minutes : minutes
    arrHours.push(hours)
    arrMinutes.push(minutes)
    var joinHours = arrHours.join()
    var joinMinutes = arrMinutes.join()
    return joinHours+joinMinutes
    
}
setInterval(strTime, 1000)

var getCall = setInterval( function(){
if (strValue()==strTime()){
    clearInterval(getCall)
    return alert ("Дзвінок")
}
}, 1000)

function time (){
var date = new Date()
var hours = date.getHours()
var minutes = date.getMinutes()
var seconds = date.getSeconds()
seconds < 10 ? seconds = "0" + seconds : seconds
minutes < 10 ? minutes = "0" + minutes : minutes
var oclock = hours + ":" + minutes + ":" + seconds
document.getElementById('clock').innerHTML = oclock
}
setInterval(time,1000)
=======
var yourName = prompt ("Как вас зовут?");
if (yourName = "Евгений"){
    console.log{true}
}
>>>>>>> e08118a92383c31c632c3e7651c996128c8242ed
