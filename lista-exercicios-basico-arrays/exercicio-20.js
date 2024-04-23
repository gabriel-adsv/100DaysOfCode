// 20 - Gere um novo array com os elementos que estão presentes apenas no primeiro array fornecido.

// Arrays criados para verificação
const primeiroArray = [1, 2, 3, 4, 5];
console.log('1º array:', primeiroArray);

const segundoArray = [4, 5, 6, 7, 8];
console.log('2º array:', segundoArray);

// Novo array que será gerado com os elementos do primeiro array
const novoArray = [];

// Verificar cada um dos elementos do primeiro array
for(const element of primeiroArray) {
  novoArray.push(element);
}

// Exibição do novo array gerado
console.log('Novo array com elementos do 1º array:', novoArray);
