
class arrayManipulation {
  arrayOrder(array) {
    let initialCursor = 0;
    let len = array.length;
    let finalCursor = len - 1;
    let temp;
     while (finalCursor > initialCursor) {
    if (array[initialCursor] == 1 && array[finalCursor] == 0) {
      temp = array[finalCursor];
      array[finalCursor] = array[initialCursor];
      array[initialCursor] = temp;
      initialCursor++;
      finalCursor--;
    }
    if (array[initialCursor] == 0 && array[finalCursor] == 1) {
      initialCursor++;
      finalCursor--;
    }
    if (array[initialCursor] == 1 && array[finalCursor] == 1) {
      finalCursor--;
    }
    if (array[initialCursor] == 0 && array[finalCursor] == 0) {
      initialCursor++;
    }
    }
    return array;
  }
}

let arrayArrangement = new arrayManipulation();
let arg = [ 0, 0, 1,  0, 0]
resp = arrayArrangement.arrayOrder(arg);
console.log(resp);
