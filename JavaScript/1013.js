// *** O Maior ***
// Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem
// “eh o maior”. Utilize a fórmula: (a + b + abs(a - b)) / 2
// Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é 
// necessário para chegar no resultado esperado.

var a = 217;
var b = 14;
var c = 6;

var m1 = (a + b + Math.abs(a - b)) / 2;
var maior = (m1 + c + Math.abs(m1 - c)) / 2;

console.log(`${maior} eh o maior`);