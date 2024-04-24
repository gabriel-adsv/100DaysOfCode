// 35 - Verifique se o array está vazio.
function verificaVazio(array) {
  if(array.length === 0) {
    return true;
  } else {
    return false;
  }
};

const arrayDeInteiros = [1, 2, 3, 4, 5];

const arrayVazio = [];

console.log(verificaVazio(arrayDeInteiros));

console.log(verificaVazio(arrayVazio));
