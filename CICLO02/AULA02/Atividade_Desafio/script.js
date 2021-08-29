

var nome = prompt("Digite o seu nome:");

var numero = (prompt(`${nome}, digite um número: `));





if(!typeof(numero)){
	alert("Você enviou um número!")
} else{
	alert("Você enviou uma string!")
	alert("A string séra convertida para número!")
	numero = parseFloat(numero);
}

var interna = 20;

var compare = (interna == numero);

var soma = interna + numero;

var sub = numero - interna;

var resto = numero % interna;

var quad = Math.pow(numero, 2);

document.write("Seja bem-vindo(a)..: " + nome + "</br>");
document.write("Você digitou o número..: (" + numero + ");</br>");
document.write("O retorno da comparação booleana é..: " + compare + ";</br>");
document.write("A soma dos valores é..: " + soma + ";</br>");
document.write("A subtração dos valores é..: " + sub + ";</br>");
document.write("O resto da divisão é de..: " + resto + ";</br>");
document.write("O quadrado do número digitado é..: " + quad + ".");



	var entrada = prompt("Escolha uma fruta entre: Manga, Banana, Laranja:");

	var fruta = entrada.toUpperCase();

	switch(fruta){
		case "MANGA":
		alert("Você escolheu Manga!");
		break;

		case "BANANA":
		alert("Você escolheu Banana!");
		break;

		case "LARANJA":
		alert("Você escolheu Laranja!");
		break;

		default:
		alert("A fruta que você escolheu não está na lista!");
		break;
	}


