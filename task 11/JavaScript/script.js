'use strict';
jQuery(document).ready(function($) {
	var SINGLETON = function() {
		// Private Properties

		// Public Properties
		var redVal = 0, greenVal = 0 , blueVal = 0;
		// Private Method

		function setRangeInputColor () {
			$('#red-range').on('input', function () {
				redVal = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
				$(this).css('background-image',
					'-webkit-gradient(linear, left top, right top, '
					+ 'color-stop(' + redVal + ', #EB1616), '
					+ 'color-stop(' + redVal + ', #C5C5C5)'
					+ ')'
					);
				getMixColor();
			});

			$('#green-range').on('input', function () {
				greenVal = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
				$(this).css('background-image',
					'-webkit-gradient(linear, left top, right top, '
					+ 'color-stop(' + greenVal + ', #008659), '
					+ 'color-stop(' + greenVal + ', #C5C5C5)'
					+ ')'
					);
				getMixColor();
			});

			$('#blue-range').on('input', function () {
				blueVal = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
				$(this).css('background-image',
					'-webkit-gradient(linear, left top, right top, '
					+ 'color-stop(' + blueVal + ', #006699), '
					+ 'color-stop(' + blueVal + ', #C5C5C5)'
					+ ')'
					);
				getMixColor();
			});
		}

		function getMixColor () {
			var red = parseInt(redVal*255).toString(16);
			if (red.length < 2) red = '0'+red;
			var green = parseInt(greenVal*255).toString(16);
			if (green.length < 2) green = '0'+green;
			var blue = parseInt(blueVal*255).toString(16);
			if (blue.length < 2) blue = '0'+blue;
			var colorCode = '' + red.toUpperCase() + green.toUpperCase() + blue.toUpperCase();
			$('.txt-color-code').text('#' + colorCode);
			$('.result-container').css({
				'background': '#' + colorCode
			});
		}
		
		//Public Method
		return function() {
			setRangeInputColor();
		}
	}	
	SINGLETON()();
});



