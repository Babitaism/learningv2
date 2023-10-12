function maxProdArr(arr) {
    let product = 1;
    let blankArr = [];
    for (let i = 0; i < arr.length; i++) {
      product = arr[i];
      blankArr.push(product)
      for (let j = i + 1; j < arr.length; j++) {
        product = product * arr[j];
        blankArr.push(product);
      }
    }
    let largest = blankArr[0];
    for (let i in blankArr) {
      if (largest < blankArr[i]) {
        largest = blankArr[i];
      }
    }
    return largest
  }

  let maximum = maxProdArr([0,0,-5,0,0]);
  console.log(maximum);
