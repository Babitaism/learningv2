function checkPrimeBetTwoNum(num1,num2) {
  let array=[]
  for (let x = num1; x <= num2; x++) {
    for (let y = 2; y < x; y++) {
      if (x % y == 0) {
        flag = true;
        break;
      }
      else{
        flag = false
      }
    }
    if(flag == false){
        array.push(x)
     }
}
return array
}

let primeNumbers = checkPrimeBetTwoNum(10, 15);
console.log(primeNumbers);
