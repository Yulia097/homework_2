function multiply(x, y, z) {
  console.log(`Результат умножения равен ${x * y * z}`);
}

multiply(2, 3, 5);
multiply(4, 8, 12);
multiply(17, 6, 25);

let isTrue = true;
let isFalse = false;

let andResult = isTrue && isFalse;
let orResult = isTrue || isFalse;
let notResult = !isTrue;

console.log('Логічне "І":', andResult);
console.log('Логічне "АБО":', orResult);
console.log('Логічне "НЕ":', notResult);

let symbol1 = Symbol('test');
let symbol2 = Symbol('test');

console.log(symbol1 === symbol2);

let age;

console.log(age);
