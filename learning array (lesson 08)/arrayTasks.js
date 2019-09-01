var task = (function(randomNumbers){
		
return{
	reverse: function(){	
		var array = randomNumbers.getArray(10,10);
		console.log(array);
		var reverseArray = array.reverse();
		return reverseArray;
	}
}

})(randomNumbers);