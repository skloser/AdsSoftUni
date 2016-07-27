/// <reference path="../_references.js" />
/// <reference path="C:\Users\k.bagashev\Documents\Visual Studio 2015\Projects\Ads-Softuni-Angular\AdsSoftUni\Social-Network-Softuni-Angular\libs/toastr.js" />
app.controller("RegisterController", ["$scope", "TownsManager", "RegisterManager", function ($scope, TownsManager, RegisterManager) {
    TownsManager.getTowns()
        .then(function (towns) {
            $scope.towns = towns;
        });

    $scope.submitRegisterForm = function (user) {
        RegisterManager.register(user)
        .then(function (success) {
            toastr.success("Successfully registered!");
        },
        function (error) {
            toastr.error("Could not register!");
        });
    }
}]);