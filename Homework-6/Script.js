// Задача 1

var arr =  [{name: 'Vasya', age: 24}, {name: 'Petya', age: 12}, {name: 'Fedya', age: 6}, {name: 'Ann', age: 18}, {name: 'Nastya', age: 40} ];
arr.sort(function(a , b){
   
    if (a.age >= b.age){
        return 1
    }
    else if (a.age <= b.age) {
        return -1
    }
    else if (a.age === b.age){
        return 0
    }
})
console.log(arr)


// Задача 2

var arr = [NaN, 0, 77, false, -17, '', undefined, 99, null];
function filterFalse(arr) {
    return arr.filter(function(i) { 
        return i 
    })
}
console.log(filterFalse(arr))


//Задача 4

function createMatrix(row, col){
var row = +prompt("Введите количество строк")
var col = +prompt("Введите количество столбцов")
    if (row && col){
        var matrix = []
        for (i = 0; i < row; i++){
        var matrixRow = []
            for (j = 0; j < col; j++){
              var random = Math.ceil(Math.random()*100)
              matrixRow.push(random)
            }
        matrix.push(matrixRow)
        }
    return matrix;
    }
    else {
    return "Error"
    }
}
console.log(createMatrix())

//Задача 3

function find(arr,value){
    var arr = [1,2,10,5,1]
    var index = []
    var findIndex = 1
    var value = arr.indexOf(findIndex)
    while (value != -1){
        index.push(value)
        value = arr.indexOf(findIndex, value+1)
    }
    return index

}
console.log(find())