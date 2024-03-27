// 1 - Escreva uma função para calcular a soma dos elementos de um array numérico.
function somarNumeros(array) {
  let soma = 0;

  for(let i = 0; i < array.length; i++) {
    soma += array[i];
  }

  return soma;
}


let numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros);

let resultado = somarNumeros(numeros);
console.log(resultado);