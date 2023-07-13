function arrangingArr(arr) {
    let len = arr.length;
    debugger
    let blankArr = [];
    let temp = [];
    for (i = 0; i < 4; i++) {
      temp = [];
      for (j = 0; j < 3; j++) {
        temp.push(arr[j]);
      }
      blankArr.push(temp)
    }
    return blankArr;
  }
  
  let arrangedArr = arrangingArr([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  console.log(arrangedArr);