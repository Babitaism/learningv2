// function calculateSum(arr, num) {
//     let blankarray = [];
//     let len = arr.length;
//     for (let i=0;i<len;i++) {
//       let ch =""
//       for(let j = 1;j<len;j++){
//         if(num== arr[i]+arr[j]){
//           blankarray.push(arr[i]+ch+arr[j])
//         }
//       }
//       if( num == arr[i]){
//         blankarray.push(arr[i])
//       }
//     }
//     return blankarray
//   }

function calculateSum(arr, sum) {
  arr.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  let len = arr.length;
  let blankArray = [];
  let initialPointer=0
  let finalPointer =len-1
  for (let i in arr) {
    if (sum == arr[initialPointer] + arr[finalPointer] && initialPointer != finalPointer) {
      blankArray.push([arr[initialPointer], arr[finalPointer]]);
    }
     finalPointer--
     if (sum == arr[initialPointer] + arr[finalPointer] && initialPointer != finalPointer) {
      blankArray.push([arr[initialPointer], arr[finalPointer]]);
    }
    initialPointer++
  }
  return blankArray
}



let x = calculateSum([10, 2, 3, 4, 5, 6], 6);
console.log(x);
