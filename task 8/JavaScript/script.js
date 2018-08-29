'use strict';
jQuery(document).ready(function($) {
	var SINGLETON = function() {
		// Private Properties

		// Public Properties
		var cancelAnimate = '';
		var canvas = document.getElementById("canvas");
		var centerX = canvas.width / 2;
		var centerY = canvas.height / 2;	
		var innerCricle = 50;
		var outerCricle =  innerCricle;
		// init canvas
		var ctx = canvas.getContext("2d");
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.fillStyle = '#A5E0F7';
		ctx.strokeStyle = '#FBFDFE';
		ctx.arc(centerX,centerY,innerCricle,0,2*Math.PI);
		ctx.fill();
		function draw(){
			if (outerCricle <= 75) {
				ctx.arc(centerX,centerY,outerCricle,0,2*Math.PI);
				ctx.stroke();
				outerCricle ++;
			} else {
				ctx.fillStyle = 'white';
				ctx.arc(centerX,centerY,outerCricle + 1,0,2*Math.PI);
				ctx.fill();
				outerCricle = innerCricle;
				ctx.beginPath();
				ctx.fillStyle = '#A5E0F7';
				ctx.arc(centerX,centerY,innerCricle,0,2*Math.PI);
				ctx.fill();
				ctx.arc(centerX,centerY,outerCricle,0,2*Math.PI);
				ctx.stroke();
				outerCricle ++;
			}
		}

		// Private Method
		function startAnimation(event){
			if(this.textContent === "Start"){
				cancelAnimate = setInterval (function() {
					draw();
				},100);
				this.textContent = 'Pause';
			}
			else{
				clearInterval(cancelAnimate);
				this.textContent = 'Start';
			}
		}
		//Public Method
		return function() {
			$('#start-button')[0].addEventListener('click',startAnimation);
		}
	}	
	SINGLETON()();
});



