$(function () {
	$('#loading').fadeOut();
	$('#app-6').css('height', '600px');
	if($(window).innerWidth() <= 991){
		$('footer .col-md-3 .img-responsive').attr('width', '150')
	}

});

$(window).on('resize', function () {
	if($(window).innerWidth() <= 991){
		$('footer .col-md-3 .img-responsive').attr('width', '150')
	} else {
		$('footer .col-md-3 .img-responsive').attr('width', '100')
	}
});



//////////////////////////////// VUE JS


new Vue({
	el:'#petrol-app',
	methods: {
		petrol_scrollDown: function () {
			$('html , body').animate({scrollTop: ($('#app-1').offset().top)-50}, 800)
		},
		scrollDown: function (event){
			console.log(event.target)
			$(event.target).href = 'http://localhost:8000';
		}
	}
})

