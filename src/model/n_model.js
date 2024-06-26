const mongoose = require('mongoose')

const n_schema = mongoose.Schema({
    n_movie_name: {
        type: String,
        true: true
    },
    n_movie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})

const n = mongoose.model("N",n_schema)
module.exports = n





















