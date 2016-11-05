var app = angular.module('driversManager', 
  ['driversManager.services', 'driversManager.controllers']
);

app.config(['$routeProvider', '$locationProvider', 
  function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
        templateUrl : "templates/home.html",
        controller : "homeCtrl"
    })
    .when("/result/:id?", {
        templateUrl : "templates/result.html",
        controller : "resultCtrl"
    })
    .when("/category/:id?", {
        templateUrl : "templates/category.html"
    })
    .when("/driver/:id?", {
        templateUrl : "templates/driver.html"
    })
    .otherwise({ redirectTo : "/" });
  }]);