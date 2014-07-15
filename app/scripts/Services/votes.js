'use strict';

angular.module('retrospectiveApp')
    .factory('VotesService', function($http){
        var voteList;

        return {
            add: function (votes) {
                voteList = votes;
            },
            list: function () {
                return voteList;
            },
            save: function () {
                return $http.post('/api/vote', {issues: voteList});
            }
        };
    });
