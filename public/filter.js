eventsApp.filter('durations', function(){
	 return function(duration){
	 		switch(duration){
	 			case 1:
	 				return "Two hours";
	 			case 2:
	 				return "One Hour";
	 			case 3:
	 				return "All night";
	 	}
	 }
});