var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var psSchema = new Schema({
    PID: String,
    id_to_locate:String
});

// the schema is useless so far
// we need to create a model using it
var paySlip = mongoose.model('pay', psSchema);

// make this available to our users in our Node applications
module.exports = paySlip