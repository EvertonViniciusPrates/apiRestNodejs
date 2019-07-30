var mongoose = require('mongoose');
// Setup schema
var newsletterSchema = new mongoose.Schema({
    cardTitle: String,
    img: String,
    description: String,
    lastUpdate: String
});
var Newsletter = module.exports = mongoose.model('news', newsletterSchema);
module.exports.get = function (callback, limit) {
    Newsletter.find(callback).limit(limit);
}