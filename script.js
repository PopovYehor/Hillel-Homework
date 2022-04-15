// Задача 1

var min = +prompt("Введите число от 1 до 59", "");
if (min <= 0 || min <= 14){
    console.log("Первая чверть");
}
else if (min <= 15 || min <= 29){
    console.log("Вторая чверть");
}
else if (min <= 30 || min <= 44){
    console.log("Третья чверть");
}
else if (min <= 45 || min <= 59){
    console.log("Четвертая чверть");
}


// Задача 2

var a = '1';
if (a === '1'){
    console.log("Верно");
}else {
    console.log("Не верно");
}

a === 1 ? console.log("Верно") : console.log("Не верно");
a === 3 ? console.log("Верно") : console.log("Не верно");



// Задача 3
// Полная запись

var test = false;
if (test != true){
    console.log("Верно");
}else{
    console.log("Не верно");
}

// Тернарное выражение

test != true ? console.log("Верно") : console.log("Не верно");


//Задача 4

var a = 5;
if (a > 0 && a < 5){
    console.log("Верно");
}else{
    console.log("Не верно");
}
a = 0;
(a > 0 && a < 5) ? console.log("Верно") :  console.log("Не верно");
a = -3;
(a > 0 && a < 5) ? console.log("Верно") :  console.log("Не верно");
a = 2;
(a > 0 && a < 5) ? console.log("Верно") :  console.log("Не верно");


//Задача 5

var num = +prompt("Введите от 1 до 4", "");
var result = "";
if (num == 1){
    result = "Зима";
    console.log(result);
}else if (num == 2){
    result = "Весна";
    console.log(result);
}else if (num == 3){
    result = "Лето";
    console.log(result);
}if (num == 4){
    result = "Осень";
    console.log(result);
}