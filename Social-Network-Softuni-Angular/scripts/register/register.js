/// <reference path="C:\Users\k.bagashev\Documents\Visual Studio 2015\Projects\Ads-Softuni-Angular\AdsSoftUni\Social-Network-Softuni-Angular\libs/toastr.js" />
/// <reference path="../_references.js" />
app.controller("RegisterController", ["$scope", "TownsManager", "$location", "RegisterManager", function ($scope, TownsManager, $location, RegisterManager) {
    TownsManager.getTowns()
        .then(function (towns) {
            $scope.towns = towns;
        });

    $scope.submitRegisterForm = function (user) {
        RegisterManager.register(user)
        .then(function (success) {
            toastr.success("Successfully registered!");
            $location.path("/login").replace();
        },
        function (error) {
            toastr.error("Could not register!"); 
        });
    }
}]);