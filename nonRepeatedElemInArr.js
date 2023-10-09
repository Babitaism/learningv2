function firstNonRepeatingElement(arr) {
    let obj = {};
    for (let i in arr) {
      let keys = arr[i];
      if (obj[keys] == undefined) {
        obj[keys] = 0;
      }
      obj[keys] = obj[keys] + 1;
    }
    for (let i = 0; i < arr.length; i++) {
      let char = arr[i];
      if (obj[char] == 1) {
        return char;
      }
    }
    return -1;
  }

  let elements = firstNonRepeatingElement([10, 10,7, 5, 3, 7, 4, 3, 5, 6]);
  console.log(elements);

  // 		function firstNonRepeating(arr, n) {
  // 			for (let i = 0; i < n; i++) {
  // 				let j;
  // 				for (j = 0; j < n; j++)
  // 					if (i != j && arr[i] == arr[j])
  // 						break;
  // 				if (j == n)
  // 					return arr[i];
  // 			}
  // 			return -1;
  // 		}

  // 		let arr = [10, 10, 5, 3, 7, 4, 3, 5, 6];
  // 		let n = arr.length;
  // let x = firstNonRepeating(arr,n)
  // console.log(x)
