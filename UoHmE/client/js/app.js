var app = angular.module('UoHmE', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
	$routeProvider

		// route for the default page
		.when('/', {
			templateUrl : 'view/login.html',
		})

		// route for the create user page
		.when('/create-user', {
			templateUrl : 'view/create-user.html',
		})

		// route for the group view page
		.when('/group-view', {
			templateUrl : 'view/group-view.html',
		})

		// route for the create group page
		.when('/create-group', {
			templateUrl : 'view/create-group.html',
		})

		// route for the login page
		.when('/login', {
			templateUrl : 'view/login.html',
		})

		// route for the home page
		.when('/home-page', {
			templateUrl : 'view/home-page.html',
		});
});

app.run(function($rootScope, $templateCache){
	$rootScope.$on('$viewContentLoaded',function(){
		$templateCache.removeAll();
	});
});
