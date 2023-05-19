// filter - it will return all elements

// function printEven(arr) {
//     let arrfrommap = arr.filter(function (i) {
//       if (i > 4) {
//         return i;
//       } 
//     });
//     return arrfrommap;
//   }

  
//   let evenNumbers = printEven([2, 3, 4, 5, 6]);
//   console.log(evenNumbers);

// find - it will only give the first output

function printEven(arr) {
    let arrfrommap = arr.find(function (i) {
      if (i > 4) {
        return i;
      } 
    });
    return arrfrommap;
  }

  
  let evenNumbers = printEven([2, 3, 4, 5, 6]);
  console.log(evenNumbers);


