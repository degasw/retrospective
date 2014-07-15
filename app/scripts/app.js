'use strict';

angular.module('retrospectiveApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/main',
                controller: 'MainCtrl'
            })
            .when('/issues/new', {
                templateUrl: 'partials/issues/new',
                controller: 'IssuesCtrl'
            })
            .when('/issues/list', {
                templateUrl: 'partials/issues/list',
                controller: 'IssuesCtrl'
            })
            .when('/issues/comments', {
                templateUrl: 'partials/issues/comment',
                controller: 'CommentsCtrl'
            })
            .when('/reports', {
                templateUrl: 'partials/reports/ranking',
                controller: 'ReportsCtrl'
            })
            .when('/issues/confirm', {
                templateUrl: 'partials/issues/confirm' ,
                controller: 'VotesCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });