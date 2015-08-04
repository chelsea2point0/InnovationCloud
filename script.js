$(document).ready(function() {

	$('.nav li').hover(
		function() {
			$(this).addClass('nav-active');
		},
		function() {
			$(this).removeClass('nav-active');
		}
		);
});