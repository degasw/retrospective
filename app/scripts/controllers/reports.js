angular.module('retrospectiveApp')
    .controller('ReportsCtrl', function ($scope, $http, $location, ProposalService) {

        $scope.init = function () {
            $http.get('/api/reports/ranking').success(function (data) {
                $scope.votes = data;
            }).error(function (err) {
                console.log(err);
            });
        };

        $scope.viewProposals = function (vote) {
            ProposalService.setIssue(vote.issue);
            $location.url('/issues/proposals');
        };

        $scope.cancel = function () {
            $location.url('/');
        };

        $scope.init();
    });