let fruits = [];
let dairy = [];
let candy = [];
let frozenFoods = [];
let category = [
	'frutas', 
	'laticinios',
	'doces',
	'congelados',
];

let food = "";
let foodCategory;

let otherFood = "não";
let addMore = "sim";  // valor inicial como "sim", porque a primeira vez sempre vai entrar no while

while(addMore != "não") {
  addMore = prompt("Deseja adicionar um alimento na lista de compras? Responda 'sim' ou 'não'.").toLowerCase();
	break
}

while (addMore != "sim" && addMore != "não") {  //enquanto o texto lido for diferente de "sim" e de "não", exibir que não foi reconhecido e perguntar novamente
	alert("Resposta inválida! Digite 'sim' ou 'não'.");
  addMore = prompt("Deseja adicionar um alimento na lista de compras? Responda 'sim' ou 'não'.");
}

do {
	food = prompt("Qual alimento você deseja inserir?");
	foodCategory = prompt("Qual a categoria desse alimento: frutas, laticínios, doces ou congelados?");

	while(foodCategory != category[0] && foodCategory != category[1] && foodCategory != category[2] && foodCategory != category[3]) {
		alert('Por favor, digite uma categoria válida!');
		foodCategory = prompt("Qual a categoria desse alimento: frutas, laticínios, doces ou congelados?");
	}

	if(foodCategory === category[0]) {
		fruits.push(food);
	} else if (foodCategory === category[1]){
		dairy.push(food);
	} else if (foodCategory === category[2]){
		candy.push(food);
	} else {
		frozenFoods.push(food);
	} 
	otherFood = prompt('Deseja inserir outro alimento?');
} while(otherFood != "não");

alert(`Lista de compras:\n  Frutas: ${fruits.join([separador = ', '])}\n  Laticínios: ${dairy.join([separador = ', '])}\n  Doces: ${candy.join([separador = ', '])}\n  Congelados: ${frozenFoods.join([separador = ', '])}`);


