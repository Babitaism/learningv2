function fibonacci(num){
let a = 0
let b = 1
let c
for(i=0;i<num;i++){
c = a + b
a = b
b = c
console.log(a,b,c)
}
return a
}

let fibonacciSeries = fibonacci(5)
console.log(fibonacciSeries)
