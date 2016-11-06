var app = angular.module('driversManager.controllers', ['ngRoute']);

app.controller('appCtrl', ['$scope', '$location', '$rootScope',
  function($scope, $location, $rootScope) {
    $rootScope.$on('sectionLoaded', function (event, section) {
        $scope.menubar = {};
        $scope.menubar[section] = "active";
    });
    $scope.open = function(path) {
      $location.path(path);
    }
  }]);

app.controller('homeCtrl', ['$scope', 'section', 
  function($scope, section) {
    section.send();
    $scope.location = "HOME";
  }]);

app.controller('categoryCtrl', ['$scope', 'section', 
  function($scope, section) {
    section.send();
    $scope.location = "CATEGORIES";
  }]);

app.controller('driverCtrl', ['$scope', 'section', 
  function($scope, section) {
    section.send();
    $scope.location = "DRIVERS";
  }]);
 
app.controller('resultCtrl', 
  ['$scope', '$http', '$routeParams', 'section',
  function($scope, $http, $routeParams, section) {
    section.send();
    var id = $routeParams.id ? $routeParams.id : '';
    $http.get('/data/result/' + id)
      .success(function(data) {
          $scope.result = data;
      })
      .error(function(data) {
          $scope.result = data;
      });
  }]);