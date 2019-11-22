<!DOCTYPE html>

<html>
<head>
<meta name="viewport"
	content="initial-scale=1, maximum-scale=1, user-scalable=no" />
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/css/reset.css" />
<link rel="stylesheet" type="text/css" href="/css/cadastro.css" />
<link rel="stylesheet" type="text/css" href="/css/home.css" />
<title>Cadastro</title>
</head>
<body>
	<main> <header class="header">
		<section class="title">
			<a href="/"> <img src="/img/Logo1.png" />
			</a>
		</section>
		<section class="subtitle">
			<h2>Empresa especializada em serviços domésticos</h2>
		</section>
		<section class="header__right">
			<a class="js--entrar">
				<p>Entrar</p>
			</a> <a class="header__right_trabalhe" href="./cadastro.jsp">Trabalhe
				conosco</a>
		</section>
	</header>

	<div class="register">
		<h2 class="register__title">Conte-nos sobre você!</h2>
		<div class="register__option">
			<label for="type"> <input type="radio" value="diarista"
				name="type" /> Diarista <input type="radio" value="contratante"
				name="type" /> Contratante
			</label>
		</div>
		<div class="register__content">
			<div class="register__content__text__cpf">
				<p>CPF</p>
				<input placeholder="CPF" maxlength="14" OnKeyPress="formatar('###.###.###-##', this)"/>
			</div>
			<div class="register__content__text__firstName">
				<p>Nome</p>
				<input placeholder="Nome" />
			</div>
			<div class="register__content__text__lastName">
				<p>Sobrenome</p>
				<input placeholder="Sobrenome" />
			</div>
			<div class="register__content__text__dtnasc">
				<p>Data de nascimento</p>
				<input placeholder="Data de Nascimento" maxlength="10" OnKeyPress="formatar('##/##/####', this)"/>
			</div>
			<div class="register__content__text__email">
				<p>E-mail</p>
				<input placeholder="E-mail" />
			</div>
			<div class="register__content__text__cemail">
				<p>Confirme seu e-mail</p>
				<input placeholder="Confirme seu e-mail" />
			</div>
			<div class="register__content__text__cep">
				<p>CEP</p>
				<input placeholder="CEP" maxlength="9" OnKeyPress="formatar('#####-###', this)"/>
			</div>
			<div class="register__content__text__rua">
				<p>Nome da rua</p>
				<input placeholder="Rua" />
			</div>
			<div class="register__content__text__num">
				<p>Número</p>
				<input placeholder="Número" />
			</div>
			<div class="register__content__text__comple">
				<p>Complemento (opcional)</p>
				<input placeholder="Complemento" />
			</div>
			<div class="register__content__text__bairro">
				<p>Bairro</p>
				<input placeholder="Bairro" />
			</div>
			<div class="register__content__text__city">
				<p>Cidade</p>
				<input placeholder="Cidade" />
			</div>
			<div class="register__content__text__state">
				<p>Estado</p>
				<input placeholder="Estado" />
			</div>
			<div class="register__content__text__cel">
				<p>Celular</p>
				<input placeholder="Celular" maxlength="10" OnKeyPress="formatar('#####-####', this)"/>
			</div>
			<div class="register__content__text__gender">
				<div class="register__gender">
					<p>Gênero</p>
					<label for="type"> <input type="radio" value="F"
						name="gender" /> Feminino <input type="radio" value="M"
						name="gender" /> Masculino
					</label>
				</div>
			</div>
			<div class="register__content__text__job">
				<div class="register__job">
					<p>Serviços prestados</p>
					<label for="type"> <input type="checkbox" value=""
						name="service" /> Limpeza Geral <input type="checkbox" value=""
						name="service" /> Limpeza Doméstica <input type="checkbox" value=""
						name="service" /> Limpeza Empresarial <input type="checkbox" value=""
						name="service" /> Faxina <input type="checkbox" value=""
						name="service" /> Passadeira
					</label>
				</div>
			</div>
			<div class="register__content__text__pass">
				<p>Senha</p>
				<input placeholder="Senha" />
			</div>
			<div class="register__content__buttons">
				<a href="/">Voltar</a>
				<a class="register__buttons__add">Finalizar cadastro</a>
			</div>
		</div>
	</div>

	<section>
		<div class="text-seo">
			<div class="text-seo-title">
				<span class="text-seo-title-left"></span>
				<h1>Limpe Aí</h1>
				<span class="text-seo-title-right"></span>
			</div>
			<div class="text-seo-text">
				<p>A Limpe Aí nasceu há 1 ano, com o propósito de entregar um
					serviço doméstico e empresarial de qualidade para facilitar a
					comunicação entre contratantes e contratados. Acreditamos e
					trabalhamos para que você tenha em suas mãos a melhor escolha de
					uma diarista com qualidade, profissionalidade e confiabilidade que
					só nós temos. Aqui você escolhe o que te atende da melhor forma:
					diaristas domésticas e diaristas empresariais. Com a garantia Limpe
					Aí tudo fica mais fácil e confiável, qualquer problema entre em
					contato pela plataforma e nos informe o seu problema que será um
					prazer atendê-lo.</p>
			</div>
		</div>
	</section>
	<footer class="footer">
		<section class="footer__middle">
			<div class="footer__middle__table">
				<div class="footer__middle__table__item">
					<ul>
						<li class="footer__middle__table__item__title">Dúvidas</li>
						<li class="footer__middle__table__item__link"><a href="#">Perguntas
								frequentes</a></li>
						<li class="footer__middle__table__item__link"><a href="#">Formas
								de pagamento</a></li>
						<li class="footer__middle__table__item__link"><a href="#">Política
								de privacidade</a></li>
						<li class="footer__middle__table__item__link"><a href="#">Termos
								dos Contratos</a></li>
					</ul>
				</div>
				<div class="footer__middle__table__item">
					<ul>
						<li class="footer__middle__table__item__title">Atendimento</li>
						<li class="footer__middle__table__item__link"><a href="#">Fale
								conosco</a></li>
						<li class="footer__middle__table__item__link"><a href="#">Meus
								pedidos</a></li>
						<li class="footer__middle__table__item__link"><a href="#">Minha
								conta</a></li>
						<li class="footer__middle__table__item__link"><a href="#">Reclamações</a></li>
					</ul>
				</div>
				<div class="footer__middle__table__item">
					<ul>
						<li class="footer__middle__table__item__title">Institucional</li>
						<li class="footer__middle__table__item__link"><a href="#">Nossa
								história</a></li>
						<li class="footer__middle__table__item__link"><a href="#">Missão</a></li>
						<li class="footer__middle__table__item__link"><a href="#">Visão</a></li>
						<li class="footer__middle__table__item__link"><a href="#">Valores</a></li>
					</ul>
				</div>
				<div class="footer__middle__table__tags">
					<div class="footer__middle__table__tags__item">
						<p class="footer__middle__table__tags__item__label">Pague com</p>
						<ul class="footer__middle__table__tags__item__label__icons">
							<li><img src="/img/visa.png" /></li>
							<li><img src="/img/mastercard.png" /></li>
							<li><img src="/img/dinners.png" /></li>
							<li><img src="/img/amex.png" /></li>
							<li><img src="/img/elo.png" /></li>
							<li><img src="/img/boleto.png" /></li>
						</ul>
					</div>
					<div class="footer__middle__table__tags__item">
						<p class="footer__middle__table__tags__item__label">Certificados</p>
						<ul class="footer__middle__table__tags__item__label__icons">
							<li><img src="/img/encrypt.png" /></li>
							<li><img src="/img/compre-confie.png" /></li>
						</ul>
					</div>
					<div class="footer__middle__table__tags__item">
						<p class="footer__middle__table__tags__item__label">Redes
							sociais</p>
						<ul class="footer__middle__table__tags__item__label__icons">
							<li><img src="/img/youtube.png" /></li>
							<li><img src="/img/facebook.png" /></li>
							<li><img src="/img/instagram.png" /></li>
							<li><img src="/img/twitter.png" /></li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<section class="footer__bottom">
			<div class="footer__bottom__copy">
				<p>Equipe Limpe Aí e Associados. CNPJ 05.368.191/0001-62 - Av.
					José Maria de Faria, 111 - Lapa - São Paulo/SP - Brasil</p>
			</div>
		</section>
	</footer> 
	<div class="pde-login" style="display: none">
		<div class="pde-login__content">
			<p>Entrar no Limpa Aí</p>
			<div class="pde-login__content__login">
				<p>E-mail</p>
				<input id="email" />
				<p>Senha</p>
				<input id="senha" />
			</div>
			<div class="pde-login__content__btns">
				<button class="js--close">Cancelar</button>
				<button class="js--login">Acessar</button>
			</div>
			<div class="pde-login__content__redirect">
				<p>Ainda não tem uma conta?</p>
				<a href="/cadastro.jsp">Clique aqui para se cadastrar!</a>
			</div>
		</div>
	</div>
	<div class="pde-overlay"></div>
	</main>
	<script src="/js/jquery-3.3.1.min.js"></script>
	<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
	<script src="/js/bootstrap.min.js"></script>
	<script src="/js/cadastro.js"></script>
	<script src="/js/geral.js"></script>
	<script>
        function formatar(mascara, documento) {
            var i = documento.value.length;
            var saida = mascara.substring(0, 1);
            var texto = mascara.substring(i)

            if (texto.substring(0, 1) != saida) {
                documento.value += texto.substring(0, 1);
            }

        }
    </script>
</body>
</html>