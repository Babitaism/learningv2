const findaNum = (array)=>{
    const response = array.filter(item => {
      return  item > 3
    })
    return response
    }

    let array=[1,2,3,4,5,6]
    let output = findaNum(array)
    console.log(output)


    // const findNum = (array)=>{
    //   const response = array.find(item => {
    //     return  item > 3
    //   })
    //   return response
    //   }

    //   let array=[1,2,3,4,5,6]
    //   let output = findNum(array)
    //   console.log(output)
