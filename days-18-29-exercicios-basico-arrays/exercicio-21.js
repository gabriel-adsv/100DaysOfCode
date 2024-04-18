// 21 - Gere um novo array com os elementos que estão presentes apenas no segundo array fornecido.

// 1º passo - Criar dois arrays que serão verificados
const primeiroArray = [1, 2, 3, 4, 5];
console.log('1º array:', primeiroArray);

const segundoArray = [4, 5, 6, 7, 8];
console.log('2º array:', segundoArray);

// 2º passo - Criar um novo array que irá receber os elementos do segundo array
const novoArray = [];

// 3º passo - Fazer a verificação para cada um dos elementos do segundo array e adicioná-los no novo array
for(const element of segundoArray) {
  novoArray.push(element);
};

// 4º passo - Exibir o novo array gerado
console.log('Novo array gerado:', novoArray);



// 22 - Gere um novo array com os elementos que estão presentes em pelo menos um dos arrays fornecidos.
// 23 - Verifique se dois arrays são iguais (ou seja, possuem os mesmos elementos na mesma ordem).
// 24 - Gere um novo array com os elementos do primeiro array que não estão presentes no segundo array.
// 25 - Gere um novo array com os elementos que são comuns em todos os arrays fornecidos.