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
