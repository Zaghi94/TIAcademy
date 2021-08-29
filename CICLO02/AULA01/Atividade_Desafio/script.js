var nome = prompt("Digite o seu nome:");

var numero = parseInt(prompt(`${nome}, digite um número: `));

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