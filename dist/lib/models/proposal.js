'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var ProposalSchema = new Schema({
    issue: String,
    proposals: []
});

mongoose.model('Proposal', ProposalSchema);
