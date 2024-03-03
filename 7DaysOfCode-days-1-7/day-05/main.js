const inputFieldProduct = document.getElementById("product-list");
const addButton = document.querySelector("header button");
const itemList = document.querySelector(".item ul");
const noItemMessage = document.querySelector(".noItem");

// Array para armazenar os itens adicionados
let itemsArray = [];

// Mostra a mensagem "nenhum item adicionado" quando a página é carregada
checkNoItem();

// Adiciona um ouvinte de eventos ao botão de adicionar para adicionar um novo item à lista e ao array
addButton.addEventListener("click", () => {
	addItem();
});

// Função para atualizar a exibição da lista de itens
function updateItemList() {
	// Limpa a lista atual
	itemList.innerHTML = "";

	// Adiciona cada item do array à lista
	itemsArray.forEach(function(itemName) {
	const newItem = document.createElement("li");
	newItem.textContent = itemName;
	newItem.classList.add("item");

	const removeButton = document.createElement("button");
	removeButton.textContent = "Remover";
	removeButton.classList.add("remove-button");
	removeButton.addEventListener("click", () => {
		// Remove o item do array quando o botão de remoção é clicado
		const index = itemsArray.indexOf(itemName);
		if (index !== -1) {
			itemsArray.splice(index, 1);
		}
		updateItemList();
		checkNoItem();
		});

		newItem.appendChild(removeButton);
		itemList.appendChild(newItem);
	});

	checkNoItem();
}

// Função para mostrar a mensagem "nenhum item adicionado" se a lista estiver vazia
function checkNoItem() {
	if (itemsArray.length === 0) {
		noItemMessage.style.display = "flex";
		itemList.style.display = "none"; // Esconde a lista quando não há itens
	} else {
		noItemMessage.style.display = "none";
		itemList.style.display = "block"; // Exibe a lista quando há itens
	}
}

// Função para adicionar item na lista
function addItem() {
	const itemName = inputFieldProduct.value.trim();
	if (itemName !== "") {
		itemsArray.push(itemName);
		updateItemList();
		inputFieldProduct.value = "";
		noItemMessage.style.display = "none";
	}
}

