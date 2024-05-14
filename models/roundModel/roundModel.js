const mongoose = require("mongoose");

const roundSchema = new mongoose.Schema({
    hint: {
        type: String,
        require: true
    },
    answer: {
        type: String,
        require: true
    },
    round: {
        type: Number,
        require: true
    }
})


module.exports = mongoose.model("rounds", roundSchema);