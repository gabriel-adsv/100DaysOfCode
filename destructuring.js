// Sintaxe do JS
const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [...numerosPares, ...numerosImpares];

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5];

const pessoa = {
  nome: 'Gabs',
  curso: 'Engenharia da Computação',
};

const pessoaCurso = {
  ...pessoa, curso: 'Engenharia da Computação'
};

const { curso } = pessoa;

function imprimeDados({nome, curso}) {
  console.log(nome, curso);
};

imprimeDados(pessoa);