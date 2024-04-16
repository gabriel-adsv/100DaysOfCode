// 17 - Verifique se o array é simétrico (ou seja, se pode ser lido da mesma forma da esquerda para a direita e da direita para a esquerda).

function simetrico(array) {
  // verifica se o array está vazio, se estiver vazio é simetrico e retorna true
  if(array.length === 0) {
    return true;
  };

  // Itera sobre o array até a metade
  for(let i = 0; i < array.length / 2; i++) {
    // Compara o elemento atual com o elemento correspondente no final
    if(array[i] !== array[array.length - 1 - i]) {
      return false;
    };
  };

  // Se todas as comparações forem iguais, o array é simétrico
  return true;
};

const array1 = [1, 2, 3, 2, 1];
console.log(simetrico(array1));

const array2 = [1, 2, 3, 4, 5];
console.log(simetrico(array2));

const array3 = [];
console.log(simetrico(array3));