// *** Notas e Moedas ***
// Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário.
// A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto.
// As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01.
// A seguir mostre a relação de notas necessárias.

var din = 576.73;
var div = din, cem = 0, cinq = 0, vinte = 0, dez = 0, cinco = 0, dois = 0;
var um = 0, ct = 0, vt = 0, dz = 0, ci = 0, zum = 0; 

 while (div >=2 ){
    if (div.toFixed(2) >= 100) {
        cem++;
        div -= 100;
    } else if (div.toFixed(2) >= 50) {
        cinq++;
        div -= 50;
    } else if (div.toFixed(2) >= 20) {
        vinte++;
        div -= 20;
    } else if (div.toFixed(2) >= 10) {
        dez++;
        div -= 10;
    } else if (div.toFixed(2) >= 5) {
        cinco++;
        div -= 5;
    } else if (div.toFixed(2) >= 2){
        dois++;
        div -= 2;
    }
}

console.log("NOTAS:");
console.log(`${cem} nota(s) de R$ 100.00`);
console.log(`${cinq} nota(s) de R$ 50.00`);
console.log(`${vinte} nota(s) de R$ 20.00`);
console.log(`${dez} nota(s) de R$ 10.00`);
console.log(`${cinco} nota(s) de R$ 5.00`);
console.log(`${dois} nota(s) de R$ 2.00`);

while (div > 0.009) {
    if (div.toFixed(2) >= 1){
            um++;
            div -= 1;
    } else if (div.toFixed(2) >= 0.5){
        ct++;
        div -= 0.5;
    } else if (div.toFixed(2) >= 0.25){
        vt++;
        div -= 0.25;
    } else if (div.toFixed(2) >= 0.1){
        dz++;
        div -= 0.1;
    } else if (div.toFixed(2) >= 0.05){
        ci++;
        div -= 0.05;
    } else if (div.toFixed(2) >= 0.01){
        zum++;
        div -= 0.01;
    }
}

console.log("MOEDAS:");
console.log(`${um} moeda(s) de R$ 1.00`);
console.log(`${ct} moeda(s) de R$ 0.50`);
console.log(`${vt} moeda(s) de R$ 0.25`);
console.log(`${dz} moeda(s) de R$ 0.10`);
console.log(`${ci} moeda(s) de R$ 0.05`);
console.log(`${zum} moeda(s) de R$ 0.01`);