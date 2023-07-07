// ===========================№1======================================
let C = prompt("введіть температуру:");

C = (C * 9) / 5 + 32;

console.log(C);

// ===========================№2======================================
let Days = prompt("Введіть кількість днів:");

Days = Days * 24;

let m = Days * 60;

console.log("Години:", Days, "Хвилини:", m);

// ===========================№3======================================
let health = prompt("Введіть рівень здоров'я:");

health -= 20;

let Energy = prompt("Введіть рівень Енергії:");

Energy -= 60;

console.log("HP:", health);
console.log("Energy:", Energy);

// ===========================№4======================================
let check = prompt("Введіть вашу сумму, і отримайтк 10% знижку!");

check = check - (check * 10) / 100;

console.log("Сумма для сплачення:", check);

// ===========================№5======================================
let number = prompt("Введіть число:");

number = Math.floor(number);

console.log(number);

// ===========================№6======================================
let number = prompt("Введіть число:");

number = parseFloat(number);

console.log(number);

// ===========================№7======================================
let number = prompt("Введіть число:");

number = parseInt(number);

console.log(number);

// ===========================№8======================================
let number = prompt("Введіть число:");

number = Math.sqrt(number);

console.log(number);

// ===========================№9======================================
let number = prompt("Введіть число:");

console.log(parseInt(number));
console.log(toString(number));
