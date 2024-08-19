const mongoose = require("mongoose");

const schema = mongoose.Schema({
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number, 
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

var alertModel = mongoose.model("alerts", schema); 
module.exports = alertModel;
