function duplicate() {
    let blankarr = [];
    let uniqueArr = [];
    let uniqueObj = {};
    for (let i in RowDataPacket) {
      let obj = {};
      obj["title"] = RowDataPacket[i].ProductSpecification;
      blankarr.push(obj);
    }
    for (let i in blankarr) {
      let values = blankarr[i].title;
      uniqueObj[values] = blankarr[i];
    }
    for (let i in uniqueObj) {
      uniqueArr.push(uniqueObj[i]);
    }
    return uniqueArr;
  }
  
  let RowDataPacket = [
    { ProductSpecification: "puma" },
    { ProductSpecification: "puma" },
    { ProductSpecification: "denim" },
    { ProductSpecification: "cat" },
  ];
  
  let x = duplicate(RowDataPacket);
  console.log(x);
  