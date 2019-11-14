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

function adicionaContratado() {
	var _cpf = $('.register__content__text__cpf.is--active input').val();
	console.log(_cpf);
	var _nome = $('.register__content__text__name.is--active input').val();
	console.log(_nome);
	var _data = $('.register__content__text__dtnasc.is--active input').val();
	console.log(_data);
	var _email = $('.register__content__text__email.is--active input').val();
	console.log(_email);
	var _cep = $('.register__content__text__cep.is--active input').val();
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
	$('.register__buttons__add').click(function () {
		$.ajax({
		    type: 'POST',
		    headers: {
		        'Content-Type':'application/json'
		    },
		    url: 'http://localhost:8081/prestadores/adicionar',
		    data: {
		        cpf: _cpf,
		        nome: _nome,
		        sobrenome: 'Godoy',
		        data_nascimento: _data,
		        email: _email,
		        cep: _cep,
		        rua: _rua,
		        numero: _numero,
		        complemento: _complemento,
		        bairro: _bairro,
		        cidade: _cidade,
		        estado: _estado,
		        ddd1: '11',
		        telefone1: _celular,
		        ddd2: '11',
		        telefone2: '99999999',
		        genero: _genero,
		        senha: _senha
		    }
		}).done(function (data) {
		    console.log(data); 
		    console.log('Boaaaa Caralhooo!'); 
		}).error(function (data) {
		    console.log(data);
		    console.log('Deu ruimmmmm Muleque!'); 
		});
	})
}

function axios() {
	
	$('.register__buttons__add').click(function () {
		var _cpf = $('.register__content__text__cpf.is--active input').val();
		console.log(_cpf);
		var _nome = $('.register__content__text__name.is--active input').val();
		console.log(_nome);
		var _data = $('.register__content__text__dtnasc.is--active input').val();
		console.log(_data);
		var _email = $('.register__content__text__email.is--active input').val();
		console.log(_email);
		var _cep = $('.register__content__text__cep.is--active input').val();
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
		axios({
			method: "POST",
			url: 'http://localhost:8081/prestadores/adicionar',
			headers: {
		        'Content-Type':'application/json'
		    },
			data: {
				cpf: _cpf,
		        nome: _nome,
		        sobrenome: 'Godoy',
		        data_nascimento: _data,
		        email: _email,
		        cep: _cep,
		        rua: _rua,
		        numero: _numero,
		        complemento: _complemento,
		        bairro: _bairro,
		        cidade: _cidade,
		        estado: _estado,
		        ddd1: '11',
		        telefone1: _celular,
		        ddd2: '11',
		        telefone2: '99999999',
		        genero: _genero,
		        senha: _senha
			}
		}).then(function (response) {
			   console.log(response);
			   console.log("Foi");
			 })
			 .catch(function (error) {
			   console.log(error);
			   console.log("Não foi");
			 });
			 
	})
}

$(document).ready(function () {
	cadastroJs();
	//adicionaContratado();
	axios();
	//montaSelectPrestadores();
	//montaSelectContratantes();
})