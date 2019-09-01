var randomNumbers = (function(){
	let array = [];
	return{
  	getArray: function(length, number){
  		for(let i = 0; i < length; i++){  
  			array.push(Math.floor(Math.random()*number));
  		}
  		return array;
  	}
  } 
})();

