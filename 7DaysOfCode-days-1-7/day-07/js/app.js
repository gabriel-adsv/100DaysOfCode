// let lastCalc = document.getElementById('last-calc');

// let number = document.querySelectorAll('#number');
// // let output = document.getElementById('output');
// // let cleanDisplay = document.getElementById('Ce');
// // let exclude = document.getElementById('button-c');

// lastCalc.innerHTML = "0";
// output.innerHTML = "0";

// cleanDisplay.addEventListener('click', () => {
//   lastCalc.innerHTML = "0";
//   output.innerHTML = "0";
// });


// exclude.addEventListener('click', () => {
//   output.innerHTML;
//   number = output.substring(1);
//   output.innerHTML = number;
//   lastCalc.innerHTML = output;
// });

function colocarAlgo(num){
  const numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num;
};

function limparDisplay() {
  document.getElementById('resultado').innerHTML = "";
};

function calcular(){
  const resultado = document.getElementById('resultado').innerHTML;
  if(resultado){
      document.getElementById('last-calc').innerHTML = resultado;
      document.getElementById('resultado').innerHTML = eval(resultado);
  } else {
      document.getElementById('resultado').innerHTML = "Coloque algo";
  }
};