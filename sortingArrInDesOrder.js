function descendingArr(arr) {
    arr.sort(function (a, b) {
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    });
    return arr;
  }
  
  let desArr = descendingArr([1, 3, 6, 4, 5]);
  console.log(desArr);

  

