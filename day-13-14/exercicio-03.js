// 03. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
// Modifique os elementos do array de modo que a sequência de números fique o contrário.
// Ou seja, se digitou: 1, 2, 3
// Vai aparecer: 3, 2, 1
let arr = [];

let num1 = prompt('Digite o primeiro número:');
arr.push(num1);

let num2 = prompt('Digite o segundo número:');
arr.push(num2);

let num3 = prompt('Digite o terceiro número:');
arr.push(num3);

console.log(arr);

let contrario = [arr[2], arr[1], arr[0]];

alert(`A sequência digitada foi: ${arr.join([separador = ', '])}.`);
alert(`Ao contrário é: ${contrario.join([separador = ', '])}.`);