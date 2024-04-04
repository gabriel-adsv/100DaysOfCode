// 8 - Escreva uma função para ordenar um array de números em ordem crescente.
function ordemCrescente(array) {
  array.sort(function(a, b) {
    return a - b;
  });

  return array;
};


let numeros = [4, 6, 7, 1, 3, 9];
console.log(numeros);

let numerosOrdenados = ordemCrescente(numeros);
console.log(numerosOrdenados);