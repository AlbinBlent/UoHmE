app.controller("login-ctrl", function($scope, $http, $location) 
{

$scope.validateUser = function (username,password){
	
	//check if user and pass is valid
	return true
}

$scope.loginButtonPressed = function (username,password){

	//call validate user
	var success = $scope.validateUser(username,password);

	//redirect to home page or give error message, user not found/pass is wrong
	if(success){
		$location.url('/home-page');	
	}
	else {
		//Generate ERROR-msg
	}
}

$scope.createUserButtonPressed = function (){

	//redirect to create user page
	$location.url('/create-user');	
}




});