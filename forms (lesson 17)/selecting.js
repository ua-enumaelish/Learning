var selecting = (function(){

	var selectNative = form.elements['select'];	
	var selectList = document.querySelector('.select__list');
	var selectBlock = document.querySelector('.select__block');
	var selectBtn = document.querySelector('.select__btn');	
	

	return{
		getSelect: function(){			
			for(var i = 0; i < selectNative.length; i++){
				var selectItem = document.createElement('li');
				selectItem.classList.add('select__item');
				selectItem.innerHTML = selectNative[i].value;
				selectList.append(selectItem);

				if(selectNative[i].selected){
					selectBlock.innerHTML = selectNative[i].value;
				}
			}
		},

		selectBtn: function(){
			for(var i = 0; i < selectList.children.length; i++){
				selectList.children[i].classList.toggle('select__item');
				selectList.children[i].classList.toggle('select__item-show');
			}
		},

		getValue: function(list, item){
			
			for(var i = 0; i < list.length; i++){
				selectNative[i].selected = false;
				list[i].classList.remove('select__choise');
				item.classList.add('select__choise');
				if(list[i].classList.contains('select__choise')){
					selectNative.selectedIndex = i;
					selectBlock.innerHTML = selectNative[i].value;
				}
			}			
			selecting.selectBtn();
			console.log(form.elements.select.value)
		}


	}
	

	




}());