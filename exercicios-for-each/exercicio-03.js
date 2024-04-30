// CONCATENAÇÃO DE STRINGS
// - Dado um array de strings, use forEach() para concatenar todas as strings em uma única string.

const string = ['Olá', 'mundo!', 'Como', 'vai', 'você?'];
let frase = ''

string.forEach((elemento) => frase += elemento + ' ');

console.log(frase);
