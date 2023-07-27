const mongoose = require('mongoose');

const TypesSchema = new mongoose.Schema({
stack : { type:  String, description: "Required Field", required: true },
tree : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('Types', TypesSchema);