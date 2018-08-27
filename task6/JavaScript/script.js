'use strict';
jQuery(document).ready(function($) {
	var SINGLETON = function() {
		// Private Properties

		// Public Properties

		// Private Method
		function listenClickAccordion() {
			$('.panel-heading').on('click', function() {
				var $parent = $(this).parent().parent();
				$parent.siblings().find('.panel-body').slideUp(200);
				$('.panel-body', $parent).slideToggle(200);
			});
		}

		// Public Method
		return function() {
			listenClickAccordion();
		}
	}

	SINGLETON()();
});