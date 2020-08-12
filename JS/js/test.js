const name = 'Lex Ordnas';
const surname = 'X';
const age = 22;
const weight = 84;
const heightInMeters = 1.80;

let bodyMassIndex; // peso / (altura * altura)
let yearOfBirth;

bodyMassIndex = weight / (heightInMeters * heightInMeters)
yearOfBirth = 2020 - age;

console.log(`${name} ${surname} tem ${age} anos, pesa ${weight} kg`);
console.log(`Tem ${heightInMeters} de altura e seu IMC é de ${bodyMassIndex}`);
console.log(`${name} nasceu em ${yearOfBirth}.`);
