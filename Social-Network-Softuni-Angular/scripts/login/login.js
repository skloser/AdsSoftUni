/// <reference path="../_references.js" />

app.controller("LoginController", ["$scope", "$location", "LoginManager", "$cookies",
    function ($scope, $location, LoginManager, $cookies) {
        $scope.submitLoginForm = function (user) {
            LoginManager.logIn(user)
            .then(function (loginResponse) {
                toastr.success("Successfully registered!");
                $cookies.put("login_access_token", "Bearer " + loginResponse.access_token);
                $location.path("/").replace();
            },
            function (errorResponse) {
                toastr.error("Error trying to register", "Invalid Login");
            });
        };
    }]);