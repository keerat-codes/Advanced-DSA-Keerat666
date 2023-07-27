const mongoose = require('mongoose');

const Types2Schema = new mongoose.Schema({
stack2 : { type:  String, description: "Required Field", required: true },
tree2 : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('Types2', Types2Schema);