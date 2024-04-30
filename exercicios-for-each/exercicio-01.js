// SOMA DE ELEMENTOS
// - Dado um array de números, use forEach() para calcular a soma de todos os elementos do array.

const array = [1, 2, 3, 4, 5];
let soma = 0;

array.forEach((elemento) => {
  soma += elemento;
});

console.log(soma);
