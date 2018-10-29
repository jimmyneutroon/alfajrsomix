$(function () {
	$('#loading').fadeOut();
	$('#app-6').css('height', '600px'); // it's the google map element
});




///////// VUE JS

new Vue({
	el: '#environment-app',
	methods: {
		environment_scrollDown: function () {
			$('html , body').animate({scrollTop: ($('.section1').offset().top) - 50}, 800)
		},
		scrollDown: function (event){
			console.log(event.target)
			$(event.target).href = 'http://localhost:8000';
		}		
	},

	computed: {

	}
})