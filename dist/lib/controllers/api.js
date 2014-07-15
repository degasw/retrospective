'use strict';

var _ = require('lodash');


var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Issue = mongoose.model('Issue'),
    Vote = mongoose.model('Vote'),
    VoteSummary = mongoose.model('VoteSummary');

exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.issues = function( req, res ){
  return Issue.find(function( err, issues){
    if(!err){
      return res.json(issues);
    }
    else{
      return res.send(err);
    }
  });
};

exports.createIssue = function ( req, res ){
  new Issue({
    description: req.body.issue.description,
    category: req.body.issue.category,
    comments: []
  }).save(function(err,data){
    if(err){
      res.json(err);
    }
    else{
      res.json(data);
    }
  });
};

exports.updateIssue = function ( req, res ){
    Issue.update({_id: req.body.issue._id},
        {$set: {comments: req.body.issue.comments}},
        function(err,data){
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        });
};

exports.vote = function ( req, res ){
 console.log(req.body.issues);
  _.forEach(req.body.issues, function(issue){
    if (issue.importance > 0) {
      new Vote({
        issue: issue.description,
        category: issue.category,
        importance: issue.importance,
        date_created: Date.now()
      }).save(function(err,data){
        if(err){
          return res.json(err);
        }
      });
    }
  });
  res.json("success");
};

exports.rankedVotes = function( req, res ){
  return Vote.find(function(err, votes){
    if (!err) {
      var rankedVotes = [];
      var uniqueList = _.uniq(votes, 'issue');
      _.forEach(uniqueList,function(item){
          var vs = new VoteSummary({
           issue: item.issue,
           category: item.category
          });

          var items = _.where(votes,{issue: item.issue});

          vs.numberOfVotes = items.length;

          var sum = _.reduce(_.pluck(items,"importance"), function(sum,item){
            return sum + item;
          });

          vs.averageImportance = (sum / vs.numberOfVotes);

          rankedVotes.push(vs);
     });
      return res.json(rankedVotes);
    } else {
      return res.send(err);
    }
  });
};

