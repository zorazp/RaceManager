var app = angular.module('driversManager.services', ['ngRoute']);

app.service('navbar', [function(menubar) {
  var navbar = {};
  navbar.hamburgerIsActive = function() {
    var $hamburger = $(".hamburger");
    return $hamburger.hasClass('is-active');
  };
  navbar.toggleHamburger = function() {
    var $hamburger = $(".hamburger");
    if (navbar.hamburgerIsActive())
      $hamburger.removeClass('is-active');
    else
      $hamburger.addClass('is-active');
  };
  return navbar; 
}]);

app.service('menubar', ['navbar', function(navbar) {
  var menubar = {};
  menubar.isVisible = function() {
    var $mb_container = $('.mb-container');
    return $mb_container.hasClass('visible');
  };
  menubar.toggle = function() {
    var $mb_container = $('.mb-container');
    if (menubar.isVisible())
      $mb_container.removeClass('visible');
    else
      $mb_container.addClass('visible');
    navbar.toggleHamburger();
  }
  return menubar; 
}]);

app.service('sections', ['$location', 'menubar',
  function($location, menubar) {
    var sections = {};
    sections.open = function(path) {
      if (menubar.isVisible())
        menubar.toggle();
      $location.path(path);
    };
    return sections;
  }]);