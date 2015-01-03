##**Angular Events Application**


This is a simple angular application built on a node server.

In this application you can see, access, insert and modify any kind of event.



####**CUSTOMIZE FILETRS**

```javascript
moduleName.filter('filterName', function(){
	return function(input/*, filter parameters*/){
		=> modifiedInput = logic to modify your initial input
		return modifiedInput
}
});

```

Then in your HTML:

```html
{{yourScopeObject.yourScopePropertyToBeFiltered | filterName:"filterProperties"}}

```
=======================================================


####**BUILT IN DIRECTIVES**

```javascript

ngBind

```

Instead of using ```{{event.name}}``` you can also use ```ng-bind="event.name"```

```javascript

ngBindTemplate

```

You use ```ng-bind-template``` if you need to add multiple things like: ```ng-bind-template="{{event.name}}{{event.date}}"```

```javascript

ngPattern

```

You use ```ng-pattern``` in the broad context of __validations__ along with **regular expressions**
Properties of your validations are: ```$dirty```, ```$pristine```, ```$invalid```, ```$valid```.



```javascript

ngCloak

```

The ```ngCloak``` directive is used to avoid the undesirable flicker effect caused by the html template display.



###Some Services

```javascript

$anchorScroll

```


The ```$anchorScroll``` service takes the id of an element belonging to a hash and it scrolls till that element.

```javascript

$locale

```

The ```$locale``` service is used for localization of date, time and numeric formats. Use it looking at [this doc](https://github.com/angular/code.angularjs.org/tree/master/1.0.2/i18n)


```javascript

$resource or $http?

```

The following are two examples of fulfilling a GET request in Angular and decide wheather 
or not binding their responses directly to the scope(case possible with $resource but not possible in the current version of Angular with $http). The first one uses the $resource service while the second one uses the $http service.

```javascript
    eventData.getEvent()
      .$promise.then(
          function (event){ $scope.event = event; console.log(event); },
          function (response) {$console.log(response);}
        );

    eventData.getEvent().then(
       function (event) {$scope.event = event; },
       function (statusCode){console.log(statusCode); }
     );


```
Please, look at the EventData service for the structure. 














