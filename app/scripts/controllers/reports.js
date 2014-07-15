angular.module('retrospectiveApp')
    .controller('ReportsCtrl', function ($scope, $http, $location, IssueService) {

        $scope.init = function () {
            $http.get('/api/reports/ranking').success(function (data) {
                $scope.votes = data;
            }).error(function (err) {
                console.log(err);
            });
        };

        $scope.viewProposals = function () {
            IssueService.set(issue);
            $location.url('/issues/comments');
        };

        $scope.cancel = function () {
            $location.url('/');
        };

        $scope.init();
    });