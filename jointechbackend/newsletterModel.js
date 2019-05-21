var mongoose = require('mongoose');
// Setup schema
var newsletter = mongoose.Schema({
    _id: String,
    cardTitle: String,
    img: String,
    description: String,
    lastupdate: String
});
// Export Contact model
var Newsletter = module.exports = mongoose.model('newsletter', newsletter);
module.exports.get = function (callback, limit) {
    Newsletter.find(callback).limit(limit);
}