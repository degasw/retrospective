'use strict';

angular.module('retrospectiveApp')
    .factory('ProposalsService', function($http){
        var vote = {
            issue: 'listed Issue number 2',
            proposals: ['try something new']
        };

        return {
            get: function (){
                return vote;
            }
        };
    });
