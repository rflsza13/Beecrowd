/*** Quadrado de Pares ***
 * Leia um valor inteiro N. Apresente o quadrado de cada um dos valores pares, de 1 até N, inclusive N,
 * se for o caso.
 * Entrada
 *      A entrada contém um valor inteiro N (5 < N < 2000).
 * Saída
 *      Imprima o quadrado de cada um dos valores pares, de 1 até N, conforme o exemplo abaixo.
 */

var n = 6;

for(let i = 1; i <= n; i++){
    if(i % 2 === 0){
        console.log(`${i}^2 = ${i ** 2}`);
    }
}