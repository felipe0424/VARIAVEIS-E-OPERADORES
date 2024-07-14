## INTRODUÇÃO JAVASCRIPT (index.js)

## Variáveis

Var Nome = “Felipe”;
Let Idade = 20;
Const Cliente = False/True;
Undefined 
---
let a = prompt("Valor A: ");
let b = prompt("Valor B: ");

console.log ("Valor Total:",parseFloat(a) + parseFloat(b))
---
let ValorJantar = parseFloat(prompt("Valor do Jantar: "));
let TaxaGarcom = (ValorJantar*0.10).toFixed(2);
let Total = ValorJantar+TaxaGarcom;

console.log("Valor da Taxa do Garçom: ", "R$", TaxaGarcom)
console.log("Total com taxa do garçom:", "R$", Total);
---
let ValorConta = parseFloat(prompt("Valor da Conta: "));
let TaxaGarcom = parseFloat((ValorConta*0.10).toFixed(2));
let Quantidade = parseFloat(prompt("Quantas Pessoas? "));
let Total = (TaxaGarcom+ValorConta)/Quantidade;

console.log("Valor Total: ", "R$", ValorConta+TaxaGarcom)
console.log("Total por Cliente:", "R$", (Total.toFixed(2)));
---
const frutas = ["Maçã","Banana","Manga"]

console.log(frutas[0])
//Sempre começa com índice [0] = Maçã
---