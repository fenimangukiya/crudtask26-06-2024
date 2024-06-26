const mongoose = require('mongoose')

const q_schema = mongoose.Schema({
    q_movie_name: {
        type: String,
        true: true
    },
    q_movie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})

const q = mongoose.model("Q",q_schema)
module.exports = q



