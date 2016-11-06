var app = angular.module('driversManager.services', []);

app.service('section', ['$rootScope', '$location',
  function($rootScope, $location) {
    return {
      send: function() {
        var path = $location.path();
        var section = path.split("/")[1] == "" ? "home" : path.split("/")[1];
        $rootScope.$broadcast('sectionLoaded', section);
      }
    };
  }]);
