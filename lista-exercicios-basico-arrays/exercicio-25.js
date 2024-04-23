// 25 - Gere um novo array com os elementos que são comuns em todos os arrays fornecidos.

// 1º passo - Criar os arrays para verificação
const primeiroArray = [10, 20, 30, 40, 50];
const segundoArray = [40, 50, 60, 70, 80];
const terceiroArray = [20, 70, 80, 90];

// 2º passo - Criar o array que irá receber os novos valores
const novoArray = [];

// 3º passo - Fazer a verificação dos elementos do 1º array com 2º e 3º arrays
for(const element of primeiroArray) {
  // Verifica se os elementos do 1º array são exatamente iguais aos do 2º array
  if(primeiroArray.includes(element) === segundoArray.includes(element)) {
    // Se for igual, guarda no novo array
    novoArray.push(element);
  };

  // Verifica se os elementos do 1º array são exatamente iguais aos do 3º array
  if(primeiroArray.includes(element) === terceiroArray.includes(element)) {
    // Se for igual, guarda no novo array
    novoArray.push(element);
  };
};

// 4º passo - Fazer a verificação dos elementos do 2º array com 1º e 3º arrays
for(const element of segundoArray) {
  // Verifica se os elementos do 1º array são exatamente iguais aos do 3º array
  if(segundoArray.includes(element) === terceiroArray.includes(element)) {
    // Se for igual, guarda no novo array
    novoArray.push(element);
  };
};

// 5º passo - Exibir o novo array com os elementos comuns entre os três arrays
console.log('Os valores comuns nos 3 arrays são:', novoArray);