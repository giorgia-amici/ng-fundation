eventsApp.factory('eventData', function($resource) {
var resource = $resource('/data/event/:id.json', {id: '@id'}, {"getAll": {method: "SAVE", isArray:true, params: {something: "foo"}}});  return {
    getEvent: function() {
      return resource.get({id:1});
    },
    save: function(event){
      event.id = 999;
      console.log(event.id)
      return resource.save(event);
    }
 

      // BELOW IS THE ALTERNATIVE IF USING $HTTP
      // var deferred = $q.defer();
      // // Creates a Deferred object which represents a task which will finish in the future.

      //   $http({method: 'GET', url: '/data/event/1.json'}).
      //     success(function (data, status, headers, config){ 
      //         deferred.resolve(data);
      //     }).
      //     error(function (data, status, headers, config) {
      //         deferred.reject(status);
      //     });

      //   return deferred.promise;
    
  };
});