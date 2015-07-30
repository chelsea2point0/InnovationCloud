$(document).ready(function() {

	$('.nav li').hover(
		function() {
			$('.nav li').addClass('nav-active');
		},
		function() {
			$('.nav li').removeClass('nav-active');
		}
		);
});