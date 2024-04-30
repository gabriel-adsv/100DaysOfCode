// CONTAR ELEMENTOS MAIORES QUE 10
// - Dado um array de números, use forEach() para contar quantos elementos são maiores que 10.

const numeros = [2, 10, 11, 4, 7, 13, 2, 15];

let elementosMaiorQueDez = 0;

numeros.forEach((elemento) => {
  if(elemento >= 10) {
    elementosMaiorQueDez ++;
  }
}); 

console.log(`Existem ${elementosMaiorQueDez} elementos maior que 10.`);