// scroll bar
$(document).ready(function() {
	$('#header a').click(function() {
		$('.current').removeClass('current');
		var posClick = $(this).attr('href'); 
		var pos = $(posClick).position().top; 
		$('[href="'+ posClick + '"]').addClass('current'); 
		$('html, body').animate({scrollTop: pos + 20}, 1500);  
	});

	$('#header-menu-contact a').click(function() {
		fetchContacts();
	});
});


