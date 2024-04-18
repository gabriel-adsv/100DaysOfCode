// 22 - Gere um novo array com os elementos que estão presentes em pelo menos um dos arrays fornecidos.

// 1º passo - Criar dois array que serão verificados
const primeiroArray = [1, 2, 3, 4, 5];
const segundoArray = [4, 5, 6, 7, 8];

// 2º passo - Criar o novo array que irá receber os novos elementos
const novoArray = [];

// 3º passo - Verificar se os elementos estão presentes em um dos arrays
for(const element of primeiroArray) {
  // Neste caso, optei por adicionar apenas os elementos do 1º array que não estão presentes no 2º array
  if(primeiroArray.includes(element) !== segundoArray.includes(element)) {
    novoArray.push(element);
  };
};

// 4º passo - Exibir o novo array
console.log('Elementos que estão presentes no 1º array:', novoArray);
