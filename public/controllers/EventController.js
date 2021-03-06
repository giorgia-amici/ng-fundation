eventsApp.controller('EventController',
  function EventController($scope, eventData) {
    // $scope.sortorder = '-upVoteCount'
    $scope.sortorder = "name";
    $scope.snippet = '<span style="color:red">hi there</span>';
    $scope.boolValue = true;
    $scope.mystyle = {
      color: 'red'
    };
    eventData.getEvent()
      .$promise.then(
          function (event){ $scope.event = event; console.log(event); },
          function (response) {console.log(response);}
        );


    // BELOW IS AN ALTERNATIVE IF USING $HTTP 
    // eventData.getEvent().then(
    //   function(event){$scope.event = event; },
    //   // so above we set the object on the scope
    //   function(statusCode){ cosole.log(statusCode); }
    //   );
 
    // with the  two   methods below you actually manipulate the data according to your user input



    $scope.upVoteSession = function(session) {
      session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
      session.upVoteCount--;
    };
  }
);