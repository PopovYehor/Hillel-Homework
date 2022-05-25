//Задача 1

function makePassword(pasword){
    var pasword = prompt("Введите пароль", "");
    return function (){
        if (pasword == "vasya"){
            return true
        }
        else{
            return false
        }
    }
}
var truePassword = makePassword(password)
console.log(truePassword())

//Задача 2

function random (random){
    var random = Math.ceil(Math.random()*100)
    return random
}
function add(){
    return function (arr){
    var arr = []
    for (;;){
        if (arr.includes(random())==false){
            arr.push(random())
        }
        else{
            break
        }
    }
return arr
    }
}
var generation = add() 
console.log(generation())