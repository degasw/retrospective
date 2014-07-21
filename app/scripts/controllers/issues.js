'use strict';

angular.module('retrospectiveApp')
    .controller('IssuesCtrl', function ($scope, $http, $location, IssueService, VotesService) {

        $scope.init = function () {
            $scope.voteList = [];
            $scope.voteSubmitted = false;
            issuesList();
        };

        var issuesList = function() {
            IssueService.list().success(function(list){
                $scope.issues = list;
            }).error(function(err) {
                console.log(err);
            });
        };

        $scope.cancel = function () {
            $scope.voteSubmitted = false;
            $location.url('/');
        };

        $scope.create = function () {
            $http.post('/api/issue', {issue: $scope.issue}).success(function (response) {
                $location.url('/issues/new');
            }).error(function (err) {
                console.log(err);
            });
        };

        $scope.addToVoteList = function (issue) {
            if(_.contains($scope.voteList,issue._id)){
                _.remove($scope.voteList, issue._id);
            }
            $scope.voteList.push(issue);
        };

        $scope.submitVotes = function () {
            VotesService.add($scope.voteList);
            $scope.voteSubmitted = true;
            $location.url('/issues/confirm');
        };

    });
