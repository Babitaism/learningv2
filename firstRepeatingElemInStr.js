
function firstRepeatingIndex(str) {
    let obj = {};
    for (let i in str) {
      let keys = str[i];
      if (obj[keys] == undefined) {
        obj[keys] = 0;
      }
      obj[keys] = obj[keys] + 1;
    }
    // console.log(obj);
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
    //   console.log(char, obj[char]);
      if (obj[char] > 1) {
        return {"index":i, "character":char}
      }
    }
    return "none";
  }

  let indexes = firstRepeatingIndex("coddinf");
  console.log(indexes);
