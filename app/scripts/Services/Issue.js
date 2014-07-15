'use strict';

angular.module('retrospectiveApp')
    .factory('IssueService', function ($http) {
        var issue = {};

        return{
            get: function () {
                return issue;
            },
            set: function (updatedIssue) {
                issue = updatedIssue;
            },
            update: function () {
                $http.put('/api/issue', {issue: issue})
                    .success(function (data) {
                    })
                    .error(function (err) {
                        console.log(err);
                    });
            },
            list: function () {
                return $http.get('/api/issue')
            }

        };

    });