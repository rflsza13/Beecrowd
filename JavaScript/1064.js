/**** Positivos e Média ***
 * Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. 
 * Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito 
 * após o ponto decimal.
 * Entrada
 *      A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. 
 *      Pelo menos um destes números será positivo.
 * Saída    
 *      O primeiro valor de saída é a quantidade de valores positivos.
 *      A próxima linha deve mostrar a média dos valores positivos digitados.
 */

var num = [7, -5, 6, -3.4, 4.6, 12];
var cont = 0, med = 0;

for(let i = 0; i < 6; i++){
    if(num[i] >= 0){
        cont++;
        med += num[i];
    }
    
}

console.log(`${cont} valores positivos`);
console.log((med / cont).toFixed(1));