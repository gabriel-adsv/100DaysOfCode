// 18 - Gere um novo array com os elementos únicos presentes em ambos os arrays fornecidos.

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const arrayUnico = [];

// Iterando sobre os elementos do primeiro array
for(const element of array1) {
  // Verificando se o elemento não está presente no segundo array e no array de elementos únicos
  if(!array2.includes(element) && !arrayUnico.includes(element)) {
    // Adicionando o elemento ao array de elementos únicos
    arrayUnico.push(element);
  };
};

// Iterando sobre os elementos do segundo array
for(const element of array2) {
  // Verificando se o elemento não está presente no primeiro array e no array de elementos únicos
  if(!array1.includes(element) && !arrayUnico.includes(element)) {
    // Adicionando o elemento ao array de elementos únicos
    arrayUnico.push(element);
  };
};

console.log(arrayUnico);