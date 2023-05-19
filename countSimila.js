function countSimilarNumbers(array,num) {
    let count = 0;
    for (let i in array) {
      if (array[i] == num) {
        count++;
      }
    }
    return count;
  }
  
  let similarNumberCount = countSimilarNumbers([1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 3],3);
  console.log(similarNumberCount);