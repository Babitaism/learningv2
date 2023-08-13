const alternative = (arr) =>{
    const sorted = arr.sort()
    let initial = 0
    let last = arr.length - 1
    let resp = []
    while (last > initial){
      resp.push(sorted[initial])
      resp.push(sorted[last])
      initial++
      last--
    }
    return resp
  }

  arr = [1,2,3,-1,-2,-3]
  let output = alternative(arr)
  console.log(output)
