
var pow = (function(){

	return{
		getPow: function(num,n){
			var sum = num;
			for(var i = 1; i < n; i++){
				sum *= num;
			}
			return sum;
		},
		getPowRecursion: function(num,n){
			var sum = num;
			while(n > 1){
				pow.getPowRecursion(sum *= num, --n);
			}
			return sum;
		}		
	}
})();

var counter = (function(){

	var count = 0;
	var timer = 0;
	

	return{
	
		getIncrement: function(){
			return console.log(++count);
		},

		getDecrement: function(){
			return console.log(--count);
		},

		testIncrement: function(){			
			timer = setTimeout(function(){				
				counter.getIncrement();
				counter.testIncrement();				
			},1000);
		},

		testDecrement: function(){			
			timer =	setTimeout(function(){				
				counter.getDecrement();
				counter.testDecrement();				
			},1000);
		},

		stop: function(){
			return clearTimeout(timer);
		},

		showCount: function(){
			document.querySelector('span').innerHTML= count;
		},

		getTimer: function(){
			console.log(timer);
		}
	}
})();
