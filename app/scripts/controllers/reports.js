angular.module('retrospectiveApp')
  .controller('ReportsCtrl', function ($scope, $http) {

    $scope.init = function(){
      $http.get('/api/reports/ranking').success(function(data){
        $scope.votes = data;
      }).error(function(err){
        console.log(err);
      });
    };

    $scope.init();
  });