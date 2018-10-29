/*global $, console, confirm, alert*/

$(window).on('load', function () {
	$('#app').css('height', $(window).height()+ 'px');
	$('#loading').fadeOut();
	$('body').css('overflow', 'initial')
	if($('html').scrollTop() >= 1 ){
		$('ul.social').slideDown(400);
	}
});

$(window).on('resize', function () {
	$('#app').css('height', $(window).height()+ 'px');
})

$(document).on('scroll', function () {
	if($('html').scrollTop() >= 1 ){
		$('ul.social').slideDown(400, function () {
			//$('nav').animate({height: 100}, 800)
		});
		
		if($('html').scrollTop() >= $('#app-1').offset().top){
			$('button.fa-arrow-up').fadeIn(500);
			//$('nav').css('background-color', 'rgba(40,40,40,1)');
		} else {
			$('button.fa-arrow-up').fadeOut(500);
			//$('nav').css('background-color', 'rgba(0,0,0,3)');
		}


	} else if($('html').scrollTop() == 0){
		$('ul.social').slideUp(400, function () {
			//$('nav').css({'height': 53}, 800)
		});
		
	}

});





///////////////////////////////// VUE JS



new Vue({
	el: '#app-master',
	methods: {
		scrollDown: function (event) {
			event.preventDefault();
			$('html,body').animate({scrollTop: $('#app-2').offset().top - 53}, 800);
		},
		scrollTop: function () {
		$('html,body').animate({
			scrollTop: 0
		}, 800);
			},
		extend_nav: function (event) {
			if($(window).scrollTop() > 5) {
				console.log('Hello');
			}
		},
		scroll_one_step:function (event) {
			event.preventDefault();
			if(window.innerWidth <= 991){
				$('html,body').animate({
					scrollTop: $('#app-1').offset().top - 53
				}, 800);
			} else {
				$('html,body').animate({
					scrollTop: $('#app-1').offset().top - 53
				}, 800);
			}		
		},
		overlay:function (event) {
			$(event.target).siblings('.overlay').css({
				width: $(event.target).innerWidth(),
				height: $(event.target).innerHeight(),
				padding: '0 auto'
			});

			$(event.target).next().fadeToggle();
		},
		overlay_out:function (event) {
			$(event.target).fadeOut();
		},
		go_footer: function () {
			$('html , body').animate({scrollTop: $(document).height()}, 1500);
		}
	}
});