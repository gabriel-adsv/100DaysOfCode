// 3 - Escreva uma função para encontrar o menor número em um array numérico.
function menorNumero(array) {
  let menor = array[0];

  for(let i = 0; i < array.length; i++) {
    if(menor < array[i]) {
      menor = menor;
    } else {
      menor = array[i];
    }
  }
  return menor;
}

let numeros = [5, 15, 30, 8, 6, 9, 25];
let resultado = menorNumero(numeros);
console.log(resultado);
