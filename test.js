function arrayStart(arr) {
    let blankarr = [];
    for (let i in arr) {
      let keys = arr[i];
      for (let i in keys) {
        if (keys[i].startsWith("A")) {
          blankarr.push(keys);
        }
      }
    }
    return blankarr;
  }

  let final = arrayStart(["Apple", "Banana", "Aardvark", "Carrot","Am"]);
  console.log(final);
