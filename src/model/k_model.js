const mongoose = require('mongoose')

const k_schema = mongoose.Schema({
    k_movie_name: {
        type: String,
        true: true
    },
    k_movie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})

const k = mongoose.model('K',k_schema)
module.exports = k


