// 6 - Escreva uma função para concatenar dois arrays.
function concatenarArrays(array1, array2) {
  //1º passo: Criar um novo array vazio para armazenar os elementos concatenados
  let concatenacao = [];

  //2º passo: Adicionar os elementos do primeiro array ao array resultado
  concatenacao = concatenacao.concat(array1);

  //3º passo: Adicionar os elementos do segundo array ao array resultado
  concatenacao = concatenacao.concat(array2);

  //4º passo: Retornar o array resultado que contém os elementos concatenados
  return concatenacao;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const resultadoConcatenacao = concatenarArrays(array1, array2);
console.log(resultadoConcatenacao);
