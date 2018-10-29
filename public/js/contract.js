$(function () {
	$('#loading').fadeOut();
	$('#app-6').css('height', '600px');	
});

$(window).on('load', function () {
	$('.item').css('height', (9/16) * $('.item').innerWidth())
})



/////// VUE js

new Vue({
	el:'#contract-app',
	data: {

	},
	methods: {
		contract_scrollDown: function () {
			$('html , body').animate({scrollTop: ($('#app-746').offset().top)-50}, 800)
		},
		scrollDown: function (event){
			console.log(event.target)
			$(event.target).href = 'http://localhost:8000';
		}
	}
})