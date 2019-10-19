// navbar
$(function($) {
	function adjustNav() {
		var winWidth = $(window).width(),
		dropdown = $('.dropdown'),
		dropdownMenu = $('.dropdown-menu');

		if (winWidth >= 991) {
			dropdown.on('mouseenter', function() {
				$(this).addClass('show')
				.children(dropdownMenu).addClass('show');
			});

			dropdown.on('mouseleave', function() {
				$(this).removeClass('show')
				.children(dropdownMenu).removeClass('show');
			});
		} else {
			dropdown.off('mouseenter mouseleave');
		}
	}

	$(window).on('resize', adjustNav);
	
	adjustNav();
}); 





// AOS-animate

AOS.init({
	easing: 'ease-in-out-sine'
});


// owlCarousel

$('.banner_carousel.owl-carousel').owlCarousel({
	loop:true,
	margin:20,
	dots: true,
	autoplay:true,
	autoplayTimeout:3000,
	responsive:{
		0:{
			items:1
		}
	}
});

$('.products_carousel.owl-carousel').owlCarousel({
	loop:true,
	margin:17,
	nav: true,
	dots: false,
	navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	responsive : {
		0 : {
			items:1
		},
		480 : {
			items:1
		},
		768 : {
			items:2
		},
		991 : {
			items:3
		}
	}
});

$('.agricultural_products.owl-carousel').owlCarousel({
	margin:18,
	loop:true,
	nav:true,
	dots: false,
	navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	responsive : {
		0 : {
			items:1
		},
		480 : {
			items:2
		},
		768 : {
			items:3
		},
		991 : {
			items:4
		}
	}
});

$('.news_carousel.owl-carousel').owlCarousel({
	loop:true,
	margin:22,
	nav: true,
	dots: false,
	navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	responsive : {
		0 : {
			items:1
		},
		480 : {
			items:2
		},
		768 : {
			items:2
		},
		991 : {
			items:3
		}
	}
});

$('.partners_carousel.owl-carousel').owlCarousel({
	loop:true,
	margin:22,
	nav: true,
	autoplay:true,
	autoplayTimeout:2000,
	dots: false,
	navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	responsive : {
		0 : {
			items:2
		},
		480 : {
			items:3
		},
		768 : {
			items:5
		},
		991 : {
			items:6
		}
	}
});


// form-range
$(".form-range #slider-range.amount").slider({
	min: 400000,
	max: 6000000,
	step: 50000,
	values: [ 400000, 6000000 ],
	slide: function( event, ui ) {
		$(".form-range #amount").val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] + " сум");
	}
});

$(document).ready(function(){
	$( ".form-range #amount" ).val( "" + $( "#slider-range.amount" ).slider( "values", 0 ) + " - " + $( "#slider-range.amount" ).slider( "values", 1 ) + " сум" );
});


// input number
(function() {

	window.inputNumber = function(el) {

		var min = el.attr('min') || false;
		var max = el.attr('max') || false;

		var els = {};

		els.dec = el.prev();
		els.inc = el.next();

		el.each(function() {
			init($(this));
		});

		function init(el) {

			els.dec.on('click', decrement);
			els.inc.on('click', increment);

			function decrement() {
				var value = el[0].value;
				value--;
				if(!min || value >= min) {
					el[0].value = value;
				}
			}

			function increment() {
				var value = el[0].value;
				value++;
				if(!max || value <= max) {
					el[0].value = value++;
				}
			}
		}
	}
})();

inputNumber($('.input_number_item'));




// topcontrol

let $btn = $('#topcontrol .btn-special');

$btn.on('click', function(){
	$('html').animate({
		scrollTop: 0
	}, 1000);
});


$(window).on('scroll', function(){
	if(scrollY > 800){
		$btn.fadeIn();
	}else{
		$btn.fadeOut();
	}
})