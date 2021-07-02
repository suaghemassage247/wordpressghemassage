

jQuery(window).scroll(function($){
	if (jQuery(this).scrollTop() > 80) {
		jQuery('.sticky-menu').css({"position": "fixed", "top": "0", "right": "0", "left": "0", "z-index": "99", "background": "#fff"});
	} else {
		jQuery('.sticky-menu').css({"position": "relative"});
	}
});


jQuery(document).ready(function(){
	jQuery( "body" ).on('.main-navigation ul li a:before', 'click', function( event ) {
		event.preventDefault();
	});
});
jQuery(document).ready(function(){
	jQuery('.home-testimonial-layout-1').owlCarousel({
		loop:true,
		nav:false,
		items: 1,
		dots: true
	})
});