$(document).ready(function($) {
	var pos =  $('#navbar-2').position().top;
	$('.nav-tabs > li > a').click(function(event) {
		$('html, body').animate({scrollTop: pos-69}, 1000);  
	});
});