// ENCONTRAR ELEMENTOS COM CERTO CARACTERE
// - Dado um array de strings, use forEach() para criar um novo array com strings que contenham um determinado caractere.

const arrayDeStrings = ['Não', 'deixe', 'para', 'depois.', 'Está', 'ficando', 'tarde!'];

const novoArray = [];

const caractere = 'a'

arrayDeStrings.forEach((palavra) => {
  if(palavra.includes('a') || palavra.includes('á')) {
    novoArray.push(palavra);
  };
});

console.log('Palavras com a letra A:', novoArray);