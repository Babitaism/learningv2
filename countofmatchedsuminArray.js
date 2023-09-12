function matchedPairSum(arr, sum) {
  let len = arr.length;
  let array = [];

  for (let x = 0; x < len; x++) {
    for (y = x+1; y < len+1; y++) {
      if (sum == arr[x] + arr[y]) {
        array.push([arr[x] , arr[y]])
      }
    }
  }
  return array;
}

let pairs = matchedPairSum([10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1],11);
console.log(pairs);
