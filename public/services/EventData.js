eventsApp.factory('eventData', function($http, $q) {
  return {
    getEvent: function() {
      var deferred = $q.defer();
      // Creates a Deferred object which represents a task which will finish in the future.

        $http({method: 'GET', url: '/data/event/1.json'}).
          success(function (data, status, headers, config){ 
              deferred.resolve(data);
          }).
          error(function (data, status, headers, config) {
              deferred.reject(status);
          });

        return deferred.promise;
    }
  };
});