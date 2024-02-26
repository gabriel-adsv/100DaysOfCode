let numeroSorteado = 0;

while(numeroSorteado === 0) {
	numeroSorteado = ((Math.random() * 100) / 10).toFixed();
	continue;
}

console.log(numeroSorteado);

alert('Boas vindas ao jogo do Número Secreto!');

let numeroDoUsuario = prompt('Por favor, escolha um número de 1 a 10:');
let chances = 1;

while(isNaN(numeroDoUsuario) || numeroDoUsuario > 10 || numeroDoUsuario == '') {
	alert('Valor inválido! Digite um número entre 1 e 10.');
	numeroDoUsuario = prompt('Por favor, escolha um número de 1 a 10:');
	continue;
}

for(let tentativas = 5; tentativas > 0; tentativas--) {
	if(numeroDoUsuario != numeroSorteado) {
		tentativas--;
		chances++;
		if(numeroSorteado > numeroDoUsuario) {
			alert(`Você errou! O número sorteado é maior que ${numeroDoUsuario}.`);
		} else {
			alert(`Você errou! O número sorteado é menor que ${numeroDoUsuario}.`);
		}

		if(tentativas > 1) {
			alert(`Tente novamente! Você tem mais ${tentativas} tentativas.`);
			numeroDoUsuario = prompt('Digite outro número:');
		} else {
			alert(`Tente novamente! Você tem 1 tentativa.`);
			numeroDoUsuario = prompt('Digite outro número:');
			if(numeroDoUsuario != numeroSorteado) {
				alert(`Infelizmente você não acertou! O número escolhido foi ${numeroSorteado}!`);
				alert('Fim do jogo! =)');
			}
			break;
		}
	} else {
		if(chances > 1) {
			alert(`Parábens, você adivinhou o número sorteado em ${chances} tentivas!`);
			break;
		} else {
			alert(`Parábens, você adivinhou o número sorteado em 1 tentativa!`);
			break;
		}
	}
}

alert('Fim do jogo! =)');


// COMANDO COMMIT
// git add .
// git commit -m "comentário das alterações"
// git push -u origin main