'use strict';

angular.module('retrospectiveApp')
  .controller('SideNavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });