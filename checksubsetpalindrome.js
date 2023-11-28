function checkPalindrome(str) {
  let temp=[];
  let newstr = "";
  let flag;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      newstr = str.slice(i, j + 2);
      let ip=0
      let fp=newstr.length-1
      while(fp>ip){
        if(newstr[ip]==newstr[fp]){
        flag = true
        }
        if(newstr[ip]!=newstr[fp]){
            flag = false
            break
            }
            ip++
            fp--
      }
      if(flag==true){
        temp.push(newstr)
      }
    }
  }
  return temp
}

let final = checkPalindrome("oppo991001");
console.log(final);
