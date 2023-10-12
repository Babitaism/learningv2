function findMissingNumber(arr,n){
    arr.sort()
    for(let i=1;i<n;i++){
        if(arr[i]-arr[i-1]==2){
          return arr[i-1]+1
        }
    }
    }

    let missingNumber = findMissingNumber([1, 2, 4, 6, 3, 7, 8],8)
    console.log(missingNumber)
