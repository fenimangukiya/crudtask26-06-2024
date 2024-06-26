const mongoose = require('mongoose')

const o_schema = mongoose.Schema({
    o_movie_name: {
        type: String,
        true: true
    },
    o_movie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})

const o = mongoose.model("O",o_schema)
module.exports = o















