function isPrime(num) {
  let flag = false;
  let finalStatus = "Prime";
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      flag = true;
      finalStatus = "nonPrime";
      break;
    }
  }
  return finalStatus;
}
checkPrime = isPrime();
// console.log(checkPrime);

function checkPrimeinArray(array) {
  let arr = [];
  for (let i in array) {
   let x =  isPrime(array[i]);
    if (x == "Prime") {
      arr.push(array[i]);
    }
  }
  return arr;
}

printArray = checkPrimeinArray([7,9,17,4,13,6,11]);
console.log(printArray);
