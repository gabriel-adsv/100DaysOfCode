// 4 - Escreva uma função para remover elementos duplicados de um array.
function removeDuplicados(array) {
  // Passo 1: Criar um novo array vazio para armazenar os elementos únicos
  let unicos = [];

  // Passo 2: Iterar sobre cada elemento do array fornecido
  array.forEach(function(elemento) {
    if(!unicos.includes(elemento)) {
      unicos.push(elemento);
    }
  });
  // Passo 5: Retornar o array de elementos únicos
  return unicos;
}

// Exemplo de uso:
const arrayDuplicados = [1, 2, 2, 3, 3, 4, 4, 5];
console.log(arrayDuplicados);

const arrayUnicos = removeDuplicados(arrayDuplicados);
console.log(arrayUnicos); // Saída: [1, 2, 3, 4, 5]
