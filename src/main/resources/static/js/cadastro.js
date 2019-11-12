function cadastroJs() {
	$('.register__option input').click(function () {
		if($('input:checked').val() == 'diarista'){
			$('.register__content__text__cpf').removeClass("is--active");
			$('.register__content__text__name').removeClass("is--active");
			$('.register__content__text__dtnasc').removeClass("is--active");
			$('.register__content__text__gender').removeClass("is--active");
			$('.register__content__text__email').removeClass("is--active");
			$('.register__content__text__cemail').removeClass("is--active");
			$('.register__content__text__cel').removeClass("is--active");
			$('.register__content__text__cep').removeClass("is--active");
			$('.register__content__text__rua').removeClass("is--active");
			$('.register__content__text__num').removeClass("is--active");
			$('.register__content__text__comple').removeClass("is--active");
			$('.register__content__text__bairro').removeClass("is--active");
			$('.register__content__text__city').removeClass("is--active");
			$('.register__content__text__state').removeClass("is--active");
			$('.register__content__text__pass').removeClass("is--active");
			$('.register__content__buttons').removeClass("is--active");
			setTimeout(function () {
				$('.register__content__text__cpf').addClass("is--active");
				$('.register__content__text__name').addClass("is--active");
				$('.register__content__text__dtnasc').addClass("is--active");
				$('.register__content__text__gender').addClass("is--active");
				$('.register__content__text__email').addClass("is--active");
				$('.register__content__text__cemail').addClass("is--active");
				$('.register__content__text__cel').addClass("is--active");
				$('.register__content__text__cep').addClass("is--active");
				$('.register__content__text__rua').addClass("is--active");
				$('.register__content__text__num').addClass("is--active");
				$('.register__content__text__comple').addClass("is--active");
				$('.register__content__text__bairro').addClass("is--active");
				$('.register__content__text__city').addClass("is--active");
				$('.register__content__text__state').addClass("is--active");
				$('.register__content__text__pass').addClass("is--active");
				$('.register__content__buttons').addClass("is--active");
			}, 1)
		}
		if($('input:checked').val() == 'contratante'){
			$('.register__content__text__cpf').removeClass("is--active");
			$('.register__content__text__name').removeClass("is--active");
			$('.register__content__text__dtnasc').removeClass("is--active");
			$('.register__content__text__gender').removeClass("is--active");
			$('.register__content__text__email').removeClass("is--active");
			$('.register__content__text__cemail').removeClass("is--active");
			$('.register__content__text__cel').removeClass("is--active");
			$('.register__content__text__cep').removeClass("is--active");
			$('.register__content__text__rua').removeClass("is--active");
			$('.register__content__text__num').removeClass("is--active");
			$('.register__content__text__comple').removeClass("is--active");
			$('.register__content__text__bairro').removeClass("is--active");
			$('.register__content__text__city').removeClass("is--active");
			$('.register__content__text__state').removeClass("is--active");
			$('.register__content__text__pass').removeClass("is--active");
			$('.register__content__buttons').removeClass("is--active");
			setTimeout(function() {
				$('.register__content__text__cpf').addClass("is--active");
				$('.register__content__text__name').addClass("is--active");
				$('.register__content__text__dtnasc').addClass("is--active");
				$('.register__content__text__gender').addClass("is--active");
				$('.register__content__text__email').addClass("is--active");
				$('.register__content__text__cemail').addClass("is--active");
				$('.register__content__text__cel').addClass("is--active");
				$('.register__content__text__cep').addClass("is--active");
				$('.register__content__text__rua').addClass("is--active");
				$('.register__content__text__num').addClass("is--active");
				$('.register__content__text__comple').addClass("is--active");
				$('.register__content__text__bairro').addClass("is--active");
				$('.register__content__text__city').addClass("is--active");
				$('.register__content__text__state').addClass("is--active");
				$('.register__content__text__pass').addClass("is--active");
				$('.register__content__buttons').addClass("is--active");
			},1)
		}
	})
}

function montaSelectPrestadores() {
	let prestadoresSelect = document.getElementById("prestadores-select");
	let xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let listaPrestadores = JSON.parse(this.responseText);
			
			for(prestador of listaPrestadores) {
				let elementForAdd = document.createElement("option");
				let nomeSobrenome = prestador.nome + " " + prestador.sobrenome;
				
				elementForAdd.value = nomeSobrenome;
				elementForAdd.text = nomeSobrenome;
				
				prestadoresSelect.add(elementForAdd, prestadoresSelect.options[0]);
			}
		}
	};
	xhttp.open("GET", "http://localhost:8081/prestadores/listar", true);
	xhttp.send();
}

function montaSelectContratantes() {
	let contratantesSelect = document.getElementById("contratantes-select");
	
	$.get("http://localhost:8081/contratantes/listar", function(resultado){
		let listaContratantes = resultado;
		
		for(contratante of listaContratantes) {
			let elementForAdd = document.createElement("option");
			let nomeSobrenome = contratante.nome + " " + contratante.sobrenome;
			
			elementForAdd.value = nomeSobrenome;
			elementForAdd.text = nomeSobrenome;
			
			contratantesSelect.add(elementForAdd, contratantesSelect.options[0]);
		}
	});
}

$(document).ready(function () {
	cadastroJs();
	montaSelectPrestadores();
	montaSelectContratantes();
})