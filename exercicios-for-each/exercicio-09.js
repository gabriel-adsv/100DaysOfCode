// CONTAR ELEMENTOS QUE CONTENHAM SUBSTRING
// - Dado um array de strings, use forEach() para contar quantos elementos contêm uma substring específica.

const strings = ['gato', 'cachorro', 'passarinho', 'peixe', 'tartaruga'];

const substring = 'ga';

contador = 0;

strings.forEach((elemento) => {
  if(elemento.includes(substring)) {
    contador++;
  };
});

console.log(`A substring '${substring}' foi encontrada ${contador} vezes.`)