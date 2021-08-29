/*CRIANDO ARRAYS*/

var frutas=["Uva","Banana", "Amora", "Melão"]; //var frutas = array()
console.log(`Qtd do array: ${frutas.length} fruta: ${frutas[0]}`); //retorna o cumprimento do array e a fruta do indice 0, que é uva

//concatenar array:

var frutas2 = ["Maça", "Pera", "Laranja"];

var todasAsFrutas = frutas.concat(frutas2); //concatenou as duas arrays
console.log(frutas)
console.log(todasAsFrutas);

//indexOf() Procura por um elemento específico no array e retorna sua posição

var retornoIndexOf = todasAsFrutas.indexOf("Amora");
console.log(retornoIndexOf); // Amora é 2

//join() Une todos os elementos de um array em uma string

var stringDeArray = todasAsFrutas.join();
console.log(stringDeArray);

//push() Insere um novo elemento no final do array

var outraLista = ["Bola", "Peteca"];
var novaLista = outraLista.push("Boneca", "Carro", "Balão");
console.log(novaLista); //retornou a quantidade de elementos da nova lista sem os nomes por causa do push
console.log(outraLista); //retornou a lista toda já concatenada
console.log(outraLista[3]); //retornou o elemento 3(carro) pois começa no zero

//pop() remove o ultimo elemento do array

console.log(outraLista.pop());
console.log(outraLista);

//reverse() Inverte a ordem dos elementos do array

console.log(outraLista.reverse());

//shift() Remove o primeiro elemento do array
var removerPrimeiro = ["Fusca", "Variante"];
removerPrimeiro.shift();
console.log(removerPrimeiro);

//sort() ordena os elementos de um array em ordem crescente

var alpha = ["b","z","t","a", 4, 7, 1, 9]; //não diferencia numeros maiores que 10
alpha.sort();
console.log(alpha);

//tostring() converte o array em string e retorna essa string, igual o join

//unshift() Insere um novo elemento no inicio do array;

alpha.unshift("pipoca");
console.log(alpha);
alpha.sort();
console.log(alpha);

//splice(): corta o array em um ponto ao indicar dois parametros índice e quantos elementos quer remover a partir da posição

var f=["Uva","Banana", "Amora", "Melão"]; //var frutas = array()
console.log(f.splice(1,2)) //"recortou" dois elementos a partir do 1 e os mostrou, agora f só tem uva e melão
console.log(f.splice(f,1)) //"retorna f sem o elemento 1"
console.log(f)

//array de objetos

var dados = [{nome: "Mateus"}/*0*/, {nome:"Valéria"/*1*/}] //colchete cria array e chaves objetos
//console.log(dados[0].nome)
//console.log(dados[1].nome)

function Pessoa2(nome, sobrenome, idade, doc=[]){ //aqui o doc é um array.
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {
		rg: doc[0],
		cpf: doc[1]
	}
}

var pessoa2 = new Pessoa2("Raphael","","",['22','555']);
//console.log("Nome: "+ pessoa2.nome +" "+pessoa2.doc.rg);
console.log(`Nome ${pessoa2.nome} - Rg: ${pessoa2.doc.rg} - CPF: ${pessoa2.doc.cpf}`);