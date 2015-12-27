/**
 * TiX Clock jQuery Plugin
 * version 1.0
 * Ahmad Hajar <me@ahmadhajar.com>
 * 
 * created: 27 December 2015
 * last updated: 27 December 2015
 *
 * GitHub page: https://github.com/gmbelart/tix-clock-jquery-plugin
 *
 * Released under MIT licence
 */

(function(){
	$.fn.tixClock = function(){
		return this.each(function(options){
			var options = $.extend({
				section1_color: '#FF6B76',
				section2_color: '#FFD56B',
				section3_color: '#7C8DFB',
				section4_color: '#7EFD6A',
				interval: 3000,
			}, options),
			tixElement = $(this);

			tixElement.addClass('tix-clock-wrapper');
			tixElement.html('<div class="tix-clock-section hour-1"> \
		<div class="tix-clock-col"> \
			<span class="hour-1-1"></span> \
			<span class="hour-1-2"></span> \
			<span class="hour-1-3"></span> \
		</div> \
	</div> \
	<div class="tix-clock-section hour-2"> \
		<div class="tix-clock-col"> \
			<span class="hour-2-1"></span> \
			<span class="hour-2-2"></span> \
			<span class="hour-2-3"></span> \
		</div> \
		<div class="tix-clock-col"> \
			<span class="hour-2-4"></span> \
			<span class="hour-2-5"></span> \
			<span class="hour-2-6"></span> \
		</div> \
		<div class="tix-clock-col"> \
			<span class="hour-2-7"></span> \
			<span class="hour-2-8"></span> \
			<span class="hour-2-9"></span> \
		</div> \
	</div> \
	<div class="tix-clock-section minute-1"> \
		<div class="tix-clock-col"> \
			<span class="minute-1-1"></span> \
			<span class="minute-1-2"></span> \
			<span class="minute-1-3"></span> \
		</div> \
		<div class="tix-clock-col"> \
			<span class="minute-1-4"></span> \
			<span class="minute-1-5"></span> \
			<span class="minute-1-6"></span> \
		</div> \
	</div> \
	<div class="tix-clock-section minute-2"> \
		<div class="tix-clock-col"> \
			<span class="minute-2-1"></span> \
			<span class="minute-2-2"></span> \
			<span class="minute-2-3"></span> \
		</div> \
		<div class="tix-clock-col"> \
			<span class="minute-2-4"></span> \
			<span class="minute-2-5"></span> \
			<span class="minute-2-6"></span> \
		</div> \
		<div class="tix-clock-col"> \
			<span class="minute-2-7"></span> \
			<span class="minute-2-8"></span> \
			<span class="minute-2-9"></span> \
		</div> \
	</div>');

			var changeClock = function() {
	            var date = new Date(),
	                hours = explodeHour(date.getHours()),
	                minutes = explodeHour(date.getMinutes());
	            tixRender(hours, minutes);
	        },
	        explodeHour = function(hour) {
	            var hourString = String(hour);
	            if (hourString.length == 2) {
	                return [parseInt(hourString[0]), parseInt(hourString[1])];
	            } else {
	                return [0, hour];
	            }
	        },
	        doRender = function(maxI, max, selector){
	        	var prev = [];
	            for (var i = 1; i <= maxI; i++) {
	                var x = getRandomInt(1, max);
	                while($.inArray(x, prev) >= 0){
	                	x = getRandomInt(1, max);
	                }
	                prev.push(x);
	                tixElement.find(selector + x).addClass('active');
	            }
	        },
	        tixRender = function(hour, minute) {
	            tixElement.find('.active').removeClass('active');
	            if (hour[0]) {
	            	doRender(hour[0], 3, '.hour-1-');
	            	setBgColor('hour-1-', options.section1_color);
	            }
	            
	            if (hour[1]) {
	            	doRender(hour[1], 9, '.hour-2-');
	            	setBgColor('hour-2-', options.section2_color);
	            }
	            
	            if (minute[0]) {
	            	doRender(minute[0], 6, '.minute-1-');
	            	setBgColor('minute-1-', options.section3_color);
	            }

	            if (minute[1]) {
	            	doRender(minute[1], 9, '.minute-2-');
	            	setBgColor('minute-2-', options.section4_color);
	            }
	        },
	        setBgColor = function(selector, color){
	        	tixElement.find('span[class^="'+ selector +'"]').removeAttr('style');
	        	tixElement.find('span[class^="'+ selector +'"].active').css({
					'background': color,
				    'border-color': color
				});
	        },
	        getRandomInt = function(min, max) {
	            return Math.floor(Math.random() * (max - min + 1)) + min;
	        };
		    changeClock();
		    setInterval(changeClock, options.interval);
		});
	}
})(jQuery);