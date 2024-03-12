// MANIPULAÇÃO DE OBJETOS
// Crie um objeto chamado estudante com propriedades nome, idade e curso. Em seguida altere as propridades para outros valores

let estudante = [
  {
    nome: 'Gabriel',
    idade: 35,
    curso: 'Engenharia da Computação'
  }
];

alert(`
  Nome do estudante: ${estudante[0].nome}
  Idade do Estudante: ${estudante[0].idade}
  Curso: ${estudante[0].curso}
`);

let novoNome = prompt('Digite outro nome');
estudante[0].nome = novoNome;

let novaIdade = prompt('Digite a idade do estudante:');
estudante[0].idade = Number(novaIdade);

let novoCurso = prompt("Digite o curso:");
estudante[0].curso = novoCurso;

alert(`
  Nome do estudante: ${estudante[0].nome}
  Idade do Estudante: ${estudante[0].idade}
  Curso: ${estudante[0].curso}
`);
