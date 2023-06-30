function anagram(str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;
    let flag = false;
    let obj1 = {};
    let obj2 = {};
    if (len1 != len2) {
      flag = false;
    } else {
      for (let i in str1) {
        let keys1 = str1[i];
        if (obj1[keys1] == undefined) {
          obj1[keys1] = 0;
        }
        obj1[keys1] = obj1[keys1] + 1;
      }
      for (let i in str2) {
        let keys2 = str2[i];
        if (obj2[keys2] == undefined) {
          obj2[keys2] = 0;
        }
        obj2[keys2] = obj2[keys2] + 1;
      }
  
      for (let i in obj1) {
        if (obj1[i] == obj2[i]) {
          flag = true;
        } else {
          flag = false;
          break;
        }
      }
    }
    return flag;
  }
  
  let isAnagram = anagram("asabbh", "hbsbaa");
  if (isAnagram == true) {
    console.log("anagram");
  } else {
    console.log("nonAnagram");
  }
  