// DESAFIO 100 DIAS DE CÓDIGO - DIA 2/100 
// Desenvolva um programa que pede para o usuário responder 3 perguntas:

// 1º passo: Qual o seu nome?
const nome = prompt('Qual o seu nome');

// 2º passo: Quantos anos você tem?
const idade = prompt('Qual a sua idade?');

// 3º passo: Qual linguagem de programação você está estudando?
const stack = prompt('Qual linguagem de programação você está estudando?');

// 4º passo: No final, o sistema vai exibir uma mensagem contendo os dados que o programa guardou:
const mensagem = `Olá ${nome}, você tem ${idade} anos e está aprendendo ${stack}!`;

alert(mensagem);

// 5º passo: Depois de exibir a mensagem anterior, o programa deve perguntar:
let novaPergunta = prompt(`Você gosta de estudar ${stack}? \n Responda com o número 1 para SIM ou 2 para NÃO.`);

let resposta = parseInt(novaPergunta);

while (resposta != 1 && resposta != 2) {
	novaPergunta = prompt('Por favor, responda com 1 para SIM ou 2 para NÃO.');
	resposta = parseInt(novaPergunta);
}

// 6º passo: Dependendo da resposta, ele deve mostrar uma das seguintes mensagens:
if (resposta === 1) {
	alert('Muito bom! Continue estudando e você terá muito sucesso.');
} else {
	alert('Ahh que pena... Já tentou aprender outras linguagens?');
}
