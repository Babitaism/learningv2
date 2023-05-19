function sumOfNatural(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

let output = sumOfNatural(16)
console.log(output)