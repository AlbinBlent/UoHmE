app.controller("login-ctrl", function($scope, $http, $location) 
{

$scope.validateUser = function (username,password){

//check if user and pass is valid

return true
}

$scope.loginButtonPressed = function (username,password){

//call validate user

//redirect to home page or give error message, user not found/pass is wrong

}

$scope.createUserButtonPressed = function (){

//redirect to create user page


}




});