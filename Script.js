// Задача 1

function Num(){
for (;;){
var num1 = +prompt("Введите первое число", "");
var num2 = +prompt("Введите второе число", "");
if (num1 == num2){
    console.log("Числа равны");
}
else if (num1>num2){
    console.log("Первое число больше второго")
}
else if (num2>num1){
    console.log("Второе число больше первого")
}
else if (num1 != true){

    console.log("Первый ввод не число")
    break;
}
else if (num2 !=true){
    console.log("Второй ввод не число")
    break;
}
}
}
console.log(Num())


//Задача 2

function front_door (){
    var level = +prompt("Введите этажность дома (1-25)", "");
    var frontDoor = +prompt("Введите количество подьездов (1-10)","");
    var apartment = +prompt("Введите количество квартир на лестничной площадке (1-20)","");
    var numApartment = +prompt("Введите номер квартиры","");
    
    if (level&&frontDoor&&apartment&&numApartment){
    var apart_in_front_door = level*apartment;
    var num_front_door1 = numApartment%apart_in_front_door;
    var num_front_door2 = (numApartment-num_front_door1)/apart_in_front_door;
        if (num_front_door1==0){
            return num_front_door2
        }
        else if (num_front_door1!=0){
            num_front_door2+1
            return num_front_door2
        }
    }
    else {
        return "Error"
    }
}
console.log(front_door())


// Задача 3

function numbers (Number1, Number2){
    var Number1 = +prompt("Введите первое число","");
    var Number2 = +prompt("Введите второе число","");
    if (Number1 % 2 == 0 && Number2 % 2 == 0){
        return Number1 * Number2
    }
    else if (Number1 % 2 == 1 && Number2 % 2 == 1){
        return Number1 + Number2
    }
    else if (Number1 % 2 == 0 && Number2 % 2 == 1){
        return Number2
    }
    else if (Number1 % 2 == 1 && Number2 % 2 == 0){
        return Number1
    }
}
console.log(numbers())


//Задача 4

function coorditates (){
    var x1 = +prompt("Введите координату X1","")
    var y1 = +prompt("Введите координату y1","")
    var x2 = +prompt("Введите координату X2","")
    var y2 = +prompt("Введите координату y2","")
    var x3 = +prompt("Введите координату X3","")
    var y3 = +prompt("Введите координату y3","")
    var x4 = +prompt("Введите координату X4","")
    var y4 = +prompt("Введите координату y4","")
    if (x1 == x2 && x3 == x4 && y1 == y4 && y3 == y2){
       return "Прямоугольник"
    }
    else{
        return "Не прямоугольник"
    }
}
console.log(coorditates());  


//Задача 5

function getSequence(start, step) {
    start =  0;
    step =  1;
    return function(){
        return start += step;
        }
}

var generator = getSequence(0, 1);
console.log(generator());

     

 