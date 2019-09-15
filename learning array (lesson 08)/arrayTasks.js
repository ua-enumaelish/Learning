function randomNumbers(length, number){
	let array = [];
	for(let i = 0; i < length; i++){  
		array.push(Math.floor(Math.random()*number));
	}
	return array;
};

function getTable(){

	var table = document.createElement('table');					
	var tbody = document.createElement('tbody');					
	table.className = 'table table-bordered bg-light';
	

	for(var i = 0; i < arguments.length; i++){
		var trow = document.createElement('tr');
		trow.className = 'text-dark text-center'
		
		if(!(arguments[i] instanceof Array)){
			var array = [arguments[i]];
		}
		else{
			var array = arguments[i];
		}
		
		for(var j = 0; j < array.length; j++){
			var th = document.createElement('th');
			th.innerHTML = array[j];
			trow.append(th);
		}

		tbody.append(trow);
	}

	table.append(tbody);
	return table;
	
}



