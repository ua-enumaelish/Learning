var lighting = (function(parent){
	return{
		
		interval: function(parent){
			
			var lights = parent.children;
			var i = 0;
			var colors = ['bg-danger', 'bg-warning', 'bg-success'];
			var timerId = setInterval(function(){				
				if(i > 3){
					i = 0;
					lights[1].classList.remove(colors[1]);
				};

				if(lights[i]){

					if(lights[i-1]){
						lights[i-1].classList.remove(colors[i-1]);
					}

					lights[i].classList.add(colors[i]);
				}

				else{
					lights[i-1].classList.remove(colors[i-1]);
					lights[1].classList.add(colors[1]);
				};

				i++;
			}, 1000);
			return timerId;
		},
	}
})();