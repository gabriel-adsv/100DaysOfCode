// 19 - Gere um novo array com os elementos que estão presentes em ambos os arrays fornecidos.

// Arrays que serão verificados
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

// Array que irá receber os elementos repetidos
const arrayUnico = [];

// Laço de repetição que vai verificar cada um dos elementos dos arrays
for(const element of array1) {
  // Verifica se os arrays 1 e 2 possuem os mesmos elementos
  if(array1.includes(element) && array2.includes(element)) {
    // Caso os elementos forem repetidos, serão adicionados no array vazio
    arrayUnico.push(element);
  };
};

// Exibe o novo array no console
console.log(arrayUnico);