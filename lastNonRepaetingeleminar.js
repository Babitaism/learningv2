function lastNonRepeatingElement(arr) {
    let obj = {};
    let blankArray=[]
    for (let i in arr) {
      let keys = arr[i];
      if (obj[keys] == undefined) {
        obj[keys] = 0;
      }
      obj[keys] = obj[keys] + 1;
    }
    for (let i = arr.length-1; i > 0; i--) {
      let char = arr[i];
      if (obj[char] == 1) {
      return char

      }
    }
     return -1;
  }

  let elements = lastNonRepeatingElement([10, 10,7, 5, 3, 7, 4, 3, 5, 6]);
  console.log(elements);
