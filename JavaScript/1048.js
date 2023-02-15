// *** Aumento de Salário ***
/* A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:
            -------------------------------------------------------------
            |           Salário 	    |   Percentual de Reajuste      |
            -------------------------------------------------------------
            |       0 - 400.00          |               15%             |
            |       400.01 - 800.00     |               12%             |
            |       800.01 - 1200.00    |               10%             |
            |       1200.01 - 2000.00   |               7%              |
            |       Acima de 2000.00    |               4%              |
            -------------------------------------------------------------
Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice
reajustado, em percentual.

Entrada
    A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

Saída
    Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste (ambos devem ser apresentados com 2 casas
    decimais) e o percentual de reajuste ganho, conforme exemplo abaixo. */

var sal = 400.00;
var aum, por;

if (sal <= 400){
    por = '15 %';
    aum = sal * 0.15;
} else if(sal <= 800){
    por = '12 %';
    aum = sal * 0.12;
} else if(sal <= 1200){
    por = '10 %';
    aum = sal * 0.10;
} else if(sal <= 2000){
    por = '7 %';
    aum = sal * 0.07;
} else if(sal > 2000){
    por = '4 %';
    aum = sal * 0.04;
}

console.log(`Novo salario: ${(sal + aum).toFixed(2)}`);
console.log(`Reajuste ganho: ${aum.toFixed(2)}`);
console.log(`Em percentual: ${por}`);