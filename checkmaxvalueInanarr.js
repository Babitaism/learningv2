function checkSubArrWithMaxSum(arr) {
    let blankArray = [];
    for (let i = 0; i < arr.length; i++) {
      let sum = arr[i];
      for (let j = i + 1; j < arr.length; j++) {
        sum = sum + arr[j];
        blankArray.push(sum);
      }
    }
    let largest = blankArray[0];
    for (let i in blankArray) {
      if (largest < blankArray[i]) {
        largest = blankArray[i];
      }
    }
    return largest;
  }
  let result = checkSubArrWithMaxSum([-2, -3, 4, -1, -2, 1, 5, -3]);
  console.log(result);
