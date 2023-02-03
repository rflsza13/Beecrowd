// *** Fórmula de Bhaskara ***
// Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara.
// Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão
// por 0 ou raiz de numero negativo.

var a = 10;
var b = 203.0;
var c = 5.0;

var r1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
var r2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);

if (r1 >= 0 || r1 <= 0){
    console.log(`R1 = ${r1.toFixed(5)}`)
    console.log(`R2 = ${r2.toFixed(5)}`)
} else {
    console.log("Impossivel calcular")
}