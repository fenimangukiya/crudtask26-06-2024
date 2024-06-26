const mongoose = require('mongoose')

const j_schema = mongoose.Schema({
    j_movie_name: {
        type: String,
        true: true
    },
    j_movie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})

const j = mongoose.model("J",j_schema)
module.exports = j






































