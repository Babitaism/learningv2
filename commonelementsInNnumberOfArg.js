function calculateCommonElements(){
    let obj = {}
    all_args = Object.values(arguments)
    remove_dups_from_arr = all_args.map((t) => {
      return Array.from(new Set(t))
    })
    remove_dups_from_arr.forEach(arr => {
       arr.forEach(element => {
        key = element
          if (obj[key] === undefined){
            obj[key] = 1
          }
          else{
            obj[key]+=1
          }
       })
    });

    blankArr = []
    for (let i in obj){
      if(obj[i] == remove_dups_from_arr.length)
      blankArr.push(i)
    }
    return blankArr
  }


  a = [1,2,3,4, 5,5, 8 ]
  b = [2,3,4,5, 8]
  c = [6,6,7,8,1, 5]
  d = [0, 9,5,2]


  let final_result = calculateCommonElements(a,b, c, d)
  console.log(final_result)
