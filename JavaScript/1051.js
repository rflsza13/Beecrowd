// **** Imposto de Renda ****
/* Em um país imaginário denominado Lisarb, todos os habitantes ficam felizes em pagar seus impostos,
   pois sabem que nele não existem políticos corruptos e os recursos arrecadados são utilizados em 
   benefício da população, sem qualquer desvio. A moeda deste país é o Rombus, cujo símbolo é o R$.
   Leia um valor com duas casas decimais, equivalente ao salário de uma pessoa de Lisarb. Em seguida,
   calcule e mostre o valor que esta pessoa deve pagar de Imposto de Renda, segundo a tabela abaixo.
   ------------------------------------------------------
   |Renda                           |  Imposto de Renda  |
   ------------------------------------------------------
   | de 0.00 a R$ 2000,00           |        isento      |
   | de R$ 2000.01 até R$ 3000.00   |          8%        |
   | de R$ 3000.01 até R$ 4500.00   |          18%       |
   | acima de R$ 4500.00            |          28%       |
   -------------------------------------------------------
   Lembre que, se o salário for R$ 3002.00, a taxa que incide é de 8% apenas sobre R$ 1000.00, pois 
   a faixa de salário que fica de R$ 0.00 até R$ 2000.00 é isenta de Imposto de Renda. No exemplo 
   fornecido (abaixo), a taxa é de 8% sobre R$ 1000.00 + 18% sobre R$ 2.00, o que resulta em R$ 80.36 
   no total. O valor deve ser impresso com duas casas decimais. */

var sal = 4520;
var imp, n1, n2, n3, n4;

if(sal <= 2000){
    console.log("Isento");
} else {
    if (sal > 4500){
        n1 = 2000;
        n2 = 1000;
        n3 = 1500;
        n4 = sal - n1 -n2 - n3;
    } else if (sal > 3000){
        n1 = 2000;
        n2 = 1000;
        n3 = sal - n1 - n2;
        n4 = 0;
    } else if (sal > 2000){
        n1 = 2000;
        n2 = sal - n1;
        n3 = 0;
        n4 = 0;
    }

    imp = (n2 * 0.08) + (n3 * 0.18) + (n4 * 0.28);
    console.log(`R$ ${imp.toFixed(2)}`);
}
