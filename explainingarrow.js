// arrow expressions

let sum = (a,b) => {
    return a+b
}

let x = sum(3,4)
console.log(x)


interview
console.log([] + []);               (1)
console.log([1] + []);              (2)
console.log([1] + "abc");           (3)
console.log([1, 2, 3] + [1, 3, 4]); (4)

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }

  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }

const person = { name: 'Ayush' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));

let a = 10, b = 20;
setTimeout(function () {
  console.log('Ayush');
  a++;
  b++;
  console.log(a + b);
},5000);
console.log(a + b);
