'use strict';
jQuery(document).ready(function($) {
	var SINGLETON = function() {
		// Private Properties

		// Public Properties

		// Private Method

		function carouselInit () {
			$('#content-sliding-carousel').carousel({
				interval: 1500
			});

			$('#content-sliding-carousel .item').each(function(){
				var next = $(this).next();
				if (!next.length) {
					next = $(this).siblings(':first');
				}
				next.children(':first-child').clone().appendTo($(this));
				if (next.next().length>0) {
					next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest');
				}
				else {
					$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
				}
			});
		}

		function autoImageScrolling () {
			var li = $("#marquee_1").find("li");
			var w = li.length * li.outerWidth();
			$(".card-content").css("width",w*2);
			var _html = $("#marquee_1").html();
			$("#marquee_2").html(_html);
			function autoScroll(){
				var s = $(".card-container").scrollLeft();
				if(s >= w){
					$(".card-container").scrollLeft(0);
				}else{
					$(".card-container").scrollLeft(s + 2);
				}
			}
			var _scrolling = setInterval(autoScroll, 100);
			$(".card-container").hover(function(){
				clearInterval(_scrolling);
			},function(){
				_scrolling = setInterval(autoScroll, 100);
			})
		}
		
		//Public Method
		return function ( ) {
			carouselInit ();
			autoImageScrolling ();
		}
	}	
	SINGLETON()();
});



