// 41 - Verifique se um elemento específico está presente no array.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const elementoPresente = 11;

if(array.includes(elementoPresente)) {
  console.log(`O elemento está presente no índice ${array.indexOf(elementoPresente)}.`);
} else {
  console.log(`O elemento não está presente, portanto retorna ${array.indexOf(elementoPresente)}.`);
};
