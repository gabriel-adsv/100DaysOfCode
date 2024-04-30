// FILTRAR VALORES NEGATIVOS
// - Dado um array de números, use forEach() para criar um novo array que contenha apenas os valores não negativos.

const array = [1, 2, -3, 4, -5];
const positivos = [];

array.forEach((elemento) => {
  if(elemento > 0) {
    positivos.push(elemento);
  };
});

console.log(positivos);

