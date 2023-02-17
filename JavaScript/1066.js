/*** Pares, Ímpares, Positivos e Negativos ***
 * Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores 
 * digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados 
 * foram negativos.
 * Entrada
 *      O arquivo de entrada contém 5 valores inteiros quaisquer.
 * Saída
 *      Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo 
 *      o final de linha após cada uma.
 */

var num = [-5, 0, -3, -4, 12];
var pos = 0, neg = 0, par = 0, impar = 0; 

for(let i = 0; i < 5; i++){
    if(num[i] % 2 === 0){
        par++;
    } else {
        impar++;
    }

    if(num[i] > 0){
        pos++;
    } else if(num[i] < 0) {
        neg++;
    }
}

console.log(`${par} valor(es) par(es)`);
console.log(`${impar} valor(es) impar(es)`);
console.log(`${pos} valor(es) positivo(s)`);
console.log(`${neg} valor(es) negativo(s)`);