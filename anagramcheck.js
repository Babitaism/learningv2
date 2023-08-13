function anagram(str1, str2) {
  let obj1 = {};
  let obj2 = {};
  let status = true;
  for (let i in str1) {
    let keysOfStr1 = str1[i];
    if (obj1[keysOfStr1] == undefined) {
      obj1[keysOfStr1] = 0;
    }
    obj1[keysOfStr1] = obj1[keysOfStr1] + 1;
  }
  for (let i in str2) {
    let keysOfStr2 = str2[i];
    if (obj2[keysOfStr2] == undefined) {
      obj2[keysOfStr2] = 0;
    }
    obj2[keysOfStr2] = obj2[keysOfStr2] + 1;
  }
  for (let i in obj1) {
    if (obj1[i] != obj2[i]) {
      status = false;
      break
    }
  }
  return status
}

  let isAnagram = anagram("asabbh@", "hbsbaa");
  if (isAnagram == true) {
    console.log("anagram");
  } else {
    console.log("nonAnagram");
  }
