"use strict";angular.module("retrospectiveApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"partials/main",controller:"MainCtrl"}).when("/issues/new",{templateUrl:"partials/issues/new",controller:"IssuesCtrl"}).when("/issues/list",{templateUrl:"partials/issues/list",controller:"IssuesCtrl"}).when("/reports",{templateUrl:"partials/reports/ranking",controller:"ReportsCtrl"}).otherwise({redirectTo:"/"}),b.html5Mode(!0)}]),angular.module("retrospectiveApp").controller("MainCtrl",["$scope","$http",function(a,b){b.get("/api/awesomeThings").success(function(b){a.awesomeThings=b})}]),angular.module("retrospectiveApp").controller("NavbarCtrl",["$scope","$location",function(a,b){a.menu=[{title:"Home",link:"/"},{title:"Issues",link:"/issues/list"},{title:"Reports",link:"/reports"}],a.isActive=function(a){return a===b.path()}}]),angular.module("retrospectiveApp").controller("IssuesCtrl",["$scope","$http","$location",function(a,b,c){a.init=function(){a.voteSubmitted=!1,d()};var d=function(){b.get("/api/issue").success(function(b){console.log(b),a.issues=b}).error(function(a){console.log(a)})};a.init(),a.cancel=function(){a.voteSubmitted=!1,c.url("/")},a.create=function(){b.post("/api/issue",{issue:a.issue}).success(function(){c.url("/issues/list")}).error(function(a){console.log(a)})},a.submitVotes=function(){b.post("/api/vote",{issues:a.issues}).success(function(b){console.log(b),a.voteSubmitted=!0}).error(function(a){console.log(a)})}}]),angular.module("retrospectiveApp").controller("ReportsCtrl",["$scope","$http",function(a,b){a.init=function(){b.get("/api/reports/ranking").success(function(b){a.votes=b}).error(function(a){console.log(a)})},a.init()}]);