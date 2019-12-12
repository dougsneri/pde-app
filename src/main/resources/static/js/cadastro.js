function cadastroJs() {
	$('.register__option input').click(function () {
		if($('.register__option input:checked').val() == 'diarista'){
			$('.register__content__text__cpf').removeClass("is--active");
			$('.register__content__text__firstName').removeClass("is--active");
			$('.register__content__text__lastName').removeClass("is--active");
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
			$('.register__content__text__job').removeClass("is--active");
			$('.register__content__text__pass').removeClass("is--active");
			$('.register__content__buttons').removeClass("is--active");
			setTimeout(function () {
				$('.register__content__text__cpf').addClass("is--active");
				$('.register__content__text__firstName').addClass("is--active");
				$('.register__content__text__lastName').addClass("is--active");
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
				$('.register__content__text__job').addClass("is--active");
				$('.register__content__text__pass').addClass("is--active");
				$('.register__content__buttons').addClass("is--active");
			}, 1)
		}
		if($('.register__option input:checked').val() == 'contratante'){
			$('.register__content__text__cpf').removeClass("is--active");
			$('.register__content__text__firstName').removeClass("is--active");
			$('.register__content__text__lastName').removeClass("is--active");
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
			$('.register__content__text__job').removeClass("is--active");
			$('.register__content__text__pass').removeClass("is--active");
			$('.register__content__buttons').removeClass("is--active");
			setTimeout(function() {
				$('.register__content__text__cpf').addClass("is--active");
				$('.register__content__text__firstName').addClass("is--active");
				$('.register__content__text__lastName').addClass("is--active");
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

function adicionaContratado() {
	$('.register__buttons__add').click(function () {
		if($('.register__option input:checked').val() == 'diarista'){
			var _cpf = $('.register__content__text__cpf.is--active input').val().replace(/[\.-]/g, "");
			console.log(_cpf);
			var _nome = $('.register__content__text__firstName.is--active input').val();
			console.log(_nome);
			var _sobrenome = $('.register__content__text__lastName.is--active input').val();
			console.log(_sobrenome);
			var _data = $('.register__content__text__dtnasc.is--active input').val().split('/').reverse().join('-');
			console.log(_data);
			var _email = $('.register__content__text__email.is--active input').val();
			console.log(_email);
			var _cep = $('.register__content__text__cep.is--active input').val().replace(/[\.-]/g, "");
			console.log(_cep);
			var _rua = $('.register__content__text__rua.is--active input').val();
			console.log(_rua);
			var _numero = $('.register__content__text__num.is--active input').val();
			console.log(_numero);
			var _complemento = $('.register__content__text__comple.is--active input').val();
			console.log(_complemento);
			var _bairro = $('.register__content__text__bairro.is--active input').val();
			console.log(_bairro);
			var _cidade = $('.register__content__text__city.is--active input').val();
			console.log(_cidade);
			var _estado = $('.register__content__text__state.is--active input').val();
			console.log(_estado);
			var _celular = $('.register__content__text__cel.is--active input').val();
			console.log(_celular);
			var _genero = $('.register__gender label input:checked').val()
			console.log(_genero);
			var _senha = $('.register__content__text__pass.is--active input').val();
			console.log(_senha);
			$.ajax({
				type: "POST",
				url: 'https://guarded-basin-71739.herokuapp.com/prestadores/adicionar',
				headers: {
					'Content-Type':'application/json',
					'Accept': 'application/json'
				},
				data : JSON.stringify({ 
					"cpf": _cpf, 
					"nome": _nome, 
					"sobrenome": _sobrenome, 
					"data_nascimento": _data, 
					"ddd1": "11", "telefone1": _celular, 
					"ddd2": "11", "telefone2": "33445566", 
					"email": _email, 
					"status": true, "genero": _genero, 
					"senha": _senha, 
					"endereco": { 
						"cep": _cep, 
						"rua": _rua, 
						"numero": _numero, 
						"complemento": "casa 4", 
						"bairro": _bairro, 
						"cidade": _cidade, 
						"estado": _estado 
					} 
				}),
			}).done(function(msg){
				console.log(msg);
				console.log("Foi");
				alert('Usuário cadastrado com sucesso!');
				console.log(msg.data);
			}).fail(function (msg) {
				console.log(msg);
				console.log("Não foi");
			});
		}
	})
}

function adicionaContratante() {
	$('.register__buttons__add').click(function () {
		if($('.register__option input:checked').val() == 'contratante'){
			var _cpf = $('.register__content__text__cpf.is--active input').val().replace(/[\.-]/g, "");
			console.log(_cpf);
			var _nome = $('.register__content__text__firstName.is--active input').val();
			console.log(_nome);
			var _sobrenome = $('.register__content__text__lastName.is--active input').val();
			console.log(_sobrenome);
			var _data = $('.register__content__text__dtnasc.is--active input').val().split('/').reverse().join('-');
			console.log(_data);
			var _email = $('.register__content__text__email.is--active input').val();
			console.log(_email);
			var _cep = $('.register__content__text__cep.is--active input').val().replace(/[\.-]/g, "");
			console.log(_cep);
			var _rua = $('.register__content__text__rua.is--active input').val();
			console.log(_rua);
			var _numero = $('.register__content__text__num.is--active input').val();
			console.log(_numero);
			var _complemento = $('.register__content__text__comple.is--active input').val();
			console.log(_complemento);
			var _bairro = $('.register__content__text__bairro.is--active input').val();
			console.log(_bairro);
			var _cidade = $('.register__content__text__city.is--active input').val();
			console.log(_cidade);
			var _estado = $('.register__content__text__state.is--active input').val();
			console.log(_estado);
			var _celular = $('.register__content__text__cel.is--active input').val();
			console.log(_celular);
			var _genero = $('.register__gender label input:checked').val()
			console.log(_genero);
			var _senha = $('.register__content__text__pass.is--active input').val();
			console.log(_senha);
			$.ajax({
				type: "POST",
				url: 'https://guarded-basin-71739.herokuapp.com/contratantes/adicionar',
				headers: {
					'Content-Type':'application/json',
					'Accept': 'application/json'
				},
				data : JSON.stringify({ 
					"cpf": _cpf, 
					"nome": _nome, 
					"sobrenome": _sobrenome, 
					"data_nascimento": _data, 
					"ddd1": "11", "telefone1": _celular, 
					"ddd2": "11", "telefone2": "33445566", 
					"email": _email, 
					"status": true, "genero": _genero, 
					"senha": _senha, 
					"endereco": { 
						"cep": _cep, 
						"rua": _rua, 
						"numero": _numero, 
						"complemento": "casa 4", 
						"bairro": _bairro, 
						"cidade": _cidade, 
						"estado": _estado 
					} 
				}),
			}).done(function(msg){
				console.log(msg);
				console.log("Foi");
				alert('Usuário cadastrado com sucesso!');
				console.log(msg.data);
			}).fail(function (msg) {
				console.log(msg);
				console.log("Não foi");
			});
		}
	})
}

function exemploPost() {
	$.ajax({
		url : "http://localhost:8081/prestadores/adicionar",
		type : 'POST',
		data : JSON.stringify({ "cpf": "438.951.858-52", "nome": "Douglas", "sobrenome": "Gonçalves", "data_nascimento": "1995-09-22", "ddd1": "11", "telefone1": "970781390", "ddd2": "11", "telefone2": "33445566", "email": "laarissaa.goncalves@gmail.com", "status": true, "genero": "M", "senha": "senha123", "endereco": { "cep": "06149-260", "rua": "Rua Mário Quintana", "numero": "515", "complemento": "casa 4", "bairro": "Recanto das Rosas", "cidade": "Osasco", "estado": "São Paulo" } }),
		beforeSend : function(xhrObj) {
			xhrObj.setRequestHeader("Content-Type","application/json");
			xhrObj.setRequestHeader("Accept","application/json");
		}
	})
	.done(function(msg){
		console.log(msg.data);
	})
	.fail(function(jqXHR, textStatus, msg){
		var errorsList = jqXHR.responseJSON.errors;
		for(error of errorsList) {
			console.log("Erro: " + error);
		}
	});
}

$(document).ready(function () {
	cadastroJs();
	adicionaContratado();
	adicionaContratante();
})