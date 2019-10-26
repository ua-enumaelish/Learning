var select = (function(createInput){
	var	frag = document.createDocumentFragment(),
			parentClasses = ['col-4','mt-4'],
			optionArray = ['Ukraine', 'Rusian', 'Another'],
			selectClass = ['custom-select'],	
			parent,
			select,	
			option,				
			i;

			return{
				newSelect: function(){
					parent = document.createElement('div');
					select = document.createElement('select');

					for(i = 0; i < parentClasses.length; i++){
						parent.classList.add(parentClasses[i]);
					}

					for(i = 0; i < selectClass.length; i++){
						select.classList.add(selectClass[i]);
					}

					for(i = 0; i < optionArray.length; i++){
						option = document.createElement('option');
						option.innerHTML = optionArray[i];
						select.append(option);
					}
					parent.append(select);
					frag.append(parent);
					return frag;
				}

			}

}(createInput))