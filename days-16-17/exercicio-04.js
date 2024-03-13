// MÉTODOS DE ARRAYS - JOIN E SLICE
// Usando o array de frutas do exercício anterior, use o método join para criar uma string que contenha todas as frutas separadas por vírgulas, use o método slice para criar um novo array que contenha apenas a segunda e a terceira fruta.

let fruits = [];
let fruitName
let position = 1;

for(let i = 0; i < 3; i++) {
  fruitName = prompt(`Adicione a ${position}º fruta no array:`);
  fruits.push(fruitName);
  position++;
}

fruitName = prompt(`Adicione mais uma fruta no array:`);
fruits.push(fruitName);

alert(`
  O array de frutas ficou assim:\n 
  let fruits = [${fruits.join([separador = ', '])}].
`);

alert('Agora a primeira fruta será removida.');
fruits.shift(0);

alert(`
  E agora o array de frutas ficou assim:\n
  let fruits = [${fruits.join([separador = ', '])}].
`);

// novo array
alert(`
  Novo array com a segunda e terceira fruta apenas:\n 
  let fruits = [${fruits.slice(1, 3).join(separador = ', ')}].
`);
