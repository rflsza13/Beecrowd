// *** Tempo de Jogo com Minutos ***
// Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.
// Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.
// Entrada
//  Quatro números inteiros representando a hora de início e fim do jogo.
// Saída
//  Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .


var [a, a2, b, b2] = [0, 0, 0, 0];
a = (a * 60) + a2;
b = (b * 60) + b2;
var h = 0, m = 0;

if(a > b){
    m = (1440 - a) + b;
} else if (a < b){ 
    m = (b - a);
} else if (a == b){
    if (a == 0){
        m = 1440;
    } else {
        m = a;
    }
}

while (m >=- 60){
    h += 1;
    m -=60;
}

console.log(`O JOGO DUROU ${h.toFixed(0)} HORA(S) E ${m.toFixed(0)} MINUTO(S)`);