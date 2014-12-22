eventsApp.factory('eventData', function() {
  return {
    event: {
      name: 'Farewell party',
      date: '19/12/2014',
      time: '10.50pm',
      location: {
        address: 'Bo'
      },
      imageUrl: '/img/farewell.png',
      sessions: [{
        name: 'Welcome drinks',
        when: 'beginning',
        creator: 'Fabio',
        duration: 1,
        upVoteCount: 0
      }, {
        name: 'Moving to the restaurant',
        when: 'middle',
        creator: 'Giorgia',
        duration: 3,
        upVoteCount: 0
      }, {
        name: 'Spirits time',
        when: 'end',
        creator: 'Fabio',
        duration: 2,
        upVoteCount: 0
      }]
    }
  };

});