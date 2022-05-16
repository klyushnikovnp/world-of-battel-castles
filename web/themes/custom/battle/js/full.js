(function ($) {
	
	
	$(".carousel-item:first").addClass('active');
	$(".img-circle>img").addClass('rounded-circle');
	$("ul.links>li>a.is-active").addClass('active').removeClass('is-active');
	
	$(".screen4>.container>.owl-carousel>.owl-nav>button").addClass('btn btn-outline-light btn-sm');
	$(".screen4>.container>.owl-carousel>.owl-nav").css('border', '1px solid red');
	
	
	/*install owl-carousel*/
	$(document).ready(function(){
		$('.owl-carousel').owlCarousel({
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
	

	/*fixed block*/
	$(window).scroll(function(){
		if ($(window).scrollTop() > 145){
			$('.top-line').addClass('position-fixed fx');
		} else {
			$('.top-line').removeClass('position-fixed fx');
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
 
})(jQuery);