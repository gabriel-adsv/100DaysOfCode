// 10 - Verifique se o array está vazio.

// 1º passo - Criar uma função que verifica se o array está vazio
function arrayVazio(array) {
  // 2º passo - Verificar se o array é um array e se o comprimento é 0
  if(Array.isArray(array) && array.length === 0) {
    return true; // retorna verdadeiro se estiver vazio
  } else {
    return false; // retorna falso se não estiver vazio
  };
}

// 3º passo - Criar um array
let arrayComValores = [10, 20, 30, 40, 50, 60, 70];
let arraySemValores= [];

// 4 passo - Exibir resultado dos arrays
console.log(arrayVazio(arrayComValores));
console.log(arrayVazio(arraySemValores));
 