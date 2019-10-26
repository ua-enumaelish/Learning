var checkbox = (function(createInput){
	var	frag = document.createDocumentFragment(),
			parentClasses = ['col-4', 'd-flex', 'flex-column', 'mt-4'],
			checkboxAtr = {
				type: 'checkbox',	
				class: 'mr-2'			
			},
			labelArray = ['Russian', 'Ukrainian', 'Another'],
			parent,
			input,
			label,
			i;

			return{
				newCheckbox: function(){
					parent = document.createElement('div');
					for(i = 0; i < parentClasses.length; i++){
						parent.classList.add(parentClasses[i]);
					}
					for(i = 0; i < labelArray.length; i++){
						label = document.createElement('label');
						input = document.createElement('input');
						var buf = new createInput(checkboxAtr);

						for(var key in checkboxAtr){
							if(buf[key]){
								input.setAttribute(key, buf[key]);
							}	
						}
						label.append(input);
						label.append(labelArray[i]);
						parent.append(label);
					}
					frag.append(parent);
					return frag;

				}
			}
}(createInput));