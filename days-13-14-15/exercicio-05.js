// Faça uma função que recebe um array de qualquer tamanho e ordene seus elementos na ordem crescente. Faça sua função na mão, não invoque nenhum método de sorting. Dica: pesquise sobre bubble sort.

let arr = [];
let vezesDoUsuario = prompt('Quantos números você quer digitar?');
let numero;
let numeroConvertido;
let contador = 1;

for(let c = 0; c < vezesDoUsuario; c++) {
  numero = prompt(`Digite o ${contador}º número:`);

  if(numero === null) {
    numero = 0;
  }

  numeroConvertido = Number(numero);

  arr.push(numeroConvertido);
  contador++;
}

console.log(arr)

function bubbleSort(ordem) {
  let copia; //salva o dado que será trocado
  let troca; //estrutura de controle para o loop do...while, sempre que houver uma troca muda para 1
  do {
    troca = 0;
    for(let i = 0; i < ordem.length - 1; i++) {
      if(ordem[i] > ordem[i + 1]) {
        copia = ordem[i];
        ordem[i] = ordem[i + 1];
        ordem[i + 1] = copia;
        troca = 1;
      }
    }
  } while(troca);
  console.log(ordem)
}

bubbleSort(arr);