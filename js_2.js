const clients = ['Mango', 'Ajax', 'Poly'];

for (let i = 0; i < clients.length; i += 1) {
  console.log(clients[i]);
}

let person = {
  name: 'Julia',
  age: 30,
  isStudent: false
};

let personName = person.name;
let personAge = person['age'];

person.age = 31;
person['isStudent'] = true;

console.log("Ім'я людини:", person.name);
console.log('Вік людини:', person.age);
