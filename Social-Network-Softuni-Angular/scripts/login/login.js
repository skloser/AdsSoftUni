/// <reference path="../_references.js" />

app.controller("LoginController", ["$scope", "$location", "LoginManager", function ($scope, $location, LoginManager) {
    $scope.submitLoginForm = function (user) {
        LoginManager.logIn(user)
        .then(function (loginResponse) {
            toastr.success("Successfully registered!");
            $location.path("/").replace();
        },
        function (errorResponse) {
            toastr.error("Error trying to register", "Invalid Login");
        });
    };
}]);