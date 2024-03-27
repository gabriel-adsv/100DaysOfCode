// 2 - Escreva uma função para encontrar o maior número em um array numérico.
function maiorNumero(array) {
  let numeroMaior = array[0];

  for(let i = 0; i < array.length; i++) {
    if(numeroMaior < array[i]) {
      numeroMaior = array[i];  
    };
  };

  return numeroMaior
}

let numeros = [3, 5, 7, 2, 1, 4, 9, 10]
console.log(numeros)

let resultado = maiorNumero(numeros);
console.log(`O maior número do array é: ${resultado}.`);