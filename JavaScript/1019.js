// *** Conversão de Tempo ***
// Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica,
// e informe-o expresso no formato horas:minutos:segundos.

var t = 140153;
var h = 0, m = 0;

do{
    if (t >= 60) {
        m++;
        t -= 60;
    } else if (m >= 60) {
        h++;
        m -= 60;
    }
} while (t > 60 || m > 60);

console.log(`${h}:${m}:${t}`);