/* 1. Declare uma variável chamada `nome` e atribua a ela o seu nome. */

function somar(a, b) { // Aqui eu coloco os campos que vou receber na minha função.
    return a + b; // Aqui eu coloco o que a função vai me retornar usando esses os campos que existe na minha função.
   }

   // Opção 1
   const resultado = somar(2, 4); // Depois posso criar uma variável e usar essa função que foi criada inserindo os campos
   
    console.log(resultado)

    // Opção 2
    let a = 10;
    let b = 20;
    const resultado = somar(a, b); // Aqui eu peguei duas variáveis que tinha valores e coloquei na minha função.

    console.log(resultado)

    // Opção 3
    console.log(somar(10, 20)) // Essa opção fiz a soma diretamente no console.
  