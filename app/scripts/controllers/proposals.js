'use strict';

angular.module('retrospectiveApp')
    .controller('ProposalsCtrl', function($scope, $location, ProposalService){
        $scope.init = function(){
          $scope.vote = ProposalService.get();
        };

        var clearText = function(){
            $scope.proposal = "";
        };

        var redirectToList = function(){
            $location.url('/reports');
        };

        $scope.add = function() {
            $scope.vote.proposals.push($scope.proposal);
            clearText();
        };

        $scope.done = function () {
            ProposalService.set($scope.vote);
            ProposalService.update();
            redirectToList();
        };

        $scope.cancel = function() {
            redirectToList();
        };

        $scope.init();

    });
