var app = angular.module('raceManager', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', 
  function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
        templateUrl : "templates/home.html",
        controller : "homeCtrl"
    })
    .when("/result/:id", {
        templateUrl : "templates/result.html",
        controller : "resultCtrl"
    })
    .otherwise({ redirectTo : "/" });
    $locationProvider.html5Mode(true);
  }]);
 
app.controller('homeCtrl', ['$scope', function($scope) {
  $scope.location = "HOME"; 
}]);
 
app.controller('resultCtrl', ['$scope', '$http', '$routeParams', 
  function($scope, $http, $routeParams) {
    $http.get('/data/result/' + $routeParams.id)
      .success(function(data) {
          $scope.result = data;
      })
      .error(function(data) {
          $scope.result = data;
      });
  }]);