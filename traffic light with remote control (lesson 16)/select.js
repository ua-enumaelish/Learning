var select = (function(){

	var count = 1;
	var elementsArray = [];
	var parentElement;

	return{
		add: function(element, select){
			parentElement = element.parentElement;
			var option = document.createElement('option');
			option.innerHTML = count;
			select.append(option);
			count++;
		},

		delete: function(selectForm, array){
			parentElement.children[selectForm.value-1].remove();
			array.splice(selectForm.value-1, 1);			
			selectForm.children[selectForm.value-1].remove();
			
			count--;
			for(var i = 0; i < selectForm.children.length; i++){
				selectForm.children[i].innerHTML = i + 1;
			}
		}
	}
}());
