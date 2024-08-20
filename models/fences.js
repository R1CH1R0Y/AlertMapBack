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
