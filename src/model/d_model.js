const mongoose = require('mongoose')

const d_schema = mongoose.Schema({
    d_movie_name: {
        type: String,
        true: true
    },
    d_movie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})

const d = mongoose.model('D',d_schema)
module.exports = d


















