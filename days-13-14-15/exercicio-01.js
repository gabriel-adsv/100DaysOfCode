// 01. Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o método sort.
let arr = [230, 208]

function ordemCrescente(num1, num2) {
  if(num1 > num2) {
    arr[0] = num2;
    arr[1] = num1;
    console.log(arr[0], arr[1]);
  } else {
    console.log(arr);
  } 
}

ordemCrescente(arr[0], arr[1]);
