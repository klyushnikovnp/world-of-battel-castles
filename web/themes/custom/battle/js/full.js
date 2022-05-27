(function ($) {
	
	
	$(".carousel-item:first").addClass('active');
	$(".img-circle>img").addClass('rounded-circle');
	$("ul.links>li>a.is-active").addClass('active').removeClass('is-active');
	
	$(".screen4>.container>.owl-carousel>.owl-nav>button").addClass('btn btn-outline-light btn-sm');
	$(".screen4>.container>.owl-carousel>.owl-nav").css('border', '1px solid red');
	
	
	/*install owl-carousel*/
	$(document).ready(function(){
		$('.slide-one').owlCarousel({
			margin:10,
			nav:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});
	});
	
	$(document).ready(function(){
		$('.slide-two').owlCarousel({
			margin:10,
			nav:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:4
				}
			}
		});
	});	
	

	/*fixed block*/
	$(window).scroll(function(){
		if ($(window).scrollTop() > 145){
			$('.top-line').addClass('position-fixed fx');
			$('.top-line-in').addClass('small-box');
			$('.logo>div>a>img').addClass('small-img');
		} else {
			$('.top-line').removeClass('position-fixed fx');
			$('.top-line-in').removeClass('small-box');
			$('.logo>div>a>img').removeClass('small-img');
		}
	});	
	

	/*Стрелка вверх*/
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	  
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});		
	
	$('[data-toggle="tooltip"]').tooltip();
	
	$(".navbar-toggler").click(function(){
		var lang = $(".navbar-toggler").attr("aria-expanded"); 
		
		if(lang == 'false'){
			$(".language-switcher-language-url").addClass("d-block").removeClass("d-none");
		}
		else{
			$(".language-switcher-language-url").addClass("d-none").removeClass("d-block"); 
		}
	});		
	
	/*$(".navbar-nav>li>a").click(function(){
		$(".navbar-collapse").removeClass("show");
		$(".language-switcher-language-url").addClass("d-none").removeClass("d-block"); 
	});		*/
 
})(jQuery);