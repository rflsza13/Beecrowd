/*** Seis Números Ímpares ***
 * Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a partir de X,
 * um valor por linha, inclusive o X ser for o caso.
 * Entrada
 *      A entrada será um valor inteiro positivo.
 * Saída
 *      A saída será uma sequência de seis números ímpares.
 */

var num = 8;
cont = 0;

while(cont < 6){
    if(num % 2 != 0){
        console.log(num);
        cont++;
    }
    num++;
}
