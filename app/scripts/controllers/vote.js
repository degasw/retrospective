'use strict';

angular.module('retrospectiveApp')
    .controller('VotesCtrl', function ($scope, $location, VotesService, IssueService) {
        $scope.init = function (){
            $scope.voteSaved = false;
            getVotes();
        };

        function getVotes() {
            $scope.voteList = VotesService.list();
        };

        $scope.saveVotes = function (){
            VotesService.save().then(function(response) {
                $scope.voteSaved = true;
                console.log($scope.voteSaved);
            });
        };

        $scope.cancel = function (){
            $location.url('/issues/list');
        };

        $scope.init();

    });
