// function abc(arr) {
//   bl = [];
//   for (let i in arr) {
//     if (typeof arr[i] == "number") {
//       bl.push(arr[i]);
//     }
//   }
//   return bl;
// }

// let x = abc([1, 2, "a", "s", "d", 2, "f"])
// console.log(x)

let arr = [1, 2, "a", "s", "d", 2,100, "f"]
let isInteger = arr.filter((i)=>{
 return typeof i=="number"
})

console.log(isInteger)

