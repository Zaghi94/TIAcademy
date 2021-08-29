window.onload=function(){
//produtos
	(()=>{

		let mostrarProdutosCliente = document.querySelector("#content-produtos > ul#produtos") //> fez a referenci da div produtos dentro de content produtos

		for(let idx in produtos){
			mostrarProdutosCliente.innerHTML += `<li class=itemProduto data-preco=${produtos[idx].prodPreco}>${produtos[idx].prodDesc}</li>`
		}


	})(produtos)

//compra
var totalPedido =0;



const cestadoCliente = document.querySelector("ul#cestaDoCliente");

const mostraTotalCompra = document.querySelector("#mostraTotalCompra");

const armazenaItens=[];//linha vazia

const itemProduto = document.querySelectorAll("#produtos > li.itemProduto");

itemProduto.forEach((item)=>{
	item.addEventListener('click',()=>{
		li = document.createElement("li");
		if(armazenaItens.indexOf(item.textContent) == -1){ //-1 significa que o elemento não existe na lista
			armazenaItens.push(item.textContent);
			cestadoCliente.appendChild(li).textContent = item.textContent;
			li.setAttribute("data-preco", (item.dataset.preco));
			totalPedido += Number(item.dataset.preco);
			mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR',{style: 'currency', currency:"BRL"})
		}else{
			alert(`O item "${item.textContent}" já está na lista`)
		}
	})
})

const itemCesta = document.querySelectorAll("#cestaDoCliente")
	itemCesta.forEach(listaDaCesta=>{
		listaDaCesta.addEventListener('click',(prod)=>{
			if (confirm(`Voce tem certeza que deseja remover o item "${prod.target.textContent}" da cesta?`)) {
				cestaDoCliente.removeChild(prod.target);
				armazenaItens.splice(armazenaItens.indexOf(prod.target.textContent),1);
				totalPedido -= Number(prod.target.dataset.preco);
				mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
			} else {

			}

		})
	})
	
}