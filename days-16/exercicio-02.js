// ADICIONANDO PROPRIEDADES A UM OBJETO
// Adicione uma nova propriedade chamada semestre e atribua um valor a ela

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

let semestre = prompt(`Digite o semestre que o(a) estudante ${estudante[0].nome} está cursando:`);
estudante[0].semestre = semestre;

alert(`
  Nome do estudante: ${estudante[0].nome}
  Idade do Estudante: ${estudante[0].idade}
  Curso: ${estudante[0].curso}
  Semestre: ${estudante[0].semestre}º
`);

let novoNome = prompt('Digite o nome de outro(a) estudante:');
estudante[0].nome = novoNome;

let novaIdade = prompt(`Digite a idade do(a) estudante ${estudante[0].nome}:`);
estudante[0].idade = Number(novaIdade);

let novoCurso = prompt(`Digite o curso do(a) estudante ${estudante[0].nome}:`);
estudante[0].curso = novoCurso;

let novoSemestre = prompt(`Digite o semestre que o(a) estudante ${estudante[0].nome} está cursando:`)
estudante[0].semestre = novoSemestre;

alert(`
  Nome do estudante: ${estudante[0].nome}
  Idade do Estudante: ${estudante[0].idade}
  Curso: ${estudante[0].curso}
  Semestre: ${estudante[0].semestre}º
`);
