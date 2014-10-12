app.controller("group-view-ctrl", function($scope, $http, $location) 
{

$scope.calculateSummary = function (groupId) {
//Get all transactions related to the group from the DB
//Do your calculations
//Display the result in html
}

$scope.addNewTransactionButtonPressed = function (groupId, userId, amount, description) {

//Post new transaction to DB
//Update Page
}

//Is called "live" from HTML
$scope.validateAmount = function(amount) {
	//Validate that the amount is > 0, etc.
	return true
}

//Is called "live" from HTML
$scope.validateDescription = function(amount) {
	//Validate that the description is an ok string. len(string), etc.
	return true
}



});