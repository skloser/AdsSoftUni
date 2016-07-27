/// <reference path="c:\users\k.bagashev\documents\visual studio 2015\Projects\Social-Network-Softuni-Angular\Social-Network-Softuni-Angular\libs/angular.js" />
/// <reference path="c:\users\k.bagashev\documents\visual studio 2015\Projects\Social-Network-Softuni-Angular\Social-Network-Softuni-Angular\libs/angular-route.js" />

"use strict";

var app = angular.module("SocialNetwork", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "templates/home/home.html",
        controller: "HomeController"
    })
    .otherwise({ redirectTo: "/" });
});