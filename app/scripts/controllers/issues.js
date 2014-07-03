'use strict';

angular.module('retrospectiveApp')
  .controller('IssuesCtrl', function ($scope, $http, $location) {
    $scope.init = function(){
      $scope.voteSubmitted = false;
      getIssues();
    };


    var getIssues = function(){
     $http.get('/api/issue').success(function(issues) {
        console.log(issues);
        $scope.issues = issues;
      }).error(function(err){
        console.log(err);
      });
    }

    $scope.init();

    $scope.cancel = function(){
      $scope.voteSubmitted = false;
      $location.url('/');
    }

    $scope.create = function(){
      $http.post('/api/issue',{issue: $scope.issue}).success(function(response) {
        $location.url('/issues/list');
      }).error(function(err){
        console.log(err);
      });
    }

    $scope.submitVotes = function(){
      $http.post('/api/vote', {issues: $scope.issues}).success(function(response) {
        console.log(response);
        $scope.voteSubmitted = true;
      }).error(function(err){
        console.log(err);
      });
    }
  });
