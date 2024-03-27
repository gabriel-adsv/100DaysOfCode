// 6 - Escreva uma função para concatenar dois arrays.
function concatenarArrays(array1, array2) {
  let arrayUnico = [];

  arrayUnico = arrayUnico.concat(array1);

  arrayUnico = arrayUnico.concat(array2);

  return arrayUnico;
};

let array1 = [1, 2, 3, 4, 5,];
console.log(array1);

let array2 = [6, 7, 8, 9, 10];
console.log(array2);

let concatenacao = concatenarArrays(array1, array2);
console.log(concatenacao);