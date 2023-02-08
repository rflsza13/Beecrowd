// *** Sort Simples ***
// Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente,
// uma linha em branco e em seguida, os valores na sequência como foram lidos.

var [n1, n2, n3] = [2, -3, -8];
var [an1, an2, an3] = [n1, n2, n3];
var aux;
var ordem = false;

while (ordem == false) {
    if (n1 > n2) {
        aux = n1;
        n1 = n2;
        n2 = aux;
    } else if (n2 > n3) {
        aux = n2;
        n2 = n3;
        n3 = aux;
    } else {
        ordem = true;
    }
}
console.log(n1)
console.log(n2)
console.log(`${n3} \n`)
console.log(an1)
console.log(an2)
console.log(an3)
