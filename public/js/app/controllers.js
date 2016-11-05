var app = angular.module('driversManager.controllers', ['ngRoute']);

app.controller('homeCtrl', ['$scope', function($scope) {
  $scope.location = "HOME"; 
}]);
 
app.controller('resultCtrl', ['$scope', '$http', '$routeParams', 
  function($scope, $http, $routeParams) {
    var id = $routeParams.id ? $routeParams.id : '';
    $http.get('/data/result/' + id)
      .success(function(data) {
          $scope.result = data;
      })
      .error(function(data) {
          $scope.result = data;
      });
  }]);

app.controller('navbarCtrl', ['$scope', 'navbar', 'menubar', 'sections',
  function($scope, navbar, menubar, sections) {
    $scope.navbar = navbar;
    $scope.menubar = menubar;
    $scope.sections = sections;
  }]);

app.controller('menubarCtrl', ['$scope', 'menubar', 'sections', 
  function($scope, menubar, sections) {
    $scope.menubar = menubar;
    $scope.sections = sections;
  }]);