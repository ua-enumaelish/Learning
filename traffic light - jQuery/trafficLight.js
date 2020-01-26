(function () {
	/*VARIABLE for all instances*/
	var colors = ['bg-danger', 'bg-warning', 'bg-success'];

	$.fn.trafficLight = function (array) {

		/*VARIABLE personal for current instance*/
		var parent = $('<div class="offset-lg-0 offset-md-0 offset-sm-1 offset-3"></div>\
			<div class="col-lg-2 col-md-2 col-sm-4 col-6 parent mb-2">\
				<div class="traffic-light p-2 d-flex bg-dark flex-column justify-content-center align-items-center rounded">\
					<div class="traffic-light-lamp mb-3 rounded-circle bg-secondary"></div>\
					<div class="traffic-light-lamp mb-3 rounded-circle bg-secondary"></div>\
					<div class="traffic-light-lamp mb-3 rounded-circle bg-secondary"></div>\
				</div>\
			</div>\
			<div class="offset-lg-0 offset-md-0 offset-sm-1 offset-3"></div>');

		/* PREPARATION ACTIONS */				
		// add parent element to DOM
		parent.appendTo(this);
		array.push({elem : parent});		
		// add CSS
		parent.find('.traffic-light-lamp').css({
			width: '80px',
			height: '80px',								
		});

		return array;
	}

	$.fn.lighting = function(arg){		
		
		var firstElement = $(this).find('.traffic-light-lamp').eq(0);
		var secondElement = $(this).find('.traffic-light-lamp').eq(1);
		var thirdElement = $(this).find('.traffic-light-lamp').eq(2);
		var iterator = arg.iteration || 0;
		var lamps = [firstElement, secondElement, thirdElement];

		$.fn.stopLighting = function(){
			clearInterval(timerID);	
			return iterator;		
		}
		
		var timerID = setInterval(function () {
			if(iterator > 3){						
				iterator = 0;
				lamps[1].removeClass(colors[1]);
			}

			if(lamps[iterator]){
				if(lamps[iterator - 1]){
					lamps[iterator-1].removeClass(colors[iterator-1]);
				}
				lamps[iterator].addClass(colors[iterator]);
			}

			else{						
				lamps[iterator-1].removeClass(colors[iterator-1]);
				lamps[1].addClass(colors[1]);
			}
			iterator++;
		}, 1000);
	}
}());
