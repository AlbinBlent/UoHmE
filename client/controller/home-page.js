app.controller("home-page-ctrl", function($scope, $http, $location) 
{

$scope.createGroupButtonPressed = function() {
//Redirect to create-group
	$location.url('/create-group');
}

$scope.displayUserGroups = function(userId) {
//Get all groups related to current user from DB
//Display them together with buttons in a fancy manner.
}

$scope.showGroupsButtonPressed = function(groupId) {
//Redirect to group-view, pass groupId as argument.
}





});