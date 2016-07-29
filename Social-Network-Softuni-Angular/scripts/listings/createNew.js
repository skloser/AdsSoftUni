/// <reference path="../_references.js" />

app.controller("CreateNewAddController", ["$scope", "AdsHostUrl", "CategoryManager", "TownsManager", "AdsManager",
function ($scope, AdsHostUrl, CategoryManager, TownsManager, AdsManager) {

    CategoryManager.getAllCategories()
        .then(function (categories) {
        $scope.categories = categories;
    });
    TownsManager.getTowns().then(function (towns) {
        $scope.towns = towns;
    });

    $scope.createNewAd = function (ad) {
        AdsManager.createNewAd(ad);

    };
}]);
