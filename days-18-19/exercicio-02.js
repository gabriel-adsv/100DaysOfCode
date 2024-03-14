// 2 - Escreva uma função para encontrar o maior número em um array numérico.
function maiorNumero(array) {
  let maior = array[0];
  for(let i = 0; i < array.length; i++) {
    if(maior < array[i]) {
      maior = array[i];
    }
  }
  return maior
}

let numeros = [5, 15, 3, 8, 6, 9, 2];
let resultado = maiorNumero(numeros);
console.log(resultado);
