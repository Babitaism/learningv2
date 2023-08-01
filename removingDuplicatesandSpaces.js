arr = [
    { concatInfo: "Peter-England Jeans", items: "Jeans" },
    { concatInfo: "Peter-England jeans", items: "Jeans" },
    { concatInfo: "Peter-England jeans", items: "Jeans" },
    { concatInfo: "Peter-England   Jeans", items: "Jeans" },
    { concatInfo: "Adidas Jeans", items: "Jeans" },
    { concatInfo: "adidas Jeans", items: "Jeans" },
    { concatInfo: "Cantabil Jeans", items: "Jeans" },
    { concatInfo: "Puma Jeans", items: "Jeans" },
    { concatInfo: "Denim Jeans", items: "Jeans" },
    { concatInfo: "Adidas Shirt", items: "Shirt" },
    { concatInfo: "Denim T-shirt", items: "T-shirt" },
    { concatInfo: "Reebok T-shirt", items: "T-shirt" },
    { concatInfo: "Adidas T-shirt", items: "T-shirt" },
    { concatInfo: "Peter-England T-shirt", items: "T-shirt" },
    { concatInfo: "Cantabil T-shirt", items: "T-shirt" },
    { concatInfo: "Puma T-shirt", items: "T-shirt" },
    { concatInfo: "Puma", items: "arm wrist" },
    { concatInfo: "Reebok", items: "Pants" },
    { concatInfo: "Adidas Jeans", items: "Jeans" },
    { concatInfo: "adidas Jeans", items: "Jeans" },
    { concatInfo: "Cantabil Jeans", items: "Jeans" },
    { concatInfo: "Puma Jeans", items: "Jeans" },
    { concatInfo: "Denim Jeans", items: "Jeans" },
    { concatInfo: "Adidas Shirt", items: "Shirt" },
    { concatInfo: "Denim T-shirt", items: "T-shirt" },
    { concatInfo: "Reebok T-shirt", items: "T-shirt" },
    { concatInfo: "Adidas T-shirt", items: "T-shirt" },
    { concatInfo: "Peter-England T-shirt", items: "T-shirt" },
    { concatInfo: "Cantabil T-shirt", items: "T-shirt" },
    { concatInfo: "Puma T-shirt", items: "T-shirt" },
   
  ];
  
  function removeduplicate(arr) {
    let obj = {};
    let obj1 = {};
    let array = [];
    let blankArray = [];
    let concatInfo, items;
    let keys;
    for (let i in arr) {
      obj = {};
      concatInfo = arr[i].concatInfo;
      concatInfo = concatInfo.replace(/ +(?= )/g, "");
      concatInfo = concatInfo.toLowerCase();
      // concatInfo = concatInfo[0].toUpperCase() + concatInfo.slice(1);
      obj["concatInfo"] = concatInfo;
      items = arr[i].items;
      items = items.replace(/ +(?= )/g, "");
      items = items.toLowerCase();
      // items = items[0].toUpperCase() + items.slice(1);
      obj["items"] = items;
      blankArray.push(obj);
    }
    // console.log(blankArray,"ba")
    for (let i in blankArray) {
      keys = blankArray[i].concatInfo;
      obj1[keys] = blankArray[i];
    }
    // console.log(obj1,"obj1")
    for (let i in obj1) {
      array.push(obj1[i]);
    }
    return array;
    //  console.log(array, "array");
  }
  
  // let x = removeduplicate(arr);
  // console.log(x);
  function search(arr, element) {
    let obj = {};
    let array = [];
    let finalArray = [];
    let obj2 = {};
    let filteredArray = removeduplicate(arr);
    for (let i in filteredArray) {
      let key1 = filteredArray[i].concatInfo;
      let key2 = filteredArray[i].items;
      if (obj[key2] == undefined) {
        obj[key2] = 0;
      }
      obj[key2] = obj[key2] + 1;
      if (obj[key1] == undefined) {
        obj[key1] = 0;
      }
      obj[key1] = obj[key1] + 1;
    }
    let objKeys = Object.keys(obj);
    let elem = element.toLowerCase();
    // console.log(elem, "elem");
    for (let i in objKeys) {
      if (objKeys[i].startsWith(elem)) {
        array.push(objKeys[i]);
      }
    }
    for (let i in array) {
      obj2={}
      obj2["title"] = array[i];
      finalArray.push(obj2);
    }
    // console.log(finalArray)
     return finalArray;
  }
  
  let finalResult = search(arr, "p");
  console.log(finalResult);
  