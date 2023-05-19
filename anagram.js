class StringManipulation {
    anagram(str1, str2) {
      let obj1 = {};
      for (let i in str1) {
        if (obj1[str1[i]] == undefined) {
          obj1[str1[i]] = 0;
        }
        obj1[str1[i]] = obj1[str1[i]] + 1;
      }
      let obj2 = {};
      for (let i in str2) {
        if (obj2[str2[i]] == undefined) {
          obj2[str2[i]] = 0;
        }
        obj2[str2[i]] = obj2[str2[i]] + 1;
      }

      let flag = 1;
      let obj1Keys = Object.keys(obj1);
      let obj2Keys = Object.keys(obj2);
      let length1 = obj1Keys.length;
      let length2 = obj2Keys.length;
      if (length1 == length2) {
        for (let i in obj1Keys) {
          if (obj1[obj1Keys[i]] != obj2[obj1Keys[i]]) {
            flag = 0;
            break;
          }
           else {
            flag = 1;
          }
        }
        if (flag == 0) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    }
  }

  
  let stringManipulator = new StringManipulation();
  resp = stringManipulator.anagram("aabb123#@%", "baba321#@%");
  if(resp){
  console.log('anagram')
  }
  else{
    console.log('nonAnagram')
  }
  