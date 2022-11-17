//Petrona
document.getElementById("vdpetrona").addEventListener("click", function(){
	$('#vdDepoimetoPetrona').modal('show');
});

$('#vdDepoimetoPetrona').on('shown.bs.modal', function () {
	$("html").css({"overflow-y":"hidden"});
	document.getElementById("vdMp4Petrona").play();
})

$('#vdDepoimetoPetrona').on('hidden.bs.modal', function () {
	document.getElementById("vdMp4Petrona").pause();
	document.getElementById("vdMp4Petrona").currentTime = 0;
	$("html").css({"overflow-y":"scroll"});
});

//Maria
document.getElementById("vdmaria").addEventListener("click", function(){
	$('#vdDepoimetoMaria').modal('show');
});

$('#vdDepoimetoMaria').on('shown.bs.modal', function () {
	$("html").css({"overflow-y":"hidden"});
	document.getElementById("vdMp4Maria").play();
})

$('#vdDepoimetoMaria').on('hidden.bs.modal', function () {
	document.getElementById("vdMp4Maria").pause();
	document.getElementById("vdMp4Maria").currentTime = 0;
	$("html").css({"overflow-y":"scroll"});
});

//Josefina
document.getElementById("josefina").addEventListener("click", function(){
	$('#vdDepoimetoJosefina').modal('show');
});

$('#vdDepoimetoJosefina').on('shown.bs.modal', function () {
	$("html").css({"overflow-y":"hidden"});
	document.getElementById("vdMp4Josefina").play();
})

$('#vdDepoimetoJosefina').on('hidden.bs.modal', function () {
	document.getElementById("vdMp4Josefina").pause();
	document.getElementById("vdMp4Josefina").currentTime = 0;
	$("html").css({"overflow-y":"scroll"});
});



//Aqui a mágica acontece
	//Capturar a URL
	function capUrl(){
		return window.location.href;
	}
	
	//Atualizar a URL
	function alterar_url(nova){
		history.pushState({}, null, nova);
	}

	//Unir o parâmetro com a URL
	function replaceParam(url, paramName, paramValue){
		if (paramValue == null) {
			paramValue = '';
		}
		var pattern = new RegExp('\\b('+paramName+'=).*?(&|#|$)');
		if (url.search(pattern)>=0) {
			return url.replace(pattern,'$1' + paramValue + '$2');
		}
		url = url.replace(/[?#]$/,'');
		return url + (url.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue;
	}//console.log(replaceParam(url, "ordem", "v"));

	//Tratar click botões
	document.getElementById("btnHeader").addEventListener("click", function(){
		history.pushState({}, null, replaceParam(capUrl(), "Header", "btnHeader"));
	});
	
	document.getElementById("btnBeneficios").addEventListener("click", function(){
		history.pushState({}, null, replaceParam(capUrl(), "Beneficios", "btnBeneficios"));
	});
	
	document.getElementById("btnFormula").addEventListener("click", function(){
		history.pushState({}, null, replaceParam(capUrl(), "Formula", "btnFormula"));
	});
	
	document.getElementById("btnDepoimentos").addEventListener("click", function(){
		history.pushState({}, null, replaceParam(capUrl(), "Depoimentos", "btnDepoimentos"));
	});
	
	document.getElementById("btnSeguranca").addEventListener("click", function(){
		history.pushState({}, null, replaceParam(capUrl(), "Seguranca", "btnSeguranca"));
	});

	//Tratar section
	//todas as paginas ocupam toda a tela.
	document.getElementById("btnChamaWhats").style.display = "none";
	var pages = [].slice.call(document.querySelectorAll('header, section, footer'), 0);
	var checkCurrentPage = function () {
		// obtendo posição das paginas.
		var tops = pages.map(function (page) {
			var position = page.getBoundingClientRect();
			return position.top;
		});

		var indexUnique = tops.indexOf(0);
		if (indexUnique != -1) {
			// unica pagina sendo exibida;
			//console.log([pages[indexUnique]]);
			return;
		} else {
			// obtendo as paginas que começam acima da posição atual.
			var prevs = tops.filter(function (top) {
				return top < 0;
			});

			//var prev = pages[prevs.length - 1];
			//var next = pages[prevs.length];
			//console.log([ prev ]);
			//console.log([ prev, next ]);
			//console.log(prevs.length - 1);
			/*if((prevs.length - 1) == 0){
				history.pushState({}, null, replaceParam(capUrl(), "scrollH", "scrollHeader"));
			}else
			if((prevs.length - 1) == 1){
				history.pushState({}, null, replaceParam(capUrl(), "scrollB", "scrollBeneficios"));
			}else
			if((prevs.length - 1) == 2){
				history.pushState({}, null, replaceParam(capUrl(), "scrollF", "scrollFormula"));
			}else
			if((prevs.length - 1) == 3){
				history.pushState({}, null, replaceParam(capUrl(), "scrollT", "scrollOferta"));
			}else
			if((prevs.length - 1) == 4){
				history.pushState({}, null, replaceParam(capUrl(), "scrollG", "scrollGarantia"));
			}else
			if((prevs.length - 1) == 5){
				history.pushState({}, null, replaceParam(capUrl(), "scrollP", "scrollPirataria"));
			}else
			if((prevs.length - 1) == 6){
				history.pushState({}, null, replaceParam(capUrl(), "scrollD", "scrollDepoimentos"));
			}else
			if((prevs.length - 1) == 7){
				history.pushState({}, null, replaceParam(capUrl(), "scrollS", "scrollSeguranca"));
			}else
			if((prevs.length - 1) == 8){
				history.pushState({}, null, replaceParam(capUrl(), "scrollP", "scrollPerguntas"));
			}else
			if((prevs.length - 1) == 9){
				history.pushState({}, null, replaceParam(capUrl(), "scrollW", "scrollWhats"));
			}else
			if((prevs.length - 1) == 10){
				history.pushState({}, null, replaceParam(capUrl(), "scrollC", "scrollComoComprar"));
			}*/
			//Controlar Whats
			if((prevs.length - 1) >= 3){
				document.getElementById("btnChamaWhats").style.display = "inline";
			}else{
				document.getElementById("btnChamaWhats").style.display = "none";
			}
		}
	}

	window.addEventListener("scroll", checkCurrentPage);
	window.addEventListener("resize", checkCurrentPage);

//Carousel
$(function() {
	if ( $('.owl-2').length > 0 ) {
		$('.owl-2').owlCarousel({
			center: false,
			items: 1,
			loop: true,
			stagePadding: 0,
			margin: 20,
			smartSpeed: 1000,
			autoplay: true,
			nav: true,
			dots: true,
			pauseOnHover: false,
			//autoplayHoverPause:true,
			responsive:{
			600:{
				margin: 20,
				nav: true,
				items: 2
			},
			1000:{
				margin: 20,
				stagePadding: 0,
				nav: true,
				items: 3
			}
			}
		});
	}
})

//Control Vídeo
$( document ).ready(function($) {
	$('.parado').on('play', function() {
		$(".rodando").each(function(){
			$(this).removeClass('rodando').addClass('parado');
			$(this).get(0).pause();
		});
		$(this).removeClass('parado').addClass('rodando');
		$(this).get(0).play();
		$('.owl-2').trigger('stop.owl.autoplay');
		history.pushState({}, null, replaceParam(capUrl(), "vdvw", "viewProvSoc"));
	});
});

//Play carousel vídeo end
function vdEnd(x){
	$('.owl-2').trigger('play.owl.autoplay');
	x.removeClass('rodando').addClass('parado');
	x.get(0).pause();
	x.get(0).currentTime = 0;
}

