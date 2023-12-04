x = 1
function parent(){
    return function(){
        return x+=1
    }
}

r= parent()
console.log(r())

function outer(){
    let x= 1
    function inner(){
        let y= 2
        console.log(x+y)
    }
    inner()
}


outer()
