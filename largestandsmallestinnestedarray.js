function nestedLargestSmallestElemInArr(arr) {
    let elements;
    let arrElements;
    let blankArray = [];
    let obj = {};
    for (let i in arr) {
      elements = arr[i];
      for (let i in elements) {
        arrElements = elements[i];
        blankArray.push(arrElements);
      }
    }
    let largest = blankArray[0];
    for (let i in blankArray) {
      if (blankArray[i] > largest) {
        largest = blankArray[i];
      }
    }
    let smallest = blankArray[0];
    for (let i in blankArray) {
      if (blankArray[i] < smallest) {
        smallest = blankArray[i];
      }
    }
    obj["largest"] = largest;
    obj["smallest"] = smallest;
    return obj;
  }

  let numbers = nestedLargestSmallestElemInArr([
    [12, 45, 75],
    [54, 45, 2],
    [23, 54, 75, 2],
  ]);
  console.log(numbers);
