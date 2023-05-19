//input = ['adsfse', 'dfssdfsf', 'asdasfaf', 'asafa']

//output = {'adsfse': 6, 'dfssdfsf': 8, 'asdasfaf': word_count, 'asafa': word_count}

// class StringManipulation {
//   wordCount(array) {
//     let obj = {};
//     for (let i in array) {
//       let objKey = array[i];
//       let wordCount = array[i].length;
//       obj[objKey] = wordCount;
//     }
//     return obj
//   }
// }

// let stringCalculator = new StringManipulation();
// output = stringCalculator.wordCount([
//   "adsfse",
//   "dfssdfsf",
//   "asdasfaf",
//   "asafa",
//   "bbsscc%12"
// ]);
// console.log(output);

// class StringManipulation {
//   keyCal(str) {
//     let flag = false;
//     let temp = "";
//     let j = " ,";
//     let len = str.length;
//     for (let i in str) {
//       if (flag) {
//         if (i == len-1) {
//           j = " ";
//         }
//         temp += str[i] + j;

//       }

//       let strElements = str[i];
//       if (strElements == "#") {
//         flag = true;
//       }
//     }
//     return temp;
//   }
// }

// let strManipulator = new StringManipulation();
// finalOutput = strManipulator.keyCal("abc#efgh");
// console.log(finalOutput);

// if(strElements == "#"){
//     let indexofkey = i
//     let m = parseInt(indexofkey)+1
//     console.log(m)
//  for(let j = m;j<len;j++){
//     console.log(str[m])
//  }
// }

// [1,0,1,1,0,0,1,1,0] ==> [0,0,0,0,1,1,1,1,1]

function elementFinder(str) {
  let flag = false;
  let temp='' ;
  let obj = {};
  let len = str.length;
  for (let i in str) {
    let strElements = str[i];
    if (flag) {
      temp += strElements;
      if (strElements == "#") {
        temp = temp.substring(0,temp.length-1)
        obj[i] = temp;
        temp = '';
      }
    }
    if (strElements == "#") {
      flag = true;
    }
  }
   return obj;
}

let output = elementFinder('#asdasds#askdjg#1@#');
console.log(output)
