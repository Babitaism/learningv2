function randomNum(num1, num2) {
  let numArr = [];
  for (let i = num1; num1 <= num2; num1++) {
    numArr.push(num1);
  }
  return numArr;
}
let output = randomNum(10, 20);
console.log(output);

// let a = Math.random();
// console.log(a);

// let b = Math.random() * (highestNumber - lowestNumber) + lowestNumber;

// Math.random is inbuilt js function
