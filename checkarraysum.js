function calculateArraySum(arr,sum){
    let blankArr=[]
  for(let i =0;i<arr.length;i++){
  let currentSum = arr[i]
  if(sum == currentSum){
    blankArr.push(i)
  }
  for(let j =i+1;j<arr.length;j++){
    currentSum = currentSum + arr[j]
    if(sum == currentSum){
      blankArr.push(i,j)
    }
  }
  }
  return blankArr
  }

  let result = calculateArraySum([1, 4, 20, 3, 10, 5],33)
  console.log(result)
