// 11 - Escreva uma função para contar o número de ocorrências de um elemento em um array.
function contadorOcorrencias(array, elemento) {
  let contador = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i] === elemento) {
      contador++;
    };
  };
  return contador;
}

let arrayElementos = [1, 2, 3, 4, 2, 2, 3, 2];
const ocorrencia = 2;
let numeroDeOcorrencias = contadorOcorrencias(arrayElementos, ocorrencia);
console.log(`O elemento ${ocorrencia} ocorre ${numeroDeOcorrencias} vezes no array.`);

// 12 - Escreva uma função para filtrar elementos pares de um array.
// 13 - Escreva uma função para encontrar a média dos elementos de um array numérico.
// 14 - Escreva uma função para encontrar a mediana dos elementos de um array numérico.
// 15 - Escreva uma função para encontrar o elemento mais frequente em um array.
// 16 - Escreva uma função para calcular o produto dos elementos de um array numérico.
// 17 - Escreva uma função para verificar se todos os elementos de um array são positivos.
// 18 - Escreva uma função para verificar se algum elemento de um array é negativo.
// 19 - Escreva uma função para encontrar o segundo maior número em um array numérico.
// 20 - Escreva uma função para encontrar o segundo menor número em um array numérico.
// 21 - Escreva uma função para calcular a diferença entre duas arrays.
// 22 - Escreva uma função para criar um novo array sem os elementos fornecidos.
// 23 - Escreva uma função para gerar um array de números inteiros aleatórios dentro de um intervalo específico.
// 24 - Escreva uma função para embaralhar os elementos de um array.
// 25 - Escreva uma função para agrupar os elementos de um array com base em um critério específico.