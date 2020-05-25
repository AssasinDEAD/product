$(document).ready(function() {
	// body...


	$('.owl-carousel').owlCarousel({
	    loop: true,
	    margin:30,
	    nav: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:2
	        }
	    }
	});

	$('.slide__item').owlCarousel({
	    loop:true,
	    margin: false,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:2
	        }
	    }
	});
});

