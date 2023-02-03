// *** Média 3 ***
/* Leia quatro números (N1, N2, N3, N4), cada um deles com uma casa decimal, correspondente às quatro notas de um aluno. 
Calcule a média com pesos 2, 3, 4 e 1, respectivamente, para cada uma destas notas e mostre esta média acompanhada pela
mensagem "Media: ". Se esta média for maior ou igual a 7.0, imprima a mensagem "Aluno aprovado.". Se a média calculada for
inferior a 5.0, imprima a mensagem "Aluno reprovado.". Se a média calculada for um valor entre 5.0 e 6.9, inclusive estas,
o programa deve imprimir a mensagem "Aluno em exame.".
No caso do aluno estar em exame, leia um valor correspondente à nota do exame obtida pelo aluno. 
Imprima então a mensagem "Nota do exame: " acompanhada pela nota digitada. Recalcule a média (some a pontuação do exame
com a média anteriormente calculada e divida por 2). e imprima a mensagem "Aluno aprovado." (caso a média final seja 5.0
ou mais ) ou "Aluno reprovado.", (caso a média tenha ficado 4.9 ou menos). Para estes dois casos (aprovado ou reprovado
após ter pego exame) apresente na última linha uma mensagem "Media final: " seguido da média final para esse aluno. */

var [n1, n2, n3, n4] = [9.0, 4.0, 8.5, 9.0];
var med = (n1 * 2  + n2 * 3 + n3 * 4 + n4) / 10

if (med >= 7.0){
    console.log(`Media: ${med}`)
    console.log("Aluno aprovado.")
} else if (med < 5.0){
    console.log(`Media: ${med}`)
    console.log("Aluno reprovado.")
} else {
    console.log(`Media: ${med}`)
    console.log("Aluno em exame.")
    let ex = 6.4;
    med = (med + ex) / 2;
    console.log(`Nota do exame: ${ex}`)
    if (med > 5.0){
        console.log("Aluno aprovado.")
        console.log(`Media final: ${med}`)
    } else {
        console.log("Aluno reprovado.")
        console.log(`Media final: ${med}`) 
    }
}