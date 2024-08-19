const mongoose = require("mongoose");

const schema = mongoose.Schema({
    latitude: {
        type: Number, // Changed to Number
        required: true
    },
    longitude: {
        type: Number, // Changed to Number
        required: true
    },
    radius: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    notified: {
        type: Boolean,
        default: false 
    }
});

var fenceModel = mongoose.model("fences", schema);
module.exports = fenceModel;
