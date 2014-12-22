eventsApp.controller('EditEventController',
 function EditEventController($scope){
 		$scope.saveEvent = function(event){
 			window.alert('event ' + event.name + ' you got it');
 		};

 		$scope.cancelEdit = function(){
 			window.location = "/newEvent";
 		}; 

});