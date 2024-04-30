// MULTIPLICAR ELEMENTOS POR 2
// - Dado um array de números, use forEach() para criar um novo array onde cada elemento é multiplicado por 2.

const arrayDeNumeros = [1, 2, 3, 4, 5];

const resultado = []

arrayDeNumeros.forEach((elemento) => {
  let multiplicacao = elemento * 2;
  resultado.push(multiplicacao);
});

console.log(resultado);
