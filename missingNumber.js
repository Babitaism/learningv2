function missingNum(array, length) {
    let sum = 0;
    let sum1 = 0;
    for (let i = 0; i < length; i++) {
      sum = sum + i;
    }
    for (let i = 0; i < array.length; i++) {
      sum1 = sum1 + i;
    }
    let difference = sum - sum1;
    return difference;
  }
  
  let missingNumber = missingNum([1, 2, 6, 3, 4, 5, 8], 8);
  console.log(missingNumber);