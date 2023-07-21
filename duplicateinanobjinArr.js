let books = [
    { title: "puma" },
    { title: "cantabil" },
    { title: "puma" },
    { title: "cantabil" },
  ];
  function rename() {
    let blankarr = [];
    let obj = {};
    for (let i in books) {
      let value = books[i].title;
      obj[value] = books[i];
    }
    for(let i in obj){
      blankarr.push(obj[i]);
    }
    return blankarr;
  }
  
  let x = rename(books);
  console.log(x);
  
  