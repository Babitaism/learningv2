function swap(num1,num2){
    let temp
    let obj ={}
    temp = num1
    num1 = num2
    num2 = temp
    obj.num1 = num1
    obj.num2 = num2
    return obj
    }
    
    let output = swap(20,40)
    console.log(output)