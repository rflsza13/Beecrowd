/*** Intervalo 2 ***
 * Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida.
 * Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão fora do intervalo,
 * mostrando essas informações.
 * Entrada
 *      A primeira linha da entrada contém um valor inteiro N (N < 10000), que indica o número de casos de teste.
 *      Cada caso de teste a seguir é um valor inteiro X (-107 < X <107).
 * Saída
 *      Para cada caso, imprima quantos números estão dentro (in) e quantos valores estão fora (out) do intervalo.
 */

var cont = 4;
var n = [14, 123, 10, -25];
var nin = 0, nout = 0;

for(let i = 0; i < cont; i++){
    if(n[i] >= 10 && n[i] <= 20){
        nin++;
    } else {
        nout++;
    }
}

console.log(`${nin} in`);
console.log(`${nout} out`);