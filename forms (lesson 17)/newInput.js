var createInput = (function(){

	function Input(obj){
		this.type = obj.type;
		this.name = obj.name;
		this.class = obj.class;
		this.placeholder = obj.placeholder;
	}	
	
	return Input;
})();