const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose (for populating Menu Item queries)
require('./category');
const scoreSchema = require('./scoreSchema');

module.exports = mongoose.model('Score', scoreSchema);
