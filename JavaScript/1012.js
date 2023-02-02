// *** Área ***
// Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. 
// Em seguida, calcule e mostre:
// a) a área do triângulo retângulo que tem A por base e C por altura.
// b) a área do círculo de raio C. (pi = 3.14159)
// c) a área do trapézio que tem A e B por bases e C por altura.
// d) a área do quadrado que tem lado B.
// e) a área do retângulo que tem lados A e B.

var pi = 3.14159;
var a = 3.0; b = 4.0; c = 5.2;
var tri = a * c / 2;
var cir = pi * c ** 2;
var tra = (a + b) * c / 2;
var qua = b ** 2;
var ret = a * b;

console.log(`TRIANGULO = ${tri.toFixed(3)}`);
console.log(`CIRCULO = ${cir.toFixed(3)}`);
console.log(`TRAPEZIO = ${tra.toFixed(3)}`);
console.log(`QUADRADO = ${qua.toFixed(3)}`);
console.log(`RETANGULO = ${ret.toFixed(3)}`);