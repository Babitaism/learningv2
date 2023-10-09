function commonElements(ar1,ar2,ar3){
    let obj1={}
    let obj2={}
    let obj3={}
    for(let i in ar1){
        let keys1=ar1[i]
        if(obj1[keys1]==undefined){
            obj1[keys1]=0
        }
    }
    for(let i in ar2){
        let keys2=ar2[i]
        if(obj2[keys2]==undefined){
            obj2[keys2]=0
        }
    }
    for(let i in ar3){
        let keys3=ar3[i]
        if(obj3[keys3]==undefined){
            obj3[keys3]=0
        }
    }
    let blankArray=[]
    for(let i in obj1){
        if((obj1[i]==obj2[i]) && obj1[i]==obj3[i]){
            blankArray.push(i)
        }
    }
    return blankArray
    }


    arr1 = [1, 5, 10, 20,30,100, 40, 80]
    arr2 = [6, 7, 20, 80, 100]
    arr3 = [3, 4, 15, 20, 30, 70, 80, 100,120]
    let elements = commonElements(arr1,arr2,arr3)
    console.log(elements)
    // Output: 20, 80
