// MANIPULAÇÃO DE ARRAYS
// Crie um array chamado frutas e adicione três tipos de frutas a ele. Use o método push para adicionar uma quarta fruta, depois use o método shift para remover a primeira fruta do array.

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

alert(`O array de frutas ficou assim: ${fruits.join([separador = ', '])}.`);

alert('Agora a primeira fruta será removida.');
fruits.shift(0);

alert(`E agora o array de frutas ficou assim: ${fruits.join([separador = ', '])}.`);