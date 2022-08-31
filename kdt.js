// console.log("test");

// export default function kdt(name, glass, payment) {
//   this.id = name;
//   this.b = glass;
//   this.c = payment;
// }

// const members = [];
// for (let i = 0; i < 5; i++) {
//   members.push(new kdt(i + 1, "hello", "bye"));
// }

// console.log(members);

// const ahyeon = new kdt("슈크림", "김치", "소주");
// console.log(ahyeon.a);

function Person(name, age, mobile, address) {
  this.name = name;
  this.age = age;
  this.mobile = mobile;
  this.address = address;

  this.move = () => {
    return console.log("이동");
  };
}

let dong = new Person("홍길동", "20", "01055554444", "대전광역시");

console.log(dong.move());

class test {
  constructor(test) {
    console.log(test, "askdjqwid");
    this.test = test;
  }
}

let ab = new test("테스뚜");

console.log(ab);

// data = data.sort((a,b)=>a-b)
// n = Math.floor(data.length /2)
// return (data[n] + data[data.length -1 -n] /2)
