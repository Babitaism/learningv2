function calculate(str) {
    let arr = str.split("");
    let obj = {};
    arr.forEach((element) => {
      let key = element;
      if (obj[key] == undefined) {
        obj[key] = 0;
      }
      obj[key] = obj[key] + 1;
    });
    return obj;
  }

  let final = calculate("abcdef");
  console.log(final);
