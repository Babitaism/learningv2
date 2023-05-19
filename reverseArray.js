
function reverseArray(array) {
    let len = array.length;
    let startPointer = 0;
    let lastPointer = len - 1;
    let temp;
    while (lastPointer > startPointer) {
      temp = array[startPointer];
      array[startPointer] = array[lastPointer];
      array[lastPointer] = temp;
      startPointer++
      lastPointer--
    }
    return array
  }
  
  let finalReversedArray = reverseArray([1, 2, 3, 4,6,7]);
  console.log(finalReversedArray);