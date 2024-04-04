// 10 - Escreva uma função para encontrar o índice de um elemento em um array.
function verificaIndice(array, elemento) {
  let indice = array.indexOf(elemento);

  return indice;
}


let numeros = [1, 2, 3, 4, 5];
let elemento = 4

let indiceDoElemento = verificaIndice(numeros, elemento);
console.log(indiceDoElemento);
