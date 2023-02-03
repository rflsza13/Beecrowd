// *** Idade em Dias ***
// Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

// Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.
// Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364.
// Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

var d = 30;
var m = 0, a = 0;

while (d >= 30){
    if (d >= 365) {
        a++;
        d -= 365;
    } else if (d >= 30) {
        m++;
        d -= 30;
    }
}

console.log(`${a} ano(s)`);
console.log(`${m} mes(es)`);
console.log(`${d} dia(s)`);