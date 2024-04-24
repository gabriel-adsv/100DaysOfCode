// 44 - Ordene os elementos do array em ordem crescente.
const array = [7, 3, 9, 4, 0, 5, 6];
console.log('Array normal:', array);

const ordemCrescente = array.sort((a, b) => a - b);

console.log('Array ordenado:', ordemCrescente);
