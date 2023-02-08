// *** Múltiplos ***
// Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos",
// indicando se os valores lidos são múltiplos entre si.

var a = 2, b = 2;
var res;

if ( a > b) {
    res = a % b;
} else {
    res = b % a;
}
if (res === 0) {
    console.log("Sao Multiplos");
} else {
    console.log("Nao sao Multiplos");
}