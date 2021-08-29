window.onload = function(){

//alert("alerta");
//const btn1 = document.getElementById("btn1"); //cptura o click
//console.log(btn1) exibiu os dados do botão
//function msg(){
//	alert("olá");
//}
/*
const btn1 = document.querySelector(".btn-click"); //no querySelector foi necessário usar a classe do botão, mas o type tbm serve
const legP = document.querySelector(".legenda");
const cxTexto = document.querySelector("#texto")
btn1.addEventListener('click', ()=>{
	//alert("olá");
	//legP.innerHTML ="Manipulando o DOM";
	//essa função envia uma string para o elemento, no caso p
	legP.innerHTML += cxTexto.value; //captura o que foi digitado na cxa de texto
})

legP.addEventListener('click',()=>{

	legP.innerHTML ='';

})

/*
legP.addEventListener('mouseout',()=>{

	alert("não passe o mouse aqui!!!")

})

//COMO TROCAR O TIPO DO ELEMENTO

const trocaSenha = document.querySelector("#verSenha");
const cxSenha = document.querySelector("#senha");

	trocaSenha.addEventListener('click',()=>{
		//getAttribute()
		//setAttribute()
		if(cxSenha.getAttribute('type') =='password'){
			cxSenha.setAttribute('type','text')
		}else {
			cxSenha.setAttribute('type','password')
		}
	})

	//alterar o background 

	const cxTrocabg = document.querySelector("#cxTbg");

		cxTrocabg.addEventListener('blur',()=>{
			cxTrocabg.setAttribute('class','corBG')
		})
*/
//somar valores cx input text

	const valor1 = document.querySelector("#v1");
	const valor2 = document.querySelector("#v2");
	const btnSomar = document.querySelector("#soma");
	const spResultado = document.querySelector("#resultado");

		btnSomar.addEventListener('click',()=>{
				var cx1= valor1.value;
				var cx2= valor2.value;
				var r = Number(cx1) + Number(cx2);
				spResultado.innerHTML = r;



		})
		/*
		//evento modal
		const btnModal = document.querySelector("#chamarModal");
		const janelaM = document.querySelector("#janModal");
		btnModal.addEventListener('click', ()=>{
			janelaM.setAttribute('class', 'modal');
		});

		janelaM.addEventListener('click',()=>{

			janelaM.classList.remove('modal');

		})
*/
}
