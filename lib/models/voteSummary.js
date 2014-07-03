'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var VoteSummarySchema = new Schema({
  issue: String,
  category: String,
  comment: String,
  numberOfVotes: Number,
  averageImportance: Number,
});

mongoose.model('VoteSummary', VoteSummarySchema);
