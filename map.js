const numbers=[1,2,3,4]
const squared = numbers.map((x)=>x*2)
console.log(squared)

let users = [
  { firstName: "Susan", lastName: "Steward" },
  { firstName: "Daniel", lastName: "Longbottom" },
  { firstName: "Jacob", lastName: "Black" },
];
let newUser = users.map((x) => x.firstName + x.lastName);
console.log(newUser);

const number = [4, 9, 16, 25];
let newNum = numbers.map((x)=>Math.sqrt(x))
console.log(newNum)

const numberss = [65, 44, 12, 4];
let newNumber = numbers.map((x)=>x*10)
console.log(newNumber)


function longestprefix(str1,str2,str3){
  let obj1={}
  let obj2={}
  let obj3={}
  let blankstr=""
   for(let i in str1){
    let keys1 = str1[i]
    if(obj1[keys1]==undefined){
      obj1[keys1]=0
    }
    obj1[keys1]=obj1[keys1]+1
   }
    for(let i in str2){
    let keys2 = str2[i]
    if(obj2[keys2]==undefined){
      obj2[keys2]=0
    }
    obj2[keys2]=obj2[keys2]+1
   }
      for(let i in str3){
    let keys3 = str3[i]
    if(obj3[keys3]==undefined){
      obj3[keys3]=0
    }
    obj3[keys3]=obj3[keys3]+1
   }
  for(let i in obj1){
    if(obj1[i]==obj2[i] && obj1[i]==obj3[i]){
      blankstr+=i
    }
  }
 return blankstr
}

let prefix = longestprefix("flower", "flow", "flight")
console.log(prefix)
