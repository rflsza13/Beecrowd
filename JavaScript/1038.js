// *** Lanche ***
// Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item.
// A seguir, calcule e mostre o valor da conta a pagar.
// |   código   |   especificação    |   preco   |
// |   1        |   Cachorro quente  |   R$4.00  | 
// |   2        |   X-Salada         |   R$4.50  | 
// |   3        |   X-Bacon          |   R$5.00  | 
// |   4        |   Torrada simples  |   R$2.00  | 
// |   5        |   Refrigerante     |   R$1.50  | 

var tabela = [[1, 4.00], [2, 4.50], [3, 5.00], [4, 2.00], [5, 1.50]];
var n = 2;
var qtde = 3;

for (let i = 0;i < 5; i++){
    if(tabela[i][0] === n){
        let val = tabela[i][1] * qtde;
        console.log(`Total: R$ ${val.toFixed(2)}`);
    }
}