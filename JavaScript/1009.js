// *** Salário com Bônus ***
// Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas
// or ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas
// vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

var nome = "Rafael";
var salario = 500.00;
var vendas = 1230.30;
var total = salario + (vendas * 0.15);

console.log(`TOTAL = R$ ${total.toFixed(2)}`)