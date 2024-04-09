// 15 - Encontre o índice de um elemento específico no array.

const array = ['A', 'B', 'C', 'D', 'E', 'F'];

for(let i = 0; i < array.length; i++) {
  console.log(array.indexOf(array[i]));
};

// OBS: Neste caso usei um loop "for" para iterar sobre todo o array e retornar o índice de todos os elementos e não de um único elemento.