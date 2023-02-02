// *** Esfera ***
// Faça um programa que calcule e mostre o volume de uma esfera sendo fornecido o valor de seu raio (R).
// A fórmula para calcular o volume é: (4/3) * pi * R3. Considere (atribua) para pi o valor 3.14159.

var pi = 3.14159;
var r = 15;

var volume = 4 / 3.0 * pi * r ** 3;

console.log(`VOLUME = ${volume.toFixed(3)}`);