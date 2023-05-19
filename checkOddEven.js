function checkOddEven(num) {
    let input = (num % 2 == 0) ? "even" : "odd"
    return input
  }
  
  let output = checkOddEven(111);
  if (output == "odd") {
    console.log("This number is odd");
  } else {
    console.log("This number is even");
  }