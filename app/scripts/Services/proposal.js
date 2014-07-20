'use strict';

angular.module('retrospectiveApp')
    .factory('ProposalService', function ($http) {
        var vote = {};

        var fetch = function () {
            $http.post('/api/proposal', {vote: vote})
                .success(function (data) {
                    if(data !== 'null') {
                        vote.issue = data.issue;
                        vote.proposals = data.proposals;
                    }
                })
                .error(function (err) {
                    console.log(err);
                });
        }


        return {
            get: function () {
                fetch();
                return vote;
            },
            setIssue: function (issue) {
                vote.issue = issue;
                vote.proposals = [];
            },
            set: function (updatedVote) {
                vote = updatedVote;
            },
            update: function () {
                $http.put('/api/proposal', {vote: vote})
                    .success(function (data) {
                    })
                    .error(function (err) {
                        console.log(err);
                    });
            }

        };
    });
