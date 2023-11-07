// Input: arr1[] = {11, 1, 13, 21, 3, 7}, arr2[] = {11, 3, 7, 1}
// Output: arr2[] is a subset of arr1[]

function subsetOfArr(arr1, arr2) {
    let obj1 = {};
    let obj2 = {};
    let flag = true;
    for (let i in arr1) {
      let keys1 = arr1[i];
      if (obj1[keys1] == undefined) {
        obj1[keys1] = 0;
      }
      obj1[keys1] = obj1[keys1] + 1;
    }
    for (let i in arr2) {
      let keys2 = arr2[i];
      if (obj2[keys2] == undefined) {
        obj2[keys2] = 0;
      }
      obj2[keys2] = obj2[keys2] + 1;
    }
    for (let i in obj2) {
      if (obj2[i] != obj1[i]) {
        flag = false;
        break
      }
    }
    return flag;
  }

  let final = subsetOfArr([1, 2, 3, 4, 5, 6], [1,2,4,5]);
  console.log(final);
