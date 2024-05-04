// TRANSFORMAR OBJETOS EM STRINGS
// - Dado um array de objetos com propriedades nome e idade, use forEach() para criar um array de strings que descrevam cada objeto.

const bichinhos = [
  {
    nome: 'Chicó',
    idade: '26 anos',
    especie: 'ave' 
  },
  {
    nome: 'Duda',
    idade: '16 anos',
    especie: 'gato'
  },
  {
    nome: 'Nala',
    idade: '12 anos',
    especie: 'cachorro'
  },
  {
    nome: 'Thorin',
    idade: '12 anos',
    especie: 'gato'
  },
  {
    nome: 'Bulma',
    idade: '3 anos',
    especie: 'gato'
  },
  {
    nome: 'Salém',
    idade: '2 anos',
    especie: 'gato'
  },
  {
    nome: 'Madruguinha',
    idade: '8 meses',
    especie: 'cachorro'
  },
];

const descricao = [];

bichinhos.forEach((animal) => {
  descricao.push(`O animal ${animal.nome} tem ${animal.idade} de idade. E é da espécie ${animal.especie}.`)
});

console.log(descricao);