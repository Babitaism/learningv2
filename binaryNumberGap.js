function maximumArrayDifference(string) {
  let array = string.split("");
  let len = array.length;
  let subtract;
  let indexArray = [];
  let diffArray = [];
  for (let i = 0; i < len; i++) {
    if (array[i] == 1) {
      let index = i;
      indexArray.push(index);
    }
  }

  for (let j = 0; j < indexArray.length - 1; j++) {
    let subtract = indexArray[j + 1] - indexArray[j];
    diffArray.push(subtract);
  }

  let largest = diffArray[0];
  let final = largest - 1;
  for (let i in diffArray) {
    if (diffArray[i] > largest) {
      largest = diffArray[i];
      final = largest - 1;
    }
  }
  return final;
}

let maxDiffBetBinaryNumbers = maximumArrayDifference("10101010001");
console.log(maxDiffBetBinaryNumbers);

//   Another Method

function binaryGap(str) {
  let maxcount = 0;
  let counter = 0;
  let binaryGapArray = str.split("");
  let letsBegin = false;

  for (let i in binaryGapArray) {
    if (binaryGapArray[i] !== "1" && !letsBegin) {
      continue;
    } else {
      letsBegin = true;
    }

    if (binaryGapArray[i] === "0") {
      counter += 1;
    }

    if (binaryGapArray[i] === "1") {
      if (counter > maxcount) {
        maxcount = counter;
      }
      counter = 0;
    }
  }
  return maxcount;
}

console.log(binaryGap("100000---hddhdf0010001"));
