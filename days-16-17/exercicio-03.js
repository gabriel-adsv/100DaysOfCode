// MANIPULAÇÃO DE ARRAYS
// Crie um array chamado frutas e adicione três tipos de frutas a ele. Use o método push para adicionar uma quarta fruta, depois use o método shift para remover a primeira fruta do array.

let fruits = [];
let fruitName
let position = 1;

for(let i = 0; i < 3; i++) {
  fruitName = prompt(`Adicione a ${position}º fruta`);
  fruits.push(fruitName);
  position++;
}

fruitName = prompt(`Adicione mais uma fruta`);
fruits.push(fruitName);

alert(`O array de frutas está assim: ${fruits.join([separador = ', '])}.`);

alert('Agora a primeira fruta será removida.');
fruits.shift(0);

alert(`Agora o array de frutas ficou assim: ${fruits.join([separador = ', '])}.`);