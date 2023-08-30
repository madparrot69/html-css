//1

let result = 5 + 5 + '5';

console.log(typeof result);
console.log(result);

//2

let email = `k.lokidottir@gmail.com`;

console.log(email.includes(`@`));
console.log(email.length);

//3

let m = `my`;
let n = `name`;
let i = `is`;

let fullName = `${m} ${n} ${i} `;
fullName += `Victor`;

console.log(fullName);

// 4

let userName = `Khrystyna`;

let payment = 60;

alert(`thank you, ${userName}! you need to pay ${payment} UAH.`);