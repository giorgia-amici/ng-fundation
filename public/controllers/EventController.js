eventsApp.controller('EventController',
  function EventController($scope) {
    $scope.event = {
      name: 'Farewell party',
      date: '19/12/2014',
      time: '10.50pm',
      location: {
        address: 'Bo'
      },
      imageUrl: '/img/farewell.png'
    }
  }
);