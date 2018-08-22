$(document).ready(function () {
	$('nav > ul > li').hover(
		function () {
			$(this).children('.dropdown-content').show();
		},
		function () {
			$(this).children('.dropdown-content').hide();
		});
});