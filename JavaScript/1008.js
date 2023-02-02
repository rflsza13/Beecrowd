// *** Salário ***
// Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas,
// o valor que recebe por hora e calcula o salário desse funcionário. A seguir, 
// mostre o número e o salário do funcionário, com duas casas decimais.

var num = 1;
var horas = 200;
var valor = 20.50;
var salario = horas * valor;

console.log(`NUMBER = ${num}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`);