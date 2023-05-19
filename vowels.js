class StringManipulation {
  countVowels(str) {
    let obj = {};
    let vowels = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;
    let consonantCount = 0;
    for (let i in str) {
      let key = str[i];
      if (vowels.includes(key)) {
        vowelCount ++;
      } else {
        consonantCount++;
      }
    }
      obj.vowel = vowelCount
      obj.consonant = consonantCount
    return obj
  } 
}

let output = new StringManipulation();
let final = output.countVowels("aabcdss");
 console.log(final);


