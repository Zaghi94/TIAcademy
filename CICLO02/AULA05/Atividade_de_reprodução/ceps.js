window.onload = function(){
	//alert("zdfkjgadfg")

	



	const btnBuscaCep = document.querySelector("#btnBuscaCep");
	const cxCep = document.querySelector(".cxCep");

	const dadosCep = async function(cepUrl){

		var url = `https://viacep.com.br/ws/${cepUrl}/json/`;
		var consultaCep = await fetch(url);
		var dadosCep    = await consultaCep.json();

		//console.log(consultaCep);
		for(var campos in dadosCep){
			console.log(campos);
			if(document.querySelector("#"+campos)){
			document.querySelector("#"+campos).value = dadosCep[campos]
			}
		}


	}


	btnBuscaCep.addEventListener('click', ()=>{

		let cep = cxCep.value; //87080-440
		dadosCep(cep)


	})
}