'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Thing Schema
 */
var IssueSchema = new Schema({
  description: String,
  category: String,
});

mongoose.model('Issue', IssueSchema);
