eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData) {

        $scope.event = {};

        $scope.saveEvent = function (event, form) {
            if(form.$valid) {
                eventData.save($scope.event)
                    .$promise.then(
                        function(response) { console.log('success', response)},
                        function(response) { console.log('failure', response)}
                    );
            }
        };

        // $scope.submit = function(){
        //     $scope.list = []
        //     $scope.
        // }

        $scope.cancelEdit = function () {
            window.location = "/EventDetails.html";
        };

    }
);


