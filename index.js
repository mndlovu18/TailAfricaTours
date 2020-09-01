$(document).ready(function(){
	$('.js--section-features').waypoint(function(direction) {
		if (direction == "down") {
			$('nav').addClass('sticky');
		}
		
		else {
			$('nav').removeClass('sticky');
		}
	})
	
	$('.navbar-nav').resize(function() {
		$(this).css('left', '0%')
	})
})

/* Animations on scroll */
$('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated heartBeat');
    }, {
        offset: '50%'
    });


$('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated zoomIn');
	}, {
        offset: '50%'
    });

