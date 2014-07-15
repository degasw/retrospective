'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var VoteSchema = new Schema({
  issue: String,
  category: String,
  importance: Number,
  date_created: Date
});

mongoose.model('Vote', VoteSchema);
