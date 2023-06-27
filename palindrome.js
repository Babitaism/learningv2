function palindrome(arr){
    let len = arr.length
    let flag = true
    let initialCursor = 0
    let finalCursor = len-1
    while(finalCursor>initialCursor){
        if(arr[initialCursor]!=arr[finalCursor]){   
            flag = false
        }
        initialCursor++
            finalCursor--
    }
    return flag
    }
    let checkPalindrome = palindrome([1,2,3,4,3,2,1])
    console.log(checkPalindrome)