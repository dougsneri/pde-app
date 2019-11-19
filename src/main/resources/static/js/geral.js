function modalLogin() {
	$('.header__right .js--entrar').click(function () {
		$('.pde-login').addClass('is--active');
		$('.pde-overlay').addClass('is--active');
	});
	
	$('.pde-overlay').click(function () {
		$('.pde-login').removeClass('is--active');
		$(this).removeClass('is--active');
	});
	
	$('.js--close').click(function () {
		$('.pde-login').removeClass('is--active');
		$('.pde-overlay').removeClass('is--active');
	});
};

$(document).ready(function () {
	modalLogin();
})