function median(arr){
    let len = arr.length
    let sum = 0
    let median
    if(len%2!=0){
      for(let i in arr){
        sum = sum+arr[i]
      }
      median = sum/len
    }
    if(len%2==0){
    let num = len/2
    sum = arr[num]+arr[num-1]
    median = sum/2
    }

    return median
    }

    let final = median([1,2,3,4,5,6,7])
    console.log(final)
