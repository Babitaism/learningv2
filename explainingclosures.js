x = 1
function parent(){
    return function(){
        return x+=1
    }
}


r= parent()
console.log(r())
