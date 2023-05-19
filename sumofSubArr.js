function sumOfSubArr(arr, [a, b]) {
  let firstElemIndex = a;
  let lastElemIndex = b;
  let sum = 0;
  for (let i = firstElemIndex; i <= lastElemIndex; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

let sum = sumOfSubArr([1, 2, 3, 4, 5, 6], [1, 5]);
console.log(sum);