const mongoose = require('mongoose')

const x_schema = mongoose.Schema({
    x_movie_name: {
        type: String,
        true: true
    },
    x_movie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})

const x = mongoose.model('X',x_schema)
module.exports = x




















