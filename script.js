var sum = ''
for (var i = 0; i < 7; i++){
    if(i == 0) sum = sum + '#' + '\n'
    if(i == 1) {
         for (var j = 0; j < 2; j++){
             sum = sum + '#'
         }
         sum = sum + '\n'
     }
     if(i == 2) {
         for (var j = 0; j < 3; j++){
             sum = sum + '#'
         }
         sum = sum + '\n'
     }
     if(i == 3) {
         for (var j = 0; j < 4; j++){
             sum = sum + '#'
         }
         sum = sum + '\n'
     }
     if (i == 4){
         for (var j = 0; j < 5; j++){
             sum = sum + "#"
         }
         sum = sum + '\n'
     }
     if (i == 5){
         for (var j = 0; j < 6; j++){
             sum = sum + "#"
         }
         sum = sum + '\n'
     }
     if (i == 6){
        for (var j = 0; j < 7; j++){
            sum = sum + "#"
        }
        sum = sum + '\n'
    }
    if (i == 7){
        for (var j = 0; j < 8; j++){
            sum = sum + "#"
        }
        sum = sum + '\n'
    }
 }
 console.log(sum)


 //Бонусная задача
var summ = "";
for (var i = 0; i<12;i++){
    if(i == 0){
         summ = summ +'"' + '#############################' +'"' + '\n'
    }
    if (i == 1){
        summ = summ +'"'+ "#####"+ "                  " +"######"+'"'+ '\n'
    }
    if (i == 2){
        summ = summ + '"' + "##" + "   " + "***" + "                 " + "**" + "##" + '"' + '\n'
    }
    if (i == 3){
        summ = summ +'"'+ "#"+ "   "+ "*##**"+ "          "+ "**"+ "  "+ "O"+ "  "+ "*##" +'"'+'\n'
    }
    if (i == 4){
        summ = summ + '"'+ "#"+"    "+"***"+"     "+"O"+"     "+"##**"+"    "+"*#"+'"'+'\n'
    }
    if (i == 5){
        summ = summ + '"'+"#"+"       "+"O"+"          "+"##***"+"    "+"#"+'"'+'\n'
    }
    if ( i == 6){
        summ = summ + '"'+"#"+"                  "+"##**"+"     "+"#"+'"'+'\n'
    }
    if ( i == 7){
        summ = summ + '"'+"#"+"   "+"O"+"       "+"#*"+"              "+"#"+'"'+'\n'
    }
    if ( i == 8){
        summ = summ + '"'+"#"+ "*"+"          "+"#**"+"        "+"O"+"    "+"#"+'"'+'\n'
    }
    if ( i == 9){
        summ = summ + '"'+"#"+"***"+"        "+"##**"+"     "+"O"+"    "+"**"+"#"+'"'+'\n'
    }
    if ( i == 10){
        summ = summ + '"'+"#"+"#****"+"     "+"###***"+"        "+"*##"+"#"+'"'+'\n'
    }
    if ( i == 11){
        summ = summ +'"' + '#############################' +'"' + '\n'
    }
} 
console.log(summ);