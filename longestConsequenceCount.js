function longestSeq(arr) {
    let blankArr = [];
    let temp = [];
    let array = [];
    arr.sort(function (a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });
    for (let i in arr) {
      if (arr[parseInt(i) + 1] - arr[i] == 1) {
        blankArr.push(arr[i]);
      }
      if (arr[parseInt(i) + 1] - arr[i] > 1) {
        blankArr.push(arr[i]);
        temp.push(blankArr);
        blankArr = [];
      }
      // if (arr[parseInt(i) + 1] - arr[i] == undefined) {
      //   temp.push(arr[i]);
      // }
    }

    for (let i in temp) {
      let length = temp[i].length;
      array.push(length);
    }
    let largest = array[0];
    for (let i in array) {
      if (largest < array[i]) {
        largest = array[i];
      }
    }

    return largest;
  }

  let longest = longestSeq([36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42]);
  console.log(longest);
