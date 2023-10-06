// Input: s = "cooding"
// Output: 0
// Example 2:
// Input: s = "lovelocode"
// Output: 2
// Example 3:
// Input: s = "aabb"
// Output: -1

function nonRepeatingIndex(str) {
    let obj = {};
    for (let i in str) {
      let keys = str[i];
      if (obj[keys] == undefined) {
        obj[keys] = 0;
      }
      obj[keys] = obj[keys] + 1;
    }

    for(let i=0; i< str.length;i++){
      let char = str[i]
      if(obj[char]==1){
          return i
      }
    }
    return -1
  }

  let indexes = nonRepeatingIndex("coodinf");
   console.log(indexes);

