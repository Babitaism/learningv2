function firstRepeatingIndex(arr) {
  let obj = {};
  for (let i in arr) {
    let keys = arr[i];
    if (obj[keys] == undefined) {
      obj[keys] = 0;
    }
    obj[keys] = obj[keys] + 1;
  }
  // console.log(obj);
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
  //   console.log(char, obj[char]);
    if (obj[char] > 1) {
      return {"index":i, "character":char}
    }
  }
  return "none";
}

let indexes = firstRepeatingIndex([10,10, 5, 3, 4, 3, 5, 6]);
console.log(indexes);


//Another method

function firstRepeatingElement(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          return arr[i];
        }
      }
    }
  }

  let elements = firstRepeatingElement([10,10, 5, 3, 4, 3, 5, 6]);
  console.log(elements);
