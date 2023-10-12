function checkSubArrWithSumEqualToZero(arr){
    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i];
        if (sum == 0)
            return true;
        for (let j = i + 1; j < arr.length; j++) {
            sum = sum + arr[j];
            if (sum == 0)
                return true;
        }
}
}
let result = checkSubArrWithSumEqualToZero([4, 2, -3, 1, 6])
console.log(result)
