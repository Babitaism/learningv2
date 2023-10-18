// Input: arr[] = {8, 3, 1, 2}
// Output: 29
// Explanation: Lets look at all the rotations,
// {8, 3, 1, 2} = 8*0 + 3*1 + 1*2 + 2*3 = 11
// {3, 1, 2, 8} = 3*0 + 1*1 + 2*2 + 8*3 = 29
// {1, 2, 8, 3} = 1*0 + 2*1 + 8*2 + 3*3 = 27
// {2, 8, 3, 1} = 2*0 + 8*1 + 3*2 + 1*3 = 17

function maxSum(arr) {
    let len = arr.length;
    let temp;
    let blankarr = [];
    let collectedsum = [];
    let dup = JSON.parse(JSON.stringify(arr));
    blankarr.push(dup);
    for (let i = 0; i < len - 1; i++) {
      arr = JSON.parse(JSON.stringify(arr));
      for (let i = 0; i < len - 1; i++) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
      blankarr.push(arr);
    }
    for (let i = 0; i < blankarr.length; i++) {
      let x = blankarr[i];
      let sum = 0
      for (let i = 0; i < x.length; i++) {
        sum = sum + x[i] * i;
      }
      collectedsum.push(sum)
    }
    return Math.max(...collectedsum)
  }

  let final = maxSum([8, 3, 1, 2]);
  console.log(final);
