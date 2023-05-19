function missingNumber(array) {
    let len = array.length;
    let start = array[0];
    let end = array[len - 1];
    let actualElements = [];
    let obj1 = {};
    let obj2 = {};
    let number=[]
    let keys1, keys2;
    for (i = start; i <= end; i++) {
      actualElements.push(i);
    }
    // console.log(actualElements)
    for (let i in actualElements) {
      keys2 = actualElements[i];
      obj2[keys2] = true;
    }
  
    for (let i in array) {
      keys1 = array[i];
      obj1[keys1] = true;
    }
  
    // console.log(obj2);
    for (let i in obj2) {
      if (obj1[i] != true) {
        number.push(i);
      }
    }
    return number;
  }
  
  let output = missingNumber([1, 2,9, 3, 4, 5, 8]);
  console.log(output);
  