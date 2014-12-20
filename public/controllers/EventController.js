eventsApp.controller('EventController',
  function EventController($scope) {
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
          creator: 'Fabio',
          duration: '30 mins',
          upVoteCount: 0
        },
        {
          name: 'Moving to the restaurant',
          creator: 'Giorgia',
          duration: '1 hour',
          upVoteCount: 0
        },
        {
          name: 'Spirits time',
          creator: 'Fabio',
          duration: '1 hour',
          upVoteCount: 0
        }


      ]
    }
  }
);