/// <reference path="C:\Users\k.bagashev\Documents\Visual Studio 2015\Projects\Ads-Softuni-Angular\AdsSoftUni\Social-Network-Softuni-Angular\libs/toastr.js" />
/// <reference path="c:\users\k.bagashev\documents\visual studio 2015\Projects\Social-Network-Softuni-Angular\Social-Network-Softuni-Angular\libs/angular.js" />
/// <reference path="c:\users\k.bagashev\documents\visual studio 2015\Projects\Social-Network-Softuni-Angular\Social-Network-Softuni-Angular\libs/angular-route.js" />
/// <reference path="C:\Users\k.bagashev\Documents\Visual Studio 2015\Projects\Ads-Softuni-Angular\AdsSoftUni\Social-Network-Softuni-Angular\libs/angular.js" />
/// <reference path="_references.js" />

"use strict";

var app = angular.module("SocialNetwork", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/home/home.html",
            controller: "HomeController"
        })
        .when("/login", {
            templateUrl: "templates/home/login.html",
            controller: "LoginController"
        })
         .when("/register", {
             templateUrl: "templates/home/register.html",
             controller: "RegisterController"
         })
    .otherwise({ redirectTo: "/" });
});
//app.config(function ($locationProvider) {
//    $locationProvider.html5Mode({ enabled: true, requireBase: false });
//});

app.constant("AdsHostUrl", "http://softuni-ads.azurewebsites.net/api/");
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