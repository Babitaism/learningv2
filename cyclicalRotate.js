function cycylicalRotate(arr) {
    let temp;
    let len = arr.length;
    for (let i in arr) {
      temp = arr[len - 1];
      arr[len - 1] = arr[i];
      arr[i] = temp;

    }
    return arr;
  }

  let finalOutput = cycylicalRotate([6,0, 7, 5]);
  console.log(finalOutput);
  // 1, 2 3 4 5
  // 5 2 3 4 1
  // 5 1 3 4 2
  // 5 1 2 3 4
