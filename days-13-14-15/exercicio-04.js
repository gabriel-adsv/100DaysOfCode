// Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array.
// Depois, o usuário vai preenchendo elemento por elemento do vetor.
// Ao final, exiba o array e o array ao contrário (generalização do script anterior).

let arr = [];
let vezesDoUsuario = prompt('Quantos números você quer digitar?');
let contador = 1;
 
for(let i = 0; i < Number(vezesDoUsuario); i++) {
  let numero = prompt(`Digite o ${contador}º número:`);
  arr.push(numero);
  contador++;
}

alert(`Você digitou os valores na ordem: ${arr.join(separador = [', '])}`);
alert(`E a ordem inversa é: ${arr.reverse().join(separador = [', '])}`);
