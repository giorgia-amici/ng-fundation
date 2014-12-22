eventsApp.controller('EventController',
  function EventController($scope) {
    // $scope.sortorder = '-upVoteCount'
    $scope.sortorder = "name";
    $scope.snippet = '<span style="color:red">hi there</span>';
    $scope.boolValue = true;
    $scope.mystyle = {
      color: 'red'
    };
    $scope.buttonDisabled = false;
    $scope.event = {

    }


    // with the  two methods below you actually manipulate the data according to your user input
    $scope.upVoteSession = function(session) {
      session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
      session.upVoteCount--;
    };
  }
);