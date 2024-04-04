// 2 - Escreva uma função para encontrar o maior número em um array numérico.

function maiorNumero(array) {
  maiorNumero = array[0];

  for(let i = 0; i < array.length; i++) {
    if(maiorNumero < array[i]) {
      maiorNumero = array[i];
    };
  };

  return maiorNumero;
};

let arrayNumerico = [3, 8, 4, 7, 9, 12, 2, 6, 1, 13];

let resultado = maiorNumero(arrayNumerico);

console.log(resultado);