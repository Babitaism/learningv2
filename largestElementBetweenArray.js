function largestElementInBetweenArrays(arr) {
    let blankArray = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
        blankArray.push(arr[i]);
      }
    }
    return blankArray;
  }

  let output = largestElementInBetweenArrays([7, 8, 9, 2, 3, 1]);
  console.log(output);
