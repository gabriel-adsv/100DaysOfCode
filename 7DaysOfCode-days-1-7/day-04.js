alert('Boas vindas ao jogo do Número Secreto!');

let numeroMaximo = 10;
let numeroSorteado = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSorteado);
let numeroEscolhido = prompt('Por favor, escolha um número de 1 a 10:');
let contadorTentativas = 1;

while(isNaN(numeroEscolhido) || numeroEscolhido > 10 || numeroEscolhido == '') {
	numeroEscolhido = prompt('Valor inválido! Escolha um número de 1 a 10:');
	continue;
}

for(let tentativas = 5; tentativas > 0; tentativas--) {
	if(numeroEscolhido == numeroSorteado) {
		alert(`Muito bem! Você adivinhou o número sorteado com ${contadorTentativas} tentativa.`);
		break;
	} else {
		if(numeroEscolhido > numeroSorteado) {
			alert('O número escolhido é maior que número sorteado.');
		} else {
			alert('O número escolhido é menor que número sorteado.');
		}
	}

	contadorTentativas++;
	tentativas--;

	let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

	if(tentativas > 1) {
		numeroEscolhido = prompt(`Você tem mais ${tentativas} ${palavraTentativa}. Digite outro número:`);
		if(numeroEscolhido == numeroSorteado) {
			alert(`Muito bem! Você adivinhou o número sorteado com ${contadorTentativas} ${palavraTentativa}.`);
			break;	
		}
	} else {
		numeroEscolhido = prompt('Última tentativa. Digite outro número:');
		if(numeroEscolhido != numeroSorteado) {
			alert(`Infelizmente você não adivinhou! O número escolhido foi ${numeroSorteado}!`);
		} else {
			alert('Legal, você adivinhou o número sorteado na última tentativa!');
		}
	}		
}

alert('Fim do jogo! =)');
//55 linhas de código

// COMANDO COMMIT
// git add .
// git commit -m "comentário das alterações"
// git push -u origin main