eventsApp.controller('EventController',
  function EventController($scope) {
    // $scope.sortorder = '-upVoteCount'
    $scope.sortorder = "name";
    $scope.snippet = '<span style="color:red">hi there</span>'; 
    $scope.boolValue = true;
    $scope.mystyle = {color:'red'}; 
    $scope.buttonDisabled = false;
    $scope.event = {
      name: 'Farewell party',
      date: '19/12/2014',
      time: '10.50pm',
      location: {
        address: 'Bo'
      },
      imageUrl: '/img/farewell.png',
      sessions  : [
        {
          name: 'Welcome drinks',
          when: 'beginning',
          creator: 'Fabio',
          duration: 1,
          upVoteCount: 0
        },
        {
          name: 'Moving to the restaurant',
          when: 'middle',
          creator: 'Giorgia',
          duration: 2,
          upVoteCount: 0
        },
        {
          name: 'Spirits time',
          when: 'end',
          creator: 'Fabio',
          duration: 3,
          upVoteCount: 0
        }
      ]
    }


// with the  two methods below you actually manipulate the data according to your user input
    $scope.upVoteSession = function(session){
      session.upVoteCount++;
    };

     $scope.downVoteSession = function(session){
      session.upVoteCount--;
    };
  }
);