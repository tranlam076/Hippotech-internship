// these functions using to make the contents located right position..
$(document).ready(function($) {
	var sidenavWidth = $('.sidenav-left').width();
	$('.content-right').css({
		'margin-left': sidenavWidth + 20
	});

	$('.sidenav-left').mouseenter(function(event) {
		var sidenavWidth = $('.sidenav-left').width();
		$('.content-right').css({
			'margin-left': sidenavWidth + 20
		});
	});

	$('.sidenav-left').mouseleave(function(event) {
		var sidenavWidth = $('.sidenav-left').width();
		$('.content-right').css({
			'margin-left': sidenavWidth + 20
		});
	});
});