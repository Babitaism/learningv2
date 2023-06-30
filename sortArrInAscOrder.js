// function to sort an array in ascending order
function sortingArr(arr) {
    arr.sort(function (a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });
    return arr;
  }
  
  let array = sortingArr([1, 6, 7, 20, 5, 10, 3, -1]);
  console.log(array);

  // function to sort an array till number 9

// function sortArr(arr){
// arr.sort()
// return arr
// }

// let sortedArray = sortArr([1,3,5,4,6,9,2,7,0])
// console.log(sortedArray)

