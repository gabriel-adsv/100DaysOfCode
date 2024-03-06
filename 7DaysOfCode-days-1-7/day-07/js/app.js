let lastCalc = document.getElementById('last-calc');
let output = document.getElementById('output');
let cleanDisplay = document.getElementById('Ce');

lastCalc.innerHTML = "0";
output.innerHTML = "0";

cleanDisplay.addEventListener('click', () => {
  lastCalc.innerHTML = " ";
  output.innerHTML = " ";
});
