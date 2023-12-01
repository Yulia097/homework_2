const clients = ['Mango', 'Ajax', 'Poly'];

for (let i = 0; i < clients.length; i += 1) {
  console.log(clients[i]);
}

let isTrue = true; //boolean
let isFalse = false;

let andResult = isTrue && isFalse;
let orResult = isTrue || isFalse;
let notResult = !isTrue;

console.log('Логічне "І":', andResult);
console.log('Логічне "АБО":', orResult);
console.log('Логічне "НЕ":', notResult);

let person = {
  //object
  name: 'John',
  age: 30,
  isStudent: false
};

console.log("Ім'я людини:", person.name);
console.log('Вік людини:', person.age);
