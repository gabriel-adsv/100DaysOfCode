// 1 - Escreva uma função para calcular a soma dos elementos de um array numérico.

// Criar a função que calcula a soma
function calculaSoma(array) {
  let soma = 0;

  for(let i = 0; i < array.length; i++) {
    soma += array[i];
  };

  return soma;
};

// Criar um array numérico
let arrayNumerico = [1, 2, 3, 4, 5, 6, 7];

// Criar variável que vai guardar o resultado da soma
let resultado = calculaSoma(arrayNumerico);

// Exibir o resultado
console.log(resultado);