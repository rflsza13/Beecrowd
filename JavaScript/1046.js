// *** Tempo de Jogo ***
// Leia a hora inicial e a hora final de um jogo.
// A seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração
// mínima de 1 hora e máxima de 24 horas.

var [a, b] = [0, 0];
var h;

if (a > b){
    h = (24 - a) + b;
} else if(a < b){
    h = b - a;
} else {
    h = 24;
}

console.log(`O JOGO DUROU ${h} HORA(S)`);