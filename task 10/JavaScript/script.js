'use strict';
jQuery(document).ready(function($) {
	var SINGLETON = function() {
		// Private Properties

		// Public Properties
		
		// Private Method
		
		function toggleStatus () {
			if ($( "input:checked" ).length) {
				if (confirm('Do you want to turn off?')) {
					$('span.slider').css({
						'padding-left': '4px',
					});
					$('span.slider').text('Off');

				} else {
					$(".my-checkbox").prop('checked', false); 
				}
			} else {				
				$('span.slider').css({
					'padding-left': '45px'
				});
				$('span.slider').text('On');
			}
		}
		
		//Public Method
		return function() {
			$( "input[type=checkbox]" ).on( "click", toggleStatus );
		}
	}	
	SINGLETON()();
});



