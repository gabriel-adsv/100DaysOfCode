// Crie uma função que recebe um vetor e um número.
// Ela deve mostrar todos os índices onde esse número aparece no vetor, e não só apenas o primeiro e/ou  último índice em que o número aparece (como nos métodos indexOf e lastIndexOf).

let numero = 5;

function verifica(numero) {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  for(let i = 0; i < arr.length; i++) {
    let posicaoIndice;

    if(arr.includes(numero)) {
      posicaoIndice = arr[i];
    }
    console.log(posicaoIndice);
  }
}

console.log('tá funcionando')
