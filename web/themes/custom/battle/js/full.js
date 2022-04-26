(function ($) {
	
	
	$(".carousel-item:first").addClass('active');
	$(".img-circle>img").addClass('rounded-circle');
	
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
			$('.branding').addClass('position-fixed fx');
		} else {
			$('.branding').removeClass('position-fixed fx');
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
 
})(jQuery);