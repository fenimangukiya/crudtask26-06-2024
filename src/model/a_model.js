const mongoose = require('mongoose')

const a_schema = mongoose.Schema({
    a_movie_name: {
        type: String,
        true: true
    },
    a_movie_rating : {
        type: Number,
        default : 0
    }
},{
    timestamps: true
})

const a = mongoose.model('A',a_schema)
module.exports = a











