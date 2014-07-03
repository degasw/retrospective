'use strict';

angular.module('retrospectiveApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Issues',
      'link': '/issues/list'
    },
    {
      'title': 'Reports',
      'link': '/reports'
    }
    ];

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
