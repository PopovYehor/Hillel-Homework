var sum = 0;
while (true){
    var d = prompt("Что вы хотите сделать? + - / *","")
        if (d == "+" || d == "-" || d == "*" || d == "/"){
        break;
    }
}
while (true){
    var operation = +prompt("Сколько оперантов хотите использовать?", "");
    if (operation > 1){
        break;
    }
}
for(var i=0; i < operation; i++){
    while (true){
    var operant = +prompt("Введите свой оперант", "");
        if (operant){
        break;
    }
}
if (i==0){
    sum = operant;
    }else{
        switch(d){
        case "+": sum = sum+operant
        alert("Ваша математическая операция равна:" + " " +sum);
        break;
        case "-": sum = sum - operant
        alert("Ваша математическая операция равна:" + " " +sum);
        break;
        case "/": sum /= operant
        alert("Ваша математическая операция равна:" + " " +sum);
        break; 
        case "*": sum *= operant
        alert("Ваша математическая операция равна:" + " " +sum);
        break; 
        }
    }
}
