function unionArray(arr1,arr2){
    let obj ={}
    for(let i in arr1){
        let arr1Key = arr1[i]
        obj[arr1Key] = true
    }
    for(let i in arr2){
        let arr2Key = arr2[i]
        obj[arr2Key] = true
    }
    let union = Object.keys(obj)
    return union
    
    }
    
    let unionOfArray= unionArray([2,3,4],[2,4,5,6])
    console.log(unionOfArray)