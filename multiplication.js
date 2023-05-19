function multiplication(num){
    let product = 1
    let table = []
    for(let i=1;i<=10;i++){
    product = num * i
    product = `${num} * ${i} = ${product}`
    table.push(product)
    }
    return table
    }
    let output = multiplication(8)
    console.log(output)