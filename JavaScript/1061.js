/** *** Tempo de um Evento ***
 * Pedrinho está organizando um evento em sua Universidade. O evento deverá ser no mês de Abril,
 * iniciando e terminando dentro do mês. O problema é que Pedrinho quer calcular o tempo que o evento
 * vai durar, uma vez que ele sabe quando inicia e quando termina o evento.
 * Sabendo que o evento pode durar de poucos segundos a vários dias, você deverá ajudar Pedrinho a 
 * calcular a duração deste evento.
 * Entrada
 *      Como entrada, na primeira linha vai haver a descrição “Dia”, seguido de um espaço e o dia do
 *      mês no qual o evento vai começar. Na linha seguinte, será informado o momento no qual o evento
 *      vai iniciar, no formato hh : mm : ss. Na terceira e quarta linha de entrada haverá outra 
 *      informação no mesmo formato das duas primeiras linhas, indicando o término do evento.
 * Saída
 *      Na saída, deve ser apresentada a duração do evento, no seguinte formato:
 *      W dia(s)
 *      X hora(s)
 *      Y minuto(s)
 *      Z segundo(s)
 * Obs: Considere que o evento do caso de teste para o problema tem duração mínima de 1 minuto.
 */

var [d1, h1, m1, s1] = [05, 08, 12, 23];
var [d2, h2, m2, s2] = [20, 06, 14, 24];
var a = false;

s1 = (d1 * 24 * 60 * 60) + (h1 * 60 * 60) + (m1 * 60) + s1;
s2 = (d2 * 24 * 60 * 60) + (h2 * 60 * 60) + (m2 * 60) + s2;

if (s1 > s2){ 
    s1 = (1440 * 60 - s1) + s2;
} else if (s1 < s2){
    s1 = s2 - s1;
} else {
    s1 = 1440;
}

m1 = 0;
h1 = 0;
d1 = 0;

while (a == false){
    if (s1 >= 60){
        m1++;
        s1 -= 60;
    } else if (m1 >= 60){
        h1++;
        m1-= 60;
    } else if (h1 >= 24){
        d1++;
        h1 -= 24;
    } else {
        a = true;
    }
} 

console.log(`${d1} dia(s)`);
console.log(`${h1} hora(s)`);
console.log(`${m1} minuto(s)`);
console.log(`${s1} segundo(s)`);