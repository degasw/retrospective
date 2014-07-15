'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var IssueSchema = new Schema({
  description: String,
  category: String,
  comments: []
});

mongoose.model('Issue', IssueSchema);
