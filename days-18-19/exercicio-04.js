// 4 - Escreva uma função para remover elementos duplicados de um array.
function removeDuplicados(array) {
  // Passo 1: Criar um novo array vazio para armazenar os elementos únicos
  let unicos = [];

  // Passo 2: Iterar sobre cada elemento do array fornecido
  array.forEach(function(elemento) {
    // Passo 3: Verificar se o elemento atual não está presente no array de elementos únicos
    if (!unicos.includes(elemento)) {
      // Passo 4: Se não estiver presente, adicioná-lo ao array de elementos únicos
      unicos.push(elemento);
    }
  });

  // Passo 5: Retornar o array de elementos únicos
  return unicos;
}

// Exemplo de uso:
const arrayDuplicados = [1, 2, 2, 3, 4, 4, 5];
const arrayUnicos = removeDuplicados(arrayDuplicados);
console.log(arrayUnicos); // Saída: [1, 2, 3, 4, 5]
