// CONVERTER ELEMENTOS PARA MAIÚSCULAS
// - Dado um array de strings, use forEach() para criar um novo array com todas as strings convertidas para maiúsculas.

const arrayDeStrings = ['Olá,', 'mundo!', 'Como', 'vai', 'você,', 'de', 'novo?'];

const maiusculas = [];

arrayDeStrings.forEach((elemento) => {
  maiusculas.push(elemento.toUpperCase());
});

// CONCATENEI A FRASE PARA EXIBIR DE FORMA MAIS ORGANIZADA NO CONSOLE
let frases = '';

maiusculas.forEach((palavra) => {
  frases += palavra + ' ';
});

console.log(frases);