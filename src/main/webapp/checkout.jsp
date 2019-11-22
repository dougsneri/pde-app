<!DOCTYPE html>

<html>
<head>
<meta name="viewport"
	content="initial-scale=1, maximum-scale=1, user-scalable=no" />
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/css/reset.css" />
<link rel="stylesheet" type="text/css" href="/css/checkout.css" />
<link rel="stylesheet" type="text/css" href="/css/home.css" />
<title>Checkout</title>
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

	<div class="checkout">
		<div class="checkout__content">
			<div class="checkout__content__left">
				<h4>Dados pessoais</h4>
				<p>Solicitamos apenas as informações essenciais para a realização da compra.</p>
				<div class="checkout__content__left__email">
					<h5>E-mail</h5>
					<input type="email" name="email"/>
				</div>
				<div class="checkout__content__left__name">
					<div class="checkout__content__left__name__left">
						<h5>Primeiro Nome</h5>
						<input type="text"/>
					</div>
					<div class="checkout__content__left__name__right">
						<h5>Último Nome</h5>
						<input type="text"/>
					</div>
				</div>
				<div class="checkout__content__left__block">
					<div class="checkout__content__left__cpf">
						<h5>CPF</h5>
						<input type="text" placeholder="999.999.999-99"/>
					</div>
					<div class="checkout__content__left__tel">
						<h5>Telefone</h5>
						<input type="text" placeholder="11 99999-9999"/>
					</div>
				</div>
				<div class="checkout__content__left__submit">
					<button type="submit">Ir para endereço</button>
				</div>
			</div>
			<div class="checkout__content__center">
				<h4>Endereço</h4>
				<div class="checkout__content__center__cep">
					<h5>CEP</h5>
					<input type="text" name="cep"/>
				</div>
				<span class="checkout__content__center__address">Rua dos Bobos</span>
				<div class="checkout__content__center__number">
					<h5>Número</h5>
					<input type="text"/>
				</div>
				<div class="checkout__content__center__address2">
					<h5>Complemento</h5>
					<input type="text" placeholder="OPCIONAL"/>
				</div>
				<div class="checkout__content__center__name">
					<h5>Destinatário</h5>  
					<input type="text"/>
				</div>
				<div class="checkout__content__center__submit">
					<button type="submit">Ir para o pagamento</button>
				</div>
			</div>
			<div class="checkout__content__right">
				<h4>Pagamento</h4>
				<p>Cartão de Crédito</p>
				<div class="checkout__content__right__number">
					<h5>Número do cartão</h5>
					<input type="text" name="cardNumber"/>
				</div>
				<input class="checkout__content__right__parcela" placeholder="Em quantas parcelas deseja pagar?"/>
				<div class="checkout__content__right__name">
					<h5>Nome impresso no cartão</h5>
					<input type="text"/>
				</div>
				<div class="checkout__content__right__shelf">
					<h5>Validade</h5>
					<input type="text" placeholder="mês"/>
					<input type="text" placeholder="ano"/>
				</div>
				<div class="checkout__content__right__cvv">
					<h5>Código de segurança</h5>
					<input type="text"/>
				</div>
				<div class="checkout__content__right__submit">
					<a type="submit" href="/confirmation.jsp">Finalizar Pagamento</a>
				</div>
			</div>
		</div>
	</div>

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
	<script src="/js/bootstrap.min.js"></script>
	<script src="/js/geral.js"></script>
</body>
</html>