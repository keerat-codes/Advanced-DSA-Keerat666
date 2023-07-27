const mongoose = require('mongoose');

const Types3Schema = new mongoose.Schema({
stack2 : { type:  String, description: "Required Field", required: true },
tree2 : { type:  String, description: "Required Field", required: true },
queue : { type:  Number, description: "Required Field", required: true },
});

module.exports = mongoose.model('Types3', Types3Schema);