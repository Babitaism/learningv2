let possibleCombinations = (arr) => {
  let combinations = [];
  debugger;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length +1 ; j++) {
      combinations.push(arr.slice(i, j));
    }
  }
  return combinations;
};
console.log(possibleCombinations([1,2,3,4]));
