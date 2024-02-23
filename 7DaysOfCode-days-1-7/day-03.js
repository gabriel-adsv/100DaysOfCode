// DESAFIO 100 DIAS DE CÓDIGO - CONTROLES DE FLUXO (DIA 3/100) 

// 1º passo - Crie os destinos possíveis de um programa, em que o usuário consiga escolher
const areaEscolhida = prompt("Olá, futuro dev! Para qual área da programação você deseja seguir?");

// 2º passo - Se quer seguir para área de Front-end ou para a área de Back-end.
if(areaEscolhida == "Front-end") {
	// 3º passo - Caso esteja na área de Front-end, se quer aprender React ou Vue. 
	const areaFrontEnd = prompt("Você quer aprender React ou Vue?");
	alert(`Legal! ${areaFrontEnd} é uma ótima escolha.`);
} else if(areaEscolhida == 'Back-end') {
	// 4º passo - Caso esteja na área de Back-end, poderá aprender C# ou Java.
	const areaBackEnd = prompt("Você quer aprender C# ou Java?");
	alert(`Legal! ${areaBackEnd} é uma ótima escolha.`);
} else {
	alert("Por favor, digite 'Front-end' ou 'Back-end'.");
}

// 5º passo - Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou para se tornar Full-stack.
const areaEscolhidaOuFullStack = prompt("Você quer se especializar na área escolhida ou se tornar Full-stack?");
alert(`Muito bem! Você escolheu ${areaEscolhidaOuFullStack}.`);

// 6º passo - Pergunte quais as tecnologias a pessoa gostaria de se especializar ou conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto continuar respondendo ok para a pergunta, continue apresentando o prompt.
const tecnologias = [];
let continuar = true;

while(continuar) {
	const tecnologia = prompt("Quais tecnologias você gostaria de se especializar ou conhecer?");
	tecnologias.push(tecnologia);
	const resposta = prompt("Deseja acrescentar mais alguma tecnologia? \n Digite 'sim' para continuar ou 'não' para finalizar.");
	if(resposta !== "sim") {
		continuar = false
	}
}

// 7º passo - Depois apresente uma mensagem comentando algo sobre as linguagens inseridas. É essencial que possa inserir quantas tecnologias quiser na lista.
alert(`Você escolheu: ${tecnologias.join(", ")}.`);
alert(`Boa sorte na sua jornada de Desenvolvedor ${areaEscolhidaOuFullStack}! =)`);
