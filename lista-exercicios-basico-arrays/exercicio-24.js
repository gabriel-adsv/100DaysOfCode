// 24 - Gere um novo array com os elementos do primeiro array que não estão presentes no segundo array.

// 1º passo - Criar dois arrays para verificação
const primeiroArray = [10, 20, 30, 35, 40, 50];
console.log('Elementos do 1º array:', primeiroArray);

const segundoArray = [40, 50, 60, 70, 80];
console.log('Elementos do 2º array:', segundoArray);

// 2º passo - Criar o novo array que irá receber os elementos que não estão presentes no 2º array
const novoArray = [];

// 3º passo - Fazer a verificação dos elementos
for(const element of primeiroArray) {
  // Verifica se os elementos do 1º array são diferentes dos elementos do 2º array
  if(primeiroArray.includes(element) !== segundoArray.includes(element)) {
    // Se for diferente, será guardado no novo array
    novoArray.push(element);
  }
};

// 4º passo - Exibir o novo array no console
console.log('Elementos do 1º array que não estão inclusos no 2º array:', novoArray);
