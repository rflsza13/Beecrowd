// *** Triângulo ***
// Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. 
// Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:
//    Perimetro = XX.X
// Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem
//    Area = XX.X

var [a, b, c] = [6.0, 4.0, 2.0];

if (a > Math.abs(b-c) && a < (b+c)){
    let p = a + b + c;
    console.log(`Perimetro = ${p.toFixed(1)}`);
} else {
    let ar = ((a+b) * c) / 2;
    console.log(`Area = ${ar.toFixed(1)}`);
}