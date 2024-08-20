const mongoose = require("mongoose");

const schema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
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
