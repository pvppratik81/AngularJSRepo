

/// <reference path="../bower_components/angular/angular.min.js" />

var logindemo = angular.module("logindemo", [])
    .controller("loginController", function ($scope) {
        	
		$scope.checkLogin = function() {
			
			if(typeof $scope.username === "undefined" && typeof $scope.password === "undefined")
			{
					alert("Enter user name and password");
					return;
			}
			if(typeof $scope.username === "undefined")
			{
					alert("Enter user name");
					return;
			}
			if(typeof $scope.password === "undefined")
			{
					alert("Enter password");
					return;
			}
			if($scope.username == "nosql" && $scope.password == "html5")
			{
				alert("Welcome to the hell");				
			}
			else
			{
				alert("Invalid User");				
			}
			
			
		};
    });

	