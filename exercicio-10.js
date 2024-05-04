// CRIAÇÃO DE ID'S EXCLUSIVOS
// - Dado um array de objetos, use forEach() para adicionar uma propriedade id exclusiva para cada objeto, baseada no índice.

const pessoas = [
  {
    nome: 'Gabriel',
    idade: 35,
  },
  {
    nome: 'Fernando',
    idade: 33
  },
  {
    nome: 'Amélia',
    idade: 19
  },
  {
    nome: 'Julia',
    idade: 13
  },
  {
    nome: 'Nicoly',
    idade: 5
  }
];

console.log('Array antes da adição da nova propriedade:', pessoas);

let numeroId = 1;

pessoas.forEach((pessoa) => {
  pessoa.Identidade = numeroId;
  numeroId++;
});

console.log('Array depois da adição da nova propriedade:', pessoas);