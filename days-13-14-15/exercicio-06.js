// Crie uma função que recebe um vetor e um número.
// Ela deve mostrar todos os índices onde esse número aparece no vetor, e não só apenas o primeiro e/ou  último índice em que o número aparece (como nos métodos indexOf e lastIndexOf).

function encontrarIndices(vetor, numero) {
  const indices = []; // Inicializa um vetor vazio para armazenar os índices
  
  // Loop pelo vetor
  for (let i = 0; i < vetor.length; i++) {
    // Verifica se o elemento atual é igual ao número
    if (vetor[i] === numero) {
      // Se for igual, adiciona o índice ao vetor de índices
      indices.push(i);
    }
  }
  
  // Retorna o vetor com os índices onde o número aparece
  return indices;
}

// Exemplo de uso da função
const vetor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5];
const numero = 2;
console.log(`Índices onde o número ${numero} aparece: ${encontrarIndices(vetor, numero).join([separador = ', '])}`);

