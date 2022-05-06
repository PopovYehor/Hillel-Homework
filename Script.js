//Задача 1

function toSum(){
var array = [2, 3, 4, 5, 6, 7]
var result = array.reduce(function(sum, current){
    sum+=current
    return sum
})
return result
}
console.log(toSum())

//Задача 2

function sumStep(start, step, end){
    
    if (start>=end){
        return 0
    }
    else if (step>=end){
        return 0
    }
    else if ((start+step)<=end){
        var sum =0
        sum += start
        return sum = (start + step) + sumStep(start+step,step,end)    
    }
    }
console.log(sumStep(1,1,10))

