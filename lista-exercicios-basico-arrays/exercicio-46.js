// 46 - Copie os elementos de um array para outro array.
const array = [7, 3, 9, 4, 0, 5, 6];
console.log('Array original:', array);

const arrayCopiado = [];

array.forEach((item) => {
  arrayCopiado.push(item)
});

console.log('Array copiado:', arrayCopiado);
