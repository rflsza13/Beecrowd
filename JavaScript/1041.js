// *** Coordenadas de um Ponto ***
// Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano.
// A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos
// ou na origem (x = y = 0).
//          Q2 | Q1
//          -------
//          Q3 | Q4
// Se o ponto estiver na origem, escreva a mensagem “Origem”.
// Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.

var x = 4.5;
var y = -2.2;

if (x > 0){
    if (y > 0){
        console.log("Q1");
    } else if (y < 0){
        console.log("Q4");
    } else {
        console.log("Eixo X");
    }
} else if (x < 0) {
    if (y > 0){
        console.log("Q2");
    } else if (y < 0){
        console.log("Q3");
    } else {
        console.log("Eixo X");
    }
} else {
    if (y == 0){
        console.log("Origem");
    } else {
        console.log("Eixo Y");
    }
}