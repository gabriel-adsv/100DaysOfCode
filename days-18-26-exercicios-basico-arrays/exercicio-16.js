// 16 - Verifique se um elemento específico está presente no array.
const array = ['A', 'B', 'C', 'D', 'E', 'F'];

function verificaElemento(array, elemento) {
  return array.includes(elemento);
}

const elementoUm = verificaElemento(array, 'A');
const elementoDois = verificaElemento(array, 'Z');

console.log(elementoUm);
console.log(elementoDois);
