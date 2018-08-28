'use strict';
jQuery(document).ready(function($) {
	var SINGLETON = function() {
		// Private Properties

		// Public Properties

		// Private Method

		function showPopover () {
			var selection = $('ul .dropdown-menu li a');
			selection.mouseenter(function(event) {
				var glyphicon = $(this).children('span').attr('class');
				$(this).children('span').attr('class', 'glyphicon glyphicon-info-sign');
				$(this).mouseleave(function(event) {
					$(this).children('span').attr('class', glyphicon);				
				});
			});
		}

		// Public Method
		return function() {
			showPopover();
		}
	}

	SINGLETON()();
});