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