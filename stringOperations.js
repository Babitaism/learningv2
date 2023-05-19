// 1. one liner if else should be written in ternary
// 2. see the simplificaion of if else line 29 - 44
// Never do brecket k anadar bracket wala code arr[ x[i] ] instead do 
// let meaningfulname = x[i] , arr[meaningfulname]

//const p = console.log.bind(console)


class StringManipulation {
  anagram(str1, str2) {
    let obj1 = {};
    for (let i in str1) {
      let str1Char = str1[i]
      let str1Count = obj1[str1Char]
      if (str1Count == undefined) { 
        str1Count = 0;
      }
      str1Count = str1Count + 1;
      obj1[str1Char]=str1Count
    }

    let obj2 = {};
    for (let i in str2) {
      let str2Char = str2[i]
      let str2Count = obj2[str2Char]
      if (str2Count == undefined) { 
        str2Count = 0;
      }
      str2Count = str2Count + 1; 
      obj2[str2Char]=str2Count
    }

   let areObjEqual = this.checktwoObjects(obj1, obj2);
   // var a = (condition) ? expr1 : expr2;  

    let finalresp = areObjEqual ? 'anagram' : 'nonanagram'
    return finalresp
  }

  // TODO:: Move this function to appropiate class, 
  //sine this function doesn't brlongs to string class
  checktwoObjects(obj1, obj2) {
    let flag = true;
    let length1 = Object.keys(obj1).length;
    let length2 = Object.keys(obj2).length;
    if (length1 == length2) {
      for (let i in obj1) {
        let charCount1 = obj1[i];
        let charCount2 = obj2[i];
        if (charCount1 != charCount2) {
          flag = false;
          break;
        }
      }
      return flag;
    }
  }
}

let stringManipulator = new StringManipulation();
resp = stringManipulator.anagram("a@sdsff", "a@sbdsff");
console.log(resp)

