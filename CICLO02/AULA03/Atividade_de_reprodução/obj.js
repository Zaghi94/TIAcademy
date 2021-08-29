/* OBJETOS */


//essa função define os parâmertros do objeto
function Pessoa(nome, sobrenome, idade){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
}

//essas váriáveis são os objetos que contém os parâmetros daquela função;
var ps1 = new Pessoa("Mateus", "Zaghi", 26); //construtor do objeto pessoa
console.log("Nome " + ps1.nome + " " + ps1.sobrenome +" Idade: " +ps1.idade);

var ps2 = new Pessoa("Maria");
console.log("Pessoa 2 - Nome: "+ps2.nome);

/*********************************************************************************************/
//essa é outra forma de criar um objeto
var objPessoa = { rg: '7767', cpf: '125.654.978-12'}
console.log("RG: " +objPessoa.rg);

/*********************************************************************************************/
function Pessoa2(nome, sobrenome, idade){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {
		rg: '14.735.886-8',
		cpf: "123.156.789-12"
	}
}

var pessoa2 = new Pessoa2("Raphael");
//console.log("Nome: "+ pessoa2.nome +" "+pessoa2.doc.rg);
console.log(`Nome ${pessoa2.nome} - Rg: ${pessoa2.doc.rg}`); //outro jeito de imprimir os elementos (acento grave)
/*********************************************************************************************/
