eventsApp.filter('duration', function(){
	 return function(duration){
	 		switch(duration){
	 			case 1:
	 				return "Half Hour";
	 			case 2:
	 				return "One Hour";
	 			case 3:
	 				return "All night";
	 	}
	 }
});