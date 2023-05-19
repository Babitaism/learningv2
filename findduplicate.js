function findUnique(arr){
    let obj={}
    let number =[]
    for (let i in arr) {
      if(obj[arr[i]] == undefined){
        obj[arr[i]] = 0
      }
      else{
        obj[arr[i]] = obj[arr[i]] + 1
      }
    }
   for(let i in obj){
    if(obj[i]== 0){
     number.push(i)
    }
   }
   return number
}

let number = findUnique([1,1,2,2,3,3,6,7])
console.log(number)