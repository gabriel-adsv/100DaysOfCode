// 5 - Escreva uma função para verificar se um elemento existe em um array.
function verificarElemento(array, elemento) {
  // Passo 1: Iterar sobre cada elemento do array
  for (let i = 0; i < array.length; i++) {
    // Passo 2: Verificar se o elemento atual é igual ao elemento fornecido
    if (array[i] === elemento) {
      // Passo 3: Se encontrarmos o elemento, retornamos true
      return true;
    }
  }
  // Passo 4: Se o elemento não for encontrado após a iteração completa, retornamos false
  return false;
}

// Exemplo de uso:
const meuArray = [1, 2, 3, 4, 5];
const elementoExistente = 3;
const elementoNaoExistente = 6;

console.log(verificarElemento(meuArray, elementoExistente)); // Saída: true
console.log(verificarElemento(meuArray, elementoNaoExistente)); // Saída: false
