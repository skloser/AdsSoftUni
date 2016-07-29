/// <reference path="C:\Users\k.bagashev\Documents\Visual Studio 2015\Projects\Ads-Softuni-Angular\AdsSoftUni\Social-Network-Softuni-Angular\libs/toastr.js" />
/// <reference path="c:\users\k.bagashev\documents\visual studio 2015\Projects\Social-Network-Softuni-Angular\Social-Network-Softuni-Angular\libs/angular.js" />
/// <reference path="c:\users\k.bagashev\documents\visual studio 2015\Projects\Social-Network-Softuni-Angular\Social-Network-Softuni-Angular\libs/angular-route.js" />
/// <reference path="C:\Users\k.bagashev\Documents\Visual Studio 2015\Projects\Ads-Softuni-Angular\AdsSoftUni\Social-Network-Softuni-Angular\libs/angular.js" />
/// <reference path="_references.js" />

"use strict";

var app = angular.module("SocialNetwork", ["ngRoute", "ngCookies"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/home/home.html",
            controller: "HomeController"
        })
        .when("/login", {
            templateUrl: "templates/users/login.html",
            controller: "LoginController"
        })
         .when("/register", {
             templateUrl: "templates/users/register.html",
             controller: "RegisterController"
         })
        .when("/createNewAdd", {
            templateUrl: "templates/listings/createNew.html",
            controller: "CreateNewAddController"
        })
    .otherwise({ redirectTo: "/" });
});
//app.config(function ($locationProvider) {
//    $locationProvider.html5Mode({ enabled: true, requireBase: false });
//});

app.constant("AdsHostUrl", "http://softuni-ads.azurewebsites.net/api/");

app.factory("CategoryManager", ["$http", "$q", "AdsHostUrl", function ($http, $q, AdsHostUrl) {

    function getAllCategories() {
        var deferred = $q.defer();

        $http.get(AdsHostUrl + "categories").then(function (success) {
            deferred.resolve(success.data);
        },
        function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    return {
        getAllCategories: getAllCategories
    };
}]);

app.factory("AdsManager", ["$http", "$q", "AdsHostUrl", "$location", "$cookies",
    function ($http, $q, AdsHostUrl, $location, $cookies) {

        function createNewAd(ad) {

            var deferred = $q.defer();

            $http.post(AdsHostUrl + "user/ads", ad, { headers: { "Authorization": $cookies.get("login_access_token") } })
            .then(function (success) {
                deferred.resolve(success.data);
                toastr.success("Successfully create the new ad!");
                $location.path("/").replace();
            },
            function (error) {
                toastr.error("Error, could not create ad!");
                deferred.reject(error);
            });
        }

        return {
            createNewAd: createNewAd
        };
    }]);

app.factory("TownsManager", ["$http", "AdsHostUrl", "$q", function ($http, AdsHostUrl, $q) {

    function getTowns() {
        var deferred = $q.defer();

        $http.get(AdsHostUrl + "/Towns")
        .then(function (success) {
            deferred.resolve(success.data);
        },
        function (error) {
            deferred.reject("Error occured, trying to get towns");
        });

        return deferred.promise;
    }

    return {
        getTowns: getTowns
    };

}]);
app.factory("LoginManager", ["$http", "$q", "AdsHostUrl", function ($http, $q, AdsHostUrl) {

    function logIn(user) {
        var deferred = $q.defer();

        $http.post(AdsHostUrl + "user/login", user)
        .then(function (success) {
            deferred.resolve(success.data);
        },
        function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    return {
        logIn: logIn
    };

}]);

app.factory("RegisterManager", ["$http", "$q", "AdsHostUrl", function ($http, $q, AdsHostUrl) {

    function register(user) {
        var deferred = $q.defer();

        $http.post("http://softuni-ads.azurewebsites.net/api/user/Register", user)
        .then(function (success) {
            deferred.resolve(success);
        },
        function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    return {
        register: register
    };

}]);
