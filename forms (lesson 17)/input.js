var input = (function(createInput){

	var	frag = document.createDocumentFragment(),
			parentClasses = ['form-row', 'd-flex', 'justify-content-center'],
	
			arrayInputs = [
				inputNameAttr = {
					type: "text",
					name: "name",
					placeholder: "Your name",
					class: 'mr-4'
				},
				inputSurnameAttr = {
					type: "text",
					name: "surname",
					placeholder: "Your surname"
				},
			],
			parent,
			input,
			i;
	
	return{

		newInput: function(){
			parent = document.createElement('div');
			for(i = 0; i < parentClasses.length; i++){
				parent.classList.add(parentClasses[i]);
			}

			for(i = 0; i < arrayInputs.length; i++){
				input = document.createElement('input');
				var buf = new createInput(arrayInputs[i]);

				for(var key in buf){

					if(buf[key]){
						input.setAttribute(key, buf[key]);
					}					
				}
				parent.append(input);				
			}
			frag.append(parent);
			return frag;
		}
	}


}(createInput));