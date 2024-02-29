let produto = document.getElementById('lista-produtos');
let adicionar = document.querySelector('header button');
let listaDeProdutos = [];

adicionar.addEventListener('click', () => {
  console.log(produto.value);
  listaDeProdutos.push(produto.value);
  console.log(listaDeProdutos);
});