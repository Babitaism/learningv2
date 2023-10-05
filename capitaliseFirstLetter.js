function capitaliseFirstLetter(str){
    let arr = str.split(" ")
    let blankArray=[]
    for(let i of arr){
    let x = i[0].toUpperCase()+i.slice(1,i.length)
    blankArray.push(x)
    }
    return blankArray
    }
    let finalOutput = capitaliseFirstLetter("my name is babita")
    console.log(finalOutput)
