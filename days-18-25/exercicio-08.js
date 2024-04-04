// 8 - Escreva uma função para ordenar um array de números em ordem crescente.
function ordemCrescente(array) {
  array.sort(function (a, b) {
    return a - b;
  });

  return array;
};

let numeros = [5, 2, 8, 1, 9, 7];
console.log(numeros);

let arrayOrdenado = ordemCrescente(numeros);
console.log(arrayOrdenado);