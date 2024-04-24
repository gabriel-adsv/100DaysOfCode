// 50 - Substitua o elemento na posição 4 do array por um novo valor.
const array = [7, 3, 9, 4, 0, 5, 6];
console.log('Array original:', array);

array.splice(3, 1, 'novo valor');
console.log('Array com elemento removido:', array);