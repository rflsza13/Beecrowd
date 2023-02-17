/*** Soma de Impares Consecutivos I ***
 * Leia 2 valores inteiros X e Y. A seguir, calcule e mostre a soma dos números impares entre eles.
 * Entrada
 *      O arquivo de entrada contém dois valores inteiros.
 * Saída
 *      O programa deve imprimir um valor inteiro. Este valor é a soma dos valores ímpares que estão
 *      entre os valores fornecidos na entrada que deverá caber em um inteiro.
 */

var n1 = 12;
var n2 = 12;
var soma = 0;

if(n1 > n2){
    var i = n2;
    var j = n1;
} else {
    var i = n1;
    var j = n2;
}

for(let c = i + 1; c < j; c++){
    if(c % 2 != 0){
        soma += c;
    }
}
console.log(soma);