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
			},1)
		}
	})
}

function montaSelectPrestadores() {
	var prestadoresSelect = document.getElementById("prestadores-select");
	var xhttp = new XMLHttpRequest();
	
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
	xhttp.open("GET", "https://localhost:8081/prestadores/listar", true);
	xhttp.send();
}

$(document).ready(function () {
	cadastroJs();
	montaSelectPrestadores();
})