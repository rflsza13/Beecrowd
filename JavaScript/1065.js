/** *** Pares entre Cinco Números ***
 * Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados são pares
 * e mostre esta informação.
 * Entrada
 *      O arquivo de entrada contém 5 valores inteiros quaisquer.
 * Saída
 *      Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos.
 */

var num = [7, -5, 6, -4, 12];
var cont = 0;

for(let i = 0; i < 5; i++){
    if(num[i] % 2 == 0){
        cont++;
    }
}

console.log(`${cont} valores pares`)