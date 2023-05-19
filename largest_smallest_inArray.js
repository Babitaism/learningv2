function largestNum(array){
    let largest = array[0]
    for(i in array){
       if (array[i]>largest){
         largest = array[i]
       }
    }
    return largest
    }
    let output = largestNum([8,25,6,17])
    console.log(output)

function smallestNum(array){
let smallest = array[0]
for(i in array){
    if(array[i]<smallest){
        smallest = array[i]
    }
}
return smallest
}
let result = smallestNum([-1,-2,3,4,0])
console.log(result)
