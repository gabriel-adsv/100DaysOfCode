// 20 - Gere um novo array com os elementos que estão presentes apenas no primeiro array fornecido.

// Arrays criados para verificação
const primeiroArray = [1, 2, 3, 4, 5];
console.log('1º array:', primeiroArray);

const segundoArray = [4, 5, 6, 7, 8];
console.log('2º array:', segundoArray);

// Novo array que será gerado com os elementos do primeiro array
const novoArray = [];

for(const element of primeiroArray) {
  novoArray.push(element);
}

console.log('Novo array com elementos do 1º array:', novoArray);



// 21 - Gere um novo array com os elementos que estão presentes apenas no segundo array fornecido.
// 22 - Gere um novo array com os elementos que estão presentes em pelo menos um dos arrays fornecidos.
// 23 - Verifique se dois arrays são iguais (ou seja, possuem os mesmos elementos na mesma ordem).
// 24 - Gere um novo array com os elementos do primeiro array que não estão presentes no segundo array.
// 25 - Gere um novo array com os elementos que são comuns em todos os arrays fornecidos.