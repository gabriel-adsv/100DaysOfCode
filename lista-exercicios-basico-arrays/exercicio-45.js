// 45 - Ordene os elementos do array em ordem decrescente.
const array = [7, 3, 9, 4, 0, 5, 6];
console.log('Array normal:', array);

const ordemDecrescente = array.sort((a, b) => b - a);

console.log('Array em ordem descrescente:', ordemDecrescente);
