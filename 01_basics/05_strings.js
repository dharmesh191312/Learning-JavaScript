const name = "Dharmesh";
const repoCount = 50;

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String('dharmesh-ds-dot-com');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(0, 4);
console.log(anotherString);

const newStringOne = "   dharmesh   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://dharmeshsinghal.com/dharmesh%20singhal";

console.log(url.replace('%20', '-'));

console.log(url.includes('twenty'));

console.log(gameName.split('-'));




