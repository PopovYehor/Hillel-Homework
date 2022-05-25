
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
/*
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
*/
//Бонусная задача (переделанная)

var sum = ""
var star = "*"
var grill = "#"
var space = " "
var quotes = '"'
var zero = "O"

for (var i = 0; i<12;i++){
    if(i == 0){
        for (var q = 0; q<1; q++){
            sum = sum+quotes
        }

        for (var g = 0; g < 28; g++){
        sum = sum+grill
        }
        for (var q = 0; q<1; q++){
            sum = sum+quotes
        }
    sum = sum + '\n'
    }
    if(i == 1){
        for (var q = 0; q<1; q++){
            sum = sum+quotes
        }

        for (var g = 0; g < 5; g++){
        sum = sum+grill
        }
        for (var s = 0; s<17; s++){
            sum = sum + space
        }
        for (var g = 0; g < 6; g++){
            sum = sum+grill
            }
        for (var q = 0; q<1; q++){
            sum = sum+quotes
        }
    sum = sum + '\n'
    }
    if (i==2){
        for (var q = 0; q<1; q++){
            sum = sum+quotes
        }
        for (var g = 0; g < 2; g++){
            sum = sum+grill
            }
        for (var s = 0; s<3; s++){
            sum = sum + space
            }
        for (var r = 0; r<3; r++){
            sum = sum + star
        }
        for (var s = 0; s<16; s++){
            sum = sum + space
        }
        for (var r = 0; r<2; r++){
            sum = sum + star
        }
        for (var g = 0; g < 2; g++){
            sum = sum+grill
            }
        for (var q = 0; q<1; q++){
            sum = sum+quotes
        }
    sum = sum + '\n' 
    }
    if (i==3){
        for (var q = 0; q<1; q++){
            sum = sum+quotes+grill
        }
        for (var s = 0; s<3; s++){
            sum = sum + space
        }
        for (var r = 0; r<1; r++){
            sum = sum + star
        }
        for (var g = 0; g < 2; g++){
            sum = sum+grill
        }
        for (var r = 0; r<2; r++){
            sum = sum + star
        }
        for (var s = 0; s<9; s++){
            sum = sum + space
        }
        for (var r = 0; r<2; r++){
            sum = sum + star
        }
        for (var s = 0; s<2; s++){
            sum = sum + space
        }
        for (var z = 0; z<1; z++){
            sum = sum + zero
        }
        for (var s = 0; s<2; s++){
            sum = sum + space
        }
        for (var r = 0; r<1; r++){
            sum = sum + star
        }
        for (var g = 0; g < 2; g++){
            sum = sum+grill
        }
        for (var q = 0; q<1; q++){
            sum = sum+quotes
        }
    sum = sum + '\n' 
    }
    if (i==4){
        for (var q = 0; q<1; q++){
            sum = sum+quotes+grill
        }
        for (var s = 0; s<3; s++){
            sum = sum + space
            }
        for (var r = 0; r<3; r++){
            sum = sum + star
        }
        for (var s = 0; s<5; s++){
            sum = sum + space
        }
        for (var z = 0; z<1; z++){
            sum = sum + zero
        }
        for (var s = 0; s<5; s++){
            sum = sum + space
        }
        for (var g = 0; g < 2; g++){
            sum = sum+grill
        }
        for (var r = 0; r<2; r++){
            sum = sum + star
        }
        for (var s = 0; s<4; s++){
            sum = sum + space
        }
        for (var q = 0; q<1; q++){
            sum = sum+star+grill+quotes
        }
    sum = sum +'\n' 
    }
    if (i==5){
        for (var q = 0; q<1; q++){
            sum = sum+quotes+grill
        }
        for (var s = 0; s<7; s++){
            sum = sum + space
        }
        for (var z = 0; z<1; z++){
            sum = sum + zero
        }
        for (var s = 0; s<9; s++){
            sum = sum + space
        }
        for (var g = 0; g < 2; g++){
            sum = sum+grill
        }
        for (var r = 0; r<3; r++){
            sum = sum + star
        }
        for (var s = 0; s<4; s++){
            sum = sum + space
        }
        for (var q = 0; q<1; q++){
            sum = sum+grill+quotes
        }
    sum = sum + '\n'
    }
    if (i == 6){
        for (var q = 0; q<1; q++){
            sum = sum+quotes+grill
        }
        for (var s = 0; s<17; s++){
            sum = sum + space
        }
        for (var g = 0; g < 2; g++){
            sum = sum+grill
        }
        for (var r = 0; r<2; r++){
            sum = sum + star
        }
        for (var s = 0; s<5; s++){
            sum = sum + space
        }
        for (var q = 0; q<1; q++){
            sum = sum+grill+quotes
        }
    sum = sum+'\n'
    }
    if (i==7){
        for (var q = 0; q<1; q++){
            sum = sum+quotes+grill
        }
        for (var s = 0; s<3; s++){
            sum = sum + space
        }
        for (var z = 0; z<1; z++){
            sum = sum + zero
        }
        for (var s = 0; s<6; s++){
            sum = sum + space
        }
        for (var g = 0; g < 1; g++){
            sum = sum+grill+star
        }
        for (var s = 0; s<14; s++){
            sum = sum + space
        }
        for (var q = 0; q<1; q++){
            sum = sum+grill+quotes
        }
    sum = sum +'\n'    
    }
    if (i==8){
        for (var q = 0; q<1; q++){
            sum = sum+quotes+grill+star
        }
        for (var s = 0; s<9; s++){
            sum = sum + space
        }
        for (var g = 0; g < 1; g++){
            sum = sum+grill
        }
        for (var r = 0; r<2; r++){
            sum = sum + star
        }
        for (var s = 0; s<8; s++){
            sum = sum + space
        }
        for (var z = 0; z<1; z++){
            sum = sum + zero
        }
        for (var s = 0; s<4; s++){
            sum = sum + space
        }
        for (var q = 0; q<1; q++){
            sum = sum+grill+quotes
        }
    sum = sum + '\n'
    }
    if (i==9){
        for (var q = 0; q<1; q++){
            sum = sum+quotes+grill
        }
        for (var r = 0; r<3; r++){
            sum = sum + star
        }
        for (var s = 0; s<7; s++){
            sum = sum + space
        }
        for (var g = 0; g < 2; g++){
            sum = sum+grill
        }
        for (var r = 0; r<2; r++){
            sum = sum + star
        }
        for (var s = 0; s<4; s++){
            sum = sum + space
        }
        for (var z = 0; z<1; z++){
            sum = sum + zero
        }
        for (var s = 0; s<5; s++){
            sum = sum + space
        }
        for (var r = 0; r<2; r++){
            sum = sum + star
        }
        for (var q = 0; q<1; q++){
            sum = sum+grill+quotes
        }
    sum=sum+'\n'  
    }
    if (i==10){
        for (var q = 0; q<1; q++){
            sum = sum+quotes
        }
        for (var g = 0; g < 2; g++){
            sum = sum+grill
        }
        for (var r = 0; r<4; r++){
            sum = sum + star
        }
        for (var s = 0; s<4; s++){
            sum = sum + space
        }
        for (var g = 0; g < 3; g++){
            sum = sum+grill
        }
        for (var r = 0; r<3; r++){
            sum = sum + star
        }
        for (var s = 0; s<8; s++){
            sum = sum + space
        }
        for (var r = 0; r<1; r++){
            sum = sum + star
        }
        for (var g = 0; g < 3; g++){
            sum = sum+grill
        }
        for (var q = 0; q<1; q++){
            sum = sum+quotes
        }
    sum = sum+'\n'   
    }
    if (i==11){
        for (var q = 0; q<1; q++){
            sum = sum+quotes
        }

        for (var g = 0; g < 28; g++){
        sum = sum+grill
        }
        for (var q = 0; q<1; q++){
            sum = sum+quotes
        }
    sum = sum+'\n' 
    }
}

console.log(sum);  