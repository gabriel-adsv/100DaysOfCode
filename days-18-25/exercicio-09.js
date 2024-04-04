// 9 - Escreva uma função para ordenar um array de números em ordem decrescente.
function ordemDecrescente(array) {
  array.sort(function(a, b) {
    return b - a;
  });

  return array;
};


let numeros = [8, 4, 74, 6, 32, 67, 2, 34, 654];
console.log(numeros);

let numerosDecrescentes = ordemDecrescente(numeros);
console.log(numerosDecrescentes);
