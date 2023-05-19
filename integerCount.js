class StringManipulation {
  integerCount(str) {
    let obj = {};
     let integers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    for (let i in str) {
      if (integers.includes(str[i])) {
        let char = str[i];
        let charCount = obj[char];
        if (charCount == undefined) {
          charCount = 0;
        }
        charCount = charCount + 1;
        obj[char] = charCount;
      }
    }
     let keys = Object.keys(obj)
     let value = Object.values(obj);
     let sum = 0
     for (let i in value) {
         sum = sum + value[i];
       }
      obj[keys] = sum
    return obj
  }
}

let intCount = new StringManipulation();
let arg = "abc&$12rt321";
resp = intCount.integerCount(arg);
console.log(resp)
