// MÉTODOS DE ITERAÇÃO - MAP
// Crie um array chamado números com cinco números diferentes. Use o método map para criar um novo array onde cada número seja multiplicado por si mesmo.

let numeros = [5, 6, 7, 8, 9, 10];

let quadrados = numeros.map(function(numero) {
  return numero * numero;
});

console.log(quadrados); 

  