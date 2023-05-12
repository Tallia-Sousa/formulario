	function buscacep(){
	let cep = document.getElementById('cep').value;
	if(cep != ""){
		let url ="https://brasilapi.com.br/api/cep/v1/" +cep;
		
		let req = new XMLHttpRequest();
		req.open("GET", url);
		req.send();

		req.onload = function() {
			if(req.status == 200 ){
				let endereco = JSON.parse(req.response);
			document.getElementById("cidade").value = endereco.city;
			document.getElementById("bairro").value = endereco.neighborhood;
			document.getElementById("estado").value = endereco.state;
			document.getElementById("logradouro").value = endereco.street;
			
			}
			else if(req.status == 404){
               alert("cep invalido");
			}
			else{
				alert("Erro aõ fazer a requisição");
			}
	}

}}
window.onload = function(){
	let text_cep = document.getElementById("cep");
	cep.addEventListener("blur", buscacep);

}