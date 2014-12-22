eventsApp.controller('EditEventController',
 function EditEventController($scope){
 		$scope.saveEvent = function(event, newEventForm){
 				if(newEventForm.$valid){
 			window.alert('event ' + event.name + ' you got it');
 		}
 		};

 		$scope.cancelEdit = function(){
 			window.location = "/newEvent";
 		}; 

});