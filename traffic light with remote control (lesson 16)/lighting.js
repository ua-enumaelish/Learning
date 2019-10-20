var lighting = (function(parent){
	
	var colors = ['bg-danger', 'bg-warning', 'bg-success'];
	var count = 0;
	var toggle = true;
	return{

		light : function(parent){
			if(toggle){
				parent.children[count].classList.add(colors[count]);

				if(parent.children[count].previousElementSibling != null){
					parent.children[count].previousElementSibling.classList.remove(colors[count-1]);
				}
				count++;		

				if(count == 3){
					toggle = false;
					count--;				
				}
			}

			if(!toggle){
				parent.children[count].classList.add(colors[count]);

				if(parent.children[count].nextElementSibling != null){
					parent.children[count].nextElementSibling.classList.remove(colors[count+1]);
				}
				count--;
				if(count < 0){
					toggle = true;
					count = 1;				
				}
			}    
		}

	}

})();