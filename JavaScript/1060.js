// *** Números Positivos ***
/**
 * Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos
 * (desconsidere os valores nulos). A seguir, mostre a quantidade de valores positivos digitados.
 * Entrada
 *      Seis valores, negativos e/ou positivos.
 * Saída
 *      Imprima uma mensagem dizendo quantos valores positivos foram lidos.
*/

var num = [7, -5, 6, -3.4, 4.6, 12];
var cont = 0;

for(var i = 0; i < 6; i++){
    if(num[i] >= 0){
        cont++;
    }
}

console.log(`${cont} valores positivos`)