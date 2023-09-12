function fibonacci(num){
let a = 0
let b = 1
let c
for(i=1;i<num;i++){
c = a + b
a = b
b = c

}
return b
}

let fibonacciSeries = fibonacci(7)
console.log(fibonacciSeries)
