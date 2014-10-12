app.controller("create-group-ctrl", function($scope, $http, $location) 
{

$scope.createGroupButtonPressed = function(groupName, members) {
//Members is a list or dict. 

//Post to DB. ()
//Redircet to group-view
}

 
//Is called "live" from HTML
$scope.validateMember = function(member) {
	//Check member with DB
	return true
}

//Is called "live" from HTMLs
$scope.validateGroup = function(group) {
	//Check group with DB
	return true
}



});