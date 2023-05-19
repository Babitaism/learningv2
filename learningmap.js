//  Map use
function printEven(arr) {
  let arrfrommap = arr.map(function (i) {
      return i*2
    } 
  );
  return arrfrommap;
}

let evenNumbers = printEven([2, 3, 4, 5, 6]);
console.log(evenNumbers);

// output = ['hello','hello','hello',5,6]

