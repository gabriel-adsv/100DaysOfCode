// 3 - Escreva uma função para encontrar o menor número em um array numérico.
function menorNumero(array) {
  let menor = array[0];

  for(let i = 0; i < array.length; i++) {
    if(menor > array[i]) {
      menor = array[i];
    } else {
      menor = menor;
    };
  };

  return menor;
};


let numeros = [1, 56, 0, 5, 32, 6, 33, 9, 7];
console.log(numeros);

let resultado = menorNumero(numeros);
console.log(resultado);