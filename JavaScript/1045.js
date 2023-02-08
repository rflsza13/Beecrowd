// *** Tipos de Triângulos ***
// Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior
// dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre
// escrevendo uma mensagem adequada:
//   se A >= B+C, apresente a mensagem: NAO FORMA TRIANGULO
//   se A² = B² + C², apresente a mensagem: TRIANGULO RETANGULO
//   se A² > B² + C², apresente a mensagem: TRIANGULO OBTUSANGULO
//   se A² < B² + C², apresente a mensagem: TRIANGULO ACUTANGULO
//   se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
//   se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES

var [a, b, c] = [7.0, 5.0, 7.0];
var x = 0, i = false;

while(i == false){
    if(a < b){
        x = a;
        a = b;
        b = x;
    } else if(b < c) {
        x = b;
        b = c;
        c = x;
    } else {
        i = true;
    }
}

if(a >= b + c){
    console.log("NAO FORMA TRIANGULO");
} else {
    if(a ** 2 == b ** 2 + c **  2){
        console.log("TRIANGULO RETANGULO");
    } else if (a ** 2 > b ** 2 + c **  2){
        console.log("TRIANGULO OBTUSANGULO");
    } else if (a ** 2 < b ** 2 + c **  2){
        console.log("TRIANGULO ACUTANGULO");
    }

    if(a === b && b === c && a === c){
        console.log("TRIANGULO EQUILATERO");
    } else if (a === b || b === c || a === c){
        console.log("TRIANGULO ISOSCELES");
    }
}