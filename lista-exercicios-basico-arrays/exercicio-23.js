// 23 - Verifique se dois arrays são iguais (ou seja, possuem os mesmos elementos na mesma ordem).

// 1º passo - criar uma função para verificar se os arrays são iguais
function saoArraysIguais(array1, array2) {
  // Verificar se os arrays tem o mesmo comprimento
  if(array1.length !== array2.length) {
    return false;
  };

  // Verificar cada elemento dos arrays
  for(let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) {
      return false;
    };
  };

  // Se nenhum elemento diferente for encontrado, os arrays são iguais
  return true;
};


// 2º passo - criar dois arrays para verificação
const primeiroArray = [1, 2, 3, 4, 5];
const segundoArray = [1, 2, 3, 4, 5];


// 3º passo - Exibir se os arrays são iguais
if(saoArraysIguais(primeiroArray, segundoArray)) {
  console.log('Os arrays são iguais.')
} else {
  console.log('Os arrays são diferentes.')
};
