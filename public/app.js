var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource']);


// with the ngSanitize as a dependency it will load first this module and then our so that everything that we have in 
// the ngSanitize module will be available in the context of our app