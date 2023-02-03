// *** Cédulas ***
// Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto.
// As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

var din = 11257;
var div = din, cem = 0, cinq = 0, vinte = 0, dez = 0, cinco = 0, dois = 0; um = 0;

do {
    if (div >= 100) {
        cem++;
        div -= 100;
    } else if (div >= 50) {
        cinq++;
        div -= 50;
    } else if (div >= 20) {
        vinte++;
        div -= 20;
    } else if (div >= 10) {
        dez++;
        div -= 10;
    } else if (div >= 5) {
        cinco++;
        div -= 5;
    } else if (div >= 2){
        dois++;
        div -= 2;
    } else if (div >= 1) {
        um++;
        div -= 1;
    }
} while (div > 0)

console.log(`${din} \n${cem} nota(s) de R$ 100,00 \n${cinq} nota(s) de R$ 50,00 \n${vinte} nota(s) de R$ 20,00`);
console.log(`${dez} nota(s) de R$ 10,00 \n${cinco} nota(s) de R$ 5,00 \n${dois} nota(s) de R$ 2,00 \n${um} nota(s) de R$ 1,00`);