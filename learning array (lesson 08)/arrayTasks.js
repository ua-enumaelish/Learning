var task = (function(callback){
	
		
return{
	reverse: function(){	
		var array = callback.getNumbers(10,10);
		console.log(array);
		var reverseArray = array.reverse();
		return reverseArray;
	}
}

})(randomNum);