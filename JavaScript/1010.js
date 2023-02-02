// *** Cálculo Simples ***
// Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1
// o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2.
// Após, calcule e mostre o valor a ser pago

const [cod1, num1, valor1] = [12, 1, 5.30];
const [cod2, num2, valor2] = [16, 2, 5.10];

var total = (valor1 * num1) + (valor2 * num2);
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);