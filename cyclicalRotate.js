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

  let finalOutput = cycylicalRotate([1, 2, 3, 4,5]);
  console.log(finalOutput);
