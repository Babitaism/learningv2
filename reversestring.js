function reverseString(str){
let str_arr = str.split("")
// console.log(str_arr)
let initialPointer = 0
let len= str.length
let finalPointer =len-1
let temp
while(finalPointer>initialPointer){
temp = str_arr[initialPointer]
str_arr[initialPointer]=str_arr[finalPointer]
str_arr[finalPointer]=temp
initialPointer++
finalPointer--
}
return str_arr.join("")
}

let reversedString=reverseString("My name is Babita")
console.log(reversedString)