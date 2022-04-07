(function ($) {
	
	
	$(".carousel-item:first").addClass('active');
	

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