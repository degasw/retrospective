'use strict';

angular.module('retrospectiveApp')
    .controller('CommentsCtrl', function($scope, $location, IssueService){
        $scope.init = function(){
          $scope.issue = IssueService.get();
        };

        var clearText = function(){
            $scope.comment = "";
        };

        var redirectToList = function(){
            $location.url('/issues/list');
        };

        $scope.add = function() {
            $scope.issue.comments.push($scope.comment);
            clearText();
        };

        $scope.done = function () {
            IssueService.set($scope.issue);
            IssueService.update();
            redirectToList();
        };

        $scope.cancel = function() {
            redirectToList();
        };

        $scope.init();

    });
